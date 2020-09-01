defmodule Proca.Users.User do
  use Ecto.Schema
  use Pow.Ecto.Schema
  alias Proca.Users.StrongPassword

  schema "users" do
    pow_user_fields()

    has_many :staffers, Proca.Staffer

    timestamps()
  end

  @pow_config pow_config  = [otp_app: :proca]

  def pow_config do
    @pow_config
  end

  def create(email) do
    case Pow.Operations.create(params_for(email), pow_config)
      do
      {:ok, user} -> user
      _ -> nil
    end
  end

  def params_for(email) do
    pwd = StrongPassword.generate()
    %{
      email: email,
      password: pwd,
      password_confirmation: pwd
    }
  end
end
