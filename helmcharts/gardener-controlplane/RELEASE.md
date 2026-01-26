# [github.com/gardener/gardener:v1.134.3]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug has been fix which could lead to pending `ManagedResource`s in the shoot's control plane namespace (effectively, blocking `Shoot` deletion). by @rfranzke [[#13860](https://github.com/gardener/gardener/pull/13860)]
- `[USER]` A bug has been fixed which was causing invalid high-availability configuration for system components in case a `Shoot` was configured with a worker pool with `maximum=0`. by @rfranzke [[#13870](https://github.com/gardener/gardener/pull/13870)]
- `[USER]` Fixed an issue where the Manual Worker Pool Rollout feature worked only when there is only one machine deployment per worker. by @rrhubenov [[#13813](https://github.com/gardener/gardener/pull/13813)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.3`
