#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

# 23KE Config-Bucket
echo -e "Config Bucket upload"

rclone -q mkdir $REMOTE:$CONFIG_BUCKET
rclone -q sync hack/ci/dev-env $REMOTE:$CONFIG_BUCKET

echo -e "Config Bucket ready  ✅"

# 23KE Backup-Bucket
echo -e "Backup Bucket creation"

rclone -q mkdir $REMOTE:$BACKUP_BUCKET

echo -e "Backup Bucket ready  ✅"
