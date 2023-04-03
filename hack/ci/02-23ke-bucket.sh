#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

echo "23KE Bucket upload"

tmpDir=$(hack/make-tmp-release-dir.sh Bucket)

if [ ! -v GITHUB_ACTIONS ]; then
# Speed up flux
yq eval -i '(
  select(.kind == "Deployment") |
  select(
    .metadata.name == "helm-controller" or
    .metadata.name == "kustomize-controller"
  ) |
  .spec.template.spec.containers[0].args
) += "--requeue-dependency=5s"' "$tmpDir/flux-system/gotk-components.yaml"
fi

mc ls "$MC_ALIAS/$BUCKET_23KE" &> /dev/null || mc mb "$MC_ALIAS/$BUCKET_23KE"
mc mirror -q --overwrite "$tmpDir" "$MC_ALIAS/$BUCKET_23KE"

echo "23KE Bucket ready ✅"
