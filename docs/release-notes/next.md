---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update dashboard to <code>1.71.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixed an issue where the error message `_all is not a function` was displayed on the `ALL PROJECTS` page. by @holgerkoser [#1663]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.71.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.71.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixed an issue where the error message `_all is not a function` was displayed on the `ALL PROJECTS` page. by @holgerkoser [#1663]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.71.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.16.1</code></b></summary>

# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#342]
- `[OPERATOR]` rfc2136 provider expects TSIGSecret in base64 encoded format (previously base64 decoded was expected) by @Avarei [#347]
## ✨ New Features

- `[USER]` [AWS Route53] Create an additional alias `AAAA` record for load balancers (NLBs) if load balancer target domain name has an IPv6 address. by @MartinWeindel [#341]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [#338]
- `[DEVELOPER]` Remove vendoring by @MartinWeindel [#345]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.16.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.42.0</code></b></summary>

# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` rfc2136 provider expects TSIGSecret in base64 encoded format (previously base64 decoded was expected) by @Avarei [gardener/external-dns-management#347]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/external-dns-management#342]
## ✨ New Features

- `[USER]` [AWS Route53] Create an additional alias `AAAA` record for load balancers (NLBs) if load balancer target domain name has an IPv6 address. by @MartinWeindel [gardener/external-dns-management#341]
## 🏃 Others

- `[DEVELOPER]` Remove vendoring by @MartinWeindel [gardener/external-dns-management#345]
- `[OPERATOR]` Bumps golang from 1.21.4 to 1.21.5. by @dependabot[bot] [gardener/external-dns-management#338]
# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.85.0 to 1.86.0. by @MartinWeindel [#268]
- `[DEVELOPER]` Remove vendoring from project by @MartinWeindel [#268]

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.10</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.9...0.6.10

</details>
