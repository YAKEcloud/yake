# [github.com/gardener/gardener:v1.134.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `DoNotCopyBackupCredentials` feature gate has been promoted to GA and can no longer be disabled. The `Seed` backup secret is no longer copied from the `Shoot` infrastructure credentials in case an operator does not provide an existing backup secret. If you configure `seed.spec.backup.credentialsRef`, make sure that the referred credential already exists. For production setups, it is advised that operators configure a separate set of credentials for `Seed` backup and `Shoot` infrastructure. by @dimityrmirchev [[#13564](https://github.com/gardener/gardener/pull/13564)]
- `[OPERATOR]` Several fields and configurations of `operator.gardener.cloud/v1alpha1.Extension` resources are now validated:  
  - Either an extension or admission deployment must be specified (`spec.deployment.{extension,admission}`)  
  - One of `spec.deployment.admission.runtimeCluster` or `spec.deployment.admission.virtualCluster` must be specified  
  - A Helm deployment configuration must be in place (`spec.deployment.extension.helm` or `spec.deployment.admission.{runtimeCluster,virtualCluster}.helm`)  
  - A valid OCI repository configuration is required (`helm.ociRepository`)  
    
  Please check your `Extension` resources and rectify them accordingly, before upgrading to this version. by @timuthy [[#13528](https://github.com/gardener/gardener/pull/13528)]
- `[OPERATOR]` The GA-ed and unconditionally enabled `ShootCredentialsBinding` feature gate is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @ialidzhikov [[#13576](https://github.com/gardener/gardener/pull/13576)]
- `[DEVELOPER]` Ensure you have the [`docker compose` plugin](https://docs.docker.com/compose/install/) installed for starting the local setup. by @timebertt [[#13551](https://github.com/gardener/gardener/pull/13551)]
- `[DEVELOPER]` The registry for the local development setup is now exposed under `registry.local.gardener.cloud` instead of `garden.local.gardener.cloud`. Make sure to update your `/etc/hosts` file by replacing the existing `127.0.0.1 garden.local.gardener.cloud` entries with `127.0.0.1 registry.local.gardener.cloud`. by @timebertt [[#13551](https://github.com/gardener/gardener/pull/13551)]
- `[DEVELOPER]` To support self-hosted shoots with managed infrastructure, the `Worker` extension (controller/delegate) needs to use the technical ID from `Cluster.shoot.status.technicalID` for prefixing the names of machine-related objects. The `Worker` namespace is `kube-system` for self-hosted shoots. Read the [docs](https://github.com/gardener/gardener/blob/v1.133.0/docs/extensions/resources/worker.md). by @timebertt [[#13485](https://github.com/gardener/gardener/pull/13485)]

## 📰 Noteworthy
- `[OPERATOR]` As the `DoNotCopyBackupCredentials` feature gate cannot be disabled, backup secrets that were copied from `Shoot` infrastructure credentials in previous reconciliations are labeled with `gardener.cloud/secret-status=previously-managed` and Gardener no longer takes care of them. Operators are responsible to delete those if unused for other scenarios. by @dimityrmirchev [[#13564](https://github.com/gardener/gardener/pull/13564)]
- `[OPERATOR]` Introduced GEP-35 that outlines a migration strategy from `Vali` to `VictoriaLogs` as a database for Garden, Seed & Shoot clusters. by @rrhubenov [[#13242](https://github.com/gardener/gardener/pull/13242)]

## ✨ New Features
- `[OPERATOR]` Istio-gateways now provide access logs for requests to kube-apiservers via the `apiserver-proxy` endpoint when `IstioTLSTermination` feature gate is active. by @oliver-goetz [[#13569](https://github.com/gardener/gardener/pull/13569)]
- `[OPERATOR]` Seed clusters are now labelled with a specific extension label `extensions.extensions.gardener.cloud/<extension-type>: true` whenever such an extension is activated for the seed. by @timuthy [[#13509](https://github.com/gardener/gardener/pull/13509)]
- `[USER]` Istio access logs are now visible for users in the shoot plutono. by @majst01 [[#13548](https://github.com/gardener/gardener/pull/13548)]
- `[DEVELOPER]` The `Worker` extension no longer needs to fetch the machine state from the `ShootState` object in the garden cluster. Instead, Gardener populates the machine state directly in the `Worker.status.state` field on restoration of the shoot. Read the [docs](https://github.com/gardener/gardener/blob/v1.133.0/docs/extensions/migration.md#worker-state). by @timebertt [[#13485](https://github.com/gardener/gardener/pull/13485)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug which caused kube-apiserver metrics to be scraped thrice when `IstioTLSTermination` feature gate is active has been fixed. by @oliver-goetz [[#13590](https://github.com/gardener/gardener/pull/13590)]
- `[OPERATOR]` Fixed a bug where operators could not exclusively specify `count` limits in the Garden's `spec.virtualCluster.gardener.gardenerAdmissionController.resourceAdmissionConfiguration.limit` field. by @tobschli [[#13577](https://github.com/gardener/gardener/pull/13577)]
- `[USER]` A bug which prevented the wildcard certificate endpoints to be advertised in the shoot status has been fixed. by @oliver-goetz [[#13644](https://github.com/gardener/gardener/pull/13644)]
- `[USER]` Fixed DNS resolution issues during dual-stack migration by ensuring `/etc/resolv.conf` only contains the IPv4 DNS server address until the `kube-dns` service is fully migrated. by @axel7born [[#13601](https://github.com/gardener/gardener/pull/13601)]

## 🏃 Others
- `[OPERATOR]` Seeds are now labeled with `seed.gardener.cloud/provider=<seed.spec.provider.type>` and `seed.gardener.cloud/region=<seed.spec.provider.region>`. by @georgibaltiev [[#12623](https://github.com/gardener/gardener/pull/12623)]
- `[OPERATOR]` `apiserver-proxy` endpoints now using the same keep alive settings and connection timeout as default kube-apiserver endpoints when `IstioTLSTermination` feature gate is active. by @oliver-goetz [[#13569](https://github.com/gardener/gardener/pull/13569)]
- `[OPERATOR]` `Project`s are no-longer requeued with back-off when they have a `deletionTimestamp` and still existing `Shoots` in the corresponding namespaces. Instead they are now automatically requeued on `Shoot` deletion events if they no-longer contain any `Shoot`s so that the deletion of the `Project` can finish. by @plkokanov [[#13052](https://github.com/gardener/gardener/pull/13052)]
- `[OPERATOR]` `ManagedResources` are no-longer requeued with back-off, if their responsibility was transferred from one `gardener-resource-manager` to another, while waiting for the original `gardener-resource-manager` to finish cleaning up the deployed resources. Instead, `ManagedResources` are automatically requeued when the cleanup of resources by the original `gardener-resource-manager` has finished. by @plkokanov [[#13052](https://github.com/gardener/gardener/pull/13052)]
- `[DEVELOPER]` The `VPAInPlaceUpdates` feature gate is enabled in local setups for `gardenlet` and `gardener-operator`. by @vitanovs [[#13508](https://github.com/gardener/gardener/pull/13508)]
- `[DEVELOPER]` Update remote local setup with most recent hosts for end-to-end tests and instructions for an IPv6 setup by @vicwicker [[#13436](https://github.com/gardener/gardener/pull/13436)]
- `[DEVELOPER]` Usages of `controller-runtime`'s deprecated `reconcile.Result{Requeue: true}` have been removed. by @plkokanov [[#13052](https://github.com/gardener/gardener/pull/13052)]
- `[DEVELOPER]` Ignore whitespace-only YAML chunks when parsing `ManagedResource` secrets. This prevents decoder errors from trailing `---` separators. by @DockToFuture [[#13622](https://github.com/gardener/gardener/pull/13622)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.1.3` to `2.1.4`. by @gardener-ci-robot [[#13567](https://github.com/gardener/gardener/pull/13567)]
- `[DEPENDENCY]` The `gardener/autoscaler` image for Shoots with Kubernetes version 1.34 has been updated to `v1.34.0`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.34.0) by @takoverflow [[#13554](https://github.com/gardener/gardener/pull/13554)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.33.0` to `v0.34.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.34.0)  
  - `github.com/gardener/etcd-druid/api` from `v0.33.0` to `v0.34.0`. by @Shreyas-s14 [[#13617](https://github.com/gardener/gardener/pull/13617)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.6` to `1.83.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.0) by @gardener-ci-robot [[#13620](https://github.com/gardener/gardener/pull/13620)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.5` to `1.82.6`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.6) by @gardener-ci-robot [[#13619](https://github.com/gardener/gardener/pull/13619)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.14.0` to `v1.14.1`. by @gardener-ci-robot [[#13599](https://github.com/gardener/gardener/pull/13599)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.3` to `1.27.4`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.3` to `1.27.4`.   
  - `istio.io/api` from `v1.27.3` to `v1.27.4`. by @gardener-ci-robot [[#13595](https://github.com/gardener/gardener/pull/13595)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.36.2` to `v1.36.3`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.3) by @gardener-ci-robot [[#13598](https://github.com/gardener/gardener/pull/13598)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/cortexproject/cortex` from `v1.20.0` to `v1.20.1`. by @gardener-ci-robot [[#13597](https://github.com/gardener/gardener/pull/13597)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.1.2` to `2.1.3`. by @gardener-ci-robot [[#13562](https://github.com/gardener/gardener/pull/13562)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.134.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.134.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.134.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.134.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.134.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.134.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.134.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.134.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.134.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.134.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.134.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.134.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.134.0`
