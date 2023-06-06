# [gardener-extension-provider-azure]
## 📖 Documentation
* *[DEPENDENCY]* The flags which went out-of-support in MCM v0.49.0 have been cleaned up from MCM deployment yaml. ([gardener/gardener-extension-provider-azure#674](https://github.com/gardener/gardener-extension-provider-azure/pull/674), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-provider-azure#683](https://github.com/gardener/gardener-extension-provider-azure/pull/683), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* The following dependency has been updated: ([gardener/gardener-extension-provider-azure#685](https://github.com/gardener/gardener-extension-provider-azure/pull/685), [@acumino](https://github.com/acumino))
  * github.com/gardener/gardener 1.67.1 -> 1.70.2
* *[OPERATOR]* Update golang to `v1.20.4` ([gardener/gardener-extension-provider-azure#690](https://github.com/gardener/gardener-extension-provider-azure/pull/690), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update cloud-controller-manager `v1.24.17` -> `v1.24.20` ([gardener/gardener-extension-provider-azure#691](https://github.com/gardener/gardener-extension-provider-azure/pull/691), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update cloud-controller-manager `v1.25.11` -> `v1.25.14` ([gardener/gardener-extension-provider-azure#691](https://github.com/gardener/gardener-extension-provider-azure/pull/691), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update cloud-controller-manager `v1.26.7` -> `v1.26.10` ([gardener/gardener-extension-provider-azure#691](https://github.com/gardener/gardener-extension-provider-azure/pull/691), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update azurefile-csi `v1.26.1` -> `v1.28.0` ([gardener/gardener-extension-provider-azure#691](https://github.com/gardener/gardener-extension-provider-azure/pull/691), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Prevent shoot clusters from being configured with calico and overlay network as this is not supported on azure ([gardener/gardener-extension-provider-azure#669](https://github.com/gardener/gardener-extension-provider-azure/pull/669), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Restore terraform behavior to delete the azure resource group even if it contains other resources. ([gardener/gardener-extension-provider-azure#671](https://github.com/gardener/gardener-extension-provider-azure/pull/671), [@kon-angelo](https://github.com/kon-angelo))
# [machine-controller-manager]
## ⚠️ Breaking Changes
* *[OPERATOR]* Removal of the following flags (and corresponding fields in associated structs): 'machine-creation-timeout' 'machine-drain-timeout', 'machine-pv-detach-timeout', 'machine-health-timeout=10m', 'machine-safety-apiserver-statuscheck-timeout', 'machine-safety-apiserver-statuscheck-period', 'machine-safety-orphan-vms-period', 'machine-max-evict-retries', 'node-conditions', 'bootstrap-token-auth-extra-groups', 'delete-migrated-machine-class'. The MCM no longer accepts these flags since these are options handled by the Machine Controller invoked by platform specific provider launchers. ([gardener/machine-controller-manager#769](https://github.com/gardener/machine-controller-manager/pull/769), [@elankath](https://github.com/elankath))
* *[DEVELOPER]* Deletion of 'Driver.GenerateMachineClassForMigration'. Providers need to adapt to this. ([gardener/machine-controller-manager#769](https://github.com/gardener/machine-controller-manager/pull/769), [@elankath](https://github.com/elankath))
## ✨ New Features
* *[USER]* Machine object won't turn from `Pending`  to `Running` state if `node.gardener.cloud/critical-components-not-ready` taint is there on the corresponding node. ([gardener/machine-controller-manager#778](https://github.com/gardener/machine-controller-manager/pull/778), [@SimonKienzler](https://github.com/SimonKienzler))
## 🐛 Bug Fixes
* *[USER]* An edge case where all the machineSets were scaled down to zero has been dealt with. ([gardener/machine-controller-manager#804](https://github.com/gardener/machine-controller-manager/pull/804), [@himanshu-kun](https://github.com/himanshu-kun))
* *[USER]* An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. ([gardener/machine-controller-manager#822](https://github.com/gardener/machine-controller-manager/pull/822), [@rishabh-11](https://github.com/rishabh-11))
* *[USER]* An edge case where all the machineSets were scaled down to zero has been dealt with. ([gardener/machine-controller-manager#803](https://github.com/gardener/machine-controller-manager/pull/803), [@himanshu-kun](https://github.com/himanshu-kun))
* *[USER]* Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. ([gardener/machine-controller-manager#773](https://github.com/gardener/machine-controller-manager/pull/773), [@schrodit](https://github.com/schrodit))
* *[OPERATOR]* An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed ([gardener/machine-controller-manager#817](https://github.com/gardener/machine-controller-manager/pull/817), [@himanshu-kun](https://github.com/himanshu-kun))
## 📖 Documentation
* *[DEVELOPER]* Added proposal for hot-update of resources (instance/Nic/Disk) ([gardener/machine-controller-manager#761](https://github.com/gardener/machine-controller-manager/pull/761), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[OPERATOR]* `CrashloopBackoff` machines will turn to `Running` quicker ([gardener/machine-controller-manager#806](https://github.com/gardener/machine-controller-manager/pull/806), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* CVE categorization for MCM has been added. ([gardener/machine-controller-manager#791](https://github.com/gardener/machine-controller-manager/pull/791), [@dkistner](https://github.com/dkistner))
* *[DEVELOPER]* The API generation now works again. Previously the API docs was generated to a location that was ignored by git and other API docs file was maintained. ([gardener/machine-controller-manager#800](https://github.com/gardener/machine-controller-manager/pull/800), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEVELOPER]* Bump `k8s.io/*` dependencies to v1.26.2 ([gardener/machine-controller-manager#792](https://github.com/gardener/machine-controller-manager/pull/792), [@afritzler](https://github.com/afritzler))
# [machine-controller-manager-provider-azure]
## ⚠️ Breaking Changes
* *[OPERATOR]* Support for migration of machineClass is dropped by the mcm-provider ([gardener/machine-controller-manager-provider-azure#96](https://github.com/gardener/machine-controller-manager-provider-azure/pull/96), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[USER]* Updated golang version to 1.20.4 ([gardener/machine-controller-manager-provider-azure#99](https://github.com/gardener/machine-controller-manager-provider-azure/pull/99), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* CVE categorization for mcm-provider-azure has been added. ([gardener/machine-controller-manager-provider-azure#82](https://github.com/gardener/machine-controller-manager-provider-azure/pull/82), [@dkistner](https://github.com/dkistner))
* *[OPERATOR]* removed the use of `defer` in printing logs for resource creation methods ([gardener/machine-controller-manager-provider-azure#87](https://github.com/gardener/machine-controller-manager-provider-azure/pull/87), [@rishabh-11](https://github.com/rishabh-11))
* *[DEPENDENCY]* upgraded dependency: ([gardener/machine-controller-manager-provider-azure#96](https://github.com/gardener/machine-controller-manager-provider-azure/pull/96), [@himanshu-kun](https://github.com/himanshu-kun))
  * github.com/gardener/machine-controller-manager -> v0.49.1
## 📰 Noteworthy
* *[USER]* Fixed VM creation and update when `sshAccess` is disabled. ([gardener/machine-controller-manager-provider-azure#80](https://github.com/gardener/machine-controller-manager-provider-azure/pull/80), [@AleksandarSavchev](https://github.com/AleksandarSavchev))
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Update alpine base image to `v3.17.3` ([gardener/terraformer#136](https://github.com/gardener/terraformer/pull/136), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Terrafomer base image has been updated from `alpine:3.17.2` to `alpine:3.18.0` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Builder base image has been updated from `golang:1.19.6` to `golang:1.20.4` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Gardener dependency has been updated from `v1.59.1` to `v1.71.2` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))