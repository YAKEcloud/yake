#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "23KE Bucket upload"

rclone -q mkdir $REMOTE:$BUCKET
rclone -q sync kustomization.yaml $REMOTE:$BUCKET
rclone -q sync flux $REMOTE:$BUCKET/flux
rclone -q sync base-install $REMOTE:$BUCKET/base-install
rclone -q sync base-config $REMOTE:$BUCKET/base-config


# we now upload packet versions which use a bucket instead of the GitRepository
for file in $(grep --exclude-dir=hack --exclude-dir=env-template -lr GitRepository . | sed 's/^\.\///'); do
    cat $file | sed s/GitRepository/Bucket/ | rclone -q rcat $REMOTE:$BUCKET/$file 
done

# In case you want to use a local version of the 23ke-charts, you can clone the 23ke-charts repository
# to the folder "23ke-charts-dev", this script will detect the folder and use the local
# version instead. that way you can quickly alter the charts to use a development image or
# anything else youd like to change quickly.
if [[ -d 23ke-charts-dev ]]
then
    echo "Using local charts-folder  ./23ke-charts-dev"
    for file in $(grep -lr 23ke-charts base-install); do
            cat $file | yq eval '.spec.chart.spec |= (.chart = "./23ke-charts-dev/" + .chart | del .version) |= .sourceRef |= (.kind = "Bucket" | .name  = "23ke" )' - | rclone -q rcat $REMOTE:$BUCKET/$file
    done
    rclone sync 23ke-charts-dev/charts/ $REMOTE:$BUCKET/23ke-charts-dev/
fi

echo "23KE Bucket ready ✅"
