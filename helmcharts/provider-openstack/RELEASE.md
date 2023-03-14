# [gardener-extension-provider-openstack]
## ⚠️ Breaking Changes
* *[OPERATOR]* provider-openstack no longer supports Shoots with Кubernetes version < 1.20. ([gardener/gardener-extension-provider-openstack#541](https://github.com/gardener/gardener-extension-provider-openstack/pull/541), [@dimitar-kostadinov](https://github.com/dimitar-kostadinov))
* *[OPERATOR]* The provider extension will not skip certificate verification by default. You can enable the old behavior by setting `KeyStoneForceInsecure` to true (per CloudProfile). ([gardener/gardener-extension-provider-openstack#563](https://github.com/gardener/gardener-extension-provider-openstack/pull/563), [@kon-angelo](https://github.com/kon-angelo))
## ✨ New Features
* *[USER]* The provider-openstack extension does now support shoot clusters with Kubernetes version 1.26. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.26.md) before upgrading to 1.26. ([gardener/gardener-extension-provider-openstack#551](https://github.com/gardener/gardener-extension-provider-openstack/pull/551), [@ialidzhikov](https://github.com/ialidzhikov))
* *[USER]* `csi-driver-node` is marked as a node-critical component. With this, workload pods are only scheduled to a `Node` if it runs a ready `csi-driver-node` pod. ([gardener/gardener-extension-provider-openstack#562](https://github.com/gardener/gardener-extension-provider-openstack/pull/562), [@dergeberl](https://github.com/dergeberl))
* *[OPERATOR]* Allow specifying CA certificates for KeyStone api in Cloudprofile. ([gardener/gardener-extension-provider-openstack#563](https://github.com/gardener/gardener-extension-provider-openstack/pull/563), [@kon-angelo](https://github.com/kon-angelo))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed that caused the `snapshot.storage.k8s.io` CRDs in shoot clusters to flap between two different versions. ([gardener/gardener-extension-provider-openstack#566](https://github.com/gardener/gardener-extension-provider-openstack/pull/566), [@timebertt](https://github.com/timebertt))
## 🏃 Others
* *[OPERATOR]* The overlay network is now globally enabled for all calico and cilium shoot clusters on openstack. ([gardener/gardener-extension-provider-openstack#517](https://github.com/gardener/gardener-extension-provider-openstack/pull/517), [@DockToFuture](https://github.com/DockToFuture))
  * In case the overlay network is disabled all network traffic to the upstream dns server is now masqueraded for calico and cilium shoot clusters without overlay.
* *[OPERATOR]* Provider-specific error codes are now detected/parsed on provider-extension side. ([gardener/gardener-extension-provider-openstack#534](https://github.com/gardener/gardener-extension-provider-openstack/pull/534), [@acumino](https://github.com/acumino))
* *[OPERATOR]* Update golang to 1.19.5 ([gardener/gardener-extension-provider-openstack#545](https://github.com/gardener/gardener-extension-provider-openstack/pull/545), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* The following dependencies ares updated: ([gardener/gardener-extension-provider-openstack#548](https://github.com/gardener/gardener-extension-provider-openstack/pull/548), [@ialidzhikov](https://github.com/ialidzhikov))
  * github.com/gardener/gardener: v1.59.0 -> v1.62.0
  * github.com/gophercloud/gophercloud: v0.7.0 -> v1.1.1
* *[OPERATOR]* The following images are updated: ([gardener/gardener-extension-provider-openstack#551](https://github.com/gardener/gardener-extension-provider-openstack/pull/551), [@ialidzhikov](https://github.com/ialidzhikov))
  * k8scloudprovider/openstack-cloud-controller-manager: v1.24.3 ->v1.24.5 (for Kubernetes 1.24)
* *[OPERATOR]* New fluent operator resources are introduced: `ClusterFilter` ([gardener/gardener-extension-provider-openstack#552](https://github.com/gardener/gardener-extension-provider-openstack/pull/552), [@Kristian-ZH](https://github.com/Kristian-ZH))
* *[OPERATOR]* Update CSI dependencies to latest releases ([gardener/gardener-extension-provider-openstack#557](https://github.com/gardener/gardener-extension-provider-openstack/pull/557), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-provider-openstack#576](https://github.com/gardener/gardener-extension-provider-openstack/pull/576), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* Update `cloud-controller-image` v1.24.5 -> v1.24.6 ([gardener/gardener-extension-provider-openstack#582](https://github.com/gardener/gardener-extension-provider-openstack/pull/582), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update `cloud-controller-image` v1.25.3 -> v1.25.5 ([gardener/gardener-extension-provider-openstack#582](https://github.com/gardener/gardener-extension-provider-openstack/pull/582), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update `cloud-controller-image` v1.26.0 -> v1.26.2 ([gardener/gardener-extension-provider-openstack#582](https://github.com/gardener/gardener-extension-provider-openstack/pull/582), [@kon-angelo](https://github.com/kon-angelo))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-provider-openstack#564](https://github.com/gardener/gardener-extension-provider-openstack/pull/564), [@shafeeqes](https://github.com/shafeeqes))
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
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Terrafomer base image has been updated to alpine:3.17.2 ([gardener/terraformer#131](https://github.com/gardener/terraformer/pull/131), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* CVE categorization for Terraformer oci images has been added. ([gardener/terraformer#134](https://github.com/gardener/terraformer/pull/134), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* The golang base image is now updated to 1.16.15. The alpine base image is updated to 3.16.2. ([gardener/terraformer#124](https://github.com/gardener/terraformer/pull/124), [@kon-angelo](https://github.com/kon-angelo))