# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Conditional deploy of CRDs on shoot. by @MartinWeindel [#369]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.100.0 to 1.101.0. by @dependabot[bot] [#365]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.101.0 to 1.102.0. by @dependabot[bot] [#372]
# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Drop support for custom resources `dnslock.dns.gardener.cloud` and `remoteaccesscertificates.dns.gardener.cloud`.  
  As these experimental features have no been used in Gardener, it should not be relevant in most cases. by @MartinWeindel [gardener/external-dns-management#381]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.6 to 1.23.0. by @dependabot[bot] [gardener/external-dns-management#384]
- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [gardener/external-dns-management#383]
- `[OPERATOR]` The dependency controller-manager-library has been updated to include the new flag `--<cluster>.conditional-deploy-crds` by @MartinWeindel [gardener/external-dns-management#385]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.52.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.52.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.52.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.52.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.52.0`
