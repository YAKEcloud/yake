# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` The extension and admission VerticalPodAutoscaler resources now by default specify `controlledValues: RequestsOnly`. This means that VPA scales only the requests and not the limits. Consider removing memory limits before upgrading to this version as VPA no longer by default scales limits proportionally to the requests. by @ialidzhikov [#636]
## 📰 Noteworthy

- `[OPERATOR]` Calico extension now supports a deny-all network policy within the kube-system namespace that [will come with kubernetes v1.33](https://github.com/gardener/gardener/pull/11502) by @domdom82 [#640]
## 🏃 Others

- `[OPERATOR]` `networking-calico` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#517]
- `[OPERATOR]` Write ipFamilies to network.Status instead of network providerStatus. by @axel7born [#632]
- `[OPERATOR]` Metrics and health ports can now be configured properly via the helm chart values. by @ScheererJ [#622]
- `[OPERATOR]` Add support for single-stack to dual-stack networking migration. by @axel7born [#615]
- `[OPERATOR]` The [`ServiceTrafficDistribution`](https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution) feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#568]
- `[OPERATOR]` Cleanup rbac permissions by @axel7born [#635]
- `[OPERATOR]` The networking-calico extension now uses the same helm values as the provider extensions. by @ScheererJ [#624]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#626]
- `[OPERATOR]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#634]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.48.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.48.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.48.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.48.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.48.0`
