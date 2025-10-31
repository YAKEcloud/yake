# [github.com/gardener/gardener:v1.131.0]

## 📰 Noteworthy
- `[OPERATOR]` On startup `gardenlet`s will configure `.spec.dns.defaults` settings for its respective `Seed`. Operators should adapt their `Seed` manifests to explicitly configure default DNS as `.spec.dns.defaults` will become a mandatory configuration after release v1.131.0. by @dimityrmirchev [[#12884](https://github.com/gardener/gardener/pull/12884)]

## ✨ New Features
- `[OPERATOR]` `Valitail` is now replaced with an instance of `OpenTelemetry Collector`. by @rrhubenov [[#12846](https://github.com/gardener/gardener/pull/12846)]
- `[OPERATOR]` Introduced `spec.settings.loadBalancerServices.zonalIngress.enabled` in the Seed API. When disabled, zonal istio ingress gateways are removed and the global istio ingress gateway is used instead. by @cerealsnow [[#12956](https://github.com/gardener/gardener/pull/12956)]
- `[OPERATOR]` `gardenlet` now evaluates extension health conditions first when computing the conditions of a `Shoot`. by @rfranzke [[#13231](https://github.com/gardener/gardener/pull/13231)]
- `[USER]` The `KubeApiServerTooManyAuditlogFailures` alert is now sent also to the shoot owners. by @vpnachev [[#13177](https://github.com/gardener/gardener/pull/13177)]
- `[OPERATOR]` The `Seed` spec was extended to allow explicit configuration for default DNS settings. Operators can configure these by setting `.spec.dns.defaults`. The implicit configuration that involved selecting a DNS secrets from the Garden cluster based on labels will be eventually removed. Operators should adapt their `Seed` manifests to explicitly configure default DNS. by @dimityrmirchev [[#12884](https://github.com/gardener/gardener/pull/12884)]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue has been fixed which was preventing `gardenlet` from registering its `Gardenlet` resource when `selfUpgrade` was set in its Helm chart values. by @rfranzke [[#13241](https://github.com/gardener/gardener/pull/13241)]
- `[OPERATOR]` A bug causing gardenlet to panic during CoreDNS migration check if the Shoot is hibernated is now fixed. by @shafeeqes [[#13302](https://github.com/gardener/gardener/pull/13302)]
- `[USER]` The early access (before the cluster creation is completed) to a `Shoot` cluster via `AdminKubeconfig` credentials is restored now when dedicated groups `gardener.cloud:system:admins` and `gardener.cloud:project:admins` are used for authorization. by @vpnachev [[#13299](https://github.com/gardener/gardener/pull/13299)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.35.4` to `v1.36.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.1) by @gardener-ci-robot [[#13170](https://github.com/gardener/gardener/pull/13170)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.35.3` to `v1.35.4`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.35.4) by @gardener-ci-robot [[#13159](https://github.com/gardener/gardener/pull/13159)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.2` to `1.27.3`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.2` to `1.27.3`.   
  - `istio.io/api` from `v1.27.2` to `v1.27.3`. by @gardener-ci-robot [[#13235](https://github.com/gardener/gardener/pull/13235)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.0` to `v0.60.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.0` to `v0.60.1`. by @gardener-ci-robot [[#13181](https://github.com/gardener/gardener/pull/13181)]
- `[OPERATOR]` Increase client-side rate limits for provider-specific container in machine-controller-manager to `--kube-api-qps=100` and `--kube-api-burst=200` by @voelzmo [[#13254](https://github.com/gardener/gardener/pull/13254)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.42.0` to `0.43.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.43.0) by @gardener-ci-robot [[#13176](https://github.com/gardener/gardener/pull/13176)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.27` to `v2.2.28`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.28) by @gardener-ci-robot [[#13197](https://github.com/gardener/gardener/pull/13197)]
- `[OPERATOR]` Report Gardener Operator `Extension` conditions as metrics by @hown3d [[#13015](https://github.com/gardener/gardener/pull/13015)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/coredns-config-adapter` from `v0.2.0` to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/coredns-config-adapter/releases/tag/v0.3.0) by @DockToFuture [[#13277](https://github.com/gardener/gardener/pull/13277)]
- `[OPERATOR]` Mutation of the Shoot metadata annotations such as `shoot.gardener.cloud/tasks` and `maintenance.shoot.gardener.cloud/needs-retry-operation` is moved from the `ShootValidator` to the `ShootMutator` admission plugin. by @ialidzhikov [[#13171](https://github.com/gardener/gardener/pull/13171)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.42` to `v7.5.43`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.43) by @gardener-ci-robot [[#13202](https://github.com/gardener/gardener/pull/13202)]
- `[OPERATOR]` The local multi-node setup no longer relies on `externalTrafficPolicy: Local` and forcing traffic through a pod on the control plane node. by @ScheererJ [[#13182](https://github.com/gardener/gardener/pull/13182)]
- `[OPERATOR]` Add support for scraping metrics for OpenTelemetry collector on nodes by @dnaeon [[#13228](https://github.com/gardener/gardener/pull/13228)]
- `[OPERATOR]` Support custom server blocks in node-local-dns. by @DockToFuture [[#13160](https://github.com/gardener/gardener/pull/13160)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/prometheus` from `v3.7.1` to `v3.7.2`. by @gardener-ci-robot [[#13253](https://github.com/gardener/gardener/pull/13253)]
- `[OPERATOR]` Fixed an issue that caused the `worker-pools-operatingsystemconfig-hashes` secret to be created as immutable during the restore phase of control plane migration. by @plkokanov [[#13263](https://github.com/gardener/gardener/pull/13263)]
- `[OPERATOR]` A new mutating admission plugin is introduced - `ShootMutator`. It is enabled by default. For more details, see the [`ShootMutator` admission plugin docs](https://github.com/gardener/gardener/blob/v1.131.0/docs/concepts/apiserver-admission-plugins.md#shootmutator). by @ialidzhikov [[#13156](https://github.com/gardener/gardener/pull/13156)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.1` to `v0.60.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.60.1` to `v0.60.2`. by @gardener-ci-robot [[#13267](https://github.com/gardener/gardener/pull/13267)]
- `[OPERATOR]` The `NodeNotHealthy` and `SeedNodeNotHealthy` alerts are now removed. by @vicwicker [[#13150](https://github.com/gardener/gardener/pull/13150)]
- `[OPERATOR]` ScrapeConfigs & PrometheusRules of `blackbox-exporter` are now deployed as managed-resource when type is `shoot` by @oliver-goetz [[#13178](https://github.com/gardener/gardener/pull/13178)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.1` to `v1.32.2`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.2) by @gardener-ci-robot [[#13240](https://github.com/gardener/gardener/pull/13240)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.4` to `1.82.5`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.5) by @gardener-ci-robot [[#13250](https://github.com/gardener/gardener/pull/13250)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.36.1` to `v1.36.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.2) by @gardener-ci-robot [[#13225](https://github.com/gardener/gardener/pull/13225)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.131.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.131.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.131.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.131.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.131.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.131.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.131.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.131.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.131.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.131.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.131.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.131.0`
