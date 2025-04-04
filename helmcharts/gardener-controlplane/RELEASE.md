# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` `/hack/generate-crds.sh` will no longer generate any CRDs with `group=druid.gardener.cloud`. One must use [etcd-druid API](https://github.com/gardener/etcd-druid/blob/v0.28.0/api/core/v1alpha1/crds/crd.go#L35) to get the CRDs that serve as a single source of truth for all etcd-druid CRDs. by @unmarshall [#11545]
- `[DEVELOPER]` The extension `class` field in the [generic extension controller](https://github.com/gardener/gardener/blob/ec709dbc3119b9888c29361e7d93c47db1674b0c/extensions/pkg/controller/extension/controller.go) was removed. Please use the new field `classes` instead. by @timuthy [#11764]
- `[OPERATOR]` The etcd-druid's GA-ed `UseEtcdWrapper` feature gate is removed. It is now unconditionally enabled. It should no longer be passed in gardenlet configuration. Before upgrading to this version of Gardener, check your gardenlet configuration and make sure that it does not specify the etcd-druid's `UseEtcdWrapper` feature gate. by @unmarshall [#11545]
- `[OPERATOR]` The default etcd-main storage is increased from `10Gi` to `25Gi`. The etcd-main storage capacity is mutated by provider extensions. Before upgrading to this version of Gardener, make sure the provider extensions which you use mutate the etcd-main capacity. Otherwise, the default storage capacity change in Gardener could be unexpected or breaking. by @unmarshall [#11545]
- `[OPERATOR]` Please note, if you configure `spec.extensions` in your `Garden` resource: `gardener-operator` adds a `garden-` prefix to all extension resources configured via the `Garden`. Existing extension resources (not prefixed) will be deleted automatically at the end of the reconciliation. Another, manually triggered  `Garden` reconciliation might be required to reach the desired state of the extension again. by @timuthy [#11764]
## 📰 Noteworthy

- `[OPERATOR]` `NodeAgentAuthorizer` feature gate has been promoted to beta and is now enabled by default. by @oliver-goetz [#11757]
- `[OPERATOR]` The feature gate `NewVPN` has been graduated to `GA`. It was already enabled by default and can now no longer be turned off. The feature gate will be removed in a future release. by @domdom82 [#11714]
## ✨ New Features

- `[OPERATOR]` Extensions can be configured for `Seed`s via `spec.extensions` to deploy extensions for the seed cluster. Before activating this configuration, please first confirm that the corresponding extension is compatible with the seed use-case. by @timuthy [#11764]
## 🐛 Bug Fixes

- `[OPERATOR]` The `NetworkPolicy` controller part of `gardener-resource-manager` does no longer attempt to create resources in terminating namespaces. by @rfranzke [#11808]
- `[OPERATOR]` An issue causing Shoot reconciliation to fail with `no relationship found` when the referenced SecretBinding/CredentialsBinding is forcefully deleted (its finalizer is removed by the end user) and then recreated with the same name is now fixed. gardener-admission-controller's  authorisation graph is now updated for a Shoot after forceful deletion and recreation of the referenced Secretbinding/CredentialsBinding. by @MartinWeindel [#11461]
- `[OPERATOR]` If the computed pod label selector contains keys exceeding 63 characters, the `NetworkPolicy` controller part of `gardener-resource-manager` does now shorten them to make sure they can actually get created. Previously, it failed trying to create them infinitely, resulting in high CPU load in large clusters. by @rfranzke [#11808]
- `[OPERATOR]` Keep `operator.gardener.cloud.Extension` condition `RequiredRuntime` = `true` until deletion of `extensions.gardener.cloud.Extension`s has completed. by @MartinWeindel [#11696]
- `[OPERATOR]` Fix a bug that appears when migrating a `Shoot` between `Seed`s by introducing a new controller, which manages a `ShootState` finalizer preventing early object deletions. by @vitanovs [#11491]
## 🏃 Others

- `[DEVELOPER]` Remove the double maintenance of CRDs defined in etcd-druid. Now, gardenlet is using the etcd-druid CRD APIs to get the CRDs ensuring one single source of truth. by @unmarshall [#11545]
- `[DEVELOPER]` Remove the dependency on the `github.com/gardener/etcd-druid` module and instead introduce dependency on `github.com/gardener/etcd-druid/api` module. by @unmarshall [#11545]
- `[OPERATOR]` Add optional argument `--custom-package <group>=<package>` to `generate-crds.sh` script. by @MartinWeindel [#11702]
- `[OPERATOR]` Remove unnecessary istio loadbalancer annotations from the ClusterIP kube-apiserver service. by @kon-angelo [#11728]
- `[OPERATOR]` Increase VPA client-side rate limits to `200` qps and `250` burst. by @voelzmo [#11748]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.33.1` to `v1.33.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.33.2) by @gardener-ci-robot [#11751]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/node-exporter` from `v1.9.0` to `v1.9.1`.  by @gardener-ci-robot [#11784]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.27.0` to `v0.28.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.28.0)  
  - `github.com/gardener/etcd-druid` from `v0.27.0` to `v0.28.0`.  by @unmarshall [#11545]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.2` to `1.30.3`.  by @gardener-ci-robot [#11766]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.33.0` to `v1.33.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.33.1) by @gardener-ci-robot [#11720]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/coreos/etcd` from `v3.4.36` to `v3.5.20`.  by @gardener-ci-robot [#11756]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/coreos/etcd` from `v3.4.34` to `v3.4.36`.  by @gardener-ci-robot [#11755]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.0`
