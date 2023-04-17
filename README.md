# Kickstand

A minimalistic creative suite.

```
Write manuscripts, memos, lyrics.
Play synthetic instruments.
Code interactive experiences.
Publish to the web.
```

> The earth provies enough to satisfy every man's needs, but not every man's greed.

- Gandhi

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
