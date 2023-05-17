#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

# 23KE Backup-Bucket
echo -e "Backup Bucket creation"

$RCLONE -q mkdir $REMOTE:$BACKUP_BUCKET

echo -e "Backup Bucket ready  ✅"
