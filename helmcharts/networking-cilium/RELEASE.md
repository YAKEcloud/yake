# [gardener/gardener-extension-networking-cilium]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#369]
## 🏃 Others

- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-cilium` Helm chart. by @timuthy [#362]
- `[OPERATOR]` Update cilium to `v1.16.1` and enable cilium-envoy to enable features like (Ingress, Gateway API, Network Policies with L7 functionality, L7 Protocol Visibility). by @DockToFuture [#409]
- `[OPERATOR]` The networking cilium extension no longer configures min/maxAllowed in any managed VPA resource. by @ScheererJ [#408]
- `[OPERATOR]` Update to cilium `v1.16.2`. by @DockToFuture [#411]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.37.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.37.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.37.0`
## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.37.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.37.0`
