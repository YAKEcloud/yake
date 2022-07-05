#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

# 23KE Bucket
# Let's Encrypt Staging CA needed.
mkdir -p ~/.mc/certs/CAs/
cp hack/ci/misc/le-staging.pem ~/.mc/certs/CAs/le-staging.pem
cp hack/ci/misc/local-ca.pem ~/.mc/certs/CAs/local-ca.pem

echo "23KE Bucket upload"

mc ls "$MC_ALIAS/$BUCKET" &> /dev/null || mc mb "$MC_ALIAS/$BUCKET"
mc cp -q kustomization.yaml "$MC_ALIAS/$BUCKET"
mc cp -q --recursive flux "$MC_ALIAS/$BUCKET"
mc cp -q --recursive base-install "$MC_ALIAS/$BUCKET"
mc cp -q --recursive base-config "$MC_ALIAS/$BUCKET"

# we now upload packet versions which use a bucket instead of the GitRepository
for file in $(grep --exclude-dir=hack --exclude-dir=env-template -lr GitRepository . | sed 's/^\.\///'); do
    cat $file | sed s/GitRepository/Bucket/ | mc pipe $MC_ALIAS/$BUCKET/$file 
done

echo "23KE Bucket ready ✅"
