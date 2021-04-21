defmodule Proca.Campaign do
  use Ecto.Schema
  import Ecto.Changeset

  schema "campaigns" do
    field :name, :string
    field :title, :string
    field :force_delivery, :boolean
    belongs_to :org, Proca.Org
    has_many :action_pages, Proca.ActionPage

    timestamps()
  end

  @doc false
  def changeset(campaign, attrs) do
    campaign
    |> cast(attrs, [:name, :title])
    |> validate_required([:name, :title])
    |> validate_format(:name, ~r/^([\w\d_-]+$)/)
  end
end
