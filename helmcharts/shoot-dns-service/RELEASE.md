# [github.com/gardener/gardener-extension-shoot-dns-service:v1.81.0]

## 🐛 Bug Fixes
- `[OPERATOR]` The shoot-dns-service-admission's validatingwebhookconfiguration is no longer leaking in the virtual cluster when the shoot-dns-service operator.gardener.cloud/v1alpha1.Extension resource is deleted. by @MartinWeindel [[#689](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/689)]

# [github.com/gardener/external-dns-management:v0.38.0]

## 🐛 Bug Fixes
- `[OPERATOR]` [remote provider]: Set `MaxCallRecvMsgSize` for `getZoneState` from default of 4MB to `16 MB` by @MartinWeindel [[#830](https://github.com/gardener/external-dns-management/pull/830)]

# [github.com/gardener/external-dns-management:v0.39.0]

## ✨ New Features
- `[OPERATOR]` Add optional entries quota enforcement per provider by @MartinWeindel [[#840](https://github.com/gardener/external-dns-management/pull/840)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.81.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.81.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.81.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.81.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.81.0`
