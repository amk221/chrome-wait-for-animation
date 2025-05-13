#!/bin/bash

"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless \
  --v=0 \
  --enable-logging \
  --user-data-dir="./chrome" \
  index.html