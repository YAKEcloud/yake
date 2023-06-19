---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.70.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed which prevented components using the `networking.resources.gardener.cloud/from-world-to-ports` annotation from being reached from internal IP addresses when the cluster was using Cilium as CNI. ([gardener/gardener#7891](https://github.com/gardener/gardener/pull/7891), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[USER]* The following images are updated: ([gardener/gardener#7901](https://github.com/gardener/gardener/pull/7901), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.21.5` -> `v1.21.6` (for Kubernetes `1.21`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.22.5` -> `v1.22.6` (for Kubernetes `1.22`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.23.3` -> `v1.23.4` (for Kubernetes `1.23`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.24.2` -> `v1.24.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.25.2` -> `v1.25.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.26.1` -> `v1.26.2` (for Kubernetes `1.26`)

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.70.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed which prevented components using the `networking.resources.gardener.cloud/from-world-to-ports` annotation from being reached from internal IP addresses when the cluster was using Cilium as CNI. ([gardener/gardener#7891](https://github.com/gardener/gardener/pull/7891), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[USER]* The following images are updated: ([gardener/gardener#7901](https://github.com/gardener/gardener/pull/7901), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.21.5` -> `v1.21.6` (for Kubernetes `1.21`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.22.5` -> `v1.22.6` (for Kubernetes `1.22`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.23.3` -> `v1.23.4` (for Kubernetes `1.23`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.24.2` -> `v1.24.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.25.2` -> `v1.25.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.26.1` -> `v1.26.2` (for Kubernetes `1.26`)

</details>

<details>
<summary><b>Update gardenlet to <code>1.70.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed which prevented components using the `networking.resources.gardener.cloud/from-world-to-ports` annotation from being reached from internal IP addresses when the cluster was using Cilium as CNI. ([gardener/gardener#7891](https://github.com/gardener/gardener/pull/7891), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[USER]* The following images are updated: ([gardener/gardener#7901](https://github.com/gardener/gardener/pull/7901), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.21.5` -> `v1.21.6` (for Kubernetes `1.21`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.22.5` -> `v1.22.6` (for Kubernetes `1.22`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.23.3` -> `v1.23.4` (for Kubernetes `1.23`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.24.2` -> `v1.24.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.25.2` -> `v1.25.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.26.1` -> `v1.26.2` (for Kubernetes `1.26`)

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
<summary><b>Update gardener-controlplane to <code>1.70.3</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed in the [HighAvailabilityConfig-Webhook](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#high-availability-config) which caused duplicated entries for zone affinities. ([gardener/gardener#8051](https://github.com/gardener/gardener/pull/8051), [@timuthy](https://github.com/timuthy))
## 🏃 Others
* *[OPERATOR]* The worker count for the [NetworkPolicy controller](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) in GRM was increased to `20`. This is necessary to create and update `NetworkPolicies` in time, esp. on larger seed clusters. ([gardener/gardener#8055](https://github.com/gardener/gardener/pull/8055), [@timuthy](https://github.com/timuthy))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.70.3</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed in the [HighAvailabilityConfig-Webhook](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#high-availability-config) which caused duplicated entries for zone affinities. ([gardener/gardener#8051](https://github.com/gardener/gardener/pull/8051), [@timuthy](https://github.com/timuthy))
## 🏃 Others
* *[OPERATOR]* The worker count for the [NetworkPolicy controller](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) in GRM was increased to `20`. This is necessary to create and update `NetworkPolicies` in time, esp. on larger seed clusters. ([gardener/gardener#8055](https://github.com/gardener/gardener/pull/8055), [@timuthy](https://github.com/timuthy))

</details>

<details>
<summary><b>Update gardenlet to <code>1.70.3</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed in the [HighAvailabilityConfig-Webhook](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#high-availability-config) which caused duplicated entries for zone affinities. ([gardener/gardener#8051](https://github.com/gardener/gardener/pull/8051), [@timuthy](https://github.com/timuthy))
## 🏃 Others
* *[OPERATOR]* The worker count for the [NetworkPolicy controller](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) in GRM was increased to `20`. This is necessary to create and update `NetworkPolicies` in time, esp. on larger seed clusters. ([gardener/gardener#8055](https://github.com/gardener/gardener/pull/8055), [@timuthy](https://github.com/timuthy))

</details>

<details>
<summary><b>Update etcd to <code>5.3.1</code></b></summary>

## What's Changed
* Removes, (potentially) conflicting lines in backup credentials secret template by @mxmxchere in https://github.com/gardener-community/etcd/pull/11


**Full Changelog**: https://github.com/gardener-community/etcd/compare/5.3.0...5.3.1

</details>

<details>
<summary><b>Update etcd to <code>5.3.1</code></b></summary>

## What's Changed
* Removes, (potentially) conflicting lines in backup credentials secret template by @mxmxchere in https://github.com/gardener-community/etcd/pull/11


**Full Changelog**: https://github.com/gardener-community/etcd/compare/5.3.0...5.3.1

</details>