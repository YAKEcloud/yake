---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-calico to <code>1.39.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-calico` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#326]
## 🏃 Others

- `[OPERATOR]` Update calico to `v3.27.2`. by @gardener-ci-robot [#354]
- `[OPERATOR]` Set leader election namespace in calico admission deployment. by @DockToFuture [#335]
- `[OPERATOR]` Allow communication to runtime apiserver from admission deployment. by @DockToFuture [#336]

## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.39.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.39.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.33.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-cilium` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#233]
## 🏃 Others

- `[OPERATOR]` Update cilium to `v1.14.9` by @gardener-ci-robot [#259]
- `[OPERATOR]` Cilium configuration option `enable-l7-proxy` is now enabled per default. by @ScheererJ [#261]
- `[OPERATOR]` Fixed a validation error which occurs when deploying the `gardener-extension-admission-cilium` charts because of a missing `apiVersion` field in its `charts/gardener-extension-admission-cilium/charts/runtime/templates/serviceaccount.yaml` file. by @plkokanov [#241]
- `[OPERATOR]` Set leader election namespace in cilium admission deployment. by @DockToFuture [#243]

## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.33.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.33.0`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.4.0</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#57]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @ccwienk [#47]
- `[OPERATOR]` `extension-shoot-rsyslog-relp` no longer supports Shoots with Кubernetes version == 1.24. by @Kostov6 [#79]
## 📰 Noteworthy

- `[DEVELOPER]` The `charts/images.yaml` file was moved to `imagevector/images.yaml`. by @plkokanov [#66]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue where the `extension-shoot-rsyslog-relp-configuration-cleaner` ManagedResource could block Shoot deletion if the `shoot-rsyslog-relp` was disabled before the Shoot deletion was triggered, and disabling the extension failed while trying to deploy the said ManagedResource and wait for it to become ready.  by @plkokanov [#80]
## 🏃 Others

- `[OPERATOR]` Bumped `github.com/gardener/gardener` to `v1.89.0.` by @plkokanov [#73]
- `[OPERATOR]` The extension now deploys the `rsyslog` configuration files by mutating the `OperatingSystemConfig` resource via a mutating webhook. Cleanup of the `rsyslog` configuration files is still handled by the `rsyslog-relp-configuration-cleaner` daemonset. by @plkokanov [#41]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#57]
- `[OPERATOR]` Fixed an issue where `rsyslog.service` would never get enabled if it was not already enabled by default. by @plkokanov [#58]
- `[OPERATOR]` The name of the `gardener-extension-shoot-rsyslog-relp-admission` chart is now correctly specified as `gardener-extension-shoot-rsysloog-relp-admission`. Previously it was `gardener-extension-shoot-rsyslog-relp`. This should not require anything to be done by operators when upgrading the chart. by @plkokanov [#39]
- `[OPERATOR]` The repository is now compliant with the [REUSE](https://reuse.software/) license format. by @plkokanov [#71]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#57]
- `[DEVELOPER]` Bumped golang to `v1.22.0` by @plkokanov [#73]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.4.0`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.4.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.54.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-aws` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#849]
- `[USER]` [csi-snapshotter] Enable prevent-volume-mode-conversion feature flag by default. Volume mode change can still be triggered with the respective annotations. You can read more in the [KEP](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/3141-prevent-volume-mode-conversion) by @AndreasBurger [#899]
## 🐛 Bug Fixes

- `[DEVELOPER]` `source-` prefix of `BackupEntry` name is being ignored when performing entry deletion by @Kostov6 [#892]
## 🏃 Others

- `[DEPENDENCY]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.87.0`->`v1.91.1`  
  - k8s.io/* : v0.28.3 -> v0.29.3  
  - sigs.k8s.io/controller-runtime: v0.16.3-> v0.17.2 by @shafeeqes [#901]
- `[OPERATOR]` The following images are updated:  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.25.14 -> v1.25.15  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.26.10 -> v1.26.11  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.27.5 -> v1.27.6  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.28.4 -> v1.28.5  
  - registry.k8s.io/provider-aws/cloud-controller-manager: v1.29.1 -> v1.29.2 by @ialidzhikov [#900]
- `[OPERATOR]` add os information as labels in machine class objects. by @tedteng [#894]
- `[OPERATOR]` NodeGroupAutoscalingOptions can now be specified per worker group via the worker through the field `worker.spec.pools.clusterAutoscaler` by @shafeeqes [#901]

## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.54.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.54.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.74.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Changes have been made to two `gardener-dashboard` Helm chart values related to the ticket feature:  
  - The value previously at `Values.global.dashboard.frontendConfig.ticket.newTicketLabels` has been moved to `Values.global.dashboard.frontendConfig.ticket.newIssue.labels`.  
  - The value previously at `Values.global.dashboard.frontendConfig.ticket.issueDescriptionTemplate` has been moved to `Values.global.dashboard.frontendConfig.ticket.newIssue.body`. by @petersutter [#1775]
## ✨ New Features

- `[USER]` To enhance user experience and minimize premature notifications, we've implemented a new feature in the update notification system. Now, an update alert for Kubernetes and machine image versions will only be displayed if the current version is set to expire within the next 30 days. This adjustment ensures that users receive timely reminders without unnecessary warnings for versions expiring in the more distant future by @grolu [#1746]
- `[USER]` Route information is now included in the browser window title by @grolu [#1752]
- `[USER]` Added Fallback Solution for Non-SemVer Compatible Machine Image Versions: In previous versions, machine images from some vendors that did not adhere to Semantic Versioning (SemVer) standards were omitted from the user view in the dashboard. This was due to the Dashboard's strict adherence to SemVer for sorting and presenting image versions, resulting in non-compliant versions being filtered out. To address this, we now try to normalize those versions to make them SemVer compliant. If this is not possible, affected versions will still be filtered out. by @grolu [#1734]
- `[USER]` Several improvements to version and worker chips:  
  - Version & Worker Group Chips: Now, both show in a warning color if deprecated, offering a clear visual cue for items needing updates. The version chip also reveals detailed info, including classification and expiration, with a click.  
  - Cluster Management: Updating clusters is now streamlined under the actions menu on the cluster list page for easier access.  
  - Consistent UI: Version information now appears as a chip on cluster details, aligning with the display of worker chips for a unified look. by @grolu [#1758]
- `[OPERATOR]` GitHub issue forms are now supported when creating new tickets (GitHub issues) from the dashboard.  
  - Set `Values.global.dashboard.frontendConfig.ticket.newIssue.template` to specify the filename of the issue form template. For more information, refer to the [GitHub documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)  
  - To pre-fill template form elements, specify the `id` of the form element under `Values.global.dashboard.frontendConfig.ticket.newIssue`. For instance, if you have a form element with `id` `affectedCluster`, you can pre-fill it like this: `Values.global.dashboard.frontendConfig.ticket.newIssue.affectedCluster="${shootUrl}"`. The template variable `shootUrl` will be replaced during runtime with the actual dashboard link of the shoot cluster. by @petersutter [#1775]
## 🐛 Bug Fixes

- `[USER]` Fixed a bug that allowed to bypass the GDialog confirmation using <enter> by @grolu [#1751]
- `[USER]` Resolved Chrome Warnings and Enhanced Performance by Streamlining Font Formats for Material Design Icons: In our latest update, we've optimized the `@font-face` definition for Material Design Icons by removing the OpenType (.eot) and TrueType (.ttf) font formats. This adjustment significantly enhances the performance and reduces the bandwidth usage of our dashboard web application, ensuring a smoother and more efficient user experience. by @holgerkoser [#1731]
- `[USER]` Fixed an issue that caused quotas using numerical abbreviations (e.g., '1k') to not be displayed correctly in the Gardener Dashboard by @grolu [#1719]
## 🏃 Others

- `[USER]` The `gardenlogin` kubeconfig now only includes kube-apiserver addresses from `Shoot.status.advertisedAddresses`. This ensures compatibility with `gardener/gardener` version `v1.91.0` and later. by @petersutter [#1750]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.74.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.74.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Changes have been made to two `gardener-dashboard` Helm chart values related to the ticket feature:  
  - The value previously at `Values.global.dashboard.frontendConfig.ticket.newTicketLabels` has been moved to `Values.global.dashboard.frontendConfig.ticket.newIssue.labels`.  
  - The value previously at `Values.global.dashboard.frontendConfig.ticket.issueDescriptionTemplate` has been moved to `Values.global.dashboard.frontendConfig.ticket.newIssue.body`. by @petersutter [#1775]
## ✨ New Features

- `[USER]` To enhance user experience and minimize premature notifications, we've implemented a new feature in the update notification system. Now, an update alert for Kubernetes and machine image versions will only be displayed if the current version is set to expire within the next 30 days. This adjustment ensures that users receive timely reminders without unnecessary warnings for versions expiring in the more distant future by @grolu [#1746]
- `[USER]` Route information is now included in the browser window title by @grolu [#1752]
- `[USER]` Added Fallback Solution for Non-SemVer Compatible Machine Image Versions: In previous versions, machine images from some vendors that did not adhere to Semantic Versioning (SemVer) standards were omitted from the user view in the dashboard. This was due to the Dashboard's strict adherence to SemVer for sorting and presenting image versions, resulting in non-compliant versions being filtered out. To address this, we now try to normalize those versions to make them SemVer compliant. If this is not possible, affected versions will still be filtered out. by @grolu [#1734]
- `[USER]` Several improvements to version and worker chips:  
  - Version & Worker Group Chips: Now, both show in a warning color if deprecated, offering a clear visual cue for items needing updates. The version chip also reveals detailed info, including classification and expiration, with a click.  
  - Cluster Management: Updating clusters is now streamlined under the actions menu on the cluster list page for easier access.  
  - Consistent UI: Version information now appears as a chip on cluster details, aligning with the display of worker chips for a unified look. by @grolu [#1758]
- `[OPERATOR]` GitHub issue forms are now supported when creating new tickets (GitHub issues) from the dashboard.  
  - Set `Values.global.dashboard.frontendConfig.ticket.newIssue.template` to specify the filename of the issue form template. For more information, refer to the [GitHub documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)  
  - To pre-fill template form elements, specify the `id` of the form element under `Values.global.dashboard.frontendConfig.ticket.newIssue`. For instance, if you have a form element with `id` `affectedCluster`, you can pre-fill it like this: `Values.global.dashboard.frontendConfig.ticket.newIssue.affectedCluster="${shootUrl}"`. The template variable `shootUrl` will be replaced during runtime with the actual dashboard link of the shoot cluster. by @petersutter [#1775]
## 🐛 Bug Fixes

- `[USER]` Fixed a bug that allowed to bypass the GDialog confirmation using <enter> by @grolu [#1751]
- `[USER]` Resolved Chrome Warnings and Enhanced Performance by Streamlining Font Formats for Material Design Icons: In our latest update, we've optimized the `@font-face` definition for Material Design Icons by removing the OpenType (.eot) and TrueType (.ttf) font formats. This adjustment significantly enhances the performance and reduces the bandwidth usage of our dashboard web application, ensuring a smoother and more efficient user experience. by @holgerkoser [#1731]
- `[USER]` Fixed an issue that caused quotas using numerical abbreviations (e.g., '1k') to not be displayed correctly in the Gardener Dashboard by @grolu [#1719]
## 🏃 Others

- `[USER]` The `gardenlogin` kubeconfig now only includes kube-apiserver addresses from `Shoot.status.advertisedAddresses`. This ensures compatibility with `gardener/gardener` version `v1.91.0` and later. by @petersutter [#1750]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.74.0`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.4.1</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🏃 Others

- `[OPERATOR]` The `ConfigMap` deployed for the monitoring configuration of the `shoot-rsyslog-relp` extension  in `Shoot` control planes is no longer `immutable`. This fixes an issue that could cause `prometheus-0` pods to get stuck in `CrashLoopBackOff`. by @plkokanov [#91]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.4.1`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.4.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.92.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `gardenlet` to try deploying `gardener-node-agent` with a wrong image tag. by @rfranzke [#9582]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.92.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.92.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.92.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.92.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.92.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.92.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.92.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.92.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.92.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `gardenlet` to try deploying `gardener-node-agent` with a wrong image tag. by @rfranzke [#9582]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.92.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.92.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.92.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.92.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.92.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.92.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.92.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.92.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.92.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `gardenlet` to try deploying `gardener-node-agent` with a wrong image tag. by @rfranzke [#9582]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.92.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.92.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.92.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.92.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.92.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.92.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.92.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.92.1`


</details>

<details>
<summary><b>Update provider-azure to <code>1.42.2</code></b></summary>

# [gardener/machine-controller-manager-provider-azure]

## 🏃 Others

- `[USER]` Bugfix:- During VM deletion, the cascade delete option is set only for the resources part of VM creation.  by @rishabh-11 [gardener/machine-controller-manager-provider-azure#143]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.42.2`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.42.2`


</details>

<details>
<summary><b>Update os-coreos to <code>1.21.1</code></b></summary>

# [gardener/gardener-extension-os-coreos]

## 🐛 Bug Fixes

- `[OPERATOR]` Skipping filecontent collection for files with imageRef in OperatingSystemConfigs to prevent a panic. by @nitrocb [#103]

## Docker Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.21.1`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.4.2</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🏃 Others

- `[OPERATOR]` The reconciliation of the `shoot-rsyslog-relp` extension no longer waits for the `extension-shoot-rsyslog-relp-shoot` `MangedResource` to be deleted during reconciliations, if the `Shoot` cluster is hibernated. The wait will still be executed when the `Shoot` is woken up to ensure that the resources deployed in the `Shoot` are removed. by @plkokanov [#93]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.4.2`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.4.2`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.6</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.5...0.7.6

</details>

<details>
<summary><b>Update networking-cilium to <code>1.34.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## 🏃 Others

- `[OPERATOR]` Update cilium to `v1.15.3`. by @DockToFuture [#282]

## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.34.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.34.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.93.0</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` Set `kube-apiserver` `maxReplicas=3` for all Shoots that are not annotated with `alpha.control-plane.scaling.shoot.gardener.cloud/scale-down-disabled=true`. by @voelzmo [#9605]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` now deploys two Prometheus replicas into the `garden` namespace. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#observability). by @rfranzke [#9543]
- `[OPERATOR]` A new gardenlet feature gate called `ShootManagedIssuer` was introduced. This feature gate guards the functionality described in [GEP-24](https://github.com/gardener/gardener/blob/master/docs/proposals/24-shoot-oidc-issuer.md) until all of the components mentioned in the enhancement proposal are implemented by Gardener. by @dimityrmirchev [#9489]
- `[OPERATOR]` A new admission plugin `ShootResourceReservation` has been added to `gardener-apiserver`. It supports calculating resource reservations (memory/CPU/PID) for the `kubelet.kubeReserved` fields in `Shoot`s based on the available resources of a machine type. This only applies when `typeDependentReservations` is set to `true`. Otherwise, the old static values remain to be used.  by @MichaelEischer [#9449]
- `[OPERATOR]` Support for proxy protocol is added to the istio ingress gateway to preserve the client source IP addresses. by @DockToFuture [#9526]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix kube-apiserver advertise address for ipv6 local setup. by @axel7born [#9555]
- `[OPERATOR]` When vali is disabled in the `GardenletConfiguration` its fluentbit `ClusterOutputs` are no longer deployed. by @maboehm [#9525]
- `[OPERATOR]` Istio-ingress gateway dashboard now shows the correct sent tcp traffic metric and the correct memory usage. by @ScheererJ [#9596]
- `[OPERATOR]` A bug in `gardener-node-agent` which prevented copying files between different block devices has been fixed. by @oliver-goetz [#9614]
- `[USER]` A bug which mounted the kubelet data volume to `/var/lib` instead of `/var/lib/kubelet` when `kubeletDataVolumeName` was set has been fixed. by @oliver-goetz [#9614]
## 🏃 Others

- `[OPERATOR]` The `vpn-seed-server` now has better minimum memory settings so that less auto-scaling should occur. by @ScheererJ [#9590]
- `[OPERATOR]` Resource utilization metrics for the kube-apiserver container are now federated in the runtime/prometheus. by @ialidzhikov [#9581]
- `[OPERATOR]` K8s dashboard tests are classified as `beta`. by @hendrikKahl [#9567]
- `[OPERATOR]` Update Istio to v1.21.1 by @axel7born [#9560]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.93.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.93.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.93.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.93.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.93.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.93.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.93.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.93.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.93.0</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` Set `kube-apiserver` `maxReplicas=3` for all Shoots that are not annotated with `alpha.control-plane.scaling.shoot.gardener.cloud/scale-down-disabled=true`. by @voelzmo [#9605]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` now deploys two Prometheus replicas into the `garden` namespace. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#observability). by @rfranzke [#9543]
- `[OPERATOR]` A new gardenlet feature gate called `ShootManagedIssuer` was introduced. This feature gate guards the functionality described in [GEP-24](https://github.com/gardener/gardener/blob/master/docs/proposals/24-shoot-oidc-issuer.md) until all of the components mentioned in the enhancement proposal are implemented by Gardener. by @dimityrmirchev [#9489]
- `[OPERATOR]` A new admission plugin `ShootResourceReservation` has been added to `gardener-apiserver`. It supports calculating resource reservations (memory/CPU/PID) for the `kubelet.kubeReserved` fields in `Shoot`s based on the available resources of a machine type. This only applies when `typeDependentReservations` is set to `true`. Otherwise, the old static values remain to be used.  by @MichaelEischer [#9449]
- `[OPERATOR]` Support for proxy protocol is added to the istio ingress gateway to preserve the client source IP addresses. by @DockToFuture [#9526]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix kube-apiserver advertise address for ipv6 local setup. by @axel7born [#9555]
- `[OPERATOR]` When vali is disabled in the `GardenletConfiguration` its fluentbit `ClusterOutputs` are no longer deployed. by @maboehm [#9525]
- `[OPERATOR]` Istio-ingress gateway dashboard now shows the correct sent tcp traffic metric and the correct memory usage. by @ScheererJ [#9596]
- `[OPERATOR]` A bug in `gardener-node-agent` which prevented copying files between different block devices has been fixed. by @oliver-goetz [#9614]
- `[USER]` A bug which mounted the kubelet data volume to `/var/lib` instead of `/var/lib/kubelet` when `kubeletDataVolumeName` was set has been fixed. by @oliver-goetz [#9614]
## 🏃 Others

- `[OPERATOR]` The `vpn-seed-server` now has better minimum memory settings so that less auto-scaling should occur. by @ScheererJ [#9590]
- `[OPERATOR]` Resource utilization metrics for the kube-apiserver container are now federated in the runtime/prometheus. by @ialidzhikov [#9581]
- `[OPERATOR]` K8s dashboard tests are classified as `beta`. by @hendrikKahl [#9567]
- `[OPERATOR]` Update Istio to v1.21.1 by @axel7born [#9560]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.93.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.93.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.93.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.93.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.93.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.93.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.93.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.93.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.93.0</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` Set `kube-apiserver` `maxReplicas=3` for all Shoots that are not annotated with `alpha.control-plane.scaling.shoot.gardener.cloud/scale-down-disabled=true`. by @voelzmo [#9605]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` now deploys two Prometheus replicas into the `garden` namespace. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#observability). by @rfranzke [#9543]
- `[OPERATOR]` A new gardenlet feature gate called `ShootManagedIssuer` was introduced. This feature gate guards the functionality described in [GEP-24](https://github.com/gardener/gardener/blob/master/docs/proposals/24-shoot-oidc-issuer.md) until all of the components mentioned in the enhancement proposal are implemented by Gardener. by @dimityrmirchev [#9489]
- `[OPERATOR]` A new admission plugin `ShootResourceReservation` has been added to `gardener-apiserver`. It supports calculating resource reservations (memory/CPU/PID) for the `kubelet.kubeReserved` fields in `Shoot`s based on the available resources of a machine type. This only applies when `typeDependentReservations` is set to `true`. Otherwise, the old static values remain to be used.  by @MichaelEischer [#9449]
- `[OPERATOR]` Support for proxy protocol is added to the istio ingress gateway to preserve the client source IP addresses. by @DockToFuture [#9526]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix kube-apiserver advertise address for ipv6 local setup. by @axel7born [#9555]
- `[OPERATOR]` When vali is disabled in the `GardenletConfiguration` its fluentbit `ClusterOutputs` are no longer deployed. by @maboehm [#9525]
- `[OPERATOR]` Istio-ingress gateway dashboard now shows the correct sent tcp traffic metric and the correct memory usage. by @ScheererJ [#9596]
- `[OPERATOR]` A bug in `gardener-node-agent` which prevented copying files between different block devices has been fixed. by @oliver-goetz [#9614]
- `[USER]` A bug which mounted the kubelet data volume to `/var/lib` instead of `/var/lib/kubelet` when `kubeletDataVolumeName` was set has been fixed. by @oliver-goetz [#9614]
## 🏃 Others

- `[OPERATOR]` The `vpn-seed-server` now has better minimum memory settings so that less auto-scaling should occur. by @ScheererJ [#9590]
- `[OPERATOR]` Resource utilization metrics for the kube-apiserver container are now federated in the runtime/prometheus. by @ialidzhikov [#9581]
- `[OPERATOR]` K8s dashboard tests are classified as `beta`. by @hendrikKahl [#9567]
- `[OPERATOR]` Update Istio to v1.21.1 by @axel7born [#9560]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.93.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.93.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.93.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.93.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.93.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.93.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.93.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.93.0`


</details>
