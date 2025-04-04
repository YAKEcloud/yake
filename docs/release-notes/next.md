---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-dns-service to <code>1.62.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Selection of dns-controller-manager image by seed-label `service.dns.extensions.gardener.cloud/drop-metadata-records` has been removed. The current dns-controller-manager image dropping the metadata records is always used. by @MartinWeindel [#452]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.62.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.62.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.62.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.62.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.62.0`


</details>

<details>
<summary><b>Update garden-kube-apiserver to <code>5.4.0</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/garden-kube-apiserver/compare/v5.3.0...v5.4.0

</details>

<details>
<summary><b>Update provider-openstack to <code>1.47.0</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## ✨ New Features

- `[USER]` The provider-openstack extension does now support shoot clusters with Kubernetes version 1.32. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md) before upgrading to 1.32. by @LucaBernstein [#969]
- `[DEVELOPER]` Updates gophercloud client to v2 by @hebelsan [#951]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused deployment issues with the `gardener.cloud-fast` storage class when the extension was deployed by `gardener-operator` in the garden runtime cluster. The deployment of this `StorageClass` object is now only done for OpenStack seeds. by @timuthy [#994]
- `[OPERATOR]` infraflow: report last error on task timeouts by @hown3d [#970]
- `[OPERATOR]` Correctly select endpoints in multi-region OpenStack environments by @mreichardt95 [#995]
## 🏃 Others

- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#997]
- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#985]
- `[OPERATOR]` Adjust replica count from high-availability webhook mutation according to the helm chart. by @kon-angelo [#918]
- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#981]
- `[OPERATOR]` Validate that all MachineImages in the CloudProfile map to a valid MachineImage in the CloudProfileConfig  by @hebelsan [#943]
- `[OPERATOR]` Locate the first ipv4 instead of using the first available FIP in bastion controller by @kon-angelo [#1005]
- `[OPERATOR]` `provider-openstack` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#889]
- `[OPERATOR]` Update golang to v1.24.0 by @kon-angelo [#989]
- `[DEPENDENCY]` Upgrade gardener dependency to v1.113.0 by @kon-angelo [#991]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.47.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.47.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.47.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.47.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.47.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.115.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @gardener-ci-robot [#11739]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @gardener-ci-robot [#11737]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.57.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`.  by @gardener-ci-robot [#11725]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.115.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.115.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.115.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.115.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.115.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.115.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.115.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @gardener-ci-robot [#11739]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @gardener-ci-robot [#11737]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.57.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`.  by @gardener-ci-robot [#11725]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.115.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.115.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.115.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.115.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.115.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.115.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.115.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @gardener-ci-robot [#11739]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @gardener-ci-robot [#11737]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.57.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.0` to `v0.57.1`.  by @gardener-ci-robot [#11725]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.115.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.115.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.115.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.115.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.115.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.115.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.115.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.115.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.115.1`


</details>

<details>
<summary><b>Update provider-aws to <code>1.61.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-aws` no longer supports Shoots with Кubernetes version <= 1.26. by @shafeeqes [#1093]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @AleksandarSavchev [#1207]
## ✨ New Features

- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.32. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.32.md) before upgrading to 1.32. by @LucaBernstein [#1206]
- `[USER]` The extension now supports `Shoot`s using `WorkloadIdentity`s instead of cloud provider credentials. by @dimityrmirchev [#1141]
## 🐛 Bug Fixes

- `[USER]` Recover from panics and print shoot information during infrastructure reconciliation by @kon-angelo [#1264]
- `[USER]` Fix an issue where the vpc-id was not properly added to the subnet filters by @kon-angelo [#1264]
## 🏃 Others

- `[OPERATOR]` Validate that all MachineImages in the CloudProfile map to a valid MachineImage in the CloudProfileConfig by @hebelsan [#1185]
- `[OPERATOR]` Update CSI container kube-api-* and worker arguments according to upstream recommendations.  by @kon-angelo [#1255]
- `[OPERATOR]` Fix an issue with missing network policies on ALBC webhook. by @kon-angelo [#1260]
- `[OPERATOR]` The ports used by the extension can now be specified via helm values. by @ScheererJ [#1229]
# [gardener/machine-controller-manager-provider-aws]

## ✨ New Features

- `[OPERATOR]` MCM now supports workload identity authentication. This can be configured if the secret contains `roleARN` and `workloadIdentityTokenFile`. by @dimityrmirchev [gardener/machine-controller-manager-provider-aws#177]
## 🏃 Others

- `[OPERATOR]` pipeline_integration_test now uses the control plane of a cluster to deploy objects part of its tests by @aaronfern [gardener/machine-controller-manager-provider-aws#184]
- `[OPERATOR]` vendored MCM version has been upgraded to v0.56.0 by @aaronfern [gardener/machine-controller-manager-provider-aws#184]
# [gardener/aws-custom-route-controller]

## ✨ New Features

- `[OPERATOR]` The controller now supports workload identity authentication. by @dimityrmirchev [gardener/aws-custom-route-controller#47]
## 🏃 Others

- `[OPERATOR]` Introduce multi-arch build for `linux/arm64` images. by @MartinWeindel [gardener/aws-custom-route-controller#136]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.61.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.61.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.61.0`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.61.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.61.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.18.0</code></b></summary>

## What's Changed
* 🤖 Update module github.com/gardener/gardener to v1.115.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/144


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.17.1...v0.18.0

</details>

<details>
<summary><b>Update provider-aws to <code>1.61.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` Update component-descriptor script to include external images again by @AndreasBurger [#1265]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.61.1`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.61.1`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.61.1`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.61.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.61.1`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.19.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing the gvisor test-machinery integration test to fail is now fixed. by @dimitar-kostadinov [#201]
## 🏃 Others

- `[USER]` If debugging of workloads in gVisor is required, runsc debug logs can be turned on by specifying `debug: "true"` in the gVisor providerConfig. by @MrBatschner [#204]
- `[OPERATOR]` moved imageVectorOverwrite to top level of values file by @Roncossek [#199]
- `[OPERATOR]` `extension-runtime-gvisor` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#151]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.19.0`
## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.19.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.19.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.59.2</code></b></summary>

no release notes available

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.59.2`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.59.2`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.59.2`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.59.2`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.59.2`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.30.0</code></b></summary>

# [gardener/gardener-extension-os-ubuntu]

## 🏃 Others

- `[OPERATOR]` `extension-os-ubuntu` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#157]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.30.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.30.0`


</details>

<details>
<summary><b>Update provider-hcloud to <code>0.6.34</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.34
Support for Kubernetes v1.32

**Full Changelog**: https://github.com/23technologies/gardener-extension-provider-hcloud/compare/v0.6.33...v0.6.34

</details>

<details>
<summary><b>Update provider-gcp to <code>1.43.2</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🏃 Others

- `[OPERATOR]` Fix an issue with the consumption of imagevector overwrite. by @kon-angelo [#1016]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.43.2`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.43.2`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.43.2`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.43.2`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.43.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.116.0</code></b></summary>

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


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.116.0</code></b></summary>

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


</details>

<details>
<summary><b>Update gardenlet to <code>1.116.0</code></b></summary>

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


</details>

<details>
<summary><b>Update provider-azure to <code>1.52.0</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[OPERATOR]` Enabling the immutable bucket feature is a breaking change, as it requires additional permissions. The permissions given to your credential are to be first modified before enabling the alpha feature. by @renormalize [#1098]
## 📰 Noteworthy

- `[OPERATOR]` Azure Blob Storage Containers can now be configured to be created with container-level immutability settings.  by @renormalize [#1098]
## ✨ New Features

- `[OPERATOR]` The immutable bucket feature is currently in alpha state. The immutable bucket feature can be enabled by enabling `config.featureGates.enableImmutableBuckets`. More information can be found in `docs/usage/usage.md`. by @renormalize [#1098]
## 🏃 Others

- `[OPERATOR]` `provider-azure` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#997]
- `[OPERATOR]` Implement etcd credential rotation by @kon-angelo [#1114]
- `[USER]` Update worker pool hash if diagnostic profile option is enabled by @hebelsan [#1122]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.52.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.52.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.52.0`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.52.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.52.0`


</details>
