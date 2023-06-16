# [gardener-extension-provider-gcp]
## 📖 Documentation
* *[DEPENDENCY]* The flags which went out-of-support in MCM v0.49.0 have been cleaned up from MCM deployment yaml. ([gardener/gardener-extension-provider-gcp#585](https://github.com/gardener/gardener-extension-provider-gcp/pull/585), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[OPERATOR]* a sustainable way to look for available bastion OS images ([gardener/gardener-extension-provider-gcp#568](https://github.com/gardener/gardener-extension-provider-gcp/pull/568), [@tedteng](https://github.com/tedteng))
* *[OPERATOR]* machineDeployment will have the label `topology.gke.io/zone` when created. ([gardener/gardener-extension-provider-gcp#591](https://github.com/gardener/gardener-extension-provider-gcp/pull/591), [@elankath](https://github.com/elankath))
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-provider-gcp#594](https://github.com/gardener/gardener-extension-provider-gcp/pull/594), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Update go version to `v1.20.4` ([gardener/gardener-extension-provider-gcp#599](https://github.com/gardener/gardener-extension-provider-gcp/pull/599), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update cloud-provider-gcp image `v1.24.9` -> `v1.24.13` ([gardener/gardener-extension-provider-gcp#600](https://github.com/gardener/gardener-extension-provider-gcp/pull/600), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update cloud-provider-gcp image `v1.25.5` -> `v1.25.9` ([gardener/gardener-extension-provider-gcp#600](https://github.com/gardener/gardener-extension-provider-gcp/pull/600), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update cloud-provider-gcp image `v1.26.1` -> `v1.26.4` ([gardener/gardener-extension-provider-gcp#600](https://github.com/gardener/gardener-extension-provider-gcp/pull/600), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Support for CMEK Disk Encryption for volumes ([gardener/gardener-extension-provider-gcp#607](https://github.com/gardener/gardener-extension-provider-gcp/pull/607), [@elankath](https://github.com/elankath))
* *[OPERATOR]* Update CCM configuration to always enable the route controller regardless if overlay is used. This is done to prevent a race condition that would mark an otherwise healthy node with the `NetworkUnavailable` condition. ([gardener/gardener-extension-provider-gcp#613](https://github.com/gardener/gardener-extension-provider-gcp/pull/613), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* The following dependencies were updated: ([gardener/gardener-extension-provider-gcp#619](https://github.com/gardener/gardener-extension-provider-gcp/pull/619), [@vpnachev](https://github.com/vpnachev))
  * registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver v1.9.4 -> v1.9.5
* *[OPERATOR]* Introduce flow-based infrastructure reconciliation without Terraformer. To use it, the `Shoot` or `Infrastructure` objects must be annotated with `gcp.provider.extensions.gardener.cloud/use-flow=true`. ([gardener/gardener-extension-provider-gcp#495](https://github.com/gardener/gardener-extension-provider-gcp/pull/495), [@kon-angelo](https://github.com/kon-angelo))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-provider-gcp#596](https://github.com/gardener/gardener-extension-provider-gcp/pull/596), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.67.1 -> v1.70.2
# [machine-controller-manager]
## ⚠️ Breaking Changes
* *[OPERATOR]* Removal of the following flags (and corresponding fields in associated structs): 'machine-creation-timeout' 'machine-drain-timeout', 'machine-pv-detach-timeout', 'machine-health-timeout=10m', 'machine-safety-apiserver-statuscheck-timeout', 'machine-safety-apiserver-statuscheck-period', 'machine-safety-orphan-vms-period', 'machine-max-evict-retries', 'node-conditions', 'bootstrap-token-auth-extra-groups', 'delete-migrated-machine-class'. The MCM no longer accepts these flags since these are options handled by the Machine Controller invoked by platform specific provider launchers. ([gardener/machine-controller-manager#769](https://github.com/gardener/machine-controller-manager/pull/769), [@elankath](https://github.com/elankath))
* *[DEVELOPER]* Deletion of 'Driver.GenerateMachineClassForMigration'. Providers need to adapt to this. ([gardener/machine-controller-manager#769](https://github.com/gardener/machine-controller-manager/pull/769), [@elankath](https://github.com/elankath))
## ✨ New Features
* *[USER]* Machine object won't turn from `Pending`  to `Running` state if `node.gardener.cloud/critical-components-not-ready` taint is there on the corresponding node. ([gardener/machine-controller-manager#778](https://github.com/gardener/machine-controller-manager/pull/778), [@SimonKienzler](https://github.com/SimonKienzler))
## 🐛 Bug Fixes
* *[USER]* An edge case where all the machineSets were scaled down to zero has been dealt with. ([gardener/machine-controller-manager#803](https://github.com/gardener/machine-controller-manager/pull/803), [@himanshu-kun](https://github.com/himanshu-kun))
* *[USER]* Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. ([gardener/machine-controller-manager#773](https://github.com/gardener/machine-controller-manager/pull/773), [@schrodit](https://github.com/schrodit))
* *[USER]* An edge case where all the machineSets were scaled down to zero has been dealt with. ([gardener/machine-controller-manager#804](https://github.com/gardener/machine-controller-manager/pull/804), [@himanshu-kun](https://github.com/himanshu-kun))
* *[USER]* An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. ([gardener/machine-controller-manager#822](https://github.com/gardener/machine-controller-manager/pull/822), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed ([gardener/machine-controller-manager#817](https://github.com/gardener/machine-controller-manager/pull/817), [@himanshu-kun](https://github.com/himanshu-kun))
## 📖 Documentation
* *[DEVELOPER]* Added proposal for hot-update of resources (instance/Nic/Disk) ([gardener/machine-controller-manager#761](https://github.com/gardener/machine-controller-manager/pull/761), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[OPERATOR]* `CrashloopBackoff` machines will turn to `Running` quicker ([gardener/machine-controller-manager#806](https://github.com/gardener/machine-controller-manager/pull/806), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* CVE categorization for MCM has been added. ([gardener/machine-controller-manager#791](https://github.com/gardener/machine-controller-manager/pull/791), [@dkistner](https://github.com/dkistner))
* *[DEVELOPER]* The API generation now works again. Previously the API docs was generated to a location that was ignored by git and other API docs file was maintained. ([gardener/machine-controller-manager#800](https://github.com/gardener/machine-controller-manager/pull/800), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEVELOPER]* Bump `k8s.io/*` dependencies to v1.26.2 ([gardener/machine-controller-manager#792](https://github.com/gardener/machine-controller-manager/pull/792), [@afritzler](https://github.com/afritzler))
# [machine-controller-manager-provider-gcp]
## ⚠️ Breaking Changes
* *[OPERATOR]* Support for migration of machineClass is dropped by the mcm-provider ([gardener/machine-controller-manager-provider-gcp#80](https://github.com/gardener/machine-controller-manager-provider-gcp/pull/80), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[USER]* Updated golang version to 1.20.4 ([gardener/machine-controller-manager-provider-gcp#83](https://github.com/gardener/machine-controller-manager-provider-gcp/pull/83), [@rishabh-11](https://github.com/rishabh-11))
* *[USER]* CMEK disk encryption is now supported for disks attached to VM. Refer https://github.com/gardener/machine-controller-manager-provider-gcp/blob/master/kubernetes/machine-class.yaml for example ([gardener/machine-controller-manager-provider-gcp#84](https://github.com/gardener/machine-controller-manager-provider-gcp/pull/84), [@elankath](https://github.com/elankath))
* *[USER]* Updated golang version to 1.20.5 ([gardener/machine-controller-manager-provider-gcp#87](https://github.com/gardener/machine-controller-manager-provider-gcp/pull/87), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* CVE categorization for mcm-provider-gcp has been added. ([gardener/machine-controller-manager-provider-gcp#72](https://github.com/gardener/machine-controller-manager-provider-gcp/pull/72), [@dkistner](https://github.com/dkistner))
* *[DEVELOPER]* Enhanced Dev Testing Doc for CMEK ([gardener/machine-controller-manager-provider-gcp#85](https://github.com/gardener/machine-controller-manager-provider-gcp/pull/85), [@elankath](https://github.com/elankath))
* *[DEPENDENCY]* upgraded dependency: ([gardener/machine-controller-manager-provider-gcp#80](https://github.com/gardener/machine-controller-manager-provider-gcp/pull/80), [@himanshu-kun](https://github.com/himanshu-kun))
  * github.com/gardener/machine-controller-manager -> v0.49.1
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Update alpine base image to `v3.17.3` ([gardener/terraformer#136](https://github.com/gardener/terraformer/pull/136), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Terrafomer base image has been updated from `alpine:3.17.2` to `alpine:3.18.0` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Builder base image has been updated from `golang:1.19.6` to `golang:1.20.4` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Gardener dependency has been updated from `v1.59.1` to `v1.71.2` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))