# [gardener/gardener-extension-networking-cilium]

## ⚠️ Breaking Changes

- `[OPERATOR]` The extension and admission VerticalPodAutoscaler resources now by default specify `controlledValues: RequestsOnly`. This means that VPA scales only the requests and not the limits. Consider removing memory limits before upgrading to this version as VPA no longer by default scales limits proportionally to the requests. by @ialidzhikov [#553]
## 📰 Noteworthy

- `[OPERATOR]` Cilium extension now supports a deny-all network policy within the kube-system namespace that [will come with kubernetes v1.33](https://github.com/gardener/gardener/pull/11502) by @domdom82 [#546]
## 🏃 Others

- `[OPERATOR]` Cleanup rbac permissions. by @axel7born [#552]
- `[OPERATOR]` The networking-cilium extension now uses the same helm values as the provider extensions. by @ScheererJ [#547]
- `[OPERATOR]` The [`ServiceTrafficDistribution`](https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution) feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#479]
- `[OPERATOR]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#551]
- `[OPERATOR]` Update base image from `debian11` to `debian12` by @MartinWeindel [#548]
- `[OPERATOR]` Metrics and health ports can now be configured properly via the helm chart values. by @ScheererJ [#543]
- `[OPERATOR]` `networking-cilium` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#431]
- `[OPERATOR]` Add support for single-stack to dual-stack networking migration. by @DockToFuture [#539]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.41.0`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.41.0`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.41.0`
## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.41.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.41.0`
