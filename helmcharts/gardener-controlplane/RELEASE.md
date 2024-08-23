# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10374]
- `[OPERATOR]` A bug has been fixed which prevented `gardenlet` from creating its own `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource when `selfUpgrade` was set in its Helm chart values ([more information](https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades)). by @rfranzke [#10308]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.4`
