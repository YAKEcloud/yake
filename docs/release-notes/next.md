---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.73.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8137](https://github.com/gardener/gardener/pull/8137), [@oliver-goetz](https://github.com/oliver-goetz))
* *[OPERATOR]* Missing permissions were added for the Gardenlet service account for `Machine` objects. This fix is relevant if feature gate `MachineControllerManagerDeployment` is enabled in your landscape. ([gardener/gardener#8123](https://github.com/gardener/gardener/pull/8123), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8100](https://github.com/gardener/gardener/pull/8100), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8105](https://github.com/gardener/gardener/pull/8105), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8118](https://github.com/gardener/gardener/pull/8118), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8090](https://github.com/gardener/gardener/pull/8090), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.73.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8137](https://github.com/gardener/gardener/pull/8137), [@oliver-goetz](https://github.com/oliver-goetz))
* *[OPERATOR]* Missing permissions were added for the Gardenlet service account for `Machine` objects. This fix is relevant if feature gate `MachineControllerManagerDeployment` is enabled in your landscape. ([gardener/gardener#8123](https://github.com/gardener/gardener/pull/8123), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8100](https://github.com/gardener/gardener/pull/8100), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8105](https://github.com/gardener/gardener/pull/8105), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8118](https://github.com/gardener/gardener/pull/8118), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8090](https://github.com/gardener/gardener/pull/8090), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>

<details>
<summary><b>Update gardenlet to <code>1.73.1</code></b></summary>

# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. ([gardener/gardener#8137](https://github.com/gardener/gardener/pull/8137), [@oliver-goetz](https://github.com/oliver-goetz))
* *[OPERATOR]* Missing permissions were added for the Gardenlet service account for `Machine` objects. This fix is relevant if feature gate `MachineControllerManagerDeployment` is enabled in your landscape. ([gardener/gardener#8123](https://github.com/gardener/gardener/pull/8123), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8100](https://github.com/gardener/gardener/pull/8100), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object ([gardener/gardener#8105](https://github.com/gardener/gardener/pull/8105), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8118](https://github.com/gardener/gardener/pull/8118), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8090](https://github.com/gardener/gardener/pull/8090), [@gardener-ci-robot](https://github.com/gardener-ci-robot))

</details>
