#!/bin/bash
for f in *.png; do
pngquant --force --ext .png --quality=80-95 "$f"
echo "Done: $f"
done
