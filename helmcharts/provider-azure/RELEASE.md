# [github.com/gardener/gardener-extension-provider-azure:v1.55.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Refactor Feature Gates specification for the provider-extesion helm chart. Operators need to specify their deployed feature gates with their canonical name. by @kon-angelo [[#1301](https://github.com/gardener/gardener-extension-provider-azure/pull/1301)]

## ✨ New Features
- `[OPERATOR]` This extension now supports `WorkloadIdentity`s as credentials for etcd backup. by @vpnachev [[#1265](https://github.com/gardener/gardener-extension-provider-azure/pull/1265)]

## 🏃 Others
- `[OPERATOR]` Update RBAC for extensions running in the runtime cluster. by @hebelsan [[#1266](https://github.com/gardener/gardener-extension-provider-azure/pull/1266)]
- `[OPERATOR]` Fix a bug that disabled subnet's default outbound access. by @kon-angelo [[#1290](https://github.com/gardener/gardener-extension-provider-azure/pull/1290)]
- `[OPERATOR]` Add advanced shoot input validation by @kon-angelo [[#1295](https://github.com/gardener/gardener-extension-provider-azure/pull/1295)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.55.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.55.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.55.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.55.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.55.0`
