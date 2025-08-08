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
