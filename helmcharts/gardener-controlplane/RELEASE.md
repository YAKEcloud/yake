# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Disable cloud profile field sync if `Shoot` is being deleted. by @LucaBernstein [#10310]
- `[OPERATOR]` A bug has been fixed which prevented `gardenlet` from creating its own `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource when `selfUpgrade` was set in its Helm chart values ([more information](https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades)). by @rfranzke [#10306]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.1`
