# [github.com/gardener/gardener-extension-networking-calico:v1.51.0]

## 🏃 Others
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-networking-calico/blob/master/example/extension.yaml) by @timuthy [[#706](https://github.com/gardener/gardener-extension-networking-calico/pull/706)]
- `[OPERATOR]` A background script in the calico-node pod now properly reacts to SIGTERM allowing for faster node reboots. by @MrBatschner [[#710](https://github.com/gardener/gardener-extension-networking-calico/pull/710)]
- `[OPERATOR]` `bird-exporter` sidecar added to `calico-node` DaemonSet to export `bird` metrics into Prometheus by @videlov [[#687](https://github.com/gardener/gardener-extension-networking-calico/pull/687)]
- `[OPERATOR]` calico is updated to v3.30.3 by @axel7born [[#691](https://github.com/gardener/gardener-extension-networking-calico/pull/691)]


## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.51.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.51.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.51.0`
## Container (OCI) Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.51.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.51.0`
