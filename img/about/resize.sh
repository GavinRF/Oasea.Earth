#!/bin/bash
for f in *.png; do
sips -Z 1920 "$f"
echo "Done: $f"
done
