# [github.com/gardener/gardener-extension-networking-calico:v1.52.0]

## 🏃 Others
- `[OPERATOR]` Add `multus-cni` DaemonSet to enable attaching multiple network interfaces to pods by @defo89 [[#719](https://github.com/gardener/gardener-extension-networking-calico/pull/719)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#723](https://github.com/gardener/gardener-extension-networking-calico/pull/723)]
- `[OPERATOR]` `minAllowed` can now be specified if the autoscaling mode `vpa` is used. by @ScheererJ [[#729](https://github.com/gardener/gardener-extension-networking-calico/pull/729)]

## 📖 Documentation
- `[OPERATOR]` fix vethMTU example by @RiRa12621 [[#718](https://github.com/gardener/gardener-extension-networking-calico/pull/718)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.52.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.52.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.52.0`
## Container (OCI) Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.52.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.52.0`
