# [github.com/gardener/gardener-extension-registry-cache:v0.21.0]

## ✨ New Features
- `[USER]` The registry-mirror extension now supports registry-mirrors with a self-signed certificate. For more details, see [How to provide a certificate authority bundle for a private mirror?](https://github.com/gardener/gardener-extension-registry-cache/blob/v0.21.0/docs/usage/registry-mirror/ca-bundle-for-private-mirror.md). by @ialidzhikov [[#547](https://github.com/gardener/gardener-extension-registry-cache/pull/547)]

## 🐛 Bug Fixes
- `[OPERATOR]` The registry-cache-admission's validatingwebhookconfiguration is no longer leaking in the virtual cluster when the registry-cache operator.gardener.cloud/v1alpha1.Extension resource is deleted. by @ialidzhikov [[#550](https://github.com/gardener/gardener-extension-registry-cache/pull/550)]

## 🏃 Others
- `[OPERATOR]` The VerticalPodAutoscaler resources managed by the registry-cache extension are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @ialidzhikov [[#533](https://github.com/gardener/gardener-extension-registry-cache/pull/533)]

## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.21.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.21.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.21.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.21.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.21.0`
