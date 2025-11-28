# [github.com/gardener/gardener:v1.133.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ Gardener does no longer support Garden, Seed, or Shoot clusters with Kubernetes versions <= 1.29. Make sure to upgrade all existing clusters before upgrading to this Gardener version. by @ScheererJ [[#13487](https://github.com/gardener/gardener/pull/13487)]
- `[USER]` The Shoot `.spec.provider.workers[].sysctls` field is now validated for valid sysctl keys and non-empty values. by @MrBatschner [[#13435](https://github.com/gardener/gardener/pull/13435)]
- `[DEVELOPER]` The `github.com/prometheus-operator/prometheus-operator/pkg/apis/monitoring` module is updated from v0.86.2 to v0.87.0. In the new version the type of the ServiceMonitor's `.spec.endpoints[].scheme` field is changed from `string` to `*monitoringv1.Scheme`. by @gardener-ci-robot [[#13512](https://github.com/gardener/gardener/pull/13512)]
- `[DEVELOPER]` The types from the  [extension healthcheck package](https://github.com/gardener/gardener/tree/v1.133.0/extensions/pkg/controller/healthcheck/general) which perform health checks on Deployments, StatefulSets and DaemonSets have been renamed. The respective constructor functions now return the concrete types instead of an interface. The types still implement the interface that was returned before. We do not expect this change to affect existing code in the majority of cases. by @dimityrmirchev [[#13329](https://github.com/gardener/gardener/pull/13329)]

## 📰 Noteworthy
- `[OPERATOR]` The `ShootCredentialsBinding` feature gate of `gardenlet` is promoted to GA and is unconditionally enabled. by @dimityrmirchev [[#13530](https://github.com/gardener/gardener/pull/13530)]
- `[OPERATOR]` The `.status.encryptedResources` field for Shoot and Garden resources has been deprecated in favour of the new `.status.credentials.encryptionAtRest.resources` field. by @AleksandarSavchev [[#12894](https://github.com/gardener/gardener/pull/12894)]
- `[DEVELOPER]` The [`ValidatingAdmissionPolicy`](https://github.com/gardener/gardener/blob/v1.133.0/docs/concepts/apiserver-admission-plugins.md#validatingadmissionpolicy) admission plugin is now enabled by default for the Gardener API server. If you already have the admission plugin enabled, you can remove the explicit enablement after upgrading to this version of Gardener as the plugin is now enabled by default. by @ScheererJ [[#13487](https://github.com/gardener/gardener/pull/13487)]

## ✨ New Features
- `[OPERATOR]` A new `VPAInPlaceUpdates` feature gate is introduced for gardenlet and gardener-operator. When enabled, the corresponding VerticalPodAutoscaler resources are mutated to perform in-place updates, (i.e mutated with `.spec.updatePolicy.updateMode=InPlaceOrRecreate`). For more information, see [Enabling In-Place Updates of Pod Resources](https://github.com/gardener/gardener/blob/v1.32.0/docs/operations/enabling-in-place-resource-updates.md). by @vitanovs [[#12940](https://github.com/gardener/gardener/pull/12940)]
- `[OPERATOR]` The `gardener.cloud/operation` annotation for the Garden resource has been extended to allow specifying multiple operations to be run in parallel. by @AleksandarSavchev [[#12717](https://github.com/gardener/gardener/pull/12717)]
- `[USER]` The `gardener.cloud/operation` and `maintenance.gardener.cloud/operation` Shoot annotations have been extended to allow specifying multiple operations to be run in parallel. by @AleksandarSavchev [[#12717](https://github.com/gardener/gardener/pull/12717)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug where the Shoot relevant ClusterRoleBindings responsible for the `AdminKubeconfig` and `ViewerKubeconfig` permissions were deployed into the virtual Garden cluster has been fixed. by @vpnachev [[#13492](https://github.com/gardener/gardener/pull/13492)]
- `[OPERATOR]` Add `--skip-metadata` flag to `ctr images pull` in the node-agent init script for better container registry compatibility. by @Nuckal777 [[#13265](https://github.com/gardener/gardener/pull/13265)]
- `[OPERATOR]` An issue where `Plutono` would not detect all fields when the `OpenTelemetryCollector` feature gate is enabled is now fixed. by @rrhubenov [[#13531](https://github.com/gardener/gardener/pull/13531)]
- `[OPERATOR]` A bug which made istio-ingressgateway forwarding requests via HTTP1.1 only to kube-apiserver when `IstioTLSTermination` feature gate is active has been fixed. Exhausted connection limits between istio-ingressgateway and kube-apiserver could be a consequence of this bug. by @oliver-goetz [[#13459](https://github.com/gardener/gardener/pull/13459)]
- `[OPERATOR]` Gardener generally prefers the `sshd.service` unit when trying to enable/disable the SSH server on worker nodes and bastions. If the `sshd.service` unit doesn't exist, it falls back to `ssh.service`. by @timebertt [[#13456](https://github.com/gardener/gardener/pull/13456)]
- `[OPERATOR]` The server block import feature for node-local-dns is now behind a feature gate (`CustomDNSServerInNodeLocalDNS`). by @DockToFuture [[#13511](https://github.com/gardener/gardener/pull/13511)]
- `[USER]` An issue causing vpa-updater RBAC resources for in-place updates not to be deployed when the VPA `InPlaceOrRecreate` feature gate is not explicitly enabled is now fixed. The VPA `InPlaceOrRecreate` feature gate is enabled by default with the VPA 1.5.1 version which is used by Gardener. That's why the needed in-place updates RBAC resources are now deployed unconditionally. by @vitanovs [[#13499](https://github.com/gardener/gardener/pull/13499)]
- `[DEVELOPER]` Fixed a bug causing types part of the [extension healthcheck package](https://github.com/gardener/gardener/tree/master/extensions/pkg/controller/healthcheck/general) to be injected with clients that they do not actually use. by @dimityrmirchev [[#13329](https://github.com/gardener/gardener/pull/13329)]

## 🏃 Others
- `[OPERATOR]` `Vali` can now ingest logs through the standard ingress in the `Shoot` control plane even when the `OpenTelemetryCollector` feature gate is enabled. This allows other parties that rely on it to migrate at their pace while it matures. by @rrhubenov [[#13446](https://github.com/gardener/gardener/pull/13446)]
- `[OPERATOR]` gardener-apiserver: The `ShootValidator` admission plugin's type is now changed from mutating to validating. All mutations that were previously performed by the `ShootValidator` were extracted over time to the new `ShootMutator` admission plugin. by @ialidzhikov [[#13352](https://github.com/gardener/gardener/pull/13352)]
- `[OPERATOR]` Defaulting of the Shoot machine image version (`.spec.provider.workers[].machine.image.{name,version}`) is moved from the `ShootValidator` to the `ShootMutator` admission plugin. by @ialidzhikov [[#13351](https://github.com/gardener/gardener/pull/13351)]
- `[OPERATOR]` Logging stack components are updated from v0.69.0 to v0.70.0. Along the way, performance optimizations are applied. by @nickytd [[#13563](https://github.com/gardener/gardener/pull/13563)]
- `[OPERATOR]` gardener-apiserver:  The Shoot `.spec.provider.workers[].machine.image` field  is now a required field. This change has impact only when the `ShootMutator` admission plugin (which defaults the machine image) is disabled. The admission plugin is enabled by default. by @ialidzhikov [[#13399](https://github.com/gardener/gardener/pull/13399)]
- `[OPERATOR]` A new field `spec.resources` was added to the Garden API. The field can be used by extensions to reference `Secret`s and `ConfigMap`s. See [this documentation](https://github.com/gardener/gardener/blob/master/docs/extensions/referenced-resources.md) for more details. by @timuthy [[#13464](https://github.com/gardener/gardener/pull/13464)]
- `[OPERATOR]` The Shoot `.spec.kubernetes.kubeAPIServer.oidcConfig` field is now validated only in the storage layer. Previously, the required `.spec.kubernetes.kubeAPIServer.{oidcConfig,issuerURL}` fields were validated in the [`ShootValidator`](https://github.com/gardener/gardener/blob/v1.133.0/docs/concepts/apiserver-admission-plugins.md#shootvalidator) admission plugin due to backwards-compatibility reasons. by @dimitar-kostadinov [[#13505](https://github.com/gardener/gardener/pull/13505)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/dns/k8s-dns-node-cache` from `1.26.5` to `1.26.7`. by @gardener-ci-robot [[#13474](https://github.com/gardener/gardener/pull/13474)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.28` to `v2.2.29`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.29) by @gardener-ci-robot [[#13501](https://github.com/gardener/gardener/pull/13501)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.41.0` to `0.42.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.42.0) by @gardener-ci-robot [[#13455](https://github.com/gardener/gardener/pull/13455)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.20.0` to `v0.20.1`. by @gardener-ci-robot [[#13533](https://github.com/gardener/gardener/pull/13533)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/logging` from `v0.68.0` to `v0.69.0`. [Release Notes](https://redirect.github.com/gardener/logging/releases/tag/v0.69.0) by @gardener-ci-robot [[#13450](https://github.com/gardener/gardener/pull/13450)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.43` to `v7.5.44`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.44) by @gardener-ci-robot [[#13504](https://github.com/gardener/gardener/pull/13504)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/cortexproject/cortex` from `v1.19.1` to `v1.20.0`. by @gardener-ci-robot [[#13390](https://github.com/gardener/gardener/pull/13390)]

## 📖 Documentation
- `[OPERATOR]` A new guide has been added containing instruction and information about how to upgrade a Gardener installation. by @rfranzke [[#13401](https://github.com/gardener/gardener/pull/13401)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.133.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.133.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.133.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.133.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.133.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.133.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.133.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.133.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.133.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.133.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.133.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.133.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.133.0`
