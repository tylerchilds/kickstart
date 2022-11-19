#!/bin/sh
deno cache --unstable --lock=client.lock.json --lock-write system/main.js
deno cache --unstable --lock=server.lock.json --lock-write server.js
