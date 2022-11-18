#!/bin/sh
mkdir -p build

deno bundle ./src/main.js ./build/bundle.js
