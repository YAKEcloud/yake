---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.76.3</code></b></summary>

# [gardener/hvpa-controller]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused HVPA reconciliation to fail with `expected pointer, but got v2beta1.MetricSpec type` when the HPA spec had changed. by @voelzmo [gardener/hvpa-controller#125]
# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` A bug preventing `prometheus` ingress to use `wildcard-certificate` is fixed. by @gardener-ci-robot [#8320]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.76.3</code></b></summary>

# [gardener/hvpa-controller]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused HVPA reconciliation to fail with `expected pointer, but got v2beta1.MetricSpec type` when the HPA spec had changed. by @voelzmo [gardener/hvpa-controller#125]
# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` A bug preventing `prometheus` ingress to use `wildcard-certificate` is fixed. by @gardener-ci-robot [#8320]

</details>

<details>
<summary><b>Update gardenlet to <code>1.76.3</code></b></summary>

# [gardener/hvpa-controller]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused HVPA reconciliation to fail with `expected pointer, but got v2beta1.MetricSpec type` when the HPA spec had changed. by @voelzmo [gardener/hvpa-controller#125]
# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` A bug preventing `prometheus` ingress to use `wildcard-certificate` is fixed. by @gardener-ci-robot [#8320]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.76.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Update Kubernetes dependencies (especially `k8s.io/client-go`) from `v0.26.3` to `v0.26.4` to resolve panic on working with special shoots. by @gardener-ci-robot [#8425]
- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8409]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.76.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Update Kubernetes dependencies (especially `k8s.io/client-go`) from `v0.26.3` to `v0.26.4` to resolve panic on working with special shoots. by @gardener-ci-robot [#8425]
- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8409]

</details>

<details>
<summary><b>Update gardenlet to <code>1.76.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Update Kubernetes dependencies (especially `k8s.io/client-go`) from `v0.26.3` to `v0.26.4` to resolve panic on working with special shoots. by @gardener-ci-robot [#8425]
- `[OPERATOR]` An issue has been fixed which was causing a broken `ControlPlaneHealthy` condition report for `Shoot`s when the `MachineControllerManagerDeployment` feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8409]

</details>
