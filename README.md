# 98puppies

98puppies is the microservice bridge for the plan98 entity component system.

## Materials

Install rust:
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Install deno:
```
cargo install deno --locked
```

Install tauri:
```
cargo install tauri-cli
```

## Building

Development requires tauri.app, deno.land, and nodejs.org. Install those dependencies before proceeding.

```
deno task start
```

Packaging

```
deno task build
```

Edging

```
deno task start-edge
```
