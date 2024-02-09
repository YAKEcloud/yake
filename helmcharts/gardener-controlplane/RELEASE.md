# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `docker` CRI is no longer supported for machine images in the `CloudProfile`. Docker CRI was already not supported for `Shoot`s with Kubernetes versions `>= v1.23`, so adding this CRI is a no-op currently. Please remove all the usages of `docker` CRI from your `CloudProfile`s before upgrading to this version. by @shafeeqes [#9135]
- `[OPERATOR]` The GA-ed `WorkerlessShoots` feature gate has been removed. by @acumino [#9094]
- `[OPERATOR]` The GA-ed `ContainerdRegistryHostsDir` feature gate has been removed. by @ialidzhikov [#9058]
- `[DEPENDENCY]` The Selector field of the `github.com/gardener/gardener/pkg/extensions/webhook.{Webhook,Args}` types is now renamed to NamespaceSelector. by @ialidzhikov [#9085]
## ✨ New Features

- `[OPERATOR]` When SSH access is enabled for a shoot cluster, the `gardener` linux user is created during the bootstrapping process of a `node`. This allows human operators to more easily SSH into the worker nodes with this username independent of the underlying machine image or cloud provider. by @oliver-goetz [#9077]
- `[OPERATOR]` It is now possible to define additional/custom permissions via RBAC for extensions access in the garden cluster. You can read all about it [here](https://github.com/gardener/gardener/tree/master/docs/extensions/garden-api-access.md#additional-permissions). by @rfranzke [#9079]
- `[DEVELOPER]` The `prometheus-operator` (and its related `CustomResourceDefinition`s) are now deployed by default to garden clusters (by `gardener-operator`) and to seed clusters (by `gardenlet`). In the future, it will take over management of the Prometheus and Alertmanager instances. by @rfranzke [#9067]
- `[USER]` The `gardener-node-agent` health is now being considered during the health check of a `Shoot` and incorporated into the `EveryNodeReady` condition. by @tobschli [#9073]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fix: add snapshots repository to default "component prefixes" to fix wrong values generated into Component Descriptors by @ccwienk [#9109]
- `[DEVELOPER]` Fix Istio ingress service.yaml for dual-stack setup and add test. by @axel7born [#9098]
- `[OPERATOR]` A bug has been fixed which was preventing `valitail` systemd services on shoot workers from starting when the `UseGardenerNodeAgent` feature gate is enabled. by @oliver-goetz [#9149]
- `[OPERATOR]` Cluster creation with highly available control planes and an infrastructure extension that uses dynamic node networks is no longer delayed by a failing VPN connection before the first reconciliation. by @MichaelEischer [#9075]
- `[USER]` The `kube-apiserver` deployment is annotated to mark the completion of labeling the resources for encrytion so that this step is not repeated in case the "label removal" step fails and resources are partially without the label. by @shafeeqes [#9147]
## 🏃 Others

- `[DEVELOPER]` There is now a new `github.com/gardener/gardener/extensions/pkg/webhook.EnsureUnitWithName` func that can be used to add/update unit to OperatingSystemConfig units. by @ialidzhikov [#9121]
- `[DEVELOPER]` Gardener's `ClientMap` implementation was moved from an `internal` to the commonly accessible `clientmap` package. by @timuthy [#9101]
- `[DEVELOPER]` `gardener-node-agent` is now enabled in `provider-extensions` setup. by @oliver-goetz [#9048]
- `[OPERATOR]` On node machines `gardener-node-init.service` is disabled and stopped when `gardener-node-agent` is active. by @oliver-goetz [#9096]
- `[OPERATOR]` Fluent-bit is now upgraded to v2.2.2 by @nickytd [#9120]
- `[OPERATOR]` `BackupEntry`s and `Shoot`s are now labelled with `seed.gardener.cloud/<seed-name>=true` where `<seed-name>` is the value of `.spec.seedName` or `.status.seedName`. This allows for server-side filtering when watching these resources by leveraging a label selector. by @rfranzke [#9089]
- `[OPERATOR]` Seed namespaces in the garden cluster are now labelled with `gardener.cloud/role=seed`, and `ServiceAccount`s for extensions in the seed namespaces are labelled with `controllerregistration.core.gardener.cloud/name=<controllerregistration-name>`. by @rfranzke [#9079]
- `[OPERATOR]` The following image is updated:  
  - `ci:component:github.com/gardener/alpine-conntrack`: 3.19.0 -> 3.19.1 by @gardener-robot-ci-3 [#9090]
- `[OPERATOR]` When upgrading a shoot control plane to multi-zonal high-availability there will no longer be an envoy filter left in the old istio ingress namespace by @ScheererJ [#9005]
- `[OPERATOR]` Change dnsLookupFamily to ALL in vpn seed envoy config, to prevent unnecessary DNS lookups. by @axel7born [#9102]
- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.6`. by @shafeeqes [#9124]
- `[USER]` It is now possible to read the `cluster-identity` `ConfigMap` in the `kube-system` namespace of the Garden cluster by @petersutter [#9056]
- `[DEPENDENCY]` Utility functions `QuantityPtr`,`ProtocolPtr`,`TimePtr` and `TimePtrDeref`, `extensionsv1alpha1.UnitCommandPtr` and `ValueExists` are dropped. Use `k8s.io/utils/ptr.To`, `k8s.io/utils/ptr.Deref` and `slices.Contains` instead. by @shafeeqes [#9107]
# [gardener/ingress-default-backend]

## 🏃 Others

- `[OPERATOR]` `ingress-default-backend` has been migrated to Golang-based implementation. by @acumino [gardener/ingress-default-backend#32]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[DEVELOPER]` MCM restart happens properly in integration tests now. This fix will get activated, once this version is vendored in your mcm-provider by @sssash18 [gardener/machine-controller-manager#879]
- `[OPERATOR]` Fix for edge case of Node object deletion missed during machine termination. by @elankath [gardener/machine-controller-manager#887]
- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @elankath [gardener/machine-controller-manager#866]
## 🏃 Others

- `[OPERATOR]` Architecture field added in the nodetemplate. This will allow CA to pickup architecture from machine class and schedule pods on relevant arch nodes. by @sssash18 [gardener/machine-controller-manager#894]
- `[OPERATOR]` machine controller won't reconcile machine on non-spec update events by @himanshu-kun [gardener/machine-controller-manager#877]
- `[OPERATOR]` fixed IT for seed with k8s >= 1.27 as control cluster  by @piyuagr [gardener/machine-controller-manager#869]
- `[OPERATOR]` The default `machine-safety-orphan-vms-period` has been reduced from 30m to 15m. by @elankath [gardener/machine-controller-manager#866]
- `[DEVELOPER]` Bump `k8s.io/*` deps to `v0.28.2` by @afritzler [gardener/machine-controller-manager#858]
- `[DEVELOPER]` go-git now removed from dependencies due to CVE's. by @elankath [gardener/machine-controller-manager#896]
## 📖 Documentation

- `[DEVELOPER]` Phase transition diagram for a machine object is added to FAQs by @himanshu-kun [gardener/machine-controller-manager#886]
# [gardener/apiserver-proxy]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/apiserver-proxy#72]
# [gardener/autoscaler]

## ✨ New Features

- `[OPERATOR]` Autoscaler will now add NodeGroupAutoscalingOptions to node groups from annotations present in its corresponding machineDeployments by @aaronfern [gardener/autoscaler#257]
## 🏃 Others

- `[OPERATOR]` Synced changes till v1.28.0 of upstream autoscaler by @aaronfern [gardener/autoscaler#260]
- `[OPERATOR]` CA will not scale down machine deployment due to a machine in failed phase, this prevents the race condition which was leading to deletion of a new healthy machine. by @sssash18 [gardener/autoscaler#291]
- `[OPERATOR]` Cluster Autoscaler will suspend its activities if the machine-controller-manager is offline by @sssash18 [gardener/autoscaler#256]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.88.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.88.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.88.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.88.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.88.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.88.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.88.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.88.0`
