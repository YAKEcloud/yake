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