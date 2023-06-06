#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "23KE Bucket upload"

tmpDir=$(hack/release/make-tmp-release-dir.sh Bucket)

rclone -q mkdir $REMOTE:$BUCKET
rclone -q sync $tmpDir $REMOTE:$BUCKET

echo "23KE Bucket ready ✅"
