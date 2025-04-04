---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.113.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused multi-node etcd clusters to not be properly restored when performing control plane migration for hibernated HA `Shoot`s. by @plkokanov [#11596]
- `[OPERATOR]` Fixed gardenlet crashing when trying to force-delete a workerless shoot by @Wieneo [#11512]
- `[USER]` A bug has been fixed which caused the shoot care controller to falsely remove shoot conditions and constraints from the shoot status by @Wieneo [#11574]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.113.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused multi-node etcd clusters to not be properly restored when performing control plane migration for hibernated HA `Shoot`s. by @plkokanov [#11596]
- `[OPERATOR]` Fixed gardenlet crashing when trying to force-delete a workerless shoot by @Wieneo [#11512]
- `[USER]` A bug has been fixed which caused the shoot care controller to falsely remove shoot conditions and constraints from the shoot status by @Wieneo [#11574]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.113.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused multi-node etcd clusters to not be properly restored when performing control plane migration for hibernated HA `Shoot`s. by @plkokanov [#11596]
- `[OPERATOR]` Fixed gardenlet crashing when trying to force-delete a workerless shoot by @Wieneo [#11512]
- `[USER]` A bug has been fixed which caused the shoot care controller to falsely remove shoot conditions and constraints from the shoot status by @Wieneo [#11574]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.1`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.40.1</code></b></summary>

no release notes available

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.40.1`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.40.1`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.40.1`
## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.40.1`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.40.1`


</details>

<details>
<summary><b>Update provider-hcloud to <code>0.6.33</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.33

**Full Changelog**: https://github.com/23technologies/gardener-extension-provider-hcloud/compare/v0.6.32...v0.6.33

</details>

<details>
<summary><b>Update garden-kube-apiserver to <code>5.1.1</code></b></summary>



</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.113.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed which prevented `Shoot` deletion because of an unavailable `gardener-resource-manager` deployment. by @rfranzke [#11709]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.113.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed which prevented `Shoot` deletion because of an unavailable `gardener-resource-manager` deployment. by @rfranzke [#11709]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.113.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed which prevented `Shoot` deletion because of an unavailable `gardener-resource-manager` deployment. by @rfranzke [#11709]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.113.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The step which deploys the source `BackupEntry` during the `restore` phase of control plane migration now depends on the successful deployment of the `Shoot`'s control plane namespace. This fixes a potential race condition which could cause the `source-etcd-backup` Secret to not be deployed in the `Shoot`'s control plane namespace and the subsequent step which copies etcd backups to time out. by @plkokanov [#11814]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @Kostov6 [#11746]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @Kostov6 [#11745]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.0` to `1.30.2`.  by @Kostov6 [#11753]
- `[DEVELOPER]` An issue causing the `should copy data to pod` VPN tunnel test-machinery integration test to fail is now fixed. by @ialidzhikov [#11806]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.113.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The step which deploys the source `BackupEntry` during the `restore` phase of control plane migration now depends on the successful deployment of the `Shoot`'s control plane namespace. This fixes a potential race condition which could cause the `source-etcd-backup` Secret to not be deployed in the `Shoot`'s control plane namespace and the subsequent step which copies etcd backups to time out. by @plkokanov [#11814]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @Kostov6 [#11746]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @Kostov6 [#11745]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.0` to `1.30.2`.  by @Kostov6 [#11753]
- `[DEVELOPER]` An issue causing the `should copy data to pod` VPN tunnel test-machinery integration test to fail is now fixed. by @ialidzhikov [#11806]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.113.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The step which deploys the source `BackupEntry` during the `restore` phase of control plane migration now depends on the successful deployment of the `Shoot`'s control plane namespace. This fixes a potential race condition which could cause the `source-etcd-backup` Secret to not be deployed in the `Shoot`'s control plane namespace and the subsequent step which copies etcd backups to time out. by @plkokanov [#11814]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @Kostov6 [#11746]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @Kostov6 [#11745]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.0` to `1.30.2`.  by @Kostov6 [#11753]
- `[DEVELOPER]` An issue causing the `should copy data to pod` VPN tunnel test-machinery integration test to fail is now fixed. by @ialidzhikov [#11806]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.3`


</details>
