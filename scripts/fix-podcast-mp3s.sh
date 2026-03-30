#!/usr/bin/env bash
# Re-encode MP3 files in public/audio/ to fix broken Xing/Info headers.
# TTS tools often produce MP3s with incorrect frame counts in the Xing header,
# causing browsers to display a shorter duration than the actual audio length.
#
# Requires: ffmpeg with libmp3lame
# Usage: ./scripts/fix-podcast-mp3s.sh [file.mp3 ...]
#   No arguments = process all MP3s in public/audio/

set -euo pipefail

AUDIO_DIR="$(cd "$(dirname "$0")/../public/audio" && pwd)"

files=()
if [ $# -gt 0 ]; then
  files=("$@")
else
  for f in "$AUDIO_DIR"/*.mp3; do
    [ -f "$f" ] && files+=("$f")
  done
fi

if [ ${#files[@]} -eq 0 ]; then
  echo "No MP3 files found."
  exit 0
fi

for f in "${files[@]}"; do
  name="$(basename "$f")"
  tmp="/tmp/fix-mp3-$$-${name}"
  echo "Re-encoding: $f"
  ffmpeg -y -i "$f" -c:a libmp3lame -b:a 128k "$tmp" 2>/dev/null
  cp "$tmp" "$f"
  rm "$tmp"
  echo "  Done: $name"
done

echo "All MP3s re-encoded with correct headers."
