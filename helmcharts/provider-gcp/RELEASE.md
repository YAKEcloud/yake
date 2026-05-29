# [github.com/gardener/gardener-extension-provider-gcp:v1.52.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer support Gardener installation running with `github.com/gardener/gardener < v1.135.0`, kindly update `github.com/gardener/gardener` to version `>= v1.135.0` before updating the extension. by @vpnachev [[#1410](https://github.com/gardener/gardener-extension-provider-gcp/pull/1410)]

## ✨ New Features
- `[OPERATOR]` Fix `NamespacedCloudProfile` admission to populate `capabilityFlavors` on spec machine images. by @Roncossek [[#1401](https://github.com/gardener/gardener-extension-provider-gcp/pull/1401)]
- `[USER]` The `InfrastructureConfig` API now supports an optional `networks.mtu` field (valid range: 1300–8896) to configure the maximum  transmission unit for Gardener-managed VPC networks. by @voelzmo [[#1399](https://github.com/gardener/gardener-extension-provider-gcp/pull/1399)]

## 🐛 Bug Fixes
- `[OPERATOR]` VPA for the extension pod now also controls CPU requests in addition to memory. The VPA container policy also explicitly disables  autoscaling for any non-main containers following Gardener best practices. by @voelzmo [[#1407](https://github.com/gardener/gardener-extension-provider-gcp/pull/1407)]

## 🏃 Others
- `[OPERATOR]` Fix controlplane-seed MR failing health checks if filestore is enabled by @hebelsan [[#1398](https://github.com/gardener/gardener-extension-provider-gcp/pull/1398)]
- `[DEVELOPER]` Enhance Makefile to easily deploy to a remote cluster. by @matthias-horne [[#1402](https://github.com/gardener/gardener-extension-provider-gcp/pull/1402)]
- `[DEPENDENCY]` The following container images have been updated:  
    - ingress-default-backend: 0.25.0 -> 0.26.0 (singleton)  
    - machine-controller-manager-provider-gcp: v0.27.0 -> v0.28.0 (singleton) by @federated-github-access[bot] [[#1406](https://github.com/gardener/gardener-extension-provider-gcp/pull/1406)]

## application/spdx+json
- gardener-extension-admission-gcp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:0d01c653c568dbf025c4ac42309a67bafe2e379c5ad847aa2723cd975a632720`
- gardener-extension-admission-gcp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:aa6fcb8376920a907a8cd2adaf9ec1d822f3e8fda5dd4e5fd5dda4202f8cf1d9`
- gardener-extension-provider-gcp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:8efd9c90e30aebda8ec0192feb39812199d8d3a24dca9ed141fa21adb171d8f2`
- gardener-extension-provider-gcp-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:caed58fd68fd5490979ecd01b4d85874e89b45b79c465fb7b633a0b6b669aa0f`
## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.52.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.52.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.52.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.52.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.52.0`
