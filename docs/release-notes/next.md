---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.119.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing the in-place update to fail during credentials rotation without workers rollout is now fixed. by @shafeeqes [#12249]
- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12304]
- `[OPERATOR]` Fixed a bug that caused the gardener operator to never reconcile the `Garden` object, when there was no `gardenerDashboard` defined. by @Wieneo [#12159]
- `[OPERATOR]` The deletion of `NamespacedCloudProfile`s has been fixed. Previously, users could not delete these resources if objects with the same name but in different namespaces existed in the landscape. Gardener incorrectly reported them as still being referenced by shoot clusters. by @timuthy [#12194]
## 🏃 Others

- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12292]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.119.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.119.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.119.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.119.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.119.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.119.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.119.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.119.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.119.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.119.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.119.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.119.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.119.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.119.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing the in-place update to fail during credentials rotation without workers rollout is now fixed. by @shafeeqes [#12249]
- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12304]
- `[OPERATOR]` Fixed a bug that caused the gardener operator to never reconcile the `Garden` object, when there was no `gardenerDashboard` defined. by @Wieneo [#12159]
- `[OPERATOR]` The deletion of `NamespacedCloudProfile`s has been fixed. Previously, users could not delete these resources if objects with the same name but in different namespaces existed in the landscape. Gardener incorrectly reported them as still being referenced by shoot clusters. by @timuthy [#12194]
## 🏃 Others

- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12292]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.119.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.119.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.119.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.119.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.119.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.119.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.119.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.119.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.119.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.119.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.119.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.119.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.119.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.119.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing the in-place update to fail during credentials rotation without workers rollout is now fixed. by @shafeeqes [#12249]
- `[OPERATOR]` An issue causing the Shoot credentials rotation status not to correctly get updated, after all the manual in-place pending workers are updated, is now fixed. by @shafeeqes [#12304]
- `[OPERATOR]` Fixed a bug that caused the gardener operator to never reconcile the `Garden` object, when there was no `gardenerDashboard` defined. by @Wieneo [#12159]
- `[OPERATOR]` The deletion of `NamespacedCloudProfile`s has been fixed. Previously, users could not delete these resources if objects with the same name but in different namespaces existed in the landscape. Gardener incorrectly reported them as still being referenced by shoot clusters. by @timuthy [#12194]
## 🏃 Others

- `[OPERATOR]` `gardenadm` is now published as a container image in release and snapshot builds. by @timebertt [#12292]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.119.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.119.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.119.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.119.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.119.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.119.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.119.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.119.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.119.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.119.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.119.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.119.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.119.1`


</details>
