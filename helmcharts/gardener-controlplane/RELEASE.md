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
