# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue has been fixed which caused `Shoot` reconciliation to get stuck because the API discovery used to generate the read-only `ClusterRole` for `shoots/viewerkubeconfig` subresource failed. by @rfranzke [#9361]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.90.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.90.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.90.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.90.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.90.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.90.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.90.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.90.2`
