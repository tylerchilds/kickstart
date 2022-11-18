#!/bin/sh
mkdir -p build

deno bundle ./system/main.js ./build/bundle.js
