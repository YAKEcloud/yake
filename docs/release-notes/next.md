---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.80.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8551]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8551]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1`

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8551]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @gardener-ci-robot [#8580]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @gardener-ci-robot [#8580]

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @gardener-ci-robot [#8580]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.4</code></b></summary>

no release notes available

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.4</code></b></summary>

no release notes available

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.4</code></b></summary>

no release notes available

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.5</code></b></summary>

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


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.5</code></b></summary>

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


</details>

<details>
<summary><b>Update gardenlet to <code>1.80.5</code></b></summary>

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


</details>
