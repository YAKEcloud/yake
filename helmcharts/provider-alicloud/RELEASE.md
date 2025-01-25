# [gardener/terraformer]

## 🐛 Bug Fixes

- `[DEVELOPER]` Provider `azurerm` was updated to version 3.47.0 and is now properly recognising the `ARM_OIDC_TOKEN_FILE_PATH` env variable. by @dimityrmirchev [gardener/terraformer#156]
## 🏃 Others

- `[OPERATOR]` Update alpine to `v3.21.2` by @kon-angelo [gardener/terraformer#157]
- `[OPERATOR]` Update golang to `v1.23.5` by @kon-angelo [gardener/terraformer#157]
# [gardener/gardener-extension-provider-alicloud]

## 📰 Noteworthy

- `[USER]` The kube-system/csi-disk-plugin-alicloud DaemonSet is no longer scaled by a VerticalPodAutoscaler as it does not really benefit from it. Removing VerticalPodAutoscaler for that component will reduce unnecessary evictions by VPA and will be a mitigation for https://issues.k8s.io/126921. by @ialidzhikov [#750]
## 🏃 Others

- `[OPERATOR]` Update CSI image version by @kevin-lacoo [#757]
- `[OPERATOR]` Update `gardener/gardener` dependency to `v1.110.4` by @MartinWeindel [#756]
- `[OPERATOR]` The kube-system/csi-disk-plugin-alicloud DaemonSet does no longer specify resource limits. by @ialidzhikov [#750]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.58.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.58.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.58.0`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.58.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.58.0`
