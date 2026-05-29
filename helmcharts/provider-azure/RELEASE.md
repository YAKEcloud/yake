# [github.com/gardener/gardener-extension-provider-azure:v1.61.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer support Gardener installation running with `github.com/gardener/gardener < v1.135.0`, kindly update `github.com/gardener/gardener` to version `>= v1.135.0` before updating the extension. by @vpnachev [[#1545](https://github.com/gardener/gardener-extension-provider-azure/pull/1545)]
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @hebelsan [[#1535](https://github.com/gardener/gardener-extension-provider-azure/pull/1535)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix `NamespacedCloudProfile` admission to populate `capabilityFlavors` on spec machine images and allow expirationDate-only overrides of parent versions without requiring a providerConfig entry. by @Roncossek [[#1527](https://github.com/gardener/gardener-extension-provider-azure/pull/1527)]

## 🏃 Others
- `[OPERATOR]` Remedy-controller prometheus alerts are now disabled if the 'DisableRemedyController' feature gate is set by @AndreasBurger [[#1522](https://github.com/gardener/gardener-extension-provider-azure/pull/1522)]
- `[OPERATOR]` Updates gardener/gardener to v1.142.0 by @hebelsan [[#1535](https://github.com/gardener/gardener-extension-provider-azure/pull/1535)]
- `[DEVELOPER]` Enhance Makefile to easily deploy to a remote cluster. by @matthias-horne [[#1529](https://github.com/gardener/gardener-extension-provider-azure/pull/1529)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.32.16 -> v1.32.18 (patch)  
    - cloud-controller-manager: v1.33.11 -> v1.33.13 (patch)  
    - cloud-controller-manager: v1.34.8 -> v1.34.10 (patch)  
    - cloud-controller-manager: v1.35.3 -> v1.35.5 (patch)  
    - cloud-node-manager: v1.32.16 -> v1.32.18 (patch)  
    - cloud-node-manager: v1.33.11 -> v1.33.13 (patch)  
    - cloud-node-manager: v1.34.8 -> v1.34.10 (patch)  
    - cloud-node-manager: v1.35.3 -> v1.35.5 (patch)  
    - csi-driver-file: v1.35.2 -> v1.35.3 (singleton) by @federated-github-access[bot] [[#1541](https://github.com/gardener/gardener-extension-provider-azure/pull/1541)]

## application/spdx+json
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:0855c769f7501ccf272ea0d16c9888661c0f9f698d0b09659564af1d10ae4059`
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:c71387aac011d0879005938714009adc5dfdee500ce8ebee25df0720bc4f5401`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:3137ce9d6e28334616f52c343decb6b923cf5ccc018c0a96f64a89303968ecbc`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:ed3908ad349a97542b99f0ae69d6780472fa83edf0fadb96b7599b320fc07eda`
## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.61.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.61.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.61.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.61.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.61.0`
