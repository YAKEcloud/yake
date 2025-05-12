---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-cert-service to <code>1.50.1</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🐛 Bug Fixes

- `[USER]` Fix lookup of referenced secret for custom issuer in shoot manifest with `privateKeySecretName` specified. by `Martin Weindel <martin.weindel@sap.com>` [$282b42a2fc03b79fa1161fd3ff5a31894f72a801]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.50.1`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.50.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.118.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that prevented the cache Prometheus in a Gardener managed seed from scraping the cadvisor and kubelet metrics of the seed nodes, and hence the shoot control plane Plutono dashboards could not show e.g. the CPU usage of the control plane components. (part 2) by @istvanballok [#12049]
- `[OPERATOR]` An issue preventing vpa-updater to patch events when recording eviction event on VerticalPodAutoscaler resource is now fixed. by @ialidzhikov [#12035]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.0` to `1.80.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.1) by @gardener-ci-robot [#12042]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.118.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that prevented the cache Prometheus in a Gardener managed seed from scraping the cadvisor and kubelet metrics of the seed nodes, and hence the shoot control plane Plutono dashboards could not show e.g. the CPU usage of the control plane components. (part 2) by @istvanballok [#12049]
- `[OPERATOR]` An issue preventing vpa-updater to patch events when recording eviction event on VerticalPodAutoscaler resource is now fixed. by @ialidzhikov [#12035]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.0` to `1.80.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.1) by @gardener-ci-robot [#12042]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.118.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that prevented the cache Prometheus in a Gardener managed seed from scraping the cadvisor and kubelet metrics of the seed nodes, and hence the shoot control plane Plutono dashboards could not show e.g. the CPU usage of the control plane components. (part 2) by @istvanballok [#12049]
- `[OPERATOR]` An issue preventing vpa-updater to patch events when recording eviction event on VerticalPodAutoscaler resource is now fixed. by @ialidzhikov [#12035]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.80.0` to `1.80.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.1) by @gardener-ci-robot [#12042]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.1`


</details>
