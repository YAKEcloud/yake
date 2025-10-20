# [github.com/gardener/gardener:v1.130.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The following `Shoot` fields are now validated:  
  - `.spec.kubernetes.verticalPodAutoscaler.evictionRateBurst` must be non-negative.  
  - `.spec.kubernetes.verticalPodAutoscaler.evictionTolerance` is limited in [0, 1) interval.  
  - `.spec.kubernetes.verticalPodAutoscaler.recommendationMarginFraction` is limited in [0, 1) interval.  
  - `.spec.kubernetes.kubeScheduler.kubeMaxPDVols` must be a positive number.  
  - `.spec.tolerations[]` `key` and `value` are validated similar to Kubernetes [Tolerations](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.33/#toleration-v1-core).  
  - `.spec.schedulerName` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names).  
  - `.spec.extensions[].type` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names).  
  - `.spec.provider.type` must comply with [RFC 1123 Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names). by @dimitar-kostadinov [[#12844](https://github.com/gardener/gardener/pull/12844)]

## 📰 Noteworthy
- `[DEVELOPER]` The Gardener reviewer groups have been refined and can be found in the [`OWNERS_ALIASES`](https://github.com/gardener/gardener/blob/master/OWNERS_ALIASES) file. This will serve as the foundation for finding appropriate reviewers for the respective areas in the future. by @timuthy [[#13024](https://github.com/gardener/gardener/pull/13024)]

## ✨ New Features
- `[DEVELOPER]` Shoot advertised addresses are now configurable by extension components for Shoot Ingress resources. For more details, see [Shoot Advertised Addresses](https://github.com/gardener/gardener/blob/v1.130.0/docs/development/shoot-advertised-addresses.md). by @dnaeon [[#13043](https://github.com/gardener/gardener/pull/13043)]
- `[OPERATOR]` `gardener-operator` now prevents deletion of the `garden` namespace in the runtime cluster while `operator.gardener.cloud/v1alpha1.Garden` resources still exist. by @rfranzke [[#13101](https://github.com/gardener/gardener/pull/13101)]

## 🐛 Bug Fixes
- `[OPERATOR]` The `quay.io/kiwigrid/k8s-sidecar` image is downgraded to `v1.30.9` to prevent a regression that causes Plutono dashboards to not be loaded. by @rickardsjp [[#13187](https://github.com/gardener/gardener/pull/13187)]
- `[OPERATOR]` A bug which deactivates topology aware routing for kube-apiservers when l7 load-balancing is not active has been fixed. by @oliver-goetz [[#13185](https://github.com/gardener/gardener/pull/13185)]
- `[USER]` Fixes an issue where connecting to the kube-apiserver via the seed ingress URL did not work when the shoot used an exposure class. by @axel7born [[#13055](https://github.com/gardener/gardener/pull/13055)]
- `[USER]` An upstream issue causing kube-proxy to log thousands of log entries per second is now mitigated by reducing the kube-proxy verbosity level when running an affected Kubernetes version in the range [1.33.0, 1.33.6). For more details, see http://issues.k8s.io/132678. by @ialidzhikov [[#13192](https://github.com/gardener/gardener/pull/13192)]
- `[DEVELOPER]` In the local setup, the hosts file entry for `garden.local.gardener.cloud` is written again upon node reboot. by @LucaBernstein [[#13132](https://github.com/gardener/gardener/pull/13132)]
- `[OPERATOR]` A bug has been fixed which prevented L7 load-balancing for kube-apiservers to work correctly on Seeds/Gardens where topology-aware-routing is activated. by @oliver-goetz [[#13081](https://github.com/gardener/gardener/pull/13081)]
- `[DEVELOPER]` A default `KUBECONFIG` is now set when running `make seed-{up|down}`. by @oliver-goetz [[#13071](https://github.com/gardener/gardener/pull/13071)]
- `[DEVELOPER]` The testmachinery tests for control plane migration were fixed so that the checks if nodes are kept after control plane migration are executed. by @plkokanov [[#13057](https://github.com/gardener/gardener/pull/13057)]
- `[OPERATOR]` The `worker-pools-operatingsystemconfig-hashes` secret is now restored in the `Shoot`'s control plane during the restore phase of control plane migration. This fixes an issue which caused node rollouts to happen during control plane migration when the `NewWorkerPoolHash` feature gate is enabled. by @plkokanov [[#13056](https://github.com/gardener/gardener/pull/13056)]

## 🏃 Others
- `[OPERATOR]` Use aggregate Prometheus internal service for federation from the garden Prometheus when the runtime cluster is a seed by @vicwicker [[#13066](https://github.com/gardener/gardener/pull/13066)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.3` to `1.82.4`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.4) by @gardener-ci-robot [[#13157](https://github.com/gardener/gardener/pull/13157)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.21` to `v0.8.22`. by @gardener-ci-robot [[#13032](https://github.com/gardener/gardener/pull/13032)]
- `[OPERATOR]` Introduces feature gate `UseUnifiedHTTPProxy` for unified HTTP proxy infrastructure. by @hown3d [[#13003](https://github.com/gardener/gardener/pull/13003)]
- `[DEVELOPER]` The custom client certificate parsing in `IstioTLSTermination` lua scripts was replaced with `parsedSubjectPeerCertificate()` envoy function. by @oliver-goetz [[#13128](https://github.com/gardener/gardener/pull/13128)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/cortexproject/cortex` from `v1.19.0` to `v1.19.1`. by @gardener-ci-robot [[#13148](https://github.com/gardener/gardener/pull/13148)]
- `[OPERATOR]` The following `kube-apiserver` metrics are now collected, which might be handy to optimize Priority and Fairness usage:  
  - `apiserver_flowcontrol_current_inqueue_requests`  
  - `apiserver_flowcontrol_current_executing_requests`  
  - `apiserver_flowcontrol_current_executing_seats`  
  - `apiserver_flowcontrol_request_wait_duration_seconds`  
  - `apiserver_flowcontrol_nominal_limit_seats`  
  - `apiserver_flowcontrol_request_concurrency_in_use`  
  - `apiserver_flowcontrol_priority_level_request_utilization`  
  - `apiserver_flowcontrol_priority_level_seat_utilization` by @dimakow [[#13000](https://github.com/gardener/gardener/pull/13000)]
- `[OPERATOR]` Add support for gzip compression to metrics endpoint of istio ingress gateway. by @ScheererJ [[#13137](https://github.com/gardener/gardener/pull/13137)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.5.0` to `v1.6.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.6.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.5.0` to `v1.6.0`. by @ashwani2k [[#13127](https://github.com/gardener/gardener/pull/13127)]
- `[OPERATOR]` `gardener-node-agent-init` now outputs logs to journal and console (`/dev/console`). by @RAPSNX [[#12822](https://github.com/gardener/gardener/pull/12822)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.1` to `1.27.2`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.1` to `1.27.2`. by @gardener-ci-robot [[#13151](https://github.com/gardener/gardener/pull/13151)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.2` to `1.82.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.3) by @gardener-ci-robot [[#13069](https://github.com/gardener/gardener/pull/13069)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.32.0` to `v0.33.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.33.0) by @shreyas-s-rao [[#13172](https://github.com/gardener/gardener/pull/13172)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.4.2` to `1.5.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.4.2` to `1.5.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.4.2` to `1.5.1`. by @gardener-ci-robot [[#13095](https://github.com/gardener/gardener/pull/13095)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.0` to `1.27.1`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.0` to `1.27.1`. by @axel7born [[#13004](https://github.com/gardener/gardener/pull/13004)]
- `[OPERATOR]` New panels added in VPA Recommendations Plutono dashboard to track number of pods with deviations from their CPU recommendation. by @RadaBDimitrova [[#12898](https://github.com/gardener/gardener/pull/12898)]
- `[OPERATOR]` VerticalPodAutoscaler resources, deployed by Gardener, are now instrumented to switch from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#13046](https://github.com/gardener/gardener/pull/13046)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `open-telemetry/opentelemetry-operator` from `v0.129.1` to `v0.136.0`. [Release Notes](https://redirect.github.com/open-telemetry/opentelemetry-operator/releases/tag/v0.136.0) by @rrhubenov [[#13106](https://github.com/gardener/gardener/pull/13106)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.10` to `1.30.11`. by @gardener-ci-robot [[#13149](https://github.com/gardener/gardener/pull/13149)]
- `[OPERATOR]` Logging stack configuration is now tuned for high-throughput scenarios. It brings changes in local file system resource utilization, addressing potential node disk pressure occurrences. by @nickytd [[#13116](https://github.com/gardener/gardener/pull/13116)]
- `[OPERATOR]` Add IOPS metrics to etcd dashboard by @voelzmo [[#13146](https://github.com/gardener/gardener/pull/13146)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.130.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.130.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.130.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.130.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.130.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.130.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.130.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.130.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.130.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.130.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.130.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.130.0`
