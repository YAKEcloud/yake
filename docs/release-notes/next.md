---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.15.10</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` The `rfc2136` provider for authorive DNS servers supporting DNS Update [RFC2136](https://datatracker.ietf.org/doc/html/rfc2136) has been added. by @MartinWeindel [#331]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix reading IPv6 records for azure-dns and azure-private-dns providers. by @MartinWeindel [#330]
## 🏃 Others

- `[USER]` 3072 bit RSA keys are now used in order to generate TLS certificates. by @dimityrmirchev [#326]
- `[OPERATOR]` Bumps golang from 1.21.2 to 1.21.3. by @dependabot[bot] [#324]

## Docker Images
dns-controller-manager: `eu.gcr.io/gardener-project/dns-controller-manager:v0.15.10`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.40.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## ✨ New Features

- `[USER]` `shoot-dns-service` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @dependabot[bot] [#255]
## 🏃 Others

- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.80.1 to 1.82.1. by @dependabot[bot] [#255]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.1 to 1.83.0. by @dependabot[bot] [#257]
# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` The `rfc2136` provider for authorive DNS servers supporting DNS Update [RFC2136](https://datatracker.ietf.org/doc/html/rfc2136) has been added. by @MartinWeindel [gardener/external-dns-management#331]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix reading IPv6 records for azure-dns and azure-private-dns providers. by @MartinWeindel [gardener/external-dns-management#330]
## 🏃 Others

- `[USER]` 3072 bit RSA keys are now used in order to generate TLS certificates. by @dimityrmirchev [gardener/external-dns-management#326]
- `[OPERATOR]` Bumps golang from 1.21.2 to 1.21.3. by @dependabot[bot] [gardener/external-dns-management#324]

## Docker Images
gardener-extension-admission-shoot-dns-service: `eu.gcr.io/gardener-project/gardener/extensions/admission-shoot-dns-service:v1.40.0`
gardener-extension-shoot-dns-service: `eu.gcr.io/gardener-project/gardener/extensions/shoot-dns-service:v1.40.0`


</details>
