---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-metrics-exporter to <code>0.38.0</code></b></summary>

no release notes available

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.38.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.38.0</code></b></summary>

no release notes available

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.38.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.23.4</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Fix source controllers for source resources with very long names to avoid missing updates from the target `DNSEntries`. by @MartinWeindel [#440]
- `[OPERATOR]` Make stale status more robust for resolved targets on DNS server failure. by @MartinWeindel [#434]
## 🏃 Others

- `[OPERATOR]` Update base image from `debian11` to `debian12` by @MartinWeindel [#443]
- `[OPERATOR]` Drop obsolete permissions; delete obsolete cleanup of CRDs by @MartinWeindel [#445]
- `[OPERATOR]` [cloudflare provider] Fix for updating and deleting DNS records by @MartinWeindel [#433]
- `[OPERATOR]` Fix region for aws-route53 provider using webidentity by @MartinWeindel [#430]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.23.4`
## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.23.4`


</details>
