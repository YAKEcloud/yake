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
