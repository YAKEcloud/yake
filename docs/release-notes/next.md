---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.91.1</code></b></summary>

# [gardener/dependency-watchdog]

## 🏃 Others

- `[OPERATOR]` `dependency-watchdog-prober` now skips `Lease`s in the `kube-node-lease` namespace in case the corresponding `Node` does not exist (anymore). by @rfranzke [gardener/dependency-watchdog#108]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.91.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.91.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.91.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.91.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.91.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.91.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.91.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.91.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.91.1</code></b></summary>

# [gardener/dependency-watchdog]

## 🏃 Others

- `[OPERATOR]` `dependency-watchdog-prober` now skips `Lease`s in the `kube-node-lease` namespace in case the corresponding `Node` does not exist (anymore). by @rfranzke [gardener/dependency-watchdog#108]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.91.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.91.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.91.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.91.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.91.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.91.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.91.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.91.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.91.1</code></b></summary>

# [gardener/dependency-watchdog]

## 🏃 Others

- `[OPERATOR]` `dependency-watchdog-prober` now skips `Lease`s in the `kube-node-lease` namespace in case the corresponding `Node` does not exist (anymore). by @rfranzke [gardener/dependency-watchdog#108]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.91.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.91.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.91.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.91.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.91.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.91.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.91.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.91.1`


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.25.0</code></b></summary>

# [gardener/gardener-extension-shoot-oidc-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-oidc-service` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#142]
# [gardener/oidc-webhook-authenticator]

## ⚠️ Breaking Changes

- `[OPERATOR]` :warning: OWA no longer delegates authentication and authorization to a `kube-apiserver`. It now only supports optional client certificate authentication which can be configured via the "--client-ca-file" flag. Paths that do require authentication can be skipped by setting the flag "--authentication-always-allow-paths". The same flags can be configured with the helm chart via `.Values.runtime.auth.clientCABundle` and `.Values.runtime.auth.authenticationAlwaysAllowPaths`. Operators should remove residuals of roles and rolebindings that were used to authorize OWA callers. by @dimityrmirchev [gardener/oidc-webhook-authenticator#148]
- `[OPERATOR]` Flags related to `kube-apiserver` authn/z delegation and `kube-apiserver` serving were removed.  by @dimityrmirchev [gardener/oidc-webhook-authenticator#148]
## 🏃 Others

- `[DEPENDENCY]` OWA is now built using go version 1.22.1. by @dimityrmirchev [gardener/oidc-webhook-authenticator#151]

## Docker Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.25.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.42.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[USER]` Extend the user of deprecated topology labels until `<=v1.29`. Azure clusters upgrading to v1.30 should make sure to have migrated away from the deprecated [topology labels](failure-domain.beta.kubernetes.io/zone). See https://github.com/kubernetes-sigs/cloud-provider-azure/issues/2453 for more details. by @kon-angelo [#813]
## 🏃 Others

- `[OPERATOR]` Fix an issue where the vnet name was not correctly calculated in status by @kon-angelo [#812]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.42.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.42.1`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.18.0</code></b></summary>

# [gardener/gardener-extension-shoot-networking-filter]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-networking-filter` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#112]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.0 to 1.22.1. by @dependabot[bot] [#124]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.89.0 to 1.90.0. by @dependabot[bot] [#125]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.88.0 to 1.89.0. by @dependabot[bot] [#122]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.90.0 to 1.91.0. by @dependabot[bot] [#129]

## Docker Images
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.18.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.18.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.91.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where dependency watchdog is missing permissions to read nodes in the shoot clusters. by @vpnachev [#9503]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.91.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.91.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.91.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.91.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.91.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.91.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.91.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.91.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.91.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where dependency watchdog is missing permissions to read nodes in the shoot clusters. by @vpnachev [#9503]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.91.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.91.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.91.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.91.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.91.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.91.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.91.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.91.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.91.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where dependency watchdog is missing permissions to read nodes in the shoot clusters. by @vpnachev [#9503]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.91.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.91.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.91.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.91.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.91.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.91.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.91.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.91.2`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.18.4</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Fix panic if source object referenced by a DNSAnnotation object has no annotations in its metadata. by @MartinWeindel [#363]
## 📖 Documentation

- `[USER]` Revised Cloudflare External DNS Management document to no longer recommend base64 encoding of the token in the secret. by @SeanKilleen [#361]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.4`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.5</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.4...0.7.5

</details>

<details>
<summary><b>Update provider-hcloud to <code>0.6.28</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.28

</details>

<details>
<summary><b>Update os-coreos to <code>1.21.0</code></b></summary>

# [gardener/gardener-extension-os-coreos]

## ✨ New Features

- `[OPERATOR]` The extension now supports Flatcar >= 3815.2.0 by @MichaelEischer [#93]

## Docker Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.21.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.46.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-dns-service` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#276]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.0 to 1.22.1. by @dependabot[bot] [#304]
- `[OPERATOR]` Bumps golang from 1.22.1 to 1.22.2. by @dependabot[bot] [#317]
- `[OPERATOR]` Add Gardener error codes on DNS deletion and "no domain matching" errors. by @MartinWeindel [#303]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.90.0 to 1.91.0. by @dependabot[bot] [#311]
- `[OPERATOR]` An issue caused the test execution to fail due to outdated go version in the TestDefinition is now fixed. by @ialidzhikov [#302]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.89.0 to 1.90.0. by @dependabot[bot] [#306]
- `[USER]` Allow DNS provider type `rfc2136` by @MartinWeindel [#313]
# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Fix panic if source object referenced by a DNSAnnotation object has no annotations in its metadata. by @MartinWeindel [gardener/external-dns-management#363]
## 📖 Documentation

- `[USER]` Revised Cloudflare External DNS Management document to no longer recommend base64 encoding of the token in the secret. by @SeanKilleen [gardener/external-dns-management#361]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.46.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.46.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.53.2</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 📰 Noteworthy

- `[OPERATOR]` It is assumed that `gardenlet`'s `UseGardenerNodeAgent` is turned on by default if the feature gate is not explicitly set. Hence, make sure to use at least Gardener `v1.82` when using this extension version. by @oliver-goetz [#914]

## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.53.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.53.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.92.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The deprecated `.spec.runtimeCluster.ingress.domain` field has been dropped from the `Garden` API. Make use of `.spec.runtimeCluster.ingress.domains`. by @ScheererJ [#9447]
- `[OPERATOR]` Graduated `MachineControllerManagerDeployment` feature gate was removed. by @ScheererJ [#9450]
- `[OPERATOR]` The graduated `APIServerFastRollout` feature gate has been dropped. by @rfranzke [#9478]
- `[OPERATOR]` The graduated `UseGardenerNodeAgent` feature gate has been dropped. Before upgrading to this Gardener version, make sure to have up-to-date OS extensions installed on your landscape: `os-gardenlinux@v0.24+`, `os-ubuntu@v1.25+`, `os-suse-chost@v1.25+`, `os-coreos@v1.20+`, `os-metal@v0.8+`, `provider-aws@v1.53.2+`. by @rfranzke [#9477]
- `[USER]` The specification of additional, non-primary DNS providers was deprecated and will be discontinued in a future release. If you need additional DNS providers for your shoot workload, please use the provider config for the respective DNS extension. by @timuthy [#9471]
- `[DEVELOPER]` The deprecated `oscommon` package has been removed. by @rfranzke [#9477]
## 📰 Noteworthy

- `[DEVELOPER]` Admission controllers of provider extensions should be adjusted to accommodate NamespacedCloudProfiles by @benedictweis [#9440]
- `[DEVELOPER]` The following fields in the`extensions.gardener.cloud/v1alpha1.OperatingSystemConfig` API have been deprecated and will be removed in a future version: `.spec.reloadConfigFilePath`, `.status.command`, `.status.units`, `.status.files`. by @rfranzke [#9477]
- `[OPERATOR]` Secret `openvpn-diffie-hellman-key` in the `garden` namespace containing the Diffie-Hellmann key can be deleted from landscapes as it is no longer needed. by @ary1992 [#9386]
- `[OPERATOR]` resource-manager's secret reconciler that removed `resources.gardener.cloud/gardener-resource-manager` finalizer has been removed. by @Kostov6 [#9490]
## ✨ New Features

- `[DEVELOPER]` A new extension lifecycle strategy `reconcile: AfterWorker` is now available for Extensions to use in their `ControllerRegistration`. by @maboehm [#9472]
## 🐛 Bug Fixes

- `[DEVELOPER]` provider-local: An issue causing the backup directory not to be deleted after successful control plane migration is now fixed. by @Kostov6 [#9182]
- `[DEVELOPER]` An issue was fixed that caused `make verify` to fail because of `logcheck` build issues. by @timuthy [#9458]
- `[OPERATOR]` Restarting systemd units by annotating the node now works without specifying the `.service` suffix in unit names. by @oliver-goetz [#9459]
## 🏃 Others

- `[OPERATOR]` Images for local development should now be properly rebuilt, if changes are made only to files in the `main` packages under `./cmd/...` directories.  by @plkokanov [#9496]
- `[OPERATOR]` During the `restore` phase of control plane migration of HA shoots, the shoot's `kube-apiserver` is deployed immediately after one replica is ready for each of the events and main `etcd`s. The event and main `etcd`s are scaled up to 3 replicas (the current default for HA shoots) after the `kube-apiserver` is deployed and ready. This should greatly reduce the downtime during control plane migration of HA shoots. by @plkokanov [#9462]
- `[OPERATOR]` A service is added for the shoot cluster's kube-system/node-problem-detector daemonset by @istvanballok [#9483]
- `[OPERATOR]` Secret `vpn-seed-server-dh` will no longer be created as [gardener/vpn2](https://github.com/gardener/vpn2) release `v0.23.0` removed the need for supplying the vpn server with `Diffie–Hellman` parameters. by @ary1992 [#9386]
- `[OPERATOR]` The `Data Transfer` graph from the `Istio Mesh Dashboard` in the seed `plutono` now uses `rate` when displaying the `istio_tcp_received_bytes_total` and `istio_tcp_sent_bytes_total` metrics. by @plkokanov [#9495]
- `[OPERATOR]` Correct NodeNotHealthy filtering query to use `v1beta1constants.TaintNodeCriticalComponentsNotReady` by @adenitiu [#9470]
- `[DEVELOPER]` New `consistOf` and `contain` Gomega matchers for `ManagedResource`s were added. Tests can concisely check for expected objects a `ManagedResource` is responsible for. by @timuthy [#9421]
## 📖 Documentation

- `[DEVELOPER]` Add `yq` as a local setup prerequisite. by @marc1404 [#9510]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.92.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.92.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.92.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.92.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.92.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.92.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.92.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.92.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.92.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The deprecated `.spec.runtimeCluster.ingress.domain` field has been dropped from the `Garden` API. Make use of `.spec.runtimeCluster.ingress.domains`. by @ScheererJ [#9447]
- `[OPERATOR]` Graduated `MachineControllerManagerDeployment` feature gate was removed. by @ScheererJ [#9450]
- `[OPERATOR]` The graduated `APIServerFastRollout` feature gate has been dropped. by @rfranzke [#9478]
- `[OPERATOR]` The graduated `UseGardenerNodeAgent` feature gate has been dropped. Before upgrading to this Gardener version, make sure to have up-to-date OS extensions installed on your landscape: `os-gardenlinux@v0.24+`, `os-ubuntu@v1.25+`, `os-suse-chost@v1.25+`, `os-coreos@v1.20+`, `os-metal@v0.8+`, `provider-aws@v1.53.2+`. by @rfranzke [#9477]
- `[USER]` The specification of additional, non-primary DNS providers was deprecated and will be discontinued in a future release. If you need additional DNS providers for your shoot workload, please use the provider config for the respective DNS extension. by @timuthy [#9471]
- `[DEVELOPER]` The deprecated `oscommon` package has been removed. by @rfranzke [#9477]
## 📰 Noteworthy

- `[DEVELOPER]` Admission controllers of provider extensions should be adjusted to accommodate NamespacedCloudProfiles by @benedictweis [#9440]
- `[DEVELOPER]` The following fields in the`extensions.gardener.cloud/v1alpha1.OperatingSystemConfig` API have been deprecated and will be removed in a future version: `.spec.reloadConfigFilePath`, `.status.command`, `.status.units`, `.status.files`. by @rfranzke [#9477]
- `[OPERATOR]` Secret `openvpn-diffie-hellman-key` in the `garden` namespace containing the Diffie-Hellmann key can be deleted from landscapes as it is no longer needed. by @ary1992 [#9386]
- `[OPERATOR]` resource-manager's secret reconciler that removed `resources.gardener.cloud/gardener-resource-manager` finalizer has been removed. by @Kostov6 [#9490]
## ✨ New Features

- `[DEVELOPER]` A new extension lifecycle strategy `reconcile: AfterWorker` is now available for Extensions to use in their `ControllerRegistration`. by @maboehm [#9472]
## 🐛 Bug Fixes

- `[DEVELOPER]` provider-local: An issue causing the backup directory not to be deleted after successful control plane migration is now fixed. by @Kostov6 [#9182]
- `[DEVELOPER]` An issue was fixed that caused `make verify` to fail because of `logcheck` build issues. by @timuthy [#9458]
- `[OPERATOR]` Restarting systemd units by annotating the node now works without specifying the `.service` suffix in unit names. by @oliver-goetz [#9459]
## 🏃 Others

- `[OPERATOR]` Images for local development should now be properly rebuilt, if changes are made only to files in the `main` packages under `./cmd/...` directories.  by @plkokanov [#9496]
- `[OPERATOR]` During the `restore` phase of control plane migration of HA shoots, the shoot's `kube-apiserver` is deployed immediately after one replica is ready for each of the events and main `etcd`s. The event and main `etcd`s are scaled up to 3 replicas (the current default for HA shoots) after the `kube-apiserver` is deployed and ready. This should greatly reduce the downtime during control plane migration of HA shoots. by @plkokanov [#9462]
- `[OPERATOR]` A service is added for the shoot cluster's kube-system/node-problem-detector daemonset by @istvanballok [#9483]
- `[OPERATOR]` Secret `vpn-seed-server-dh` will no longer be created as [gardener/vpn2](https://github.com/gardener/vpn2) release `v0.23.0` removed the need for supplying the vpn server with `Diffie–Hellman` parameters. by @ary1992 [#9386]
- `[OPERATOR]` The `Data Transfer` graph from the `Istio Mesh Dashboard` in the seed `plutono` now uses `rate` when displaying the `istio_tcp_received_bytes_total` and `istio_tcp_sent_bytes_total` metrics. by @plkokanov [#9495]
- `[OPERATOR]` Correct NodeNotHealthy filtering query to use `v1beta1constants.TaintNodeCriticalComponentsNotReady` by @adenitiu [#9470]
- `[DEVELOPER]` New `consistOf` and `contain` Gomega matchers for `ManagedResource`s were added. Tests can concisely check for expected objects a `ManagedResource` is responsible for. by @timuthy [#9421]
## 📖 Documentation

- `[DEVELOPER]` Add `yq` as a local setup prerequisite. by @marc1404 [#9510]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.92.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.92.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.92.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.92.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.92.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.92.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.92.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.92.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.92.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The deprecated `.spec.runtimeCluster.ingress.domain` field has been dropped from the `Garden` API. Make use of `.spec.runtimeCluster.ingress.domains`. by @ScheererJ [#9447]
- `[OPERATOR]` Graduated `MachineControllerManagerDeployment` feature gate was removed. by @ScheererJ [#9450]
- `[OPERATOR]` The graduated `APIServerFastRollout` feature gate has been dropped. by @rfranzke [#9478]
- `[OPERATOR]` The graduated `UseGardenerNodeAgent` feature gate has been dropped. Before upgrading to this Gardener version, make sure to have up-to-date OS extensions installed on your landscape: `os-gardenlinux@v0.24+`, `os-ubuntu@v1.25+`, `os-suse-chost@v1.25+`, `os-coreos@v1.20+`, `os-metal@v0.8+`, `provider-aws@v1.53.2+`. by @rfranzke [#9477]
- `[USER]` The specification of additional, non-primary DNS providers was deprecated and will be discontinued in a future release. If you need additional DNS providers for your shoot workload, please use the provider config for the respective DNS extension. by @timuthy [#9471]
- `[DEVELOPER]` The deprecated `oscommon` package has been removed. by @rfranzke [#9477]
## 📰 Noteworthy

- `[DEVELOPER]` Admission controllers of provider extensions should be adjusted to accommodate NamespacedCloudProfiles by @benedictweis [#9440]
- `[DEVELOPER]` The following fields in the`extensions.gardener.cloud/v1alpha1.OperatingSystemConfig` API have been deprecated and will be removed in a future version: `.spec.reloadConfigFilePath`, `.status.command`, `.status.units`, `.status.files`. by @rfranzke [#9477]
- `[OPERATOR]` Secret `openvpn-diffie-hellman-key` in the `garden` namespace containing the Diffie-Hellmann key can be deleted from landscapes as it is no longer needed. by @ary1992 [#9386]
- `[OPERATOR]` resource-manager's secret reconciler that removed `resources.gardener.cloud/gardener-resource-manager` finalizer has been removed. by @Kostov6 [#9490]
## ✨ New Features

- `[DEVELOPER]` A new extension lifecycle strategy `reconcile: AfterWorker` is now available for Extensions to use in their `ControllerRegistration`. by @maboehm [#9472]
## 🐛 Bug Fixes

- `[DEVELOPER]` provider-local: An issue causing the backup directory not to be deleted after successful control plane migration is now fixed. by @Kostov6 [#9182]
- `[DEVELOPER]` An issue was fixed that caused `make verify` to fail because of `logcheck` build issues. by @timuthy [#9458]
- `[OPERATOR]` Restarting systemd units by annotating the node now works without specifying the `.service` suffix in unit names. by @oliver-goetz [#9459]
## 🏃 Others

- `[OPERATOR]` Images for local development should now be properly rebuilt, if changes are made only to files in the `main` packages under `./cmd/...` directories.  by @plkokanov [#9496]
- `[OPERATOR]` During the `restore` phase of control plane migration of HA shoots, the shoot's `kube-apiserver` is deployed immediately after one replica is ready for each of the events and main `etcd`s. The event and main `etcd`s are scaled up to 3 replicas (the current default for HA shoots) after the `kube-apiserver` is deployed and ready. This should greatly reduce the downtime during control plane migration of HA shoots. by @plkokanov [#9462]
- `[OPERATOR]` A service is added for the shoot cluster's kube-system/node-problem-detector daemonset by @istvanballok [#9483]
- `[OPERATOR]` Secret `vpn-seed-server-dh` will no longer be created as [gardener/vpn2](https://github.com/gardener/vpn2) release `v0.23.0` removed the need for supplying the vpn server with `Diffie–Hellman` parameters. by @ary1992 [#9386]
- `[OPERATOR]` The `Data Transfer` graph from the `Istio Mesh Dashboard` in the seed `plutono` now uses `rate` when displaying the `istio_tcp_received_bytes_total` and `istio_tcp_sent_bytes_total` metrics. by @plkokanov [#9495]
- `[OPERATOR]` Correct NodeNotHealthy filtering query to use `v1beta1constants.TaintNodeCriticalComponentsNotReady` by @adenitiu [#9470]
- `[DEVELOPER]` New `consistOf` and `contain` Gomega matchers for `ManagedResource`s were added. Tests can concisely check for expected objects a `ManagedResource` is responsible for. by @timuthy [#9421]
## 📖 Documentation

- `[DEVELOPER]` Add `yq` as a local setup prerequisite. by @marc1404 [#9510]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.92.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.92.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.92.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.92.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.92.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.92.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.92.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.92.0`


</details>
