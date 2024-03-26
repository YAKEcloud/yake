# [gardener/dependency-watchdog]

## 🏃 Others

- `[OPERATOR]` `dependency-watchdog-prober` now skips `Lease`s in the `kube-node-lease` namespace in case the corresponding `Node` does not exist (anymore). by @rfranzke [gardener/dependency-watchdog#108]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.90.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.90.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.90.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.90.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.90.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.90.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.90.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.90.5`
