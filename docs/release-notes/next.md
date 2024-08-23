---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.99.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `controllerinstallation` controller should not recreate MR secrets that differ just in the order of annotations. by @Kostov6 [#10163]
## 🏃 Others

- `[OPERATOR]` Extend pending time to 30 minutes for `SeedCondtionFailing` alerts to reduce alert noise. by @vicwicker [#10187]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.99.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `controllerinstallation` controller should not recreate MR secrets that differ just in the order of annotations. by @Kostov6 [#10163]
## 🏃 Others

- `[OPERATOR]` Extend pending time to 30 minutes for `SeedCondtionFailing` alerts to reduce alert noise. by @vicwicker [#10187]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.99.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `controllerinstallation` controller should not recreate MR secrets that differ just in the order of annotations. by @Kostov6 [#10163]
## 🏃 Others

- `[OPERATOR]` Extend pending time to 30 minutes for `SeedCondtionFailing` alerts to reduce alert noise. by @vicwicker [#10187]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.99.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10217]
- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10284]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10250]
## 🏃 Others

- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10204]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.99.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10217]
- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10284]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10250]
## 🏃 Others

- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10204]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.99.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10217]
- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10284]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10250]
## 🏃 Others

- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10204]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.99.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10374]
- `[OPERATOR]` A bug has been fixed which prevented `gardenlet` from creating its own `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource when `selfUpgrade` was set in its Helm chart values ([more information](https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades)). by @rfranzke [#10308]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.99.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10374]
- `[OPERATOR]` A bug has been fixed which prevented `gardenlet` from creating its own `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource when `selfUpgrade` was set in its Helm chart values ([more information](https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades)). by @rfranzke [#10308]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.99.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10374]
- `[OPERATOR]` A bug has been fixed which prevented `gardenlet` from creating its own `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource when `selfUpgrade` was set in its Helm chart values ([more information](https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades)). by @rfranzke [#10308]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.4`


</details>
