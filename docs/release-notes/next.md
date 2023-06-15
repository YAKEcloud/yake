---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-aws to <code>1.44.0</code></b></summary>

# [gardener-extension-provider-aws]
## ✨ New Features
* *[USER]* Enable awslabs/volume-modifier-for-k8s by default ([gardener/gardener-extension-provider-aws#754](https://github.com/gardener/gardener-extension-provider-aws/pull/754), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Flow-based infrastructure reconciliation without Terraformer ([gardener/gardener-extension-provider-aws#603](https://github.com/gardener/gardener-extension-provider-aws/pull/603), [@MartinWeindel](https://github.com/MartinWeindel))
## 🐛 Bug Fixes
* *[OPERATOR]* Allow patching events for aws-custom-route-controller ([gardener/gardener-extension-provider-aws#742](https://github.com/gardener/gardener-extension-provider-aws/pull/742), [@MartinWeindel](https://github.com/MartinWeindel))
## 📖 Documentation
* *[DEPENDENCY]* The flags which went out-of-support in MCM v0.49.0 have been cleaned up from MCM deployment yaml. ([gardener/gardener-extension-provider-aws#739](https://github.com/gardener/gardener-extension-provider-aws/pull/739), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[OPERATOR]* Block public access for newly created S3 buckets. ([gardener/gardener-extension-provider-aws#738](https://github.com/gardener/gardener-extension-provider-aws/pull/738), [@shreyas-s-rao](https://github.com/shreyas-s-rao))
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-provider-aws#747](https://github.com/gardener/gardener-extension-provider-aws/pull/747), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Update go to `v1.20.4` ([gardener/gardener-extension-provider-aws#753](https://github.com/gardener/gardener-extension-provider-aws/pull/753), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update ebs driver to `v1.19.0` ([gardener/gardener-extension-provider-aws#754](https://github.com/gardener/gardener-extension-provider-aws/pull/754), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* The following images have been updated: ([gardener/gardener-extension-provider-aws#757](https://github.com/gardener/gardener-extension-provider-aws/pull/757), [@dkistner](https://github.com/dkistner))
  * mtu-customizer: alpine:3.16.2  → alpine:3.18.0
* *[OPERATOR]* provider-aws does now define proper `create` and `delete` timeouts for `aws_internet_gateway`. Now, these timeouts are aligned with the terraformer's timeout. Previously the timeouts were not aligned and provider-aws was not able to properly report the `aws_internet_gateway` related error. ([gardener/gardener-extension-provider-aws#761](https://github.com/gardener/gardener-extension-provider-aws/pull/761), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-provider-aws#749](https://github.com/gardener/gardener-extension-provider-aws/pull/749), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.67.1 -> v1.71.0
  * k8s.io/* : v0.26.2 -> v0.26.3
  * sigs.k8s.io/controller-runtime: v0.14.5-> v0.14.6
# [aws-custom-route-controller]
## 🏃 Others
* *[OPERATOR]* Update builder image from `golang:1.20.2` to `golang:1.20.4` ([gardener/aws-custom-route-controller#14](https://github.com/gardener/aws-custom-route-controller/pull/14), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* updated kubernetes dependencies from `v0.25.4` to `v0.26.4` ([gardener/aws-custom-route-controller#15](https://github.com/gardener/aws-custom-route-controller/pull/15), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* improved timestamp format for JSON logging; added command-line options for log level and format. ([gardener/aws-custom-route-controller#15](https://github.com/gardener/aws-custom-route-controller/pull/15), [@MartinWeindel](https://github.com/MartinWeindel))
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
# [machine-controller-manager-provider-aws]
## ⚠️ Breaking Changes
* *[OPERATOR]* Support for migration of machineClass is dropped by the mcm-provider ([gardener/machine-controller-manager-provider-aws#118](https://github.com/gardener/machine-controller-manager-provider-aws/pull/118), [@himanshu-kun](https://github.com/himanshu-kun))
## 🐛 Bug Fixes
* *[OPERATOR]* Fix handling of capacity reservations in `MachineClass` that prevented correct scale up ([gardener/machine-controller-manager-provider-aws#115](https://github.com/gardener/machine-controller-manager-provider-aws/pull/115), [@saley89](https://github.com/saley89))
## 🏃 Others
* *[OPERATOR]* Updated golang version to 1.20.4 ([gardener/machine-controller-manager-provider-aws#121](https://github.com/gardener/machine-controller-manager-provider-aws/pull/121), [@rishabh-11](https://github.com/rishabh-11))
* *[DEPENDENCY]* upgraded dependency: ([gardener/machine-controller-manager-provider-aws#118](https://github.com/gardener/machine-controller-manager-provider-aws/pull/118), [@himanshu-kun](https://github.com/himanshu-kun))
  * github.com/gardener/machine-controller-manager -> v0.49.1
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Update alpine base image to `v3.17.3` ([gardener/terraformer#136](https://github.com/gardener/terraformer/pull/136), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Terrafomer base image has been updated from `alpine:3.17.2` to `alpine:3.18.0` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Builder base image has been updated from `golang:1.19.6` to `golang:1.20.4` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Gardener dependency has been updated from `v1.59.1` to `v1.71.2` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))

</details>

<details>
<summary><b>Update provider-azure to <code>1.36.0</code></b></summary>

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

</details>

<details>
<summary><b>Update provider-openstack to <code>1.34.0</code></b></summary>

# [gardener-extension-provider-openstack]
## 🐛 Bug Fixes
* *[USER]* Allow changing share network section in `InfrastructureConfig` for existing cluster. ([gardener/gardener-extension-provider-openstack#633](https://github.com/gardener/gardener-extension-provider-openstack/pull/633), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Add missing network policy labels to extension controller pod template ([gardener/gardener-extension-provider-openstack#607](https://github.com/gardener/gardener-extension-provider-openstack/pull/607), [@afritzler](https://github.com/afritzler))
## 📖 Documentation
* *[DEPENDENCY]* The flags which went out-of-support in MCM v0.49.0 have been cleaned up from MCM deployment yaml. ([gardener/gardener-extension-provider-openstack#610](https://github.com/gardener/gardener-extension-provider-openstack/pull/610), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[OPERATOR]* Add topology awareness support for Manila ([gardener/gardener-extension-provider-openstack#613](https://github.com/gardener/gardener-extension-provider-openstack/pull/613), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Add observability configuration for Manila CSI Driver. ([gardener/gardener-extension-provider-openstack#614](https://github.com/gardener/gardener-extension-provider-openstack/pull/614), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-provider-openstack#620](https://github.com/gardener/gardener-extension-provider-openstack/pull/620), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Restrict security group ingress port-range to kubernetes node-port range ([gardener/gardener-extension-provider-openstack#621](https://github.com/gardener/gardener-extension-provider-openstack/pull/621), [@tedteng](https://github.com/tedteng))
* *[OPERATOR]* add a bastion ingress rule in the worker node security group to establish the ssh connection to fit different networks. ([gardener/gardener-extension-provider-openstack#621](https://github.com/gardener/gardener-extension-provider-openstack/pull/621), [@tedteng](https://github.com/tedteng))
* *[OPERATOR]* The bastion with try to reserve Floating IPs from the router's external subnet ([gardener/gardener-extension-provider-openstack#623](https://github.com/gardener/gardener-extension-provider-openstack/pull/623), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Update golang to `v1.20.4` ([gardener/gardener-extension-provider-openstack#627](https://github.com/gardener/gardener-extension-provider-openstack/pull/627), [@kon-angelo](https://github.com/kon-angelo))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-provider-openstack#624](https://github.com/gardener/gardener-extension-provider-openstack/pull/624), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.67.1 -> v1.71.0
  * k8s.io/* : v0.26.2 -> v0.26.3
  * sigs.k8s.io/controller-runtime: v0.14.5-> v0.14.6
# [machine-controller-manager]
## ⚠️ Breaking Changes
* *[USER]* `node` field is removed from machine status. controller will now depend on the node label which already was present in the machine object's metadata. If you(or your controller) are dependent on the `status.node` field of the machine object, then kindly use `node` label under `.metadata.labels` ([gardener/machine-controller-manager#745](https://github.com/gardener/machine-controller-manager/pull/745), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* Removal of the following flags (and corresponding fields in associated structs): 'machine-creation-timeout' 'machine-drain-timeout', 'machine-pv-detach-timeout', 'machine-health-timeout=10m', 'machine-safety-apiserver-statuscheck-timeout', 'machine-safety-apiserver-statuscheck-period', 'machine-safety-orphan-vms-period', 'machine-max-evict-retries', 'node-conditions', 'bootstrap-token-auth-extra-groups', 'delete-migrated-machine-class'. The MCM no longer accepts these flags since these are options handled by the Machine Controller invoked by platform specific provider launchers. ([gardener/machine-controller-manager#769](https://github.com/gardener/machine-controller-manager/pull/769), [@elankath](https://github.com/elankath))
* *[DEVELOPER]* Deletion of 'Driver.GenerateMachineClassForMigration'. Providers need to adapt to this. ([gardener/machine-controller-manager#769](https://github.com/gardener/machine-controller-manager/pull/769), [@elankath](https://github.com/elankath))
## ✨ New Features
* *[USER]* Machine object won't turn from `Pending`  to `Running` state if `node.gardener.cloud/critical-components-not-ready` taint is there on the corresponding node. ([gardener/machine-controller-manager#778](https://github.com/gardener/machine-controller-manager/pull/778), [@SimonKienzler](https://github.com/SimonKienzler))
* *[USER]* MachineDeployment would now have `Progressing` condition even when no progress Deadline is specified. This condition would never go to the reason `ProgressDeadlineExceeded` in that case. ([gardener/machine-controller-manager#762](https://github.com/gardener/machine-controller-manager/pull/762), [@himanshu-kun](https://github.com/himanshu-kun))
* *[OPERATOR]* Using `kubectl get machines` will display `Node` of the corresponding machine as a column. If `-owide` flag is used then the corresponding `ProviderID` will also be displayed. ([gardener/machine-controller-manager#746](https://github.com/gardener/machine-controller-manager/pull/746), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* Added new short names for machine(mc), machineClass(mcc), machineDeployment(mcd), and machineSet(mcs) resources. ([gardener/machine-controller-manager#749](https://github.com/gardener/machine-controller-manager/pull/749), [@rishabh-11](https://github.com/rishabh-11))
## 🐛 Bug Fixes
* *[USER]* An edge case where all the machineSets were scaled down to zero has been dealt with. ([gardener/machine-controller-manager#803](https://github.com/gardener/machine-controller-manager/pull/803), [@himanshu-kun](https://github.com/himanshu-kun))
* *[USER]* Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. ([gardener/machine-controller-manager#773](https://github.com/gardener/machine-controller-manager/pull/773), [@schrodit](https://github.com/schrodit))
* *[USER]* Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. ([gardener/machine-controller-manager#777](https://github.com/gardener/machine-controller-manager/pull/777), [@himanshu-kun](https://github.com/himanshu-kun))
* *[USER]* An edge case where all the machineSets were scaled down to zero has been dealt with. ([gardener/machine-controller-manager#804](https://github.com/gardener/machine-controller-manager/pull/804), [@himanshu-kun](https://github.com/himanshu-kun))
* *[USER]* An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. ([gardener/machine-controller-manager#822](https://github.com/gardener/machine-controller-manager/pull/822), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed ([gardener/machine-controller-manager#817](https://github.com/gardener/machine-controller-manager/pull/817), [@himanshu-kun](https://github.com/himanshu-kun))
## 📖 Documentation
* *[DEVELOPER]* Added proposal for hot-update of resources (instance/Nic/Disk) ([gardener/machine-controller-manager#761](https://github.com/gardener/machine-controller-manager/pull/761), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[USER]* Updated golang version to v1.19.2 ([gardener/machine-controller-manager#753](https://github.com/gardener/machine-controller-manager/pull/753), [@rishabh-11](https://github.com/rishabh-11))
* *[USER]* If during a rolling update scale-up is done, MCM scales up only the new machineSet, while in case of scale-down the scale-down amount is split among old machineSets, in proportion to their sizes. ([gardener/machine-controller-manager#765](https://github.com/gardener/machine-controller-manager/pull/765), [@himanshu-kun](https://github.com/himanshu-kun))
* *[OPERATOR]* `CrashloopBackoff` machines will turn to `Running` quicker ([gardener/machine-controller-manager#806](https://github.com/gardener/machine-controller-manager/pull/806), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* CVE categorization for MCM has been added. ([gardener/machine-controller-manager#791](https://github.com/gardener/machine-controller-manager/pull/791), [@dkistner](https://github.com/dkistner))
* *[DEVELOPER]* The API generation now works again. Previously the API docs was generated to a location that was ignored by git and other API docs file was maintained. ([gardener/machine-controller-manager#800](https://github.com/gardener/machine-controller-manager/pull/800), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEVELOPER]* Bump `k8s.io/*` dependencies to v1.26.2 ([gardener/machine-controller-manager#792](https://github.com/gardener/machine-controller-manager/pull/792), [@afritzler](https://github.com/afritzler))
* *[DEVELOPER]* go version updated to 1.19.4 in pipeline and Dockerfile ([gardener/machine-controller-manager#766](https://github.com/gardener/machine-controller-manager/pull/766), [@himanshu-kun](https://github.com/himanshu-kun))
# [machine-controller-manager-provider-openstack]
## ⚠️ Breaking Changes
* *[OPERATOR]* Support for migration of machineClass is dropped by the mcm-provider ([gardener/machine-controller-manager-provider-openstack#89](https://github.com/gardener/machine-controller-manager-provider-openstack/pull/89), [@kon-angelo](https://github.com/kon-angelo))
## 🏃 Others
* *[USER]* Updated golang version to v1.19.4 ([gardener/machine-controller-manager-provider-openstack#75](https://github.com/gardener/machine-controller-manager-provider-openstack/pull/75), [@rishabh-11](https://github.com/rishabh-11))
* *[USER]* Update golang to `v1.20.4` ([gardener/machine-controller-manager-provider-openstack#90](https://github.com/gardener/machine-controller-manager-provider-openstack/pull/90), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* CVE categorization for mcm-provider-openstack has been added. ([gardener/machine-controller-manager-provider-openstack#81](https://github.com/gardener/machine-controller-manager-provider-openstack/pull/81), [@dkistner](https://github.com/dkistner))
* *[DEPENDENCY]* Revendor gardener to `v1.69.3` ([gardener/machine-controller-manager-provider-openstack#89](https://github.com/gardener/machine-controller-manager-provider-openstack/pull/89), [@kon-angelo](https://github.com/kon-angelo))
* *[DEPENDENCY]* Revendor MCM to `v0.49.0` ([gardener/machine-controller-manager-provider-openstack#89](https://github.com/gardener/machine-controller-manager-provider-openstack/pull/89), [@kon-angelo](https://github.com/kon-angelo))
* *[DEPENDENCY]* upgraded dependency: ([gardener/machine-controller-manager-provider-openstack#92](https://github.com/gardener/machine-controller-manager-provider-openstack/pull/92), [@himanshu-kun](https://github.com/himanshu-kun))
  * github.com/gardener/machine-controller-manager -> v0.49.1
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Update alpine base image to `v3.17.3` ([gardener/terraformer#136](https://github.com/gardener/terraformer/pull/136), [@kon-angelo](https://github.com/kon-angelo))
* *[OPERATOR]* Terrafomer base image has been updated from `alpine:3.17.2` to `alpine:3.18.0` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Builder base image has been updated from `golang:1.19.6` to `golang:1.20.4` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Gardener dependency has been updated from `v1.59.1` to `v1.71.2` ([gardener/terraformer#137](https://github.com/gardener/terraformer/pull/137), [@MartinWeindel](https://github.com/MartinWeindel))

</details>

<details>
<summary><b>Update provider-aws to <code>1.44.1</code></b></summary>

# [gardener-extension-provider-aws]
## 🐛 Bug Fixes
* *[OPERATOR]* Fix the name of the aws-csi-volume-modifier container the in the respective VPA resource. ([gardener/gardener-extension-provider-aws#764](https://github.com/gardener/gardener-extension-provider-aws/pull/764), [@kon-angelo](https://github.com/kon-angelo))

</details>

<details>
<summary><b>Update provider-azure to <code>1.36.1</code></b></summary>

# [gardener-extension-provider-azure]
## 🏃 Others
* *[OPERATOR]* Add calico scheme to azure-validator. ([gardener/gardener-extension-provider-azure#697](https://github.com/gardener/gardener-extension-provider-azure/pull/697), [@kon-angelo](https://github.com/kon-angelo))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.72.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[USER]* Webhooks remediator sets the timeoutSeonds to 3 seconds for webhook affecting lease resources in `kube-system` namespace only if there is no objectSelector provided in webhook. ([gardener/gardener#8045](https://github.com/gardener/gardener/pull/8045), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed in the [HighAvailabilityConfig-Webhook](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#high-availability-config) which caused duplicated entries for zone affinities. ([gardener/gardener#8049](https://github.com/gardener/gardener/pull/8049), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* The worker count for the [NetworkPolicy controller](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) in GRM was increased to `20`. This is necessary to create and update `NetworkPolicies` in time, esp. on larger seed clusters. ([gardener/gardener#8044](https://github.com/gardener/gardener/pull/8044), [@timuthy](https://github.com/timuthy))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.72.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[USER]* Webhooks remediator sets the timeoutSeonds to 3 seconds for webhook affecting lease resources in `kube-system` namespace only if there is no objectSelector provided in webhook. ([gardener/gardener#8045](https://github.com/gardener/gardener/pull/8045), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed in the [HighAvailabilityConfig-Webhook](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#high-availability-config) which caused duplicated entries for zone affinities. ([gardener/gardener#8049](https://github.com/gardener/gardener/pull/8049), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* The worker count for the [NetworkPolicy controller](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) in GRM was increased to `20`. This is necessary to create and update `NetworkPolicies` in time, esp. on larger seed clusters. ([gardener/gardener#8044](https://github.com/gardener/gardener/pull/8044), [@timuthy](https://github.com/timuthy))

</details>

<details>
<summary><b>Update gardenlet to <code>1.72.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[USER]* Webhooks remediator sets the timeoutSeonds to 3 seconds for webhook affecting lease resources in `kube-system` namespace only if there is no objectSelector provided in webhook. ([gardener/gardener#8045](https://github.com/gardener/gardener/pull/8045), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed in the [HighAvailabilityConfig-Webhook](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#high-availability-config) which caused duplicated entries for zone affinities. ([gardener/gardener#8049](https://github.com/gardener/gardener/pull/8049), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* The worker count for the [NetworkPolicy controller](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) in GRM was increased to `20`. This is necessary to create and update `NetworkPolicies` in time, esp. on larger seed clusters. ([gardener/gardener#8044](https://github.com/gardener/gardener/pull/8044), [@timuthy](https://github.com/timuthy))

</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.10.0</code></b></summary>

# [gardener-extension-runtime-gvisor]
## 🐛 Bug Fixes
* *[OPERATOR]* The stale healthcheck conditions from the `runtime-gvisor` extension are now properly cleaned up. ([gardener/gardener-extension-runtime-gvisor#79](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/79), [@shafeeqes](https://github.com/shafeeqes))
## 🏃 Others
* *[OPERATOR]* Added NoExecute/NoSchedule tolerations to the gvisor daemonset to prevent reporting of `misscheduled` pods on node scale-down operations. ([gardener/gardener-extension-runtime-gvisor#81](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/81), [@bd3lage](https://github.com/bd3lage))
* *[OPERATOR]* The gVisor runtime extension is now built with Golang 1.20 and uses Gardener 1.70.2 libraries. ([gardener/gardener-extension-runtime-gvisor#83](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/83), [@MrBatschner](https://github.com/MrBatschner))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-runtime-gvisor#79](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/79), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.65.0 -> v1.65.3

</details>

<details>
<summary><b>Update external-dns-management to <code>0.15.4</code></b></summary>

# [external-dns-management]
## 🏃 Others
* *[OPERATOR]* The Helm chart is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/external-dns-management#306](https://github.com/gardener/external-dns-management/pull/306), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Bump builder image from `golang:1.20.4` to `golang:1.20.5` ([gardener/external-dns-management#308](https://github.com/gardener/external-dns-management/pull/308), [@MartinWeindel](https://github.com/MartinWeindel))

</details>

<details>
<summary><b>Update cert-management to <code>0.10.6</code></b></summary>

# [cert-management]
## ✨ New Features
* *[OPERATOR]* Added metrics named `cert_management_cert_object_expire` for certificate expiration date. ([gardener/cert-management#131](https://github.com/gardener/cert-management/pull/131), [@MartinWeindel](https://github.com/MartinWeindel))
## 🏃 Others
* *[OPERATOR]* The Helm chart is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/cert-management#128](https://github.com/gardener/cert-management/pull/128), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Updated golang builder image from version `1.20.4` to `1.20.5`. ([gardener/cert-management#131](https://github.com/gardener/cert-management/pull/131), [@MartinWeindel](https://github.com/MartinWeindel))

</details>

<details>
<summary><b>Update provider-aws to <code>1.44.2</code></b></summary>

# [gardener-extension-provider-aws]
## 🐛 Bug Fixes
* *[OPERATOR]* Handle S3 bucket policy IAM ARN for China and GovCloud (US) regions. ([gardener/gardener-extension-provider-aws#769](https://github.com/gardener/gardener-extension-provider-aws/pull/769), [@kon-angelo](https://github.com/kon-angelo))

</details>

<details>
<summary><b>Update os-ubuntu to <code>1.22.0</code></b></summary>

# [gardener-extension-os-ubuntu]
## 🏃 Others
* *[OPERATOR]* The Ubuntu OS extension is now built with Golang 1.20 and uses Gardener 1.70.2 libraries. ([gardener/gardener-extension-os-ubuntu#81](https://github.com/gardener/gardener-extension-os-ubuntu/pull/81), [@MrBatschner](https://github.com/MrBatschner))

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.33.0</code></b></summary>

# [gardener-extension-shoot-cert-service]
## ✨ New Features
* *[USER]* The `shoot-cert-service` extension now supports workerless `Shoot`s. ([gardener/gardener-extension-shoot-cert-service#164](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/164), [@acumino](https://github.com/acumino))
## 🏃 Others
* *[OPERATOR]* Add dashboard panel for certificate object expire date. ([gardener/gardener-extension-shoot-cert-service#166](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/166), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Updated golang from version `1.20.4` to `1.20.5`. ([gardener/gardener-extension-shoot-cert-service#166](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/166), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Old and obsolete logging configurations are cleaned up. ([gardener/gardener-extension-shoot-cert-service#168](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/168), [@vlvasilev](https://github.com/vlvasilev))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-shoot-cert-service#164](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/164), [@acumino](https://github.com/acumino))
  * github.com/gardener/gardener: v1.65.3 -> v1.71.0
  * k8s.io/* : v0.26.1 -> v0.26.3
  * sigs.k8s.io/controller-runtime: v0.14.4-> v0.14.6
# [cert-management]
## ✨ New Features
* *[OPERATOR]* Added metrics named `cert_management_cert_object_expire` for certificate expiration date. ([gardener/cert-management#131](https://github.com/gardener/cert-management/pull/131), [@MartinWeindel](https://github.com/MartinWeindel))
## 🏃 Others
* *[OPERATOR]* The Helm chart is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/cert-management#128](https://github.com/gardener/cert-management/pull/128), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Updated golang builder image from version `1.20.4` to `1.20.5`. ([gardener/cert-management#131](https://github.com/gardener/cert-management/pull/131), [@MartinWeindel](https://github.com/MartinWeindel))

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.35.0</code></b></summary>

# [gardener-extension-shoot-dns-service]
## 🏃 Others
* *[OPERATOR]* Update golang image from version `1.20.4` to `1.20.5`. ([gardener/gardener-extension-shoot-dns-service#214](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/214), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Old and obsolete logging configurations are cleaned up. ([gardener/gardener-extension-shoot-dns-service#215](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/215), [@vlvasilev](https://github.com/vlvasilev))
# [external-dns-management]
## 🏃 Others
* *[OPERATOR]* The Helm chart is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/external-dns-management#306](https://github.com/gardener/external-dns-management/pull/306), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Bump builder image from `golang:1.20.4` to `golang:1.20.5` ([gardener/external-dns-management#308](https://github.com/gardener/external-dns-management/pull/308), [@MartinWeindel](https://github.com/MartinWeindel))

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.3</code></b></summary>

## What's Changed
* Deprecates old versions automatically (instead of removing) by @23t-machine-user in https://github.com/gardener-community/cloudprofiles/pull/24


**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.2...0.6.3

</details>

<details>
<summary><b>Update provider-gcp to <code>1.29.4</code></b></summary>

# [gardener-extension-provider-gcp]
## 🏃 Others
* *[OPERATOR]* The following dependencies were updated: ([gardener/gardener-extension-provider-gcp#620](https://github.com/gardener/gardener-extension-provider-gcp/pull/620), [@vpnachev](https://github.com/vpnachev))
  * registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver v1.9.4 -> v1.9.5

</details>
