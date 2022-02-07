#!/bin/sh
deno bundle --unstable ./src/brain.js ./dist/brain.bundle.js

cat src/head.html > dist/editor.html
echo '<script>' >> dist/editor.html
cat dist/brain.bundle.js >> dist/editor.html
echo '</script>' >> dist/editor.html
cat src/body.html >> dist/editor.html
