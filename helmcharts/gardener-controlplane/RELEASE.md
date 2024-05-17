# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has has been fixed which caused unneeded `gardener-node-agent` reconciliations after each `Shoot` reconciliation even if the underlying `OperatingSystemConfig` did not contain relevant changes. by @rfranzke [#9732]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.93.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.93.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.93.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.93.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.93.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.93.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.93.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.93.1`
