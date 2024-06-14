---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update cert-management to <code>0.15.0</code></b></summary>

# [gardener/cert-management]

## ✨ New Features

- `[OPERATOR]` Use `dnsrecords.extensions.gardener.cloud` API as an alternative to `dnsentries.dns.gardener.cloud` for DNS challenges. by @MartinWeindel [#177]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.15.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.55.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixes a monitoring configuration issue that caused false CCM-down alerts to fire. by @AndreasBurger [#975]

## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.55.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.55.1`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.40.1</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixes a monitoring configuration issue that caused false CCM-down alerts to fire. by @kon-angelo [#789]

## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.40.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.40.1`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.36.1</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixes a monitoring configuration issue that caused false CCM-down alerts to fire. by @kon-angelo [#776]
## 🏃 Others

- `[OPERATOR]` Fix an issue preventing the creation of NAT gateways on cloud routers with custom advertise mode by @kon-angelo [#777]

## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.36.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.36.1`


</details>

<details>
<summary><b>Update os-coreos to <code>1.22.0</code></b></summary>

# [gardener/gardener-extension-os-coreos]

## ⚠️ Breaking Changes

- `[OPERATOR]` This extension is no longer able to run with Gardener versions lower than `v1.90` when the `UseGardenerNodeAgent` feature gate is disabled. by @rfranzke [#100]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @LucaBernstein [#107]

## Docker Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.22.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.44.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixes a monitoring configuration issue that caused false CCM-down alerts to fire. by @AndreasBurger [#884]
- `[USER]` Fix panic that could occur when using zoned cluster and providing external vnet config by @AndreasBurger [#885]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.44.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.44.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.96.3</code></b></summary>

# [gardener/gardener]

## ✨ New Features

- `[OPERATOR]` `gardenlet`'s `Pod` garbage collector (part of its `shoot-care` controller) now considers `Pod`s with reason `NodeAffinity`, i.e., it auto-deletes such `Pod`s. by @rfranzke [#9949]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.96.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.96.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.96.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.96.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.96.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.96.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.96.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.96.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.96.3</code></b></summary>

# [gardener/gardener]

## ✨ New Features

- `[OPERATOR]` `gardenlet`'s `Pod` garbage collector (part of its `shoot-care` controller) now considers `Pod`s with reason `NodeAffinity`, i.e., it auto-deletes such `Pod`s. by @rfranzke [#9949]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.96.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.96.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.96.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.96.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.96.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.96.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.96.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.96.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.96.3</code></b></summary>

# [gardener/gardener]

## ✨ New Features

- `[OPERATOR]` `gardenlet`'s `Pod` garbage collector (part of its `shoot-care` controller) now considers `Pod`s with reason `NodeAffinity`, i.e., it auto-deletes such `Pod`s. by @rfranzke [#9949]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.96.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.96.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.96.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.96.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.96.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.96.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.96.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.96.3`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.9</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.8...0.7.9

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.10</code></b></summary>

## What's Changed
* hcloud: Add cx22-cx52 machine types by @j2L4e in https://github.com/gardener-community/cloudprofiles/pull/27


**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.9...0.7.10

</details>

<details>
<summary><b>Update provider-gcp to <code>1.36.2</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🐛 Bug Fixes

- `[USER]` Fixed a bug that could occur when configuring GPU-nodes, resulting in an invalid scheduling configuration. by @AndreasBurger [#782]

## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.36.2`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.36.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.96.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression where etcd alerts for the virtual Garden cluster did not work. by @vicwicker [#9974]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.96.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.96.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.96.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.96.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.96.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.96.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.96.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.96.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.96.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression where etcd alerts for the virtual Garden cluster did not work. by @vicwicker [#9974]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.96.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.96.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.96.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.96.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.96.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.96.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.96.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.96.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.96.4</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression where etcd alerts for the virtual Garden cluster did not work. by @vicwicker [#9974]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.96.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.96.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.96.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.96.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.96.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.96.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.96.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.96.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.97.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `VPAForETCD` feature gate is promoted to beta and now enabled by default. by @voelzmo [#9873]
- `[OPERATOR]` The `CoreDNSQueryRewriting` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @ScheererJ [#9889]
- `[OPERATOR]` The `MutableShootSpecNetworkingNodes` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @ScheererJ [#9890]
- `[DEVELOPER]` The deprecated fields `.spec.{reloadConfigFilePath,command}` and `.status.{units,files}` have been removed from the `extensions.gardener.cloud/v1alpha1.OperatingSystemConfig` API. by @rfranzke [#9885]
## 📰 Noteworthy

- `[DEVELOPER]` gardenlet now creates a secret called `worker-pools-operatingsystemconfig-hashes` in the shoot namespace on seed clusters. This secret will be used to upgrade the operating system config key calculation in the future. by @MichaelEischer [#9846]
- `[DEPENDENCY]` The "list `MachineDeployment`s" call in the generic `Worker` actuator has been moved right before its first usage to prevent that the list is outdated before it's used. by @rfranzke [#9925]
## ✨ New Features

- `[OPERATOR]` The Kubelet configuration was enhanced to add configured worker taints during node registration. Earlier, only the `machine-controller-manager` was responsible to add taints to the `Node`s which happened asynchronously, so that unwanted workload might have already scheduled to these workers. by @timuthy [#9872]
- `[OPERATOR]` `gardenlet` is now capable of keeping itself updated by pulling configuration and deployment values from the garden cluster. This way, regular manual Helm deployments can be avoided. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_manually.md#self-upgrades).  
  Please note, a Gardenlet Helm chart is required on an OCI repository. Gardener will provide this officially in a future release. by @rfranzke [#9874]
- `[DEVELOPER]` `gardener-operator` local development setup supports creating seeds, shoots and managed-seeds now. Please see [the docs](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#alternative-way-to-set-up-garden-and-seed-leveraging-gardener-operator) for details. by @oliver-goetz [#9763]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the maintenance state to no get update even though maintenance succeeds has been fixed. by @acumino [#9945]
## 🏃 Others

- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.30.2`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.30.2) by @gardener-ci-robot [#9926]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.25.0`. [Release Notes](https://togithub.com/gardener/vpn2/releases/tag/0.25.0) by @gardener-ci-robot [#9904]
- `[DEPENDENCY]` The `registry.k8s.io/dns/k8s-dns-node-cache` image has been updated to `1.23.1`. by @gardener-ci-robot [#9938]
- `[DEPENDENCY]` The `gardener/terminal-controller-manager` image has been updated to `v0.33.0`. [Release Notes](https://togithub.com/gardener/terminal-controller-manager/releases/tag/v0.33.0) by @gardener-ci-robot [#9896]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.27.4`. by @gardener-ci-robot [#9943]
- `[DEPENDENCY]` The `quay.io/brancz/kube-rbac-proxy` image has been updated to `v0.18.0`. by @gardener-ci-robot [#9917]
- `[OPERATOR]` The auto-scaling by VPA is now disabled for the `conntrack-fix` sidecar container of kube-proxy. The corresponding container does not need vertical auto-scaling. by @ialidzhikov [#9953]
## 📖 Documentation

- `[OPERATOR]` Clarify the importance of correctly configuring shoot service account issuer hostname if Gardener Operator is not used.  by @dimityrmirchev [#9923]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.97.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.97.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.97.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.97.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.97.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.97.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.97.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.97.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.97.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `VPAForETCD` feature gate is promoted to beta and now enabled by default. by @voelzmo [#9873]
- `[OPERATOR]` The `CoreDNSQueryRewriting` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @ScheererJ [#9889]
- `[OPERATOR]` The `MutableShootSpecNetworkingNodes` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @ScheererJ [#9890]
- `[DEVELOPER]` The deprecated fields `.spec.{reloadConfigFilePath,command}` and `.status.{units,files}` have been removed from the `extensions.gardener.cloud/v1alpha1.OperatingSystemConfig` API. by @rfranzke [#9885]
## 📰 Noteworthy

- `[DEVELOPER]` gardenlet now creates a secret called `worker-pools-operatingsystemconfig-hashes` in the shoot namespace on seed clusters. This secret will be used to upgrade the operating system config key calculation in the future. by @MichaelEischer [#9846]
- `[DEPENDENCY]` The "list `MachineDeployment`s" call in the generic `Worker` actuator has been moved right before its first usage to prevent that the list is outdated before it's used. by @rfranzke [#9925]
## ✨ New Features

- `[OPERATOR]` The Kubelet configuration was enhanced to add configured worker taints during node registration. Earlier, only the `machine-controller-manager` was responsible to add taints to the `Node`s which happened asynchronously, so that unwanted workload might have already scheduled to these workers. by @timuthy [#9872]
- `[OPERATOR]` `gardenlet` is now capable of keeping itself updated by pulling configuration and deployment values from the garden cluster. This way, regular manual Helm deployments can be avoided. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_manually.md#self-upgrades).  
  Please note, a Gardenlet Helm chart is required on an OCI repository. Gardener will provide this officially in a future release. by @rfranzke [#9874]
- `[DEVELOPER]` `gardener-operator` local development setup supports creating seeds, shoots and managed-seeds now. Please see [the docs](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#alternative-way-to-set-up-garden-and-seed-leveraging-gardener-operator) for details. by @oliver-goetz [#9763]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the maintenance state to no get update even though maintenance succeeds has been fixed. by @acumino [#9945]
## 🏃 Others

- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.30.2`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.30.2) by @gardener-ci-robot [#9926]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.25.0`. [Release Notes](https://togithub.com/gardener/vpn2/releases/tag/0.25.0) by @gardener-ci-robot [#9904]
- `[DEPENDENCY]` The `registry.k8s.io/dns/k8s-dns-node-cache` image has been updated to `1.23.1`. by @gardener-ci-robot [#9938]
- `[DEPENDENCY]` The `gardener/terminal-controller-manager` image has been updated to `v0.33.0`. [Release Notes](https://togithub.com/gardener/terminal-controller-manager/releases/tag/v0.33.0) by @gardener-ci-robot [#9896]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.27.4`. by @gardener-ci-robot [#9943]
- `[DEPENDENCY]` The `quay.io/brancz/kube-rbac-proxy` image has been updated to `v0.18.0`. by @gardener-ci-robot [#9917]
- `[OPERATOR]` The auto-scaling by VPA is now disabled for the `conntrack-fix` sidecar container of kube-proxy. The corresponding container does not need vertical auto-scaling. by @ialidzhikov [#9953]
## 📖 Documentation

- `[OPERATOR]` Clarify the importance of correctly configuring shoot service account issuer hostname if Gardener Operator is not used.  by @dimityrmirchev [#9923]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.97.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.97.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.97.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.97.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.97.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.97.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.97.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.97.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.97.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `VPAForETCD` feature gate is promoted to beta and now enabled by default. by @voelzmo [#9873]
- `[OPERATOR]` The `CoreDNSQueryRewriting` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @ScheererJ [#9889]
- `[OPERATOR]` The `MutableShootSpecNetworkingNodes` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @ScheererJ [#9890]
- `[DEVELOPER]` The deprecated fields `.spec.{reloadConfigFilePath,command}` and `.status.{units,files}` have been removed from the `extensions.gardener.cloud/v1alpha1.OperatingSystemConfig` API. by @rfranzke [#9885]
## 📰 Noteworthy

- `[DEVELOPER]` gardenlet now creates a secret called `worker-pools-operatingsystemconfig-hashes` in the shoot namespace on seed clusters. This secret will be used to upgrade the operating system config key calculation in the future. by @MichaelEischer [#9846]
- `[DEPENDENCY]` The "list `MachineDeployment`s" call in the generic `Worker` actuator has been moved right before its first usage to prevent that the list is outdated before it's used. by @rfranzke [#9925]
## ✨ New Features

- `[OPERATOR]` The Kubelet configuration was enhanced to add configured worker taints during node registration. Earlier, only the `machine-controller-manager` was responsible to add taints to the `Node`s which happened asynchronously, so that unwanted workload might have already scheduled to these workers. by @timuthy [#9872]
- `[OPERATOR]` `gardenlet` is now capable of keeping itself updated by pulling configuration and deployment values from the garden cluster. This way, regular manual Helm deployments can be avoided. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_manually.md#self-upgrades).  
  Please note, a Gardenlet Helm chart is required on an OCI repository. Gardener will provide this officially in a future release. by @rfranzke [#9874]
- `[DEVELOPER]` `gardener-operator` local development setup supports creating seeds, shoots and managed-seeds now. Please see [the docs](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#alternative-way-to-set-up-garden-and-seed-leveraging-gardener-operator) for details. by @oliver-goetz [#9763]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing the maintenance state to no get update even though maintenance succeeds has been fixed. by @acumino [#9945]
## 🏃 Others

- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.30.2`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.30.2) by @gardener-ci-robot [#9926]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.25.0`. [Release Notes](https://togithub.com/gardener/vpn2/releases/tag/0.25.0) by @gardener-ci-robot [#9904]
- `[DEPENDENCY]` The `registry.k8s.io/dns/k8s-dns-node-cache` image has been updated to `1.23.1`. by @gardener-ci-robot [#9938]
- `[DEPENDENCY]` The `gardener/terminal-controller-manager` image has been updated to `v0.33.0`. [Release Notes](https://togithub.com/gardener/terminal-controller-manager/releases/tag/v0.33.0) by @gardener-ci-robot [#9896]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.27.4`. by @gardener-ci-robot [#9943]
- `[DEPENDENCY]` The `quay.io/brancz/kube-rbac-proxy` image has been updated to `v0.18.0`. by @gardener-ci-robot [#9917]
- `[OPERATOR]` The auto-scaling by VPA is now disabled for the `conntrack-fix` sidecar container of kube-proxy. The corresponding container does not need vertical auto-scaling. by @ialidzhikov [#9953]
## 📖 Documentation

- `[OPERATOR]` Clarify the importance of correctly configuring shoot service account issuer hostname if Gardener Operator is not used.  by @dimityrmirchev [#9923]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.97.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.97.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.97.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.97.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.97.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.97.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.97.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.97.0`


</details>
