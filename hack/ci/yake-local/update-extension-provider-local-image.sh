#!/usr/bin/env bash

depName=$1
newVersion=$2
if [[ -z "$depName" ]] || [[ $depName != gardener-controlplane ]]; then
		exit
fi

source hack/tools/install.sh

git clone https://github.com/gardener/gardener gardener-upstream

cd gardener-upstream || exit 1
git checkout "$newVersion"
cd ..

export newChart=$(tar -czf - gardener-upstream/charts/gardener/provider-local | base64 -w0 -)

yq -i 'select(document_index == 0).providerConfig.values.image=("ghcr.io/yakecloud/gardener-extension-provider-local:" + env(newVersion)) ' hack/ci/yake-local/garden-content/controller-registrations.yaml
yq -i 'select(document_index == 0).providerConfig.chart=env(newChart) ' hack/ci/yake-local/garden-content/controller-registrations.yaml


