# [gardener/gardener-extension-networking-calico]

## 🏃 Others

- `[OPERATOR]` Update calico to `v3.28.2`. by @DockToFuture [#492]
- `[OPERATOR]` Fix networkConfig for IPv6. by @axel7born [#486]
- `[OPERATOR]` In VPA autoscaling mode, `calico-node` should be disrupted less often as side car containers are no longer considered by VPA. Additionally, the minimum/maximum restriction are removed, which can lead to less memory consumption. by @ScheererJ [#489]
- `[OPERATOR]` The networking calico extension no longer configures min/maxAllowed in any managed VPA resource. by @ScheererJ [#491]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.42.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.42.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.42.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.42.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.42.0`
