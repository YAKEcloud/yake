#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

# 23KE Config-Bucket
echo -e "Config Bucket upload"

mc ls "$MC_ALIAS/$CONFIG_BUCKET" &> /dev/null || mc mb "$MC_ALIAS/$CONFIG_BUCKET"
mc cp -q --recursive hack/ci/dev-env "$MC_ALIAS/$CONFIG_BUCKET"

echo -e "Config Bucket ready  ✅"
