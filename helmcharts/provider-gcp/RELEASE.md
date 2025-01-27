# [gardener/gardener-extension-provider-gcp]

## 📰 Noteworthy

- `[USER]` The kube-system/csi-driver-node DaemonSet is no longer scaled by a VerticalPodAutoscaler as it does not really benefit from it. Removing VerticalPodAutoscaler for that component will reduce unnecessary evictions by VPA and will be a mitigation for https://issues.k8s.io/126921. by @ialidzhikov [#929]
- `[OPERATOR]` Added support for immutable backup buckets in the GCP provider extension. Operators can configure immutability settings to enhance backup data security by preventing data alteration or deletion before the specified retention period. by @seshachalam-yv [#906]
## ✨ New Features

- `[OPERATOR]` Support specification of extended resources in provider config node template without re-specifying core resources. by @elankath [#889]
## 🐛 Bug Fixes

- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#942]
## 🏃 Others

- `[DEPENDENCY]` Update gardener to v1.110.0 by @hebelsan [#927]
- `[OPERATOR]` Validate that all images in cloudProfile map to a valid image in the cloudProfileConfig  by @hebelsan [#932]
# [gardener/machine-controller-manager-provider-gcp]

## 🏃 Others

- `[USER]` MCM provider GCP is able to provide the values for a `shieldedInstanceConfiguration` from a machineClass to the GCP API. by @MrBatschner [gardener/machine-controller-manager-provider-gcp#135]
- `[DEVELOPER]` The `gardener/machine-controller-manager` dependency has been updated to `v0.55.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.1) by @thiyyakat [gardener/machine-controller-manager-provider-gcp#134]
- `[DEVELOPER]` Added `gosec` for Static Application Security Testing (SAST). by @thiyyakat [gardener/machine-controller-manager-provider-gcp#134]
- `[DEVELOPER]` Updated go lang version to `1.23.3` by @thiyyakat [gardener/machine-controller-manager-provider-gcp#134]
# [gardener/terraformer]

## 🐛 Bug Fixes

- `[DEVELOPER]` Provider `azurerm` was updated to version 3.47.0 and is now properly recognising the `ARM_OIDC_TOKEN_FILE_PATH` env variable. by @dimityrmirchev [gardener/terraformer#156]
## 🏃 Others

- `[OPERATOR]` Update golang to `v1.23.5` by @kon-angelo [gardener/terraformer#157]
- `[OPERATOR]` Update alpine to `v3.21.2` by @kon-angelo [gardener/terraformer#157]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.42.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.42.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.42.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.42.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.42.0`
