# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing gardenlet to panic while deleting `dependency-watchdog-access` secrets for workerless Shoots if the `status.technicalID` is not set for the Shoot is now fixed. by @shafeeqes [#10068]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.1`
