---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.20.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` [azure-dns] Support for Azure cloud configurations `AzureChina` and `AzureGovernment` by @MartinWeindel [#379]
- `[OPERATOR]` Add ignore annotation `dns.gardener.cloud/ignore=true` for  `DNSEntries` and source resources to disable reconciliation temporarily. by @MartinWeindel [#380]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.20.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.50.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` [azure-dns] Support for Azure cloud configurations `AzureChina` and `AzureGovernment` by @MartinWeindel [gardener/external-dns-management#379]
- `[OPERATOR]` Add ignore annotation `dns.gardener.cloud/ignore=true` for  `DNSEntries` and source resources to disable reconciliation temporarily. by @MartinWeindel [gardener/external-dns-management#380]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.50.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.50.0`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.12</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.11...0.7.12

</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.19.0</code></b></summary>

# [gardener/gardener-extension-shoot-networking-filter]

## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.1 to 1.22.2. by @dependabot[bot] [#132]
- `[OPERATOR]` Bumps golang from 1.22.3 to 1.22.4. by @dependabot[bot] [#146]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.97.1 to 1.98.0. by @dependabot[bot] [#153]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.96.1 to 1.97.0. by @dependabot[bot] [#150]
- `[OPERATOR]` Bumps golang from 1.22.2 to 1.22.3. by @dependabot[bot] [#139]
- `[OPERATOR]` Bumps golang from 1.22.4 to 1.22.5. by @dependabot[bot] [#156]
- `[OPERATOR]` The `resources.requests.cpu` and `resources.requests.memory` of the `egress-filter-applier` container have been reduced to `5m` and `20Mi`, respectively. by @plkokanov [#160]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.93.0 to 1.94.0. by @dependabot[bot] [#137]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.98.0 to 1.99.0. by @dependabot[bot] [#158]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.94.0 to 1.95.0. by @dependabot[bot] [#140]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.92.0 to 1.93.0. by @dependabot[bot] [#135]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.95.0 to 1.96.1. by @dependabot[bot] [#145]
- `[OPERATOR]` Add OCM-Component-Descriptor-Labels required for ImageVector-Generation. by @ccwienk [#154]
# [gardener/egress-filter-refresher]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/egress-filter-refresher#25]

## Docker Images
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.19.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.19.0`


</details>
