# [gardener-extension-provider-aws]
## ⚠️ Breaking Changes
* *[OPERATOR]* provider-aws no longer supports Shoots with Кubernetes version < 1.20. ([gardener/gardener-extension-provider-aws#667](https://github.com/gardener/gardener-extension-provider-aws/pull/667), [@MartinWeindel](https://github.com/MartinWeindel))
## ✨ New Features
* *[USER]* The provider-aws extension does now support shoot clusters with Kubernetes version 1.26. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.26.md) before upgrading to 1.26. ([gardener/gardener-extension-provider-aws#680](https://github.com/gardener/gardener-extension-provider-aws/pull/680), [@ialidzhikov](https://github.com/ialidzhikov))
* *[USER]* `csi-driver-node` is marked as a node-critical component. With this, workload pods are only scheduled to a `Node` if it runs a ready `csi-driver-node` pod. ([gardener/gardener-extension-provider-aws#701](https://github.com/gardener/gardener-extension-provider-aws/pull/701), [@dergeberl](https://github.com/dergeberl))
## 🏃 Others
* *[OPERATOR]* Provider-specific error codes are now detected/parsed on provider-extension side. ([gardener/gardener-extension-provider-aws#650](https://github.com/gardener/gardener-extension-provider-aws/pull/650), [@acumino](https://github.com/acumino))
* *[OPERATOR]* Check for duplicate zone names in infrastructureconfig ([gardener/gardener-extension-provider-aws#673](https://github.com/gardener/gardener-extension-provider-aws/pull/673), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* The following dependency is updated: ([gardener/gardener-extension-provider-aws#674](https://github.com/gardener/gardener-extension-provider-aws/pull/674), [@ialidzhikov](https://github.com/ialidzhikov))
  * github.com/gardener/gardener: v1.59.0 -> v1.62.0
* *[OPERATOR]* Update golang to 1.19.4 ([gardener/gardener-extension-provider-aws#678](https://github.com/gardener/gardener-extension-provider-aws/pull/678), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* The following images are updated: ([gardener/gardener-extension-provider-aws#680](https://github.com/gardener/gardener-extension-provider-aws/pull/680), [@ialidzhikov](https://github.com/ialidzhikov))
  * eu.gcr.io/gardener-project/kubernetes/cloud-provider-aws: v1.22.15 -> v1.22.17 (for Kubernetes 1.22)
  * eu.gcr.io/gardener-project/kubernetes/cloud-provider-aws: v1.23.12 -> v1.23.15 (for Kubernetes 1.23)
  * eu.gcr.io/gardener-project/kubernetes/cloud-provider-aws: v1.24.6 -> v1.24.9 (for Kubernetes 1.24)
  * eu.gcr.io/gardener-project/kubernetes/cloud-provider-aws: v1.25.2 -> v1.25.5 (for Kubernetes 1.25)
* *[OPERATOR]* New fluent operator resources are introduced: `ClusterFilter` and `ClusterParser` ([gardener/gardener-extension-provider-aws#681](https://github.com/gardener/gardener-extension-provider-aws/pull/681), [@Kristian-ZH](https://github.com/Kristian-ZH))
* *[OPERATOR]* Switch cloud-controller-manager image to upstream for kubernetes >= v1.25 ([gardener/gardener-extension-provider-aws#682](https://github.com/gardener/gardener-extension-provider-aws/pull/682), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* The list of the canonical hosted zones needed for alias targets has been extended to include the regions`ap-south-2`, `ap-southeast-3`, `eu-central-2`, `eu-south-2`, and `me-central-1` ([gardener/gardener-extension-provider-aws#686](https://github.com/gardener/gardener-extension-provider-aws/pull/686), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Add health check for aws-custom-route-controller route updates ([gardener/gardener-extension-provider-aws#688](https://github.com/gardener/gardener-extension-provider-aws/pull/688), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Update CSI dependencies to latest releases ([gardener/gardener-extension-provider-aws#689](https://github.com/gardener/gardener-extension-provider-aws/pull/689), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* A bug has been fixed that caused the `snapshot.storage.k8s.io` CRDs in shoot clusters to flap between two different versions. ([gardener/gardener-extension-provider-aws#697](https://github.com/gardener/gardener-extension-provider-aws/pull/697), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* add 't4g.nano' and arm64 type instance supported in the bastion instance ([gardener/gardener-extension-provider-aws#707](https://github.com/gardener/gardener-extension-provider-aws/pull/707), [@tedteng](https://github.com/tedteng))
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-provider-aws#711](https://github.com/gardener/gardener-extension-provider-aws/pull/711), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* Update bastion integration test AMI image ([gardener/gardener-extension-provider-aws#712](https://github.com/gardener/gardener-extension-provider-aws/pull/712), [@kon-angelo](https://github.com/kon-angelo))
* *[DEPENDENCY]* Updated dependeny `aws-sdk-go` from `1.38.19` to `1.44.173`. ([gardener/gardener-extension-provider-aws#686](https://github.com/gardener/gardener-extension-provider-aws/pull/686), [@MartinWeindel](https://github.com/MartinWeindel))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-provider-aws#695](https://github.com/gardener/gardener-extension-provider-aws/pull/695), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.62.0 -> v1.65.0
  * k8s.io/* : v0.25.2 -> v0.26.1
  * sigs.k8s.io/controller-runtime: v0.13.0-> v0.14.4
# [aws-custom-route-controller]
## 🏃 Others
* *[OPERATOR]* Create events on route updates failures and don't keep node routes to main route table ([gardener/aws-custom-route-controller#8](https://github.com/gardener/aws-custom-route-controller/pull/8), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Try all route update operations on all route tables before returning errors ([gardener/aws-custom-route-controller#7](https://github.com/gardener/aws-custom-route-controller/pull/7), [@MartinWeindel](https://github.com/MartinWeindel))
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
# [machine-controller-manager-provider-aws]
## 🏃 Others
* *[USER]* Updated golang version to v1.19.4 ([gardener/machine-controller-manager-provider-aws#100](https://github.com/gardener/machine-controller-manager-provider-aws/pull/100), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* update golang version to 1.19.5 ([gardener/machine-controller-manager-provider-aws#102](https://github.com/gardener/machine-controller-manager-provider-aws/pull/102), [@rishabh-11](https://github.com/rishabh-11))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/machine-controller-manager-provider-aws#102](https://github.com/gardener/machine-controller-manager-provider-aws/pull/102), [@rishabh-11](https://github.com/rishabh-11))
  * github.com/gardener/machine-controller-manager v0.47.0 -> 0.48.0
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Terrafomer base image has been updated to alpine:3.17.2 ([gardener/terraformer#131](https://github.com/gardener/terraformer/pull/131), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* CVE categorization for Terraformer oci images has been added. ([gardener/terraformer#134](https://github.com/gardener/terraformer/pull/134), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* Update golang to v1.19.6 ([gardener/terraformer#129](https://github.com/gardener/terraformer/pull/129), [@kon-angelo](https://github.com/kon-angelo))