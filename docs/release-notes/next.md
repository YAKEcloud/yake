---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.124.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug which could cause istio service and workload dashboards to show "many-to-many matching errors" after kube-apiserver pods were rolling has been fixed. by @oliver-goetz [#12638]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12680]
- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12645]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.81.0` to `1.81.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.1) by @gardener-ci-robot [#12621]
- `[OPERATOR]` A bug in Gardener Node Agent that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12672]
[github.com/gardener/dashboard:1.81.1]
# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixed issue where wrong dashboard version (with -dev tag) was displayed in the UI by @gardener-github-actions[bot] [#2527]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.124.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug which could cause istio service and workload dashboards to show "many-to-many matching errors" after kube-apiserver pods were rolling has been fixed. by @oliver-goetz [#12638]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12680]
- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12645]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.81.0` to `1.81.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.1) by @gardener-ci-robot [#12621]
- `[OPERATOR]` A bug in Gardener Node Agent that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12672]
[github.com/gardener/dashboard:1.81.1]
# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixed issue where wrong dashboard version (with -dev tag) was displayed in the UI by @gardener-github-actions[bot] [#2527]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.124.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug which could cause istio service and workload dashboards to show "many-to-many matching errors" after kube-apiserver pods were rolling has been fixed. by @oliver-goetz [#12638]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12680]
- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12645]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.81.0` to `1.81.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.1) by @gardener-ci-robot [#12621]
- `[OPERATOR]` A bug in Gardener Node Agent that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12672]
[github.com/gardener/dashboard:1.81.1]
# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixed issue where wrong dashboard version (with -dev tag) was displayed in the UI by @gardener-github-actions[bot] [#2527]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.124.2</code></b></summary>

# [github.com/gardener/gardener:v1.124.2]

## 🏃 Others
- `[OPERATOR]` The following dependencies have been updated:
  - `gardener/vpn2` from `0.40.0` to `0.40.1`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.1) by @axel7born [[#12725](https://github.com/gardener/gardener/pull/12725)]
- `[DEPENDENCY]` The following dependencies have been updated:
  - `gardener/autoscaler` from `v1.32.0` to `v1.32.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.1) by @gardener-ci-robot [[#12719](https://github.com/gardener/gardener/pull/12719)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.124.2</code></b></summary>

# [github.com/gardener/gardener:v1.124.2]

## 🏃 Others
- `[OPERATOR]` The following dependencies have been updated:
  - `gardener/vpn2` from `0.40.0` to `0.40.1`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.1) by @axel7born [[#12725](https://github.com/gardener/gardener/pull/12725)]
- `[DEPENDENCY]` The following dependencies have been updated:
  - `gardener/autoscaler` from `v1.32.0` to `v1.32.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.1) by @gardener-ci-robot [[#12719](https://github.com/gardener/gardener/pull/12719)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.124.2</code></b></summary>

# [github.com/gardener/gardener:v1.124.2]

## 🏃 Others
- `[OPERATOR]` The following dependencies have been updated:
  - `gardener/vpn2` from `0.40.0` to `0.40.1`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.1) by @axel7born [[#12725](https://github.com/gardener/gardener/pull/12725)]
- `[DEPENDENCY]` The following dependencies have been updated:
  - `gardener/autoscaler` from `v1.32.0` to `v1.32.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.1) by @gardener-ci-robot [[#12719](https://github.com/gardener/gardener/pull/12719)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.124.3</code></b></summary>

# [github.com/gardener/gardener:v1.124.3]

## 🐛 Bug Fixes
- `[OPERATOR]` The `plutono-datasources` `ConfigMap` is no longer wrongfully garbage collected while it is in use. by @gardener-ci-robot [[#12766](https://github.com/gardener/gardener/pull/12766)]
- `[OPERATOR]` An issue causing the `plutono-datasources` ConfigMap to be reconciled by 2 ManagedResources when Seed is Garden managed by `gardener-operator` is now fixed. Occasionally, the issue was preventing successful Seed deletion. by @gardener-ci-robot [[#12797](https://github.com/gardener/gardener/pull/12797)]
- `[USER]` Errors that occur during `Worker` reconciliation are now also propagated to the `Shoot` status. by @gardener-ci-robot [[#12790](https://github.com/gardener/gardener/pull/12790)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.124.3</code></b></summary>

# [github.com/gardener/gardener:v1.124.3]

## 🐛 Bug Fixes
- `[OPERATOR]` The `plutono-datasources` `ConfigMap` is no longer wrongfully garbage collected while it is in use. by @gardener-ci-robot [[#12766](https://github.com/gardener/gardener/pull/12766)]
- `[OPERATOR]` An issue causing the `plutono-datasources` ConfigMap to be reconciled by 2 ManagedResources when Seed is Garden managed by `gardener-operator` is now fixed. Occasionally, the issue was preventing successful Seed deletion. by @gardener-ci-robot [[#12797](https://github.com/gardener/gardener/pull/12797)]
- `[USER]` Errors that occur during `Worker` reconciliation are now also propagated to the `Shoot` status. by @gardener-ci-robot [[#12790](https://github.com/gardener/gardener/pull/12790)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.124.3</code></b></summary>

# [github.com/gardener/gardener:v1.124.3]

## 🐛 Bug Fixes
- `[OPERATOR]` The `plutono-datasources` `ConfigMap` is no longer wrongfully garbage collected while it is in use. by @gardener-ci-robot [[#12766](https://github.com/gardener/gardener/pull/12766)]
- `[OPERATOR]` An issue causing the `plutono-datasources` ConfigMap to be reconciled by 2 ManagedResources when Seed is Garden managed by `gardener-operator` is now fixed. Occasionally, the issue was preventing successful Seed deletion. by @gardener-ci-robot [[#12797](https://github.com/gardener/gardener/pull/12797)]
- `[USER]` Errors that occur during `Worker` reconciliation are now also propagated to the `Shoot` status. by @gardener-ci-robot [[#12790](https://github.com/gardener/gardener/pull/12790)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.3`


</details>
