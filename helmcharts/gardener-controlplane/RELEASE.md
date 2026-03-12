# [github.com/gardener/gardener:v1.137.5]

## 🐛 Bug Fixes
- `[OPERATOR]` The per-worker-pool `node-local-dns` `Daemonset`s now also include the name of the worker in their label selector and in their Pods' labels. This resolves an issue where each of the corresponding `VPA`s targeted all `node-cache` containers from all of these `Daemonsets` resulting in incorrect resource recommendations. by @plkokanov [[#14295](https://github.com/gardener/gardener/pull/14295)]
- `[DEPENDENCY]` Fixing an issue where CA scale-downs were getting stuck when MCD replicas was updated with stale cache value of worker-controller by @r4mek [[#14293](https://github.com/gardener/gardener/pull/14293)]

## 🏃 Others
- `[OPERATOR]` The following dependency has been updated:  
  - `golang.org/x/net` from `v0.50.0` to `v0.51.0`. by @ScheererJ [[#14242](https://github.com/gardener/gardener/pull/14242)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.5`
