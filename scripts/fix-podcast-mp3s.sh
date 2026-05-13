#!/usr/bin/env bash
# Re-encode MP3 files in public/audio/ to fix broken Xing/Info headers
# and keep file size under 25 MB.
#
# TTS tools often produce MP3s with incorrect frame counts in the Xing header,
# causing browsers to display a shorter duration than the actual audio length.
# We also enforce a 25 MB ceiling per file (target 24 MB for headroom).
#
# Requires: ffmpeg with libmp3lame, ffprobe
# Usage: ./scripts/fix-podcast-mp3s.sh [file.mp3 ...]
#   No arguments = process all MP3s in public/audio/

set -euo pipefail

AUDIO_DIR="$(cd "$(dirname "$0")/../public/audio" && pwd)"

# Target 24 MB so we land safely under the 25 MB hard limit even after
# ffmpeg/libmp3lame variance.
TARGET_BYTES=$((24 * 1024 * 1024))
MIN_BITRATE_KBPS=64    # speech floor — below this it starts to crackle
MAX_BITRATE_KBPS=128   # don't inflate already-compact files

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

  duration=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f")
  # Bitrate (kbps) that lands at ~24 MB: target_bits / duration / 1000
  bitrate=$(awk -v t="$TARGET_BYTES" -v d="$duration" \
    'BEGIN { printf("%d", (t * 8) / (d * 1000)) }')

  if [ "$bitrate" -gt "$MAX_BITRATE_KBPS" ]; then
    bitrate=$MAX_BITRATE_KBPS
  fi

  if [ "$bitrate" -lt "$MIN_BITRATE_KBPS" ]; then
    echo "ERROR: $name is too long (${duration}s) to fit under 25 MB at ${MIN_BITRATE_KBPS}k." >&2
    echo "       Shorten the dialog or re-encode as mono manually." >&2
    exit 1
  fi

  echo "Re-encoding: $f (duration ${duration}s, bitrate ${bitrate}k)"
  ffmpeg -y -i "$f" -c:a libmp3lame -b:a "${bitrate}k" "$tmp" 2>/dev/null
  cp "$tmp" "$f"
  rm "$tmp"

  # Verify the 25 MB hard limit — guard against ffmpeg overshooting.
  size_bytes=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f")
  limit_bytes=$((25 * 1024 * 1024))
  if [ "$size_bytes" -gt "$limit_bytes" ]; then
    echo "ERROR: $name is $size_bytes bytes after re-encode, over the 25 MB limit." >&2
    exit 1
  fi

  size_mb=$(awk -v b="$size_bytes" 'BEGIN { printf("%.1f", b / 1024 / 1024) }')
  echo "  Done: $name (${size_mb} MB)"
done

echo "All MP3s re-encoded with correct headers."
