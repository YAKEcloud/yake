# [github.com/gardener/gardener:v1.134.4]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing unwanted reconciliations of Secrets and other objects due to cache resyncs in the project activity reconciler is now fixed. by @shafeeqes [[#13964](https://github.com/gardener/gardener/pull/13964)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.2` to `v0.60.3`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.3)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.2` to `v0.60.3`. by @takoverflow [[#14102](https://github.com/gardener/gardener/pull/14102)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.4`
