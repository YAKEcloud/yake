---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-aws to <code>1.62.3</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[DEVELOPER]` run `make generate` for release- and bump-commits (again) by @kon-angelo [#1400]


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.122.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12562]
- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12565]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.122.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.122.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.122.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.122.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.122.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.122.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.122.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.122.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.122.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.122.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.122.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.122.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.122.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.122.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12562]
- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12565]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.122.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.122.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.122.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.122.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.122.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.122.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.122.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.122.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.122.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.122.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.122.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.122.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.122.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.122.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12562]
- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12565]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.122.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.122.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.122.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.122.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.122.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.122.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.122.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.122.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.122.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.122.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.122.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.122.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.122.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.122.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12645]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12678]
- `[OPERATOR]` Seed registration was fixed for `ManagedSeed`s with seed templates configuring `spec.resources`. by @timuthy [#12662]
## 🏃 Others

- `[OPERATOR]` A bug in Gardener Node Agent that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12671]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.122.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.122.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.122.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.122.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.122.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.122.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.122.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.122.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.122.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.122.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.122.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.122.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.122.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.122.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12645]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12678]
- `[OPERATOR]` Seed registration was fixed for `ManagedSeed`s with seed templates configuring `spec.resources`. by @timuthy [#12662]
## 🏃 Others

- `[OPERATOR]` A bug in Gardener Node Agent that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12671]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.122.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.122.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.122.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.122.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.122.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.122.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.122.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.122.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.122.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.122.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.122.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.122.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.122.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.122.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12645]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12678]
- `[OPERATOR]` Seed registration was fixed for `ManagedSeed`s with seed templates configuring `spec.resources`. by @timuthy [#12662]
## 🏃 Others

- `[OPERATOR]` A bug in Gardener Node Agent that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12671]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.122.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.122.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.122.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.122.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.122.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.122.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.122.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.122.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.122.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.122.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.122.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.122.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.122.3`


</details>
