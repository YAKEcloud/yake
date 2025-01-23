# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Add support for switching the `dns-controller-manager` image. by @marc1404 [#421]
# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[USER]` The creation and management of metadata DNS records holding the owner identifier for each `DNSEntry` has been removed. These metadata DNS records will be removed automatically.  
  For more details, please see https://github.com/gardener/external-dns-management/tree/master?tab=readme-ov-file#important-note-support-for-owner-identifiers-is-discontinued by @MartinWeindel [gardener/external-dns-management#403]
## 🐛 Bug Fixes

- `[OPERATOR]` Ignore TTL on comparing alias records for remote provider by @MartinWeindel [gardener/external-dns-management#411]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.57.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.57.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.57.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.57.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.57.0`
