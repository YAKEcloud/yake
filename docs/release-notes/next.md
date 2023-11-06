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
