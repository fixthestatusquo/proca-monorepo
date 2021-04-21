defmodule ProcaWeb.ConnCase do
  @moduledoc """
  This module defines the test case to be used by
  tests that require setting up a connection.

  Such tests rely on `Phoenix.ConnTest` and also
  import other functionality to make it easier
  to build common data structures and query the data layer.

  Finally, if the test case interacts with the database,
  we enable the SQL sandbox, so changes done to the database
  are reverted at the end of every test. If you are using
  PostgreSQL, you can even run database tests asynchronously
  by setting `use ProcaWeb.ConnCase, async: true`, although
  this option is not recommended for other databases.
  """

  use ExUnit.CaseTemplate

  using do
    quote do
      # Import conveniences for testing with connections
      import Plug.Conn
      import Phoenix.ConnTest
      alias ProcaWeb.Router.Helpers, as: Routes

      # The default endpoint for testing
      @endpoint ProcaWeb.Endpoint

      def auth_api_post(conn, query, user, password) do
        conn
        |> put_req_header("authorization", "Basic " <> Base.encode64(user <> ":" <> password))
        |> post("/api", %{query: query})
      end


      def auth_api_post(conn, query, user) do
        auth_api_post(conn, query, user, user)
      end

      def api_post(conn, query) do
        conn
        |> post("/api", %{query: query})
      end

      def is_success(res) do
        assert res["errors"] == nil
        res
      end

      def has_error_message(res, message) do
        assert length(Map.get(res, "errors", [])) > 0
        assert Enum.any?(Map.get(res, "errors", []), fn
          %{"message" => msg} -> msg == message
          _ -> false
        end)
        res
      end
    end
  end

  setup tags do
    :ok = Ecto.Adapters.SQL.Sandbox.checkout(Proca.Repo)

    unless tags[:async] do
      Ecto.Adapters.SQL.Sandbox.mode(Proca.Repo, {:shared, self()})
    end

    {:ok, conn: Phoenix.ConnTest.build_conn()}
  end
end
