---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.125.1</code></b></summary>

# [github.com/gardener/gardener:v1.125.1]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.41.0` to `0.41.1`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.1) by @gardener-ci-robot [[#12726](https://github.com/gardener/gardener/pull/12726)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.0` to `v1.32.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.1) by @gardener-ci-robot [[#12720](https://github.com/gardener/gardener/pull/12720)]


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.125.1</code></b></summary>

# [github.com/gardener/gardener:v1.125.1]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.41.0` to `0.41.1`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.1) by @gardener-ci-robot [[#12726](https://github.com/gardener/gardener/pull/12726)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.0` to `v1.32.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.1) by @gardener-ci-robot [[#12720](https://github.com/gardener/gardener/pull/12720)]


</details>

<details>
<summary><b>Update gardenlet to <code>1.125.1</code></b></summary>

# [github.com/gardener/gardener:v1.125.1]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.41.0` to `0.41.1`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.1) by @gardener-ci-robot [[#12726](https://github.com/gardener/gardener/pull/12726)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.0` to `v1.32.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.1) by @gardener-ci-robot [[#12720](https://github.com/gardener/gardener/pull/12720)]


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.125.2</code></b></summary>

# [github.com/gardener/gardener:v1.125.2]

## 🐛 Bug Fixes
- `[USER]` Errors that occur during `Worker` reconciliation are now also propagated to the `Shoot` status. by @gardener-ci-robot [[#12789](https://github.com/gardener/gardener/pull/12789)]
- `[OPERATOR]` The `plutono-datasources` `ConfigMap` is no longer wrongfully garbage collected while it is in use. by @gardener-ci-robot [[#12765](https://github.com/gardener/gardener/pull/12765)]


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.125.2</code></b></summary>

# [github.com/gardener/gardener:v1.125.2]

## 🐛 Bug Fixes
- `[USER]` Errors that occur during `Worker` reconciliation are now also propagated to the `Shoot` status. by @gardener-ci-robot [[#12789](https://github.com/gardener/gardener/pull/12789)]
- `[OPERATOR]` The `plutono-datasources` `ConfigMap` is no longer wrongfully garbage collected while it is in use. by @gardener-ci-robot [[#12765](https://github.com/gardener/gardener/pull/12765)]


</details>

<details>
<summary><b>Update gardenlet to <code>1.125.2</code></b></summary>

# [github.com/gardener/gardener:v1.125.2]

## 🐛 Bug Fixes
- `[USER]` Errors that occur during `Worker` reconciliation are now also propagated to the `Shoot` status. by @gardener-ci-robot [[#12789](https://github.com/gardener/gardener/pull/12789)]
- `[OPERATOR]` The `plutono-datasources` `ConfigMap` is no longer wrongfully garbage collected while it is in use. by @gardener-ci-robot [[#12765](https://github.com/gardener/gardener/pull/12765)]


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.125.3</code></b></summary>

# [github.com/gardener/gardener:v1.125.3]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the `plutono-datasources` ConfigMap to be reconciled by 2 ManagedResources when Seed is Garden managed by `gardener-operator` is now fixed. Occasionally, the issue was preventing successful Seed deletion. by @gardener-ci-robot [[#12796](https://github.com/gardener/gardener/pull/12796)]


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.125.3</code></b></summary>

# [github.com/gardener/gardener:v1.125.3]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the `plutono-datasources` ConfigMap to be reconciled by 2 ManagedResources when Seed is Garden managed by `gardener-operator` is now fixed. Occasionally, the issue was preventing successful Seed deletion. by @gardener-ci-robot [[#12796](https://github.com/gardener/gardener/pull/12796)]


</details>

<details>
<summary><b>Update gardenlet to <code>1.125.3</code></b></summary>

# [github.com/gardener/gardener:v1.125.3]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the `plutono-datasources` ConfigMap to be reconciled by 2 ManagedResources when Seed is Garden managed by `gardener-operator` is now fixed. Occasionally, the issue was preventing successful Seed deletion. by @gardener-ci-robot [[#12796](https://github.com/gardener/gardener/pull/12796)]


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.125.4</code></b></summary>

# [github.com/gardener/gardener:v1.125.4]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the update of existing `CustomResourceDefinitions` to be no-op is now fixed. by @shafeeqes [[#12973](https://github.com/gardener/gardener/pull/12973)]

## 🏃 Others
- `[OPERATOR]` Monitoring the Istio Ingress Gateways is temporarily disabled to mitigate a metric leak issue. This does not affect the monitoring of the shoot control planes where these metrics are not used. by @gardener-ci-robot [[#12936](https://github.com/gardener/gardener/pull/12936)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.125.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.125.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.125.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.125.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.125.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.125.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.125.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.125.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.125.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.125.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.125.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.125.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.125.4</code></b></summary>

# [github.com/gardener/gardener:v1.125.4]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the update of existing `CustomResourceDefinitions` to be no-op is now fixed. by @shafeeqes [[#12973](https://github.com/gardener/gardener/pull/12973)]

## 🏃 Others
- `[OPERATOR]` Monitoring the Istio Ingress Gateways is temporarily disabled to mitigate a metric leak issue. This does not affect the monitoring of the shoot control planes where these metrics are not used. by @gardener-ci-robot [[#12936](https://github.com/gardener/gardener/pull/12936)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.125.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.125.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.125.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.125.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.125.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.125.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.125.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.125.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.125.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.125.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.125.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.125.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.125.4</code></b></summary>

# [github.com/gardener/gardener:v1.125.4]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the update of existing `CustomResourceDefinitions` to be no-op is now fixed. by @shafeeqes [[#12973](https://github.com/gardener/gardener/pull/12973)]

## 🏃 Others
- `[OPERATOR]` Monitoring the Istio Ingress Gateways is temporarily disabled to mitigate a metric leak issue. This does not affect the monitoring of the shoot control planes where these metrics are not used. by @gardener-ci-robot [[#12936](https://github.com/gardener/gardener/pull/12936)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.125.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.125.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.125.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.125.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.125.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.125.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.125.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.125.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.125.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.125.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.125.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.125.4`


</details>
