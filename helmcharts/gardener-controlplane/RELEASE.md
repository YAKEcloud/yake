# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` machine-controller-manager RBAC in the Shoot cluster does now allow MCM to delete volumeattachments. MCM provider extensions vendoring machine-controller-manager >= v0.50.0 (ref https://github.com/gardener/machine-controller-manager/pull/839) need to delete volumeattachments. by @ialidzhikov [#8774]
- `[DEVELOPER]` A bug causing the crd generation for `druid.gardener.cloud` group to fail in extensions is now fixed. by @shafeeqes [#8789]
## 🏃 Others

- `[OPERATOR]` `NewClientForShoot` creates a client with a rest mapper using `LazyDiscovery`. by @acumino [#8781]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.82.3`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.82.3`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.82.3`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.82.3`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.82.3`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.82.3`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.82.3`
