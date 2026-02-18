# [github.com/gardener/gardener:v1.135.2]

## 🐛 Bug Fixes
- `[OPERATOR]` This PR fixes webhook certificate reconciliation to properly apply changes in webhook configurations. by @acumino [[#13981](https://github.com/gardener/gardener/pull/13981)]
- `[OPERATOR]` An issue causing the control-plane migration to get stuck if the source backup entry deployment was retried is now fixed. by @shafeeqes [[#14096](https://github.com/gardener/gardener/pull/14096)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.2` to `v0.60.3`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.3)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.2` to `v0.60.3`. by @takoverflow [[#14101](https://github.com/gardener/gardener/pull/14101)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.135.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.135.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.135.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.135.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.135.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.135.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.135.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.135.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.135.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.135.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.135.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.135.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.135.2`
