defmodule Proca.Stage.Support do
  @moduledoc """
  Support functions for job processing in Broadway. Most imporatntly functions
  to build RabbitMQ events containing enough data to be processed internally
  (system) or externally (custom).
  """

  alias Proca.{Action, Supporter, PublicKey, Contact, Field, Confirm}
  alias Proca.Repo
  import Ecto.Query, only: [from: 2]
  alias Broadway.Message

  # XXX for now we assume that only ActionPage owner does the processing, but i think it should be up to
  # the AP.delivery flag

  def bulk_actions_data(action_ids, stage \\ :deliver) do
    from(a in Action,
      where: a.id in ^action_ids,
      preload: [
        [supporter: [contacts: [:public_key, :sign_key]]],
        :action_page,
        :campaign,
        :source,
        :fields
      ]
    )
    |> Repo.all()
    |> Enum.map(fn a -> action_data(a, stage) end)
  end

  defp action_data_tracking(%Action{source: s}) when not is_nil(s) do
    %{
      "source" => s.source,
      "medium" => s.medium,
      "campaign" => s.campaign,
      "content" => s.content,
      "location" => s.location
    }
  end

  defp action_data_tracking(_) do
    nil
  end

  defp action_data_contact(
         %Supporter{
           fingerprint: ref,
           first_name: first_name,
           email: email
         },
         %Contact{
           payload: payload,
           crypto_nonce: nonce,
           public_key: %PublicKey{public: public},
           sign_key: %PublicKey{public: sign}
         }
       ) do
    %{
      "ref" => Supporter.base_encode(ref),
      "firstName" => first_name,
      "email" => email,
      "payload" => Contact.base_encode(payload),
      "nonce" => Contact.base_encode(nonce),
      "publicKey" => PublicKey.base_encode(public),
      "signKey" => PublicKey.base_encode(sign)
    }
  end

  defp action_data_contact(
         %Supporter{
           fingerprint: ref,
           first_name: first_name,
           email: email,
           area: area
         },
         %Contact{
           payload: payload
         }
       ) do
    %{
      "ref" => Supporter.base_encode(ref),
      "firstName" => first_name,
      "area" => area,
      "email" => email,
      "payload" => payload
    }
  end

  defp action_data_contact(
         %Supporter{
           fingerprint: ref,
           first_name: first_name,
           email: email,
           area: area
         },
         contact
       )
       when is_nil(contact) do
    %{
      "ref" => Supporter.base_encode(ref),
      "firstName" => first_name,
      "email" => email,
      "area" => area,
      "payload" => ""
    }
  end

  def action_data(action, stage \\ :deliver) do
    action =
      Repo.preload(
        action,
        [
          [supporter: [contacts: [:public_key, :sign_key]]],
          :action_page,
          :campaign,
          :source,
          :fields,
          :donation
        ]
      )

    # XXX we should be explicit about Contact org_id recipient, because for unencrypted contacts we do not have
    # the public_key!
    contact =
      Enum.find(action.supporter.contacts, fn c -> c.org_id == action.action_page.org_id end)

    privacy =
      if not is_nil(contact) and action.with_consent do
        %{
          "communication" => contact.communication_consent,
          "givenAt" =>
            contact.inserted_at |> to_iso8601()
        }
      else
        nil
      end

    %{
      "actionId" => action.id,
      "actionPageId" => action.action_page_id,
      "campaignId" => action.campaign_id,
      "orgId" => action.action_page.org_id,
      "action" => %{
        "actionType" => action.action_type,
        "fields" => Field.list_to_map(action.fields),
        "createdAt" => action.inserted_at |> to_iso8601()
      } |> put_action_donation(action.donation),
      "actionPage" => %{
        "locale" => action.action_page.locale,
        "name" => action.action_page.name,
        "thankYouTemplateRef" => action.action_page.thank_you_template_ref
      },
      "campaign" => %{
        "name" => action.campaign.name,
        "title" => action.campaign.title,
        "externalId" => action.campaign.external_id
      },
      "contact" => action_data_contact(action.supporter, contact),
      "privacy" => privacy,
      "tracking" => action_data_tracking(action)
    }
    |> put_action_meta(stage)
  end

  def put_action_meta(map, stage) do
    map
    |> Map.put("schema", "proca:action:1")
    |> Map.put("stage", Atom.to_string(stage))
  end

  def put_action_donation(action_map, donation = %Action.Donation{}) do 
    donation_map = %{
      "payload" => donation.payload,
      "amount" => donation.amount,
      "currency" => donation.currency,
      "frequencyUnit" => donation.frequency_unit
    }

    donation_map = if is_nil(donation.schema), do: donation_map, else: Map.put(donation_map, "schema", Atom.to_string(donation.schema))

    action_map 
    |> Map.put("donation", donation_map)
  end

  def put_action_donation(action_map, donation) when is_nil(donation), do: action_map

  defp link_verb(:confirm), do: "accept"
  defp link_verb(:reject), do: "reject"

  def supporter_link(%Action{id: action_id, supporter: %{fingerprint: fpr}}, op) do 
    ref = Supporter.base_encode(fpr)

    ProcaWeb.Router.Helpers.confirm_url(ProcaWeb.Endpoint, :supporter, action_id, link_verb(op), ref)
  end

  def supporter_link(action_id, contact_ref, op) when is_integer(action_id) and is_bitstring(contact_ref) do 
    ProcaWeb.Router.Helpers.confirm_url(ProcaWeb.Endpoint, :supporter, action_id, link_verb(op), contact_ref)
  end

  def confirm_link(%Confirm{code: code, email: email}, op) when is_bitstring(code) and is_bitstring(email) do 
    ProcaWeb.Router.Helpers.confirm_url(ProcaWeb.Endpoint, :confirm, link_verb(op), code, email: email)
  end

  def confirm_link(%Confirm{code: code, object_id: id}, op) when is_bitstring(code) and is_number(id) do 
    ProcaWeb.Router.Helpers.confirm_url(ProcaWeb.Endpoint, :confirm, link_verb(op), code, id: id)
  end

  def confirm_link(%Confirm{code: code}, op) when is_bitstring(code) do 
    ProcaWeb.Router.Helpers.confirm_url(ProcaWeb.Endpoint, :confirm, link_verb(op), code)
  end

  def ignore(message = %Broadway.Message{}, reason \\ "ignored") do 
    message
    |> Message.configure_ack(on_failure: :ack)
    |> Message.failed(reason)
  end

  def to_iso8601(naivedatetime) do 
    naivedatetime
    |> DateTime.from_naive!("Etc/UTC")
    |> DateTime.to_iso8601()
  end
end
