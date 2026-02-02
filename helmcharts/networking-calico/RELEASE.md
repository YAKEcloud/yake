# [github.com/gardener/gardener-extension-networking-calico:v1.56.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Multus with additional CNI plugins enabled should now also work without specifying an image vector override for the extension. by @ScheererJ [[#778](https://github.com/gardener/gardener-extension-networking-calico/pull/778)]

## 🏃 Others
- `[OPERATOR]` If `calico-node` is automatically scaled by VPA and a minimum amount of resources are specified, the daemonset reflects the specified values to not confuse cluster autoscaling components. by @ScheererJ [[#771](https://github.com/gardener/gardener-extension-networking-calico/pull/771)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.56.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.56.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.56.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.56.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.56.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.56.0`
