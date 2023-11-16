---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.81.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @gardener-ci-robot [#8656]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @gardener-ci-robot [#8652]

# Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.1`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @gardener-ci-robot [#8656]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @gardener-ci-robot [#8652]

# Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.1`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.1`

</details>

<details>
<summary><b>Update gardenlet to <code>1.81.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @gardener-ci-robot [#8656]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @gardener-ci-robot [#8652]

# Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.1`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @rfranzke [#8664]
## 🏃 Others

- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @gardener-ci-robot [#8658]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @rfranzke [#8664]
## 🏃 Others

- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @gardener-ci-robot [#8658]

</details>

<details>
<summary><b>Update gardenlet to <code>1.81.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @rfranzke [#8664]
## 🏃 Others

- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @gardener-ci-robot [#8658]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Kubernetes feature gate `UnauthenticatedHTTP2DOSMitigation` is considered valid for versions >= `1.25`. by @gardener-ci-robot [#8671]
- `[OPERATOR]` The following Golang dependencies have been updated:  
  - `k8s.io/*` from `v0.28.2` to `v0.28.3`  
  - `sigs.k8s.io/controller-runtime` from `v0.16.2` to `v0.16.3` by @rfranzke [#8681]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.3`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.3`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.3`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.3`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.3`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.3`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Kubernetes feature gate `UnauthenticatedHTTP2DOSMitigation` is considered valid for versions >= `1.25`. by @gardener-ci-robot [#8671]
- `[OPERATOR]` The following Golang dependencies have been updated:  
  - `k8s.io/*` from `v0.28.2` to `v0.28.3`  
  - `sigs.k8s.io/controller-runtime` from `v0.16.2` to `v0.16.3` by @rfranzke [#8681]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.3`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.3`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.3`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.3`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.3`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.3`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.81.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Kubernetes feature gate `UnauthenticatedHTTP2DOSMitigation` is considered valid for versions >= `1.25`. by @gardener-ci-robot [#8671]
- `[OPERATOR]` The following Golang dependencies have been updated:  
  - `k8s.io/*` from `v0.28.2` to `v0.28.3`  
  - `sigs.k8s.io/controller-runtime` from `v0.16.2` to `v0.16.3` by @rfranzke [#8681]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.3`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.3`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.3`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.3`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.3`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.3`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
## 🏃 Others

- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.4`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.4`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.4`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.4`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.4`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.4`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
## 🏃 Others

- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.4`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.4`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.4`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.4`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.4`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.4`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.81.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
## 🏃 Others

- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.4`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.4`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.4`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.4`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.4`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.4`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.6</code></b></summary>

no release notes available

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.6`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.6`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.6`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.6`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.6`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.6`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.6`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.6</code></b></summary>

no release notes available

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.6`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.6`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.6`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.6`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.6`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.6`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.6`


</details>

<details>
<summary><b>Update gardenlet to <code>1.81.6</code></b></summary>

no release notes available

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.81.6`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.81.6`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.81.6`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.81.6`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.81.6`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.81.6`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.81.6`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.7</code></b></summary>

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


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.81.7</code></b></summary>

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


</details>

<details>
<summary><b>Update gardenlet to <code>1.81.7</code></b></summary>

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


</details>
