#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "23KE Bucket upload"

rclone -q mkdir $REMOTE:$BUCKET
rclone -q sync kustomization.yaml $REMOTE:$BUCKET
rclone -q sync flux $REMOTE:$BUCKET/flux
rclone -q sync pre-gardener $REMOTE:$BUCKET/pre-gardener
rclone -q sync flux-system $REMOTE:$BUCKET/flux-system
rclone -q sync gardener $REMOTE:$BUCKET/gardener

# we now upload packet versions which use a bucket instead of the GitRepository
for file in $(grep --exclude-dir=hack --exclude-dir=flux-system -lr GitRepository . | sed 's/^\.\///'); do
    cat $file | sed s/GitRepository/Bucket/ | rclone -q rcat $REMOTE:$BUCKET/$file
done

# In case you need to modify and test a chart, you can copy/symlink the required charts
# to the folder "23ke-charts-dev". Each subfolder needs to be named like the chart in
# the repository, f.e. "gardener-kube-apiserver" and in that directly contain the chart
# (values.yaml, Chart.yaml, templates folder etc).
# This script will detect the folder and use the local version instead, which you can
# quickly modify and re-upload with this script.
if [[ -d ./23ke-charts-dev ]]; then
  for dir in ./23ke-charts-dev/*/; do
      echo "Using local charts-folder $dir"
      for file in $(grep -lr "chart: $(basename $dir)" gardener); do
              cat $file | yq eval '.spec.chart.spec |= (.chart = "./23ke-charts-dev/" + .chart | del .version | .reconcileStrategy = "Bucket") |= .sourceRef |= (.kind = "Bucket" | .name  = "23ke" )' - | rclone -q rcat $REMOTE:$BUCKET/$file
      done
      rclone -q sync -L 23ke-charts-dev/ $REMOTE:$BUCKET/23ke-charts-dev/
  done
fi

echo "23KE Bucket ready ✅"
