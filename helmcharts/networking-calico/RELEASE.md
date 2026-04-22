# [github.com/gardener/gardener-extension-networking-calico:v1.58.0]

## ✨ New Features
- `[OPERATOR]` Added ability to configure calico service loop prevention behavior by @adziauho [[#806](https://github.com/gardener/gardener-extension-networking-calico/pull/806)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix eviction of typha pod by cluster autoscaler if scaling down from 2 nodes. by @wpross [[#807](https://github.com/gardener/gardener-extension-networking-calico/pull/807)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.58.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.58.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.58.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.58.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.58.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.58.0`
