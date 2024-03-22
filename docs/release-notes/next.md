---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.88.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Bump alpine to 3.19.1 by @ary1992 [#9317]
- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9287]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.88.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Bump alpine to 3.19.1 by @ary1992 [#9317]
- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9287]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.88.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Bump alpine to 3.19.1 by @ary1992 [#9317]
- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9287]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.88.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue has been fixed which caused `Shoot` reconciliation to get stuck because the API discovery used to generate the read-only `ClusterRole` for `shoots/viewerkubeconfig` subresource failed. by @rfranzke [#9364]
- `[USER]` An issue has been fixed which was causing scale-downs of `kube-controller-manager` and similar controllers due to prevented deletion of orphaned node `Lease`s. by @rfranzke [#9352]
- `[OPERATOR]` An issue causing the reconciliation of backupentries to be stuck when the extension fails to populate the status is now fixed. by @shafeeqes [#9372]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.88.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue has been fixed which caused `Shoot` reconciliation to get stuck because the API discovery used to generate the read-only `ClusterRole` for `shoots/viewerkubeconfig` subresource failed. by @rfranzke [#9364]
- `[USER]` An issue has been fixed which was causing scale-downs of `kube-controller-manager` and similar controllers due to prevented deletion of orphaned node `Lease`s. by @rfranzke [#9352]
- `[OPERATOR]` An issue causing the reconciliation of backupentries to be stuck when the extension fails to populate the status is now fixed. by @shafeeqes [#9372]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.88.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue has been fixed which caused `Shoot` reconciliation to get stuck because the API discovery used to generate the read-only `ClusterRole` for `shoots/viewerkubeconfig` subresource failed. by @rfranzke [#9364]
- `[USER]` An issue has been fixed which was causing scale-downs of `kube-controller-manager` and similar controllers due to prevented deletion of orphaned node `Lease`s. by @rfranzke [#9352]
- `[OPERATOR]` An issue causing the reconciliation of backupentries to be stuck when the extension fails to populate the status is now fixed. by @shafeeqes [#9372]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.88.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which prevented pods from starting on clusters of at least `1.28` if they were using old `PersistentVolume`s created with the deprecated `failure-domain.beta.kubernetes.io/{zone,region}` labels. by @rfranzke [#9415]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.88.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which prevented pods from starting on clusters of at least `1.28` if they were using old `PersistentVolume`s created with the deprecated `failure-domain.beta.kubernetes.io/{zone,region}` labels. by @rfranzke [#9415]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.88.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which prevented pods from starting on clusters of at least `1.28` if they were using old `PersistentVolume`s created with the deprecated `failure-domain.beta.kubernetes.io/{zone,region}` labels. by @rfranzke [#9415]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.3`


</details>
