
0. Add :debugger to extra applications in mix.exs

      extra_applications: [ ... ,:debugger]

1. run utils/epmd-tunnel host app-name
2. copy the iex command line and:

```
iex ...args... -S mix

Node.connect(:"proca@proca.node")

```

```
➜  proca git:(main) ✗ iex --name me@proca.node --cookie MAGICCOOKIEHERE --hidden -S mix 

Erlang/OTP 23 [erts-11.2] [source] [64-bit] [smp:4:4] [ds:4:4:10] [async-threads:1] [hipe]

[error] calling logger:remove_handler(default) failed: :error {:badmatch, {:error, {:not_found, :default}}}
Interactive Elixir (1.11.2) - press Ctrl+C to exit (type h() ENTER for help)
iex(me@proca.node)1> [warn] AMQP 0-9-1 client call timeout was 60000 ms, is updated to a safe effective value of 70000 ms
 
nil
iex(me@proca.node)2> Node.connect(:"proca@proca.node")
true
iex(me@proca.node)3> :int.ni(ProcaWeb.Resolvers.Action)
{:module, ProcaWeb.Resolvers.Action}
iex(me@proca.node)4> :debugger.start(:global)
{:ok, #PID<0.711.0>}
iex(me@proca.node)5> :int.break(ProcaWeb.Resolvers.Action, 86)
:ok
iex(me@proca.node)6> 
```

