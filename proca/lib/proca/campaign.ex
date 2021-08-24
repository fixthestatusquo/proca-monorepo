defmodule Proca.Campaign do
  @moduledoc """
  Campaign represents a political goal and consists of many action pages. Belongs to one Org (so called "leader org").
  """

  use Ecto.Schema
  alias Proca.{Repo, Campaign, ActionPage}
  import Ecto.Changeset
  import Ecto.Query

  schema "campaigns" do
    field :name, :string
    field :external_id, :integer
    field :title, :string
    field :force_delivery, :boolean, default: false
    field :public_actions, {:array, :string}, default: []
    field :transient_actions, {:array, :string}, default: []
    field :contact_schema, ContactSchema, default: :basic
    field :config, :map, default: %{}

    belongs_to :org, Proca.Org
    has_many :action_pages, Proca.ActionPage

    timestamps()
  end

  @doc false
  def changeset(campaign, attrs) do
    campaign
    |> cast(attrs, [:name, :title, :external_id, :config, :contact_schema])
    |> validate_required([:name, :title, :contact_schema])
    |> validate_format(:name, ~r/^([\w\d_-]+$)/)
    |> unique_constraint(:name)
  end

  def upsert(org, attrs = %{external_id: id}) when not is_nil(id) do
    (get(org: org, external_id: id) || %Campaign{contact_schema: org.contact_schema})
    |> Campaign.changeset(attrs)
    |> put_assoc(:org, org)
  end

  def upsert(org, attrs = %{name: cname}) do
    (get(org: org, name: cname) || %Campaign{contact_schema: org.contact_schema})
    |> Campaign.changeset(attrs)
    |> put_assoc(:org, org)
  end

  def get(queryable, [{:org, org} | criteria]) do 
    from(c in queryable, where: c.org_id == ^org.id)
    |> get(criteria)
  end

  def get(queryable, [name: name]) do 
    from(c in queryable, where: c.name == ^name)
    |> preloads()
    |> Repo.one()
  end

  def get(queryable, [external_id: id]) do 
    from(c in queryable, where: c.external_id == ^id) 
    |> preloads()
    |> Repo.one()
  end

  def get(queryable, [id: id]) do 
    from(c in queryable, where: c.id == ^id) 
    |> preloads()
    |> Repo.one()
  end

  def get(crit) when is_list(crit), do: get(Campaign, crit)

  def preloads(queryable) do 
    queryable |> preload([c], [:org])
  end

  def select_by_org(org) do
    from(c in Campaign,
      left_join: ap in ActionPage,
      on: c.id == ap.campaign_id,
      where: ap.org_id == ^org.id or c.org_id == ^org.id
    )
    |> distinct(true)
  end

  def get_with_local_pages(campaign_id) when is_integer(campaign_id) do 
    from(c in Campaign, where: c.id == ^campaign_id,
      left_join: a in assoc(c, :action_pages),
      on: a.org_id == c.org_id,
      order_by: [desc: a.id],
      preload: [:org, action_pages: a])
    |> Repo.one()
  end

  def get_with_local_pages(campaign_name) when is_bitstring(campaign_name) do 
    from(c in Campaign, where: c.name == ^campaign_name,
      left_join: a in assoc(c, :action_pages),
      on: a.org_id == c.org_id,
      order_by: [desc: a.id],
      preload: [:org, action_pages: a])
    |> Repo.one()
  end

  def public_action_keys(%Campaign{public_actions: public_actions}, action_type) 
    when is_bitstring(action_type) 
    do 
    public_keys = public_actions 
    |> Enum.map(fn p -> String.split(p, ":") end)
    |> Enum.map(fn [at, f | _] -> if at == action_type, do: f, else: nil end)
    |> Enum.reject(&is_nil/1)
  end
end
