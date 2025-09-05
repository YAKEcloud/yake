# [github.com/gardener/gardener:v1.127.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `ProjectValidator` admission plugin is now renamed to `ProjectMutator`. If you have references to the old name of the admission plugin, make sure to adapt them before upgrading to this version of Gardener. by @georgibaltiev [[#12818](https://github.com/gardener/gardener/pull/12818)]
- `[OPERATOR]` ⚠️ Gardener does no longer support garden, seed, or shoot clusters with Kubernetes versions <= `1.28`. Make sure to upgrade all existing clusters before upgrading to this Gardener version. by @seshachalam-yv [[#12486](https://github.com/gardener/gardener/pull/12486)]
- `[USER]` It is not allowed anymore to specify a comma ",", as well as duplicate values, within the entries of the`Shoot.spec.kubernetes.kubeAPIServer.apiAudiences[]`. Please update your `Shoot`s accordingly. by @tobschli [[#12788](https://github.com/gardener/gardener/pull/12788)]
- `[DEVELOPER]` The `Priority` field for the `MachineDeployment` API is now required instead of optional. Provider extensions need to make sure that the `MachineDeployment`s they generate specify this field. by @tobschli [[#12742](https://github.com/gardener/gardener/pull/12742)]
- `[OPERATOR]` The `CredentialsRotationWithoutWorkersRollout` feature gate has been promoted to GA and is enabled unconditionally. by @rfranzke [[#12857](https://github.com/gardener/gardener/pull/12857)]
- `[OPERATOR]` The GA-ed and unconditionally enabled `NewVPN` feature gates is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @ialidzhikov [[#12807](https://github.com/gardener/gardener/pull/12807)]
- `[OPERATOR]` A Project resource's `.spec.namespace` field is now validated in the storage layer. It was previously validated in the `ProjectValidator` admission plugin due to backwards-compatibility reasons. With this change, gardener-apiserver unconditionally accepts only `garden` and values with prefix `garden-` as valid Project namespaces. by @georgibaltiev [[#12784](https://github.com/gardener/gardener/pull/12784)]
- `[USER]` gardener-apiserver no longer serves the `/openapi/v2` endpoint. kubectl < 1.27 relies on this endpoint. Make sure to use kubectl 1.27+ against this version of gardener-apiserver. by @seshachalam-yv [[#12486](https://github.com/gardener/gardener/pull/12486)]
- `[USER]` The `spec.seedSelector` field in the `Shoot` API is now validated for invalid label values. by @shafeeqes [[#12708](https://github.com/gardener/gardener/pull/12708)]
- `[OPERATOR]` The following fields of resources in the `core.gardener.cloud` group are now validated for invalid label values:  
  - `spec.seedSelector` in the `CloudProfile` API  
  - `spec.deployment.seedSelector` in the `ControllerRegistration` API  
  - `scheduling.seedSelector` in the `ExposureClass` API  
    
  The following fields of resources in the `operator.gardener.cloud` group are now validated for invalid label values:  
  - `spec.virtualCluster.gardener.gardenerControllerManager.defaultProjectQuotas.projectSelector` in the `Garden` API  
    
  The following fields of resources in the `controllermanager.config.gardener.cloud` group are now validated for invalid label values:  
  - `controllers.project.quotas[].projectSelector`  
    
  The following fields of resources in the `seedmanagement.gardener.cloud` group are now validated for invalid label values:  
  - `spec.selector` in the `ManagedSeedSet` API  
    
  The following fields of resources in the `settings.gardener.cloud` group are now validated for invalid label values:  
  - `spec.projectSelector` in the `ClusterOpenIDConnectPreset` API by @shafeeqes [[#12708](https://github.com/gardener/gardener/pull/12708)]

## 📰 Noteworthy
- `[USER]` `shoot.spec.secretBindingName` field is deprecated in favour of `shoot.spec.credentialsBindingName` and will be removed after Kubernetes support for version 1.34 is dropped. Please see https://gardener.cloud/docs/gardener/shoot-operations/secretbinding-to-credentialsbinding-migration. If users do not perform the migration on their own, the migration will be forced and newly created `CredentialsBinding`s will be labeled with `credentialsbinding.gardener.cloud/status=force-migrated`. by @dimityrmirchev [[#12804](https://github.com/gardener/gardener/pull/12804)]
- `[USER]` It is now forbidden to specify configuration for admission plugins that are not configurable (via `Shoot.spec.kubernetes.kubeAPIServer.admissionPlugins[].config`) by @tobschli [[#12768](https://github.com/gardener/gardener/pull/12768)]
- `[OPERATOR]` When `gardenlet` starts up, it now checks the version skew with the `gardener-apiserver` (click [here](https://gardener.cloud/docs/gardener/deployment/version_skew_policy/#gardenlet) for the policy document). by @rfranzke [[#12863](https://github.com/gardener/gardener/pull/12863)]
- `[OPERATOR]` On startup `gardenlet`s will configure `.spec.dns.internal` settings for its respective `Seed`. Operators should adapt their `Seed` manifests to explicitly configure internal DNS as `.spec.dns.internal` will become a mandatory configuration after release v1.129.0. by @dimityrmirchev [[#12663](https://github.com/gardener/gardener/pull/12663)]
- `[USER]` `SecretBinding` API is deprecated in favour of `CredentialsBinding` and will be removed after Kubernetes support for version 1.34 is dropped. Please see https://gardener.cloud/docs/gardener/shoot-operations/secretbinding-to-credentialsbinding-migration. by @dimityrmirchev [[#12804](https://github.com/gardener/gardener/pull/12804)]

## ✨ New Features
- `[OPERATOR]` Enabling feature gate `OpenTelemetryCollector` will now route logs through the collector in the `Shoot` control-plane before reaching `Vali`. by @rrhubenov [[#12568](https://github.com/gardener/gardener/pull/12568)]
- `[OPERATOR]` The `Seed` spec was extended to allow explicit configuration for internal DNS settings. Operators can configure these by setting `.spec.dns.internal`. The implicit configuration that involved selecting a DNS secret from the Garden cluster based on labels will be eventually removed. Operators should adapt their `Seed` manifests to explicitly configure internal DNS. by @dimityrmirchev [[#12663](https://github.com/gardener/gardener/pull/12663)]

## 🐛 Bug Fixes
- `[DEVELOPER]` Ambiguous `go.mod` dependencies were removed when calling `make import-tools-bin`. by @timuthy [[#12810](https://github.com/gardener/gardener/pull/12810)]
- `[OPERATOR]` A misconfiguration has been fixed which was preventing `gardener-admission-controller` from being called for `ConfigMap` creations of `gardenlet`. by @rfranzke [[#12858](https://github.com/gardener/gardener/pull/12858)]
- `[OPERATOR]` Flip the status of a set `EmergencyStopShootReconciliations` `Seed` condition from `False` to `True`. by @LucaBernstein [[#12823](https://github.com/gardener/gardener/pull/12823)]
- `[OPERATOR]` Fix shoot creation failure for shoots with kubernetes version >=1.32 and openidconnect preset present by @p53 [[#12743](https://github.com/gardener/gardener/pull/12743)]

## 🏃 Others
- `[OPERATOR]` `GOMAXPROCS` for the `gardener-controller-manager` is set by the Go runtime instead of the external `go.uber.org/automaxprocs/maxprocs` library. by @timuthy [[#12801](https://github.com/gardener/gardener/pull/12801)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.9` to `1.30.10`. by @gardener-ci-robot [[#12827](https://github.com/gardener/gardener/pull/12827)]
- `[DEPENDENCY]` We now use `envoyproxy/envoy:distroless-v1.35.0` instead of the deprecated repository `envoyproxy/envoy-distroless:v1.35.0` by @oliver-goetz [[#12868](https://github.com/gardener/gardener/pull/12868)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-iptables` from `3.21.3` to `3.22.1`. [Release Notes](https://redirect.github.com/gardener/alpine-iptables/releases/tag/3.22.1) by @gardener-ci-robot [[#12792](https://github.com/gardener/gardener/pull/12792)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/dns/k8s-dns-node-cache` from `1.26.4` to `1.26.5`. by @gardener-ci-robot [[#12806](https://github.com/gardener/gardener/pull/12806)]
- `[DEVELOPER]` The optimistic defaulting of priorities for `MachineDeployment`s was removed. This needs to be done by the provider extension now. by @tobschli [[#12742](https://github.com/gardener/gardener/pull/12742)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.59.2` to `v0.60.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.60.0)  
  - `github.com/gardener/machine-controller-manager` from `v0.59.2` to `v0.60.0`. by @gardener-ci-robot [[#12842](https://github.com/gardener/gardener/pull/12842)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.81.2` to `1.81.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.3) by @gardener-ci-robot [[#12833](https://github.com/gardener/gardener/pull/12833)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.4.1` to `1.4.2`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.4.1` to `1.4.2`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.4.1` to `1.4.2`. by @gardener-ci-robot [[#12813](https://github.com/gardener/gardener/pull/12813)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.25` to `v2.2.26`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.26) by @gardener-ci-robot [[#12840](https://github.com/gardener/gardener/pull/12840)]
- `[OPERATOR]` Add validation for the name of worker's root volumes. by @kon-angelo [[#12820](https://github.com/gardener/gardener/pull/12820)]
- `[OPERATOR]` The `gardener/autoscaler` image has been updated to `v1.33.0`. [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.33.0) by @aaronfern [[#12800](https://github.com/gardener/gardener/pull/12800)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.40` to `v7.5.41`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.41) by @gardener-ci-robot [[#12841](https://github.com/gardener/gardener/pull/12841)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.13.1` to `v1.13.2`. by @gardener-ci-robot [[#12848](https://github.com/gardener/gardener/pull/12848)]
- `[OPERATOR]` Improved dual-stack migration by ensuring CoreDNS pods are restarted before configuring the kube-dns service as dual-stack, preventing IPv6 DNS query failures during migration. by @axel7born [[#12816](https://github.com/gardener/gardener/pull/12816)]
- `[OPERATOR]` gardener-apiserver: The `FinalizerRemoval` admission plugin's type is now changed from mutating to validating. by @georgibaltiev [[#12786](https://github.com/gardener/gardener/pull/12786)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/kube-state-metrics/kube-state-metrics` from `v2.16.0` to `v2.17.0`. by @gardener-ci-robot [[#12865](https://github.com/gardener/gardener/pull/12865)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.127.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.127.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.127.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.127.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.127.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.127.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.127.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.127.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.127.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.127.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.127.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.127.0`
