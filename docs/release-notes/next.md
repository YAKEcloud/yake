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
