# [github.com/gardener/gardener-extension-networking-cilium:v1.43.0]

## 🏃 Others
- `[OPERATOR]` A background script in the cilium agent pod now properly reacts to SIGTERM allowing for faster node reboots. by @ScheererJ [[#629](https://github.com/gardener/gardener-extension-networking-cilium/pull/629)]
- `[OPERATOR]` Update cilium to v1.17.7 by @gardener-ci-robot [[#621](https://github.com/gardener/gardener-extension-networking-cilium/pull/621)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-networking-cilium/blob/master/example/extension.yaml) by @timuthy [[#623](https://github.com/gardener/gardener-extension-networking-cilium/pull/623)]
- `[OPERATOR]` Cilium extension now works with worker pool specific node-local-dns daemonsets. by @ScheererJ [[#622](https://github.com/gardener/gardener-extension-networking-cilium/pull/622)]


## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.43.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.43.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.43.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.43.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.43.0`
