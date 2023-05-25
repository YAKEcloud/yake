---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide
- Before upgrade
	- The 23KE configuration chart was unified and moved, so resources need to be annotated to get adopted by the new chart name. To prevent the old charts from deleting resources when they get removed, they need to get suspended first.
   ```shell
   flux suspend hr pre-gardener-configuration
   flux suspend hr gardener-configuration
   kubectl -n flux-system annotate Secret -l helm.toolkit.fluxcd.io/name=pre-gardener-configuration meta.helm.sh/release-name=configuration --overwrite
   kubectl -n flux-system annotate Secret -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=configuration --overwrite
   kubectl -n garden annotate Secret -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite
   kubectl -n flux-system annotate Certificate -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite
   kubectl -n flux-system annotate Issuer -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite
   ```
   If something goes wrong or the charts weren't suspended, other charts might complain about their -base-values Secret missing. To remedy,suspend and then resume the new `configuration` HelmRelease so it re-generates those Secrets.

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-azure to <code>1.35.3</code></b></summary>

# [gardener-extension-provider-azure]
## 🏃 Others
* *[OPERATOR]* Remove the error code check from `NodesChecker` to prevent nil pointer panic. ([gardener/gardener-extension-provider-azure#684](https://github.com/gardener/gardener-extension-provider-azure/pull/684), [@acumino](https://github.com/acumino))

</details>

<details>
<summary><b>Update provider-aws to <code>1.43.2</code></b></summary>

# [gardener-extension-provider-aws]
## 🏃 Others
* *[OPERATOR]* Remove the error code check from `NodesChecker` to prevent nil pointer panic. ([gardener/gardener-extension-provider-aws#748](https://github.com/gardener/gardener-extension-provider-aws/pull/748), [@acumino](https://github.com/acumino))

</details>

<details>
<summary><b>Update provider-gcp to <code>1.29.3</code></b></summary>

# [gardener-extension-provider-gcp]
## 🏃 Others
* *[OPERATOR]* Remove the error code check from `NodesChecker` to prevent nil pointer panic. ([gardener/gardener-extension-provider-gcp#595](https://github.com/gardener/gardener-extension-provider-gcp/pull/595), [@acumino](https://github.com/acumino))

</details>

<details>
<summary><b>Update provider-openstack to <code>1.33.3</code></b></summary>

# [gardener-extension-provider-openstack]
## 🏃 Others
* *[OPERATOR]* Remove the error code check from `NodesChecker` to prevent nil pointer panic. ([gardener/gardener-extension-provider-openstack#622](https://github.com/gardener/gardener-extension-provider-openstack/pull/622), [@acumino](https://github.com/acumino))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.70.2</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Gardener denies setting `Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type` if shoot is hibernated. ([gardener/gardener#7920](https://github.com/gardener/gardener/pull/7920), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed which could cause `kube-proxy`s from being missing after a `Shoot` has been woken up from hibernation. ([gardener/gardener#7917](https://github.com/gardener/gardener/pull/7917), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* An issue has been fixed that caused traffic from outside of the cluster to `Istio-Ingress` being blocked. This is only relevant if seed(s) specify additional load balancer annotations via `seed.spec.settings.loadBalancerServices.annotations`. ([gardener/gardener#7911](https://github.com/gardener/gardener/pull/7911), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* An issue causing panic in the health check for extension is fixed. ([gardener/gardener#7914](https://github.com/gardener/gardener/pull/7914), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.70.2</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Gardener denies setting `Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type` if shoot is hibernated. ([gardener/gardener#7920](https://github.com/gardener/gardener/pull/7920), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed which could cause `kube-proxy`s from being missing after a `Shoot` has been woken up from hibernation. ([gardener/gardener#7917](https://github.com/gardener/gardener/pull/7917), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* An issue has been fixed that caused traffic from outside of the cluster to `Istio-Ingress` being blocked. This is only relevant if seed(s) specify additional load balancer annotations via `seed.spec.settings.loadBalancerServices.annotations`. ([gardener/gardener#7911](https://github.com/gardener/gardener/pull/7911), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* An issue causing panic in the health check for extension is fixed. ([gardener/gardener#7914](https://github.com/gardener/gardener/pull/7914), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardenlet to <code>1.70.2</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Gardener denies setting `Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type` if shoot is hibernated. ([gardener/gardener#7920](https://github.com/gardener/gardener/pull/7920), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed which could cause `kube-proxy`s from being missing after a `Shoot` has been woken up from hibernation. ([gardener/gardener#7917](https://github.com/gardener/gardener/pull/7917), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* An issue has been fixed that caused traffic from outside of the cluster to `Istio-Ingress` being blocked. This is only relevant if seed(s) specify additional load balancer annotations via `seed.spec.settings.loadBalancerServices.annotations`. ([gardener/gardener#7911](https://github.com/gardener/gardener/pull/7911), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* An issue causing panic in the health check for extension is fixed. ([gardener/gardener#7914](https://github.com/gardener/gardener/pull/7914), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.2</code></b></summary>

## What's Changed
* Regiocloud: Change regiocloud-a to RegionA by @JensAc in https://github.com/gardener-community/cloudprofiles/pull/23


**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.1...0.6.2

</details>

<details>
<summary><b>Update provider-alicloud to <code>1.46.0</code></b></summary>

# [gardener-extension-provider-alicloud]
## 📖 Documentation
* *[DEPENDENCY]* The flags which went out-of-support in MCM v0.49.0 have been cleaned up from MCM deployment yaml. ([gardener/gardener-extension-provider-alicloud#595](https://github.com/gardener/gardener-extension-provider-alicloud/pull/595), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[OPERATOR]* The `gardener-extension-admission-alicloud` Service in the `gardener-extension-admission-alicloud` chart can now be configured to be topology-aware. ([gardener/gardener-extension-provider-alicloud#591](https://github.com/gardener/gardener-extension-provider-alicloud/pull/591), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-provider-alicloud#599](https://github.com/gardener/gardener-extension-provider-alicloud/pull/599), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* The following dependency has been updated: ([gardener/gardener-extension-provider-alicloud#600](https://github.com/gardener/gardener-extension-provider-alicloud/pull/600), [@acumino](https://github.com/acumino))
  * github.com/gardener/gardener 1.67.1 -> 1.70.2
# [machine-controller-manager]
## ⚠️ Breaking Changes
* *[OPERATOR]* Removal of the following flags (and corresponding fields in associated structs): 'machine-creation-timeout' 'machine-drain-timeout', 'machine-pv-detach-timeout', 'machine-health-timeout=10m', 'machine-safety-apiserver-statuscheck-timeout', 'machine-safety-apiserver-statuscheck-period', 'machine-safety-orphan-vms-period', 'machine-max-evict-retries', 'node-conditions', 'bootstrap-token-auth-extra-groups', 'delete-migrated-machine-class'. The MCM no longer accepts these flags since these are options handled by the Machine Controller invoked by platform specific provider launchers. ([gardener/machine-controller-manager#769](https://github.com/gardener/machine-controller-manager/pull/769), [@elankath](https://github.com/elankath))
* *[DEVELOPER]* Deletion of 'Driver.GenerateMachineClassForMigration'. Providers need to adapt to this. ([gardener/machine-controller-manager#769](https://github.com/gardener/machine-controller-manager/pull/769), [@elankath](https://github.com/elankath))
## ✨ New Features
* *[USER]* Machine object won't turn from `Pending`  to `Running` state if `node.gardener.cloud/critical-components-not-ready` taint is there on the corresponding node. ([gardener/machine-controller-manager#778](https://github.com/gardener/machine-controller-manager/pull/778), [@SimonKienzler](https://github.com/SimonKienzler))
## 🐛 Bug Fixes
* *[USER]* An edge case where all the machineSets were scaled down to zero has been dealt with. ([gardener/machine-controller-manager#803](https://github.com/gardener/machine-controller-manager/pull/803), [@himanshu-kun](https://github.com/himanshu-kun))
* *[USER]* Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. ([gardener/machine-controller-manager#773](https://github.com/gardener/machine-controller-manager/pull/773), [@schrodit](https://github.com/schrodit))
## 📖 Documentation
* *[DEVELOPER]* Added proposal for hot-update of resources (instance/Nic/Disk) ([gardener/machine-controller-manager#761](https://github.com/gardener/machine-controller-manager/pull/761), [@himanshu-kun](https://github.com/himanshu-kun))
## 🏃 Others
* *[OPERATOR]* `CrashloopBackoff` machines will turn to `Running` quicker ([gardener/machine-controller-manager#806](https://github.com/gardener/machine-controller-manager/pull/806), [@rishabh-11](https://github.com/rishabh-11))
* *[OPERATOR]* CVE categorization for MCM has been added. ([gardener/machine-controller-manager#791](https://github.com/gardener/machine-controller-manager/pull/791), [@dkistner](https://github.com/dkistner))
* *[DEVELOPER]* The API generation now works again. Previously the API docs was generated to a location that was ignored by git and other API docs file was maintained. ([gardener/machine-controller-manager#800](https://github.com/gardener/machine-controller-manager/pull/800), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEVELOPER]* Bump `k8s.io/*` dependencies to v1.26.2 ([gardener/machine-controller-manager#792](https://github.com/gardener/machine-controller-manager/pull/792), [@afritzler](https://github.com/afritzler))
# [terraformer]
## 🏃 Others
* *[OPERATOR]* Update alpine base image to `v3.17.3` ([gardener/terraformer#136](https://github.com/gardener/terraformer/pull/136), [@kon-angelo](https://github.com/kon-angelo))
## Docker Images
gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.46.0`
gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.46.0`

</details>
