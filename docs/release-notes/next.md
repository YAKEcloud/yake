---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.100.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10216]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10251]
- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10283]
## 🏃 Others

- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10203]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.100.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.100.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.100.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.100.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.100.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.100.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.100.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.100.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.100.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.100.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.100.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.100.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.100.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10216]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10251]
- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10283]
## 🏃 Others

- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10203]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.100.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.100.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.100.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.100.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.100.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.100.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.100.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.100.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.100.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.100.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.100.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.100.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.100.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug in the vpa-eviction-requirements controller causing etcds to be evicted for downscaling outside of their maintenance window. by @voelzmo [#10216]
- `[OPERATOR]` `updatecacerts.service` systemd unit on nodes with Debian OS does not fail anymore if `/usr/local/share/ca-certificates` directory is empty. by @ScheererJ [#10251]
- `[OPERATOR]` Valitail is now pinned to v2.2.15 (depends on glibc 2.32) by @nickytd [#10283]
## 🏃 Others

- `[DEVELOPER]` local setup: Registry caches for `eu.gcr.io` and `ghcr.io` are now removed as there are no images from these upstream registries. by @ialidzhikov [#10203]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.100.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.100.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.100.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.100.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.100.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.100.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.100.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.100.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.100.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.100.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.100.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.100.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.100.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which prevented `gardenlet` from creating its own `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource when `selfUpgrade` was set in its Helm chart values ([more information](https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades)). by @rfranzke [#10307]
- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10373]
## 🏃 Others

- `[OPERATOR]` An issue in gardener-node-agent causing registry hosts probe to fail when the `spec.criConfig.containerd.registries.hosts.caCerts` field of OperatingSystemConfig is set is now fixed. by @dimitar-kostadinov [#10381]
- `[OPERATOR]` Kernel setting `net.netfilter.nf_conntrack_max` is only set on nodes by `sysctl.d` if `kube-proxy` is disabled. by @oliver-goetz [#10445]
- `[OPERATOR]` gardener-controller-manager: A corner case issue in the maintenance controller that prevented forceful minor K8s version update from K8s 1.29 to K8s 1.30 is now resolved. by @ialidzhikov [#10440]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.100.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.100.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.100.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.100.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.100.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.100.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.100.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.100.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.100.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.100.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.100.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.100.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.100.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which prevented `gardenlet` from creating its own `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource when `selfUpgrade` was set in its Helm chart values ([more information](https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades)). by @rfranzke [#10307]
- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10373]
## 🏃 Others

- `[OPERATOR]` An issue in gardener-node-agent causing registry hosts probe to fail when the `spec.criConfig.containerd.registries.hosts.caCerts` field of OperatingSystemConfig is set is now fixed. by @dimitar-kostadinov [#10381]
- `[OPERATOR]` Kernel setting `net.netfilter.nf_conntrack_max` is only set on nodes by `sysctl.d` if `kube-proxy` is disabled. by @oliver-goetz [#10445]
- `[OPERATOR]` gardener-controller-manager: A corner case issue in the maintenance controller that prevented forceful minor K8s version update from K8s 1.29 to K8s 1.30 is now resolved. by @ialidzhikov [#10440]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.100.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.100.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.100.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.100.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.100.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.100.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.100.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.100.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.100.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.100.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.100.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.100.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.100.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which prevented `gardenlet` from creating its own `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource when `selfUpgrade` was set in its Helm chart values ([more information](https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades)). by @rfranzke [#10307]
- `[OPERATOR]` An issue causing the vpn-seed-server VPA's to be created with wrong targetRef for highly available Shoots is now fixed. by @ialidzhikov [#10373]
## 🏃 Others

- `[OPERATOR]` An issue in gardener-node-agent causing registry hosts probe to fail when the `spec.criConfig.containerd.registries.hosts.caCerts` field of OperatingSystemConfig is set is now fixed. by @dimitar-kostadinov [#10381]
- `[OPERATOR]` Kernel setting `net.netfilter.nf_conntrack_max` is only set on nodes by `sysctl.d` if `kube-proxy` is disabled. by @oliver-goetz [#10445]
- `[OPERATOR]` gardener-controller-manager: A corner case issue in the maintenance controller that prevented forceful minor K8s version update from K8s 1.29 to K8s 1.30 is now resolved. by @ialidzhikov [#10440]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.100.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.100.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.100.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.100.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.100.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.100.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.100.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.100.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.100.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.100.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.100.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.100.2`


</details>
