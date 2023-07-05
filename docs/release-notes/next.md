---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide
- Before upgrade
  - The addons chart was moved to the top-level directory and is managed by its own `Kustomization` now. Moreover, the gardener dashboard is now part of the addons chart allowing to switch it off when not needed. Therefore, you should
  ```sh
  flux suspend ks pre-gardener
 kubectl label -n flux-system hr dashboard-runtime kustomize.toolkit.fluxcd.io/name-
 kubectl label -n flux-system hr dashboard-runtime kustomize.toolkit.fluxcd.io/namespace-
 kubectl label -n flux-system hr dashboard-runtime app.kubernetes.io/managed-by=Helm
 kubectl annotate -n flux-system hr dashboard-runtime meta.helm.sh/release-name=addons
 kubectl annotate -n flux-system hr dashboard-runtime meta.helm.sh/release-namespace=flux-system

 kubectl label -n flux-system hr dashboard-application kustomize.toolkit.fluxcd.io/name-
 kubectl label -n flux-system hr dashboard-application kustomize.toolkit.fluxcd.io/namespace-
 kubectl label -n flux-system hr dashboard-application app.kubernetes.io/managed-by=Helm
 kubectl annotate -n flux-system hr dashboard-application meta.helm.sh/release-name=addons
 kubectl annotate -n flux-system hr dashboard-application meta.helm.sh/release-namespace=flux-system
  ```

- After upgrade
  - Resume the pre-gardener `Kustomization` again
  ```sh
  flux resume ks pre-gardener
  ```

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-alicloud to <code>1.46.1</code></b></summary>

