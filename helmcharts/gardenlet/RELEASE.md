# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` `uncachedObjects` under pkg/client/kubernetes/options.go is now removed from Config struct which is used to set options for new ClientSets. Now the uncached objects can be directly set under `clientOptions.Cache.DisableFor` field. by @ary1992 [#8245]
## 📰 Noteworthy

- `[OPERATOR]` The `DisablingScalingClassesForShoots` feature gate has been promoted to beta. by @rfranzke [#8428]
## ✨ New Features

- `[OPERATOR]` Operators can now use the annotation `gardener.cloud/operation=rotate-observability-credentials` on the `garden` resource to rotate the observability credentials.  by @acumino [#8393]
- `[OPERATOR]` Configuring multiple `reserve-excess-capacity` deployments on `Seed`s is supported now by specifying `.spec.settings.excessCapacityReservation.configs`. by @oliver-goetz [#8356]
- `[USER]` When the Kubernetes control plane version is at least `v1.28`, it is now possible to set the worker pool Kubernetes version to be at most three versions behind the control plane version. Earlier, only a skew of at most two versions was allowed. Find more details [here](https://kubernetes.io/blog/2023/08/15/kubernetes-v1-28-release/#changes-to-supported-skew-between-control-plane-and-node-versions). by @shafeeqes [#8402]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which was causing the garbage collector in `gardener-resource-manager` to wrongfully collect `Secret`s related to `ManagedResource`s when the source and the target cluster are equal. by @dimityrmirchev [#8398]
- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @rfranzke [#8407]
- `[OPERATOR]` Update Kubernetes dependencies (especially `k8s.io/client-go`) from `v0.26.3` to `v0.26.4` to resolve panic on working with special shoots. by @MartinWeindel [#8422]
## 🏃 Others

- `[OPERATOR]` Add Prometheus alert for pending seed pods by @StenlyTU [#8406]
- `[OPERATOR]` The admission controllers of common provider extensions are automatically installed in the local extensions development setup by @ScheererJ [#8311]
- `[OPERATOR]` The `WorkerlessShoots` feature gate has been promoted to beta and is now turned on by default. Before deploying this Gardener version, make sure that all your registered extensions support this feature gate. by @acumino [#8417]
- `[OPERATOR]` The following image is updated:  
  - `quay.io/prometheus/alertmanager`: `v0.24.0` -> `v0.26.0` by @istvanballok [#8408]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.26.4` -> `v0.27.5`  
  - `sigs.k8s.io/controller-runtime`: `v0.14.6` -> `v0.15.2` by @ary1992 [#8245]
# [gardener/apiserver-proxy]

## 🏃 Others

- `[OPERATOR]` Update golang base container image to 1.21.0. by @dependabot[bot] [gardener/apiserver-proxy#43]
- `[OPERATOR]` Update alpine base image components to 3.18.3. by @dependabot[bot] [gardener/apiserver-proxy#42]
- `[OPERATOR]` Removed apiserver-proxy pod webhook as it is now included in Gardener Resource Manager. by @ScheererJ [gardener/apiserver-proxy#39]
- `[OPERATOR]` Update gardener/gardener to 1.77.1. by @dependabot[bot] [gardener/apiserver-proxy#44]
# [gardener/vpn2]

## 📰 Noteworthy

- `[OPERATOR]` Update to golang v1.21 by @ScheererJ [gardener/vpn2#42]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.79.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.79.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.79.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.79.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.79.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.79.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.79.0`