---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.75.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The obsolete `addons` `ManagedResource` is now properly cleaned up. by @gardener-ci-robot [#8255]
- `[OPERATOR]` Now the vali ingress definition points to the shoot logging service. by @vpnachev [#8254]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.75.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The obsolete `addons` `ManagedResource` is now properly cleaned up. by @gardener-ci-robot [#8255]
- `[OPERATOR]` Now the vali ingress definition points to the shoot logging service. by @vpnachev [#8254]

</details>

<details>
<summary><b>Update gardenlet to <code>1.75.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The obsolete `addons` `ManagedResource` is now properly cleaned up. by @gardener-ci-robot [#8255]
- `[OPERATOR]` Now the vali ingress definition points to the shoot logging service. by @vpnachev [#8254]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.75.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue has been fixed for highly-available `Shoot`s whose `etcd` clusters didn't get ready in the `Completing` phase of a CA credentials rotation. by @gardener-ci-robot [#8305]
## 🏃 Others

- `[OPERATOR]` gardenlet: A regression preventing the alertmanager in the garden namespace from sending email notifications is now fixed. by @gardener-ci-robot [#8315]
# [gardener/hvpa-controller]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused HVPA reconciliation to fail with `expected pointer, but got v2beta1.MetricSpec type` when the HPA spec had changed. by @voelzmo [gardener/hvpa-controller#125]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.75.2`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.75.2`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.75.2`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.75.2`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.75.2`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.75.2`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.75.2`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.75.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue has been fixed for highly-available `Shoot`s whose `etcd` clusters didn't get ready in the `Completing` phase of a CA credentials rotation. by @gardener-ci-robot [#8305]
## 🏃 Others

- `[OPERATOR]` gardenlet: A regression preventing the alertmanager in the garden namespace from sending email notifications is now fixed. by @gardener-ci-robot [#8315]
# [gardener/hvpa-controller]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused HVPA reconciliation to fail with `expected pointer, but got v2beta1.MetricSpec type` when the HPA spec had changed. by @voelzmo [gardener/hvpa-controller#125]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.75.2`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.75.2`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.75.2`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.75.2`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.75.2`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.75.2`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.75.2`

</details>

<details>
<summary><b>Update gardenlet to <code>1.75.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue has been fixed for highly-available `Shoot`s whose `etcd` clusters didn't get ready in the `Completing` phase of a CA credentials rotation. by @gardener-ci-robot [#8305]
## 🏃 Others

- `[OPERATOR]` gardenlet: A regression preventing the alertmanager in the garden namespace from sending email notifications is now fixed. by @gardener-ci-robot [#8315]
# [gardener/hvpa-controller]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused HVPA reconciliation to fail with `expected pointer, but got v2beta1.MetricSpec type` when the HPA spec had changed. by @voelzmo [gardener/hvpa-controller#125]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.75.2`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.75.2`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.75.2`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.75.2`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.75.2`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.75.2`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.75.2`

</details>
