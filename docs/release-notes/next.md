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

<details>
<summary><b>Update networking-cilium to <code>1.30.2</code></b></summary>

no release notes available

## Docker Images
gardener-extension-admission-cilium: `eu.gcr.io/gardener-project/gardener/extensions/admission-cilium:v1.30.2`
gardener-extension-networking-cilium: `eu.gcr.io/gardener-project/gardener/extensions/networking-cilium:v1.30.2`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.12.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## 📰 Noteworthy

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @dimityrmirchev [#94]
## ✨ New Features

- `[USER]` `runtime-gvisor` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @shafeeqes [#101]
## 🏃 Others

- `[DEPENDENCY]` The following dependency were updated:  
  - github.com/gardener/gardener: v1.75.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @dimityrmirchev [#96]
- `[DEPENDENCY]` The go version was updated to `1.21.3`. by @dimityrmirchev [#96]

## Docker Images
gardener-extension-runtime-gvisor-installation: `eu.gcr.io/gardener-project/gardener/extensions/runtime-gvisor-installation:v0.12.0`
gardener-extension-runtime-gvisor: `eu.gcr.io/gardener-project/gardener/extensions/runtime-gvisor:v0.12.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.39.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## ✨ New Features

- `[USER]` `shoot-cert-service` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @acumino [#204]
## 🏃 Others

- `[OPERATOR]` Remove redundant short name for `issuer` CustomResourceDefinition. by @MartinWeindel [#211]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.0 to 1.82.1. by @dependabot[bot] [#207]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.81.1 to 1.82.0. by @dependabot[bot] [#206]
# [gardener/cert-management]

## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.2 to 1.21.3. by @dependabot[bot] [gardener/cert-management#143]
- `[OPERATOR]` Remove `issuer` short name for issuer CustomResourceDefinition as it is the same as the singular. by @MartinWeindel [gardener/cert-management#147]
- `[USER]` Support PKCS8 private keys for CA issuers by @MartinWeindel [gardener/cert-management#146]

## Docker Images
gardener-extension-shoot-cert-service: `eu.gcr.io/gardener-project/gardener/extensions/shoot-cert-service:v1.39.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.83.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `hack/check-docforge.sh` script is now removed. The repo based manifest are removed in favor of a centrally managed manifests. See https://github.com/gardener/documentation/issues/431. The manifests are now maintained centrally in https://github.com/gardener/documentation/tree/master/.docforge. by @Kostov6 [#8692]
- `[USER]` Validation has been added for `spec.kubernetes.kubeAPIServer.runtimeConfig` field in the Shoot API. Disabling APIs marked as "Required" by gardener is not permitted. by @shafeeqes [#8695]
## ✨ New Features

- `[OPERATOR]` CloudProfiles allow configuring update strategies {patch, minor, major} for machine images that affect update behavior during auto and force update. by @danielfoehrKn [#8275]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` An issue causing the `etcd-backup` Secret to be wrongly deleted for a Shoot cluster due to stale BackupEntry deletion from a previous Shoot creation with the same name is now fixed. by @Kostov6 [#8709]
- `[OPERATOR]` An issue has been fixed that prevented setting the `UnauthenticatedHTTP2DOSMitigation` feature gate. by @timuthy [#8732]
- `[OPERATOR]` Add memory and cpu limits (maxAllowed) to Prometheus (H)VPAs. by @rickardsjp [#8694]
## 🏃 Others

- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.4`. by @shafeeqes [#8727]
- `[OPERATOR]` Partial Shoot maintenance errors are now reported as events on the Shoot and in the Shoot's `LastMaintenance` status. by @danielfoehrKn [#8275]
- `[OPERATOR]` With this release the obervability compoents are updated to the latest release versions. Plutono is now at v2.5.25 and Vali is now at v2.2.9 by @nickytd [#8689]
- `[OPERATOR]` The `.status.lastOperation` in `core.gardener.cloud/v1beta1.Seed` and `operator.gardener.cloud/v1alpha1.Garden` resources is now only updated each `5s` during a reconciliation. Previously, it was updated immediately when a task was finished. by @rfranzke [#8705]
- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]
- `[OPERATOR]` APIServer validation allows updating to expired Kubernetes and machine image versions. by @danielfoehrKn [#8275]
# [gardener/etcd-druid]

## 🏃 Others

- `[OPERATOR]` Alpine image used in init containers is now part of the IMAGEVECTOR_OVERWRITE by @aaronfern [gardener/etcd-druid#714]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.83.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.83.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.83.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.83.0`
node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.83.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.83.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.83.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.83.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.83.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `hack/check-docforge.sh` script is now removed. The repo based manifest are removed in favor of a centrally managed manifests. See https://github.com/gardener/documentation/issues/431. The manifests are now maintained centrally in https://github.com/gardener/documentation/tree/master/.docforge. by @Kostov6 [#8692]
- `[USER]` Validation has been added for `spec.kubernetes.kubeAPIServer.runtimeConfig` field in the Shoot API. Disabling APIs marked as "Required" by gardener is not permitted. by @shafeeqes [#8695]
## ✨ New Features

- `[OPERATOR]` CloudProfiles allow configuring update strategies {patch, minor, major} for machine images that affect update behavior during auto and force update. by @danielfoehrKn [#8275]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` An issue causing the `etcd-backup` Secret to be wrongly deleted for a Shoot cluster due to stale BackupEntry deletion from a previous Shoot creation with the same name is now fixed. by @Kostov6 [#8709]
- `[OPERATOR]` An issue has been fixed that prevented setting the `UnauthenticatedHTTP2DOSMitigation` feature gate. by @timuthy [#8732]
- `[OPERATOR]` Add memory and cpu limits (maxAllowed) to Prometheus (H)VPAs. by @rickardsjp [#8694]
## 🏃 Others

- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.4`. by @shafeeqes [#8727]
- `[OPERATOR]` Partial Shoot maintenance errors are now reported as events on the Shoot and in the Shoot's `LastMaintenance` status. by @danielfoehrKn [#8275]
- `[OPERATOR]` With this release the obervability compoents are updated to the latest release versions. Plutono is now at v2.5.25 and Vali is now at v2.2.9 by @nickytd [#8689]
- `[OPERATOR]` The `.status.lastOperation` in `core.gardener.cloud/v1beta1.Seed` and `operator.gardener.cloud/v1alpha1.Garden` resources is now only updated each `5s` during a reconciliation. Previously, it was updated immediately when a task was finished. by @rfranzke [#8705]
- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]
- `[OPERATOR]` APIServer validation allows updating to expired Kubernetes and machine image versions. by @danielfoehrKn [#8275]
# [gardener/etcd-druid]

## 🏃 Others

- `[OPERATOR]` Alpine image used in init containers is now part of the IMAGEVECTOR_OVERWRITE by @aaronfern [gardener/etcd-druid#714]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.83.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.83.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.83.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.83.0`
node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.83.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.83.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.83.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.83.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.83.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `hack/check-docforge.sh` script is now removed. The repo based manifest are removed in favor of a centrally managed manifests. See https://github.com/gardener/documentation/issues/431. The manifests are now maintained centrally in https://github.com/gardener/documentation/tree/master/.docforge. by @Kostov6 [#8692]
- `[USER]` Validation has been added for `spec.kubernetes.kubeAPIServer.runtimeConfig` field in the Shoot API. Disabling APIs marked as "Required" by gardener is not permitted. by @shafeeqes [#8695]
## ✨ New Features

- `[OPERATOR]` CloudProfiles allow configuring update strategies {patch, minor, major} for machine images that affect update behavior during auto and force update. by @danielfoehrKn [#8275]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `ServiceAccount`s related to garden access secrets for extensions to leak in the seed namespace in the garden cluster after uninstallation of said extensions. by @rfranzke [#8697]
- `[OPERATOR]` A bug causing the managedseed controller to error if the controller restarts and the seed secret is already deleted is now fixed. by @shafeeqes [#8699]
- `[OPERATOR]` An issue causing the `etcd-backup` Secret to be wrongly deleted for a Shoot cluster due to stale BackupEntry deletion from a previous Shoot creation with the same name is now fixed. by @Kostov6 [#8709]
- `[OPERATOR]` An issue has been fixed that prevented setting the `UnauthenticatedHTTP2DOSMitigation` feature gate. by @timuthy [#8732]
- `[OPERATOR]` Add memory and cpu limits (maxAllowed) to Prometheus (H)VPAs. by @rickardsjp [#8694]
## 🏃 Others

- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.4`. by @shafeeqes [#8727]
- `[OPERATOR]` Partial Shoot maintenance errors are now reported as events on the Shoot and in the Shoot's `LastMaintenance` status. by @danielfoehrKn [#8275]
- `[OPERATOR]` With this release the obervability compoents are updated to the latest release versions. Plutono is now at v2.5.25 and Vali is now at v2.2.9 by @nickytd [#8689]
- `[OPERATOR]` The `.status.lastOperation` in `core.gardener.cloud/v1beta1.Seed` and `operator.gardener.cloud/v1alpha1.Garden` resources is now only updated each `5s` during a reconciliation. Previously, it was updated immediately when a task was finished. by @rfranzke [#8705]
- `[OPERATOR]` The testmachinery tests now use `AdminKubeconfig` of the `Shoot`s of `ManagedSeed`s to create seed client. by @shafeeqes [#8698]
- `[OPERATOR]` APIServer validation allows updating to expired Kubernetes and machine image versions. by @danielfoehrKn [#8275]
# [gardener/etcd-druid]

## 🏃 Others

- `[OPERATOR]` Alpine image used in init containers is now part of the IMAGEVECTOR_OVERWRITE by @aaronfern [gardener/etcd-druid#714]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.83.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.83.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.83.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.83.0`
node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.83.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.83.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.83.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.83.0`


</details>
