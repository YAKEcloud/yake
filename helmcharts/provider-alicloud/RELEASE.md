# [gardener/gardener-extension-provider-alicloud]

## ✨ New Features

- `[OPERATOR]` This extension now makes use of the new `.spec.pools[].userDataSecretRef` field to get to the worker pool user data. by @rfranzke [#727]
- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#734]
- `[USER]` The provider-alicloud extension does now support shoot clusters with Kubernetes version 1.30. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md) before upgrading to 1.30.  by @shafeeqes [#722]
## 🏃 Others

- `[OPERATOR]` The `controlplaneexposure.alicloud.extensions.gardener.cloud` webhook does no longer mutate Services/Deployments. Previously the webhook was called for Services/Deployments mutations and was not mutating anything. by @ialidzhikov [#725]
- `[OPERATOR]` This extension is now using the new way of providing monitoring configuration (ref [GEP-19](https://github.com/gardener/gardener/blob/master/docs/proposals/19-migrating-observability-stack-to-operators.md)) in case a shoot cluster's Prometheus has been migrated to management via `prometheus-operator`. by @rfranzke [#720]
- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-alicloud` Helm chart. by @timuthy [#732]
- `[OPERATOR]` Inserts architecture from worker to the machine class by @sssash18 [#735]
- `[OPERATOR]` NodeGroupAutoscalingOptions can now be specified per worker group via the worker through the field `worker.spec.pools.clusterAutoscaler` by @aaronfern [#715]
# [gardener/machine-controller-manager]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @ccwienk [gardener/machine-controller-manager#878]
- `[DEVELOPER]`  New provider method Driver.InitializeMachine added for Post-Creation VM Instance Initialization steps. by @elankath [gardener/machine-controller-manager#898]
## 🐛 Bug Fixes

- `[DEVELOPER]` MCM restart happens properly in integration tests now. This fix will get activated, once this version is vendored in your mcm-provider by @sssash18 [gardener/machine-controller-manager#879]
- `[OPERATOR]` Fix for edge case of Node object deletion missed during machine termination. by @elankath [gardener/machine-controller-manager#887]
## 🏃 Others

- `[OPERATOR]` machine controller won't reconcile machine on non-spec update events by @himanshu-kun [gardener/machine-controller-manager#877]
- `[OPERATOR]` Updated k8s dependencies to `v0.29.3` by @rishabh-11 [gardener/machine-controller-manager#907]
- `[OPERATOR]` fixed IT for seed with k8s >= 1.27 as control cluster  by @piyuagr [gardener/machine-controller-manager#869]
- `[OPERATOR]` Removed vendor directory by @rishabh-11 [gardener/machine-controller-manager#903]
- `[OPERATOR]` Architecture field added in the nodetemplate. This will allow CA to pickup architecture from machine class and schedule pods on relevant arch nodes. by @sssash18 [gardener/machine-controller-manager#894]
- `[DEVELOPER]` go-git now removed from dependencies due to CVE's. by @elankath [gardener/machine-controller-manager#896]
- `[DEVELOPER]` Bump `k8s.io/*` deps to `v0.28.2` by @afritzler [gardener/machine-controller-manager#858]
## 📖 Documentation

- `[DEVELOPER]` Phase transition diagram for a machine object is added to FAQs by @himanshu-kun [gardener/machine-controller-manager#886]
# [gardener/machine-controller-manager-provider-alicloud]

## 🏃 Others

- `[DEVELOPER]` Removed vendor directory by @rishabh-11 [gardener/machine-controller-manager-provider-alicloud#74]

## Helm Charts
- admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud:v1.53.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.53.0`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.53.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.53.0`
