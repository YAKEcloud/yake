# [github.com/gardener/gardener:v1.132.5]

## 🐛 Bug Fixes
- `[USER]` Fixed an issue where the Manual Worker Pool Rollout feature worked only when there is only one machine deployment per worker. by @rrhubenov [[#13815](https://github.com/gardener/gardener/pull/13815)]
- `[USER]` A bug has been fixed which was causing invalid high-availability configuration for system components in case a `Shoot` was configured with a worker pool with `maximum=0`. by @rfranzke [[#13872](https://github.com/gardener/gardener/pull/13872)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.5`
