---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-gcp to <code>1.29.1</code></b></summary>

# [gardener-extension-provider-gcp]
## 🐛 Bug Fixes
* *[DEPENDENCY]* gcp-compute-persistent-disk-csi-driver to v1.9.4 ([gardener/gardener-extension-provider-gcp#590](https://github.com/gardener/gardener-extension-provider-gcp/pull/590), [@kon-angelo](https://github.com/kon-angelo))

</details>

<details>
<summary><b>Update cert-management to <code>0.10.5</code></b></summary>

# [cert-management]
## 🏃 Others
* *[OPERATOR]* Updated controller-manager-library dependency. ([gardener/cert-management#127](https://github.com/gardener/cert-management/pull/127), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Updated builder image from `golang:1.20.3` to `golang:1.20.4` ([gardener/cert-management#127](https://github.com/gardener/cert-management/pull/127), [@MartinWeindel](https://github.com/MartinWeindel))

</details>

<details>
<summary><b>Update external-dns-management to <code>0.15.3</code></b></summary>

# [external-dns-management]
## ✨ New Features
* *[USER]* Added support for proxy for HTTP Transport for Openstack Designate Provider ([gardener/external-dns-management#304](https://github.com/gardener/external-dns-management/pull/304), [@sdputurn](https://github.com/sdputurn))
## 🏃 Others
* *[OPERATOR]* Updated controller-manager-library dependency. ([gardener/external-dns-management#305](https://github.com/gardener/external-dns-management/pull/305), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Updated builder image from `golang:1.20.2` to `golang:1.20.4` ([gardener/external-dns-management#305](https://github.com/gardener/external-dns-management/pull/305), [@MartinWeindel](https://github.com/MartinWeindel))

</details>

<details>
<summary><b>Update networking-calico to <code>1.33.0</code></b></summary>

# [gardener-extension-networking-calico]
## 🏃 Others
* *[OPERATOR]* The `gardener-extension-admission-calico` Service in the `gardener-extension-admission-calico` chart can now be configured to be topology-aware. ([gardener/gardener-extension-networking-calico#258](https://github.com/gardener/gardener-extension-networking-calico/pull/258), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* A e2e test is added which tests all combinations of node to node and pod to pod communication. ([gardener/gardener-extension-networking-calico#261](https://github.com/gardener/gardener-extension-networking-calico/pull/261), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* Update calico to `v3.25.1`. ([gardener/gardener-extension-networking-calico#262](https://github.com/gardener/gardener-extension-networking-calico/pull/262), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* The Gardener networking calico extension only supports kubernetes v1.21 going forward. ([gardener/gardener-extension-networking-calico#263](https://github.com/gardener/gardener-extension-networking-calico/pull/263), [@ScheererJ](https://github.com/ScheererJ))

</details>

<details>
<summary><b>Update networking-cilium to <code>1.24.0</code></b></summary>

# [gardener-extension-networking-cilium]
## 🏃 Others
* *[OPERATOR]* The `gardener-extension-admission-cilium` Service in the `gardener-extension-admission-cilium` chart can now be configured to be topology-aware. ([gardener/gardener-extension-networking-cilium#176](https://github.com/gardener/gardener-extension-networking-cilium/pull/176), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* A e2e test is added which tests all combinations of node to node and pod to pod communication. ([gardener/gardener-extension-networking-cilium#179](https://github.com/gardener/gardener-extension-networking-cilium/pull/179), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* Portmap copier is removed. ([gardener/gardener-extension-networking-cilium#180](https://github.com/gardener/gardener-extension-networking-cilium/pull/180), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* Memory limits for cilium agent are increased to 10 Gi. ([gardener/gardener-extension-networking-cilium#183](https://github.com/gardener/gardener-extension-networking-cilium/pull/183), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* Cilium is update to `v1.13.2`. ([gardener/gardener-extension-networking-cilium#184](https://github.com/gardener/gardener-extension-networking-cilium/pull/184), [@DockToFuture](https://github.com/DockToFuture))

</details>
