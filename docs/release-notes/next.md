---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.69.2</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed which prevented components using the `networking.resources.gardener.cloud/from-world-to-ports` annotation from being reached from internal IP addresses when the cluster was using Cilium as CNI. ([gardener/gardener#7890](https://github.com/gardener/gardener/pull/7890), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[USER]* The following images are updated: ([gardener/gardener#7900](https://github.com/gardener/gardener/pull/7900), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.21.5` -> `v1.21.6` (for Kubernetes `1.21`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.22.5` -> `v1.22.6` (for Kubernetes `1.22`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.23.3` -> `v1.23.4` (for Kubernetes `1.23`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.24.2` -> `v1.24.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.25.2` -> `v1.25.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.26.1` -> `v1.26.2` (for Kubernetes `1.26`)
* *[OPERATOR]* Fixed an issue that would cause the `gardenlet` to run into `CrashLoopBackoff` when following the docs/development/getting_started_locally.md#remote-local-setup guide. ([gardener/gardener#7843](https://github.com/gardener/gardener/pull/7843), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.69.2</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed which prevented components using the `networking.resources.gardener.cloud/from-world-to-ports` annotation from being reached from internal IP addresses when the cluster was using Cilium as CNI. ([gardener/gardener#7890](https://github.com/gardener/gardener/pull/7890), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[USER]* The following images are updated: ([gardener/gardener#7900](https://github.com/gardener/gardener/pull/7900), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.21.5` -> `v1.21.6` (for Kubernetes `1.21`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.22.5` -> `v1.22.6` (for Kubernetes `1.22`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.23.3` -> `v1.23.4` (for Kubernetes `1.23`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.24.2` -> `v1.24.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.25.2` -> `v1.25.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.26.1` -> `v1.26.2` (for Kubernetes `1.26`)
* *[OPERATOR]* Fixed an issue that would cause the `gardenlet` to run into `CrashLoopBackoff` when following the docs/development/getting_started_locally.md#remote-local-setup guide. ([gardener/gardener#7843](https://github.com/gardener/gardener/pull/7843), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardenlet to <code>1.69.2</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed which prevented components using the `networking.resources.gardener.cloud/from-world-to-ports` annotation from being reached from internal IP addresses when the cluster was using Cilium as CNI. ([gardener/gardener#7890](https://github.com/gardener/gardener/pull/7890), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[USER]* The following images are updated: ([gardener/gardener#7900](https://github.com/gardener/gardener/pull/7900), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.21.5` -> `v1.21.6` (for Kubernetes `1.21`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.22.5` -> `v1.22.6` (for Kubernetes `1.22`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.23.3` -> `v1.23.4` (for Kubernetes `1.23`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.24.2` -> `v1.24.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.25.2` -> `v1.25.3` (for Kubernetes `1.24`)
  * `eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler`: `v1.26.1` -> `v1.26.2` (for Kubernetes `1.26`)
* *[OPERATOR]* Fixed an issue that would cause the `gardenlet` to run into `CrashLoopBackoff` when following the docs/development/getting_started_locally.md#remote-local-setup guide. ([gardener/gardener#7843](https://github.com/gardener/gardener/pull/7843), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.69.3</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Gardener denies setting `Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type` if shoot is hibernated. ([gardener/gardener#7921](https://github.com/gardener/gardener/pull/7921), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed which could cause `kube-proxy`s from being missing after a `Shoot` has been woken up from hibernation. ([gardener/gardener#7918](https://github.com/gardener/gardener/pull/7918), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* An issue causing panic in the health check for extension is fixed. ([gardener/gardener#7915](https://github.com/gardener/gardener/pull/7915), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.69.3</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Gardener denies setting `Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type` if shoot is hibernated. ([gardener/gardener#7921](https://github.com/gardener/gardener/pull/7921), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed which could cause `kube-proxy`s from being missing after a `Shoot` has been woken up from hibernation. ([gardener/gardener#7918](https://github.com/gardener/gardener/pull/7918), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* An issue causing panic in the health check for extension is fixed. ([gardener/gardener#7915](https://github.com/gardener/gardener/pull/7915), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardenlet to <code>1.69.3</code></b></summary>

# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Gardener denies setting `Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type` if shoot is hibernated. ([gardener/gardener#7921](https://github.com/gardener/gardener/pull/7921), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed which could cause `kube-proxy`s from being missing after a `Shoot` has been woken up from hibernation. ([gardener/gardener#7918](https://github.com/gardener/gardener/pull/7918), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* An issue causing panic in the health check for extension is fixed. ([gardener/gardener#7915](https://github.com/gardener/gardener/pull/7915), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

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
