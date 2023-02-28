#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

echo "23KE Bucket upload"

tmpDir=$(mktemp -d)

cp -r kustomization.yaml $tmpDir
cp -r flux $tmpDir
cp -r pre-gardener $tmpDir
cp -r flux-system $tmpDir
cp -r gardener $tmpDir
cp -r helmcharts $tmpDir

cwd=$(pwd)
pushd $tmpDir

# we now upload packet versions which use a bucket instead of the GitRepository
for file in $(grep -lr GitRepository pre-gardener gardener flux | sed 's/^\.\///'); do
		sed -i s/GitRepository/Bucket/ $file
done

$cwd/hack/rewrite-helmchart-sourcerefs.sh Bucket
popd

rclone -q mkdir $REMOTE:$BUCKET
rclone -q sync $tmpDir $REMOTE:$BUCKET

echo "23KE Bucket ready ✅"
