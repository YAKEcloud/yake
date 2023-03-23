#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

echo "23KE Bucket upload"

tmpDir=$(hack/make-tmp-release-dir.sh Bucket)

# Speed up flux
yq eval -i '(
  select(.kind == "Deployment") |
  select(
    .metadata.name == "helm-controller" or
    .metadata.name == "kustomize-controller"
  ) |
  .spec.template.spec.containers[0].args
) += "--requeue-dependency=5s"' "$tmpDir/flux-system/gotk-components.yaml"

# add spec.install.remediation.retries to all templates/yamls in /pre-gardener and /gardener that include "^kind: HelmRelease", but don't include "remediation"
grep -rl '^kind: HelmRelease' $tmpDir/{pre-gardener,gardener} \
  | xargs grep -L 'remediation' \
  | xargs sed -i 's;^spec:;spec:\n  install:\n    remediation:\n      retries: 25;'

mc ls "$MC_ALIAS/$BUCKET_23KE" &> /dev/null || mc mb "$MC_ALIAS/$BUCKET_23KE"
mc mirror -q --overwrite "$tmpDir" "$MC_ALIAS/$BUCKET_23KE"

echo "23KE Bucket ready ✅"
