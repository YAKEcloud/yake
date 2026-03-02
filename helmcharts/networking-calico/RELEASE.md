# [github.com/gardener/gardener-extension-networking-calico:v1.57.0]

## 🏃 Others
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#786](https://github.com/gardener/gardener-extension-networking-calico/pull/786)]
- `[OPERATOR]` Hard resource limits have been removed. Resources will be managed by various available autoscalers. by @domdom82 [[#792](https://github.com/gardener/gardener-extension-networking-calico/pull/792)]
- `[OPERATOR]` Added validation to restrict calico-ipam to IPv4 single-stack shoots only by @axel7born [[#796](https://github.com/gardener/gardener-extension-networking-calico/pull/796)]
- `[OPERATOR]` A bug has been resolved that prevented the correct configuration of the default IP Pool for IPv6. by @axel7born [[#795](https://github.com/gardener/gardener-extension-networking-calico/pull/795)]
- `[OPERATOR]` Added `SeamlessOverlaySwitch` feature gate (alpha) to prevent network disruption when switching Calico from overlay (IPIP) to non-overlay mode. When enabled, the extension validates that cloud provider routes are created on all nodes before disabling overlay networking, ensuring zero-downtime network transitions. The feature gate is disabled by default and can be enabled via the controller configuration. by @DockToFuture [[#779](https://github.com/gardener/gardener-extension-networking-calico/pull/779)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.57.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.57.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.57.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.57.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.57.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.57.0`
