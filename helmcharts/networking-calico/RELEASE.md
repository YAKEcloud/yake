# [gardener/gardener-extension-networking-calico]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#445]
## 🏃 Others

- `[OPERATOR]` Add static resource allocation autoscaling mode for calico node/typha (autoScaling.mode: static). by @ScheererJ [#464]
- `[OPERATOR]` The race between a calico-node instance shutting down and a new one coming up is mitigated by setting `NetworkUnavailable` condition properly some time after initialization. by @ScheererJ [#477]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.41.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.41.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.41.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.41.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.41.0`
