# [github.com/gardener/gardener:v1.141.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `NewWorkerPoolHash` feature gate has been promoted to GA and can no longer be disabled. by @timuthy [[#14531](https://github.com/gardener/gardener/pull/14531)]
- `[OPERATOR]` ⚠️ Gardener does no longer support Garden, Seed, or Shoot clusters with Kubernetes versions <= 1.30. Make sure to upgrade all existing clusters before upgrading to this Gardener version. by @timuthy [[#14501](https://github.com/gardener/gardener/pull/14501)]
- `[USER]` Newly created `Shoot`s now have a set period of `28d` for etcd encryption key rotation. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]
- `[DEVELOPER]` `make gardenadm-up SCENARIO=connect` now deploys the Gardener (`gardener-operator` and `Garden` resource) directly into the self-hosted shoot. Previously, it was deploying them next to the machine pods of the self-hosted shoot in the kind cluster. Use `make gardenadm-up SCENARIO=connect-kind` for the out-of-self-hosted-shoot deployment mode. by @rfranzke [[#14387](https://github.com/gardener/gardener/pull/14387)]
- `[DEPENDENCY]` The obsolete `Provider` field was removed from the `extensionswebhook.Webhook` struct. The field can be removed without substitution. by @timuthy [[#14460](https://github.com/gardener/gardener/pull/14460)]

## 📰 Noteworthy
- `[OPERATOR]` The `gardener-resource-manager` HA config webhook now uses `ScheduleAnyway` instead of `DoNotSchedule` for the hostname topology spread constraint when there is at most one node in the cluster. A new `node-high-availability-config` controller re-triggers the webhook when the node count crosses this threshold. by @rfranzke [[#14595](https://github.com/gardener/gardener/pull/14595)]
- `[OPERATOR]` machine-controller-manager's RBAC permissions for the source cluster have been reduced to follow the principle of least privilege. by @dimityrmirchev [[#14372](https://github.com/gardener/gardener/pull/14372)]
- `[DEVELOPER]` Added panic recovery to `flow.Task` to prevent a single task failure from crashing the entire controller. If you previously implemented custom panic recovery within your tasks, you  can consider removing that custom panic recovery. by @dergeberl [[#14606](https://github.com/gardener/gardener/pull/14606)]
- `[DEVELOPER]` The local setup now includes a `cloud-controller-manager-local`, which is deployed for kind clusters (in the `kube-system` namespace) and for shoot clusters (in the control plane namespace). The cloud-controller-manager implements `Services` of type `LoadBalancer` by creating dedicated Docker containers listening on external IPs (automatically added to the host's loopback interface on kind cluster creation). This replaces previous hacks for implementing load balancers in provider-local and supports load balancers in shoot clusters for the first time. by @timebertt [[#14415](https://github.com/gardener/gardener/pull/14415)]
- `[DEPENDENCY]` Extension charts deployed on self-hosted shoot clusters may not receive `.Values.gardener.seed` when the shoot has not yet been promoted to a `Seed`. Charts should guard Seed-dependent values with `{{ if .Values.gardener.seed }}`. by @rfranzke [[#14395](https://github.com/gardener/gardener/pull/14395)]
- `[DEPENDENCY]` A new helper function `BuildExtensionTypeNamespaceSelector` has been introduced. It builds proper namespaces selectors for extension webhooks, based on the extension `type` and `class` attributes. by @timuthy [[#14460](https://github.com/gardener/gardener/pull/14460)]

## ✨ New Features
- `[OPERATOR]` Added `spec.runtimeCluster.settings.loadBalancerServices.proxyProtocol.allowed` and `spec.runtimeCluster.settings.loadBalancerServices.externalTrafficPolicy` to the `Garden` resource. When Allowed set to `true`, `gardener-operator` configures the Istio ingress gateway to terminate PROXY protocol, enabling preservation of the original client IP address for load balancers that use PROXY protocol. The explicit nature of the setting allows a seamless migration while enforcing a good security posture. `ExternalTrafficPolicy` allows configuring the Gateway either as `Cluster` (default) or `Local`, similar to the Seed. by @jamand [[#14420](https://github.com/gardener/gardener/pull/14420)]
- `[OPERATOR]` The `gardener-node-agent` now monitors the health of systemd units declared in the `OperatingSystemConfig` and reports a `SystemdUnitsReady` condition on the `Node`. Unhealthy units are surfaced on the `Shoot` via the `EveryNodeReady` condition. by @rfranzke [[#14496](https://github.com/gardener/gardener/pull/14496)]
- `[USER]` The `Shoot` spec field `spec.kubernetes.kubeAPIServer.encryptionConfig.provider.type` now supports the `aesgcm` and `secretbox` encryption provider types. The field is immutable. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]
- `[USER]` The `Garden` spec fields `spec.virtualCluster.kubernetes.kubeAPIServer.encryptionConfig.provider.type`and `spec.virtualCluster.gardener.gardenerAPIServer.encryptionConfig.provider.type` now support the `aesgcm` and `secretbox` encryption provider types. The fields are immutable. by @AleksandarSavchev [[#14034](https://github.com/gardener/gardener/pull/14034)]

## 🐛 Bug Fixes
- `[OPERATOR]` The garbage collection logic now also deletes pods that are stuck due to preemption by the kubelet or scheduler. by @rfranzke [[#14519](https://github.com/gardener/gardener/pull/14519)]
- `[OPERATOR]` The observability setup is deleted as late as possible so that, in case an error occurs during the deletion of any components, there is still enough information available to investigate the issue. by @iypetrov [[#14475](https://github.com/gardener/gardener/pull/14475)]
- `[OPERATOR]` A bug was fixed where `gardenadm init` could fail due to a transient error while fetching the `shoot-gardener-node-agent` ManagedResource when the Kubernetes API server is temporarily unavailable due to static pod rollout. by @ialidzhikov [[#14601](https://github.com/gardener/gardener/pull/14601)]
- `[OPERATOR]` A bug has been fixed that caused unintentional `ShootState` creations for `Shoot`s running on managed seed clusters (those backed by `ManagedSeed` objects). The affected `ShootState` resources are automatically cleaned up by `gardenlet` during start-up. by @plkokanov [[#14666](https://github.com/gardener/gardener/pull/14666)]
- `[USER]` Cluster-proportional autoscaling of coredns now works with Kubernetes >= 1.33 by @ScheererJ [[#14638](https://github.com/gardener/gardener/pull/14638)]
- `[DEPENDENCY]` The `golangci-lint` makefile install recipe can be used in Gardener extensions again. by @timebertt [[#14555](https://github.com/gardener/gardener/pull/14555)]

## 🏃 Others
- `[OPERATOR]` Gardener Discovery Server is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14587](https://github.com/gardener/gardener/pull/14587)]
- `[OPERATOR]` Alertmanager is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14575](https://github.com/gardener/gardener/pull/14575)]
- `[OPERATOR]` Vali is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14567](https://github.com/gardener/gardener/pull/14567)]
- `[OPERATOR]` OpenTelemetry Collector is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14585](https://github.com/gardener/gardener/pull/14585)]
- `[OPERATOR]` Use `Info` logging for admission denials instead of `Error` so that the full stack trace to every denial log entry does not get logged by @DockToFuture [[#14561](https://github.com/gardener/gardener/pull/14561)]
- `[OPERATOR]` Apiserver-Proxy uses a dedicated network interface `apiserver-proxy` for its advertised IP address. Requests from nodes such as kubelet probes will use the proper IP as per the route table again. by @domdom82 [[#14440](https://github.com/gardener/gardener/pull/14440)]
- `[OPERATOR]` Shoot advertised addresses are now configurable by extension components for Shoot VirtualService resources. by @ScheererJ [[#14534](https://github.com/gardener/gardener/pull/14534)]
- `[OPERATOR]` During `Shoot` reconciliation `MachineDeployment`s are now deployed in parallel. This should speed up the reconciliation of the `Worker` resource. by @plkokanov [[#14220](https://github.com/gardener/gardener/pull/14220)]
- `[OPERATOR]` Resource limits have been removed for node-problem-detector by @domdom82 [[#14450](https://github.com/gardener/gardener/pull/14450)]
- `[OPERATOR]` Prometheus is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14573](https://github.com/gardener/gardener/pull/14573)]
- `[OPERATOR]` Additional per nodegroup metrics can be exposed by `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.emitPerNodeGroupMetrics` in the `Shoot` API . by @aaronfern [[#14557](https://github.com/gardener/gardener/pull/14557)]
- `[OPERATOR]` Gardener Dashboard is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14586](https://github.com/gardener/gardener/pull/14586)]
- `[OPERATOR]` `Patch` is now used to label all `Machine`s with `force-deletion: True` instead of `Update` when the `Shoot` is being hibernated or deleted. Additionally, the function used to do this during the reconciliation of the `Worker` resource is now only executed once instead of for each `MachineDeployment`. by @plkokanov [[#14220](https://github.com/gardener/gardener/pull/14220)]
- `[OPERATOR]` The `gardenadm init` flow now determines Pod network availability by checking the Node's `NetworkUnavailable` condition instead of the `shoot-core-coredns` ManagedResource health. This is a prerequisite improvement for the control plane Node restoration feature. by @ialidzhikov [[#14523](https://github.com/gardener/gardener/pull/14523)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.2` to `v0.36.3`. [Release Notes](https://github.com/gardener/etcd-druid/releases/tag/v0.36.3)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.2` to `v0.36.3`. by @Shreyas-s14 [[#14661](https://github.com/gardener/gardener/pull/14661)]
- `[OPERATOR]` cluster-autoscaler now supports a new expander `least-nodes` from v1.31 onwards by @aaronfern [[#14558](https://github.com/gardener/gardener/pull/14558)]
- `[OPERATOR]` Plutono is now exposed directly via istio instead of nginx-ingress by @ScheererJ [[#14142](https://github.com/gardener/gardener/pull/14142)]
- `[USER]` VPN-related dashboards now show a shared crosshair on all panels. by @domdom82 [[#14576](https://github.com/gardener/gardener/pull/14576)]
- `[DEVELOPER]` The DinD version used in the remote local setup has been updated to v29. by @vicwicker [[#14644](https://github.com/gardener/gardener/pull/14644)]
- `[DEVELOPER]` `make seed-down` and `make garden-down` cleanup additional resources by @matthias-horne [[#14547](https://github.com/gardener/gardener/pull/14547)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/node-exporter` from `v1.10.2` to `v1.11.1`. by @gardener-ci-robot [[#14508](https://github.com/gardener/gardener/pull/14508)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.29.1` to `1.29.2`.   
  - `gcr.io/istio-release/proxyv2` from `1.29.1` to `1.29.2`.   
  - `istio.io/api` from `v1.29.1` to `v1.29.2`. by @gardener-ci-robot [[#14582](https://github.com/gardener/gardener/pull/14582)]
- `[DEPENDENCY]` Update kindest/node image to v1.35.1 (Kubernetes v1.35.1, containerd v2.2.1). by @LucaBernstein [[#14421](https://github.com/gardener/gardener/pull/14421)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.31` to `v2.2.32`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.32) by @gardener-ci-robot [[#14611](https://github.com/gardener/gardener/pull/14611)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.5.5` to `2.6.0`. by @gardener-ci-robot [[#14537](https://github.com/gardener/gardener/pull/14537)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.36.1` to `v0.36.2`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.36.2)  
  - `github.com/gardener/etcd-druid/api` from `v0.36.1` to `v0.36.2`. by @gardener-ci-robot [[#14579](https://github.com/gardener/gardener/pull/14579)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.46` to `v7.5.47`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.47) by @gardener-ci-robot [[#14613](https://github.com/gardener/gardener/pull/14613)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-discovery-server` from `v0.9.0` to `v0.10.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.10.0) by @gardener-ci-robot [[#14600](https://github.com/gardener/gardener/pull/14600)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/coredns-config-adapter` from `v0.5.0` to `v0.6.0`. [Release Notes](https://redirect.github.com/gardener/coredns-config-adapter/releases/tag/v0.6.0) by @gardener-ci-robot [[#14605](https://github.com/gardener/gardener/pull/14605)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.31.1` to `v0.32.0`. by @gardener-ci-robot [[#14538](https://github.com/gardener/gardener/pull/14538)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.37.0` to `v1.37.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.37.2) by @gardener-ci-robot [[#14563](https://github.com/gardener/gardener/pull/14563)]

## application/spdx+json
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:4c0764b6cbd79bea391de905c444e8901f3ef901c9cc601a5b8fcf66394aa40a`
- admission-controller-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller@sha256:a4bed35099c21fb59a719a718afc1f83040d4746a7dfaf81c4442e09725bf0ab`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:549aafc0b61b16d9e7d6fa1ab0bd95bd68f0d7dfac77989be541e9551f4dc726`
- apiserver-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver@sha256:b0675085cef3786d983b6a751cff7820b6dd896e55afccd99e07cefa2891f161`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:3757e8e04a1e555abbe832c72932211b4fb766ee8f3d6ded15c9acd6a14adde9`
- controller-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager@sha256:68bc182b3b1cbfcbbdb26bcb9b0ac5a182e0de0b1ae785c7f0fd9947e9653ccd`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:558ae9de4cfffe41cce57e22bc8505c9f38d54e0fb8feea7b06754970b9090a3`
- gardenadm-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm@sha256:ca399bfd9253860c2a8f5287aec8ecdd90b8b4fa96e8694dede72a05f0fbe263`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:47b8d427ac8f6deee19004e196c2a3396edd5010293bb1272abd7aaa2d385dae`
- gardenlet-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet@sha256:88953b01d223307b0ea3e05c8df24eeb1f08e5c1883b85be42b5e5da7a2f5af3`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:97bbf8d719ee9a6a441aee3ea1690bcb054eaf5ee23b3e98ee7ba580e5732a80`
- node-agent-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent@sha256:b40af8512c84cb32e56541716cba9036152e4393e9c810d0ea109d9e89f3abe7`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:b687d0080c773f8b51d7e7fe262bd38774cace83dc175bd59e86b38d4378fa89`
- operator-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator@sha256:de2bed5eedb5348fb5399b7ade0ec3569a247f75a6ea532b1365cab8c84cba59`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:127276658aff87d975ce690a0a862c0073d1c119028110d0a4dcb1a71e281c50`
- resource-manager-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager@sha256:637b96ae9ddebe86ce4b36cb9a275b88a5dcd6cc7a7c1ac3993d7d93c0b89374`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:118cf6da60ad6930362891b741ab79a4d596a5fc8933c2cef7f8cb9fe75653f8`
- scheduler-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler@sha256:f9aa546df5d17ae6fe8510da46bb403de6d5a594febec773258cf79886257ec6`
## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.141.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.141.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.141.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.141.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.141.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.141.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.141.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.141.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.141.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.141.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.141.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.141.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.141.0`
