# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Drop support for custom resources `dnslock.dns.gardener.cloud` and `remoteaccesscertificates.dns.gardener.cloud`.  
  As these experimental features have no been used in Gardener, it should not be relevant in most cases. by @MartinWeindel [#381]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.6 to 1.23.0. by @dependabot[bot] [#384]
- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [#383]
- `[OPERATOR]` The dependency controller-manager-library has been updated to include the new flag `--<cluster>.conditional-deploy-crds` by @MartinWeindel [#385]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.21.0`
