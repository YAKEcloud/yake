# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12564]
- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12563]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.121.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.121.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.121.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.121.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.121.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.121.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.121.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.121.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.121.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.121.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.121.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.121.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.121.5`
