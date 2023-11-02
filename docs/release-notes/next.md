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

<details>
<summary><b>Update provider-openstack to <code>1.37.1</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🏃 Others

- `[OPERATOR]` Update external-snapshotter to v6.3.1 by @kon-angelo [#683]

## Docker Images
gardener-extension-admission-openstack: `eu.gcr.io/gardener-project/gardener/extensions/admission-openstack:v1.37.1`
gardener-extension-provider-openstack: `eu.gcr.io/gardener-project/gardener/extensions/provider-openstack:v1.37.1`


</details>

<details>
<summary><b>Update networking-calico to <code>1.37.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ✨ New Features

- `[USER]` `networking-calico` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @shafeeqes [#302]
## 🏃 Others

- `[OPERATOR]` Update calico to version `3.26.2` and make sure that tyhpa gets scheduled on all nodes. by @DockToFuture [#304]
- `[OPERATOR]` Update calico to `v3.26.3`. by @DockToFuture [#308]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.76.0 -> v1.77.2 by @shafeeqes [#293]
- `[OPERATOR]` Add autoscaling mode for calico node/typha, for vpa mode (autoScaling.mode: vpa), for cluster-proportional mode (autoScaling.mode: cluster-proportional) by @jfortin-sap [#286]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.79.1 -> v1.80.1  
  - k8s.io/* : v0.27.5 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.15.2-> v0.16.2 by @shafeeqes [#300]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.2 -> v1.79.1  
  - k8s.io/* : v0.26.3 -> v0.27.5  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.15.2 by @shafeeqes [#296]
- `[OPERATOR]` Vertical and horizontal cluster-proportional autoscalers for calico-typha now use different label selectors. by @ScheererJ [#297]

## Docker Images
gardener-extension-admission-calico: `eu.gcr.io/gardener-project/gardener/extensions/admission-calico:v1.37.0`
gardener-extension-networking-calico: `eu.gcr.io/gardener-project/gardener/extensions/networking-calico:v1.37.0`


</details>

<details>
<summary><b>Update cert-management to <code>0.11.3</code></b></summary>

# [gardener/cert-management]

## 🏃 Others

- `[USER]` Support PKCS8 private keys for CA issuers by @MartinWeindel [#146]
- `[OPERATOR]` Bumps golang from 1.21.2 to 1.21.3. by @dependabot[bot] [#143]
- `[OPERATOR]` Remove `issuer` short name for issuer CustomResourceDefinition as it is the same as the singular. by @MartinWeindel [#147]

## Docker Images
cert-management: `eu.gcr.io/gardener-project/cert-controller-manager:v0.11.3`


</details>
