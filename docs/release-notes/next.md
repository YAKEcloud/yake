---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


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
<summary><b>Update gardener-controlplane to <code>1.72.2</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8138](https://github.com/gardener/gardener/pull/8138), [@oliver-goetz](https://github.com/oliver-goetz))
* *[OPERATOR]* The `terraformer` library will now skip deletion of the Terraformer pod when the request context has been canceled. This change aims to prevent inconsistencies in Terraform state by attempting to allow uninterrupted execution of healthy Terraformer pods. ([gardener/gardener#8107](https://github.com/gardener/gardener/pull/8107), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed in the `garden/fluent-bit` that caused a failure in creating `networkpolicies` for scraping metrics. ([gardener/gardener#8074](https://github.com/gardener/gardener/pull/8074), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8101](https://github.com/gardener/gardener/pull/8101), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8104](https://github.com/gardener/gardener/pull/8104), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8119](https://github.com/gardener/gardener/pull/8119), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8091](https://github.com/gardener/gardener/pull/8091), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.72.2</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8138](https://github.com/gardener/gardener/pull/8138), [@oliver-goetz](https://github.com/oliver-goetz))
* *[OPERATOR]* The `terraformer` library will now skip deletion of the Terraformer pod when the request context has been canceled. This change aims to prevent inconsistencies in Terraform state by attempting to allow uninterrupted execution of healthy Terraformer pods. ([gardener/gardener#8107](https://github.com/gardener/gardener/pull/8107), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed in the `garden/fluent-bit` that caused a failure in creating `networkpolicies` for scraping metrics. ([gardener/gardener#8074](https://github.com/gardener/gardener/pull/8074), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8101](https://github.com/gardener/gardener/pull/8101), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8104](https://github.com/gardener/gardener/pull/8104), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8119](https://github.com/gardener/gardener/pull/8119), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8091](https://github.com/gardener/gardener/pull/8091), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardenlet to <code>1.72.2</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8138](https://github.com/gardener/gardener/pull/8138), [@oliver-goetz](https://github.com/oliver-goetz))
* *[OPERATOR]* The `terraformer` library will now skip deletion of the Terraformer pod when the request context has been canceled. This change aims to prevent inconsistencies in Terraform state by attempting to allow uninterrupted execution of healthy Terraformer pods. ([gardener/gardener#8107](https://github.com/gardener/gardener/pull/8107), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed in the `garden/fluent-bit` that caused a failure in creating `networkpolicies` for scraping metrics. ([gardener/gardener#8074](https://github.com/gardener/gardener/pull/8074), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8101](https://github.com/gardener/gardener/pull/8101), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8104](https://github.com/gardener/gardener/pull/8104), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8119](https://github.com/gardener/gardener/pull/8119), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8091](https://github.com/gardener/gardener/pull/8091), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>
