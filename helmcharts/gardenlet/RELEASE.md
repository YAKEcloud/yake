# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that caused a downtime of Gardener API services up to `1m` every time the `virtual-garden-kube-controller-manager` changed its leader.  by @plkokanov [#11454]
- `[OPERATOR]` Fixed a bug that caused the Gardenlet to crash when deleting a hibernated shoot if the NodeAgentAuthorizer feature gate was enabled by @Wieneo [#11415]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.56.0` to `v0.56.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.56.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.56.0` to `v0.56.1`.  by @plkokanov [#11451]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.112.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.112.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.112.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.112.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.112.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.112.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.112.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.112.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.112.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.112.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.112.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.112.2`
