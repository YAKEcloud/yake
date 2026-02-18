# [github.com/gardener/gardener-extension-registry-cache:v0.20.0]

## 🏃 Others
- `[OPERATOR]` Add missing `securityContext` fields to the registry-cache extension components in order to comply with the `restricted` Pod Security Standards policy. by @mstueer [[#473](https://github.com/gardener/gardener-extension-registry-cache/pull/473)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#531](https://github.com/gardener/gardener-extension-registry-cache/pull/531)]
- `[OPERATOR]` The registry image is now referred by digest instead of tag. The upstream image `docker.io/library/registry` (and later on `europe-docker.pkg.dev/gardener-project/releases/3rd/registry`) is (by design) rebuilt frequently. by @ialidzhikov [[#523](https://github.com/gardener/gardener-extension-registry-cache/pull/523)]
- `[DEVELOPER]` The base image of registry-cache components is updated to `gcr.io/distroless/static-debian13:nonroot`. by @ialidzhikov [[#505](https://github.com/gardener/gardener-extension-registry-cache/pull/505)]

## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.20.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.20.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.20.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.20.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.20.0`
