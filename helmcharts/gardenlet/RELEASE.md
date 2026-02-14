# [github.com/gardener/gardener:v1.136.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The Garden's `.spec.virtualCluster.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new Garden creations and for field value updates. Already existing Gardens which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[OPERATOR]` The ManagedSeedSet's `.spec.shootTemplate.spec.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new ManagedSeedSet creations and for field value updates. Already existing ManagedSeedSets which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[USER]` Shoot addons (`.spec.addons`) have been deprecated and will be forbidden starting with Kubernetes `1.35`. Their usage was already discouraged for productive clusters, as they now only include unmaintained components (Kubernetes dashboard and Ingress NGINX Controller). by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The shoot field `.spec.kubernetes.kubeScheduler.kubeMaxPDVols` has been deprecated and will be forbidden starting with Kubernetes `1.35`. The maximum number of attachable volumes is maintained by the respective CSI plugin. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The Shoot's `.spec.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new Shoots creations and for field value updates. Already existing Shoots which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[USER]` Downgrading the machine image version (`.spec.provider.workers[].machine.image.version`) is not allowed for worker pools using the `AutoInPlaceUpdate` or `ManualInPlaceUpdate` strategy, as Gardener does not support machine image downgrades for any operating system currently.  For `AutoRollingUpdate`, the entire node is replaced, so this limitation does not apply. by @shafeeqes [[#13828](https://github.com/gardener/gardener/pull/13828)]
- `[USER]` The shoot field `.spec.kubernetes.kubeAPIServer.watchCacheSizes.default` has been deprecated and will be forbidden starting with Kubernetes `1.35`. Watch cache sizes are automatically sized by Kubernetes. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` Setting `.spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` in the `Shoot` spec is forbidden for clusters with Kubernetes version >= 1.35. Users that enable anonymous authentication should use Structured Authentication with [anonymous authenticator](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_access.md#configuring-anonymous-authentication) instead. by @dimityrmirchev [[#13707](https://github.com/gardener/gardener/pull/13707)]
- `[DEVELOPER]` The healthcheck controller now supports the `garden` extension class. Health check client interfaces have been renamed from `SeedClient/ShootClient` to `SourceClient/TargetClient` for better abstraction across extension classes. The `PreCheckFunc` method signature has been changed to accept `any` for cluster or garden object. by @theoddora [[#13789](https://github.com/gardener/gardener/pull/13789)]

## 📰 Noteworthy
- `[OPERATOR]` New health and readiness checks have been added to vpn-seed-server to improve availability and reduce log clutter. by @domdom82 [[#13802](https://github.com/gardener/gardener/pull/13802)]
- `[OPERATOR]` The `Shoot` spec has a new field `spec.kubernetes.kubeAPIServer.encryptionConfig.provider.type`, which currently can only be set to `aescbc`. by @AleksandarSavchev [[#13732](https://github.com/gardener/gardener/pull/13732)]
- `[OPERATOR]` For Kubernetes virtual clusters `>= 1.33`, we now deploy both `Endpoints` and `EndpointSlice` resources for the APIService connection between virtual-garden-kube-apiserver and gardener-apiserver. by @acumino [[#14041](https://github.com/gardener/gardener/pull/14041)]
- `[OPERATOR]` The `Garden` spec has 2 new fields `spec.virtualCluster.kubernetes.kubeAPIServer.encryptionConfig.provider.type`and `spec.virtualCluster.gardener.gardenerAPIServer.encryptionConfig.provider.type`, which currently can only be set to `aescbc`. by @AleksandarSavchev [[#13732](https://github.com/gardener/gardener/pull/13732)]
- `[OPERATOR]` The `OpenTelemetryCollector` feature gate has been promoted to Beta and is enabled by default. by @rrhubenov [[#13851](https://github.com/gardener/gardener/pull/13851)]
- `[USER]` The field `.spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` in the `Shoot` spec will be automatically set to `nil` if users set it `false` as these two are equivalent across the codebase. The field is deprecated and users that enable anonymous authentication should migrate to Structured Authentication with [anonymous authenticator](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_access.md#configuring-anonymous-authentication) instead. by @dimityrmirchev [[#13707](https://github.com/gardener/gardener/pull/13707)]
- `[USER]` It is now explicitly supported to use short worker OS image versions in the `CloudProfile`, which are not defaulted when creating or updating the `Shoot` spec. by @Gerrit91 [[#13785](https://github.com/gardener/gardener/pull/13785)]
- `[USER]` The shoot deletion flow has been enhanced to tolerate leftover resources in the following situations:  
  - Objects that belong to namespaces which have already been deleted (finalized).  
  - Objects that were created after the cleanup process began for the first time, plus the finalize grace period. by @timuthy [[#13918](https://github.com/gardener/gardener/pull/13918)]

## ✨ New Features
- `[OPERATOR]` Gardener now supports pulling Helm charts from OCI registries that use custom or self-signed TLS certificates. This is particularly useful for air-gapped environments or when using private container registries with custom certificate authorities.  
    
  A new `caBundleSecretRef` field has been added to the `ociRepository` configuration in the following resources:  
  - `core.gardener.cloud/v1.ControllerDeployment`: `.helm.ociRepository.caBundleSecretRef`  
  - `core.gardener.cloud/v1beta1.ControllerDeployment`: `.helm.ociRepository.caBundleSecretRef`  
  - `operator.gardener.cloud/v1alpha1.Extension`: `.spec.deployment.{admission.{runtimeCluster,virtualCluster},extension}.helm.ociRepository.caBundleSecretRef`  
    
  The field references a secret in the `garden` namespace containing a PEM-encoded CA certificate bundle (data key: `bundle.crt`). For gardenlet usage, the secret must be labeled with `gardener.cloud/role=oci-ca-bundle`. by @shafeeqes [[#13868](https://github.com/gardener/gardener/pull/13868)]
- `[OPERATOR]` The `gardener-controller-manager` now increases all `ResourceQuota`s in project namespaces when a Gardener update leads to Gardener creating more resources in them. This was introduced to prevent failing Shoot reconciliations when `ResourceQuota`s of projects are near their limit. by @tobschli [[#13850](https://github.com/gardener/gardener/pull/13850)]
- `[OPERATOR]` Introduce fluent-bit-plugin v1 with OTLP support behind the OpenTelemetryCollector feature gate and adjust fluent-bit resources to select OTLP. by @nickytd [[#13961](https://github.com/gardener/gardener/pull/13961)]
- `[OPERATOR]` Introduced the Victoria Operator as a component to Seed & Garden Clusters. by @rrhubenov [[#13708](https://github.com/gardener/gardener/pull/13708)]
- `[OPERATOR]` When configuring a custom CNI path for containerd, GNA will now - in addition to checking the version of the config.toml config file - query containerd for its version and use the `bin_dirs` path with a string array if the config file version is 3 and containerd >= 2.2 is detected. by @MrBatschner [[#13826](https://github.com/gardener/gardener/pull/13826)]
- `[OPERATOR]` An instance of `OpenTelemetry Collector` is now deployed to the `garden` namespace of both `Garden` and `Seed` clusters. by @rrhubenov [[#13481](https://github.com/gardener/gardener/pull/13481)]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.35. To allow creation/update of 1.35 clusters you will have to update the version of your provider extension(s) to a version that supports 1.35 as well. Please consult the respective releases and notes in the provider extension's repository. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The `Shoot` field `.spec.seedSelector` can now be adjusted for already scheduled shoots, as long as the new selector still selects the assigned seed. by @timuthy [[#13920](https://github.com/gardener/gardener/pull/13920)]
- `[DEVELOPER]` gardenctl in local setup by @hown3d [[#13842](https://github.com/gardener/gardener/pull/13842)]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version `1.35`. Extension developers have to prepare individual extensions as well to work with `1.35`. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[DEVELOPER]` Environment variable `MAX_PARALLEL_WORKERS` can now be used to control the number of parallel workers that are spawned during the call to the `make generate` target. by @rrhubenov [[#13903](https://github.com/gardener/gardener/pull/13903)]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing unwanted reconciliations of Secrets and other objects due to cache resyncs in the project activity reconciler is now fixed. by @shafeeqes [[#13945](https://github.com/gardener/gardener/pull/13945)]
- `[OPERATOR]` This PR fixes webhook certificate reconciliation to properly apply changes in webhook configurations. by @acumino [[#13971](https://github.com/gardener/gardener/pull/13971)]
- `[OPERATOR]` Fixes a bug when feature gate UseUnifiedHTTPProxyPort was used in conjunction with a seed load balancer using proxy protocol. by @maboehm [[#13832](https://github.com/gardener/gardener/pull/13832)]
- `[OPERATOR]` Fixes a bug in the `UsesUnifiedHTTPProxyPort` constraint, when feature gate `UseUnifiedHTTPProxyPort` was used and then disabled again by @maboehm [[#13844](https://github.com/gardener/gardener/pull/13844)]
- `[USER]` gardener-apiserver: An issue in gardener-apiserver v1.135.0 causing `kubectl apply` for a Shoot to be wrongly rejected with "spec.dns.providers[0]: Required value: non-primary DNS providers must specify `type` and `credentialsRef`" in some cases is now fixed. by @ialidzhikov [[#13861](https://github.com/gardener/gardener/pull/13861)]
- `[DEVELOPER]` Enable MCM (cluster-autoscaler) to scale `provider-local` `Node`s. by @LucaBernstein [[#13804](https://github.com/gardener/gardener/pull/13804)]

## 🏃 Others
- `[OPERATOR]` Audit policy configmap for the gardener API server referenced in the garden resource is now validated. by @acumino [[#13478](https://github.com/gardener/gardener/pull/13478)]
- `[OPERATOR]` Upon gardenlet start all existing opentelemetry collector pipelines in shoot control planes will be migrated to the expected content. by @nickytd [[#14054](https://github.com/gardener/gardener/pull/14054)]
- `[OPERATOR]` The mutating `ShootDNS` admission plugin is now also a validating one. Validations which are executed by this admission plugin during the mutation phase are now moved to the validating `ShootDNS` admission plugin. by @ialidzhikov [[#13910](https://github.com/gardener/gardener/pull/13910)]
- `[OPERATOR]` Add Prometheus health check rule in the cache Prometheus to ensure the presence of `kubelet` volume stats metrics. by @vicwicker [[#13855](https://github.com/gardener/gardener/pull/13855)]
- `[OPERATOR]` Federate `shoot:node_operating_system:sum` time series from the garden to the longterm Prometheus. by @vicwicker [[#13805](https://github.com/gardener/gardener/pull/13805)]
- `[OPERATOR]` Fix flaky test for latest MCM release v0.61.x by @r4mek [[#13916](https://github.com/gardener/gardener/pull/13916)]
- `[OPERATOR]` The majority of the VerticalPodAutoscaler resources managed by Gardener are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @voelzmo [[#13819](https://github.com/gardener/gardener/pull/13819)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.2` to `v0.61.1`. [Release Notes](https://github.com/gardener/machine-controller-manager/releases/tag/v0.61.1) by @aaronfern [[#13865](https://github.com/gardener/gardener/pull/13865)]
- `[OPERATOR]` The existing `TooManyEtcdSnapshotCompactionJobsFailing` alert has been renamed to `EtcdSnapshotCompactionJobsFailingForSeed` and its expression has been fixed to correctly measure the fraction of namespaces with failures.  
  Two new per-namespace alerts (`EtcdSnapshotCompactionJobsFailingForNamespace` and `EtcdFullSnapshotsFailingForNamespace`) have been added to help operators identify specific shoot clusters where compaction jobs or full snapshots are failing above the 10% threshold. by @anveshreddy18 [[#14053](https://github.com/gardener/gardener/pull/14053)]
- `[OPERATOR]` Use Kubernetes 1.34.3 in the local setup. by @vicwicker [[#13855](https://github.com/gardener/gardener/pull/13855)]
- `[USER]` Allow `NamespacedCloudProfile.spec.limits` to be decreased. by @LucaBernstein [[#13724](https://github.com/gardener/gardener/pull/13724)]
- `[DEVELOPER]` The component checklist rule for **Define a `VerticalPodAutoscaler`** is enhanced with the convention that a VPA should define an explicit container policy for all containers that need to be auto-scaled and should have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. For more details, refer to the[Component Checklist](https://github.com/gardener/gardener/blob/v1.136.0/docs/development/component-checklist.md). by @voelzmo [[#13819](https://github.com/gardener/gardener/pull/13819)]
- `[DEVELOPER]` The TM tests are now adapted to run against Kubernetes 1.35. by @ialidzhikov [[#13995](https://github.com/gardener/gardener/pull/13995)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.34.0` to `v0.35.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.35.0)  
  - `github.com/gardener/etcd-druid/api` from `v0.34.0` to `v0.35.0`. by @renormalize [[#13950](https://github.com/gardener/gardener/pull/13950)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.3` to `1.83.4`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.4) by @gardener-ci-robot [[#13970](https://github.com/gardener/gardener/pull/13970)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.14.1` to `v1.14.2`. by @gardener-ci-robot [[#13880](https://github.com/gardener/gardener/pull/13880)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.4` to `1.83.5`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.5) by @gardener-ci-robot [[#13983](https://github.com/gardener/gardener/pull/13983)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/cpa/cluster-proportional-autoscaler` from `v1.9.0` to `v1.10.3`. by @gardener-ci-robot [[#13905](https://github.com/gardener/gardener/pull/13905)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.5` to `1.27.6`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.5` to `1.27.6`.   
  - `istio.io/api` from `v1.27.5` to `v1.27.6`. by @gardener-ci-robot [[#13986](https://github.com/gardener/gardener/pull/13986)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.2` to `1.83.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.3) by @gardener-ci-robot [[#13917](https://github.com/gardener/gardener/pull/13917)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/terminal-controller-manager` from `v0.34.0` to `v0.35.0`. [Release Notes](https://redirect.github.com/gardener/terminal-controller-manager/releases/tag/v0.35.0) by @gardener-ci-robot [[#13953](https://github.com/gardener/gardener/pull/13953)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.46.1` to `0.46.2`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.46.2) by @gardener-ci-robot [[#13959](https://github.com/gardener/gardener/pull/13959)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.30.1` to `v0.31.0`. by @gardener-ci-robot [[#13931](https://github.com/gardener/gardener/pull/13931)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/metrics-server/metrics-server` from `v0.8.0` to `v0.8.1`. by @gardener-ci-robot [[#13912](https://github.com/gardener/gardener/pull/13912)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.14.2` to `v1.14.3`. by @gardener-ci-robot [[#13940](https://github.com/gardener/gardener/pull/13940)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-conntrack` from `3.23.2` to `3.23.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.23.3) by @gardener-ci-robot [[#13948](https://github.com/gardener/gardener/pull/13948)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.4.0` to `2.5.0`. by @gardener-ci-robot [[#13839](https://github.com/gardener/gardener/pull/13839)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.0`
