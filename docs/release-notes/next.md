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
