# [gardener/gardener]

## ⚠️ Breaking Changes

- `[USER]` The VPA version is updated to 1.3.0. Upstream VPA 1.3.0 does no longer serve API version `autoscaling.k8s.io/v1beta2`. Gardener's VPA installation will continue to serve API version `autoscaling.k8s.io/v1beta2` until Gardener v1.119.  
  In Gardener v1.119+, the API version `autoscaling.k8s.io/v1beta2` will no longer be served.  
  Migrate your VerticalPodAutoscaler manifests to use API version `autoscaling.k8s.io/v1`. For more details, see [Notice on switching to v1 version (0.4.X-1.2.X to >=1.3.X)](https://github.com/kubernetes/autoscaler/blob/e27059ea483694cb9c7ad5d990c6cdeb42ca311b/vertical-pod-autoscaler/MIGRATE.md#notice-on-switching-to-v1-version-04x-12x-to-13x). by @ialidzhikov [#11774]
- `[DEVELOPER]` The `hack/generate-crds.sh` script no longer accepts an optional `-r <reason>` argument. Previously, this argument was used to add the `api-approved.kubernetes.io: "<reason>"`annotation to the CRD. Instead, use the `+kubebuilder:metadata:annotations` kubebuilder tag to add this annotation natively with controller-gen. by @ialidzhikov [#11774]
- `[DEVELOPER]` The extension heartbeat controller was changed so that the heartbeat lease it maintains is updated via the `github.com/gardener/gardener/pkg/controllerutils.CreateOrGetAndMergePatch` function. Extension controllers that enable the heartbeat controller must adapt the extension controller RBAC rules to allow `patch` of the `gardener-extension-heartbeat` lease. by @Kostov6 [#11337]
- `[OPERATOR]` An update validation was added for `Extension`s to ensure the immutability of the field `.spec.resources[].primary`. Previously, changing this value caused reconciliation errors, which are now prevented by this validation.  
  In addition, the `.spec.resources[].primary` is now defaulted to `true`. by @timuthy [#11824]
## ✨ New Features

- `[OPERATOR]` Add new monitoring dashboard panes for Etcd Compaction Job with detailed failure reasons and updated existing alerts and boards. by @anveshreddy18 [#11771]
- `[OPERATOR]` The extension care controller has been introduced. It checks the status of controller installations, extension and extension admission deployments managed by the `Extension`.  by @oliver-goetz [#11769]
- `[OPERATOR]` L7 load balancing is supporting the SPDY protocol for streaming APIs too. by @oliver-goetz [#11807]
- `[OPERATOR]` `NamespacedCloudProfile.spec.limits.maxNodesTotal` can now also be used to override the limit defined in the parent `CloudProfile` with an increased value. Increasing requires additional permissions granted by the custom verb `raise-spec-limits`. by @LucaBernstein [#11796]
- `[USER]` L7 load balancing can now be enabled independently from the Kubernetes version of the shoot when `IstioTLSTermination` feature gate is enabled on the seed. by @oliver-goetz [#11807]
- `[USER]` IPv4 or dual-stack shoots can now define IPv4 pod, service and node networks overlapping with networks of their seed. Currently, this works only for non-HA shoots. by @domdom82 [#11582]

## 🐛 Bug Fixes

- `[OPERATOR]` When `IstioTLSTermination` feature gate is enabled the apiserver-proxy related EnvoyFilter is not deployed for the virtual-garden anymore. by @oliver-goetz [#11897]

## 🏃 Others

- `[OPERATOR]` Update istio to version `1.25.1`. by @DockToFuture [#11836]
- `[OPERATOR]` `gardener-operator` automatically adds the `networking.resources.gardener.cloud/to-virtual-garden-kube-apiserver-tcp-443: allowed` label to the gardenlet deployment in case it is deployed to the garden runtime cluster.  
  Thus, it is not required anymore to configure this label in the `Gardenlet` resource. by @timuthy [#11855]
- `[OPERATOR]` The images of the registry caches used in the local setups are now updated to [distribution/distribution@v3.0.0](https://github.com/distribution/distribution/releases/tag/v3.0.0). by @dimitar-kostadinov [#11775]
- `[OPERATOR]` When `IstioTLSTermination` feature gate is enabled, istio-ingress gateway pods request `500m` CPUs now. by @oliver-goetz [#11866]
- `[OPERATOR]` Remove wildcards `*` from RBAC roles for the `kubelet`, `admin`, `administrators`,`viewer` and `viewers` clusterRoles. by @AleksandarSavchev [#11754]
- `[OPERATOR]` Fix an error message during the startup of the node exporter by @vicwicker [#11817]
- `[OPERATOR]` Add support for single-stack to dual-stack networking migration. by @axel7born [#11893]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.28.0` to `v0.29.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.29.0)  
  - `github.com/gardener/etcd-druid/api` from `v0.28.0` to `v0.29.0`.  by @gardener-ci-robot [#11867]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.1` to `v0.57.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.57.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.1` to `v0.57.2`.  by @gardener-ci-robot [#11857]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.25.1` to `1.25.2`.   
  - `gcr.io/istio-release/proxyv2` from `1.25.1` to `1.25.2`.   
  - `istio.io/api` from `v1.25.1` to `v1.25.2`.  by @gardener-ci-robot [#11868]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.23.5` to `1.23.6`.   
  - `gcr.io/istio-release/proxyv2` from `1.23.5` to `1.23.6`.  by @gardener-ci-robot [#11829]
- `[DEPENDENCY]` The following images have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller`: 1.2.2 -> 1.3.0  
  - `registry.k8s.io/autoscaling/vpa-recommender`: 1.2.2 -> 1.3.0  
  - `registry.k8s.io/autoscaling/vpa-updater`: 1.2.2 -> 1.3.0  
    
  [VPA 1.3.0 Release Notes](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-1.3.0) by @ialidzhikov [#11774]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.0`
