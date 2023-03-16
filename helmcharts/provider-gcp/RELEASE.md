# [gardener-extension-provider-gcp]
## ⚠️ Breaking Changes
* *[OPERATOR]* provider-gcp no longer supports Shoots with Кubernetes version < 1.20. ([gardener/gardener-extension-provider-gcp#533](https://github.com/gardener/gardener-extension-provider-gcp/pull/533), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
## ✨ New Features
* *[USER]* The provider-gcp extension does now support shoot clusters with Kubernetes version 1.26. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.26.md) before upgrading to 1.26. ([gardener/gardener-extension-provider-gcp#544](https://github.com/gardener/gardener-extension-provider-gcp/pull/544), [@ialidzhikov](https://github.com/ialidzhikov))
* *[USER]* `csi-driver-node` is marked as a node-critical component. With this, workload pods are only scheduled to a `Node` if it runs a ready `csi-driver-node` pod. ([gardener/gardener-extension-provider-gcp#555](https://github.com/gardener/gardener-extension-provider-gcp/pull/555), [@dergeberl](https://github.com/dergeberl))
* *[OPERATOR]* GCP buckets are created with Uniform access level. ([gardener/gardener-extension-provider-gcp#518](https://github.com/gardener/gardener-extension-provider-gcp/pull/518), [@abdasgupta](https://github.com/abdasgupta))
## 🏃 Others
* *[USER]* Allow GCP worker subnet expansion. The worker subnet can now be expanded up to `.spec.networking.nodes`. This allows users to expand their current subnet to add more address space for nodes. ([gardener/gardener-extension-provider-gcp#549](https://github.com/gardener/gardener-extension-provider-gcp/pull/549), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* The following images are updated: ([gardener/gardener-extension-provider-gcp#544](https://github.com/gardener/gardener-extension-provider-gcp/pull/544), [@ialidzhikov](https://github.com/ialidzhikov))
  * eu.gcr.io/gardener-project/kubernetes/cloud-provider-gcp: v1.22.15 -> v1.22.17 (for Kubernetes 1.22)
  * eu.gcr.io/gardener-project/kubernetes/cloud-provider-gcp: v1.23.12 -> v1.23.15 (for Kubernetes 1.23)
  * eu.gcr.io/gardener-project/kubernetes/cloud-provider-gcp: v1.24.6 -> v1.24.9 (for Kubernetes 1.24)
  * eu.gcr.io/gardener-project/kubernetes/cloud-provider-gcp: v1.25.2 -> v1.25.5 (for Kubernetes 1.25)
* *[OPERATOR]* New fluent operator resources are introduced: `ClusterFilter` ([gardener/gardener-extension-provider-gcp#545](https://github.com/gardener/gardener-extension-provider-gcp/pull/545), [@Kristian-ZH](https://github.com/Kristian-ZH))
* *[OPERATOR]* Update CSI dependencies to latest releases ([gardener/gardener-extension-provider-gcp#548](https://github.com/gardener/gardener-extension-provider-gcp/pull/548), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* A bug has been fixed that caused the `snapshot.storage.k8s.io` CRDs in shoot clusters to flap between two different versions. ([gardener/gardener-extension-provider-gcp#553](https://github.com/gardener/gardener-extension-provider-gcp/pull/553), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Disable cloud-controller-manager's route controller only if the shoot is using an overlay network. ([gardener/gardener-extension-provider-gcp#561](https://github.com/gardener/gardener-extension-provider-gcp/pull/561), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-provider-gcp#563](https://github.com/gardener/gardener-extension-provider-gcp/pull/563), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* Provider-specific error codes are now detected/parsed on provider-extension side. ([gardener/gardener-extension-provider-gcp#534](https://github.com/gardener/gardener-extension-provider-gcp/pull/534), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The following dependency is updated: ([gardener/gardener-extension-provider-gcp#542](https://github.com/gardener/gardener-extension-provider-gcp/pull/542), [@ialidzhikov](https://github.com/ialidzhikov))
  * github.com/gardener/gardener: v1.59.0 -> v1.62.0
* *[OPERATOR]* Update golang to 1.19.4 ([gardener/gardener-extension-provider-gcp#543](https://github.com/gardener/gardener-extension-provider-gcp/pull/543), [@dkistner](https://github.com/dkistner))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-provider-gcp#551](https://github.com/gardener/gardener-extension-provider-gcp/pull/551), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.62.0 -> v1.65.0
  * k8s.io/* : v0.25.2 -> v0.26.1
  * sigs.k8s.io/controller-runtime: v0.13.0-> v0.14.4
# [machine-controller-manager]
## ⚠️ Breaking Changes
* *[USER]* `node` field is removed from machine status. controller will now depend on the node label which already was present in the machine object's metadata. If you(or your controller) are dependent on the `status.node` field of the machine object, then kindly use `node` label under `.metadata.labels` ([gardener/machine-controller-manager#745](https://github.com/gardener/machine-controller-manager/pull/745), [@rishabh-11](https://github.com/rishabh-11))
## ✨ New Features
* *[USER]* MachineDeployment would now have `Progressing` condition even when no progress Deadline is specified. This condition would never go to the reason `ProgressDeadlineExceeded` in that case. ([gardener/machine-controller-manager#762](https://github.com/gardener/machine-controller-manager/pull/762), [@himanshu-kun](https://github.com/himanshu-kun))
* *[OPERATOR]* Using `kubectl get machines` will display `Node` of the corresponding machine as a column. If `-owide` flag is used then the corresponding `ProviderID` will also be displayed. ([gardener/machine-controller-manager#746](https://github.com/gardener/machine-controller-manager/pull/746), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* Added new short names for machine(mc), machineClass(mcc), machineDeployment(mcd), and machineSet(mcs) resources. ([gardener/machine-controller-manager#749](https://github.com/gardener/machine-controller-manager/pull/749), [@rishabh-11](https://github.com/rishabh-11))
## 🐛 Bug Fixes
* *[USER]* Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. ([gardener/machine-controller-manager#777](https://github.com/gardener/machine-controller-manager/pull/777), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[USER]* Updated golang version to v1.19.2 ([gardener/machine-controller-manager#753](https://github.com/gardener/machine-controller-manager/pull/753), [@rishabh-11](https://github.com/rishabh-11))
* *[USER]* If during a rolling update scale-up is done, MCM scales up only the new machineSet, while in case of scale-down the scale-down amount is split among old machineSets, in proportion to their sizes. ([gardener/machine-controller-manager#765](https://github.com/gardener/machine-controller-manager/pull/765), [@himanshu-kun](https://github.com/himanshu-kun))
* *[DEVELOPER]* go version updated to 1.19.4 in pipeline and Dockerfile ([gardener/machine-controller-manager#766](https://github.com/gardener/machine-controller-manager/pull/766), [@himanshu-kun](https://github.com/himanshu-kun))
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Terrafomer base image has been updated to alpine:3.17.2 ([gardener/terraformer#131](https://github.com/gardener/terraformer/pull/131), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* CVE categorization for Terraformer oci images has been added. ([gardener/terraformer#134](https://github.com/gardener/terraformer/pull/134), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* Update golang to v1.19.6 ([gardener/terraformer#129](https://github.com/gardener/terraformer/pull/129), [@kon-angelo](https://github.com/kon-angelo))