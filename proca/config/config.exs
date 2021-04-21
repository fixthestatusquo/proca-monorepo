# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :proca,
  ecto_repos: [Proca.Repo]

# Configures the endpoint
config :proca, ProcaWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "AW/2W3wBPlNgOj39H7IGyyI9Ycp+hScpt/oaQTvE6m2fGnrxHKVUR3AVhLRDq/QL",
  render_errors: [view: ProcaWeb.ErrorView, accepts: ~w(html json)],
  pubsub_server: Proca.PubSub,
  live_view: [signing_salt: "uM50prEz688OESGJwzwxmFgxf5ZRaw4w"]

config :proca, Proca,
  org_name: "test",
  stats_sync_interval: 0

config :proca, Proca.Supporter,
  fpr_seed: "4xFc6MsafPEwc6ME"

config :proca, Proca.Server.Plumbing,
  url: "amqp://proca:proca@rabbitmq.docker/proca"

# Configures Elixir's Logger
config :logger,
  backends: [:console, Sentry.LoggerBackend],
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Disable lager logging (included by rabbitmq app)
config :lager, handlers: []

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :proca, :pow,
  user: Proca.Users.User,
  repo: Proca.Repo,
  web_module: ProcaWeb,
  current_user_assigns_key: :user

config :ex_aws, :hackney_opts,
  follow_redirect: true,
  recv_timeout: 10_000

config :ex_aws_sqs, parser: ExAws.SQS.SweetXmlParser


config :sentry,
  environment_name: Mix.env(),
  included_environments: [:prod],
  enable_source_code_context: true,
  root_source_code_path: File.cwd!()

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"

