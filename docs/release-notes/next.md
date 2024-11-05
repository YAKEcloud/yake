---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.105.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10631]
- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10674]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.105.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10631]
- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10674]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.105.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10631]
- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10674]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.1`


</details>

<details>
<summary><b>Update provider-hcloud to <code>0.6.32</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.32

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.105.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `gardener-resource-manager` does not mark `Deployment`s as progressing when there are still completed `Pod`s in the system. by @timuthy [#10728]
## 🏃 Others

- `[OPERATOR]` Fixed an issue that would cause the entry for the `machine-state` in the `ShootState` to be overwritten with nil data during control plane migration, if the `migrate` phase errored and was retried after the `MachineDeployment`, `MachineSet` and `Machine` objects were deleted, which would result in the Shoot's nodes to be recreated during Control Plane Migration. by @plkokanov [#10696]
- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10708]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.105.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `gardener-resource-manager` does not mark `Deployment`s as progressing when there are still completed `Pod`s in the system. by @timuthy [#10728]
## 🏃 Others

- `[OPERATOR]` Fixed an issue that would cause the entry for the `machine-state` in the `ShootState` to be overwritten with nil data during control plane migration, if the `migrate` phase errored and was retried after the `MachineDeployment`, `MachineSet` and `Machine` objects were deleted, which would result in the Shoot's nodes to be recreated during Control Plane Migration. by @plkokanov [#10696]
- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10708]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.105.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `gardener-resource-manager` does not mark `Deployment`s as progressing when there are still completed `Pod`s in the system. by @timuthy [#10728]
## 🏃 Others

- `[OPERATOR]` Fixed an issue that would cause the entry for the `machine-state` in the `ShootState` to be overwritten with nil data during control plane migration, if the `migrate` phase errored and was retried after the `MachineDeployment`, `MachineSet` and `Machine` objects were deleted, which would result in the Shoot's nodes to be recreated during Control Plane Migration. by @plkokanov [#10696]
- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10708]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.105.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Increase the readiness probe timeout for the `gardener-metrics-exporter` from 1s to 10s. by @vicwicker [#10770]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.105.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Increase the readiness probe timeout for the `gardener-metrics-exporter` from 1s to 10s. by @vicwicker [#10770]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.105.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Increase the readiness probe timeout for the `gardener-metrics-exporter` from 1s to 10s. by @vicwicker [#10770]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.3`


</details>
