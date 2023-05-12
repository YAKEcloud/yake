#!/usr/bin/env bash

set -eo pipefail
tmpDir=$(mktemp -d)

helm unittest -q pre-gardener/configuration

CONFIGVALUES="$(helm template --kube-version 1.24.0 pre-gardener/configuration --debug -f pre-gardener/configuration/values-test.yaml)"

for chart in pre-gardener/addons pre-gardener/dnsprovider pre-gardener/issuer; do

  CHARTNAME="$(basename $chart)"
  export CHARTNAME

  MYVALUES="$(echo "$CONFIGVALUES" | yq eval 'select(.metadata.name==strenv(CHARTNAME)+"-base-values") .stringData."values.yaml"' -)"

  echo "$MYVALUES" > $tmpDir/$CHARTNAME-test-values.yaml

  helm unittest -q $chart -v $tmpDir/$CHARTNAME-test-values.yaml

done

helm unittest -q gardener/configuration

CONFIGVALUES="$(helm template --kube-version 1.24.0 gardener/configuration --debug -f gardener/configuration/values-test.yaml)"

for chart in gardener/helmcharts/extensions-meta-chart gardener/helmcharts/garden-content-chart; do

  CHARTNAME="$(basename $chart)"
  export CHARTNAME

  MYVALUES="$(echo "$CONFIGVALUES" | yq eval 'select(.metadata.name==strenv(CHARTNAME)+"-base-values") .stringData."values.yaml"' -)"

  echo "$MYVALUES" > $tmpDir/$CHARTNAME-test-values.yaml

  if [[ $CHARTNAME == "garden-content-chart" ]]; then
    echo "$(echo "$CONFIGVALUES" | yq eval 'select(.metadata.name=="gardenlet-base-values") .stringData."values.yaml"' -)" >> $tmpDir/$CHARTNAME-test-values.yaml
  fi

  helm unittest -q $chart -v $tmpDir/$CHARTNAME-test-values.yaml

done
