# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10582]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.76.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.76.2) by @gardener-ci-robot [#10453]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.102.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.102.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.102.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.102.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.102.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.102.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.102.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.102.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.102.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.102.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.102.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.102.2`
