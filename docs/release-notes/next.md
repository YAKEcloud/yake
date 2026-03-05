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

<details>
<summary><b>Update gardener-controlplane to <code>1.136.2</code></b></summary>

# [github.com/gardener/gardener:v1.136.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug is fixed in the extension scrape configuration in the seed Prometheus, where the scrape address was not correctly configured on IPv4 setups. by @vicwicker [[#14118](https://github.com/gardener/gardener/pull/14118)]
- `[OPERATOR]` Fixed an issue with the maximum batch size that the `OpenTelemetry Collector` instances can send. by @rrhubenov [[#14120](https://github.com/gardener/gardener/pull/14120)]
- `[USER]` An issue which lead to a nil pointer in gardenlet when a Shoot had an empty `.spec.addons` structure defined is now fixed. by @timuthy [[#14123](https://github.com/gardener/gardener/pull/14123)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.136.2</code></b></summary>

# [github.com/gardener/gardener:v1.136.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug is fixed in the extension scrape configuration in the seed Prometheus, where the scrape address was not correctly configured on IPv4 setups. by @vicwicker [[#14118](https://github.com/gardener/gardener/pull/14118)]
- `[OPERATOR]` Fixed an issue with the maximum batch size that the `OpenTelemetry Collector` instances can send. by @rrhubenov [[#14120](https://github.com/gardener/gardener/pull/14120)]
- `[USER]` An issue which lead to a nil pointer in gardenlet when a Shoot had an empty `.spec.addons` structure defined is now fixed. by @timuthy [[#14123](https://github.com/gardener/gardener/pull/14123)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.136.2</code></b></summary>

# [github.com/gardener/gardener:v1.136.2]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug is fixed in the extension scrape configuration in the seed Prometheus, where the scrape address was not correctly configured on IPv4 setups. by @vicwicker [[#14118](https://github.com/gardener/gardener/pull/14118)]
- `[OPERATOR]` Fixed an issue with the maximum batch size that the `OpenTelemetry Collector` instances can send. by @rrhubenov [[#14120](https://github.com/gardener/gardener/pull/14120)]
- `[USER]` An issue which lead to a nil pointer in gardenlet when a Shoot had an empty `.spec.addons` structure defined is now fixed. by @timuthy [[#14123](https://github.com/gardener/gardener/pull/14123)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.2`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.12.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-rsyslog-relp:v0.12.0]

## 📰 Noteworthy
- `[USER]` Rsyslog will send logs when node time has changed by @Kostov6 [[#365](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/365)]

## 🏃 Others
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#377](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/377)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @Franziska-Schallhorn [[#357](https://github.com/gardener/gardener-extension-shoot-rsyslog-relp/pull/357)]

## Helm Charts
- shoot-rsyslog-relp-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-application:v0.12.0`
- shoot-rsyslog-relp-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp-admission-runtime:v0.12.0`
- shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-rsyslog-relp:v0.12.0`
## Container (OCI) Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.12.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.12.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.57.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-cert-service:v1.57.0]

## 🏃 Others
- `[OPERATOR]` Update certificate CRD with additional field `.spec.privateKey.encoding` as introduced with cert-management v0.20.0. by @MartinWeindel [[#514](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/514)]
- `[OPERATOR]` Adjust `controlplane-cert-service` extension when seed uses a DNS provider with `WorkloadIdentity` credentials. by @MartinWeindel [[#511](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/511)]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.57.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.57.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.58.2</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.58.2]

## 🏃 Others
- `[OPERATOR]` Fix premature deletion of the remedy-controller deployment on startup. It will be scaled to 0 by @kon-angelo [[#1465](https://github.com/gardener/gardener-extension-provider-azure/pull/1465)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.58.2`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.58.2`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.58.2`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.58.2`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.58.2`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.77.2</code></b></summary>

# [github.com/gardener/external-dns-management:v0.35.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The `dnsprovider-replication` controller no longer replicates DNSProvider objects that carry a foreign dns.gardener.cloud/class annotation. Previously, such providers were copied to the target cluster and then instantly deleted, leading to avoidable processing. by @MartinWeindel [[#804](https://github.com/gardener/external-dns-management/pull/804)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.77.2`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.77.2`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.77.2`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.77.2`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.77.2`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.24.1</code></b></summary>

## What's Changed
* renovate: request review from ske-gardener team by @timebertt in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/236
* fix: preserve the `kind` of the `Source` in the final `Kustomization` by @daniel-ciaglia in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/238
* fix: transfer `Type` of secret from `Seed` to `Shoot` by @daniel-ciaglia in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/237
* 🤖 Update k8s and gardener packages (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/233

## New Contributors
* @daniel-ciaglia made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/238

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.24.0...v0.24.1

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.0</code></b></summary>

# [github.com/gardener/gardener:v1.137.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `garden_garden_last_operation` metric structure has changed: the `last_operation` label has been renamed to `type`, and a new `state` label has been added to expose the operation state. Existing queries and dashboards using the `last_operation` label must be updated to use `type` instead. Additionally, two new alerts have been introduced: `GardenLastOperationInErrorState` and `GardenLastOperationStuckProcessing`. by @rickardsjp [[#13827](https://github.com/gardener/gardener/pull/13827)]
- `[DEVELOPER]` The `pkg/utils/secrets/manager.New` function's signature has been reworked to accept config functions. Namespaces are now passed via `WithNamespaces(...string)`, automatic CA secret rotation can be disabled via `WithoutCASecretAutoRotation()`, and the map of secret names to "last rotation initiation times" is passed via `WithSecretNamesToTimes(map[string]time.Time)`. Accordingly, `pkg/utils/secrets/manager.Config` has been removed. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]
- `[DEVELOPER]` All Gardener Enhancement Proposals (GEPs) have been moved out of `gardener/gardener` to the new `gardener/enhancements` repository. Read the [Slack thread](https://gardener-cloud.slack.com/archives/CAPMD6DCG/p1770880997465959) to learn more about it. by @rfranzke [[#14043](https://github.com/gardener/gardener/pull/14043)]
- `[DEVELOPER]` When using `ModeService` in the extension webhook library, the specified service port is now properly propagated when constructing the `admissionregistrationv1.WebhookClientConfig` for `{Validating,Mutating}WebhookConfiguration`s (previously, it was not specified at all and defaulted to `443` by Kubernetes). Make sure to specify `--webhook-config-service-port` to prevent falling back to the `--webhook-config-server-port` (if configured). by @rfranzke [[#14063](https://github.com/gardener/gardener/pull/14063)]
- `[DEVELOPER]` The package `github.com/gardener/gardener/pkg/apis` has been made a Go submodule. Validations and helpers from `./pkg/apis` have been moved to `./pkg/api`. The package `pkg/utils/timewindow` has been moved to `pkg/apis/utils/timewindow`. The component configs `./pkg/{admissioncontroller,controllermanager,gardenlet,nodeagent,operator,resourcemanager,scheduler}` have been moved to `./pkg/apis/config/...` and their `helper` and `validation` packages to `./pkg/api/config/...`. Extension developers can use the commands provided in [this Gist](https://gist.github.com/LucaBernstein/a0a4bd39fb1232511ed0b65432fff653) to update the import paths programmatically. by @LucaBernstein [[#13536](https://github.com/gardener/gardener/pull/13536)]

## ✨ New Features
- `[OPERATOR]` A default `.machineControllerManager.machineCreationTimeout` can be provided for a machine type in the `CloudProfile`. by @LucaBernstein [[#14032](https://github.com/gardener/gardener/pull/14032)]
- `[OPERATOR]` Operators can configure workload identity token expiration duration via gardenlet's configuration by setting `.controllers.tokenRequestorWorkloadIdentity.tokenExpirationDuration`. by @dimityrmirchev [[#13752](https://github.com/gardener/gardener/pull/13752)]
- `[OPERATOR]` Feature gate `VictoriaLogsBackend` has been introduced to the `gardenlet` and `gardener-operator`. When enabled, an instance of `VictoriaLogs` is deployed in the respective cluster. by @rrhubenov [[#13988](https://github.com/gardener/gardener/pull/13988)]
- `[OPERATOR]` The "Reversed VPN OpenVPN Server (HA)" dashboard now shows packet loss statistics. by @domdom82 [[#14088](https://github.com/gardener/gardener/pull/14088)]
- `[DEVELOPER]` Secrets Manager: The automatic renewal of `Secret`s about to expire can now be disabled with the config function `WithoutAutomaticSecretRenewal()` passed to `New()`. This is useful if you want to prevent your secrets manager instance from listing all existing `Secret`s in the cluster when instantiated. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]
- `[DEVELOPER]` gardener-node-agent now supports node-specific configuration files, i.e. files which are only applied to a specified node. by @ScheererJ [[#13412](https://github.com/gardener/gardener/pull/13412)]
- `[DEVELOPER]` The secrets manager now allows to load missing signing CA certificate secrets directly from the cluster in case they were not generated upfront. This is helpful when the secrets manager instance generating certificates is not the same managing the signing CA certificate lifecycle. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed the shoot-care controller panic for clusters where `.status.credentials.rotation` exists but `.status.credentials.encryptionAtRest` is nil. by @maboehm [[#14147](https://github.com/gardener/gardener/pull/14147)]
- `[OPERATOR]` Fixed an issue with the maximum batch size that the `OpenTelemetry Collector` instances can send. by @rrhubenov [[#14108](https://github.com/gardener/gardener/pull/14108)]
- `[OPERATOR]` Systemd logs are now collected from seed clusters as expected. by @nickytd [[#14071](https://github.com/gardener/gardener/pull/14071)]
- `[OPERATOR]` Additional finetuning to the `Collector` configuration has been applied for improved memory usage. by @rrhubenov [[#14127](https://github.com/gardener/gardener/pull/14127)]
- `[OPERATOR]` A bug is fixed in the extension scrape configuration in the seed Prometheus, where the scrape address was not correctly configured on IPv4 setups. by @vicwicker [[#14111](https://github.com/gardener/gardener/pull/14111)]
- `[OPERATOR]` An issue causing the control-plane migration to get stuck if the source backup entry deployment was retried is now fixed. by @shafeeqes [[#14091](https://github.com/gardener/gardener/pull/14091)]
- `[USER]` An issue which lead to a nil pointer in gardenlet when a Shoot had an empty `.spec.addons` structure defined is now fixed. by @voelzmo [[#14112](https://github.com/gardener/gardener/pull/14112)]
- `[DEPENDENCY]` extension library: Extension admission webhooks now return `http.StatusForbidden` when validation/mutation fails. With this, the failure reason is now properly displayed when updating the resource with `kubectl edit`. by @dnaeon [[#14026](https://github.com/gardener/gardener/pull/14026)]

## 🏃 Others
- `[OPERATOR]` When L7 load-balancing is active, connections to kube-apiservers have a timeout of 1 day now. by @oliver-goetz [[#14061](https://github.com/gardener/gardener/pull/14061)]
- `[OPERATOR]` All VerticalPodAutoscaler resources managed by Gardener are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @voelzmo [[#14009](https://github.com/gardener/gardener/pull/14009)]
- `[OPERATOR]` Resource limits are dropped from apiserver-proxy to increase shoot connectivity. by @domdom82 [[#14110](https://github.com/gardener/gardener/pull/14110)]
- `[OPERATOR]` fluent-bit is now updated to v4.2.2, fluent-operator to v3.6.0, fluent-bit-plugin to v1.1.0. Small fine-tunings of the logging stack. by @nickytd [[#14093](https://github.com/gardener/gardener/pull/14093)]
- `[DEVELOPER]` `golang-test` images for Go 1.26 are built now. Those for Go 1.24 are not built anymore because it is out of maintenance. by @marc1404 [[#14024](https://github.com/gardener/gardener/pull/14024)]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*`: `v0.34.3` -> `v0.35.0`  
  - `sigs.k8s.io/controller-runtime`: `v0.22.5` -> `v0.23.1`  
  - `sigs.k8s.io/controller-tools`: `v0.19.0` -> `v0.20.0` by @timuthy [[#13982](https://github.com/gardener/gardener/pull/13982)]
- `[DEVELOPER]` New slice functions were added to the `pkg/utils` package that can be used to transform and filter elements. by @timuthy [[#14042](https://github.com/gardener/gardener/pull/14042)]
- `[DEVELOPER]` The message for the recently introduced Prometheus health checks that is part of the status conditions of `Garden`, `Seed` or `Shoot` resources is improved. It provides more detailed information about the failing Prometheus health checks to facilitate troubleshooting. by @vicwicker [[#14006](https://github.com/gardener/gardener/pull/14006)]
- `[DEVELOPER]` `etcd-druid` is now configured with `OperatorConfiguration` instead of the deprecated CLI flags. by @CaptainIRS [[#13674](https://github.com/gardener/gardener/pull/13674)]
- `[DEPENDENCY]` `make format` target supports sequential run (again) by passing `MODE=sequential`. by @LucaBernstein [[#14076](https://github.com/gardener/gardener/pull/14076)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.24` to `v0.8.25`. by @gardener-ci-robot [[#14017](https://github.com/gardener/gardener/pull/14017)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.6.0` to `v1.7.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.7.0) by @gardener-ci-robot [[#14154](https://github.com/gardener/gardener/pull/14154)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v1.35.1` to `v1.35.2`. by @gardener-ci-robot [[#14019](https://github.com/gardener/gardener/pull/14019)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.35.0` to `v0.35.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.35.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.35.0` to `v0.35.1`. by @gardener-ci-robot [[#14146](https://github.com/gardener/gardener/pull/14146)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.46.2` to `0.47.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.47.0) by @gardener-ci-robot [[#14086](https://github.com/gardener/gardener/pull/14086)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. by @gardener-ci-robot [[#14092](https://github.com/gardener/gardener/pull/14092)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.45` to `v7.5.46`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.46) by @gardener-ci-robot [[#14116](https://github.com/gardener/gardener/pull/14116)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.31.0` to `v0.31.1`. by @gardener-ci-robot [[#14038](https://github.com/gardener/gardener/pull/14038)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.30` to `v2.2.31`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.31) by @gardener-ci-robot [[#14115](https://github.com/gardener/gardener/pull/14115)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.6` to `1.27.7`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.6` to `1.27.7`.   
  - `istio.io/api` from `v1.27.6` to `v1.27.7`. by @gardener-ci-robot [[#14080](https://github.com/gardener/gardener/pull/14080)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v1.34.2` to `v1.34.3`. by @gardener-ci-robot [[#14018](https://github.com/gardener/gardener/pull/14018)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.5` to `1.83.6`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.6) by @gardener-ci-robot [[#14124](https://github.com/gardener/gardener/pull/14124)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `open-telemetry/opentelemetry-operator` from `v0.143.0` to `v0.145.0`. [Release Notes](https://redirect.github.com/open-telemetry/opentelemetry-operator/releases/tag/v0.145.0) by @gardener-ci-robot [[#14078](https://github.com/gardener/gardener/pull/14078)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ingress-default-backend` from `0.24.0` to `0.25.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.25.0) by @gardener-ci-robot [[#14099](https://github.com/gardener/gardener/pull/14099)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-iptables` from `3.22.1` to `3.23.3`. [Release Notes](https://redirect.github.com/gardener/alpine-iptables/releases/tag/3.23.3) by @gardener-ci-robot [[#14098](https://github.com/gardener/gardener/pull/14098)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.0</code></b></summary>

# [github.com/gardener/gardener:v1.137.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `garden_garden_last_operation` metric structure has changed: the `last_operation` label has been renamed to `type`, and a new `state` label has been added to expose the operation state. Existing queries and dashboards using the `last_operation` label must be updated to use `type` instead. Additionally, two new alerts have been introduced: `GardenLastOperationInErrorState` and `GardenLastOperationStuckProcessing`. by @rickardsjp [[#13827](https://github.com/gardener/gardener/pull/13827)]
- `[DEVELOPER]` The `pkg/utils/secrets/manager.New` function's signature has been reworked to accept config functions. Namespaces are now passed via `WithNamespaces(...string)`, automatic CA secret rotation can be disabled via `WithoutCASecretAutoRotation()`, and the map of secret names to "last rotation initiation times" is passed via `WithSecretNamesToTimes(map[string]time.Time)`. Accordingly, `pkg/utils/secrets/manager.Config` has been removed. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]
- `[DEVELOPER]` All Gardener Enhancement Proposals (GEPs) have been moved out of `gardener/gardener` to the new `gardener/enhancements` repository. Read the [Slack thread](https://gardener-cloud.slack.com/archives/CAPMD6DCG/p1770880997465959) to learn more about it. by @rfranzke [[#14043](https://github.com/gardener/gardener/pull/14043)]
- `[DEVELOPER]` When using `ModeService` in the extension webhook library, the specified service port is now properly propagated when constructing the `admissionregistrationv1.WebhookClientConfig` for `{Validating,Mutating}WebhookConfiguration`s (previously, it was not specified at all and defaulted to `443` by Kubernetes). Make sure to specify `--webhook-config-service-port` to prevent falling back to the `--webhook-config-server-port` (if configured). by @rfranzke [[#14063](https://github.com/gardener/gardener/pull/14063)]
- `[DEVELOPER]` The package `github.com/gardener/gardener/pkg/apis` has been made a Go submodule. Validations and helpers from `./pkg/apis` have been moved to `./pkg/api`. The package `pkg/utils/timewindow` has been moved to `pkg/apis/utils/timewindow`. The component configs `./pkg/{admissioncontroller,controllermanager,gardenlet,nodeagent,operator,resourcemanager,scheduler}` have been moved to `./pkg/apis/config/...` and their `helper` and `validation` packages to `./pkg/api/config/...`. Extension developers can use the commands provided in [this Gist](https://gist.github.com/LucaBernstein/a0a4bd39fb1232511ed0b65432fff653) to update the import paths programmatically. by @LucaBernstein [[#13536](https://github.com/gardener/gardener/pull/13536)]

## ✨ New Features
- `[OPERATOR]` A default `.machineControllerManager.machineCreationTimeout` can be provided for a machine type in the `CloudProfile`. by @LucaBernstein [[#14032](https://github.com/gardener/gardener/pull/14032)]
- `[OPERATOR]` Operators can configure workload identity token expiration duration via gardenlet's configuration by setting `.controllers.tokenRequestorWorkloadIdentity.tokenExpirationDuration`. by @dimityrmirchev [[#13752](https://github.com/gardener/gardener/pull/13752)]
- `[OPERATOR]` Feature gate `VictoriaLogsBackend` has been introduced to the `gardenlet` and `gardener-operator`. When enabled, an instance of `VictoriaLogs` is deployed in the respective cluster. by @rrhubenov [[#13988](https://github.com/gardener/gardener/pull/13988)]
- `[OPERATOR]` The "Reversed VPN OpenVPN Server (HA)" dashboard now shows packet loss statistics. by @domdom82 [[#14088](https://github.com/gardener/gardener/pull/14088)]
- `[DEVELOPER]` Secrets Manager: The automatic renewal of `Secret`s about to expire can now be disabled with the config function `WithoutAutomaticSecretRenewal()` passed to `New()`. This is useful if you want to prevent your secrets manager instance from listing all existing `Secret`s in the cluster when instantiated. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]
- `[DEVELOPER]` gardener-node-agent now supports node-specific configuration files, i.e. files which are only applied to a specified node. by @ScheererJ [[#13412](https://github.com/gardener/gardener/pull/13412)]
- `[DEVELOPER]` The secrets manager now allows to load missing signing CA certificate secrets directly from the cluster in case they were not generated upfront. This is helpful when the secrets manager instance generating certificates is not the same managing the signing CA certificate lifecycle. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed the shoot-care controller panic for clusters where `.status.credentials.rotation` exists but `.status.credentials.encryptionAtRest` is nil. by @maboehm [[#14147](https://github.com/gardener/gardener/pull/14147)]
- `[OPERATOR]` Fixed an issue with the maximum batch size that the `OpenTelemetry Collector` instances can send. by @rrhubenov [[#14108](https://github.com/gardener/gardener/pull/14108)]
- `[OPERATOR]` Systemd logs are now collected from seed clusters as expected. by @nickytd [[#14071](https://github.com/gardener/gardener/pull/14071)]
- `[OPERATOR]` Additional finetuning to the `Collector` configuration has been applied for improved memory usage. by @rrhubenov [[#14127](https://github.com/gardener/gardener/pull/14127)]
- `[OPERATOR]` A bug is fixed in the extension scrape configuration in the seed Prometheus, where the scrape address was not correctly configured on IPv4 setups. by @vicwicker [[#14111](https://github.com/gardener/gardener/pull/14111)]
- `[OPERATOR]` An issue causing the control-plane migration to get stuck if the source backup entry deployment was retried is now fixed. by @shafeeqes [[#14091](https://github.com/gardener/gardener/pull/14091)]
- `[USER]` An issue which lead to a nil pointer in gardenlet when a Shoot had an empty `.spec.addons` structure defined is now fixed. by @voelzmo [[#14112](https://github.com/gardener/gardener/pull/14112)]
- `[DEPENDENCY]` extension library: Extension admission webhooks now return `http.StatusForbidden` when validation/mutation fails. With this, the failure reason is now properly displayed when updating the resource with `kubectl edit`. by @dnaeon [[#14026](https://github.com/gardener/gardener/pull/14026)]

## 🏃 Others
- `[OPERATOR]` When L7 load-balancing is active, connections to kube-apiservers have a timeout of 1 day now. by @oliver-goetz [[#14061](https://github.com/gardener/gardener/pull/14061)]
- `[OPERATOR]` All VerticalPodAutoscaler resources managed by Gardener are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @voelzmo [[#14009](https://github.com/gardener/gardener/pull/14009)]
- `[OPERATOR]` Resource limits are dropped from apiserver-proxy to increase shoot connectivity. by @domdom82 [[#14110](https://github.com/gardener/gardener/pull/14110)]
- `[OPERATOR]` fluent-bit is now updated to v4.2.2, fluent-operator to v3.6.0, fluent-bit-plugin to v1.1.0. Small fine-tunings of the logging stack. by @nickytd [[#14093](https://github.com/gardener/gardener/pull/14093)]
- `[DEVELOPER]` `golang-test` images for Go 1.26 are built now. Those for Go 1.24 are not built anymore because it is out of maintenance. by @marc1404 [[#14024](https://github.com/gardener/gardener/pull/14024)]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*`: `v0.34.3` -> `v0.35.0`  
  - `sigs.k8s.io/controller-runtime`: `v0.22.5` -> `v0.23.1`  
  - `sigs.k8s.io/controller-tools`: `v0.19.0` -> `v0.20.0` by @timuthy [[#13982](https://github.com/gardener/gardener/pull/13982)]
- `[DEVELOPER]` New slice functions were added to the `pkg/utils` package that can be used to transform and filter elements. by @timuthy [[#14042](https://github.com/gardener/gardener/pull/14042)]
- `[DEVELOPER]` The message for the recently introduced Prometheus health checks that is part of the status conditions of `Garden`, `Seed` or `Shoot` resources is improved. It provides more detailed information about the failing Prometheus health checks to facilitate troubleshooting. by @vicwicker [[#14006](https://github.com/gardener/gardener/pull/14006)]
- `[DEVELOPER]` `etcd-druid` is now configured with `OperatorConfiguration` instead of the deprecated CLI flags. by @CaptainIRS [[#13674](https://github.com/gardener/gardener/pull/13674)]
- `[DEPENDENCY]` `make format` target supports sequential run (again) by passing `MODE=sequential`. by @LucaBernstein [[#14076](https://github.com/gardener/gardener/pull/14076)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.24` to `v0.8.25`. by @gardener-ci-robot [[#14017](https://github.com/gardener/gardener/pull/14017)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.6.0` to `v1.7.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.7.0) by @gardener-ci-robot [[#14154](https://github.com/gardener/gardener/pull/14154)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v1.35.1` to `v1.35.2`. by @gardener-ci-robot [[#14019](https://github.com/gardener/gardener/pull/14019)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.35.0` to `v0.35.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.35.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.35.0` to `v0.35.1`. by @gardener-ci-robot [[#14146](https://github.com/gardener/gardener/pull/14146)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.46.2` to `0.47.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.47.0) by @gardener-ci-robot [[#14086](https://github.com/gardener/gardener/pull/14086)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. by @gardener-ci-robot [[#14092](https://github.com/gardener/gardener/pull/14092)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.45` to `v7.5.46`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.46) by @gardener-ci-robot [[#14116](https://github.com/gardener/gardener/pull/14116)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.31.0` to `v0.31.1`. by @gardener-ci-robot [[#14038](https://github.com/gardener/gardener/pull/14038)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.30` to `v2.2.31`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.31) by @gardener-ci-robot [[#14115](https://github.com/gardener/gardener/pull/14115)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.6` to `1.27.7`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.6` to `1.27.7`.   
  - `istio.io/api` from `v1.27.6` to `v1.27.7`. by @gardener-ci-robot [[#14080](https://github.com/gardener/gardener/pull/14080)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v1.34.2` to `v1.34.3`. by @gardener-ci-robot [[#14018](https://github.com/gardener/gardener/pull/14018)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.5` to `1.83.6`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.6) by @gardener-ci-robot [[#14124](https://github.com/gardener/gardener/pull/14124)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `open-telemetry/opentelemetry-operator` from `v0.143.0` to `v0.145.0`. [Release Notes](https://redirect.github.com/open-telemetry/opentelemetry-operator/releases/tag/v0.145.0) by @gardener-ci-robot [[#14078](https://github.com/gardener/gardener/pull/14078)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ingress-default-backend` from `0.24.0` to `0.25.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.25.0) by @gardener-ci-robot [[#14099](https://github.com/gardener/gardener/pull/14099)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-iptables` from `3.22.1` to `3.23.3`. [Release Notes](https://redirect.github.com/gardener/alpine-iptables/releases/tag/3.23.3) by @gardener-ci-robot [[#14098](https://github.com/gardener/gardener/pull/14098)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.137.0</code></b></summary>

# [github.com/gardener/gardener:v1.137.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `garden_garden_last_operation` metric structure has changed: the `last_operation` label has been renamed to `type`, and a new `state` label has been added to expose the operation state. Existing queries and dashboards using the `last_operation` label must be updated to use `type` instead. Additionally, two new alerts have been introduced: `GardenLastOperationInErrorState` and `GardenLastOperationStuckProcessing`. by @rickardsjp [[#13827](https://github.com/gardener/gardener/pull/13827)]
- `[DEVELOPER]` The `pkg/utils/secrets/manager.New` function's signature has been reworked to accept config functions. Namespaces are now passed via `WithNamespaces(...string)`, automatic CA secret rotation can be disabled via `WithoutCASecretAutoRotation()`, and the map of secret names to "last rotation initiation times" is passed via `WithSecretNamesToTimes(map[string]time.Time)`. Accordingly, `pkg/utils/secrets/manager.Config` has been removed. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]
- `[DEVELOPER]` All Gardener Enhancement Proposals (GEPs) have been moved out of `gardener/gardener` to the new `gardener/enhancements` repository. Read the [Slack thread](https://gardener-cloud.slack.com/archives/CAPMD6DCG/p1770880997465959) to learn more about it. by @rfranzke [[#14043](https://github.com/gardener/gardener/pull/14043)]
- `[DEVELOPER]` When using `ModeService` in the extension webhook library, the specified service port is now properly propagated when constructing the `admissionregistrationv1.WebhookClientConfig` for `{Validating,Mutating}WebhookConfiguration`s (previously, it was not specified at all and defaulted to `443` by Kubernetes). Make sure to specify `--webhook-config-service-port` to prevent falling back to the `--webhook-config-server-port` (if configured). by @rfranzke [[#14063](https://github.com/gardener/gardener/pull/14063)]
- `[DEVELOPER]` The package `github.com/gardener/gardener/pkg/apis` has been made a Go submodule. Validations and helpers from `./pkg/apis` have been moved to `./pkg/api`. The package `pkg/utils/timewindow` has been moved to `pkg/apis/utils/timewindow`. The component configs `./pkg/{admissioncontroller,controllermanager,gardenlet,nodeagent,operator,resourcemanager,scheduler}` have been moved to `./pkg/apis/config/...` and their `helper` and `validation` packages to `./pkg/api/config/...`. Extension developers can use the commands provided in [this Gist](https://gist.github.com/LucaBernstein/a0a4bd39fb1232511ed0b65432fff653) to update the import paths programmatically. by @LucaBernstein [[#13536](https://github.com/gardener/gardener/pull/13536)]

## ✨ New Features
- `[OPERATOR]` A default `.machineControllerManager.machineCreationTimeout` can be provided for a machine type in the `CloudProfile`. by @LucaBernstein [[#14032](https://github.com/gardener/gardener/pull/14032)]
- `[OPERATOR]` Operators can configure workload identity token expiration duration via gardenlet's configuration by setting `.controllers.tokenRequestorWorkloadIdentity.tokenExpirationDuration`. by @dimityrmirchev [[#13752](https://github.com/gardener/gardener/pull/13752)]
- `[OPERATOR]` Feature gate `VictoriaLogsBackend` has been introduced to the `gardenlet` and `gardener-operator`. When enabled, an instance of `VictoriaLogs` is deployed in the respective cluster. by @rrhubenov [[#13988](https://github.com/gardener/gardener/pull/13988)]
- `[OPERATOR]` The "Reversed VPN OpenVPN Server (HA)" dashboard now shows packet loss statistics. by @domdom82 [[#14088](https://github.com/gardener/gardener/pull/14088)]
- `[DEVELOPER]` Secrets Manager: The automatic renewal of `Secret`s about to expire can now be disabled with the config function `WithoutAutomaticSecretRenewal()` passed to `New()`. This is useful if you want to prevent your secrets manager instance from listing all existing `Secret`s in the cluster when instantiated. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]
- `[DEVELOPER]` gardener-node-agent now supports node-specific configuration files, i.e. files which are only applied to a specified node. by @ScheererJ [[#13412](https://github.com/gardener/gardener/pull/13412)]
- `[DEVELOPER]` The secrets manager now allows to load missing signing CA certificate secrets directly from the cluster in case they were not generated upfront. This is helpful when the secrets manager instance generating certificates is not the same managing the signing CA certificate lifecycle. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed the shoot-care controller panic for clusters where `.status.credentials.rotation` exists but `.status.credentials.encryptionAtRest` is nil. by @maboehm [[#14147](https://github.com/gardener/gardener/pull/14147)]
- `[OPERATOR]` Fixed an issue with the maximum batch size that the `OpenTelemetry Collector` instances can send. by @rrhubenov [[#14108](https://github.com/gardener/gardener/pull/14108)]
- `[OPERATOR]` Systemd logs are now collected from seed clusters as expected. by @nickytd [[#14071](https://github.com/gardener/gardener/pull/14071)]
- `[OPERATOR]` Additional finetuning to the `Collector` configuration has been applied for improved memory usage. by @rrhubenov [[#14127](https://github.com/gardener/gardener/pull/14127)]
- `[OPERATOR]` A bug is fixed in the extension scrape configuration in the seed Prometheus, where the scrape address was not correctly configured on IPv4 setups. by @vicwicker [[#14111](https://github.com/gardener/gardener/pull/14111)]
- `[OPERATOR]` An issue causing the control-plane migration to get stuck if the source backup entry deployment was retried is now fixed. by @shafeeqes [[#14091](https://github.com/gardener/gardener/pull/14091)]
- `[USER]` An issue which lead to a nil pointer in gardenlet when a Shoot had an empty `.spec.addons` structure defined is now fixed. by @voelzmo [[#14112](https://github.com/gardener/gardener/pull/14112)]
- `[DEPENDENCY]` extension library: Extension admission webhooks now return `http.StatusForbidden` when validation/mutation fails. With this, the failure reason is now properly displayed when updating the resource with `kubectl edit`. by @dnaeon [[#14026](https://github.com/gardener/gardener/pull/14026)]

## 🏃 Others
- `[OPERATOR]` When L7 load-balancing is active, connections to kube-apiservers have a timeout of 1 day now. by @oliver-goetz [[#14061](https://github.com/gardener/gardener/pull/14061)]
- `[OPERATOR]` All VerticalPodAutoscaler resources managed by Gardener are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @voelzmo [[#14009](https://github.com/gardener/gardener/pull/14009)]
- `[OPERATOR]` Resource limits are dropped from apiserver-proxy to increase shoot connectivity. by @domdom82 [[#14110](https://github.com/gardener/gardener/pull/14110)]
- `[OPERATOR]` fluent-bit is now updated to v4.2.2, fluent-operator to v3.6.0, fluent-bit-plugin to v1.1.0. Small fine-tunings of the logging stack. by @nickytd [[#14093](https://github.com/gardener/gardener/pull/14093)]
- `[DEVELOPER]` `golang-test` images for Go 1.26 are built now. Those for Go 1.24 are not built anymore because it is out of maintenance. by @marc1404 [[#14024](https://github.com/gardener/gardener/pull/14024)]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*`: `v0.34.3` -> `v0.35.0`  
  - `sigs.k8s.io/controller-runtime`: `v0.22.5` -> `v0.23.1`  
  - `sigs.k8s.io/controller-tools`: `v0.19.0` -> `v0.20.0` by @timuthy [[#13982](https://github.com/gardener/gardener/pull/13982)]
- `[DEVELOPER]` New slice functions were added to the `pkg/utils` package that can be used to transform and filter elements. by @timuthy [[#14042](https://github.com/gardener/gardener/pull/14042)]
- `[DEVELOPER]` The message for the recently introduced Prometheus health checks that is part of the status conditions of `Garden`, `Seed` or `Shoot` resources is improved. It provides more detailed information about the failing Prometheus health checks to facilitate troubleshooting. by @vicwicker [[#14006](https://github.com/gardener/gardener/pull/14006)]
- `[DEVELOPER]` `etcd-druid` is now configured with `OperatorConfiguration` instead of the deprecated CLI flags. by @CaptainIRS [[#13674](https://github.com/gardener/gardener/pull/13674)]
- `[DEPENDENCY]` `make format` target supports sequential run (again) by passing `MODE=sequential`. by @LucaBernstein [[#14076](https://github.com/gardener/gardener/pull/14076)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.24` to `v0.8.25`. by @gardener-ci-robot [[#14017](https://github.com/gardener/gardener/pull/14017)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.6.0` to `v1.7.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.7.0) by @gardener-ci-robot [[#14154](https://github.com/gardener/gardener/pull/14154)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v1.35.1` to `v1.35.2`. by @gardener-ci-robot [[#14019](https://github.com/gardener/gardener/pull/14019)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.35.0` to `v0.35.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.35.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.35.0` to `v0.35.1`. by @gardener-ci-robot [[#14146](https://github.com/gardener/gardener/pull/14146)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.46.2` to `0.47.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.47.0) by @gardener-ci-robot [[#14086](https://github.com/gardener/gardener/pull/14086)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. by @gardener-ci-robot [[#14092](https://github.com/gardener/gardener/pull/14092)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.45` to `v7.5.46`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.46) by @gardener-ci-robot [[#14116](https://github.com/gardener/gardener/pull/14116)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.31.0` to `v0.31.1`. by @gardener-ci-robot [[#14038](https://github.com/gardener/gardener/pull/14038)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.30` to `v2.2.31`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.31) by @gardener-ci-robot [[#14115](https://github.com/gardener/gardener/pull/14115)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.6` to `1.27.7`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.6` to `1.27.7`.   
  - `istio.io/api` from `v1.27.6` to `v1.27.7`. by @gardener-ci-robot [[#14080](https://github.com/gardener/gardener/pull/14080)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v1.34.2` to `v1.34.3`. by @gardener-ci-robot [[#14018](https://github.com/gardener/gardener/pull/14018)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.5` to `1.83.6`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.6) by @gardener-ci-robot [[#14124](https://github.com/gardener/gardener/pull/14124)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `open-telemetry/opentelemetry-operator` from `v0.143.0` to `v0.145.0`. [Release Notes](https://redirect.github.com/open-telemetry/opentelemetry-operator/releases/tag/v0.145.0) by @gardener-ci-robot [[#14078](https://github.com/gardener/gardener/pull/14078)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ingress-default-backend` from `0.24.0` to `0.25.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.25.0) by @gardener-ci-robot [[#14099](https://github.com/gardener/gardener/pull/14099)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-iptables` from `3.22.1` to `3.23.3`. [Release Notes](https://redirect.github.com/gardener/alpine-iptables/releases/tag/3.23.3) by @gardener-ci-robot [[#14098](https://github.com/gardener/gardener/pull/14098)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.36.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.36.0]

## ✨ New Features
- `[OPERATOR]` Support Trust Based Authentication by `WorkloadIdentity` secrets for AWS Route53, Azure DNS, Azure Private DNS and Google Cloud DNS by @MartinWeindel [[#775](https://github.com/gardener/external-dns-management/pull/775)]

## 🏃 Others
- `[OPERATOR]` Fix race condition if only one of two expected gateway CRDs (either from group  `gateway.networking.k8s.io` or `networking.istio.io`) is deployed causing endless restarts. by @MartinWeindel [[#790](https://github.com/gardener/external-dns-management/pull/790)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.36.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.36.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.36.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.1</code></b></summary>

# [github.com/gardener/gardener:v1.137.1]

## 🏃 Others
- `[OPERATOR]` A regression in Gardener Node Agent that can occur on Debian based OS images and that prevents it to successfully reconcile nodes that run a containerd version that contains - according to semver - invalid characters in its version number was fixed. by @MrBatschner [[#14188](https://github.com/gardener/gardener/pull/14188)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.1</code></b></summary>

# [github.com/gardener/gardener:v1.137.1]

## 🏃 Others
- `[OPERATOR]` A regression in Gardener Node Agent that can occur on Debian based OS images and that prevents it to successfully reconcile nodes that run a containerd version that contains - according to semver - invalid characters in its version number was fixed. by @MrBatschner [[#14188](https://github.com/gardener/gardener/pull/14188)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.137.1</code></b></summary>

# [github.com/gardener/gardener:v1.137.1]

## 🏃 Others
- `[OPERATOR]` A regression in Gardener Node Agent that can occur on Debian based OS images and that prevents it to successfully reconcile nodes that run a containerd version that contains - according to semver - invalid characters in its version number was fixed. by @MrBatschner [[#14188](https://github.com/gardener/gardener/pull/14188)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.1`


</details>

<details>
<summary><b>Update networking-calico to <code>1.57.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-calico:v1.57.0]

## 🏃 Others
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#786](https://github.com/gardener/gardener-extension-networking-calico/pull/786)]
- `[OPERATOR]` Hard resource limits have been removed. Resources will be managed by various available autoscalers. by @domdom82 [[#792](https://github.com/gardener/gardener-extension-networking-calico/pull/792)]
- `[OPERATOR]` Added validation to restrict calico-ipam to IPv4 single-stack shoots only by @axel7born [[#796](https://github.com/gardener/gardener-extension-networking-calico/pull/796)]
- `[OPERATOR]` A bug has been resolved that prevented the correct configuration of the default IP Pool for IPv6. by @axel7born [[#795](https://github.com/gardener/gardener-extension-networking-calico/pull/795)]
- `[OPERATOR]` Added `SeamlessOverlaySwitch` feature gate (alpha) to prevent network disruption when switching Calico from overlay (IPIP) to non-overlay mode. When enabled, the extension validates that cloud provider routes are created on all nodes before disabling overlay networking, ensuring zero-downtime network transitions. The feature gate is disabled by default and can be enabled via the controller configuration. by @DockToFuture [[#779](https://github.com/gardener/gardener-extension-networking-calico/pull/779)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.57.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.57.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.57.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.57.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.57.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.57.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.68.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.68.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Remove terraformer reconciler for infrastructure resources by @kon-angelo [[#1617](https://github.com/gardener/gardener-extension-provider-aws/pull/1617)]
- `[DEVELOPER]` The `PLATFORM` makefile variable has been replaced by `TARGET_PLATFORM`. by @wpross [[#1693](https://github.com/gardener/gardener-extension-provider-aws/pull/1693)]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.35. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) before upgrading to 1.35. by @rfranzke [[#1677](https://github.com/gardener/gardener-extension-provider-aws/pull/1677)]
- `[DEVELOPER]` Gardener extension provider-aws container images now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @wpross [[#1693](https://github.com/gardener/gardener-extension-provider-aws/pull/1693)]

## 🐛 Bug Fixes
- `[OPERATOR]` The cloud-controller-manager image used for `Shoot` clusters running on kubernetes `1.31` was downgraded from `v1.31.9` to `v1.31.8`. This was done to resolve an issue that caused reconciliations of `Service`s of type LoadBalancer to fail because of attempts to add already existing `IpPermission` rules to the security groups created for the LoadBalancers. by @plkokanov [[#1671](https://github.com/gardener/gardener-extension-provider-aws/pull/1671)]
- `[OPERATOR]` Fixed missing create `event` permissions in runtime cluster when publishing "became leader" event by @axel7born [[#1695](https://github.com/gardener/gardener-extension-provider-aws/pull/1695)]
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @axel7born [[#1695](https://github.com/gardener/gardener-extension-provider-aws/pull/1695)]
- `[OPERATOR]` Add check for non-empty IPv6 CIDR block before updating state by @hebelsan [[#1683](https://github.com/gardener/gardener-extension-provider-aws/pull/1683)]

## 🏃 Others
- `[OPERATOR]` Allow to use one secret as an infrastructure secret as well as a dns secret. by @wpross [[#1689](https://github.com/gardener/gardener-extension-provider-aws/pull/1689)]
- `[OPERATOR]` Disallow deletion of duplicated zones in infraConfig section by @hebelsan [[#1475](https://github.com/gardener/gardener-extension-provider-aws/pull/1475)]
- `[OPERATOR]` Update `aws-custom-route-controller` image to `v0.15.0`. by @DockToFuture [[#1669](https://github.com/gardener/gardener-extension-provider-aws/pull/1669)]
- `[OPERATOR]` Add support for AMD SEV-SNP in CPU options by @hebelsan [[#1642](https://github.com/gardener/gardener-extension-provider-aws/pull/1642)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#1690](https://github.com/gardener/gardener-extension-provider-aws/pull/1690)]
- `[OPERATOR]` Prevent Calico from setting the `NetworkUnavailable` condition on nodes when overlay networking gets disabled, and ensures cleanup of existing Calico-set conditions. by @DockToFuture [[#1703](https://github.com/gardener/gardener-extension-provider-aws/pull/1703)]
- `[OPERATOR]` Fix cleanup logic when shoot is going to hibernation or waking up. by @DockToFuture [[#1714](https://github.com/gardener/gardener-extension-provider-aws/pull/1714)]
- `[OPERATOR]` Add permissions to set network unavailable condition. by @DockToFuture [[#1665](https://github.com/gardener/gardener-extension-provider-aws/pull/1665)]
- `[OPERATOR]` AWS secret validation now allows mixing standard (e.g., `accessKeyID`) and DNS-specific keys (e.g., `AWS_SECRET_ACCESS_KEY`) within the same secret, but prevents duplicate keys for the same field (e.g., both `accessKeyID` and `AWS_ACCESS_KEY_ID`). by @wpross [[#1667](https://github.com/gardener/gardener-extension-provider-aws/pull/1667)]
- `[OPERATOR]` Allow `aws-custom-route-controller` to write events of group `events.k8s.io` by @MartinWeindel [[#1651](https://github.com/gardener/gardener-extension-provider-aws/pull/1651)]
- `[OPERATOR]` Add missing s3 policy partition for EUSC region by @kon-angelo [[#1663](https://github.com/gardener/gardener-extension-provider-aws/pull/1663)]
- `[OPERATOR]` Update AWS Load Balancer Controller from `v2.17.1` to `v3.0.0`. by @wpross [[#1707](https://github.com/gardener/gardener-extension-provider-aws/pull/1707)]
- `[OPERATOR]` Fix an issue that would prevent cluster-autoscaler from considering `VolumeAttributesClasses` for scaling on shoot `< v1.34` by @matthias-horne [[#1666](https://github.com/gardener/gardener-extension-provider-aws/pull/1666)]
- `[OPERATOR]` Enhance VPC validation by checking subnet CIDRs against VPC CIDR by @hebelsan [[#1662](https://github.com/gardener/gardener-extension-provider-aws/pull/1662)]
- `[OPERATOR]` Improved opt-in mechanism for dual-stack to avoid automatic load balancer recreation in dual-stack clusters by @axel7born [[#1696](https://github.com/gardener/gardener-extension-provider-aws/pull/1696)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.31.8 -> v1.31.9 (patch)  
    - csi-driver: v1.54.0 -> v1.55.0 (singleton)  
    - csi-driver-efs: v2.2.0 -> v2.3.0 (singleton)  
    - csi-volume-modifier: v0.9.1 -> v0.9.2 (singleton) by @gardener-github-actions[bot] [[#1648](https://github.com/gardener/gardener-extension-provider-aws/pull/1648)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-attacher: v4.10.0 -> v4.11.0 (singleton)  
    - csi-driver: v1.55.0 -> v1.56.0 (singleton)  
    - csi-liveness-probe: v2.17.0 -> v2.18.0 (singleton)  
    - csi-node-driver-registrar: v2.15.0 -> v2.16.0 (singleton)  
    - csi-provisioner: v6.1.0 -> v6.1.1 (patch)  
    - csi-resizer: v2.0.0 -> v2.1.0 (minor)  
    - csi-snapshot-controller: v8.4.0 -> v8.5.0 (singleton)  
    - csi-snapshotter: v8.4.0 -> v8.5.0 (singleton) by @gardener-github-actions[bot] [[#1692](https://github.com/gardener/gardener-extension-provider-aws/pull/1692)]
- `[DEPENDENCY]` The following container images have been updated:  
    - machine-controller-manager-provider-aws: v0.27.1 -> v0.27.2 (singleton) by @takoverflow [[#1704](https://github.com/gardener/gardener-extension-provider-aws/pull/1704)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.68.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.68.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.68.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.68.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.68.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.7</code></b></summary>

# [github.com/gardener/dashboard:1.83.7]

## ✨ New Features
- `[USER]` Change CredentialsBinding  
  - It is now possible to change the referenced CredentialsBinding on the cluster details page  
  - Clusters that still use a SecretBinding can now be migrated to a CredentialsBinding on the cluster details page by @grolu [[#2810](https://github.com/gardener/dashboard/pull/2810)]
- `[USER]` Create CredentialsBindings for deprecated SecretBindings  
  - For SecretBindings a migration dialog is available to create a new CredentialsBinding on the credentials page  
  - If a CredentialsBinding exists, the dialog shows migration information for clusters that still use the deprecated SecretBinding  
  - Ensure defaulting prefers CredentialsBindings over SecretBindings when creating new clusters by @grolu [[#2810](https://github.com/gardener/dashboard/pull/2810)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.7`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.7</code></b></summary>

# [github.com/gardener/dashboard:1.83.7]

## ✨ New Features
- `[USER]` Change CredentialsBinding  
  - It is now possible to change the referenced CredentialsBinding on the cluster details page  
  - Clusters that still use a SecretBinding can now be migrated to a CredentialsBinding on the cluster details page by @grolu [[#2810](https://github.com/gardener/dashboard/pull/2810)]
- `[USER]` Create CredentialsBindings for deprecated SecretBindings  
  - For SecretBindings a migration dialog is available to create a new CredentialsBinding on the credentials page  
  - If a CredentialsBinding exists, the dialog shows migration information for clusters that still use the deprecated SecretBinding  
  - Ensure defaulting prefers CredentialsBindings over SecretBindings when creating new clusters by @grolu [[#2810](https://github.com/gardener/dashboard/pull/2810)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.7`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.68.3</code></b></summary>

# [github.com/gardener/gardener-extension-provider-alicloud:v1.68.3]

## 🏃 Others
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @kevin-lacoo [[#883](https://github.com/gardener/gardener-extension-provider-alicloud/pull/883)]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.68.3`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.68.3`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.68.3`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.68.3`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.68.3`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.36.1</code></b></summary>

# [github.com/gardener/external-dns-management:v0.36.1]

## 🐛 Bug Fixes
- `[OPERATOR]` The `dnsprovider-replication` controller no longer replicates DNSProvider objects that carry a foreign dns.gardener.cloud/class annotation. Previously, such providers were copied to the target cluster and then instantly deleted, leading to avoidable processing. by @MartinWeindel [[#812](https://github.com/gardener/external-dns-management/pull/812)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.36.1`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.36.1`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.36.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.2</code></b></summary>



## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.2</code></b></summary>



## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.137.2</code></b></summary>



## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.2`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.8</code></b></summary>

# [github.com/gardener/dashboard:1.83.8]

## 🐛 Bug Fixes
- `[OPERATOR]` Bumps the `qs` dependency from `6.14.0` to `6.14.2` to address [CVE-2026-2391](https://nvd.nist.gov/vuln/detail/CVE-2026-2391) / [GHSA-w7fw-mjwx-w883](https://github.com/advisories/GHSA-w7fw-mjwx-w883). by @petersutter [[#2817](https://github.com/gardener/dashboard/pull/2817)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.8`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.8</code></b></summary>

# [github.com/gardener/dashboard:1.83.8]

## 🐛 Bug Fixes
- `[OPERATOR]` Bumps the `qs` dependency from `6.14.0` to `6.14.2` to address [CVE-2026-2391](https://nvd.nist.gov/vuln/detail/CVE-2026-2391) / [GHSA-w7fw-mjwx-w883](https://github.com/advisories/GHSA-w7fw-mjwx-w883). by @petersutter [[#2817](https://github.com/gardener/dashboard/pull/2817)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.8`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.3</code></b></summary>

# [github.com/gardener/gardener:v1.137.3]

## 🐛 Bug Fixes
- `[OPERATOR]` An issues has been fixed causing `gardener-resource-manager` crash loops in large clusters. by @timuthy [[#14214](https://github.com/gardener/gardener/pull/14214)]
- `[OPERATOR]` Add a network policy label for allowing communication from the OpenTelemetryCollector in the control plane to the Shoot Kubernetes API Server. by @rrhubenov [[#14221](https://github.com/gardener/gardener/pull/14221)]

## 🏃 Others
- `[OPERATOR]` Fluent-bit resource limits are increased. by @nickytd [[#14211](https://github.com/gardener/gardener/pull/14211)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.3</code></b></summary>

# [github.com/gardener/gardener:v1.137.3]

## 🐛 Bug Fixes
- `[OPERATOR]` An issues has been fixed causing `gardener-resource-manager` crash loops in large clusters. by @timuthy [[#14214](https://github.com/gardener/gardener/pull/14214)]
- `[OPERATOR]` Add a network policy label for allowing communication from the OpenTelemetryCollector in the control plane to the Shoot Kubernetes API Server. by @rrhubenov [[#14221](https://github.com/gardener/gardener/pull/14221)]

## 🏃 Others
- `[OPERATOR]` Fluent-bit resource limits are increased. by @nickytd [[#14211](https://github.com/gardener/gardener/pull/14211)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.137.3</code></b></summary>

# [github.com/gardener/gardener:v1.137.3]

## 🐛 Bug Fixes
- `[OPERATOR]` An issues has been fixed causing `gardener-resource-manager` crash loops in large clusters. by @timuthy [[#14214](https://github.com/gardener/gardener/pull/14214)]
- `[OPERATOR]` Add a network policy label for allowing communication from the OpenTelemetryCollector in the control plane to the Shoot Kubernetes API Server. by @rrhubenov [[#14221](https://github.com/gardener/gardener/pull/14221)]

## 🏃 Others
- `[OPERATOR]` Fluent-bit resource limits are increased. by @nickytd [[#14211](https://github.com/gardener/gardener/pull/14211)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.3`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.3`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.78.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.78.0]

## ✨ New Features
- `[USER]` Support Trust Based Authentication by `WorkloadIdentity` for AWS Route53, Azure DNS, Azure Private DNS and Google Cloud DNS providers. by @MartinWeindel [[#663](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/663)]

## 🏃 Others
- `[OPERATOR]` Add seed label `service.dns.extensions.gardener.cloud/use-next-generation-controller` to control usage of next-generation controller. by @MartinWeindel [[#643](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/643)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#647](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/647)]
- `[OPERATOR]` Allow to configure the maximum QPS and burst to the apiserver for the `dns-controller-manager` with values `dnsControllerManager.configuration.kubeconfigBurst` and `dnsControllerManager.configuration.kubeconfigQPS` . by @MartinWeindel [[#664](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/664)]
- `[USER]` Classified "overlapping zones" as a non-retriable configuration error. by @acumino [[#653](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/653)]

# [github.com/gardener/external-dns-management:v0.36.1]

## 🐛 Bug Fixes
- `[OPERATOR]` The `dnsprovider-replication` controller no longer replicates DNSProvider objects that carry a foreign dns.gardener.cloud/class annotation. Previously, such providers were copied to the target cluster and then instantly deleted, leading to avoidable processing. by @MartinWeindel [[#812](https://github.com/gardener/external-dns-management/pull/812)]

# [github.com/gardener/external-dns-management:v0.36.0]

## ✨ New Features
- `[OPERATOR]` Support Trust Based Authentication by `WorkloadIdentity` secrets for AWS Route53, Azure DNS, Azure Private DNS and Google Cloud DNS by @MartinWeindel [[#775](https://github.com/gardener/external-dns-management/pull/775)]

## 🏃 Others
- `[OPERATOR]` Fix race condition if only one of two expected gateway CRDs (either from group  `gateway.networking.k8s.io` or `networking.istio.io`) is deployed causing endless restarts. by @MartinWeindel [[#790](https://github.com/gardener/external-dns-management/pull/790)]

# [github.com/gardener/external-dns-management:v0.35.1]

## 🏃 Others
- `[OPERATOR]` Fix race condition if only one of two expected gateway CRDs (either from group  `gateway.networking.k8s.io` or `networking.istio.io`) is deployed causing endless restarts. (#790) by @Martin Weindel [[gardener/external-dns-management@30134a717b07f5d2ec7c706fe2b3d938be564cde](https://github.com/gardener/external-dns-management/commit/30134a717b07f5d2ec7c706fe2b3d938be564cde)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.78.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.78.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.78.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.78.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.78.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.4</code></b></summary>

# [github.com/gardener/gardener:v1.137.4]

## 🏃 Others
- `[OPERATOR]` Add startup probe to gardener-metrics-exporter by @chrkl [[#14227](https://github.com/gardener/gardener/pull/14227)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.7` to `1.83.8`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.8) by @gardener-ci-robot [[#14230](https://github.com/gardener/gardener/pull/14230)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.137.4</code></b></summary>

# [github.com/gardener/gardener:v1.137.4]

## 🏃 Others
- `[OPERATOR]` Add startup probe to gardener-metrics-exporter by @chrkl [[#14227](https://github.com/gardener/gardener/pull/14227)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.7` to `1.83.8`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.8) by @gardener-ci-robot [[#14230](https://github.com/gardener/gardener/pull/14230)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.137.4</code></b></summary>

# [github.com/gardener/gardener:v1.137.4]

## 🏃 Others
- `[OPERATOR]` Add startup probe to gardener-metrics-exporter by @chrkl [[#14227](https://github.com/gardener/gardener/pull/14227)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.7` to `1.83.8`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.8) by @gardener-ci-robot [[#14230](https://github.com/gardener/gardener/pull/14230)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.4`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.4`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.49.4</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.49.4]

## 🏃 Others
- `[OPERATOR]` Upgrade ingress-default-backend:0.24.0 -> 0.25.0 by @gardener-ci-robot [[#1341](https://github.com/gardener/gardener-extension-provider-gcp/pull/1341)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.49.4`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.49.4`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.49.4`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.49.4`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.49.4`


</details>
