defmodule ProcaWeb.EncryptionController do
  use ProcaWeb, :live_view
  alias Proca.Org
  alias Proca.PublicKey
  alias Proca.Repo
  alias Ecto.Changeset
  import Ecto.Query

  def render(assigns) do
    Phoenix.View.render(ProcaWeb.DashView, "encryption.html", assigns)
  end

  def handle_event("pk_generate", _, socket) do
    org = socket.assigns.org

    new_pk =
      PublicKey.build_for(org, "human friendly name")
      |> changeset_to_base64
      |> Map.put(:action, :insert)

    {
      :noreply,
      socket
      |> assign(:new_pk, new_pk)
    }
  end

  def handle_event("pk_save", %{"public_key" => data}, socket) do
    org = socket.assigns.org

    pk =
      PublicKey.changeset(%PublicKey{}, Map.delete(data, "private"))
      |> Changeset.put_assoc(:org, org)
      |> Map.put(:action, :insert)

    socket =
      if pk.valid? do
        with {:ok, decoded_pk} <- changeset_from_base64(pk),
             {:ok, _saved_pk} <- save_as_only_active(decoded_pk, org) do
          empty_pk = PublicKey.changeset(%PublicKey{}, %{})

          socket
          |> put_flash(:info, "Key saved")
          |> assign_org(socket.assigns[:org].id)
          |> assign(:new_pk, empty_pk)
        else
          {:error, chst} -> assign(socket, :new_pk, chst)
        end
      else
        socket
        |> assign(:new_pk, pk)
      end

    {:noreply, socket}
  end

  def save_as_only_active(ch, org) do
    ch = Changeset.put_assoc(ch, :org, org)

    case Repo.insert(ch) do
      {:ok, saved} ->
        now = DateTime.utc_now()

        Repo.update_all(
          from(pk in PublicKey, where: pk.org_id == ^org.id and pk.id != ^saved.id),
          set: [expired_at: now]
        )

        {:ok, saved}

      {:error, ch} ->
        ch
    end
  end

  def mount(_params, session, socket) do
    socket = mount_user(socket, session)

    if socket.redirected do
      {:ok, socket}
    else
      {:ok,
       socket
       |> assign_org(socket.assigns[:staffer].org_id)
       |> assign(:new_pk, PublicKey.changeset(%PublicKey{}, %{}))}
    end
  end

  def assign_org(socket, org_id) do
    org = Org.get_by_id(org_id, [:public_keys])

    socket
    |> assign(:org, org)
  end

  def session_expired(socket) do
    {:noreply, socket}
  end

  def changeset_to_base64(ch = %{changes: pk}) do
    %{
      ch
      | changes: %{
          pk
          | private: PublicKey.base_encode(pk.private),
            public: PublicKey.base_encode(pk.public)
        }
    }
  end

  def changeset_from_base64(ch = %{changes: pk = %{public: public}}) do
    bad_format_err = "must be 32 bytes, Base64url encoded (RFC4648, no padding)"

    with {:ok, pub} <- PublicKey.base_decode(public),
         32 <- byte_size(pub) do
      {
        :ok,
        %{ch | changes: %{pk | public: pub}}
      }
    else
      _ -> {:error, Changeset.add_error(ch, :public, bad_format_err)}
    end
  end
end
