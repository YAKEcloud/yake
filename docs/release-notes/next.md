---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.77.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @gardener-ci-robot [#8372]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @gardener-ci-robot [#8372]

</details>

<details>
<summary><b>Update gardenlet to <code>1.77.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @gardener-ci-robot [#8372]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which was causing the garbage collector in `gardener-resource-manager` to wrongfully collect `Secret`s related to `ManagedResource`s when the source and the target cluster are equal. by @gardener-ci-robot [#8404]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which was causing the garbage collector in `gardener-resource-manager` to wrongfully collect `Secret`s related to `ManagedResource`s when the source and the target cluster are equal. by @gardener-ci-robot [#8404]

</details>

<details>
<summary><b>Update gardenlet to <code>1.77.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which was causing the garbage collector in `gardener-resource-manager` to wrongfully collect `Secret`s related to `ManagedResource`s when the source and the target cluster are equal. by @gardener-ci-robot [#8404]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Update Kubernetes dependencies (especially `k8s.io/client-go`) from `v0.26.3` to `v0.26.4` to resolve panic on working with special shoots. by @gardener-ci-robot [#8424]
- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8410]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Update Kubernetes dependencies (especially `k8s.io/client-go`) from `v0.26.3` to `v0.26.4` to resolve panic on working with special shoots. by @gardener-ci-robot [#8424]
- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8410]

</details>

<details>
<summary><b>Update gardenlet to <code>1.77.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Update Kubernetes dependencies (especially `k8s.io/client-go`) from `v0.26.3` to `v0.26.4` to resolve panic on working with special shoots. by @gardener-ci-robot [#8424]
- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8410]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @rfranzke [#8455]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8471]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @rfranzke [#8455]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8471]

</details>

<details>
<summary><b>Update gardenlet to <code>1.77.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @rfranzke [#8455]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8471]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.5</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @gardener-ci-robot [#8494]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.77.5`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.77.5`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.77.5`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.77.5`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.77.5`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.77.5`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.77.5`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.5</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @gardener-ci-robot [#8494]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.77.5`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.77.5`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.77.5`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.77.5`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.77.5`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.77.5`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.77.5`

</details>

<details>
<summary><b>Update gardenlet to <code>1.77.5</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @gardener-ci-robot [#8494]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.77.5`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.77.5`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.77.5`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.77.5`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.77.5`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.77.5`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.77.5`

</details>
