---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.85.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `gardener-node-agent` now converts the hostname to lower case to match `kubelet` behaviour when it maintains the `kubernetes.io/hostname` label on `Node`s. by @rfranzke [#8903]
- `[OPERATOR]` `gardener-node-agent` now skips disablement and stop attempts of deleted units in case their unit files have already been cleaned up by third parties. by @rfranzke [#8900]
- `[OPERATOR]` `gardener-node-agent` now creates temporary directories and files under `/var/lib/gardener-node-agent/tmp` instead of `/tmp`. This fixes issues during `OperatingSystemConfig` reconciliation which occur when `/var` and `/tmp` are backed by different file systems or devices. by @rfranzke [#8895]
- `[OPERATOR]` `gardener-node-agent`'s `OperatingSystemConfig` controller now respects the reconciliation timeout and aborts the reconciliation if it takes too long. by @rfranzke [#8908]
- `[DEPENDENCY]` extension library: An issue causing the Worker restore operation to fail for hibernated Shoots is now fixed. by @ialidzhikov [#8949]
## 🏃 Others

- `[DEVELOPER]` Add support for optional `SCRIPT_ROOT` environment var in `vgopath` enabled hack scripts by @afritzler [#8948]
- `[OPERATOR]` `gardener-node-agent` now stops waiting for `systemd` command results if they don't respond back after `10s`. by @rfranzke [#8920]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.1`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.1`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.1`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.1`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.1`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.1`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.1`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.85.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `gardener-node-agent` now converts the hostname to lower case to match `kubelet` behaviour when it maintains the `kubernetes.io/hostname` label on `Node`s. by @rfranzke [#8903]
- `[OPERATOR]` `gardener-node-agent` now skips disablement and stop attempts of deleted units in case their unit files have already been cleaned up by third parties. by @rfranzke [#8900]
- `[OPERATOR]` `gardener-node-agent` now creates temporary directories and files under `/var/lib/gardener-node-agent/tmp` instead of `/tmp`. This fixes issues during `OperatingSystemConfig` reconciliation which occur when `/var` and `/tmp` are backed by different file systems or devices. by @rfranzke [#8895]
- `[OPERATOR]` `gardener-node-agent`'s `OperatingSystemConfig` controller now respects the reconciliation timeout and aborts the reconciliation if it takes too long. by @rfranzke [#8908]
- `[DEPENDENCY]` extension library: An issue causing the Worker restore operation to fail for hibernated Shoots is now fixed. by @ialidzhikov [#8949]
## 🏃 Others

- `[DEVELOPER]` Add support for optional `SCRIPT_ROOT` environment var in `vgopath` enabled hack scripts by @afritzler [#8948]
- `[OPERATOR]` `gardener-node-agent` now stops waiting for `systemd` command results if they don't respond back after `10s`. by @rfranzke [#8920]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.1`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.1`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.1`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.1`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.1`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.1`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.1`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.85.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` `gardener-node-agent` now converts the hostname to lower case to match `kubelet` behaviour when it maintains the `kubernetes.io/hostname` label on `Node`s. by @rfranzke [#8903]
- `[OPERATOR]` `gardener-node-agent` now skips disablement and stop attempts of deleted units in case their unit files have already been cleaned up by third parties. by @rfranzke [#8900]
- `[OPERATOR]` `gardener-node-agent` now creates temporary directories and files under `/var/lib/gardener-node-agent/tmp` instead of `/tmp`. This fixes issues during `OperatingSystemConfig` reconciliation which occur when `/var` and `/tmp` are backed by different file systems or devices. by @rfranzke [#8895]
- `[OPERATOR]` `gardener-node-agent`'s `OperatingSystemConfig` controller now respects the reconciliation timeout and aborts the reconciliation if it takes too long. by @rfranzke [#8908]
- `[DEPENDENCY]` extension library: An issue causing the Worker restore operation to fail for hibernated Shoots is now fixed. by @ialidzhikov [#8949]
## 🏃 Others

- `[DEVELOPER]` Add support for optional `SCRIPT_ROOT` environment var in `vgopath` enabled hack scripts by @afritzler [#8948]
- `[OPERATOR]` `gardener-node-agent` now stops waiting for `systemd` command results if they don't respond back after `10s`. by @rfranzke [#8920]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.1`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.1`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.1`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.1`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.1`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.1`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.1`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.85.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Allow the `dependency-watchdog-prober` to patch "deployments" and "deployments/scale" resources. by @aaronfern [#9043]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.2`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.2`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.2`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.2`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.2`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.2`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.2`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.85.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Allow the `dependency-watchdog-prober` to patch "deployments" and "deployments/scale" resources. by @aaronfern [#9043]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.2`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.2`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.2`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.2`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.2`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.2`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.2`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.85.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Allow the `dependency-watchdog-prober` to patch "deployments" and "deployments/scale" resources. by @aaronfern [#9043]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.2`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.2`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.2`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.2`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.2`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.2`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.2`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.85.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9088]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.3`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.3`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.3`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.3`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.3`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.3`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.3`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.85.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9088]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.3`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.3`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.3`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.3`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.3`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.3`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.3`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.85.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9088]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.3`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.3`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.3`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.3`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.3`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.3`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.3`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.85.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9113]

## Docker Images
- gardener: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/operator:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.85.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.85.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9113]

## Docker Images
- gardener: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/operator:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.85.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.85.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9113]

## Docker Images
- gardener: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/operator:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.4`
- gardener: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.85.4`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.85.4`


</details>
