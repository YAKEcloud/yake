#!/usr/bin/env bash

set -eo pipefail
tmpDir=$(mktemp -d)

CONFIGVALUES="$(helm template --kube-version 1.24.0 configuration/configuration --debug -f configuration/configuration/values-test.yaml)"

helm unittest configuration/configuration

for chart in pre-gardener/addons pre-gardener/dnsprovider pre-gardener/issuer gardener/certificates gardener/extensions gardener/garden-content; do

  CHARTNAME="$(basename $chart)"
  export CHARTNAME

  MYVALUES="$(echo "$CONFIGVALUES" | yq eval 'select(.metadata.name==strenv(CHARTNAME)+"-base-values") .stringData."values.yaml"' -)"

  echo "$MYVALUES" > $tmpDir/$CHARTNAME-test-values.yaml

  if [[ $CHARTNAME == "garden-content" ]]; then
    echo "$(echo "$CONFIGVALUES" | yq eval 'select(.metadata.name=="gardenlet-base-values") .stringData."values.yaml"' -)" >> $tmpDir/$CHARTNAME-test-values.yaml
  fi

  helm unittest $chart -v $tmpDir/$CHARTNAME-test-values.yaml

done
