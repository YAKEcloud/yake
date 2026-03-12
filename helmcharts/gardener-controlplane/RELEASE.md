# [github.com/gardener/gardener:v1.138.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` `provider-extensions` setup has been replaced by `remote` setup which is `gardener-operator` based. by @oliver-goetz [[#13994](https://github.com/gardener/gardener/pull/13994)]
- `[DEVELOPER]` Makefile target  `make check-vulnerabilities` and `GO_VULN_CHECK` has been removed. by @acumino [[#14143](https://github.com/gardener/gardener/pull/14143)]
- `[DEVELOPER]` The local setup no longer requires manipulating the /etc/hosts file manually. Instead, a bind9 hosts the `local.gardener.cloud` DNS zone (accessible via 172.18.255.53 or fd00:ff::53).   
    
  Manual actions:  
  - Cleanup your /etc/hosts file by removing all entries for `local.gardener.cloud`  
  - If you are neither using macOS nor systemd-resolved you must manually configure the resolution of the `local.gardener.cloud` DNS zone via the local bind9 server. by @timebertt [[#14062](https://github.com/gardener/gardener/pull/14062)]
- `[DEVELOPER]` The kubeconfig of the runtime cluster in local setup was moved from `./example/gardener-local/kind/multi-zone/kubeconfig` to `./dev-setup/kubeconfigs/runtime/kubeconfig`. by @oliver-goetz [[#13994](https://github.com/gardener/gardener/pull/13994)]

## 📰 Noteworthy
- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDiscoveryServer` now accepts optional `domain` and `tlsSecretName` fields. Operators can use these to expose the OIDC discovery endpoint under a custom domain and optionally with a non-wildcard certificate. Additionally, validation now prevents disabling the discovery server once it is enabled, protecting already-issued tokens. The default behaviour is unchanged. by @jamand [[#14126](https://github.com/gardener/gardener/pull/14126)]
- `[OPERATOR]` prometheus-garden aggregates volume usage metrics from all seeds by @Kostov6 [[#13818](https://github.com/gardener/gardener/pull/13818)]
- `[OPERATOR]` Hard limits on nodelocaldns node cache have been removed. by @domdom82 [[#14200](https://github.com/gardener/gardener/pull/14200)]
- `[OPERATOR]` Hard memory limit on istio-ingress has been removed. Memory is managed by VPA in all cases now. by @domdom82 [[#14197](https://github.com/gardener/gardener/pull/14197)]
- `[OPERATOR]` The `VPAInPlaceUpdates` feature gate has been promoted to Beta and is enabled by default. by @vitanovs [[#14145](https://github.com/gardener/gardener/pull/14145)]

## ✨ New Features
- `[USER]` `gardenadm init/join` now supports `--zone` / `-z` flag to specify the node's availability zone. by @acumino [[#14081](https://github.com/gardener/gardener/pull/14081)]
- `[DEVELOPER]` Added optional DisplayName field to ShootAdvertisedAddress allowing UI friendly names for advertised endpoints via the endpoint.shoot.gardener.cloud/displayName Ingress label. by @nickytd [[#14140](https://github.com/gardener/gardener/pull/14140)]
- `[DEVELOPER]` `gardener-node-agent` can optionally coordinate `OperatingSystemConfig` reconciliation amongst other instances. This is helpful if you want to ensure that only one instance reconciles at a time. Read all about it [here](https://gardener.cloud/docs/gardener/concepts/node-agent/#serial-reconciliation). by @rfranzke [[#14129](https://github.com/gardener/gardener/pull/14129)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed a race condition in the `ControllerInstallation` reconciler that could create duplicate installations due to reading from a stale informer cache instead of the API server. by @rickardsjp [[#14274](https://github.com/gardener/gardener/pull/14274)]
- `[OPERATOR]` Add a network policy label for allowing communication from the OpenTelemetryCollector in the control plane to the Shoot Kubernetes API Server. by @rrhubenov [[#14196](https://github.com/gardener/gardener/pull/14196)]
- `[OPERATOR]` The per-worker-pool `node-local-dns` `Daemonset`s now also include the name of the worker in their label selector and in their Pods' labels. This resolves an issue where each of the corresponding `VPA`s targeted all `node-cache` containers from all of these `Daemonsets` resulting in incorrect resource recommendations. by @plkokanov [[#14294](https://github.com/gardener/gardener/pull/14294)]
- `[OPERATOR]` An issues has been fixed causing `gardener-resource-manager` crash loops in large clusters. by @timuthy [[#14212](https://github.com/gardener/gardener/pull/14212)]
- `[USER]` The machines of a deleted worker pool are able to join back cluster in healthy state. by @aniruddha2000 [[#13715](https://github.com/gardener/gardener/pull/13715)]
- `[DEVELOPER]` The healthcheck controller now supports the seed extension class. by @hown3d [[#14162](https://github.com/gardener/gardener/pull/14162)]
- `[DEPENDENCY]` Fixing an issue where CA scale-downs were getting stuck when MCD replicas was updated with stale cache value of worker-controller by @r4mek [[#14291](https://github.com/gardener/gardener/pull/14291)]

## 🏃 Others
- `[OPERATOR]` The dependency-watchdog component no longer defines resource limits. by @ashwani2k [[#14193](https://github.com/gardener/gardener/pull/14193)]
- `[OPERATOR]` Fluent-bit resource limits are increased. by @nickytd [[#14205](https://github.com/gardener/gardener/pull/14205)]
- `[OPERATOR]` CoreDNS memory limit has been removed. by @domdom82 [[#14163](https://github.com/gardener/gardener/pull/14163)]
- `[OPERATOR]` The following dependency has been updated:  
  - `golang.org/x/net` from `v0.50.0` to `v0.51.0`. by @ScheererJ [[#14234](https://github.com/gardener/gardener/pull/14234)]
- `[OPERATOR]` Fix CRD conversion webhook metric name by @chrkl [[#14209](https://github.com/gardener/gardener/pull/14209)]
- `[OPERATOR]` Following logging stack components are updated `fluent-bit` to v4.2.3, `fluent-bit-plugin` to v1.2.0 and `fluent-operator` to v3.7.0 by @nickytd [[#14256](https://github.com/gardener/gardener/pull/14256)]
- `[OPERATOR]` A regression in Gardener Node Agent that can occur on Debian based OS images and that prevents it to successfully reconcile nodes that run a containerd version that contains - according to semver - invalid characters in its version number was fixed. by @MrBatschner [[#14177](https://github.com/gardener/gardener/pull/14177)]
- `[OPERATOR]` The `UseUnifiedHTTPProxyPort` (part of GEP-30) can be disabled without disruption to shoots already using the unified HTTP proxy port. by @maboehm [[#14169](https://github.com/gardener/gardener/pull/14169)]
- `[OPERATOR]` Add startup probe to gardener-metrics-exporter by @chrkl [[#14207](https://github.com/gardener/gardener/pull/14207)]
- `[OPERATOR]` Added `nodeCIDRMaskSizeIPv6` field to `KubeControllerManagerConfig` to allow configuring the IPv6 node CIDR mask size (defaults to 64). This enables more flexible IPv6 network configurations in both dual-stack and IPv6-only clusters. by @axel7born [[#13955](https://github.com/gardener/gardener/pull/13955)]
- `[DEVELOPER]` A new `supported-kubernetes-versions.yaml` file is introduced in the root of the project. It describes the supported Kubernetes versions by Gardener in a machine-readable format. A machinery can use this file to build automation for the supported Kubernetes versions in a CloudProfile. by @ialidzhikov [[#14191](https://github.com/gardener/gardener/pull/14191)]
- `[DEVELOPER]` The RBAC for fluent-operator is allowing watching pods and namespaces resources, required by `gardener-otelcol-extension` scenario. by @nickytd [[#14265](https://github.com/gardener/gardener/pull/14265)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.7` to `1.83.8`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.8) by @gardener-ci-robot [[#14225](https://github.com/gardener/gardener/pull/14225)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.6` to `1.83.7`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.7) by @gardener-ci-robot [[#14201](https://github.com/gardener/gardener/pull/14201)]
- `[DEPENDENCY]` A new helper function is introduced to check for dual-stack IP family - `github.com/gardener/gardener/pkg/apis/{core,core/v1beta1}.IsDualStack`. by @hebelsan [[#13659](https://github.com/gardener/gardener/pull/13659)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.20.2` to `v0.21.0`. by @gardener-ci-robot [[#14168](https://github.com/gardener/gardener/pull/14168)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses` from `v0.52.0` to `v0.53.0`. [Release Notes](https://redirect.github.com/perses/perses/releases/tag/v0.53.0) by @gardener-ci-robot [[#14164](https://github.com/gardener/gardener/pull/14164)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.138.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.138.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.138.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.138.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.138.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.138.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.138.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.138.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.138.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.138.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.138.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.138.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.138.0`
