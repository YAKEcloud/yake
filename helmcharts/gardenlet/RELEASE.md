# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @rfranzke [#8663]
## 🏃 Others

- `[OPERATOR]` The following Golang dependencies have been updated:  
  - `k8s.io/*` from `v0.28.2` to `v0.28.3`  
  - `sigs.k8s.io/controller-runtime` from `v0.16.2` to `v0.16.3` by @rfranzke [#8680]
- `[OPERATOR]` Kubernetes feature gate `UnauthenticatedHTTP2DOSMitigation` is considered valid for versions >= `1.25`. by @gardener-ci-robot [#8672]

## Docker Images
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.5`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.5`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.5`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.5`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.5`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.5`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.5`
