# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has has been fixed which caused unneeded `gardener-node-agent` reconciliations after each `Shoot` reconciliation even if the underlying `OperatingSystemConfig` did not contain relevant changes. by @rfranzke [#9731]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.94.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.94.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.94.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.94.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.94.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.94.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.94.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.94.2`
