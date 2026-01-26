# [github.com/gardener/gardener:v1.133.4]

## 🐛 Bug Fixes
- `[USER]` Fixed an issue where the Manual Worker Pool Rollout feature worked only when there is only one machine deployment per worker. by @rrhubenov [[#13814](https://github.com/gardener/gardener/pull/13814)]
- `[USER]` A bug has been fixed which was causing invalid high-availability configuration for system components in case a `Shoot` was configured with a worker pool with `maximum=0`. by @rfranzke [[#13871](https://github.com/gardener/gardener/pull/13871)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.133.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.133.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.133.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.133.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.133.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.133.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.133.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.133.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.133.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.133.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.133.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.133.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.133.4`
