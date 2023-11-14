# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` machine-controller-manager RBAC in the Shoot cluster does now allow MCM to delete volumeattachments. MCM provider extensions vendoring machine-controller-manager >= v0.50.0 (ref https://github.com/gardener/machine-controller-manager/pull/839) need to delete volumeattachments. by @ialidzhikov [#8774]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.83.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.83.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.83.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.83.1`
node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.83.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.83.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.83.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.83.1`
