---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-dns-service to <code>1.67.1</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[OPERATOR]` Update CRD for `DNSEntry` (missing field `.status.dnsName`) (cherry-picking of #517) by @MartinWeindel [#520]


</details>

<details>
<summary><b>Update backup-s3 to <code>0.8.0</code></b></summary>

## General Changes

* improve resource naming of chart by using fullname rather than the static gardener-extension-backup-s3 (#18) @nschad
* Harden deployment to comply with pod security standard "restricted" (#19) @MichaelEischer


</details>

<details>
<summary><b>Update networking-calico to <code>1.49.1</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-calico` no longer supports Shoots with Кubernetes version <= 1.28. by @RadaBDimitrova [#684]
## 🏃 Others

- `[OPERATOR]` Admission controller and reconciliation now check the content of the networking provider configuration for validity and report problems. by @DockToFuture [#669]
- `[OPERATOR]` Enable the `usePodCidr` option for `ipam.cidr` during input validation. by @DockToFuture [#690]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [#686]
- `[OPERATOR]` Fixes a bug in Prometheus ScrapeConfigs that prevented Calico metrics from being collected. by @rickardsjp [#692]


</details>

<details>
<summary><b>Update networking-calico to <code>1.50.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-calico` no longer supports Shoots with Кubernetes version <= 1.28. by @RadaBDimitrova [#684]
## 🏃 Others

- `[OPERATOR]` Fixes a bug in Prometheus ScrapeConfigs that prevented Calico metrics from being collected. by @rickardsjp [#692]
- `[OPERATOR]` Admission controller and reconciliation now check the content of the networking provider configuration for validity and report problems. by @DockToFuture [#669]
- `[OPERATOR]` Enable the `usePodCidr` option for `ipam.cidr` during input validation. by @DockToFuture [#690]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [#686]


</details>

<details>
<summary><b>Update dashboard to <code>1.81.2</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixes the sync back of changes from the ui to the shoot editor in the worker dialog by @gardener-github-actions[bot] [#2545]
- `[USER]` Improves usability of the select dialog in the worker group for "Additional OCI Runtimes" by @gardener-github-actions[bot] [#2554]


</details>

<details>
<summary><b>Update dashboard to <code>1.81.2</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixes the sync back of changes from the ui to the shoot editor in the worker dialog by @gardener-github-actions[bot] [#2545]
- `[USER]` Improves usability of the select dialog in the worker group for "Additional OCI Runtimes" by @gardener-github-actions[bot] [#2554]


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.125.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` `spec.addons.nginxIngress.loadBalancerSourceRanges` are now validated as CIDRs. by @ScheererJ [#12539]
- `[OPERATOR]` `spec.addons.nginxIngress.config` is now validated as conforming to config map data rules. by @ScheererJ [#12539]
- `[OPERATOR]` `spec.systemComponents.coreDNS.rewriting.commonSuffixes` are now validated against DNS rules. by @ScheererJ [#12539]
- `[OPERATOR]` The `UseNamespacedCloudProfile` feature gate has been graduated to GA and is locked to `true`.  by @LucaBernstein [#12620]
- `[OPERATOR]` `spec.networking.type` is now validated as being a label name. by @ScheererJ [#12539]
- `[OPERATOR]` All annotations of `kube-apiserver` service in the shoot control planes will be replaced by the minimum required set of annotations. Manually added annotations will be removed. by @ScheererJ [#12630]
- `[OPERATOR]` The name of `ExposureClass` resources is now properly checked to be compliant to the DNS label rules. by @ScheererJ [#12539]
- `[USER]` Setting shoot's `.spec.providers.workers[].{maxSurge, maxUnavailable}` will be denied in future versions of Gardener for workers with updateStrategy `ManualInPlaceUpdate`. Users should unset these values with this version of Gardener. by @acumino [#12607]
## ✨ New Features

- `[USER]` The Shoot resource does now support configuring the global maximum allowed resources the vpa-recommender can recommend for a container. The corresponding upstream configuration option solves a known limitation of vpa-recommender where it can make a Pod unschedulable by recommending resource requests more than largest Node's allocatable. For more details, see [Specifying global maximum allowed resources to prevent pods from being unschedulable](https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/docs/examples.md#specifying-global-maximum-allowed-resources-to-prevent-pods-from-being-unschedulable). by @ialidzhikov [#12481]
- `[OPERATOR]` The Seed and Garden resources do now support configuring the global maximum allowed resources the vpa-recommender can recommend for a container. The corresponding upstream configuration option solves a known limitation of vpa-recommender where it can make a Pod unschedulable by recommending resource requests more than largest Node's allocatable. For more details, see [Specifying global maximum allowed resources to prevent pods from being unschedulable](https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/docs/examples.md#specifying-global-maximum-allowed-resources-to-prevent-pods-from-being-unschedulable). by @ialidzhikov [#12481]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed local `gardenadm` development setup for non-amd64 systems. by @ScheererJ [#12619]
- `[OPERATOR]` A bug which could cause istio service and workload dashboards to show "many-to-many matching errors" after kube-apiserver pods were rolling has been fixed.  by @oliver-goetz [#12635]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12548]
- `[OPERATOR]` Seed registration was fixed for `ManagedSeed`s with seed templates configuring `spec.resources`. by @timuthy [#12652]
- `[OPERATOR]` Fixed a bug in the cluster overview dashboard that showed `cluster-autoscaler` as down when not deployed. by @rickardsjp [#12654]
- `[OPERATOR]` A bug which was causing the `gardener-node-agent` to enter crash-loop when its config was updated with breaking changes was fixed. by @AleksandarSavchev [#12589]
- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12643]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.40.0` to `0.41.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.0) by @gardener-ci-robot [#12675]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.81.0` to `1.81.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.1) by @gardener-ci-robot [#12616]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.25.3` to `1.25.4`.   
  - `gcr.io/istio-release/proxyv2` from `1.25.3` to `1.25.4`.   
  - `istio.io/api` from `v1.25.3` to `v1.25.4`.  by @gardener-ci-robot [#12655]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.3` to `v1.35.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.35.0) by @gardener-ci-robot [#12598]
- `[USER]` Updates to `spec.networking.ipFamiles` are now validated. by @axel7born [#12523]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [#12592]
- `[DEVELOPER]` The hostname of provider-local `Machines`/`Nodes` can be resolved via DNS, similar to typical cloud infrastructure environments. This allows connecting from a `Bastion` to a `Node` via its hostname. by @timebertt [#12657]
- `[DEVELOPER]` `DNSRecord` may now use non-canonical IPv6 addresses. by @ScheererJ [#12667]
- `[OPERATOR]` Adds machine capability based image defaulting to Shoots created with Cloudprofiles using Capabilities. by @Roncossek [#12529]
- `[OPERATOR]` The Shoot Prometheus RBAC is now restricted to the control-plane and the garden namespace. by @chrkl [#12264]
- `[OPERATOR]` A new validation for the following `(Namespaced)CloudProfile` fields has been added, ensuring qualified names:  
  - `.spec.machineImages[].name`  
  - `.spec.machineImages[].versions[].cri[].containerRuntimes[].type`  
  - `.spec.machineTypes[].name`  
  - `.spec.capabilities.name`  
  - `.spec.capabilities.values`  
  - `.spec.volumeTypes[].class`  
  - `.spec.volumeTypes[].name` by @LucaBernstein [#12666]
- `[OPERATOR]` The `gardener-node-agent` now has a `--config-dir` flag that is used to find the config file instead of a `--config` flag. by @AleksandarSavchev [#12589]
- `[OPERATOR]` Unique usernames are generated for {Admin,Viewer}KubeconfigRequests by prefixing the original/requesting username with a random string. This approach prevents conflicts with existing RBAC rules in the cluster while still preserving the identity of the requesting user. by @timuthy [#12597]
- `[OPERATOR]` Gardener administrators are now allowed to inspect and manage Services and Endpoints in the garden cluster. by @ialidzhikov [#12211]
- `[OPERATOR]` A bug in `gardener-node-agent` that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12665]
## 📖 Documentation

- `[OPERATOR]` Operations guide was updated to explain how overlapping network ranges between seeds and shoots are implemented. by @domdom82 [#12637]


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.125.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` `spec.addons.nginxIngress.loadBalancerSourceRanges` are now validated as CIDRs. by @ScheererJ [#12539]
- `[OPERATOR]` `spec.addons.nginxIngress.config` is now validated as conforming to config map data rules. by @ScheererJ [#12539]
- `[OPERATOR]` `spec.systemComponents.coreDNS.rewriting.commonSuffixes` are now validated against DNS rules. by @ScheererJ [#12539]
- `[OPERATOR]` The `UseNamespacedCloudProfile` feature gate has been graduated to GA and is locked to `true`.  by @LucaBernstein [#12620]
- `[OPERATOR]` `spec.networking.type` is now validated as being a label name. by @ScheererJ [#12539]
- `[OPERATOR]` All annotations of `kube-apiserver` service in the shoot control planes will be replaced by the minimum required set of annotations. Manually added annotations will be removed. by @ScheererJ [#12630]
- `[OPERATOR]` The name of `ExposureClass` resources is now properly checked to be compliant to the DNS label rules. by @ScheererJ [#12539]
- `[USER]` Setting shoot's `.spec.providers.workers[].{maxSurge, maxUnavailable}` will be denied in future versions of Gardener for workers with updateStrategy `ManualInPlaceUpdate`. Users should unset these values with this version of Gardener. by @acumino [#12607]
## ✨ New Features

- `[USER]` The Shoot resource does now support configuring the global maximum allowed resources the vpa-recommender can recommend for a container. The corresponding upstream configuration option solves a known limitation of vpa-recommender where it can make a Pod unschedulable by recommending resource requests more than largest Node's allocatable. For more details, see [Specifying global maximum allowed resources to prevent pods from being unschedulable](https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/docs/examples.md#specifying-global-maximum-allowed-resources-to-prevent-pods-from-being-unschedulable). by @ialidzhikov [#12481]
- `[OPERATOR]` The Seed and Garden resources do now support configuring the global maximum allowed resources the vpa-recommender can recommend for a container. The corresponding upstream configuration option solves a known limitation of vpa-recommender where it can make a Pod unschedulable by recommending resource requests more than largest Node's allocatable. For more details, see [Specifying global maximum allowed resources to prevent pods from being unschedulable](https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/docs/examples.md#specifying-global-maximum-allowed-resources-to-prevent-pods-from-being-unschedulable). by @ialidzhikov [#12481]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed local `gardenadm` development setup for non-amd64 systems. by @ScheererJ [#12619]
- `[OPERATOR]` A bug which could cause istio service and workload dashboards to show "many-to-many matching errors" after kube-apiserver pods were rolling has been fixed.  by @oliver-goetz [#12635]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12548]
- `[OPERATOR]` Seed registration was fixed for `ManagedSeed`s with seed templates configuring `spec.resources`. by @timuthy [#12652]
- `[OPERATOR]` Fixed a bug in the cluster overview dashboard that showed `cluster-autoscaler` as down when not deployed. by @rickardsjp [#12654]
- `[OPERATOR]` A bug which was causing the `gardener-node-agent` to enter crash-loop when its config was updated with breaking changes was fixed. by @AleksandarSavchev [#12589]
- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12643]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.40.0` to `0.41.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.0) by @gardener-ci-robot [#12675]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.81.0` to `1.81.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.1) by @gardener-ci-robot [#12616]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.25.3` to `1.25.4`.   
  - `gcr.io/istio-release/proxyv2` from `1.25.3` to `1.25.4`.   
  - `istio.io/api` from `v1.25.3` to `v1.25.4`.  by @gardener-ci-robot [#12655]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.3` to `v1.35.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.35.0) by @gardener-ci-robot [#12598]
- `[USER]` Updates to `spec.networking.ipFamiles` are now validated. by @axel7born [#12523]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [#12592]
- `[DEVELOPER]` The hostname of provider-local `Machines`/`Nodes` can be resolved via DNS, similar to typical cloud infrastructure environments. This allows connecting from a `Bastion` to a `Node` via its hostname. by @timebertt [#12657]
- `[DEVELOPER]` `DNSRecord` may now use non-canonical IPv6 addresses. by @ScheererJ [#12667]
- `[OPERATOR]` Adds machine capability based image defaulting to Shoots created with Cloudprofiles using Capabilities. by @Roncossek [#12529]
- `[OPERATOR]` The Shoot Prometheus RBAC is now restricted to the control-plane and the garden namespace. by @chrkl [#12264]
- `[OPERATOR]` A new validation for the following `(Namespaced)CloudProfile` fields has been added, ensuring qualified names:  
  - `.spec.machineImages[].name`  
  - `.spec.machineImages[].versions[].cri[].containerRuntimes[].type`  
  - `.spec.machineTypes[].name`  
  - `.spec.capabilities.name`  
  - `.spec.capabilities.values`  
  - `.spec.volumeTypes[].class`  
  - `.spec.volumeTypes[].name` by @LucaBernstein [#12666]
- `[OPERATOR]` The `gardener-node-agent` now has a `--config-dir` flag that is used to find the config file instead of a `--config` flag. by @AleksandarSavchev [#12589]
- `[OPERATOR]` Unique usernames are generated for {Admin,Viewer}KubeconfigRequests by prefixing the original/requesting username with a random string. This approach prevents conflicts with existing RBAC rules in the cluster while still preserving the identity of the requesting user. by @timuthy [#12597]
- `[OPERATOR]` Gardener administrators are now allowed to inspect and manage Services and Endpoints in the garden cluster. by @ialidzhikov [#12211]
- `[OPERATOR]` A bug in `gardener-node-agent` that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12665]
## 📖 Documentation

- `[OPERATOR]` Operations guide was updated to explain how overlapping network ranges between seeds and shoots are implemented. by @domdom82 [#12637]


</details>

<details>
<summary><b>Update gardenlet to <code>1.125.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` `spec.addons.nginxIngress.loadBalancerSourceRanges` are now validated as CIDRs. by @ScheererJ [#12539]
- `[OPERATOR]` `spec.addons.nginxIngress.config` is now validated as conforming to config map data rules. by @ScheererJ [#12539]
- `[OPERATOR]` `spec.systemComponents.coreDNS.rewriting.commonSuffixes` are now validated against DNS rules. by @ScheererJ [#12539]
- `[OPERATOR]` The `UseNamespacedCloudProfile` feature gate has been graduated to GA and is locked to `true`.  by @LucaBernstein [#12620]
- `[OPERATOR]` `spec.networking.type` is now validated as being a label name. by @ScheererJ [#12539]
- `[OPERATOR]` All annotations of `kube-apiserver` service in the shoot control planes will be replaced by the minimum required set of annotations. Manually added annotations will be removed. by @ScheererJ [#12630]
- `[OPERATOR]` The name of `ExposureClass` resources is now properly checked to be compliant to the DNS label rules. by @ScheererJ [#12539]
- `[USER]` Setting shoot's `.spec.providers.workers[].{maxSurge, maxUnavailable}` will be denied in future versions of Gardener for workers with updateStrategy `ManualInPlaceUpdate`. Users should unset these values with this version of Gardener. by @acumino [#12607]
## ✨ New Features

- `[USER]` The Shoot resource does now support configuring the global maximum allowed resources the vpa-recommender can recommend for a container. The corresponding upstream configuration option solves a known limitation of vpa-recommender where it can make a Pod unschedulable by recommending resource requests more than largest Node's allocatable. For more details, see [Specifying global maximum allowed resources to prevent pods from being unschedulable](https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/docs/examples.md#specifying-global-maximum-allowed-resources-to-prevent-pods-from-being-unschedulable). by @ialidzhikov [#12481]
- `[OPERATOR]` The Seed and Garden resources do now support configuring the global maximum allowed resources the vpa-recommender can recommend for a container. The corresponding upstream configuration option solves a known limitation of vpa-recommender where it can make a Pod unschedulable by recommending resource requests more than largest Node's allocatable. For more details, see [Specifying global maximum allowed resources to prevent pods from being unschedulable](https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/docs/examples.md#specifying-global-maximum-allowed-resources-to-prevent-pods-from-being-unschedulable). by @ialidzhikov [#12481]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed local `gardenadm` development setup for non-amd64 systems. by @ScheererJ [#12619]
- `[OPERATOR]` A bug which could cause istio service and workload dashboards to show "many-to-many matching errors" after kube-apiserver pods were rolling has been fixed.  by @oliver-goetz [#12635]
- `[OPERATOR]` Fix cluster-autoscaler specific annotations on machine deployment upon update in worker specific cluster autoscaler options. by @takoverflow [#12548]
- `[OPERATOR]` Seed registration was fixed for `ManagedSeed`s with seed templates configuring `spec.resources`. by @timuthy [#12652]
- `[OPERATOR]` Fixed a bug in the cluster overview dashboard that showed `cluster-autoscaler` as down when not deployed. by @rickardsjp [#12654]
- `[OPERATOR]` A bug which was causing the `gardener-node-agent` to enter crash-loop when its config was updated with breaking changes was fixed. by @AleksandarSavchev [#12589]
- `[USER]` The Kubernetes feature gate `ValidatingAdmissionPolicy` is now marked as removed in Kubernetes 1.32. Previously, it was possible to upgrade a Shoot cluster to Kubernetes 1.32 with this feature gate enabled, which resulted in kube-apiserver failing to start due to an unrecognized feature gate. by @marc1404 [#12643]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.40.0` to `0.41.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.0) by @gardener-ci-robot [#12675]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.81.0` to `1.81.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.1) by @gardener-ci-robot [#12616]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.25.3` to `1.25.4`.   
  - `gcr.io/istio-release/proxyv2` from `1.25.3` to `1.25.4`.   
  - `istio.io/api` from `v1.25.3` to `v1.25.4`.  by @gardener-ci-robot [#12655]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.3` to `v1.35.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.35.0) by @gardener-ci-robot [#12598]
- `[USER]` Updates to `spec.networking.ipFamiles` are now validated. by @axel7born [#12523]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [#12592]
- `[DEVELOPER]` The hostname of provider-local `Machines`/`Nodes` can be resolved via DNS, similar to typical cloud infrastructure environments. This allows connecting from a `Bastion` to a `Node` via its hostname. by @timebertt [#12657]
- `[DEVELOPER]` `DNSRecord` may now use non-canonical IPv6 addresses. by @ScheererJ [#12667]
- `[OPERATOR]` Adds machine capability based image defaulting to Shoots created with Cloudprofiles using Capabilities. by @Roncossek [#12529]
- `[OPERATOR]` The Shoot Prometheus RBAC is now restricted to the control-plane and the garden namespace. by @chrkl [#12264]
- `[OPERATOR]` A new validation for the following `(Namespaced)CloudProfile` fields has been added, ensuring qualified names:  
  - `.spec.machineImages[].name`  
  - `.spec.machineImages[].versions[].cri[].containerRuntimes[].type`  
  - `.spec.machineTypes[].name`  
  - `.spec.capabilities.name`  
  - `.spec.capabilities.values`  
  - `.spec.volumeTypes[].class`  
  - `.spec.volumeTypes[].name` by @LucaBernstein [#12666]
- `[OPERATOR]` The `gardener-node-agent` now has a `--config-dir` flag that is used to find the config file instead of a `--config` flag. by @AleksandarSavchev [#12589]
- `[OPERATOR]` Unique usernames are generated for {Admin,Viewer}KubeconfigRequests by prefixing the original/requesting username with a random string. This approach prevents conflicts with existing RBAC rules in the cluster while still preserving the identity of the requesting user. by @timuthy [#12597]
- `[OPERATOR]` Gardener administrators are now allowed to inspect and manage Services and Endpoints in the garden cluster. by @ialidzhikov [#12211]
- `[OPERATOR]` A bug in `gardener-node-agent` that prevented the location for the sandbox image to be configurable to a custom value on worker nodes with containerd 2.x was fixed. by @MrBatschner [#12665]
## 📖 Documentation

- `[OPERATOR]` Operations guide was updated to explain how overlapping network ranges between seeds and shoots are implemented. by @domdom82 [#12637]


</details>

<details>
<summary><b>Update networking-cilium to <code>1.42.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## 📰 Noteworthy

- `[OPERATOR]` Cilium operator HA logic now uses guaranteed (minimum) node count instead of maximum, preventing unnecessary node spin-up and reducing compute costs in single-node clusters; HA remains guaranteed for shoots with minimum ≥ 2. by @Lappihuan [#576]
- `[DEPENDENCY]` cilium-envoy got updated to v1.32.5 by @domdom82 [#562]
## 🐛 Bug Fixes

- `[OPERATOR]` Hubble relay cert generation now also works with private api server deployments by @domdom82 [#606]
- `[OPERATOR]` An issue preventing the networking-cilium extension to patch its heartbeat lease is now fixed. by @ialidzhikov [#559]
## 🏃 Others

- `[DEVELOPER]` migrate CICD-Pipelines to GitHub-Actions by @ccwienk [#585]
- `[DEVELOPER]` connectivity test stability has been improved and should be less flaky now by @domdom82 [#587]
- `[OPERATOR]` Dual-Stack should now work consistently regardless of the order of the IP families. by @ScheererJ [#609]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [#598]
- `[OPERATOR]` Fixes an issue where network status is not correct during migration to dual-stack.  by @axel7born [#611]
- `[OPERATOR]` Allow networking-cilium extension to be used in autonomous shoot clusters. by @ScheererJ [#567]
- `[OPERATOR]` Allows disabling IPv4, IPv6 and BPF masquerading in networking-cilium extension. by @vknabel [#573]
- `[OPERATOR]` Admission controller and reconciliation now check the content of the networking provider configuration for validity and report problems. by @ScheererJ [#584]
- `[OPERATOR]` The healthcheck controller is now removed. by @axel7born [#566]
- `[OPERATOR]` `kube-proxy-replacement-healthz-bind-address` is now correctly set when `kube-proxy` is disabled. by @ScheererJ [#603]
- `[OPERATOR]` Fixes some more bugs in Prometheus ScrapeConfigs that prevented Cilium metrics from being collected. by @rickardsjp [#610]
- `[OPERATOR]` Fixes a bug in Prometheus ScrapeConfigs that prevented Cilium metrics from being collected. by @ScheererJ [#608]
- `[OPERATOR]` Fix 'add-reports-to-component-descriptor' build step by @heldkat [#602]
- `[OPERATOR]` Fixed webhook for node-local-dns appending command line arguments multiple times. by @ScheererJ [#586]
- `[OPERATOR]` `networking-cilium` no longer supports Shoots with Кubernetes version <= 1.28. by @georgibaltiev [#597]


</details>

<details>
<summary><b>Update external-dns-management to <code>0.27.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` Extended validation of `DNSEntry` data fields. by @marc1404 [#564]
## 🐛 Bug Fixes

- `[USER]` Fixed conditionally requiring `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` only when `AWS_USE_CREDENTIALS_CHAIN` is not set (relevant for AWS Route53 `DNSProvider`). by @marc1404 [#578]
- `[USER]` Increased maximum length of PowerDNS provider `apiKey` to `8192`. by @Lappihuan [#576]
## 🏃 Others

- `[DEVELOPER]` Refactor `DNSHandlerAdapter` implementations to avoid provider specific dependencies on reuse. by @MartinWeindel [#589]
- `[OPERATOR]` Allow values `local` and `gdch-dns` for provider types by @MartinWeindel [#589]


</details>
