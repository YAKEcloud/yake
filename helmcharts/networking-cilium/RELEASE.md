# [github.com/gardener/gardener-extension-networking-cilium:v1.44.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Adapt `ScrapeConfig` to more picky `prometheus-operator` `v0.76.0` to support new gardener releases. by @ScheererJ [[#631](https://github.com/gardener/gardener-extension-networking-cilium/pull/631)]

## 🏃 Others
- `[OPERATOR]` Mutate bind address for node-local-dns sidecar container. by @DockToFuture [[#642](https://github.com/gardener/gardener-extension-networking-cilium/pull/642)]
- `[OPERATOR]` Allows enabling policy audit mode in networking-cilium extension. by @steinwelberg [[#624](https://github.com/gardener/gardener-extension-networking-cilium/pull/624)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#635](https://github.com/gardener/gardener-extension-networking-cilium/pull/635)]
- `[USER]` An issue is fixed, that the cilium CA is never renewed. by @axel7born [[#639](https://github.com/gardener/gardener-extension-networking-cilium/pull/639)]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.44.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.44.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.44.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.44.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.44.0`
