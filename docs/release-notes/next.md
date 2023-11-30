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

<details>
<summary><b>Update os-coreos to <code>1.19.0</code></b></summary>

# [gardener/gardener-extension-os-coreos]

## 📰 Noteworthy

- `[OPERATOR]` This extension is now prepared to run with an enabled `UseGardenerNodeAgent` feature gate. by @rfranzke [#80]
## ✨ New Features

- `[USER]` `os-coreos` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @ary1992 [#79]
## 🏃 Others

- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.1-> v1.80.0  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#76]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.80.1-> v1.81.0 by @ary1992 [#79]

## Docker Images
- gardener-extension-os-coreos: `eu.gcr.io/gardener-project/gardener/extensions/os-coreos:v1.19.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.22.0</code></b></summary>

# [gardener/gardener-extension-os-gardenlinux]

## 📰 Noteworthy

- `[OPERATOR]` This extension is now prepared to run with an enabled `UseGardenerNodeAgent` feature gate. by @rfranzke [#130]
## ✨ New Features

- `[USER]` `os-gardenlinux` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @acumino [#131]
## 🏃 Others

- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.1-> v1.80.0  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#127]

## Docker Images
- gardener-extension-os-gardenlinux: `eu.gcr.io/gardener-project/gardener/extensions/os-gardenlinux:v0.22.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.16.0</code></b></summary>

# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[USER]` `NS` records are not retrieved anymore for all accessible hosted zones to avoid reading all DNS record sets of all hosted zones periodically independently if they are used. Only hosted zones with active `DNSProviders` are synched, but without caring about consequences of `NS` records for subdomains. If there are many large hosted zones accessible for given credentials and there are only  `DNSProviders` using a few of these zones (either by domain or zone include), the period synchronisation of the zone state for all other hosted zones is avoided. This can result in a significant reduction of requests to the provider backend. As a downside of this change, applying a `DNSEntry` for a forwarded subdomain now results in a DNS record set in the parent hosted zone, if the real hosted zone is unknown to the controller. Formerly, applying such a `DNSEnty` resulted in an error state.   
  No action is necessary from the users, this is only a "heads up" for the changed behaviour if `NS` records are used for subdomains. by @MartinWeindel [#336]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [#333]
- `[USER]` Validate provider domain includes and excludes for forbidden wildcard domains. by @MartinWeindel [#335]

## Docker Images
- dns-controller-manager: `eu.gcr.io/gardener-project/dns-controller-manager:v0.16.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.24.0</code></b></summary>

# [gardener/gardener-extension-os-ubuntu]

## 📰 Noteworthy

- `[OPERATOR]` This extension is now prepared to run with an enabled `UseGardenerNodeAgent` feature gate. by @rfranzke [#99]
## 🏃 Others

- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.1-> v1.80.3  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @shafeeqes [#95]

## Docker Images
- gardener-extension-os-ubuntu: `eu.gcr.io/gardener-project/gardener/extensions/os-ubuntu:v1.24.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.50.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## 📰 Noteworthy

- `[DEVELOPER]` Remove dependency to specific calico and cilium versions. by @axel7born [#659]
## ✨ New Features

- `[USER]` `provider-alicloud` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion) for more details.).  by @shafeeqes [#652]
## 🏃 Others

- `[OPERATOR]` The following image is updated:  
  - registry.eu-central-1.aliyuncs.com/gardener-de/alibaba-cloud-controller-manager:v1.9.3-372 -> registry-eu-central-1.ack.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.7.0 by @shaoyongfeng [#654]
- `[OPERATOR]` Flow-based infrastructure reconciliation without Terraformer by @kevin-lacoo [#656]
- `[OPERATOR]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.81.0`->`v1.81.6`  
  - `k8s.io/*`: `v0.28.2`-> `v0.28.3`  
  - `sigs.k8s.io/controller-runtime`: `v0.16.2`-> `v0.16.3` by @shafeeqes [#660]
- `[DEVELOPER]` Add new unit tests. by @axel7born [#664]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @gardener-robot-ci-1 [gardener/machine-controller-manager#866]

## Docker Images
- gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.50.0`
- gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.50.0`

## Docker Images
gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.50.0`
gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.50.0`

</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.23.0</code></b></summary>

# [gardener/gardener-extension-shoot-oidc-service]

## ✨ New Features

- `[USER]` `shoot-oidc-service` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @acumino [#134]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug in the `shoot-oidc-service` controller that was causing the OIDC Webhook Authenticator CA secret for a shoot cluster to be recreated instead of restored during control plane migration has been fixed.   by @vpnachev [#137]
# [gardener/oidc-webhook-authenticator]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies were updated:  
   - github.com/go-logr/logr v1.2.4 -> v1.3.0  
   - k8s.io/* v0.27.6 -> v0.27.6  
   - sigs.k8s.io/controller-runtime v0.15.2 -> v0.15.3 by @dimityrmirchev [gardener/oidc-webhook-authenticator#141]
- `[DEPENDENCY]` OWA is now built using go version `1.21.4`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#141]

## Docker Images
- gardener-extension-shoot-oidc-service: `eu.gcr.io/gardener-project/gardener/extensions/shoot-oidc-service:v0.23.0`


</details>
