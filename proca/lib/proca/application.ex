defmodule Proca.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    # List all child processes to be supervised
    children = [
      # Start the Ecto repository
      Proca.Repo,
      # Start the PubSub server
      {Phoenix.PubSub, name: Proca.PubSub},
      # Start the endpoint when the application starts
      ProcaWeb.Endpoint,
      {
        Proca.Server.Encrypt,
        Application.get_env(:proca, Proca)[:org_name]
      },
      {
        Proca.Server.Stats,
        Application.get_env(:proca, Proca)[:stats_sync_interval]
      }
      # Starts a worker by calling: Proca.Worker.start_link(arg)
      # {Proca.Worker, arg},
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Proca.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    ProcaWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
