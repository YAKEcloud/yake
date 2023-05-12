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
