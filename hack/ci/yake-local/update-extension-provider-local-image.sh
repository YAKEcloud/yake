#!/usr/bin/env bash

depName=$1
newVersion=$2
if [[ -z "$depName" ]] || [[ $depName != gardener-controlplane ]]; then
		exit
fi

source hack/tools/install.sh

yq -i 'select(document_index == 0).providerConfig.values.image=("ghcr.io/yakecloud/gardener-extension-provider-local:" + env(newVersion)) ' hack/ci/yake-local/garden-content/controller-registrations.yaml
