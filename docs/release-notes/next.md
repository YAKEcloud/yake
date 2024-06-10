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
