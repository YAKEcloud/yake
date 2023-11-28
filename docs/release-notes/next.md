---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.2.2</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🏃 Others

- `[OPERATOR]` The following images are updated:  
  - `eu.gcr.io/gardener-project/3rd/alpine`: 3.15.8 -> 3.18.4  
  - `registry.k8s.io/pause`: 3.7 -> 3.9 by @plkokanov [#36]
- `[OPERATOR]` Vulnerability scans are disabled for the alpine image as the corresponding container is not accessible from outside of the k8s clusters and not interacted with from other containers or other systems. by @plkokanov [#36]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `eu.gcr.io/gardener-project/gardener/extensions/shoot-rsyslog-relp-admission:v0.2.2`
- gardener-extension-shoot-rsyslog-relp: `eu.gcr.io/gardener-project/gardener/extensions/shoot-rsyslog-relp:v0.2.2`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.31.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## 🐛 Bug Fixes

- `[OPERATOR]` The `actuator.Delete` doesn't wait for ManagedResources to get deleted in case of `ForceDelete`. by @shafeeqes [#227]
- `[OPERATOR]` An issue in the charts missing versions for some resources is now fixed. by @shafeeqes [#225]
- `[OPERATOR]` Fixes an error that occurs when running with iptables-nft. by @axel7born [#229]
## 🏃 Others

- `[OPERATOR]` Reconciliation of hibernated cilium clusters now works again. by @ScheererJ [#226]

## Docker Images
- gardener-extension-admission-cilium: `eu.gcr.io/gardener-project/gardener/extensions/admission-cilium:v1.31.0`
- gardener-extension-networking-cilium: `eu.gcr.io/gardener-project/gardener/extensions/networking-cilium:v1.31.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.39.3</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug which caused an empty `vmType` under certain conditions has been fixed. Empty `vmType`s prevent load balancers from being deleted on Kubernetes v1.28 shoots. by @oliver-goetz [#755]

## Docker Images
- gardener-extension-admission-azure: `eu.gcr.io/gardener-project/gardener/extensions/admission-azure:v1.39.3`
- gardener-extension-provider-azure: `eu.gcr.io/gardener-project/gardener/extensions/provider-azure:v1.39.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.84.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Updated alpine image to version `3.18.4`. by @plkokanov [#8858]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.84.1`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.84.1`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.84.1`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.84.1`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.84.1`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.84.1`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.84.1`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.84.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.84.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Updated alpine image to version `3.18.4`. by @plkokanov [#8858]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.84.1`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.84.1`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.84.1`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.84.1`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.84.1`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.84.1`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.84.1`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.84.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.84.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Updated alpine image to version `3.18.4`. by @plkokanov [#8858]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.84.1`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.84.1`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.84.1`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.84.1`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.84.1`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.84.1`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.84.1`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.84.1`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.19.0</code></b></summary>

# [gardener/gardener-extension-shoot-networking-problemdetector]

## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.0 to 1.82.1. by @dependabot[bot] [#100]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.81.1 to 1.82.0. by @dependabot[bot] [#99]
- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [#103]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.83.0 to 1.84.0. by @dependabot[bot] [#105]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.1 to 1.83.0. by @dependabot[bot] [#102]
- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.80.1 to 1.81.1. by @dependabot[bot] [#97]

## Docker Images
- gardener-extension-shoot-networking-problemdetector: `eu.gcr.io/gardener-project/gardener/extensions/shoot-networking-problemdetector:v0.19.0`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.15.0</code></b></summary>

# [gardener/gardener-extension-shoot-networking-filter]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-networking-filter` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#71]
- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#73]
## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.83.0 to 1.84.0. by @dependabot[bot] [#99]
- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @dependabot[bot] [#88]
- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.80.1 to 1.81.1. by @dependabot[bot] [#91]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.0 to 1.82.1. by @dependabot[bot] [#94]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.81.1 to 1.82.0. by @dependabot[bot] [#93]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.1 to 1.83.0. by @dependabot[bot] [#96]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#86]
- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.76.0 to 1.77.0. by @dependabot[bot] [#81]
- `[OPERATOR]` Bumps golang from 1.21.2 to 1.21.3. by @dependabot[bot] [#90]
- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [#97]

## Docker Images
- gardener-extension-shoot-networking-filter: `eu.gcr.io/gardener-project/gardener/extensions/shoot-networking-filter:v0.15.0`


</details>
