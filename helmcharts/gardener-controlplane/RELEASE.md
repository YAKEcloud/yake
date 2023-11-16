# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` machine-controller-manager RBAC in the Shoot cluster does now allow MCM to delete volumeattachments. MCM provider extensions vendoring machine-controller-manager >= v0.50.0 (ref https://github.com/gardener/machine-controller-manager/pull/839) need to delete volumeattachments. by @ialidzhikov [#8774]
## 🏃 Others

- `[OPERATOR]` `NewClientForShoot` creates a client with a rest mapper using `LazyDiscovery`. by @acumino [#8781]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.7`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.7`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.7`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.7`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.7`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.7`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.7`
