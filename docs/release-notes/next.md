---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update os-gardenlinux to <code>0.36.0</code></b></summary>



## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.36.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.36.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.36.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-ubuntu:v1.36.0]

## 📰 Noteworthy
- `[DEVELOPER]` Some failing tests that were previously not caught by the CI were fixed, missing license header were added and the CI workflow description was fixed to catch such errors in the future. by @MrBatschner [[#283](https://github.com/gardener/gardener-extension-os-ubuntu/pull/283)]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.36.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.36.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.29.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.29.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260126.0. by @gardener-github-actions[bot] [[#346](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/346)]
- `[OPERATOR]` Updated gVisor binaries to 20260209.1. by @gardener-github-actions[bot] [[#359](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/359)]
- `[OPERATOR]` Updated gVisor binaries to 20260202.0. by @gardener-github-actions[bot] [[#355](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/355)]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.29.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.29.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.29.0`


</details>

<details>
<summary><b>Update os-coreos to <code>1.28.0</code></b></summary>



## Helm Charts
- os-coreos: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-coreos:v1.28.0`
## Container (OCI) Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.28.0`


</details>

<details>
<summary><b>Update registry-cache to <code>0.20.0</code></b></summary>

# [github.com/gardener/gardener-extension-registry-cache:v0.20.0]

## 🏃 Others
- `[OPERATOR]` Add missing `securityContext` fields to the registry-cache extension components in order to comply with the `restricted` Pod Security Standards policy. by @mstueer [[#473](https://github.com/gardener/gardener-extension-registry-cache/pull/473)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#531](https://github.com/gardener/gardener-extension-registry-cache/pull/531)]
- `[OPERATOR]` The registry image is now referred by digest instead of tag. The upstream image `docker.io/library/registry` (and later on `europe-docker.pkg.dev/gardener-project/releases/3rd/registry`) is (by design) rebuilt frequently. by @ialidzhikov [[#523](https://github.com/gardener/gardener-extension-registry-cache/pull/523)]
- `[DEVELOPER]` The base image of registry-cache components is updated to `gcr.io/distroless/static-debian13:nonroot`. by @ialidzhikov [[#505](https://github.com/gardener/gardener-extension-registry-cache/pull/505)]

## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.20.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.20.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.20.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.20.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.20.0`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.32.0</code></b></summary>



## Helm Charts
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.32.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.32.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.136.1</code></b></summary>

# [github.com/gardener/gardener:v1.136.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the control-plane migration to get stuck if the source backup entry deployment was retried is now fixed. by @shafeeqes [[#14097](https://github.com/gardener/gardener/pull/14097)]

## 🏃 Others
- `[DEPENDENCY]` `make format` target supports sequential run (again) by passing `MODE=sequential`. by @LucaBernstein [[#14084](https://github.com/gardener/gardener/pull/14084)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. by @ary1992 [[#14095](https://github.com/gardener/gardener/pull/14095)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.136.1</code></b></summary>

# [github.com/gardener/gardener:v1.136.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the control-plane migration to get stuck if the source backup entry deployment was retried is now fixed. by @shafeeqes [[#14097](https://github.com/gardener/gardener/pull/14097)]

## 🏃 Others
- `[DEPENDENCY]` `make format` target supports sequential run (again) by passing `MODE=sequential`. by @LucaBernstein [[#14084](https://github.com/gardener/gardener/pull/14084)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. by @ary1992 [[#14095](https://github.com/gardener/gardener/pull/14095)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.136.1</code></b></summary>

# [github.com/gardener/gardener:v1.136.1]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the control-plane migration to get stuck if the source backup entry deployment was retried is now fixed. by @shafeeqes [[#14097](https://github.com/gardener/gardener/pull/14097)]

## 🏃 Others
- `[DEPENDENCY]` `make format` target supports sequential run (again) by passing `MODE=sequential`. by @LucaBernstein [[#14084](https://github.com/gardener/gardener/pull/14084)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. by @ary1992 [[#14095](https://github.com/gardener/gardener/pull/14095)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.1`


</details>

<details>
<summary><b>Update provider-aws to <code>1.67.4</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.67.4]

## 🏃 Others
- `[DEPENDENCY]` The following container images have been updated:  
    - machine-controller-manager-provider-aws: v0.27.1 -> v0.27.2 (singleton) by @wpross [[#1705](https://github.com/gardener/gardener-extension-provider-aws/pull/1705)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.67.4`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.67.4`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.67.4`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.67.4`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.67.4`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.6</code></b></summary>

# [github.com/gardener/dashboard:1.83.6]

## 🏃 Others
- `[DEPENDENCY]` Updated dependency undici to v7.22.0 by @grolu [[#2789](https://github.com/gardener/dashboard/pull/2789)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.6`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.6</code></b></summary>

# [github.com/gardener/dashboard:1.83.6]

## 🏃 Others
- `[DEPENDENCY]` Updated dependency undici to v7.22.0 by @grolu [[#2789](https://github.com/gardener/dashboard/pull/2789)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.6`


</details>
