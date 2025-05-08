---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-metrics-exporter to <code>0.38.0</code></b></summary>

no release notes available

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.38.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.38.0</code></b></summary>

no release notes available

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.38.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.23.4</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Fix source controllers for source resources with very long names to avoid missing updates from the target `DNSEntries`. by @MartinWeindel [#440]
- `[OPERATOR]` Make stale status more robust for resolved targets on DNS server failure. by @MartinWeindel [#434]
## 🏃 Others

- `[OPERATOR]` Update base image from `debian11` to `debian12` by @MartinWeindel [#443]
- `[OPERATOR]` Drop obsolete permissions; delete obsolete cleanup of CRDs by @MartinWeindel [#445]
- `[OPERATOR]` [cloudflare provider] Fix for updating and deleting DNS records by @MartinWeindel [#433]
- `[OPERATOR]` Fix region for aws-route53 provider using webidentity by @MartinWeindel [#430]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.23.4`
## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.23.4`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.20.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## 🏃 Others

- `[OPERATOR]` NVIDIA GPU support can be enabled by specifying `nvproxy: "true` in the gVisor providerConfig. by @Roncossek [#205]
- `[OPERATOR]` Fixed an issue where the migrate phase of control plane migration could become stuck. This was caused by ManagedResources associated with the `gvisor` extension not being properly handled deleted during the migration. by @plkokanov [#209]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.20.0`
## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.20.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.20.0`


</details>

<details>
<summary><b>Update garden-kube-apiserver to <code>5.6.2</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/garden-kube-apiserver/compare/v5.6.1...v5.6.2

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.25</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.24...0.7.25

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.63.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Add `patch` verb for the `gardener-extension-heartbeat` resource in the RBAC rules by @MartinWeindel [#465]
- `[OPERATOR]` Cleanup permissions for deleting outdated CRDs by @MartinWeindel [#464]
- `[OPERATOR]` The [`ServiceTrafficDistribution`](https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution) feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#424]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#454]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#460]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.63.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.63.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.63.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.63.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.63.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.117.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug which might lead to a crash loop backoff of `gardener-controller-manager` when removing legacy seeds labels has been fixed. by @oliver-goetz [#11928]
## 🏃 Others

- `[OPERATOR]` Fix an issue where envoy filters to handle proxy-protocol are not deployed, even if configured for istio load-balancers. by @axel7born [#11919]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.117.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug which might lead to a crash loop backoff of `gardener-controller-manager` when removing legacy seeds labels has been fixed. by @oliver-goetz [#11928]
## 🏃 Others

- `[OPERATOR]` Fix an issue where envoy filters to handle proxy-protocol are not deployed, even if configured for istio load-balancers. by @axel7born [#11919]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.117.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug which might lead to a crash loop backoff of `gardener-controller-manager` when removing legacy seeds labels has been fixed. by @oliver-goetz [#11928]
## 🏃 Others

- `[OPERATOR]` Fix an issue where envoy filters to handle proxy-protocol are not deployed, even if configured for istio load-balancers. by @axel7born [#11919]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.1`


</details>

<details>
<summary><b>Update networking-calico to <code>1.48.0</code></b></summary>

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


</details>

<details>
<summary><b>Update networking-cilium to <code>1.41.0</code></b></summary>

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


</details>

<details>
<summary><b>Update networking-calico to <code>1.48.1</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue preventing the networking-calico extension to patch its heartbeat lease is now fixed. by @axel7born [#646]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.48.1`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.48.1`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.48.1`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.48.1`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.48.1`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.41.1</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue preventing the networking-cilium extension to patch its heartbeat lease is now fixed. by @axel7born [#560]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.41.1`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.41.1`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.41.1`
## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.41.1`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.41.1`


</details>

<details>
<summary><b>Update provider-azure to <code>1.52.2</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[USER]` Update CCM image from 1.32.0 to 1.32.4 to prevent crashes if cloud is set to AZURECHINACLOUD by @hebelsan [#1159]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.52.2`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.52.2`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.52.2`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.52.2`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.52.2`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.23.0</code></b></summary>

# [gardener/gardener-extension-shoot-networking-filter]

## 🏃 Others

- `[OPERATOR]` cleanup rbac permissions by @axel7born [#227]
- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#206]
- `[OPERATOR]` `extension-shoot-networking-filter` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#188]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#225]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#223]
- `[OPERATOR]` Add `patch` verb for the `gardener-extension-heartbeat` resource in the RBAC rules by @MartinWeindel [#229]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.23.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.23.0`
## Docker Images
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.23.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.23.0`


</details>

<details>
<summary><b>Update cert-management to <code>0.17.6</code></b></summary>

# [gardener/cert-management]

## 🐛 Bug Fixes

- `[OPERATOR]` fix: ClusterRole needs dnsrecord permissions when issuerUseDnsrecords is true by @matthias-horne [#460]
- `[USER]` Fixed key algorithm and bit size in self-signed certificates from a CA issuer. by @marc1404 [#451]
## 🏃 Others

- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#468]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#456]
- `[OPERATOR]` Add condition for deployment of CRDs in Helm charts by @MartinWeindel [#447]
## 📖 Documentation

- `[USER]` Replaced usages of `secretName` in the `Certificate` spec with `secretRef`. by @marc1404 [#438]
- `[USER]` Added documentation for triggering a manual `Certificate` renewal. by @marc1404 [#443]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.17.6`
## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.17.6`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.50.0</code></b></summary>

# [gardener/cert-management]

## 🐛 Bug Fixes

- `[USER]` Fixed key algorithm and bit size in self-signed certificates from a CA issuer. by @marc1404 [gardener/cert-management#451]
- `[OPERATOR]` fix: ClusterRole needs dnsrecord permissions when issuerUseDnsrecords is true by @matthias-horne [gardener/cert-management#460]
## 🏃 Others

- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [gardener/cert-management#468]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [gardener/cert-management#456]
- `[OPERATOR]` Add condition for deployment of CRDs in Helm charts by @MartinWeindel [gardener/cert-management#447]
## 📖 Documentation

- `[USER]` Added documentation for triggering a manual `Certificate` renewal. by @marc1404 [gardener/cert-management#443]
- `[USER]` Replaced usages of `secretName` in the `Certificate` spec with `secretRef`. by @marc1404 [gardener/cert-management#438]
# [gardener/gardener-extension-shoot-cert-service]

## 📰 Noteworthy

- `[OPERATOR]` Support for deploying the shoot-cert-service extension on the Garden runtime cluster. For runtime and seed clusters separate `cert-controller-manager` deployments can be triggered by `extensions.extensions.gardener.cloud` resources. by @MartinWeindel [#357]
## 🏃 Others

- `[OPERATOR]` Add `patch` verb for the `gardener-extension-heartbeat` resource in the RBAC rules by @MartinWeindel [#394]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#362]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.50.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.50.0`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.30.0</code></b></summary>

# [gardener/gardener-extension-os-gardenlinux]

## ⚠️ Breaking Changes

- `[USER]` The os-gardenlinux extension does no longer enable and restart the `docker` unit as part of the init OperatingSystemConfig. If you, as end user, rely on the docker unit to be enabled by default on the Node, this is a breaking change for you. In such case, you would need to enable the docker unit on your own.  
  Pay attention that [gardenlinux@1443.1+](https://github.com/gardenlinux/gardenlinux/releases/tag/1443.1) no longer includes the `docker` binary unit in the OS. by @Kostov6 [#221]
## 🏃 Others

- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#242]
- `[OPERATOR]` The os-gardenlinux extension does no longer enable and restart the `docker` unit as part of the init OperatingSystemConfig. Gardener and Kubernetes does no longer support `docker` as CRI. Gardener does no longer rely on the `docker` binary to be present on the Nodes. [gardenlinux@1443.1+](https://github.com/gardenlinux/gardenlinux/releases/tag/1443.1) no longer includes the `docker` binary unit in the OS. by @Kostov6 [#221]
- `[OPERATOR]` Limit RBAC verbs for `cluster` resource and remove obsolete `configmap` rules by @Roncossek [#253]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#243]
- `[OPERATOR]` `extension-os-gardenlinux` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#207]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.30.0`
## Docker Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.30.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.117.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that prevented the cache Prometheus in a Gardener managed seed from scraping the cadvisor and kubelet metrics of the seed nodes, and hence the shoot control plane Plutono dashboards could not show e.g. the CPU usage of the control plane components. by @istvanballok [#11969]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.117.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that prevented the cache Prometheus in a Gardener managed seed from scraping the cadvisor and kubelet metrics of the seed nodes, and hence the shoot control plane Plutono dashboards could not show e.g. the CPU usage of the control plane components. by @istvanballok [#11969]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.117.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix a regression that prevented the cache Prometheus in a Gardener managed seed from scraping the cadvisor and kubelet metrics of the seed nodes, and hence the shoot control plane Plutono dashboards could not show e.g. the CPU usage of the control plane components. by @istvanballok [#11969]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.2`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.41.2</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## 📰 Noteworthy

- `[DEPENDENCY]` cilium-envoy got updated to v1.32.5 by @domdom82 [#562]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.41.2`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.41.2`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.41.2`
## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.41.2`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.41.2`


</details>

<details>
<summary><b>Update dashboard to <code>1.80.0</code></b></summary>

# [gardener/dashboard]

## ✨ New Features

- `[OPERATOR]` Added support for kubeconfigs that include a path in the API server URL by @grolu [#2368]
- `[USER]` CredentialsBinding Support  
  - Support viewing, editing, and creating `CredentialsBindings` referencing `Secrets`  
  - New `Secrets` are now automatically created with a `CredentialsBinding`  
  - Existing `SecretBindings` remain updatable; however, creating new `SecretBindings` via the Dashboard is no longer supported  
  - `CredentialsBindings` referencing `WorkloadIdentity` resources are visible (for cluster creation) but cannot be edited or deleted (yet)  
  - The "Secrets" page has been renamed to "Credentials" and now includes an extra "Kind" column to differentiate `Binding` types. The "Secret" column (showing the referenced credential resource name) has been removed  
  - A hint is displayed when a `Secret` is referenced by another `Binding`, and deletion is prevented if a secret is in use.  
  - Refactored the credential selection dropdown, aligned icons with "Credentials" page by @grolu [#2336]
- `[USER]` Kubernetes warning notifications are dismissed after 5 seconds by @petersutter [#2330]
- `[USER]` Implemented virtual scrolling for the cluster list. Rows are now rendered dynamically as you scroll, replacing the previous paging option. This improvement optimizes performance and provides a smoother browsing experience when viewing large data sets by @grolu [#1674]
- `[USER]` When editing an existing secret, the dialog now displays all associated data, providing clear context for review and modification by @grolu [#2195]
- `[USER]` Notifications will remain visible as long as the mouse hovers over them, rather than disappearing after 5 seconds. by @petersutter [#2280]
- `[USER]` Real-time updates for projects are now supported. Changes and deletions to projects are instantly reflected in the frontend through the WebSocket connection. by @holgerkoser [#2222]
## 🐛 Bug Fixes

- `[USER]` Minor icon fixes:  
  - Fixed the issue where the connection icon was missing in the subscription progress state  
  - Corrected the generic "box icon" tooltip  
  - A tooltip is now displayed for the subscription state icon by @petersutter [#2331]
- `[USER]` Fixed missing details on error notification by @petersutter [#2280]
- `[USER]` Fixed a couple of issues related to CodeMirror state handling:  
  - Toggling managed fields only works once #2249  
  - Unsaved changes dialog appears though changes were saved #2355  
  - History not reseted correctly after changes were saved  
  - Enter key falls back to default behavior if code completions fail to load by @grolu [#2361]
- `[USER]` Added PowerDNS support by @Lappihuan [#2349]
- `[USER]` Fixed several issues with Create Terminal Dialog:  
  - Disable terminal scheduling on non-managed seeds  
  - Added error handling in case cluster nodes cannot be retrieved  
  - Moved alerts from scrollable container to fixed position to make them always visible by @grolu [#2373]
- `[USER]` The generated kubeconfig for garden cluster access (Account page) previously used the deprecated `--oidc-use-pkce` flag. It has now been replaced with the `--oidc-pkce-method` flag. Please redownload your kubeconfig if you encounter any deprecation messages. by @benedikt-haug [#2353]
- `[USER]` Fixed missing terminal shortcuts for "shoot" and "cp" scopes by @Lappihuan [#2339]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.80.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.80.0</code></b></summary>

# [gardener/dashboard]

## ✨ New Features

- `[OPERATOR]` Added support for kubeconfigs that include a path in the API server URL by @grolu [#2368]
- `[USER]` CredentialsBinding Support  
  - Support viewing, editing, and creating `CredentialsBindings` referencing `Secrets`  
  - New `Secrets` are now automatically created with a `CredentialsBinding`  
  - Existing `SecretBindings` remain updatable; however, creating new `SecretBindings` via the Dashboard is no longer supported  
  - `CredentialsBindings` referencing `WorkloadIdentity` resources are visible (for cluster creation) but cannot be edited or deleted (yet)  
  - The "Secrets" page has been renamed to "Credentials" and now includes an extra "Kind" column to differentiate `Binding` types. The "Secret" column (showing the referenced credential resource name) has been removed  
  - A hint is displayed when a `Secret` is referenced by another `Binding`, and deletion is prevented if a secret is in use.  
  - Refactored the credential selection dropdown, aligned icons with "Credentials" page by @grolu [#2336]
- `[USER]` Kubernetes warning notifications are dismissed after 5 seconds by @petersutter [#2330]
- `[USER]` Implemented virtual scrolling for the cluster list. Rows are now rendered dynamically as you scroll, replacing the previous paging option. This improvement optimizes performance and provides a smoother browsing experience when viewing large data sets by @grolu [#1674]
- `[USER]` When editing an existing secret, the dialog now displays all associated data, providing clear context for review and modification by @grolu [#2195]
- `[USER]` Notifications will remain visible as long as the mouse hovers over them, rather than disappearing after 5 seconds. by @petersutter [#2280]
- `[USER]` Real-time updates for projects are now supported. Changes and deletions to projects are instantly reflected in the frontend through the WebSocket connection. by @holgerkoser [#2222]
## 🐛 Bug Fixes

- `[USER]` Minor icon fixes:  
  - Fixed the issue where the connection icon was missing in the subscription progress state  
  - Corrected the generic "box icon" tooltip  
  - A tooltip is now displayed for the subscription state icon by @petersutter [#2331]
- `[USER]` Fixed missing details on error notification by @petersutter [#2280]
- `[USER]` Fixed a couple of issues related to CodeMirror state handling:  
  - Toggling managed fields only works once #2249  
  - Unsaved changes dialog appears though changes were saved #2355  
  - History not reseted correctly after changes were saved  
  - Enter key falls back to default behavior if code completions fail to load by @grolu [#2361]
- `[USER]` Added PowerDNS support by @Lappihuan [#2349]
- `[USER]` Fixed several issues with Create Terminal Dialog:  
  - Disable terminal scheduling on non-managed seeds  
  - Added error handling in case cluster nodes cannot be retrieved  
  - Moved alerts from scrollable container to fixed position to make them always visible by @grolu [#2373]
- `[USER]` The generated kubeconfig for garden cluster access (Account page) previously used the deprecated `--oidc-use-pkce` flag. It has now been replaced with the `--oidc-pkce-method` flag. Please redownload your kubeconfig if you encounter any deprecation messages. by @benedikt-haug [#2353]
- `[USER]` Fixed missing terminal shortcuts for "shoot" and "cp" scopes by @Lappihuan [#2339]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.80.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.31.0</code></b></summary>

# [gardener/gardener-extension-os-ubuntu]

## 🏃 Others

- `[OPERATOR]` Fix broken `make start` in Makefile, remove `.dev/kubeconfig` reference in README by @robinschneider [#199]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.31.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.31.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.21.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## 🏃 Others

- `[OPERATOR]` Remove unused RBAC rules by @Roncossek [#213]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.21.0`
## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.21.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.21.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.118.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `Seed` API field `spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.backup.credentialsRef`, please adapt your seed manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` Gardener no longer sets the flags `--audit-log-(path|maxsize|maxbackups)` on shoot `kube-apiserver`s, `gardener-apiserver` or Garden's `virtual-garden-kube-apiserver`. If you rely on the audit logs being available in the file `/tmp/audit/audit.log` in the container's file system, please follow [controlplane-webhooks](https://github.com/gardener/gardener/blob/master/docs/extensions/controlplane-webhooks.md#kube-apiserver) and set the required flags via mutating webhook.  by @vpnachev [#11935]
- `[OPERATOR]` The `ManagedSeed` API field `spec.gardenlet.config.seedConfig.spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`, please adapt your managedseed manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` The legacy `support.gardener.cloud/eu-access*` labels and annotations on `CloudProfile`s and `Seed`s are no longer synced automatically. You have to use the new API established in Gardener v1.107 (released in 11/2024). Read more about it [here](https://gardener.cloud/docs/gardener/shoot/access_restrictions/). Please make sure to manually remove these labels and annotations from your `CloudProfile`s and `Seed`s! by @rfranzke [#11913]
- `[OPERATOR]` The `Gardenlet` API field `spec.config.seedConfig.spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.config.seedConfig.spec.backup.credentialsRef`, please adapt your gardenlet manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` The `GardenletConfiguration` configuration file field `seedConfig.spec.backup.secretRef` has been deprecated and will be removed in future version of Gardener in favor of `seedConfig.spec.backup.credentialsRef`, please adapt your `GardenletConfiguration` configuration files to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[USER]` The legacy `support.gardener.cloud/eu-access*` labels and annotations on `Shoot`s are no longer synced automatically. You have to use the new API established in Gardener v1.107 (released in 11/2024). Read more about it [here](https://gardener.cloud/docs/gardener/shoot/access_restrictions/#shoot). Please make sure to manually remove these labels and annotations from your `Shoot`s! by @rfranzke [#11913]
## 📰 Noteworthy

- `[USER]` The CA bundle of the kubelet is now available via a `ConfigMap` the project's namespace, called `<shoot-name>.ca-kubelet`. by @tobschli [#11916]
## ✨ New Features

- `[USER]` The [Stale Project Controller](https://gardener.cloud/docs/gardener/concepts/controller-manager/#stale-projects-reconcilerhttpsgithubcomgardenergardenertreemasterpkgcontrollermanagercontrollerprojectstale) now also considers `WorkloadIdentity` resources when deciding if a `Project` is stale or not. by @dimityrmirchev [#11962]
- `[OPERATOR]` Gardener core components are automatically restarted (due to a failing liveness probe) in case their Kubernetes API server watch caches do not sync for `3m`. by @rfranzke [#11966]
- `[OPERATOR]` The `Seed` API feature new field `spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` Add alpha feature gate `CloudProfileCapabilities` to enable usage of `architecture` capability instead of current architecture fields in machine images and types. by @LucaBernstein [#11736]
- `[OPERATOR]` The `GardenletConfiguration` configuration file feature new field `seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` The `ManagedSeed` API feature new field `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` The `Gardenlet` API feature new field `spec.config.seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
## 🐛 Bug Fixes

- `[OPERATOR]` The gardenlet deployer would not try to copy the shoot infrastructure secret for seed backup credentials if the shoot uses workload identity. by @dimityrmirchev [#11983]
- `[DEVELOPER]` The `DumpLogsForPodsWithLabelsInNamespace` function in the test framework now supports dumping pods with multiple containers. by @domdom82 [#11878]
## 🏃 Others

- `[OPERATOR]` Virtual extended resources can now be set on the NodeTemplate without triggering rollout by @elankath [#11809]
- `[OPERATOR]` The `gardener/autoscaler` image has been updated to `v1.32.0`. [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.32.0) by @marc1404 [#11903]
- `[OPERATOR]` The etcd-druid component no longer defines resource limits. by @ialidzhikov [#11973]
- `[OPERATOR]` Fixed an issue, where IPv6 shoots without configured pod and service ranges can't be scheduled on seeds without configured shootDefaults. by @axel7born [#11955]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.19.0` to `v0.19.1`.  by @gardener-ci-robot [#11941]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.29.0` to `v0.29.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.29.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.29.0` to `v0.29.1`.  by @gardener-ci-robot [#11940]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.1` to `v1.12.2`.  by @gardener-ci-robot [#11981]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.79.1` to `1.80.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.0) by @gardener-ci-robot [#11976]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.5` to `v1.11.6`.  by @gardener-ci-robot [#11968]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ingress-default-backend` from `0.22.0` to `0.23.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.23.0) by @gardener-ci-robot [#11948]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.2` to `v0.58.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.58.0)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.2` to `v0.58.0`.  by @gardener-ci-robot [#11963]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.33.2` to `v1.34.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.0) by @gardener-ci-robot [#11883]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.3.0` to `1.3.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.3.0` to `1.3.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.3.0` to `1.3.1`.  by @gardener-ci-robot [#11985]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/prometheus` from `v3.2.1` to `v3.3.0`.  by @gardener-ci-robot [#11877]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.37.0` to `0.38.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.38.0) by @gardener-ci-robot [#11905]
- `[DEVELOPER]` The `hack/tools/extension-generator` tool now automatically sets the `.spec.deployment.extension.injectGardenKubeconfig: true` field in the generated provider `Extension` resources . by @plkokanov [#11837]
- `[DEVELOPER]` A new flag `-i|--inject-garden-kubeconfig` was added to the `hack/generate-controller-registration.sh` script. When the flag is set, the `injectGardenKubeconfig: true` field is added to the generated `ControllerDeployment`. by @plkokanov [#11837]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.118.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `Seed` API field `spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.backup.credentialsRef`, please adapt your seed manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` Gardener no longer sets the flags `--audit-log-(path|maxsize|maxbackups)` on shoot `kube-apiserver`s, `gardener-apiserver` or Garden's `virtual-garden-kube-apiserver`. If you rely on the audit logs being available in the file `/tmp/audit/audit.log` in the container's file system, please follow [controlplane-webhooks](https://github.com/gardener/gardener/blob/master/docs/extensions/controlplane-webhooks.md#kube-apiserver) and set the required flags via mutating webhook.  by @vpnachev [#11935]
- `[OPERATOR]` The `ManagedSeed` API field `spec.gardenlet.config.seedConfig.spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`, please adapt your managedseed manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` The legacy `support.gardener.cloud/eu-access*` labels and annotations on `CloudProfile`s and `Seed`s are no longer synced automatically. You have to use the new API established in Gardener v1.107 (released in 11/2024). Read more about it [here](https://gardener.cloud/docs/gardener/shoot/access_restrictions/). Please make sure to manually remove these labels and annotations from your `CloudProfile`s and `Seed`s! by @rfranzke [#11913]
- `[OPERATOR]` The `Gardenlet` API field `spec.config.seedConfig.spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.config.seedConfig.spec.backup.credentialsRef`, please adapt your gardenlet manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` The `GardenletConfiguration` configuration file field `seedConfig.spec.backup.secretRef` has been deprecated and will be removed in future version of Gardener in favor of `seedConfig.spec.backup.credentialsRef`, please adapt your `GardenletConfiguration` configuration files to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[USER]` The legacy `support.gardener.cloud/eu-access*` labels and annotations on `Shoot`s are no longer synced automatically. You have to use the new API established in Gardener v1.107 (released in 11/2024). Read more about it [here](https://gardener.cloud/docs/gardener/shoot/access_restrictions/#shoot). Please make sure to manually remove these labels and annotations from your `Shoot`s! by @rfranzke [#11913]
## 📰 Noteworthy

- `[USER]` The CA bundle of the kubelet is now available via a `ConfigMap` the project's namespace, called `<shoot-name>.ca-kubelet`. by @tobschli [#11916]
## ✨ New Features

- `[USER]` The [Stale Project Controller](https://gardener.cloud/docs/gardener/concepts/controller-manager/#stale-projects-reconcilerhttpsgithubcomgardenergardenertreemasterpkgcontrollermanagercontrollerprojectstale) now also considers `WorkloadIdentity` resources when deciding if a `Project` is stale or not. by @dimityrmirchev [#11962]
- `[OPERATOR]` Gardener core components are automatically restarted (due to a failing liveness probe) in case their Kubernetes API server watch caches do not sync for `3m`. by @rfranzke [#11966]
- `[OPERATOR]` The `Seed` API feature new field `spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` Add alpha feature gate `CloudProfileCapabilities` to enable usage of `architecture` capability instead of current architecture fields in machine images and types. by @LucaBernstein [#11736]
- `[OPERATOR]` The `GardenletConfiguration` configuration file feature new field `seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` The `ManagedSeed` API feature new field `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` The `Gardenlet` API feature new field `spec.config.seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
## 🐛 Bug Fixes

- `[OPERATOR]` The gardenlet deployer would not try to copy the shoot infrastructure secret for seed backup credentials if the shoot uses workload identity. by @dimityrmirchev [#11983]
- `[DEVELOPER]` The `DumpLogsForPodsWithLabelsInNamespace` function in the test framework now supports dumping pods with multiple containers. by @domdom82 [#11878]
## 🏃 Others

- `[OPERATOR]` Virtual extended resources can now be set on the NodeTemplate without triggering rollout by @elankath [#11809]
- `[OPERATOR]` The `gardener/autoscaler` image has been updated to `v1.32.0`. [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.32.0) by @marc1404 [#11903]
- `[OPERATOR]` The etcd-druid component no longer defines resource limits. by @ialidzhikov [#11973]
- `[OPERATOR]` Fixed an issue, where IPv6 shoots without configured pod and service ranges can't be scheduled on seeds without configured shootDefaults. by @axel7born [#11955]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.19.0` to `v0.19.1`.  by @gardener-ci-robot [#11941]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.29.0` to `v0.29.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.29.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.29.0` to `v0.29.1`.  by @gardener-ci-robot [#11940]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.1` to `v1.12.2`.  by @gardener-ci-robot [#11981]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.79.1` to `1.80.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.0) by @gardener-ci-robot [#11976]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.5` to `v1.11.6`.  by @gardener-ci-robot [#11968]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ingress-default-backend` from `0.22.0` to `0.23.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.23.0) by @gardener-ci-robot [#11948]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.2` to `v0.58.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.58.0)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.2` to `v0.58.0`.  by @gardener-ci-robot [#11963]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.33.2` to `v1.34.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.0) by @gardener-ci-robot [#11883]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.3.0` to `1.3.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.3.0` to `1.3.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.3.0` to `1.3.1`.  by @gardener-ci-robot [#11985]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/prometheus` from `v3.2.1` to `v3.3.0`.  by @gardener-ci-robot [#11877]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.37.0` to `0.38.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.38.0) by @gardener-ci-robot [#11905]
- `[DEVELOPER]` The `hack/tools/extension-generator` tool now automatically sets the `.spec.deployment.extension.injectGardenKubeconfig: true` field in the generated provider `Extension` resources . by @plkokanov [#11837]
- `[DEVELOPER]` A new flag `-i|--inject-garden-kubeconfig` was added to the `hack/generate-controller-registration.sh` script. When the flag is set, the `injectGardenKubeconfig: true` field is added to the generated `ControllerDeployment`. by @plkokanov [#11837]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.118.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `Seed` API field `spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.backup.credentialsRef`, please adapt your seed manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` Gardener no longer sets the flags `--audit-log-(path|maxsize|maxbackups)` on shoot `kube-apiserver`s, `gardener-apiserver` or Garden's `virtual-garden-kube-apiserver`. If you rely on the audit logs being available in the file `/tmp/audit/audit.log` in the container's file system, please follow [controlplane-webhooks](https://github.com/gardener/gardener/blob/master/docs/extensions/controlplane-webhooks.md#kube-apiserver) and set the required flags via mutating webhook.  by @vpnachev [#11935]
- `[OPERATOR]` The `ManagedSeed` API field `spec.gardenlet.config.seedConfig.spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`, please adapt your managedseed manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` The legacy `support.gardener.cloud/eu-access*` labels and annotations on `CloudProfile`s and `Seed`s are no longer synced automatically. You have to use the new API established in Gardener v1.107 (released in 11/2024). Read more about it [here](https://gardener.cloud/docs/gardener/shoot/access_restrictions/). Please make sure to manually remove these labels and annotations from your `CloudProfile`s and `Seed`s! by @rfranzke [#11913]
- `[OPERATOR]` The `Gardenlet` API field `spec.config.seedConfig.spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.config.seedConfig.spec.backup.credentialsRef`, please adapt your gardenlet manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` The `GardenletConfiguration` configuration file field `seedConfig.spec.backup.secretRef` has been deprecated and will be removed in future version of Gardener in favor of `seedConfig.spec.backup.credentialsRef`, please adapt your `GardenletConfiguration` configuration files to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[USER]` The legacy `support.gardener.cloud/eu-access*` labels and annotations on `Shoot`s are no longer synced automatically. You have to use the new API established in Gardener v1.107 (released in 11/2024). Read more about it [here](https://gardener.cloud/docs/gardener/shoot/access_restrictions/#shoot). Please make sure to manually remove these labels and annotations from your `Shoot`s! by @rfranzke [#11913]
## 📰 Noteworthy

- `[USER]` The CA bundle of the kubelet is now available via a `ConfigMap` the project's namespace, called `<shoot-name>.ca-kubelet`. by @tobschli [#11916]
## ✨ New Features

- `[USER]` The [Stale Project Controller](https://gardener.cloud/docs/gardener/concepts/controller-manager/#stale-projects-reconcilerhttpsgithubcomgardenergardenertreemasterpkgcontrollermanagercontrollerprojectstale) now also considers `WorkloadIdentity` resources when deciding if a `Project` is stale or not. by @dimityrmirchev [#11962]
- `[OPERATOR]` Gardener core components are automatically restarted (due to a failing liveness probe) in case their Kubernetes API server watch caches do not sync for `3m`. by @rfranzke [#11966]
- `[OPERATOR]` The `Seed` API feature new field `spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` Add alpha feature gate `CloudProfileCapabilities` to enable usage of `architecture` capability instead of current architecture fields in machine images and types. by @LucaBernstein [#11736]
- `[OPERATOR]` The `GardenletConfiguration` configuration file feature new field `seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` The `ManagedSeed` API feature new field `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` The `Gardenlet` API feature new field `spec.config.seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
## 🐛 Bug Fixes

- `[OPERATOR]` The gardenlet deployer would not try to copy the shoot infrastructure secret for seed backup credentials if the shoot uses workload identity. by @dimityrmirchev [#11983]
- `[DEVELOPER]` The `DumpLogsForPodsWithLabelsInNamespace` function in the test framework now supports dumping pods with multiple containers. by @domdom82 [#11878]
## 🏃 Others

- `[OPERATOR]` Virtual extended resources can now be set on the NodeTemplate without triggering rollout by @elankath [#11809]
- `[OPERATOR]` The `gardener/autoscaler` image has been updated to `v1.32.0`. [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.32.0) by @marc1404 [#11903]
- `[OPERATOR]` The etcd-druid component no longer defines resource limits. by @ialidzhikov [#11973]
- `[OPERATOR]` Fixed an issue, where IPv6 shoots without configured pod and service ranges can't be scheduled on seeds without configured shootDefaults. by @axel7born [#11955]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.19.0` to `v0.19.1`.  by @gardener-ci-robot [#11941]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.29.0` to `v0.29.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.29.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.29.0` to `v0.29.1`.  by @gardener-ci-robot [#11940]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.1` to `v1.12.2`.  by @gardener-ci-robot [#11981]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.79.1` to `1.80.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.0) by @gardener-ci-robot [#11976]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.5` to `v1.11.6`.  by @gardener-ci-robot [#11968]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ingress-default-backend` from `0.22.0` to `0.23.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.23.0) by @gardener-ci-robot [#11948]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.2` to `v0.58.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.58.0)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.2` to `v0.58.0`.  by @gardener-ci-robot [#11963]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.33.2` to `v1.34.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.0) by @gardener-ci-robot [#11883]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.3.0` to `1.3.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.3.0` to `1.3.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.3.0` to `1.3.1`.  by @gardener-ci-robot [#11985]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/prometheus` from `v3.2.1` to `v3.3.0`.  by @gardener-ci-robot [#11877]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.37.0` to `0.38.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.38.0) by @gardener-ci-robot [#11905]
- `[DEVELOPER]` The `hack/tools/extension-generator` tool now automatically sets the `.spec.deployment.extension.injectGardenKubeconfig: true` field in the generated provider `Extension` resources . by @plkokanov [#11837]
- `[DEVELOPER]` A new flag `-i|--inject-garden-kubeconfig` was added to the `hack/generate-controller-registration.sh` script. When the flag is set, the `injectGardenKubeconfig: true` field is added to the generated `ControllerDeployment`. by @plkokanov [#11837]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.0`


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.31.0</code></b></summary>

# [gardener/oidc-webhook-authenticator]

## ⚠️ Breaking Changes

- `[OPERATOR]` The default CPU and memory limits on the `oidc-webhook-authenticator` container have been removed, please set your own limits via the helm chart value `.runtime.resources` if needed.  by @vpnachev [gardener/oidc-webhook-authenticator#173]
## 🏃 Others

- `[OPERATOR]` OWA is now built using go version 1.24.2. by @dimityrmirchev [gardener/oidc-webhook-authenticator#177]
# [gardener/gardener-extension-shoot-oidc-service]

## ✨ New Features

- `[USER]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#307]
## 🏃 Others

- `[OPERATOR]` The following 3rd party dependencies have been updated:  
  - github.com/gardener/gardener v1.110.1 -> v1.117.1  
  - github.com/spf13/cobra v1.8.1 -> v1.9.1  
  - github.com/spf13/pflag v1.0.5 -> v1.0.6  
  - go.uber.org/mock v0.5.0 -> v0.5.0  
  - golang.org/x/tools v0.28.0 -> v0.32.0  
  - k8s.io/api v0.31.3 -> v0.32.3  
  - k8s.io/apimachinery v0.31.3 -> v0.32.3  
  - k8s.io/autoscaler/vertical-pod-autoscaler v1.2.1 -> v1.3.0  
  - k8s.io/client-go v0.31.3 -> v0.32.3  
  - k8s.io/code-generator v0.31.3 -> v0.32.3  
  - k8s.io/component-base v0.31.3 -> v0.32.3  
  - sigs.k8s.io/controller-runtime v0.19.3 -> v0.20.4  
  - golang.org/x/crypto v0.35.0 -> golang.org/x/crypto v0.37.0  
  - golang.org/x/mod v0.22.0 -> golang.org/x/mod v0.24.0  
  - golang.org/x/net v0.32.0 -> golang.org/x/net v0.39.0  
  - golang.org/x/oauth2 v0.24.0 -> golang.org/x/oauth2 v0.28.0  
  - golang.org/x/sync v0.11.0 -> golang.org/x/sync v0.13.0  
  - golang.org/x/sys v0.30.0 -> golang.org/x/sys v0.32.0  
  - golang.org/x/term v0.29.0 -> golang.org/x/term v0.31.0  
  - golang.org/x/text v0.22.0 -> golang.org/x/text v0.24.0  
  - golang.org/x/time v0.8.0 -> golang.org/x/time v0.11.0 by @dependabot[bot] [#312]
- `[OPERATOR]` `extension-shoot-oidc-service` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#253]
- `[OPERATOR]` The extension no longer has permissions over configmaps as it does not require such access. by @dimityrmirchev [#308]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#298]
- `[OPERATOR]` The extension is now built using go version 1.24.3. by @dependabot[bot] [#316]
- `[OPERATOR]` Fix the service annotation to reconcile the network policies that allow scraping extension metrics in the seed by @vicwicker [#290]
- `[OPERATOR]` The extension is now built using go version 1.24.2. by @dependabot[bot] [#301]
- `[DEPENDENCY]` Dependency to golang.org/x/crypto was upgraded to version v0.35.0. by @dimityrmirchev [#309]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.31.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.31.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.61.0</code></b></summary>

# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` Machine Controller Manager now supports a new machine deployment strategy called `InPlaceUpdate`. by @acumino [gardener/machine-controller-manager#973]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug was fixed where MCM panics when trying to add an annotation to a nil map by @aaronfern [gardener/machine-controller-manager#966]
- `[OPERATOR]` A new termination queue to handle machines scheduled for deletion introduced to separate creation requests from deletion by @takoverflow [gardener/machine-controller-manager#964]
- `[OPERATOR]` machine-controller-manager version, and build information are printed at startup. by @renormalize [gardener/machine-controller-manager#985]
- `[OPERATOR]` CA tainted node is removed as soon as possible by MachineSet controller  by @elankath [gardener/machine-controller-manager#972]
## 🏃 Others

- `[OPERATOR]` Introduced `MachineConfiguration` options for InPlaceUpdates by @acumino [gardener/machine-controller-manager#970]
- `[OPERATOR]` Introduce Constants needed for Conditons and Status for InPlace update by @ary1992 [gardener/machine-controller-manager#980]
- `[OPERATOR]` Resource exhaustion on machine creation results in a longer retry period by @takoverflow [gardener/machine-controller-manager#981]
- `[OPERATOR]` Introduced API changes to support InPlaceUpdate by @acumino [gardener/machine-controller-manager#962]
- `[OPERATOR]` Integration test framework enhancements for resource and process cleanup by @takoverflow [gardener/machine-controller-manager#968]
# [gardener/gardener-extension-provider-alicloud]

## 🏃 Others

- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#778]
- `[OPERATOR]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#781]
- `[OPERATOR]` Added `cloudprovider` webhook part of `gardener-extension-provider-alicloud` which ensures that the `cloudprovider` secret has the `credentialsFile` field present. The format of this field can be found in [this documentation](https://www.alibabacloud.com/help/en/sdk/developer-reference/credentials-settings). by @AleksandarSavchev [#779]
- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#766]
- `[OPERATOR]` The `csi-plugin-controller` deployment and `csi-diskplugin` daemonset now use an Alibaba cloud credentials file for authentication. by @AleksandarSavchev [#779]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update gardener to v1.117.0 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update fsnotify to v1.9.0 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update aws-sdk-go to v1.55.7 by @hebelsan [gardener/terraformer#162]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.61.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.61.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.61.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.61.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.61.0`


</details>
