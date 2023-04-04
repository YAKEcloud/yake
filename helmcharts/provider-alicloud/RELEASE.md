# [gardener-extension-provider-alicloud]
## ✨ New Features
* *[USER]* `csi-disk-plugin-alicloud` is marked as a node-critical component. With this, workload pods are only scheduled to a `Node` if it runs a ready `csi-disk-plugin-alicloud` pod. ([gardener/gardener-extension-provider-alicloud#567](https://github.com/gardener/gardener-extension-provider-alicloud/pull/567), [@dergeberl](https://github.com/dergeberl))
* *[OPERATOR]* `csi-disk-plugin` is annotated with the `wait-for-csi-node` annotation. Gardener uses this to only schedule workload pods to a `Node` once the driver has been successfully registered with the `CSINode` object. ([gardener/gardener-extension-provider-alicloud#582](https://github.com/gardener/gardener-extension-provider-alicloud/pull/582), [@SimonKienzler](https://github.com/SimonKienzler))
* *[OPERATOR]* The `csi-snapshot-validation` Service deployed by the provider-alicloud extension and the provider-alicloud's `gardener-extension-provider-alicloud` Service can now be topology-aware (depending on the Seed setting and the Shoot HA failure tolerance type). For more details, see the [Topology-aware Traffic Routing documentation](https://github.com/gardener/gardener/blob/v1.66.0/docs/usage/topology_aware_routing.md). ([gardener/gardener-extension-provider-alicloud#587](https://github.com/gardener/gardener-extension-provider-alicloud/pull/587), [@ialidzhikov](https://github.com/ialidzhikov))
## 🐛 Bug Fixes
* *[OPERATOR]* The stale healthcheck conditions from the extension are now properly cleaned up. ([gardener/gardener-extension-provider-alicloud#588](https://github.com/gardener/gardener-extension-provider-alicloud/pull/588), [@acumino](https://github.com/acumino))
* *[OPERATOR]* An issue has been fixed which caused undesired `PATCH` requests when updating the state in the `Worker` or `ShootState` resources. ([gardener/gardener-extension-provider-alicloud#590](https://github.com/gardener/gardener-extension-provider-alicloud/pull/590), [@oliver-goetz](https://github.com/oliver-goetz))
## 🏃 Others
* *[OPERATOR]* upgrade csi version to v1.24.10-compatible-29f36f1-aliyun ([gardener/gardener-extension-provider-alicloud#576](https://github.com/gardener/gardener-extension-provider-alicloud/pull/576), [@shaoyongfeng](https://github.com/shaoyongfeng))
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-provider-alicloud#579](https://github.com/gardener/gardener-extension-provider-alicloud/pull/579), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* Adapted extension components to support the [FullNetworkPoliciesInRuntimeCluster](https://github.com/gardener/gardener/blob/master/docs/deployment/feature_gates.md#list-of-feature-gates) feature gate introduced by `gardener/gardener` v1.66, see [here](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) and [#7352](https://github.com/gardener/gardener/pull/7589) for more information. ([gardener/gardener-extension-provider-alicloud#581](https://github.com/gardener/gardener-extension-provider-alicloud/pull/581), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Disable SNAT to the upstream dns server for non-overlay shoot cluster. ([gardener/gardener-extension-provider-alicloud#568](https://github.com/gardener/gardener-extension-provider-alicloud/pull/568), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* The csi-plugin-alicloud is upgraded to version v1.24.7-48214b0-aliyun ([gardener/gardener-extension-provider-alicloud#570](https://github.com/gardener/gardener-extension-provider-alicloud/pull/570), [@kevin-lacoo](https://github.com/kevin-lacoo))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-provider-alicloud#565](https://github.com/gardener/gardener-extension-provider-alicloud/pull/565), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.62.0 -> v1.65.0
  * k8s.io/* : v0.25.2 -> v0.26.1
  * sigs.k8s.io/controller-runtime: v0.13.0-> v0.14.4
# [machine-controller-manager]
## 🐛 Bug Fixes
* *[USER]* An edge case where all the machineSets were scaled down to zero has been dealt with. ([gardener/machine-controller-manager#804](https://github.com/gardener/machine-controller-manager/pull/804), [@himanshu-kun](https://github.com/himanshu-kun))
# [machine-controller-manager-provider-alicloud]
## 🐛 Bug Fixes
* *[USER]* Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. ([gardener/machine-controller-manager-provider-alicloud#39](https://github.com/gardener/machine-controller-manager-provider-alicloud/pull/39), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[USER]* Updated golang version to 1.19 ([gardener/machine-controller-manager-provider-alicloud#37](https://github.com/gardener/machine-controller-manager-provider-alicloud/pull/37), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* The following dependency is updated: ([gardener/machine-controller-manager-provider-alicloud#38](https://github.com/gardener/machine-controller-manager-provider-alicloud/pull/38), [@rishabh-11](https://github.com/rishabh-11))
  * github.com/gardener/machine-controller-manager v0.47.0 -> 0.48.0
* *[OPERATOR]* updated golang version to 1.19.5 ([gardener/machine-controller-manager-provider-alicloud#38](https://github.com/gardener/machine-controller-manager-provider-alicloud/pull/38), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* CVE categorization for mcm-provider-alicloud has been added. ([gardener/machine-controller-manager-provider-alicloud#43](https://github.com/gardener/machine-controller-manager-provider-alicloud/pull/43), [@dkistner](https://github.com/dkistner))
* *[DEVELOPER]* MCM Autovendoring PR raising enabled ([gardener/machine-controller-manager-provider-alicloud#41](https://github.com/gardener/machine-controller-manager-provider-alicloud/pull/41), [@rishabh-11](https://github.com/rishabh-11))
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Update golang to v1.19.6 ([gardener/terraformer#129](https://github.com/gardener/terraformer/pull/129), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Terrafomer base image has been updated to alpine:3.17.2 ([gardener/terraformer#131](https://github.com/gardener/terraformer/pull/131), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* Update TF_VERSION `0.15.5` -> `1.3.9` and update how the local providers are fetched and stored to be compatible with the latest TF specification. ([gardener/terraformer#133](https://github.com/gardener/terraformer/pull/133), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* CVE categorization for Terraformer oci images has been added. ([gardener/terraformer#134](https://github.com/gardener/terraformer/pull/134), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* The golang base image is now updated to 1.16.15. The alpine base image is updated to 3.16.2. ([gardener/terraformer#124](https://github.com/gardener/terraformer/pull/124), [@kon-angelo](https://github.com/kon-angelo))