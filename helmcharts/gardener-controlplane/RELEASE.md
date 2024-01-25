# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The signature of `github.com/gardener/gardener/pkg/chartrenderer.RenderedChart#Files` has changed. by @acumino [#8877]
- `[OPERATOR]` The deprecated field `seed.spec.secretRef` has been removed from the Seed API. Please check your `Seed`s and remove any usage before upgrading to this Gardener version. by @acumino [#8896]
- `[OPERATOR]` Migration code for Plutono and Vali is now removed. Consider manual cleanup for longterm broken Shoots as described in the PR to avoid leaking Loki's PV. by @rickardsjp [#8999]
- `[DEVELOPER]` The `pkg/resourcemanager/predicate.ClassFilter.Active` function was replaced by `IsTransferringResponsibility` and `IsWaitForCleanupRequired`.   
  - `pkg/resourcemanager/predicate.ClassFilter.IsTransferringResponsibility` should be used to check whether the `.spec.class` field of a `ManagedResource` has changed and let the controller which was previously responsible for the `ManagedResource` perform any additional/cleanup tasks.  
  - `pkg/resourcemanager/predicate.ClassFilter.IsWaitForCleanupRequired` should be used by the controller to which the responsibility was transferred to determine whether it should wait for any tasks/cleanup activities made by the previously responsible controller. by @Kostov6 [#8886]
## 📰 Noteworthy

- `[OPERATOR]` The `ContainerdRegistryHostsDir` feature gate has been promoted to GA and is now locked to "enabled by default". by @ialidzhikov [#8979]
## ✨ New Features

- `[OPERATOR]` When hibernating a cluster, Gardener now assigns an error code `ERR_CLEANUP_CLUSTER_RESOURCES` to shoot clusters if (user) pods are still running in namespaces other than `kube-system`. by @benedictweis [#9060]
- `[OPERATOR]` `node-agent` checks health of `containerd` and `kubelet` now. This replaces the previous bash implementation of these health checks. by @majst01 [#8786]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.29. To allow creation/update of 1.29 clusters you will have to update the version of your provider extension(s) to a version that supports 1.29 as well. Please consult the respective releases and notes in the provider extension's repository. by @acumino [#8976]
- `[OPERATOR]` The components managed by gardener now use PDBs with `unhealthyPodEvictionPolicy: AlwaysAllow` for clusters with kubernetes version >= 1.26. (For v1.26 clusters (shoots and virtual-garden cluster), the featuregate `PDBUnhealthyPodEvictionPolicy ` needs to be turned on in the kube-apiserver. From v1.27 this is enabled by default.) by @shafeeqes [#8969]
- `[DEVELOPER]` Add local setup for dual-stack seeds. by @axel7born [#8983]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.29. Extension developers have to prepare individual extensions as well to work with 1.29. by @acumino [#8976]
## 🐛 Bug Fixes

- `[OPERATOR]` False positive `PrometheusCantScrape` alerts for the etcd-druid job in the shoot control plane are no longer firing, even if the `--enable-backup-compaction` feature of `etcd-druid` is not turned on. by @istvanballok [#8988]
- `[OPERATOR]` Allow the `dependency-watchdog-prober` to patch `deployments` and `deployments/scale` resources. by @aaronfern [#9036]
- `[DEVELOPER]` Local single-zone gardener development setups should now work as expected again even if the istio ingress pods are not scheduled on the control plane node. by @ScheererJ [#8998]
- `[DEVELOPER]` Local gardener-operator and multi-zone gardener development setups now use `externalTrafficPolicy: Local` for inbound communication to mitigate cross-node network problems. by @ScheererJ [#8972]
## 🏃 Others

- `[OPERATOR]` The following dependency has been updated:  
  - `k8s.io/helm@v2.17.0+incompatible` -> `helm.sh/helm/v3@v3.10.3` by @acumino [#8877]
- `[OPERATOR]` Spreading istio pods across hosts is now enforced if there are enough hosts in a particular zone. by @ScheererJ [#8970]
- `[OPERATOR]` The following images are updated:  
  - `europe-docker.pkg.dev/gardener-project/releases/3rd/kubesphere/fluent-operator`: v2.3.0 -> v2.7.0  
  - `europe-docker.pkg.dev/gardener-project/releases/3rd/kubesphere/fluent-bit`: v2.1.4 -> v2.2.0 by @nickytd [#9031]
- `[OPERATOR]` The reliability of `kube-state-metrics` in the `garden` namespace of the `Seed` cluster has been improved to minimize periods of unavailability for Prometheus metric collection by @petersutter [#8931]
- `[OPERATOR]` The following image is updated:  
  - `quay.io/prometheus/prometheus`: `v2.47.0` -> `v2.48.1` by @istvanballok [#8994]
- `[OPERATOR]` kube-proxy is now running in non-privileged mode for K8s >= 1.29 Shoots. The work that needs privileged mode is extracted to an init container. See https://www.kubernetes.dev/blog/2024/01/05/kube-proxy-non-privileged/. by @shafeeqes [#9000]
- `[OPERATOR]` Plutono is updated to v7.5.28.  
  Vali and Valitail are updated to v2.2.13. by @nickytd [#9010]
- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.5`. by @shafeeqes [#8997]
- `[OPERATOR]` Istio ingress gateway dashboard now always shows a graph for all istio namespaces even if no traffic was received in some of them. by @ScheererJ [#9032]
- `[OPERATOR]` kube-proxy's sidecar container no longer installs its tools at runtime, but comes with its toolset pre-installed. by @ScheererJ [#9006]
- `[DEVELOPER]` On startup, `gardenlet` now removes the `resources.gardener.cloud/gardener-resource-manager` finalizer from `Secret`s related to `ManagedResource`s. by @Kostov6 [#8912]
# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` `EtcdWrapper` has progressed from the alpha stage to the beta stage, which now allows for its default usage in etcd-druid. If you prefer to continue using the etcd-custom-image, you can disable the EtcdWrapper by adjusting the feature flag. by @ishan16696 [gardener/etcd-druid#744]
## ✨ New Features

- `[USER]` Add support for overriding storage API endpoint for provider GCS, by adding new field `storageAPIEndpoint` in the GCP/GCS backup secret, with the value in the format `http[s]://host[:port]/storage/v1/`. ⚠️ Note: GCS storage API endpoint will not be overridden for `EtcdCopyBackupsTask`s, since backup buckets may reside in different regions. by @shreyas-s-rao [gardener/etcd-druid#737]
## 🏃 Others

- `[OPERATOR]` Adds documentation for local setup of Etcd Druid by @anveshreddy18 [gardener/etcd-druid#721]
- `[OPERATOR]` Documentation for the controllers of etcd-druid by @renormalize [gardener/etcd-druid#722]
- `[DEVELOPER]` Upgrade to go 1.21.4 by @seshachalam-yv [gardener/etcd-druid#727]
# [gardener/vpn2]

## 🏃 Others

- `[USER]` Security improvements to the `openvpn` configuration. Due to backwards incompatible change between the vpn server and client a short downtime is to be expected during the initial upgrade. by @dimityrmirchev [gardener/vpn2#53]
# [gardener/etcd-wrapper]

## 🏃 Others

- `[OPERATOR]` The `etcd` process now runs with umask set to `0077`, this way the files it creates have no permissions on `group` and `others` level. by @AleksandarSavchev [gardener/etcd-wrapper#16]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.0`
