# [github.com/gardener/gardener-extension-networking-calico:v1.53.0]

## 🏃 Others
- `[OPERATOR]` Reduced size of the cni-plugins container image significantly. by @ScheererJ [[#744](https://github.com/gardener/gardener-extension-networking-calico/pull/744)]
- `[OPERATOR]` `calico-node` should not longer bind to the `kube-proxy` healthz port if used in ebpf mode and `kube-proxy` is enabled. by @ScheererJ [[#732](https://github.com/gardener/gardener-extension-networking-calico/pull/732)]
- `[OPERATOR]` Calico clusters will now report MTU issues to the kernel log using a PACKET-TOO-BIG prefix. by @domdom82 [[#741](https://github.com/gardener/gardener-extension-networking-calico/pull/741)]
- `[OPERATOR]` Add missing securityContext controls in order to comply with the restricted Pod Security Standards policy. by @mstueer [[#715](https://github.com/gardener/gardener-extension-networking-calico/pull/715)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.53.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.53.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.53.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.53.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.53.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.53.0`
