# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` [alicloud-dns] Add support for weighted routing policy. More details see https://github.com/gardener/external-dns-management/tree/master/docs/alicloud-dns#routing-policy by @MartinWeindel [#461]
## 🐛 Bug Fixes

- `[USER]` Fix update of status for source `DNSEntries` if they are very old, as the heuristics for old entries without `generateName` field did not work. by @MartinWeindel [#466]
## 🏃 Others

- `[DEVELOPER]` cleanup: drop unused (and outdated) script by @ccwienk [#465]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.25.0`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.25.0`
