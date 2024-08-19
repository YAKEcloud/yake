# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10249]
- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10215]
## 🏃 Others

- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10205]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.6`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.6`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.6`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.6`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.6`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.6`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.6`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.6`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.6`
