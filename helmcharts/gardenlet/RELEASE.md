# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused multi-node etcd clusters to not be properly restored when performing control plane migration for hibernated HA `Shoot`s. by @plkokanov [#11598]
- `[OPERATOR]` Fixed gardenlet crashing when trying to force-delete a workerless shoot by @Wieneo [#11514]
- `[USER]` A bug has been fixed which caused the shoot care controller to falsely remove shoot conditions and constraints from the shoot status by @Wieneo [#11576]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.111.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.111.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.111.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.111.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.111.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.111.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.111.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.111.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.111.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.111.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.111.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.111.4`