# [machine-controller-manager]
## 🐛 Bug Fixes
* *[USER]* An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. ([gardener/machine-controller-manager#822](https://github.com/gardener/machine-controller-manager/pull/822), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed ([gardener/machine-controller-manager#817](https://github.com/gardener/machine-controller-manager/pull/817), [@himanshu-kun](https://github.com/himanshu-kun))
* *[OPERATOR]* Included `UnavailableReplicas` in determining if a machine deployment status update is needed ([gardener/machine-controller-manager#834](https://github.com/gardener/machine-controller-manager/pull/834), [@ialidzhikov](https://github.com/ialidzhikov))

</details>

<details>
<summary><b>Update provider-azure to <code>1.36.2</code></b></summary>

# [machine-controller-manager]
## 🐛 Bug Fixes
* *[OPERATOR]* Included `UnavailableReplicas` in determining if a machine deployment status update is needed ([gardener/machine-controller-manager#834](https://github.com/gardener/machine-controller-manager/pull/834), [@ialidzhikov](https://github.com/ialidzhikov))

</details>

<details>
<summary><b>Update provider-gcp to <code>1.30.2</code></b></summary>

# [gardener-extension-provider-gcp]
## 🏃 Others
* *[OPERATOR]* This extension is now build with golang 1.20.5. ([gardener/gardener-extension-provider-gcp#626](https://github.com/gardener/gardener-extension-provider-gcp/pull/626), [@vpnachev](https://github.com/vpnachev))
# [machine-controller-manager]
## 🐛 Bug Fixes
* *[OPERATOR]* Included `UnavailableReplicas` in determining if a machine deployment status update is needed ([gardener/machine-controller-manager#834](https://github.com/gardener/machine-controller-manager/pull/834), [@ialidzhikov](https://github.com/ialidzhikov))

</details>

<details>
<summary><b>Update provider-openstack to <code>1.35.1</code></b></summary>

# [machine-controller-manager]
## 🐛 Bug Fixes
* *[OPERATOR]* Included `UnavailableReplicas` in determining if a machine deployment status update is needed ([gardener/machine-controller-manager#834](https://github.com/gardener/machine-controller-manager/pull/834), [@ialidzhikov](https://github.com/ialidzhikov))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.73.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8137](https://github.com/gardener/gardener/pull/8137), [@oliver-goetz](https://github.com/oliver-goetz))
* *[OPERATOR]* Missing permissions were added for the Gardenlet service account for `Machine` objects. This fix is relevant if feature gate `MachineControllerManagerDeployment` is enabled in your landscape. ([gardener/gardener#8123](https://github.com/gardener/gardener/pull/8123), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8100](https://github.com/gardener/gardener/pull/8100), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8105](https://github.com/gardener/gardener/pull/8105), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8118](https://github.com/gardener/gardener/pull/8118), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8090](https://github.com/gardener/gardener/pull/8090), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.73.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8137](https://github.com/gardener/gardener/pull/8137), [@oliver-goetz](https://github.com/oliver-goetz))
* *[OPERATOR]* Missing permissions were added for the Gardenlet service account for `Machine` objects. This fix is relevant if feature gate `MachineControllerManagerDeployment` is enabled in your landscape. ([gardener/gardener#8123](https://github.com/gardener/gardener/pull/8123), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8100](https://github.com/gardener/gardener/pull/8100), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8105](https://github.com/gardener/gardener/pull/8105), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8118](https://github.com/gardener/gardener/pull/8118), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8090](https://github.com/gardener/gardener/pull/8090), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardenlet to <code>1.73.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8137](https://github.com/gardener/gardener/pull/8137), [@oliver-goetz](https://github.com/oliver-goetz))
* *[OPERATOR]* Missing permissions were added for the Gardenlet service account for `Machine` objects. This fix is relevant if feature gate `MachineControllerManagerDeployment` is enabled in your landscape. ([gardener/gardener#8123](https://github.com/gardener/gardener/pull/8123), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8100](https://github.com/gardener/gardener/pull/8100), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8105](https://github.com/gardener/gardener/pull/8105), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8118](https://github.com/gardener/gardener/pull/8118), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8090](https://github.com/gardener/gardener/pull/8090), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update provider-aws to <code>1.44.3</code></b></summary>

# [gardener-extension-provider-aws]
## 🏃 Others
* *[OPERATOR]* The following dependency is updated to adopt a fix for https://github.com/gardener/gardener/issues/8058: ([gardener/gardener-extension-provider-aws#777](https://github.com/gardener/gardener-extension-provider-aws/pull/777), [@ialidzhikov](https://github.com/ialidzhikov))
  * github.com/gardener/gardener: v1.71.0 -> v1.71.5
# [machine-controller-manager]
## 🐛 Bug Fixes
* *[OPERATOR]* Included `UnavailableReplicas` in determining if a machine deployment status update is needed ([gardener/machine-controller-manager#834](https://github.com/gardener/machine-controller-manager/pull/834), [@ialidzhikov](https://github.com/ialidzhikov))

</details>

<details>
<summary><b>Update external-dns-management to <code>0.15.6</code></b></summary>

# [external-dns-management]
## 🐛 Bug Fixes
* *[OPERATOR]* Update controller-manager-library dependency to fix panic on api-resources discovery. ([gardener/external-dns-management#310](https://github.com/gardener/external-dns-management/pull/310), [@MartinWeindel](https://github.com/MartinWeindel))

</details>

<details>
<summary><b>Update provider-alicloud to <code>1.47.0</code></b></summary>

# [gardener-extension-provider-alicloud]
## ⚠️ Breaking Changes
* *[OPERATOR]* With https://github.com/gardener/gardener-extension-provider-alicloud/pull/310 provider-alicloud migrated the volumesnapshot CRDs to a new dedicated ManagedResources. provider-alicloud does now remove the ignored CRDs. ([gardener/gardener-extension-provider-alicloud#606](https://github.com/gardener/gardener-extension-provider-alicloud/pull/606), [@ialidzhikov](https://github.com/ialidzhikov))
  * Before updating to this version of provider-alicloud, make sure that the migration of the volumesnapshot CRDs from the `extension-controlplane-shoot` to the `extension-controlplane-shoot-crds`  ManagedResource completed. If the migration did not complete yet, GRM will interpret the removal of the CRDs as deletion and will delete the CRDs.
* *[OPERATOR]* The `.kubeAPIServer` field in the component config has been removed since it's no longer needed anywhere. ([gardener/gardener-extension-provider-alicloud#619](https://github.com/gardener/gardener-extension-provider-alicloud/pull/619), [@rfranzke](https://github.com/rfranzke))
## ✨ New Features
* *[USER]* The provider-alicloud extension does now support shoot clusters with Kubernetes version 1.27. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md) before upgrading to 1.27. ([gardener/gardener-extension-provider-alicloud#609](https://github.com/gardener/gardener-extension-provider-alicloud/pull/609), [@ary1992](https://github.com/ary1992))
* *[DEVELOPER]* This extension is now compatible with the `MachineControllerManagerDeployment` feature gate of `gardenlet`. ([gardener/gardener-extension-provider-alicloud#617](https://github.com/gardener/gardener-extension-provider-alicloud/pull/617), [@rfranzke](https://github.com/rfranzke))
* *[DEVELOPER]* This extension now uses the simplified `NetworkPolicy` approach for allowing traffic to its webhook server from `kube-apiserver`s of shoot clusters. ([gardener/gardener-extension-provider-alicloud#618](https://github.com/gardener/gardener-extension-provider-alicloud/pull/618), [@rfranzke](https://github.com/rfranzke))
## 🏃 Others
* *[OPERATOR]* Old and obsolete logging configurations are removed. ([gardener/gardener-extension-provider-alicloud#610](https://github.com/gardener/gardener-extension-provider-alicloud/pull/610), [@vlvasilev](https://github.com/vlvasilev))
* *[OPERATOR]* The following images are updated: ([gardener/gardener-extension-provider-alicloud#616](https://github.com/gardener/gardener-extension-provider-alicloud/pull/616), [@ialidzhikov](https://github.com/ialidzhikov))
  * k8s.gcr.io/sig-storage/csi-provisioner:v3.3.0 -> registry.k8s.io/sig-storage/csi-provisioner:v3.3.0
  * k8s.gcr.io/sig-storage/csi-snapshotter:v6.1.0 -> registry.k8s.io/sig-storage/csi-snapshotter:v6.1.0
  * k8s.gcr.io/sig-storage/snapshot-validation-webhook:v6.1.0 -> registry.k8s.io/sig-storage/snapshot-validation-webhook:v6.1.0
  * k8s.gcr.io/sig-storage/snapshot-controller:v6.1.0 -> registry.k8s.io/sig-storage/snapshot-controller:v6.1.0
* *[DEVELOPER]* All code related to the removed `APIServerSNI` feature gate of `gardenlet` has been removed from this extension. ([gardener/gardener-extension-provider-alicloud#619](https://github.com/gardener/gardener-extension-provider-alicloud/pull/619), [@rfranzke](https://github.com/rfranzke))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-provider-alicloud#604](https://github.com/gardener/gardener-extension-provider-alicloud/pull/604), [@ary1992](https://github.com/ary1992))
  * github.com/gardener/gardener: v1.70.2 -> v1.71.2
* *[DEPENDENCY]* The following dependencies were updated: ([gardener/gardener-extension-provider-alicloud#612](https://github.com/gardener/gardener-extension-provider-alicloud/pull/612), [@dimityrmirchev](https://github.com/dimityrmirchev))
  * registry.k8s.io/sig-storage/csi-provisioner v3.2.1 -> v3.2.2
# [machine-controller-manager]
## 🐛 Bug Fixes
* *[USER]* An edge case where all the machineSets were scaled down to zero has been dealt with. ([gardener/machine-controller-manager#804](https://github.com/gardener/machine-controller-manager/pull/804), [@himanshu-kun](https://github.com/himanshu-kun))
* *[USER]* An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. ([gardener/machine-controller-manager#822](https://github.com/gardener/machine-controller-manager/pull/822), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed ([gardener/machine-controller-manager#817](https://github.com/gardener/machine-controller-manager/pull/817), [@himanshu-kun](https://github.com/himanshu-kun))
* *[OPERATOR]* Included `UnavailableReplicas` in determining if a machine deployment status update is needed ([gardener/machine-controller-manager#834](https://github.com/gardener/machine-controller-manager/pull/834), [@ialidzhikov](https://github.com/ialidzhikov))
# [machine-controller-manager-provider-alicloud]
## ⚠️ Breaking Changes
* *[OPERATOR]* Support for migration of machineClass is dropped by the mcm-provider ([gardener/machine-controller-manager-provider-alicloud#51](https://github.com/gardener/machine-controller-manager-provider-alicloud/pull/51), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[USER]* Updated golang version to 1.20.4 ([gardener/machine-controller-manager-provider-alicloud#54](https://github.com/gardener/machine-controller-manager-provider-alicloud/pull/54), [@rishabh-11](https://github.com/rishabh-11))
* *[DEPENDENCY]* upgraded dependency: ([gardener/machine-controller-manager-provider-alicloud#51](https://github.com/gardener/machine-controller-manager-provider-alicloud/pull/51), [@himanshu-kun](https://github.com/himanshu-kun))
  * github.com/gardener/machine-controller-manager -> v0.49.1
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Terrafomer base image has been updated from `alpine:3.17.2` to `alpine:3.18.0` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Builder base image has been updated from `golang:1.19.6` to `golang:1.20.4` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Gardener dependency has been updated from `v1.59.1` to `v1.71.2` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))

## Docker Images
gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.47.0`
gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.47.0`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.74.0</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns` is deprecated and will be removed in future releases. Use field `.spec.systemComponents.nodeLocalDNS.enabled` in `Shoot` instead. Switching on node-local-dns via shoot specification will roll the nodes even if node-local-dns was enabled beforehand via annotation. ([gardener/gardener#8067](https://github.com/gardener/gardener/pull/8067), [@acumino](https://github.com/acumino))
* *[USER]* Annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns-force-tcp-to-{cluster-dns, upstream-dns}` is deprecated and will be removed in future releases. Use field `.spec.systemComponents.{nodeLocalDNSforceTCPToClusterDNS, nodeLocalDNSforceTCPToUpstreamDNS}` in `Shoot` instead. ([gardener/gardener#8067](https://github.com/gardener/gardener/pull/8067), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The Seed's `.spec.settings.ownerChecks` field is now no-op - the `gardener-apiserver` no longer defaults this field and no longer validates it. The field will be set always to `nil` on CREATE/UPDATE request. ([gardener/gardener#7951](https://github.com/gardener/gardener/pull/7951), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
  * Gardener landscape operators specifying this field should no longer specify it. The field will be removed in a future version of Gardener.
* *[OPERATOR]* The GA-ed feature gates `HAControlPlanes` and `FullNetworkPoliciesInRuntimeCluster` have been removed. ([gardener/gardener#8083](https://github.com/gardener/gardener/pull/8083), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* ⚠️ Gardener does no longer support garden, seed, or shoot clusters with Kubernetes versions < 1.22. Make sure to upgrade all existing clusters before upgrading to this Gardener version. ([gardener/gardener#8087](https://github.com/gardener/gardener/pull/8087), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* The `shootstate-extensions` and `shootstate-secret` controllers have been dropped. The `gardenlet`'s component config file should be updated to no longer specify related configuration (`.controllers.{shootSecret,shootStateSync}`). ([gardener/gardener#8136](https://github.com/gardener/gardener/pull/8136), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* `gardener.cloud/operation` annotation was introduced to `seeds`. This includes a verification of its value. Please check your `seeds` for this annotation and remove it if necessary prior to the update. ([gardener/gardener#8152](https://github.com/gardener/gardener/pull/8152), [@timebertt](https://github.com/timebertt))
* *[OPERATOR]* A new field `.spec.virtualCluster.dns.domains` was added to the `Garden` API. This field allows to expose the `kube-apiserver` of the virtual cluster via multiple domains. Earlier, the API only accepted one domain name via `.spec.virtualCluster.dns.domain`. ([gardener/gardener#8173](https://github.com/gardener/gardener/pull/8173), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
  * ⚠️ With this change `.spec.virtualCluster.dns.domain` is deprecated and will be removed in the next release. Please update your `Garden` resource to the new `.spec.virtualCluster.dns.domains` field by removing the existing domain configuration from `dns.domain` and add it as the first entry of `dns.domains`.
* *[DEVELOPER]* The deprecated local development setups have been removed. From now on, only the `kind`-based setups are supported. Please refer to [this guide](https://github.com/gardener/gardener/blob/master/docs/development/local_setup.md) for all information. ([gardener/gardener#8075](https://github.com/gardener/gardener/pull/8075), [@oliver-goetz](https://github.com/oliver-goetz))
* *[DEVELOPER]* The deprecated `allow-to-seed-apiserver` `NetworkPolicy` is no longer available in garden or seed clusters. Use `allow-to-runtime-apiserver` instead. ([gardener/gardener#8083](https://github.com/gardener/gardener/pull/8083), [@rfranzke](https://github.com/rfranzke))
## ✨ New Features
* *[USER]* The `VerticalPodAutoscaler` resources for `kube-proxy`s is no longer recreated when the Kubernetes patch version of the `Shoot` or the respective worker pools is updated. This ensures updated `kube-proxy`s keep the same CPU/memory resource requirements as before the patch version update. In order to put this change into effect, all existing `VerticalPodAutoscaler`s for `kube-proxy`s are getting recreated. ([gardener/gardener#8071](https://github.com/gardener/gardener/pull/8071), [@rfranzke](https://github.com/rfranzke))
* *[USER]* Shoot addon `nginx-ingress-controller` image is updated to `v1.8.0` for Kubernetes `v1.24+` clusters, to `v1.6.4` for Kubernetes `v1.23` clusters, and to `v1.4.0` for Kubernetes `v1.22` clusters. ([gardener/gardener#8096](https://github.com/gardener/gardener/pull/8096), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* Gardener uses an `InternalSecret` per Shoot for syncing the client CA to the project namespace in the garden cluster (named `<shoot-name>.ca-client`). The `shoots/adminkubeconfig` subresource signs short-lived client certificates by retrieving the CA from the `InternalSecret`. ([gardener/gardener#8088](https://github.com/gardener/gardener/pull/8088), [@timebertt](https://github.com/timebertt))
* *[OPERATOR]* A new controller in `gardenlet` for periodically backing up the `ShootState` for `Shoot`s has been introduced. This controller is only activated when `gardenlet` is responsible for an unmanaged `Seed` (i.e., one not backed by a `ManagedSeed` object). By default, backups are taken roughly each `6h`. ([gardener/gardener#8112](https://github.com/gardener/gardener/pull/8112), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* If `gardenlet` is responsible for a managed `Seed`, it will delete all `ShootState` resources for its `Shoot`s that are not currently in migration. See also [GEP-22](https://github.com/gardener/gardener/blob/master/docs/proposals/22-improved-usage-of-shootstate-api.md) for further details about the motivation. ([gardener/gardener#8144](https://github.com/gardener/gardener/pull/8144), [@rfranzke](https://github.com/rfranzke))
## 🐛 Bug Fixes
* *[USER]* A regression was fixed that prevented deletions for shoot clusters which were created with a wrong configuration (e.g. with an unavailable domain name). ([gardener/gardener#8122](https://github.com/gardener/gardener/pull/8122), [@timuthy](https://github.com/timuthy))
* *[OPERATOR]* Missing permissions were added for the Gardenlet service account for `Machine` objects. This fix is relevant if feature gate `MachineControllerManagerDeployment` is enabled in your landscape. ([gardener/gardener#8121](https://github.com/gardener/gardener/pull/8121), [@timuthy](https://github.com/timuthy))
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8129](https://github.com/gardener/gardener/pull/8129), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* `gardener-resource-manager`'s `system-components-config` webhook no longer adds the toleration for the `ToBeDeletedByClusterAutoscaler` taint to system components in shoot clusters. The `ToBeDeletedByClusterAutoscaler` taint is maintained by the `cluster-autoscaler`. This was breaking `cluster-autoscaler`'s drain mechanism when scaling down an under-utilized node. It was causing just evicted system components from to be deleted node to be scheduled again on the to be deleted node. ([gardener/gardener#8172](https://github.com/gardener/gardener/pull/8172), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed for Istio-Ingress Gateways for seeds that use `ExposureClassHandler`s. Earlier, annotations in `seed.spec.settings.loadBalancerServices` caused an override of the ones specified in `gardenletConfiguration.exposureClassHandler[].loadBalancerService` for zonal Istios. Now, annotations in `gardenletConfiguration.exposureClassHandler[].loadBalancerService` are given priority, like it was already the case of the global Istio. ([gardener/gardener#8178](https://github.com/gardener/gardener/pull/8178), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[DEVELOPER]* On deletion, the generic `ControlPlane` actuator will now redeploy the cloud config chart to allow provider extensions update the content with the most up-to-date information. ([gardener/gardener#8106](https://github.com/gardener/gardener/pull/8106), [@kon-angelo](https://github.com/kon-angelo))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8081](https://github.com/gardener/gardener/pull/8081), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8085](https://github.com/gardener/gardener/pull/8085), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8103](https://github.com/gardener/gardener/pull/8103), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Vali is now updated to version v2.2.6 ([gardener/gardener#8111](https://github.com/gardener/gardener/pull/8111), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8115](https://github.com/gardener/gardener/pull/8115), [@timuthy](https://github.com/timuthy))
* *[OPERATOR]* All components in the gardener logging stack are now updated to the following respective versions. Fluent-bit to 2.1.4, Fluent-operator to 2.3.0 and logging to 0.55.3 ([gardener/gardener#8133](https://github.com/gardener/gardener/pull/8133), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Decouple progess update of gardener operator from task flow logic and thereby prevent concurrency bugs. ([gardener/gardener#8145](https://github.com/gardener/gardener/pull/8145), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Adapt vpa-updater QPS limits such that it doesn't get throttled on large clusters ([gardener/gardener#8174](https://github.com/gardener/gardener/pull/8174), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The kind cluster used in local setup does now use the new way in containerd to configure registry mirrors. ([gardener/gardener#8047](https://github.com/gardener/gardener/pull/8047), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEVELOPER]* `extensions.gardener.cloud/v1alpha1.ControlPlane` is now deployed after `kube-apiserver` in the Shoot reconciliation flow. ([gardener/gardener#8182](https://github.com/gardener/gardener/pull/8182), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
# [etcd-druid]
## 🏃 Others
* *[OPERATOR]* Bumped up the custom image version to v3.4.13-bootstrap-11 ([gardener/etcd-druid#624](https://github.com/gardener/etcd-druid/pull/624), [@abdasgupta](https://github.com/abdasgupta))
* *[OPERATOR]* Druid now exposes metrics related to snapshot compaction, on default port 8080. Please expose the desired metrics port via the etcd-druid service to allow metrics to be scraped by a Prometheus instance. ([gardener/etcd-druid#625](https://github.com/gardener/etcd-druid/pull/625), [@abdasgupta](https://github.com/abdasgupta))
# [logging]
## 🏃 Others
* *[OPERATOR]* The logging e2e event logger test is now adapted to vali logging stack. ([gardener/logging#199](https://github.com/gardener/logging/pull/199), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Now git revision and commit ids are properly propagated through build variables. These are showed in the fluent-bit plugin logs during start. ([gardener/logging#200](https://github.com/gardener/logging/pull/200), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Base image on `telegraf` and `tune2fs` is upgraded from 3.17.2 to 3.18.0 ([gardener/logging#201](https://github.com/gardener/logging/pull/201), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Gardener-based e2e test for the event-logger. ([gardener/logging#191](https://github.com/gardener/logging/pull/191), [@vlvasilev](https://github.com/vlvasilev))
* *[DEVELOPER]* Introduces a skaffold local development pipeline to fluent-bit-vali-plugin ([gardener/logging#202](https://github.com/gardener/logging/pull/202), [@nickytd](https://github.com/nickytd))
* *[DEVELOPER]* The project vendors the latest released gardener version - v1.73.0 ([gardener/logging#204](https://github.com/gardener/logging/pull/204), [@nickytd](https://github.com/nickytd))
* *[DEVELOPER]* The `fluent-bit-vali-plugin` now supports fluent-bit v2.1.0 and above. ([gardener/logging#205](https://github.com/gardener/logging/pull/205), [@nickytd](https://github.com/nickytd))
# [machine-controller-manager]
## 🐛 Bug Fixes
* *[OPERATOR]* Included `UnavailableReplicas` in determining if a machine deployment status update is needed ([gardener/machine-controller-manager#834](https://github.com/gardener/machine-controller-manager/pull/834), [@ialidzhikov](https://github.com/ialidzhikov))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.74.0</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns` is deprecated and will be removed in future releases. Use field `.spec.systemComponents.nodeLocalDNS.enabled` in `Shoot` instead. Switching on node-local-dns via shoot specification will roll the nodes even if node-local-dns was enabled beforehand via annotation. ([gardener/gardener#8067](https://github.com/gardener/gardener/pull/8067), [@acumino](https://github.com/acumino))
* *[USER]* Annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns-force-tcp-to-{cluster-dns, upstream-dns}` is deprecated and will be removed in future releases. Use field `.spec.systemComponents.{nodeLocalDNSforceTCPToClusterDNS, nodeLocalDNSforceTCPToUpstreamDNS}` in `Shoot` instead. ([gardener/gardener#8067](https://github.com/gardener/gardener/pull/8067), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The Seed's `.spec.settings.ownerChecks` field is now no-op - the `gardener-apiserver` no longer defaults this field and no longer validates it. The field will be set always to `nil` on CREATE/UPDATE request. ([gardener/gardener#7951](https://github.com/gardener/gardener/pull/7951), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
  * Gardener landscape operators specifying this field should no longer specify it. The field will be removed in a future version of Gardener.
* *[OPERATOR]* The GA-ed feature gates `HAControlPlanes` and `FullNetworkPoliciesInRuntimeCluster` have been removed. ([gardener/gardener#8083](https://github.com/gardener/gardener/pull/8083), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* ⚠️ Gardener does no longer support garden, seed, or shoot clusters with Kubernetes versions < 1.22. Make sure to upgrade all existing clusters before upgrading to this Gardener version. ([gardener/gardener#8087](https://github.com/gardener/gardener/pull/8087), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* The `shootstate-extensions` and `shootstate-secret` controllers have been dropped. The `gardenlet`'s component config file should be updated to no longer specify related configuration (`.controllers.{shootSecret,shootStateSync}`). ([gardener/gardener#8136](https://github.com/gardener/gardener/pull/8136), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* `gardener.cloud/operation` annotation was introduced to `seeds`. This includes a verification of its value. Please check your `seeds` for this annotation and remove it if necessary prior to the update. ([gardener/gardener#8152](https://github.com/gardener/gardener/pull/8152), [@timebertt](https://github.com/timebertt))
* *[OPERATOR]* A new field `.spec.virtualCluster.dns.domains` was added to the `Garden` API. This field allows to expose the `kube-apiserver` of the virtual cluster via multiple domains. Earlier, the API only accepted one domain name via `.spec.virtualCluster.dns.domain`. ([gardener/gardener#8173](https://github.com/gardener/gardener/pull/8173), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
  * ⚠️ With this change `.spec.virtualCluster.dns.domain` is deprecated and will be removed in the next release. Please update your `Garden` resource to the new `.spec.virtualCluster.dns.domains` field by removing the existing domain configuration from `dns.domain` and add it as the first entry of `dns.domains`.
* *[DEVELOPER]* The deprecated local development setups have been removed. From now on, only the `kind`-based setups are supported. Please refer to [this guide](https://github.com/gardener/gardener/blob/master/docs/development/local_setup.md) for all information. ([gardener/gardener#8075](https://github.com/gardener/gardener/pull/8075), [@oliver-goetz](https://github.com/oliver-goetz))
* *[DEVELOPER]* The deprecated `allow-to-seed-apiserver` `NetworkPolicy` is no longer available in garden or seed clusters. Use `allow-to-runtime-apiserver` instead. ([gardener/gardener#8083](https://github.com/gardener/gardener/pull/8083), [@rfranzke](https://github.com/rfranzke))
## ✨ New Features
* *[USER]* The `VerticalPodAutoscaler` resources for `kube-proxy`s is no longer recreated when the Kubernetes patch version of the `Shoot` or the respective worker pools is updated. This ensures updated `kube-proxy`s keep the same CPU/memory resource requirements as before the patch version update. In order to put this change into effect, all existing `VerticalPodAutoscaler`s for `kube-proxy`s are getting recreated. ([gardener/gardener#8071](https://github.com/gardener/gardener/pull/8071), [@rfranzke](https://github.com/rfranzke))
* *[USER]* Shoot addon `nginx-ingress-controller` image is updated to `v1.8.0` for Kubernetes `v1.24+` clusters, to `v1.6.4` for Kubernetes `v1.23` clusters, and to `v1.4.0` for Kubernetes `v1.22` clusters. ([gardener/gardener#8096](https://github.com/gardener/gardener/pull/8096), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* Gardener uses an `InternalSecret` per Shoot for syncing the client CA to the project namespace in the garden cluster (named `<shoot-name>.ca-client`). The `shoots/adminkubeconfig` subresource signs short-lived client certificates by retrieving the CA from the `InternalSecret`. ([gardener/gardener#8088](https://github.com/gardener/gardener/pull/8088), [@timebertt](https://github.com/timebertt))
* *[OPERATOR]* A new controller in `gardenlet` for periodically backing up the `ShootState` for `Shoot`s has been introduced. This controller is only activated when `gardenlet` is responsible for an unmanaged `Seed` (i.e., one not backed by a `ManagedSeed` object). By default, backups are taken roughly each `6h`. ([gardener/gardener#8112](https://github.com/gardener/gardener/pull/8112), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* If `gardenlet` is responsible for a managed `Seed`, it will delete all `ShootState` resources for its `Shoot`s that are not currently in migration. See also [GEP-22](https://github.com/gardener/gardener/blob/master/docs/proposals/22-improved-usage-of-shootstate-api.md) for further details about the motivation. ([gardener/gardener#8144](https://github.com/gardener/gardener/pull/8144), [@rfranzke](https://github.com/rfranzke))
## 🐛 Bug Fixes
* *[USER]* A regression was fixed that prevented deletions for shoot clusters which were created with a wrong configuration (e.g. with an unavailable domain name). ([gardener/gardener#8122](https://github.com/gardener/gardener/pull/8122), [@timuthy](https://github.com/timuthy))
* *[OPERATOR]* Missing permissions were added for the Gardenlet service account for `Machine` objects. This fix is relevant if feature gate `MachineControllerManagerDeployment` is enabled in your landscape. ([gardener/gardener#8121](https://github.com/gardener/gardener/pull/8121), [@timuthy](https://github.com/timuthy))
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8129](https://github.com/gardener/gardener/pull/8129), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* `gardener-resource-manager`'s `system-components-config` webhook no longer adds the toleration for the `ToBeDeletedByClusterAutoscaler` taint to system components in shoot clusters. The `ToBeDeletedByClusterAutoscaler` taint is maintained by the `cluster-autoscaler`. This was breaking `cluster-autoscaler`'s drain mechanism when scaling down an under-utilized node. It was causing just evicted system components from to be deleted node to be scheduled again on the to be deleted node. ([gardener/gardener#8172](https://github.com/gardener/gardener/pull/8172), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed for Istio-Ingress Gateways for seeds that use `ExposureClassHandler`s. Earlier, annotations in `seed.spec.settings.loadBalancerServices` caused an override of the ones specified in `gardenletConfiguration.exposureClassHandler[].loadBalancerService` for zonal Istios. Now, annotations in `gardenletConfiguration.exposureClassHandler[].loadBalancerService` are given priority, like it was already the case of the global Istio. ([gardener/gardener#8178](https://github.com/gardener/gardener/pull/8178), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[DEVELOPER]* On deletion, the generic `ControlPlane` actuator will now redeploy the cloud config chart to allow provider extensions update the content with the most up-to-date information. ([gardener/gardener#8106](https://github.com/gardener/gardener/pull/8106), [@kon-angelo](https://github.com/kon-angelo))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8081](https://github.com/gardener/gardener/pull/8081), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8085](https://github.com/gardener/gardener/pull/8085), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8103](https://github.com/gardener/gardener/pull/8103), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Vali is now updated to version v2.2.6 ([gardener/gardener#8111](https://github.com/gardener/gardener/pull/8111), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8115](https://github.com/gardener/gardener/pull/8115), [@timuthy](https://github.com/timuthy))
* *[OPERATOR]* All components in the gardener logging stack are now updated to the following respective versions. Fluent-bit to 2.1.4, Fluent-operator to 2.3.0 and logging to 0.55.3 ([gardener/gardener#8133](https://github.com/gardener/gardener/pull/8133), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Decouple progess update of gardener operator from task flow logic and thereby prevent concurrency bugs. ([gardener/gardener#8145](https://github.com/gardener/gardener/pull/8145), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Adapt vpa-updater QPS limits such that it doesn't get throttled on large clusters ([gardener/gardener#8174](https://github.com/gardener/gardener/pull/8174), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The kind cluster used in local setup does now use the new way in containerd to configure registry mirrors. ([gardener/gardener#8047](https://github.com/gardener/gardener/pull/8047), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEVELOPER]* `extensions.gardener.cloud/v1alpha1.ControlPlane` is now deployed after `kube-apiserver` in the Shoot reconciliation flow. ([gardener/gardener#8182](https://github.com/gardener/gardener/pull/8182), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
# [etcd-druid]
## 🏃 Others
* *[OPERATOR]* Bumped up the custom image version to v3.4.13-bootstrap-11 ([gardener/etcd-druid#624](https://github.com/gardener/etcd-druid/pull/624), [@abdasgupta](https://github.com/abdasgupta))
* *[OPERATOR]* Druid now exposes metrics related to snapshot compaction, on default port 8080. Please expose the desired metrics port via the etcd-druid service to allow metrics to be scraped by a Prometheus instance. ([gardener/etcd-druid#625](https://github.com/gardener/etcd-druid/pull/625), [@abdasgupta](https://github.com/abdasgupta))
# [logging]
## 🏃 Others
* *[OPERATOR]* The logging e2e event logger test is now adapted to vali logging stack. ([gardener/logging#199](https://github.com/gardener/logging/pull/199), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Now git revision and commit ids are properly propagated through build variables. These are showed in the fluent-bit plugin logs during start. ([gardener/logging#200](https://github.com/gardener/logging/pull/200), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Base image on `telegraf` and `tune2fs` is upgraded from 3.17.2 to 3.18.0 ([gardener/logging#201](https://github.com/gardener/logging/pull/201), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Gardener-based e2e test for the event-logger. ([gardener/logging#191](https://github.com/gardener/logging/pull/191), [@vlvasilev](https://github.com/vlvasilev))
* *[DEVELOPER]* Introduces a skaffold local development pipeline to fluent-bit-vali-plugin ([gardener/logging#202](https://github.com/gardener/logging/pull/202), [@nickytd](https://github.com/nickytd))
* *[DEVELOPER]* The project vendors the latest released gardener version - v1.73.0 ([gardener/logging#204](https://github.com/gardener/logging/pull/204), [@nickytd](https://github.com/nickytd))
* *[DEVELOPER]* The `fluent-bit-vali-plugin` now supports fluent-bit v2.1.0 and above. ([gardener/logging#205](https://github.com/gardener/logging/pull/205), [@nickytd](https://github.com/nickytd))
# [machine-controller-manager]
## 🐛 Bug Fixes
* *[OPERATOR]* Included `UnavailableReplicas` in determining if a machine deployment status update is needed ([gardener/machine-controller-manager#834](https://github.com/gardener/machine-controller-manager/pull/834), [@ialidzhikov](https://github.com/ialidzhikov))

</details>

<details>
<summary><b>Update gardenlet to <code>1.74.0</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns` is deprecated and will be removed in future releases. Use field `.spec.systemComponents.nodeLocalDNS.enabled` in `Shoot` instead. Switching on node-local-dns via shoot specification will roll the nodes even if node-local-dns was enabled beforehand via annotation. ([gardener/gardener#8067](https://github.com/gardener/gardener/pull/8067), [@acumino](https://github.com/acumino))
* *[USER]* Annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns-force-tcp-to-{cluster-dns, upstream-dns}` is deprecated and will be removed in future releases. Use field `.spec.systemComponents.{nodeLocalDNSforceTCPToClusterDNS, nodeLocalDNSforceTCPToUpstreamDNS}` in `Shoot` instead. ([gardener/gardener#8067](https://github.com/gardener/gardener/pull/8067), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The Seed's `.spec.settings.ownerChecks` field is now no-op - the `gardener-apiserver` no longer defaults this field and no longer validates it. The field will be set always to `nil` on CREATE/UPDATE request. ([gardener/gardener#7951](https://github.com/gardener/gardener/pull/7951), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
  * Gardener landscape operators specifying this field should no longer specify it. The field will be removed in a future version of Gardener.
* *[OPERATOR]* The GA-ed feature gates `HAControlPlanes` and `FullNetworkPoliciesInRuntimeCluster` have been removed. ([gardener/gardener#8083](https://github.com/gardener/gardener/pull/8083), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* ⚠️ Gardener does no longer support garden, seed, or shoot clusters with Kubernetes versions < 1.22. Make sure to upgrade all existing clusters before upgrading to this Gardener version. ([gardener/gardener#8087](https://github.com/gardener/gardener/pull/8087), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* The `shootstate-extensions` and `shootstate-secret` controllers have been dropped. The `gardenlet`'s component config file should be updated to no longer specify related configuration (`.controllers.{shootSecret,shootStateSync}`). ([gardener/gardener#8136](https://github.com/gardener/gardener/pull/8136), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* `gardener.cloud/operation` annotation was introduced to `seeds`. This includes a verification of its value. Please check your `seeds` for this annotation and remove it if necessary prior to the update. ([gardener/gardener#8152](https://github.com/gardener/gardener/pull/8152), [@timebertt](https://github.com/timebertt))
* *[OPERATOR]* A new field `.spec.virtualCluster.dns.domains` was added to the `Garden` API. This field allows to expose the `kube-apiserver` of the virtual cluster via multiple domains. Earlier, the API only accepted one domain name via `.spec.virtualCluster.dns.domain`. ([gardener/gardener#8173](https://github.com/gardener/gardener/pull/8173), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
  * ⚠️ With this change `.spec.virtualCluster.dns.domain` is deprecated and will be removed in the next release. Please update your `Garden` resource to the new `.spec.virtualCluster.dns.domains` field by removing the existing domain configuration from `dns.domain` and add it as the first entry of `dns.domains`.
* *[DEVELOPER]* The deprecated local development setups have been removed. From now on, only the `kind`-based setups are supported. Please refer to [this guide](https://github.com/gardener/gardener/blob/master/docs/development/local_setup.md) for all information. ([gardener/gardener#8075](https://github.com/gardener/gardener/pull/8075), [@oliver-goetz](https://github.com/oliver-goetz))
* *[DEVELOPER]* The deprecated `allow-to-seed-apiserver` `NetworkPolicy` is no longer available in garden or seed clusters. Use `allow-to-runtime-apiserver` instead. ([gardener/gardener#8083](https://github.com/gardener/gardener/pull/8083), [@rfranzke](https://github.com/rfranzke))
## ✨ New Features
* *[USER]* The `VerticalPodAutoscaler` resources for `kube-proxy`s is no longer recreated when the Kubernetes patch version of the `Shoot` or the respective worker pools is updated. This ensures updated `kube-proxy`s keep the same CPU/memory resource requirements as before the patch version update. In order to put this change into effect, all existing `VerticalPodAutoscaler`s for `kube-proxy`s are getting recreated. ([gardener/gardener#8071](https://github.com/gardener/gardener/pull/8071), [@rfranzke](https://github.com/rfranzke))
* *[USER]* Shoot addon `nginx-ingress-controller` image is updated to `v1.8.0` for Kubernetes `v1.24+` clusters, to `v1.6.4` for Kubernetes `v1.23` clusters, and to `v1.4.0` for Kubernetes `v1.22` clusters. ([gardener/gardener#8096](https://github.com/gardener/gardener/pull/8096), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* Gardener uses an `InternalSecret` per Shoot for syncing the client CA to the project namespace in the garden cluster (named `<shoot-name>.ca-client`). The `shoots/adminkubeconfig` subresource signs short-lived client certificates by retrieving the CA from the `InternalSecret`. ([gardener/gardener#8088](https://github.com/gardener/gardener/pull/8088), [@timebertt](https://github.com/timebertt))
* *[OPERATOR]* A new controller in `gardenlet` for periodically backing up the `ShootState` for `Shoot`s has been introduced. This controller is only activated when `gardenlet` is responsible for an unmanaged `Seed` (i.e., one not backed by a `ManagedSeed` object). By default, backups are taken roughly each `6h`. ([gardener/gardener#8112](https://github.com/gardener/gardener/pull/8112), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* If `gardenlet` is responsible for a managed `Seed`, it will delete all `ShootState` resources for its `Shoot`s that are not currently in migration. See also [GEP-22](https://github.com/gardener/gardener/blob/master/docs/proposals/22-improved-usage-of-shootstate-api.md) for further details about the motivation. ([gardener/gardener#8144](https://github.com/gardener/gardener/pull/8144), [@rfranzke](https://github.com/rfranzke))
## 🐛 Bug Fixes
* *[USER]* A regression was fixed that prevented deletions for shoot clusters which were created with a wrong configuration (e.g. with an unavailable domain name). ([gardener/gardener#8122](https://github.com/gardener/gardener/pull/8122), [@timuthy](https://github.com/timuthy))
* *[OPERATOR]* Missing permissions were added for the Gardenlet service account for `Machine` objects. This fix is relevant if feature gate `MachineControllerManagerDeployment` is enabled in your landscape. ([gardener/gardener#8121](https://github.com/gardener/gardener/pull/8121), [@timuthy](https://github.com/timuthy))
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8129](https://github.com/gardener/gardener/pull/8129), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* `gardener-resource-manager`'s `system-components-config` webhook no longer adds the toleration for the `ToBeDeletedByClusterAutoscaler` taint to system components in shoot clusters. The `ToBeDeletedByClusterAutoscaler` taint is maintained by the `cluster-autoscaler`. This was breaking `cluster-autoscaler`'s drain mechanism when scaling down an under-utilized node. It was causing just evicted system components from to be deleted node to be scheduled again on the to be deleted node. ([gardener/gardener#8172](https://github.com/gardener/gardener/pull/8172), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed for Istio-Ingress Gateways for seeds that use `ExposureClassHandler`s. Earlier, annotations in `seed.spec.settings.loadBalancerServices` caused an override of the ones specified in `gardenletConfiguration.exposureClassHandler[].loadBalancerService` for zonal Istios. Now, annotations in `gardenletConfiguration.exposureClassHandler[].loadBalancerService` are given priority, like it was already the case of the global Istio. ([gardener/gardener#8178](https://github.com/gardener/gardener/pull/8178), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[DEVELOPER]* On deletion, the generic `ControlPlane` actuator will now redeploy the cloud config chart to allow provider extensions update the content with the most up-to-date information. ([gardener/gardener#8106](https://github.com/gardener/gardener/pull/8106), [@kon-angelo](https://github.com/kon-angelo))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8081](https://github.com/gardener/gardener/pull/8081), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8085](https://github.com/gardener/gardener/pull/8085), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8103](https://github.com/gardener/gardener/pull/8103), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Vali is now updated to version v2.2.6 ([gardener/gardener#8111](https://github.com/gardener/gardener/pull/8111), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8115](https://github.com/gardener/gardener/pull/8115), [@timuthy](https://github.com/timuthy))
* *[OPERATOR]* All components in the gardener logging stack are now updated to the following respective versions. Fluent-bit to 2.1.4, Fluent-operator to 2.3.0 and logging to 0.55.3 ([gardener/gardener#8133](https://github.com/gardener/gardener/pull/8133), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Decouple progess update of gardener operator from task flow logic and thereby prevent concurrency bugs. ([gardener/gardener#8145](https://github.com/gardener/gardener/pull/8145), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Adapt vpa-updater QPS limits such that it doesn't get throttled on large clusters ([gardener/gardener#8174](https://github.com/gardener/gardener/pull/8174), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The kind cluster used in local setup does now use the new way in containerd to configure registry mirrors. ([gardener/gardener#8047](https://github.com/gardener/gardener/pull/8047), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEVELOPER]* `extensions.gardener.cloud/v1alpha1.ControlPlane` is now deployed after `kube-apiserver` in the Shoot reconciliation flow. ([gardener/gardener#8182](https://github.com/gardener/gardener/pull/8182), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
# [etcd-druid]
## 🏃 Others
* *[OPERATOR]* Bumped up the custom image version to v3.4.13-bootstrap-11 ([gardener/etcd-druid#624](https://github.com/gardener/etcd-druid/pull/624), [@abdasgupta](https://github.com/abdasgupta))
* *[OPERATOR]* Druid now exposes metrics related to snapshot compaction, on default port 8080. Please expose the desired metrics port via the etcd-druid service to allow metrics to be scraped by a Prometheus instance. ([gardener/etcd-druid#625](https://github.com/gardener/etcd-druid/pull/625), [@abdasgupta](https://github.com/abdasgupta))
# [logging]
## 🏃 Others
* *[OPERATOR]* The logging e2e event logger test is now adapted to vali logging stack. ([gardener/logging#199](https://github.com/gardener/logging/pull/199), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Now git revision and commit ids are properly propagated through build variables. These are showed in the fluent-bit plugin logs during start. ([gardener/logging#200](https://github.com/gardener/logging/pull/200), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Base image on `telegraf` and `tune2fs` is upgraded from 3.17.2 to 3.18.0 ([gardener/logging#201](https://github.com/gardener/logging/pull/201), [@nickytd](https://github.com/nickytd))
* *[OPERATOR]* Gardener-based e2e test for the event-logger. ([gardener/logging#191](https://github.com/gardener/logging/pull/191), [@vlvasilev](https://github.com/vlvasilev))
* *[DEVELOPER]* Introduces a skaffold local development pipeline to fluent-bit-vali-plugin ([gardener/logging#202](https://github.com/gardener/logging/pull/202), [@nickytd](https://github.com/nickytd))
* *[DEVELOPER]* The project vendors the latest released gardener version - v1.73.0 ([gardener/logging#204](https://github.com/gardener/logging/pull/204), [@nickytd](https://github.com/nickytd))
* *[DEVELOPER]* The `fluent-bit-vali-plugin` now supports fluent-bit v2.1.0 and above. ([gardener/logging#205](https://github.com/gardener/logging/pull/205), [@nickytd](https://github.com/nickytd))
# [machine-controller-manager]
## 🐛 Bug Fixes
* *[OPERATOR]* Included `UnavailableReplicas` in determining if a machine deployment status update is needed ([gardener/machine-controller-manager#834](https://github.com/gardener/machine-controller-manager/pull/834), [@ialidzhikov](https://github.com/ialidzhikov))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.74.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* Fix network annotations to allow fluent-bit connecting to shoot Valis. ([gardener/gardener#8200](https://github.com/gardener/gardener/pull/8200), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.74.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* Fix network annotations to allow fluent-bit connecting to shoot Valis. ([gardener/gardener#8200](https://github.com/gardener/gardener/pull/8200), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardenlet to <code>1.74.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* Fix network annotations to allow fluent-bit connecting to shoot Valis. ([gardener/gardener#8200](https://github.com/gardener/gardener/pull/8200), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update provider-alicloud to <code>1.47.1</code></b></summary>

no release notes available

</details>

<details>
<summary><b>Update provider-aws to <code>1.45.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## ✨ New Features

- `[DEVELOPER]` This extension now uses the simplified `NetworkPolicy` approach for allowing traffic to its webhook server from `kube-apiserver`s of shoot clusters. by @rfranzke [#772]
- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.27. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md) before upgrading to 1.27.  by @ary1992 [#759]
## ⚠️ Breaking Changes

- `[OPERATOR]` With https://github.com/gardener/gardener-extension-provider-aws/pull/337 provider-aws migrated the volumesnapshot CRDs to a new dedicated ManagedResources. provider-aws does now remove the ignored CRDs. by @ialidzhikov [#752]
- Before updating to this version of provider-aws, make sure that the migration of the volumesnapshot CRDs from the `extension-controlplane-shoot` to the `extension-controlplane-shoot-crds`  ManagedResource completed. If the migration did not complete yet, GRM will interpret the removal of the CRDs as deletion and will delete the CRDs.
## 🏃 Others

- `[OPERATOR]` Old and obsolete logging configurations are removed. by @vlvasilev [#765]
- `[DEPENDENCY]` The following dependencies were updated: by @dimityrmirchev [#768]
  - registry.k8s.io/sig-storage/csi-provisioner v3.4.0 -> v3.4.1
- `[DEVELOPER]` All code related to the removed `APIServerSNI` feature gate of `gardenlet` has been removed from this extension. by @rfranzke [#773]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix the name of the aws-csi-volume-modifier container the in the respective VPA resource. by @bd3lage [#763]
- `[OPERATOR]` Handle S3 bucket policy IAM ARN for China and GovCloud (US) regions. by @shreyas-s-rao [#766]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @ialidzhikov [gardener/machine-controller-manager#834]

</details>

<details>
<summary><b>Update provider-gcp to <code>1.31.0</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @ialidzhikov [gardener/machine-controller-manager#834]
# [gardener/gardener-extension-provider-gcp]

## ✨ New Features

- `[USER]` The GCP extension does now support shoot clusters with Kubernetes version 1.27. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md) before upgrading to 1.27.  by @ary1992 [#615]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies were updated: by @dimityrmirchev [#618]
  - registry.k8s.io/sig-storage/csi-provisioner v3.4.0 -> v3.4.1
- `[DEPENDENCY]` The following dependency is updated: by @ary1992 [#604]
- github.com/gardener/gardener: v1.70.2 -> v1.73.0
- `[OPERATOR]` Old and obsolete logging configurations are removed. by @vlvasilev [#616]
- `[OPERATOR]` This extension is now build with golang 1.20.5. by @vpnachev [#622]
- `[DEVELOPER]` All code related to the removed `APIServerSNI` feature gate of `gardenlet` has been removed from this extension. by @rfranzke [#623]
## ⚠️ Breaking Changes

- `[OPERATOR]` With https://github.com/gardener/gardener-extension-provider-gcp/pull/283 provider-gcp migrated the volumesnapshot CRDs to a new dedicated ManagedResources. provider-gcp does now remove the ignored CRDs. by @ialidzhikov [#606]
- Before updating to this version of provider-gcp, make sure that the migration of the volumesnapshot CRDs from the `extension-controlplane-shoot` to the `extension-controlplane-shoot-crds`  ManagedResource completed. If the migration did not complete yet, GRM will interpret the removal of the CRDs as deletion and will delete the CRDs.

</details>

<details>
<summary><b>Update provider-azure to <code>1.37.0</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ✨ New Features

- `[USER]` The Azure extension does now support shoot clusters with Kubernetes version 1.27. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.27.md) before upgrading to 1.27.  by @ary1992 [#699]
## 🏃 Others

- `[OPERATOR]` Fix an issue with the bastion integration testing panicking on cleanup due to the security group having being deleted. by @kon-angelo [#709]
- `[OPERATOR]` Old and obsolete logging configurations are removed. by @vlvasilev [#700]
- `[OPERATOR]` Add calico scheme to azure-validator. by @kon-angelo [#696]
- `[OPERATOR]` The following images are updated:  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-controller-manager: v1.24.20 -> v1.24.21 (for Kubernetes 1.24)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-controller-manager: v1.25.14 -> v1.25.15 (for Kubernetes 1.25)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.23.25 -> v1.23.30 (for Kubernetes 1.23)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.24.14 -> v1.24.21 (for Kubernetes 1.24)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.25.6 -> v1.25.15 (for Kubernetes 1.25)  
  - mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.26.2 -> v1.26.11 (for Kubernetes 1.26) by @ary1992 [#699]
- `[OPERATOR]` Update azure-validator to use the lenient decoder for Calico resources. by @kon-angelo [#698]
- `[DEPENDENCY]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.70.2 -> v1.71.2 by @ary1992 [#693]
- `[DEPENDENCY]` The following dependencies were updated:  
    - registry.k8s.io/sig-storage/csi-provisioner v3.4.0 -> v3.4.1 by @dimityrmirchev [#702]
- `[DEVELOPER]` All code related to the removed `APIServerSNI` feature gate of `gardenlet` has been removed from this extension. by @rfranzke [#704]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @ialidzhikov [gardener/machine-controller-manager#834]

</details>
