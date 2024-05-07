#!/usr/bin/env bash

source hack/tools/install.sh

install_yq

version=${version:=$($YQ '.spec.chart.spec.version' gardener/gardener.yaml | head -1)}

tag="v$version"
image="ghcr.io/yakecloud/gardener-extension-provider-local:$tag"

if docker manifest inspect "$image" 1>/dev/null 2>&1; then
  echo "remote image $image already exists. skipping build."
  exit 0
fi

git clone https://github.com/gardener/gardener gardener-upstream

cd gardener-upstream || exit 1
git checkout "$tag"

docker build --build-arg EFFECTIVE_VERSION="$tag" -t "$image" -f Dockerfile --target gardener-extension-provider-local .
docker push "$image"
