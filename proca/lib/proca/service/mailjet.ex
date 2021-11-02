defmodule Proca.Service.Mailjet do
  @moduledoc """
  Mailjet Email Backend

  Templates:
  - Use transactional templates (not campaign)
  - Test thoroughly with their preview - MJ provides no debugging otherwise (just HTTP500 on send)
  - Fields can have underscores
  - Use {{var:foo_bar:"default"}} even with an empty default!
  - You cannot use default in some places: for example in attributes (href value).
  - You can conditionally show a block: use foo:"" in the field - but you need to use “greater then” + start of the string - no way to input “not empty” condition
  - The links prohibit use of default "" - so you must provide or hide it.
  - Use {% if var:givenname:"" %} and {% endif %} for conditional block

  """

  @behaviour Proca.Service.EmailBackend

  alias Proca.{Org, Service}
  alias Proca.Service.{EmailTemplate, EmailBackend}
  alias Bamboo.{MailjetAdapter, MailjetHelper, Email}
  import Logger

  @api_url "https://api.mailjet.com/v3"
  @template_path "/REST/template"

  @impl true
  def supports_templates?(_org) do
    true
  end

  @impl true
  def list_templates(%Org{template_backend: %Service{} = srv}) do
    case Service.json_request(srv, "#{@api_url}#{@template_path}", auth: :basic) do
      {:ok, 200, %{"Data" => templates}} -> {:ok, templates |> Enum.map(&template_from_json/1)}
      {:ok, 401} -> {:error, "not authenticated"}
      {:error, err} -> {:error, err}
      x -> 
        error("Mailjet List Template API unexpected result: #{inspect(x)}")
        {:error, "unexpected return from mailjet list templates"}
    end
  end

  defp template_from_json(data) do
    %EmailTemplate{
      ref: Integer.to_string(data["ID"]),
      name: data["Name"]
    }
  end

  @impl true
  def upsert_template(_org, _template) do
    {:error, "not implemneted"}
  end

  @impl true
  def get_template(_org, _template) do
    {:error, "not implemented"}
  end

  @impl true
  def put_recipients(email, recipients) do
    email
    |> Email.to([])
    |> Email.cc([])
    |> Email.bcc(
      Enum.map(
        recipients,
        fn %{first_name: name, email: eml} -> {name, eml} end
      )
    )
    |> MailjetHelper.put_recipient_vars(Enum.map(recipients, & &1.fields))
  end

  @impl true
  def put_template(email, %EmailTemplate{ref: ref}) do
    email
    |> MailjetHelper.template(ref)
    |> MailjetHelper.template_language(true)
  end

  def put_template(email, %EmailTemplate{subject: subject, html: html, text: text}) 
    when is_bitstring(subject) and (is_bitstring(html) or is_bitstring(text)) do 
    
    %{email | subject: subject, html_body: html, text_body: text}
  end

  @impl true
  def put_reply_to(email, reply_to_email) do
    email
    |> Email.put_header("Reply-To", reply_to_email)
  end

  @impl true
  def deliver(email, %Org{email_backend: srv}) do
    try do
      MailjetAdapter.deliver(email, config(srv))
    rescue
      e in MailjetAdapter.ApiError ->
        reraise EmailBackend.NotDelivered.exception(e), __STACKTRACE__
    end
  end

  def config(%Service{name: :mailjet, user: u, password: p}) do
    %{
      api_key: u,
      api_private_key: p
    }
  end
end
