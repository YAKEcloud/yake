# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10216]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10251]
- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10283]
## 🏃 Others

- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10203]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.100.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.100.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.100.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.100.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.100.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.100.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.100.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.100.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.100.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.100.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.100.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.100.1`
