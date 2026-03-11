# [github.com/gardener/gardener-extension-shoot-networking-filter:v0.28.0]

## 🏃 Others
- `[OPERATOR]` Filter list secrets can be read from secrets in the shoot cluster. by @axel7born [[#335](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/335)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @ialidzhikov [[#325](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/325)]
- `[OPERATOR]` Hard resource limits are removed. by @domdom82 [[#330](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/330)]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.28.0`
- shoot-networking-filter-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-application:v0.28.0`
- shoot-networking-filter-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-runtime:v0.28.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.28.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-filter-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter-admission:v0.28.0`
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.28.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.28.0`
