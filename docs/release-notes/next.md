---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.132.2</code></b></summary>

# [github.com/gardener/gardener:v1.132.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The server block import feature for node-local-dns is now behind a feature gate (`CustomDNSServerInNodeLocalDNS`). by @ialidzhikov [[#13523](https://github.com/gardener/gardener/pull/13523)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.132.2</code></b></summary>

# [github.com/gardener/gardener:v1.132.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The server block import feature for node-local-dns is now behind a feature gate (`CustomDNSServerInNodeLocalDNS`). by @ialidzhikov [[#13523](https://github.com/gardener/gardener/pull/13523)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.132.2</code></b></summary>

# [github.com/gardener/gardener:v1.132.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The server block import feature for node-local-dns is now behind a feature gate (`CustomDNSServerInNodeLocalDNS`). by @ialidzhikov [[#13523](https://github.com/gardener/gardener/pull/13523)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.132.3</code></b></summary>

# [github.com/gardener/gardener:v1.132.3]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed a bug where operators could not exclusively specify `count` limits in the Garden's `spec.virtualCluster.gardener.gardenerAdmissionController.resourceAdmissionConfiguration.limit` field. by @tobschli [[#13582](https://github.com/gardener/gardener/pull/13582)]
- `[USER]` A bug which prevented the wildcard certificate endpoints to be advertised in the shoot status has been fixed. by @oliver-goetz [[#13642](https://github.com/gardener/gardener/pull/13642)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.132.3</code></b></summary>

# [github.com/gardener/gardener:v1.132.3]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed a bug where operators could not exclusively specify `count` limits in the Garden's `spec.virtualCluster.gardener.gardenerAdmissionController.resourceAdmissionConfiguration.limit` field. by @tobschli [[#13582](https://github.com/gardener/gardener/pull/13582)]
- `[USER]` A bug which prevented the wildcard certificate endpoints to be advertised in the shoot status has been fixed. by @oliver-goetz [[#13642](https://github.com/gardener/gardener/pull/13642)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.132.3</code></b></summary>

# [github.com/gardener/gardener:v1.132.3]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed a bug where operators could not exclusively specify `count` limits in the Garden's `spec.virtualCluster.gardener.gardenerAdmissionController.resourceAdmissionConfiguration.limit` field. by @tobschli [[#13582](https://github.com/gardener/gardener/pull/13582)]
- `[USER]` A bug which prevented the wildcard certificate endpoints to be advertised in the shoot status has been fixed. by @oliver-goetz [[#13642](https://github.com/gardener/gardener/pull/13642)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.132.4</code></b></summary>

# [github.com/gardener/gardener:v1.132.4]

## 🐛 Bug Fixes
- `[OPERATOR]` extension library: An issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the BackupEntry Secret is now fixed. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#13793](https://github.com/gardener/gardener/pull/13793)]
- `[OPERATOR]` Refactor the collector `journald` receiver to capture kernel logs via a more stable method. by @rrhubenov [[#13736](https://github.com/gardener/gardener/pull/13736)]
- `[OPERATOR]` An issue causing credentials rotation for the Garden resource to fail is now fixed. by @ialidzhikov [[#13740](https://github.com/gardener/gardener/pull/13740)]
- `[USER]` Fix a bug that prevents updating expiration dates of overridden machine image versions in `NamespacedCloudProfile`s. by @LucaBernstein [[#13771](https://github.com/gardener/gardener/pull/13771)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.132.4</code></b></summary>

# [github.com/gardener/gardener:v1.132.4]

## 🐛 Bug Fixes
- `[OPERATOR]` extension library: An issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the BackupEntry Secret is now fixed. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#13793](https://github.com/gardener/gardener/pull/13793)]
- `[OPERATOR]` Refactor the collector `journald` receiver to capture kernel logs via a more stable method. by @rrhubenov [[#13736](https://github.com/gardener/gardener/pull/13736)]
- `[OPERATOR]` An issue causing credentials rotation for the Garden resource to fail is now fixed. by @ialidzhikov [[#13740](https://github.com/gardener/gardener/pull/13740)]
- `[USER]` Fix a bug that prevents updating expiration dates of overridden machine image versions in `NamespacedCloudProfile`s. by @LucaBernstein [[#13771](https://github.com/gardener/gardener/pull/13771)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.132.4</code></b></summary>

# [github.com/gardener/gardener:v1.132.4]

## 🐛 Bug Fixes
- `[OPERATOR]` extension library: An issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the BackupEntry Secret is now fixed. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#13793](https://github.com/gardener/gardener/pull/13793)]
- `[OPERATOR]` Refactor the collector `journald` receiver to capture kernel logs via a more stable method. by @rrhubenov [[#13736](https://github.com/gardener/gardener/pull/13736)]
- `[OPERATOR]` An issue causing credentials rotation for the Garden resource to fail is now fixed. by @ialidzhikov [[#13740](https://github.com/gardener/gardener/pull/13740)]
- `[USER]` Fix a bug that prevents updating expiration dates of overridden machine image versions in `NamespacedCloudProfile`s. by @LucaBernstein [[#13771](https://github.com/gardener/gardener/pull/13771)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.132.5</code></b></summary>

# [github.com/gardener/gardener:v1.132.5]

## 🐛 Bug Fixes
- `[USER]` Fixed an issue where the Manual Worker Pool Rollout feature worked only when there is only one machine deployment per worker. by @rrhubenov [[#13815](https://github.com/gardener/gardener/pull/13815)]
- `[USER]` A bug has been fixed which was causing invalid high-availability configuration for system components in case a `Shoot` was configured with a worker pool with `maximum=0`. by @rfranzke [[#13872](https://github.com/gardener/gardener/pull/13872)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.5`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.132.5</code></b></summary>

# [github.com/gardener/gardener:v1.132.5]

## 🐛 Bug Fixes
- `[USER]` Fixed an issue where the Manual Worker Pool Rollout feature worked only when there is only one machine deployment per worker. by @rrhubenov [[#13815](https://github.com/gardener/gardener/pull/13815)]
- `[USER]` A bug has been fixed which was causing invalid high-availability configuration for system components in case a `Shoot` was configured with a worker pool with `maximum=0`. by @rfranzke [[#13872](https://github.com/gardener/gardener/pull/13872)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.5`


</details>

<details>
<summary><b>Update gardenlet to <code>1.132.5</code></b></summary>

# [github.com/gardener/gardener:v1.132.5]

## 🐛 Bug Fixes
- `[USER]` Fixed an issue where the Manual Worker Pool Rollout feature worked only when there is only one machine deployment per worker. by @rrhubenov [[#13815](https://github.com/gardener/gardener/pull/13815)]
- `[USER]` A bug has been fixed which was causing invalid high-availability configuration for system components in case a `Shoot` was configured with a worker pool with `maximum=0`. by @rfranzke [[#13872](https://github.com/gardener/gardener/pull/13872)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.5`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.5`


</details>
