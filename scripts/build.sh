#!/bin/sh
mkdir -p build

deno bundle --unstable ./src/brain.js ./build/brain.bundle.js
deno bundle ./src/tag.js ./build/tag.bundle.js

cat src/head.html > build/editor.html
echo '<script>' >> build/editor.html
cat build/brain.bundle.js >> build/editor.html
echo '</script>' >> build/editor.html
cat src/body.html >> build/editor.html
