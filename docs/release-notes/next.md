---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-hcloud to <code>0.6.32</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.32

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.106.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `gardener-resource-manager` does not mark `Deployment`s as progressing when there are still completed `Pod`s in the system. by @timuthy [#10727]
## 🏃 Others

- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10707]
- `[OPERATOR]` Fixed an issue that would cause the entry for the `machine-state` in the `ShootState` to be overwritten with nil data during control plane migration, if the `migrate` phase errored and was retried after the `MachineDeployment`, `MachineSet` and `Machine` objects were deleted, which would result in the Shoot's nodes to be recreated during Control Plane Migration. by @plkokanov [#10695]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.106.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `gardener-resource-manager` does not mark `Deployment`s as progressing when there are still completed `Pod`s in the system. by @timuthy [#10727]
## 🏃 Others

- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10707]
- `[OPERATOR]` Fixed an issue that would cause the entry for the `machine-state` in the `ShootState` to be overwritten with nil data during control plane migration, if the `migrate` phase errored and was retried after the `MachineDeployment`, `MachineSet` and `Machine` objects were deleted, which would result in the Shoot's nodes to be recreated during Control Plane Migration. by @plkokanov [#10695]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.106.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The `gardener-resource-manager` does not mark `Deployment`s as progressing when there are still completed `Pod`s in the system. by @timuthy [#10727]
## 🏃 Others

- `[OPERATOR]` IPv6 support for `node-local-dns`. by @DockToFuture [#10707]
- `[OPERATOR]` Fixed an issue that would cause the entry for the `machine-state` in the `ShootState` to be overwritten with nil data during control plane migration, if the `migrate` phase errored and was retried after the `MachineDeployment`, `MachineSet` and `Machine` objects were deleted, which would result in the Shoot's nodes to be recreated during Control Plane Migration. by @plkokanov [#10695]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.1`


</details>
