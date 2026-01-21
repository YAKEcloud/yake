# [github.com/gardener/gardener-extension-networking-cilium:v1.46.0]

## ✨ New Features
- `[USER]` Allow configuration of Cilium's wireguard encryption by @hown3d [[#654](https://github.com/gardener/gardener-extension-networking-cilium/pull/654)]

## 🏃 Others
- `[OPERATOR]` Update `node-local-dns` mutate function to init sidecar approach. by @DockToFuture [[#661](https://github.com/gardener/gardener-extension-networking-cilium/pull/661)]
- `[OPERATOR]` Update cilium to `v1.17.11`. by @DockToFuture [[#667](https://github.com/gardener/gardener-extension-networking-cilium/pull/667)]
- `[OPERATOR]` Increased backoff limit of hubble-generate-certs job. by @axel7born [[#651](https://github.com/gardener/gardener-extension-networking-cilium/pull/651)]
- `[OPERATOR]` Update `cilium-cli` image ref to `europe-docker.pkg.dev/gardener-project/releases/gardener/cilium-cli:1.11.0`. by @DockToFuture [[#668](https://github.com/gardener/gardener-extension-networking-cilium/pull/668)]
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#666](https://github.com/gardener/gardener-extension-networking-cilium/pull/666)]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.46.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.46.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.46.0`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.46.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.46.0`
