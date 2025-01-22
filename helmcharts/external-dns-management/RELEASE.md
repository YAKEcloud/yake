# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[USER]` The creation and management of metadata DNS records holding the owner identifier for each `DNSEntry` has been removed. These metadata DNS records will be removed automatically.  
  For more details, please see https://github.com/gardener/external-dns-management/tree/master?tab=readme-ov-file#important-note-support-for-owner-identifiers-is-discontinued by @MartinWeindel [#403]
## 🐛 Bug Fixes

- `[OPERATOR]` Ignore TTL on comparing alias records for remote provider by @MartinWeindel [#411]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.23.0`
## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.23.0`
