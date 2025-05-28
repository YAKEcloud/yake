#!/usr/bin/env bash

depName=$1
newVersion=$2
if [[ -z "$depName" ]] || [[ $depName != gardener-controlplane ]]; then
		exit
fi

source hack/tools/install.sh

install_yq

git clone https://github.com/gardener/gardener gardener-upstream

cd gardener-upstream || exit 1
git checkout v"$newVersion"
cd ..

export newChart=$(tar -C gardener-upstream/charts/gardener/provider-local -czf - . | base64 -w0 -)
export newVersion

$YQ -i 'select(document_index == 0).providerConfig.values.image=("ghcr.io/yakecloud/gardener-extension-provider-local:v" + env(newVersion)) ' hack/ci/yake-local/garden-content/controller-registrations.yaml
$YQ -i 'select(document_index == 0).providerConfig.chart=env(newChart) ' hack/ci/yake-local/garden-content/controller-registrations.yaml
