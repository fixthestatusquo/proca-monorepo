defmodule ProcaWeb.Plugs.Helper do
  @moduledoc """
  Helpers for returning errors from plugs. If the request is JSON, the error is structured like GQL error.
  """
  alias Plug.Conn
  import Phoenix.Controller, only: [get_format: 1, json: 2, text: 2]

  def error_halt(conn = %Conn{}, http_code, short_code, explanation \\ nil)
      when is_bitstring(short_code) and is_integer(http_code) do
    conn
    |> Conn.put_status(http_code)
    |> put_error(http_code, short_code, explanation)
    |> Conn.halt()
  end

  defp put_error(conn, _http_code, short_code, explanation) do
    case get_format(conn) do
      "json" ->
        json(conn, %{
          data: nil,
          errors: [
            %{
              message: explanation || short_code,
              extensions: %{
                code: short_code
              }
            }
          ]
        })

      _other ->
        text(
          conn,
          case explanation do
            nil -> short_code
            e -> "#{short_code}: #{e}"
          end
        )
    end
  end
end
