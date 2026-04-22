# [github.com/gardener/gardener-extension-networking-cilium:v1.47.0]

## 🏃 Others
- `[OPERATOR]` Hard resource limits have been removed except for Hubble which will be addressed in a future release. by @domdom82 [[#684](https://github.com/gardener/gardener-extension-networking-cilium/pull/684)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#679](https://github.com/gardener/gardener-extension-networking-cilium/pull/679)]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.47.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.47.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.47.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.47.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.47.0`
