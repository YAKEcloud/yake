# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Drop handling of DNSOwner by @MartinWeindel [#474]
# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` [alicloud-dns] Add support for weighted routing policy. More details see https://github.com/gardener/external-dns-management/tree/master/docs/alicloud-dns#routing-policy by @MartinWeindel [gardener/external-dns-management#461]
## 🐛 Bug Fixes

- `[USER]` Fix update of status for source `DNSEntries` if they are very old, as the heuristics for old entries without `generateName` field did not work. by @MartinWeindel [gardener/external-dns-management#466]
## 🏃 Others

- `[DEVELOPER]` cleanup: drop unused (and outdated) script by @ccwienk [gardener/external-dns-management#465]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.64.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.64.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.64.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.64.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.64.0`
