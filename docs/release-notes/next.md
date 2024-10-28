---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.104.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10578]
## 🏃 Others

- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @ishan16696 [#10592]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.104.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10578]
## 🏃 Others

- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @ishan16696 [#10592]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.104.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that caused `gardenlet` to not be able to migrate deprecated `failure-domain.beta.kubernetes.io` labels to `topology.kubernetes.io` due to a removed RBAC rule required to patch `PersistentVolume`s. by @plkokanov [#10578]
## 🏃 Others

- `[OPERATOR]` The `gardener/etcd-druid` image has been updated to `v0.22.7`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.22.7) by @ishan16696 [#10592]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.104.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10675]
- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10628]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.104.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10675]
- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10628]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.104.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10675]
- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10628]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.104.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10709]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.104.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10709]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.104.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10709]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.3`


</details>
