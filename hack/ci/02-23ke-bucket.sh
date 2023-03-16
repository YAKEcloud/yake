#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

echo "23KE Bucket upload"

tmpDir=$(hack/make-tmp-release-dir.sh Bucket)

mc ls "$MC_ALIAS/$BUCKET_23KE" &> /dev/null || mc mb "$MC_ALIAS/$BUCKET_23KE"
mc mirror -q "$tmpDir" "$MC_ALIAS/$BUCKET_23KE"

# Speed up flux
file=$tmpDir/flux-system/gotk-components.yaml
yq eval '(
  select(.kind == "Deployment") |
  select(
    .metadata.name == "helm-controller" or
    .metadata.name == "kustomize-controller"
  ) |
  .spec.template.spec.containers[0].args
) += "--requeue-dependency=5s"' $file | mc pipe $MC_ALIAS/$BUCKET_23KE/$file

echo "23KE Bucket ready ✅"
