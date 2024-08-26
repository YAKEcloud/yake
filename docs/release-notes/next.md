---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-hcloud to <code>0.6.30</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.30

</details>

<details>
<summary><b>Update provider-openstack to <code>1.41.2</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🏃 Others

- `[OPERATOR]` Fix an issue with share network reconciliation not calculating number of existing share networks correctly. by @AndreasBurger [#827]

## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.41.2`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.41.2`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.44.2</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` The memory limit from the `cert-controller-manager` Deployment is now removed. by @ialidzhikov [#287]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.44.2`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.5.2</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused the `-a exit,always -F arch=b64 -S mount_setattr -F auid!=-1 -F key=privileged_special` audit rule to not get correctly applied. by @plkokanov [#151]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.5.2`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.5.2`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.53.0</code></b></summary>

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


</details>
