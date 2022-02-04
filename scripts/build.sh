#!/bin/sh
deno bundle --unstable ./src/brain.js ./dist/brain.bundle.js

cat src/head.html > editor.html
echo '<script>' >> editor.html
cat dist/brain.bundle.js >> editor.html
echo '</script>' >> editor.html
cat src/body.html >> editor.html
