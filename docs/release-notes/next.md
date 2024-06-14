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
