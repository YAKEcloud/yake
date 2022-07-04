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
grep -lr GitRepository flux/ | while IFS= read -r file; do
    sed s/GitRepository/Bucket/ "$file" | mc pipe -q "$MC_ALIAS/$BUCKET/$file"
done

# In case you want to use a local version of the 23ke-charts, you can clone the 23ke-charts repository
# to the folder "23ke-charts-dev", this script will detect the folder and use the local
# version instead. that way you can quickly alter the charts to use a development image or
# anything else youd like to change quickly.
if [[ -d 23ke-charts-dev ]]
then
    echo "Using local charts-folder  ./23ke-charts-dev"
    for file in $(grep -lr 23ke-charts base-install); do
            cat $file | yq eval '.spec.chart.spec |= (.chart = "./23ke-charts-dev/" + .chart | del .version) |= .sourceRef |= (.kind = "Bucket" | .name  = "23ke" )' - |   mc pipe $MC_ALIAS/$BUCKET/$file
    done
    mc cp -q --recursive 23ke-charts-dev/charts/ $MC_ALIAS/$BUCKET/23ke-charts-dev/
fi

echo "23KE Bucket ready ✅"
