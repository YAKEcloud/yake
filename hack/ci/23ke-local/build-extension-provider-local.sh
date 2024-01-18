#!/usr/bin/env bash

source hack/tools/install.sh

install_yq

tag=$($YQ '.spec.chart.spec.version' gardener/gardener.yaml | head -1)

git clone https://github.com/gardener/gardener gardener-upstream

cd gardener-upstream || exit 1
git checkout "$tag"

docker build --build-arg EFFECTIVE_VERSION=v"$tag"  -t ghcr.io/yakecloud/gardener-extension-provider-local:v"$tag"  -f Dockerfile --target gardener-extension-provider-local .
docker push ghcr.io/yakecloud/gardener-extension-provider-local:v"$tag"
