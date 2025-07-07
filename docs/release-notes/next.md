---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardenlet to <code>1.120.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12303]
## 🏃 Others

- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12291]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.120.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12303]
## 🏃 Others

- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12291]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.120.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12303]
## 🏃 Others

- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12291]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.120.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue preventing the cluster-autoscaler to list `volumeattachments` in now fixed. by @aaronfern [#12378]
- `[DEVELOPER]` Installing `logcheck` and `typos` as custom linters for gardener extensions has been fixed. by @timuthy [#12381]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.120.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue preventing the cluster-autoscaler to list `volumeattachments` in now fixed. by @aaronfern [#12378]
- `[DEVELOPER]` Installing `logcheck` and `typos` as custom linters for gardener extensions has been fixed. by @timuthy [#12381]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.120.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue preventing the cluster-autoscaler to list `volumeattachments` in now fixed. by @aaronfern [#12378]
- `[DEVELOPER]` Installing `logcheck` and `typos` as custom linters for gardener extensions has been fixed. by @timuthy [#12381]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.120.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing gardenlet to panic during the migration from single-stack IPv4 to dual-stack IPv4, IPv6 when the Shoot is hibernated is now fixed. by @DockToFuture [#12435]
- `[DEVELOPER]` An issue causing reporting data generated by the testframework to be incompatible with recent elasticsearch/opensearch versions is now fixed. by @dguendisch [#12464]
- `[OPERATOR]` Fixed an error in `BackupBucket` reconciliation by replacing `StrategicMergePatch` with `MergePatch` to properly handle `runtime.RawExtension` fields. by @shafeeqes [#12460]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.120.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing gardenlet to panic during the migration from single-stack IPv4 to dual-stack IPv4, IPv6 when the Shoot is hibernated is now fixed. by @DockToFuture [#12435]
- `[DEVELOPER]` An issue causing reporting data generated by the testframework to be incompatible with recent elasticsearch/opensearch versions is now fixed. by @dguendisch [#12464]
- `[OPERATOR]` Fixed an error in `BackupBucket` reconciliation by replacing `StrategicMergePatch` with `MergePatch` to properly handle `runtime.RawExtension` fields. by @shafeeqes [#12460]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.120.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing gardenlet to panic during the migration from single-stack IPv4 to dual-stack IPv4, IPv6 when the Shoot is hibernated is now fixed. by @DockToFuture [#12435]
- `[DEVELOPER]` An issue causing reporting data generated by the testframework to be incompatible with recent elasticsearch/opensearch versions is now fixed. by @dguendisch [#12464]
- `[OPERATOR]` Fixed an error in `BackupBucket` reconciliation by replacing `StrategicMergePatch` with `MergePatch` to properly handle `runtime.RawExtension` fields. by @shafeeqes [#12460]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.120.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.120.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.120.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.120.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.120.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.120.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.120.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.120.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.120.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.120.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.120.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.120.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.120.4`


</details>
