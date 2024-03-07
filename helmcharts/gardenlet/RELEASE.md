# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `UseGardenerNodeAgent` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @rfranzke [#9208]
- `[OPERATOR]` ⚠️ Gardener does no longer support garden, seed, or shoot clusters with Kubernetes versions == 1.24. Make sure to upgrade all existing clusters before upgrading to this Gardener version. by @shafeeqes [#8989]
- `[OPERATOR]` The `APIServerFastRollout` feature gate has been promoted to GA. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @oliver-goetz [#9214]
- `[DEVELOPER]` The `pkg/envtest` package has been moved to `test/envtest`. Most component packages in `pkg/component` have been moved. The `pkg/openapi` and `pkg/registry` packages have been moved to `pkg/apiserver/*`. by @rfranzke [#9217]
- `[DEVELOPER]` Function signature of infrastructure controller `NewReconciler` has changed from `NewReconciler(manager.Manager, Actuator, ConfigValidator)` to NewReconciler(manager.Manager, Actuator, ConfigValidator, map[gardencorev1beta1.ErrorCode]func(string) bool). by @acumino [#9321]
- `[USER]` The `spec.kubernetes.allowPrivilegedContainers` field in the Shoot API is deprecated and will be removed in a future version. This field is not relevant to Shoots with kubernetes versions >= 1.25. Please adapt your controllers accordingly. by @shafeeqes [#8989]
## 📰 Noteworthy

- `[USER]` It is no longer possible to add or change the `.spec.seedSelector` field in `Shoot`s when `spec.seedName` is already set. by @rfranzke [#9212]
## ✨ New Features

- `[OPERATOR]` `DNSRecord` resources for seed and shoot clusters now have an annotation indicating their target ip stack (`dns.gardener.cloud/ip-stack` set to either `ipv4`, `ipv6`, or `dual-stack`). by @ScheererJ [#9289]
- `[OPERATOR]` `gardener-resource-manager`'s health check controller now checks whether `VerticalPodAutoscaler`s report the `ConfigUnsupported` condition. by @rfranzke [#9211]
- `[USER]` It is now possibleto specify some `cluster-autoscaler` related options per worker pool `in Shoot`s via `spec.provider.workers[].clusterAutoscaler`. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_autoscaling.md). by @aaronfern [#9245]
- `[USER]` In order to fine-tune VPA CPU recommendations, the CPU target percentile parameter for `vpa-recommender` can now be configured in the `Shoot` specification via the `.spec.kubernetes.verticalPodAutoscaler.targetCPUPercentile` field. by @voelzmo [#9279]
- `[DEVELOPER]` It is now possible to provide configuration for the aggregate Prometheus running in seed clusters' `garden` namespaces. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/extensions/logging-and-monitoring.md#aggregate-prometheus). by @rfranzke [#9200]
## 🐛 Bug Fixes

- `[DEPENDENCY]` An issue was fixed that sometimes led to leaked `extension-controlplane-shoot-webhooks` which blocked the shoot deletion. by @timuthy [#9209]
- `[DEPENDENCY]` `hack/hook-me.sh` now ensures the required network connectivity so that the quic tunnel can be successfully established.  by @vpnachev [#8909]
- `[USER]` A bug causing shoot force-deletion to get stuck in case the secrets referred by the DNS Records are outdated is now fixed. by @acumino [#9324]
## 🏃 Others

- `[OPERATOR]` Update Istio to v1.19.7 by @axel7born [#9215]
- `[OPERATOR]` Bump alpine to 3.19.1 by @ary1992 [#9315]
- `[OPERATOR]` Enhance `NodeNotHealthy` Prometheus alert to fire immediately. by @adenitiu [#9314]
- `[OPERATOR]` `gardener-node-agent` now terminates itself (leading to a restart of its `systemd` unit) in case it determines that the hostname of its node has changed. by @rfranzke [#9280]
- `[OPERATOR]` Resource requests of istio ingress gateway are reduced and its horizontal autoscaling behaviour specified in more detail, including scale-up under memory pressure by @ScheererJ [#9250]
- `[OPERATOR]` The `VerticalPodAutoscaler` object for the shoot Prometheus is now labeled with `app=prometheus,role=monitoring`, similar to the corresponding `StatefulSet`. by @nickytd [#9244]
- `[OPERATOR]` Set `reinvocationPolicy: IfNeeded` for VPA admission-controller webhook to ensure that webhooks injecting sidecar containers will not trigger and endless eviction loop. by @voelzmo [#9191]
- `[DEPENDENCY]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.28.4` -> `v0.29.2`  
  - `sigs.k8s.io/controller-runtime`: `v0.16.3` -> `v0.17.2` by @shafeeqes [#9174]
- `[USER]` The validation error shown when a user tries to change the `.spec.seedName` field of a Shoot will now also display the old and new values to better indicate that a change was attempted. by @plkokanov [#9294]
# [gardener/dependency-watchdog]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @ccwienk [gardener/dependency-watchdog#93]
- `[OPERATOR]` DWD no longer depends on checking the reachability of Kube-API server via external load-balancer as kube-proxy path optimizations makes that impossible on infrastructures which have a static IP for the LB. Instead it now depends on node leases that are periodically renewed by each node running in the shoot cluster to determine its scaling action (scale-down/up). by @rishabh-11 [gardener/dependency-watchdog#94]
## 🏃 Others

- `[OPERATOR]` Make `kcmNodeMonitorGraceDuration` optional in the prober config and use a default value of `40s` if not specified in the shoot and the config. by @rishabh-11 [gardener/dependency-watchdog#101]
- `[DEVELOPER]` Use `ginkgolinter` instead of self baked `gomegacheck` by @himanshu-kun [gardener/dependency-watchdog#95]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.90.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.90.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.90.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.90.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.90.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.90.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.90.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.90.0`
