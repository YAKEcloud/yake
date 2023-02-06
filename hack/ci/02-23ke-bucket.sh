#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "23KE Bucket upload"

mc ls "$MC_ALIAS/$BUCKET_23KE" &> /dev/null || mc mb "$MC_ALIAS/$BUCKET_23KE"
mc cp -q kustomization.yaml "$MC_ALIAS/$BUCKET_23KE"
mc cp -q 23kectl.yaml "$MC_ALIAS/$BUCKET_23KE"
mc cp -q --recursive flux "$MC_ALIAS/$BUCKET_23KE"
mc cp -q --recursive pre-gardener "$MC_ALIAS/$BUCKET_23KE"
mc cp -q --recursive flux-system  "$MC_ALIAS/$BUCKET_23KE"
mc cp -q --recursive gardener "$MC_ALIAS/$BUCKET_23KE"

# we now upload packet versions which use a bucket instead of the GitRepository
for file in $(grep --exclude 23kectl --exclude-dir=hack --exclude-dir=flux-system  -lr GitRepository . | sed 's/^\.\///'); do
		cat $file | sed s/GitRepository/Bucket/ | mc pipe $MC_ALIAS/$BUCKET_23KE/$file
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
							cat $file | yq eval '.spec.chart.spec |= (.chart = "./23ke-charts-dev/" + .chart | del .version) |= .sourceRef |= (.kind = "Bucket" | .name  = "23ke" )' - |  mc pipe $MC_ALIAS/$BUCKET_23KE/$file
			done
			mc cp -q --recursive 23ke-charts-dev/charts/ $MC_ALIAS/$BUCKET_23KE/23ke-charts-dev/
	done
fi

echo "23KE Bucket ready ✅"
