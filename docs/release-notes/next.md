---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-cilium to <code>1.30.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## ✨ New Features

- `[USER]` `networking-cilium` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @shafeeqes [#218]
## 🏃 Others

- `[OPERATOR]` Egress gateway validation is fixed in case kube-proxy is disabled. by @DockToFuture [#220]
- `[OPERATOR]` Update cilium to `v1.14.3`. by @DockToFuture [#222]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.76.0 -> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @shafeeqes [#213]

## Docker Images
gardener-extension-admission-cilium: `eu.gcr.io/gardener-project/gardener/extensions/admission-cilium:v1.30.0`
gardener-extension-networking-cilium: `eu.gcr.io/gardener-project/gardener/extensions/networking-cilium:v1.30.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.30.1</code></b></summary>

no release notes available

## Docker Images
gardener-extension-admission-cilium: `eu.gcr.io/gardener-project/gardener/extensions/admission-cilium:v1.30.1`
gardener-extension-networking-cilium: `eu.gcr.io/gardener-project/gardener/extensions/networking-cilium:v1.30.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.82.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
## 🏃 Others

- `[OPERATOR]` github.com/gardener/etcd-druid #714 @aaronfern  
  Alpine image used in init containers is now part of the IMAGEVECTOR_OVERWRITE by @gardener-ci-robot [#8684]
- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.82.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.82.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.82.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.82.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.82.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.82.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.82.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.82.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
## 🏃 Others

- `[OPERATOR]` github.com/gardener/etcd-druid #714 @aaronfern  
  Alpine image used in init containers is now part of the IMAGEVECTOR_OVERWRITE by @gardener-ci-robot [#8684]
- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.82.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.82.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.82.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.82.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.82.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.82.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.82.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.82.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
## 🏃 Others

- `[OPERATOR]` github.com/gardener/etcd-druid #714 @aaronfern  
  Alpine image used in init containers is now part of the IMAGEVECTOR_OVERWRITE by @gardener-ci-robot [#8684]
- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.82.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.82.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.82.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.82.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.82.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.82.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.82.1`


</details>
