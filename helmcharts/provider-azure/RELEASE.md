# [gardener-extension-provider-azure]
## ⚠️ Breaking Changes
* *[USER]* Update external-snapshotter to `v6.2.1`. VolumeSnapshot `v1beta1` APIs are no longer served. Please update to VolumeSnapshot `v1` APIs as soon as possible. ([gardener/gardener-extension-provider-azure#625](https://github.com/gardener/gardener-extension-provider-azure/pull/625), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* provider-azure no longer supports Shoots with Кubernetes version < 1.20. ([gardener/gardener-extension-provider-azure#608](https://github.com/gardener/gardener-extension-provider-azure/pull/608), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[OPERATOR]* Update the azure topology webhook to watch all namespaces and not just shoot namespaces. The `kube-system`, `garden` and extension namespaces are except to prevent deadlocks. ([gardener/gardener-extension-provider-azure#631](https://github.com/gardener/gardener-extension-provider-azure/pull/631), [@kon-angelo](https://github.com/kon-angelo))
## ✨ New Features
* *[USER]* The provider-azure extension does now support shoot clusters with Kubernetes version 1.26. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.26.md) before upgrading to 1.26. ([gardener/gardener-extension-provider-azure#619](https://github.com/gardener/gardener-extension-provider-azure/pull/619), [@ialidzhikov](https://github.com/ialidzhikov))
* *[USER]* `csi-driver-node-*` and `cloud-node-manager` are marked as a node-critical component. With this, workload pods are only scheduled to a `Node` if it runs a ready `csi-driver-node-*` and `cloud-node-manager` pods. ([gardener/gardener-extension-provider-azure#632](https://github.com/gardener/gardener-extension-provider-azure/pull/632), [@dergeberl](https://github.com/dergeberl))
## 🏃 Others
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-provider-azure#640](https://github.com/gardener/gardener-extension-provider-azure/pull/640), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* Provider-specific error codes are now detected/parsed on provider-extension side. ([gardener/gardener-extension-provider-azure#605](https://github.com/gardener/gardener-extension-provider-azure/pull/605), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The following dependency is updated: ([gardener/gardener-extension-provider-azure#614](https://github.com/gardener/gardener-extension-provider-azure/pull/614), [@ialidzhikov](https://github.com/ialidzhikov))
  * github.com/gardener/gardener: v1.59.0 -> v1.62.0
* *[OPERATOR]* Update golang to 1.19.5 ([gardener/gardener-extension-provider-azure#615](https://github.com/gardener/gardener-extension-provider-azure/pull/615), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* The following images are updated: ([gardener/gardener-extension-provider-azure#619](https://github.com/gardener/gardener-extension-provider-azure/pull/619), [@ialidzhikov](https://github.com/ialidzhikov))
  * eu.gcr.io/gardener-project/kubernetes/cloud-provider-azure: v1.22.9 -> v1.22.17 (for Kubernetes 1.22)
  * mcr.microsoft.com/oss/kubernetes/azure-cloud-controller-manager: v1.23.21 -> v1.23.25 for Kubernetes 1.23)
  * mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.23.21 -> v1.23.25 for Kubernetes 1.23)
  * mcr.microsoft.com/oss/kubernetes/azure-cloud-controller-manager: v1.24.10 -> v1.24.12 for Kubernetes 1.24)
  * mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.24.8 -> v1.24.12 for Kubernetes 1.24)
  * mcr.microsoft.com/oss/kubernetes/azure-cloud-controller-manager: v1.25.4 -> v1.25.6 for Kubernetes 1.25)
  * mcr.microsoft.com/oss/kubernetes/azure-cloud-node-manager: v1.25.2 -> v1.25.6 for Kubernetes 1.25)
* *[OPERATOR]* New fluent operator resources are introduced: `ClusterFilter` ([gardener/gardener-extension-provider-azure#620](https://github.com/gardener/gardener-extension-provider-azure/pull/620), [@Kristian-ZH](https://github.com/Kristian-ZH))
* *[OPERATOR]* Updates of CSI components to latest releases ([gardener/gardener-extension-provider-azure#625](https://github.com/gardener/gardener-extension-provider-azure/pull/625), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Admission controller now allows VNet CIDR expansion and forbids VNet CIDR shrinking. ([gardener/gardener-extension-provider-azure#626](https://github.com/gardener/gardener-extension-provider-azure/pull/626), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Add validation for infrastructure vnet name and resource group to forbid empty vnet references. ([gardener/gardener-extension-provider-azure#628](https://github.com/gardener/gardener-extension-provider-azure/pull/628), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Skip backupbucket container deletion if generated secret is not existing anymore ([gardener/gardener-extension-provider-azure#629](https://github.com/gardener/gardener-extension-provider-azure/pull/629), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Fix a bug introduced with https://github.com/gardener/gardener-extension-provider-azure/pull/631 on non-Azure seeds. The topology webhook will now rely on the managed-resource's injected information to get seed's information. ([gardener/gardener-extension-provider-azure#639](https://github.com/gardener/gardener-extension-provider-azure/pull/639), [@kon-angelo](https://github.com/kon-angelo))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-provider-azure#630](https://github.com/gardener/gardener-extension-provider-azure/pull/630), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.62.0 -> v1.65.0
  * k8s.io/* : v0.25.2 -> v0.26.1
  * sigs.k8s.io/controller-runtime: v0.13.0-> v0.14.4
# [machine-controller-manager]
## ⚠️ Breaking Changes
* *[USER]* `node` field is removed from machine status. controller will now depend on the node label which already was present in the machine object's metadata. If you(or your controller) are dependent on the `status.node` field of the machine object, then kindly use `node` label under `.metadata.labels` ([gardener/machine-controller-manager#745](https://github.com/gardener/machine-controller-manager/pull/745), [@rishabh-11](https://github.com/rishabh-11))
## ✨ New Features
* *[USER]* MachineDeployment would now have `Progressing` condition even when no progress Deadline is specified. This condition would never go to the reason `ProgressDeadlineExceeded` in that case. ([gardener/machine-controller-manager#762](https://github.com/gardener/machine-controller-manager/pull/762), [@himanshu-kun](https://github.com/himanshu-kun))
* *[OPERATOR]* Added new short names for machine(mc), machineClass(mcc), machineDeployment(mcd), and machineSet(mcs) resources. ([gardener/machine-controller-manager#749](https://github.com/gardener/machine-controller-manager/pull/749), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* Using `kubectl get machines` will display `Node` of the corresponding machine as a column. If `-owide` flag is used then the corresponding `ProviderID` will also be displayed. ([gardener/machine-controller-manager#746](https://github.com/gardener/machine-controller-manager/pull/746), [@rishabh-11](https://github.com/rishabh-11))
## 🐛 Bug Fixes
* *[USER]* Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. ([gardener/machine-controller-manager#777](https://github.com/gardener/machine-controller-manager/pull/777), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[USER]* Updated golang version to v1.19.2 ([gardener/machine-controller-manager#753](https://github.com/gardener/machine-controller-manager/pull/753), [@rishabh-11](https://github.com/rishabh-11))
* *[USER]* If during a rolling update scale-up is done, MCM scales up only the new machineSet, while in case of scale-down the scale-down amount is split among old machineSets, in proportion to their sizes. ([gardener/machine-controller-manager#765](https://github.com/gardener/machine-controller-manager/pull/765), [@himanshu-kun](https://github.com/himanshu-kun))
* *[DEVELOPER]* go version updated to 1.19.4 in pipeline and Dockerfile ([gardener/machine-controller-manager#766](https://github.com/gardener/machine-controller-manager/pull/766), [@himanshu-kun](https://github.com/himanshu-kun))
# [machine-controller-manager-provider-azure]
## 🏃 Others
* *[USER]* Updated golang version to v1.19 ([gardener/machine-controller-manager-provider-azure#75](https://github.com/gardener/machine-controller-manager-provider-azure/pull/75), [@rishabh-11](https://github.com/rishabh-11))
* *[USER]* error handling is done for data disk detachment failure. ([gardener/machine-controller-manager-provider-azure#76](https://github.com/gardener/machine-controller-manager-provider-azure/pull/76), [@rishabh-11](https://github.com/rishabh-11))
* *[USER]* Updated golang version to 1.19.4 ([gardener/machine-controller-manager-provider-azure#77](https://github.com/gardener/machine-controller-manager-provider-azure/pull/77), [@rishabh-11](https://github.com/rishabh-11))
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Terrafomer base image has been updated to alpine:3.17.2 ([gardener/terraformer#131](https://github.com/gardener/terraformer/pull/131), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* CVE categorization for Terraformer oci images has been added. ([gardener/terraformer#134](https://github.com/gardener/terraformer/pull/134), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* Update golang to v1.19.6 ([gardener/terraformer#129](https://github.com/gardener/terraformer/pull/129), [@kon-angelo](https://github.com/kon-angelo))