# [github.com/gardener/gardener:v1.132.0]

## ⚠️ Breaking Changes
- `[DEPENDENCY]` The `.gardener.autonomousShootCluster` is no longer part of the Helm values when extension charts are rendered. The  field has been renamed to `gardener.selfHostedShootCluster`. In addition, the previous flag `--autonomous-shoot-cluster` has been renamed to `--self-hosted-shoot-cluster`. Extension developers should adapt their Helm charts. by @rfranzke [[#13273](https://github.com/gardener/gardener/pull/13273)]
- `[DEVELOPER]` "Autonomous Shoot Clusters" have been renamed to "Self-Hosted Shoot Clusters". The "medium-touch" scenario has been renamed to "managed infrastructure" scenario. The "high-touch" scenario has been renamed to "unmanaged infrastructure" scenario. by @rfranzke [[#13273](https://github.com/gardener/gardener/pull/13273)]

## 📰 Noteworthy
- `[DEVELOPER]` A new document has been added describing the development tasks for removing support for a Kubernetes version. See [Removing Support For a Kubernetes Version](https://github.com/gardener/gardener/blob/v1.132.0/docs/development/remove-support-for-kubernetes-version.md). by @RadaBDimitrova [[#12859](https://github.com/gardener/gardener/pull/12859)]

## ✨ New Features
- `[OPERATOR]` It is now possible to restrict the total count of objects for non-namespaced resources. You can set it through the admission controller configuration's `server.resourceAdmissionConfiguration.limits[].count` field. by @tobschli [[#12916](https://github.com/gardener/gardener/pull/12916)]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.34. To allow creation/update of 1.34 clusters you will have to update the version of your provider extension(s) to a version that supports 1.34 as well. Please consult the respective releases and notes in the provider extension's repository. by @tobschli [[#12883](https://github.com/gardener/gardener/pull/12883)]
- `[USER]` `gardener-node-agent` now labels worker nodes in shoot clusters with the `node-role.kubernetes.io/worker=""` label. by @rfranzke [[#13387](https://github.com/gardener/gardener/pull/13387)]
- `[USER]` Individual worker pools can now be scheduled for manual rollout using a new annotation on the shoot: `gardener.cloud/operation=rollout-workers=<pool1>,<pool2>,...,<poolN>`. by @rrhubenov [[#12829](https://github.com/gardener/gardener/pull/12829)]
- `[OPERATOR]` Operators can set `Seed.spec.settings.loadBalancerServices.class` ([docs](https://github.com/gardener/gardener/blob/v1.132.0/docs/operations/seed_settings.md#load-balancer-class)) and/or `GardenletConfiguration.exposureClassHandlers[].loadBalancerService.class` ([docs](https://github.com/gardener/gardener/blob/v1.132.0/docs/usage/networking/exposureclasses.md#gardenlet-configuration-exposureclass-handlers)) to specify a non-default `loadBalancerClass` for the corresponding istio-ingressgateway services on seeds. by @timebertt [[#13305](https://github.com/gardener/gardener/pull/13305)]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.34. Extension developers have to prepare individual extensions as well to work with 1.34. by @tobschli [[#12883](https://github.com/gardener/gardener/pull/12883)]
- `[DEVELOPER]` Gardener container images now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @vpnachev [[#13324](https://github.com/gardener/gardener/pull/13324)]

## 🐛 Bug Fixes
- `[OPERATOR]` `UnauthenticatedHTTP2DOSMitigation` feature gate is now always disabled for kube-apiservers where `IstioTLSTermination` (aka L7 load-balancing) is activated. This prevents unwanted side-effects when unauthenticated requests are sent. HTTP/2 "Rapid Reset" DoS Vulnerability is mitigated by Envoy in this case. by @oliver-goetz [[#13405](https://github.com/gardener/gardener/pull/13405)]
- `[DEVELOPER]` Fix `make kind-up` command to work correctly with Docker>=`v29.0.0`. by @oliver-goetz [[#13410](https://github.com/gardener/gardener/pull/13410)]
- `[OPERATOR]` Gardenlet's backupbucket and backupentry controllers are now unsetting all unknown labels and annotations on the extension secrets in the seed cluster, this fixes a bug that occurs after migration from `WorkloadIdentity` to `Secret` credentials the workload identity annotations and labels were kept in the secrets causing other controllers to keep trying to use the WorkloadIdentity credentials. by @vpnachev [[#13282](https://github.com/gardener/gardener/pull/13282)]
- `[OPERATOR]` Gardener no longer deploys the `node-exporter` ServiceMonitor in the `kube-system` namespace on unmanaged `Seed`s. by @rickardsjp [[#13382](https://github.com/gardener/gardener/pull/13382)]
- `[USER]` The feature for supporting custom server blocks in node-local-dns is now reverted. by @Kostov6 [[#13344](https://github.com/gardener/gardener/pull/13344)]
- `[USER]` An issue with the configuration for the `OpenTelemetryCollector` on the nodes that leads to missing kernel logs in `Vali` is now fixed. by @rrhubenov [[#13328](https://github.com/gardener/gardener/pull/13328)]
- `[OPERATOR]` The Istio Gateway dashboard now correctly displays the total resource usage across pod restarts. by @rickardsjp [[#13402](https://github.com/gardener/gardener/pull/13402)]
- `[DEVELOPER]` Backupentry generic actuator is fixed to clean all unknown annotations and labels from the `etcd-backup` secret, this change fixes issues when the credentials are switched between static secret and workload identity. by @vpnachev [[#13282](https://github.com/gardener/gardener/pull/13282)]

## 🏃 Others
- `[OPERATOR]` `gardener-resource-manager` now uses `kubernetes.io/metadata.name` label instead of `gardener.cloud/purpose` in its webhook namespace selectors. The `kubernetes.io/metadata.name` is added to all namespaces automatically by Kubernetes. by @shafeeqes [[#13398](https://github.com/gardener/gardener/pull/13398)]
- `[DEPENDENCY]` Updated dependency `containerd` to `v2.1.4` ([release notes](https://github.com/containerd/containerd/releases/tag/v2.1.4)). by @gardener-ci-robot [[#13311](https://github.com/gardener/gardener/pull/13311)]
- `[OPERATOR]` Removed obsolete validation for `shootDefaults` network disjointedness with `SeedNetworks`. by @domdom82 [[#13349](https://github.com/gardener/gardener/pull/13349)]
- `[OPERATOR]` The gardener-operator now does not wait for `verticalpodautoscalercheckpoints.autoscaling.k8s.io` to be present when the `Garden`s `.spec.runtimeCluster.settings.verticalPodAutoscaler.enabled` is false. This allows externally managed VPAs, that do not use the vpa checkpoint api, to be used with the gardener-operator. by @tobschli [[#13314](https://github.com/gardener/gardener/pull/13314)]
- `[OPERATOR]` When `IstioTLSTermination` is active `memory` of `istio-ingressgateways` is now scaled by VPA instead of HPA. VPA uses `updateMode: Initial` that it does not evict pods but only sets reasonable memory requests when new pods are created. by @oliver-goetz [[#13370](https://github.com/gardener/gardener/pull/13370)]
- `[USER]` The Shoot `.spec.kubernetes.kubeAPIServer.serviceAccountConfig.{issuer,acceptedIssuers}` fields are now validated against the OpenID Discovery 1.0 specification. by @acumino [[#13325](https://github.com/gardener/gardener/pull/13325)]
- `[OPERATOR]` Logging stack has been upgraded to fluent-bit v4.1.1 and logging plugin v0.68.0. by @nickytd [[#13358](https://github.com/gardener/gardener/pull/13358)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.1.1` to `2.1.2`. by @gardener-ci-robot [[#13384](https://github.com/gardener/gardener/pull/13384)]
- `[OPERATOR]` `fluent-bit` now supports IPv6 as well. by @damyan [[#12003](https://github.com/gardener/gardener/pull/12003)]
- `[OPERATOR]` Readiness probe was added to vpn-shoot tunnel-controller to improve VPN availability during shoot reconciliation. by @domdom82 [[#13366](https://github.com/gardener/gardener/pull/13366)]
- `[OPERATOR]` gardener-admission-controller VerticalPodAutoscaler name is changed from `gardener-admission-controller` to `gardener-admission-controller-vpa` to fix an issue with duplicate VPA resources for the gardener-admission-controller Deployment. The VPA resource name with the deprecated controlplane chart was `gardener-controller-manager-vpa`. Previously, switching to the gardener-operator created a VPA with name `gardener-controller-manager` that targets the same Deployment. by @ialidzhikov [[#13430](https://github.com/gardener/gardener/pull/13430)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.28.1` to `v0.29.0`. by @gardener-ci-robot [[#13350](https://github.com/gardener/gardener/pull/13350)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.13.3` to `v1.13.4`. by @gardener-ci-robot [[#13318](https://github.com/gardener/gardener/pull/13318)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.43.0` to `0.44.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.44.0) by @gardener-ci-robot [[#13339](https://github.com/gardener/gardener/pull/13339)]
- `[OPERATOR]` The following dependencies are updated:  
  - `k8s.io/*`: `v0.33.5` -> `v0.34.1`  
  - `sigs.k8s.io/controller-runtime`: `v0.21.0` -> `v0.22.3`  
  - `sigs.k8s.io/controller-tools`: `v0.18.0` -> `v0.19.0` by @ScheererJ [[#13238](https://github.com/gardener/gardener/pull/13238)]
- `[OPERATOR]` Defaulting of the Shoot Kubernetes versions (`.spec.kubernetes.version` and `.spec.provider.workers[].kubernetes.version`) is moved from the `ShootValidator` to the `ShootMutator` admission plugin. by @ialidzhikov [[#13252](https://github.com/gardener/gardener/pull/13252)]
- `[OPERATOR]` Add system load average (1min avg) panel to the Node Details dashboard by @IndritFejza [[#13280](https://github.com/gardener/gardener/pull/13280)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/node-exporter` from `v1.9.1` to `v1.10.2`. by @gardener-ci-robot [[#13266](https://github.com/gardener/gardener/pull/13266)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.40.0` to `0.41.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.41.0) by @gardener-ci-robot [[#13291](https://github.com/gardener/gardener/pull/13291)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `fluent/fluent-operator` from `v3.3.0` to `v3.5.0` ([Release Notes](https://redirect.github.com/fluent/fluent-operator/releases/tag/v3.5.0)). by @gardener-ci-robot [[#13292](https://github.com/gardener/gardener/pull/13292)]
- `[USER]` It is possible now to create IPv6 workerless shoots without specifying a service range. by @axel7born [[#13224](https://github.com/gardener/gardener/pull/13224)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.9` to `2.0.3`. by @gardener-ci-robot [[#13288](https://github.com/gardener/gardener/pull/13288)]
- `[OPERATOR]` Shoot api now supports configuring additional CA Flags for node group backoff namely `initialNodeGroupBackoffDuration`, `maxNodeGroupBackoffDuration` and `nodeGroupBackoffResetTimeout`. by @ashwani2k [[#13403](https://github.com/gardener/gardener/pull/13403)]
- `[OPERATOR]` Defaulting of the Shoot networks is moved from the `ShootValidator` to the `ShootMutator` admission plugin. by @ialidzhikov [[#13207](https://github.com/gardener/gardener/pull/13207)]
- `[OPERATOR]` Support custom server blocks in node-local-dns. by @DockToFuture [[#13375](https://github.com/gardener/gardener/pull/13375)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.0.3` to `2.1.1`. by @gardener-ci-robot [[#13374](https://github.com/gardener/gardener/pull/13374)]
- `[OPERATOR]` `maxEmptyBulkDelete` is explicitly set to nil, since it can no longer be set for Kubernetes versions >= v1.33. by @RadaBDimitrova [[#13054](https://github.com/gardener/gardener/pull/13054)]
- `[OPERATOR]` Migration from dual-stack [IPv4, IPv6] to [IPv4] networking is now allowed. by @axel7born [[#12967](https://github.com/gardener/gardener/pull/12967)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.13.4` to `v1.14.0`. by @gardener-ci-robot [[#13319](https://github.com/gardener/gardener/pull/13319)]
- `[OPERATOR]` Increase client-side rate limits for kube-controller-manager to `--kube-api-qps=100` and `--kube-api-burst=200` by @voelzmo [[#13251](https://github.com/gardener/gardener/pull/13251)]
- `[OPERATOR]` Additional input validations for the SecurityBinding and CredentialsBinding resources are now implemented. by @georgibaltiev [[#13258](https://github.com/gardener/gardener/pull/13258)]
- `[OPERATOR]` `NamespacedCloudprofiles` are now compatible with parent `CloudProfiles` that use `MachineCapabilities`. Read more about capabilities in [GEP-33](https://github.com/gardener/gardener/blob/master/docs/proposals/33-machine-image-capabilities.md). by @Roncossek [[#13138](https://github.com/gardener/gardener/pull/13138)]

## 📖 Documentation
- `[OPERATOR]` Add disaster recovery guide for the garden cluster by @hendrikKahl [[#13239](https://github.com/gardener/gardener/pull/13239)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.0`
