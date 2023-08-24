---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-dns-service to <code>1.37.1</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[USER]` Fail if reading secret for external provider fails. (#231) by `Martin Weindel <martin.weindel@sap.com>` [$890c829ba1058e748ef1f05ec7bfe3bbf644f6a7]

</details>

<details>
<summary><b>Update provider-azure to <code>1.38.0</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#713]
- `[OPERATOR]` `provider-azure` no longer supports Shoots or Seeds with Кubernetes version < 1.22. by @shafeeqes [#708]
## ✨ New Features

- `[DEVELOPER]` This extension is now compatible with the `MachineControllerManagerDeployment` feature gate of `gardenlet`. by @rfranzke [#705]
- `[OPERATOR]` The `gardener-extension-admission-azure` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#721]
## 🏃 Others

- `[OPERATOR]` Remove limits from critical control plane components. by @kon-angelo [#715]
- `[OPERATOR]` always search latest os version to build up the Bastion instance by @tedteng [#668]
- `[USER]` The node-controller-manager is now set to keep setting deprecated node labels for k8s clusters of version `>=1.26.0, <1.28.0` to ensure pods using persistent volumes with node affinities are scheduled in the cluster. by @vpnachev [#716]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]

</details>

<details>
<summary><b>Update provider-gcp to <code>1.32.0</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-gcp` no longer supports Shoots or Seeds with Кubernetes version < 1.22. by @shafeeqes [#628]
- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#632]
## ✨ New Features

- `[DEVELOPER]` This extension is now compatible with the `MachineControllerManagerDeployment` feature gate of `gardenlet`. by @rfranzke [#624]
- `[OPERATOR]` The `gardener-extension-admission-gcp` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#638]
## 🏃 Others

- `[OPERATOR]` `cloud-controller-manager`'s route controller is no longer activated for clusters with overlay network by @ScheererJ [#631]
- `[OPERATOR]` Remove limits from critical control plane components. by @kon-angelo [#634]
- `[OPERATOR]` The following image is updated:  
  - registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver: v1.9.5 -> v1.9.7 by @ialidzhikov [#636]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]

</details>

<details>
<summary><b>Update provider-aws to <code>1.46.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-aws` no longer supports Shoots or Seeds with Кubernetes version < 1.22. by @shafeeqes [#771]
- `[USER]` If the AWS Load Balancer Controller is deployed, the user used by the cloudprovider needs additional permissions. See last section in this example AWS IAM policy document [here](https://github.com/gardener/gardener-extension-provider-aws/blob/master/docs/usage-as-end-user.md#permissions) for more details. by @MartinWeindel [#717]
## ✨ New Features

- `[OPERATOR]` The `gardener-extension-admission-aws` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#791]
- `[DEVELOPER]` This extension is now compatible with the `MachineControllerManagerDeployment` feature gate of `gardenlet`. by @rfranzke [#774]
- `[USER]` The AWS Load Balancer Controller is deployed into the control plane if enabled with `spec.provider.controlPlaneConfig.loadBalancerController.enabled=true` in the shoot manifest. by @MartinWeindel [#717]
## 🏃 Others

- `[OPERATOR]` Infrastructure dualstack support can be enabled via `spec.provider.infrastructureConfig.dualStack.enabled: true` in the shoot.yaml. by @DockToFuture [#778]
- `[OPERATOR]` add a sustainable way to get available image AMIs for the test by @tedteng [#715]
- `[OPERATOR]` Remove limits from system critical components by @kon-angelo [#787]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]

</details>

<details>
<summary><b>Update provider-openstack to <code>1.36.0</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @ialidzhikov [gardener/machine-controller-manager#834]
# [gardener/gardener-extension-provider-openstack]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-openstack` no longer supports Seeds or Shoots with Кubernetes version < 1.22. by @shafeeqes [#648]
- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#653]
## ✨ New Features

- `[OPERATOR]` Flow-based infrastructure reconciliation without Terraformer by @MartinWeindel [#528]
- `[OPERATOR]` The `gardener-extension-admission-openstack` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#660]
- `[DEVELOPER]` This extension is now compatible with the `MachineControllerManagerDeployment` feature gate of `gardenlet`. by @rfranzke [#645]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix rendering of CSI manila storageclass if creating infrastructure fails. by @MartinWeindel [#652]
## 🏃 Others

- `[OPERATOR]` Provider-extension will attempt to delete all kubernetes loadbalancers that were not cleaned up by the CCM on infrastructure deletion. by @kon-angelo [#656]
- `[OPERATOR]` machineDeployment will have the label `topology.cinder.csi.openstack.org/zone` when created. by @elankath [#659]
- `[OPERATOR]` Remove limits from critical control plane components. by @kon-angelo [#657]
- `[DEVELOPER]` All code related to the removed `APIServerSNI` feature gate of `gardenlet` has been removed from this extension. by @rfranzke [#644]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]

</details>

<details>
<summary><b>Update cert-management to <code>0.10.8</code></b></summary>

# [gardener/cert-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Support of CRDs of version `apiextensions.k8s.io/v1beta1` is dropped. by @acumino [#133]
## 🏃 Others

- `[OPERATOR]` Bump golang from `1.20.6` to `1.20.7` by @MartinWeindel [#134]

</details>

<details>
<summary><b>Update cert-management to <code>0.10.9</code></b></summary>

# [gardener/cert-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix optional deployment of CRDs which was broken with release v0.10.8 by @MartinWeindel [#135]

</details>

<details>
<summary><b>Update cert-management to <code>0.10.10</code></b></summary>

no release notes available

</details>

<details>
<summary><b>Update provider-azure to <code>1.38.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🏃 Others

- `[OPERATOR]` Bastion instances now use the latest ubuntu server 22.04 LTS version  by @kon-angelo [#724]

</details>

<details>
<summary><b>Update networking-calico to <code>1.36.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#280]
## ✨ New Features

- `[OPERATOR]` The `gardener-extension-admission-calico` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#289]
## 🏃 Others

- `[OPERATOR]` Allow propagating pod routes to nodes without overlay network by specifying `shoot.spec.networking.providerConfig.overlay.createPodRoutes: true` by @ScheererJ [#285]

</details>

<details>
<summary><b>Update networking-cilium to <code>1.27.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#199]
## ✨ New Features

- `[OPERATOR]` The `gardener-extension-admission-cilium` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#208]
## 🏃 Others

- `[OPERATOR]` Allow propagating pod routes to nodes without overlay network by specifying `shoot.spec.networking.providerConfig.overlay.createPodRoutes: true` by @ScheererJ [#203]
- `[OPERATOR]` Update cilium to `v1.14.0`. by @DockToFuture [#206]
- `[OPERATOR]` Update to cilium `v1.14.1`. by @DockToFuture [#209]

</details>

<details>
<summary><b>Update provider-alicloud to <code>1.48.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#634]
- `[OPERATOR]` `provider-alicloud` no longer supports Shoots or Seeds with Кubernetes version < 1.22. by @shafeeqes [#623]
## ✨ New Features

- `[OPERATOR]` The `gardener-extension-admission-alicloud` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#636]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug related to the network policy annotations that prevented the shoot control plane Prometheus from scraping the `cloud-controller-manager` and caused false alerts is fixed. by @istvanballok [#637]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]

## Docker Images
gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.48.0`
gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.48.0`

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.35.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#175]
## 🏃 Others

- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.75.0 to 1.76.2. by @dependabot[bot] [#179]
- `[OPERATOR]` Refactor imagevector package to conform to usage pattern in gardener/gardener by @MartinWeindel [#181]
- `[OPERATOR]` Bumps golang from 1.20.6 to 1.21.0. by @dependabot[bot] [#178]
- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.76.2 to 1.77.0. by @dependabot[bot] [#180]
- `[USER]` Add configuration field `certExpirationAlertDays` to allow overriding default value in shoot manifest. by @MartinWeindel [#176]
# [gardener/cert-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Support of CRDs of version `apiextensions.k8s.io/v1beta1` is dropped. by @acumino [gardener/cert-management#133]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix optional deployment of CRDs which was broken with release v0.10.8 by @MartinWeindel [gardener/cert-management#135]
## 🏃 Others

- `[OPERATOR]` Bump golang from `1.20.6` to `1.20.7` by @MartinWeindel [gardener/cert-management#134]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @gardener-ci-robot [#8372]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.77.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @gardener-ci-robot [#8372]

</details>

<details>
<summary><b>Update gardenlet to <code>1.77.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @gardener-ci-robot [#8372]

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.38.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## ✨ New Features

- `[OPERATOR]` The `gardener-extension-admission-shoot-dns-service` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#232]
## 🐛 Bug Fixes

- `[USER]` Fail if reading secret for external provider fails. by @MartinWeindel [#231]
## 🏃 Others

- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.76.2 to 1.77.0. by @dependabot[bot] [#230]
- `[OPERATOR]` Refactor imagevector package to conform to usage pattern in gardener/gardener by @MartinWeindel [#233]

</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.11.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-runtime-gvisor` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#84]
## 🏃 Others

- `[OPERATOR]` The Alpine base images for the gVisor installation containers were updated to the latest 3.17.4 version. by @MrBatschner [#85]
- `[OPERATOR]` The Alpine base images for the gVisor installation containers were updated to the latest 3.18.3 version. by @dependabot[bot] [#89]

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.38.1</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Add copy of images.yaml to charts dir to resolve installation issue for landscapes using RBSC (#237) by `Martin Weindel <martin.weindel@sap.com>` [$1ca03009ff7d641f48cd95b4d32e605056b50e75]

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.6.5</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.6.4...0.6.5

</details>

<details>
<summary><b>Update cert-management to <code>0.11.0</code></b></summary>

# [gardener/cert-management]

## ✨ New Features

- `[USER]` Support for preferred chains to select a certificate chain returned for a certificate request from the ACME server by @MartinWeindel [#137]


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.36.0</code></b></summary>

# [gardener/cert-management]

## ✨ New Features

- `[USER]` Support for preferred chains to select a certificate chain returned for a certificate request from the ACME server by @MartinWeindel [gardener/cert-management#137]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.78.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The following mapper funcs from the extension library no longer accept a `context.Context` arg - `ClusterToContainerResourceMapper`, `ClusterToControlPlaneMapper`, `ClusterToDNSRecordMapper`, `ClusterToExtensionMapper`, `ClusterToInfrastructureMapper`, `ClusterToNetworkMapper`, `ClusterToWorkerMapper` and `ClusterToObjectMapper`. The `context.Context` arg was redundant and not used. by @acumino [#8321]
- `[USER]` Deprecated annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns` is removed. Use field `.spec.systemComponents.nodeLocalDNS.enabled` in `Shoot` instead. Switching on node-local-dns via shoot specification will roll the nodes even if node-local-dns was enabled beforehand via annotation. by @acumino [#8364]
- `[USER]` Deprecated annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns-force-tcp-to-{cluster-dns, upstream-dns}` is removed. Use field `.spec.systemComponents.nodeLocalDNS.{forceTCPToClusterDNS, forceTCPToUpstreamDNS}` in `Shoot` instead. by @acumino [#8364]
## ✨ New Features

- `[OPERATOR]` `kubectl get garden` now features additional printer column `Observability` providing information about the Observability components of the runtime cluster. by @gardener-ci-robot [#8384]
- `[OPERATOR]` It is possible now to trigger a seed reconciliation by annotating the Seed with `gardener.cloud/operation=reconcile`. by @shafeeqes [#8347]
- `[OPERATOR]` Status of `garden` now includes the `ObservabilityComponentsHealthy` condition which show the health of observability components in the garden runtime-cluster. by @oliver-goetz [#8346]
## 🐛 Bug Fixes

- `[OPERATOR]` `operator` now deletes `ManagedResources` deployed to the virtual-garden before deleting `virtual-garden-kube-apiserver`. by @oliver-goetz [#8368]
- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @istvanballok [#8371]
- `[OPERATOR]` A bug is fixed that rendered the "CPU usage" panel of the "VPN" Plutono dashboard blank. by @gardener-ci-robot [#8392]
- `[OPERATOR]` A bug is fixed in the Prometheus alert definitions that caused false positive KubePodNotReadyControlPlane alerts related to the etcd compaction job. by @rickardsjp [#8361]
## 🏃 Others

- `[OPERATOR]` Shoot node network and seed pod network need to be disjoint. This will be checked during scheduling of a shoot cluster, i.e. during initial admission or on control-plane migration. by @ScheererJ [#8353]
- `[OPERATOR]` Prometheus scrape job configs for targets in the shoot cluster have been improved. by @rickardsjp [#8360]
- `[OPERATOR]` The following images are updated:  
  - registry.k8s.io/metrics-server/metrics-server: v0.6.3 -> v0.6.4  
  - registry.k8s.io/cpa/cluster-proportional-autoscaler: v1.8.8 -> v1.8.9  
  - registry.k8s.io/coredns/coredns: v1.10.0 -> v1.10.1  
  - quay.io/prometheus/blackbox-exporter: v0.23.0 -> v0.24.0  
  - quay.io/prometheus/node-exporter: v1.5.0 -> v1.6.1  
  - ghcr.io/credativ/plutono: v7.5.22 -> v7.5.23  
  - ghcr.io/prometheus-operator/prometheus-config-reloader: v0.61.1 -> v0.67.1  
  - registry.k8s.io/dns/k8s-dns-node-cache: 1.22.20 -> 1.22.23 by @ialidzhikov [#8324]
- `[OPERATOR]` The following images are updated:  
  - `registry.k8s.io/kube-state-metrics/kube-state-metrics`: `v2.5.0` -> `v2.8.2` by @gardener-ci-robot [#8391]
- `[OPERATOR]` `gardener-operator` now takes over management of `plutono`. by @acumino [#8301]
- `[OPERATOR]` `kubectl proxy` now works as expected in the local development setup in conjunction with highly available vpn by @ScheererJ [#8370]
- `[DEPENDENCY]` Backupbucket/backupentry controllers: watch secret metadata only by @MartinWeindel [#8348]
- `[DEVELOPER]` Test-machinery integration tests are now using upstream K8s e2e test images such as `registry.k8s.io/e2e-test-images/busybox`, `registry.k8s.io/e2e-test-images/agnhost` instead Gardener images such as `eu.gcr.io/gardener-project/3rd/busybox`, `eu.gcr.io/gardener-project/3rd/alpine` and others. by @ialidzhikov [#8341]
# [gardener/etcd-druid]

## 🏃 Others

- `[OPERATOR]` Upgrade gardener/gardener from `1.65.0` to `1.76.0` by @acumino [gardener/etcd-druid#657]
- `[OPERATOR]` All default images are now present in `images.yaml` by @aaronfern [gardener/etcd-druid#673]
# [gardener/dependency-watchdog]

## 🏃 Others

- `[OPERATOR]` Bump g/g version to remove stale client-go dependency by @rishabh-11 [gardener/dependency-watchdog#92]
# [gardener/hvpa-controller]

## 🏃 Others

- `[OPERATOR]` Updated go to 1.20.7 by @voelzmo [gardener/hvpa-controller#126]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.78.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.78.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.78.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.78.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.78.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.78.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.78.0`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.78.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The following mapper funcs from the extension library no longer accept a `context.Context` arg - `ClusterToContainerResourceMapper`, `ClusterToControlPlaneMapper`, `ClusterToDNSRecordMapper`, `ClusterToExtensionMapper`, `ClusterToInfrastructureMapper`, `ClusterToNetworkMapper`, `ClusterToWorkerMapper` and `ClusterToObjectMapper`. The `context.Context` arg was redundant and not used. by @acumino [#8321]
- `[USER]` Deprecated annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns` is removed. Use field `.spec.systemComponents.nodeLocalDNS.enabled` in `Shoot` instead. Switching on node-local-dns via shoot specification will roll the nodes even if node-local-dns was enabled beforehand via annotation. by @acumino [#8364]
- `[USER]` Deprecated annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns-force-tcp-to-{cluster-dns, upstream-dns}` is removed. Use field `.spec.systemComponents.nodeLocalDNS.{forceTCPToClusterDNS, forceTCPToUpstreamDNS}` in `Shoot` instead. by @acumino [#8364]
## ✨ New Features

- `[OPERATOR]` `kubectl get garden` now features additional printer column `Observability` providing information about the Observability components of the runtime cluster. by @gardener-ci-robot [#8384]
- `[OPERATOR]` It is possible now to trigger a seed reconciliation by annotating the Seed with `gardener.cloud/operation=reconcile`. by @shafeeqes [#8347]
- `[OPERATOR]` Status of `garden` now includes the `ObservabilityComponentsHealthy` condition which show the health of observability components in the garden runtime-cluster. by @oliver-goetz [#8346]
## 🐛 Bug Fixes

- `[OPERATOR]` `operator` now deletes `ManagedResources` deployed to the virtual-garden before deleting `virtual-garden-kube-apiserver`. by @oliver-goetz [#8368]
- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @istvanballok [#8371]
- `[OPERATOR]` A bug is fixed that rendered the "CPU usage" panel of the "VPN" Plutono dashboard blank. by @gardener-ci-robot [#8392]
- `[OPERATOR]` A bug is fixed in the Prometheus alert definitions that caused false positive KubePodNotReadyControlPlane alerts related to the etcd compaction job. by @rickardsjp [#8361]
## 🏃 Others

- `[OPERATOR]` Shoot node network and seed pod network need to be disjoint. This will be checked during scheduling of a shoot cluster, i.e. during initial admission or on control-plane migration. by @ScheererJ [#8353]
- `[OPERATOR]` Prometheus scrape job configs for targets in the shoot cluster have been improved. by @rickardsjp [#8360]
- `[OPERATOR]` The following images are updated:  
  - registry.k8s.io/metrics-server/metrics-server: v0.6.3 -> v0.6.4  
  - registry.k8s.io/cpa/cluster-proportional-autoscaler: v1.8.8 -> v1.8.9  
  - registry.k8s.io/coredns/coredns: v1.10.0 -> v1.10.1  
  - quay.io/prometheus/blackbox-exporter: v0.23.0 -> v0.24.0  
  - quay.io/prometheus/node-exporter: v1.5.0 -> v1.6.1  
  - ghcr.io/credativ/plutono: v7.5.22 -> v7.5.23  
  - ghcr.io/prometheus-operator/prometheus-config-reloader: v0.61.1 -> v0.67.1  
  - registry.k8s.io/dns/k8s-dns-node-cache: 1.22.20 -> 1.22.23 by @ialidzhikov [#8324]
- `[OPERATOR]` The following images are updated:  
  - `registry.k8s.io/kube-state-metrics/kube-state-metrics`: `v2.5.0` -> `v2.8.2` by @gardener-ci-robot [#8391]
- `[OPERATOR]` `gardener-operator` now takes over management of `plutono`. by @acumino [#8301]
- `[OPERATOR]` `kubectl proxy` now works as expected in the local development setup in conjunction with highly available vpn by @ScheererJ [#8370]
- `[DEPENDENCY]` Backupbucket/backupentry controllers: watch secret metadata only by @MartinWeindel [#8348]
- `[DEVELOPER]` Test-machinery integration tests are now using upstream K8s e2e test images such as `registry.k8s.io/e2e-test-images/busybox`, `registry.k8s.io/e2e-test-images/agnhost` instead Gardener images such as `eu.gcr.io/gardener-project/3rd/busybox`, `eu.gcr.io/gardener-project/3rd/alpine` and others. by @ialidzhikov [#8341]
# [gardener/etcd-druid]

## 🏃 Others

- `[OPERATOR]` Upgrade gardener/gardener from `1.65.0` to `1.76.0` by @acumino [gardener/etcd-druid#657]
- `[OPERATOR]` All default images are now present in `images.yaml` by @aaronfern [gardener/etcd-druid#673]
# [gardener/dependency-watchdog]

## 🏃 Others

- `[OPERATOR]` Bump g/g version to remove stale client-go dependency by @rishabh-11 [gardener/dependency-watchdog#92]
# [gardener/hvpa-controller]

## 🏃 Others

- `[OPERATOR]` Updated go to 1.20.7 by @voelzmo [gardener/hvpa-controller#126]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.78.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.78.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.78.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.78.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.78.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.78.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.78.0`

</details>

<details>
<summary><b>Update gardenlet to <code>1.78.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` The following mapper funcs from the extension library no longer accept a `context.Context` arg - `ClusterToContainerResourceMapper`, `ClusterToControlPlaneMapper`, `ClusterToDNSRecordMapper`, `ClusterToExtensionMapper`, `ClusterToInfrastructureMapper`, `ClusterToNetworkMapper`, `ClusterToWorkerMapper` and `ClusterToObjectMapper`. The `context.Context` arg was redundant and not used. by @acumino [#8321]
- `[USER]` Deprecated annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns` is removed. Use field `.spec.systemComponents.nodeLocalDNS.enabled` in `Shoot` instead. Switching on node-local-dns via shoot specification will roll the nodes even if node-local-dns was enabled beforehand via annotation. by @acumino [#8364]
- `[USER]` Deprecated annotation `alpha.featuregates.shoot.gardener.cloud/node-local-dns-force-tcp-to-{cluster-dns, upstream-dns}` is removed. Use field `.spec.systemComponents.nodeLocalDNS.{forceTCPToClusterDNS, forceTCPToUpstreamDNS}` in `Shoot` instead. by @acumino [#8364]
## ✨ New Features

- `[OPERATOR]` `kubectl get garden` now features additional printer column `Observability` providing information about the Observability components of the runtime cluster. by @gardener-ci-robot [#8384]
- `[OPERATOR]` It is possible now to trigger a seed reconciliation by annotating the Seed with `gardener.cloud/operation=reconcile`. by @shafeeqes [#8347]
- `[OPERATOR]` Status of `garden` now includes the `ObservabilityComponentsHealthy` condition which show the health of observability components in the garden runtime-cluster. by @oliver-goetz [#8346]
## 🐛 Bug Fixes

- `[OPERATOR]` `operator` now deletes `ManagedResources` deployed to the virtual-garden before deleting `virtual-garden-kube-apiserver`. by @oliver-goetz [#8368]
- `[OPERATOR]` A bug is fixed that prevented scraping the metrics of etcd in the shoot control plane. by @istvanballok [#8371]
- `[OPERATOR]` A bug is fixed that rendered the "CPU usage" panel of the "VPN" Plutono dashboard blank. by @gardener-ci-robot [#8392]
- `[OPERATOR]` A bug is fixed in the Prometheus alert definitions that caused false positive KubePodNotReadyControlPlane alerts related to the etcd compaction job. by @rickardsjp [#8361]
## 🏃 Others

- `[OPERATOR]` Shoot node network and seed pod network need to be disjoint. This will be checked during scheduling of a shoot cluster, i.e. during initial admission or on control-plane migration. by @ScheererJ [#8353]
- `[OPERATOR]` Prometheus scrape job configs for targets in the shoot cluster have been improved. by @rickardsjp [#8360]
- `[OPERATOR]` The following images are updated:  
  - registry.k8s.io/metrics-server/metrics-server: v0.6.3 -> v0.6.4  
  - registry.k8s.io/cpa/cluster-proportional-autoscaler: v1.8.8 -> v1.8.9  
  - registry.k8s.io/coredns/coredns: v1.10.0 -> v1.10.1  
  - quay.io/prometheus/blackbox-exporter: v0.23.0 -> v0.24.0  
  - quay.io/prometheus/node-exporter: v1.5.0 -> v1.6.1  
  - ghcr.io/credativ/plutono: v7.5.22 -> v7.5.23  
  - ghcr.io/prometheus-operator/prometheus-config-reloader: v0.61.1 -> v0.67.1  
  - registry.k8s.io/dns/k8s-dns-node-cache: 1.22.20 -> 1.22.23 by @ialidzhikov [#8324]
- `[OPERATOR]` The following images are updated:  
  - `registry.k8s.io/kube-state-metrics/kube-state-metrics`: `v2.5.0` -> `v2.8.2` by @gardener-ci-robot [#8391]
- `[OPERATOR]` `gardener-operator` now takes over management of `plutono`. by @acumino [#8301]
- `[OPERATOR]` `kubectl proxy` now works as expected in the local development setup in conjunction with highly available vpn by @ScheererJ [#8370]
- `[DEPENDENCY]` Backupbucket/backupentry controllers: watch secret metadata only by @MartinWeindel [#8348]
- `[DEVELOPER]` Test-machinery integration tests are now using upstream K8s e2e test images such as `registry.k8s.io/e2e-test-images/busybox`, `registry.k8s.io/e2e-test-images/agnhost` instead Gardener images such as `eu.gcr.io/gardener-project/3rd/busybox`, `eu.gcr.io/gardener-project/3rd/alpine` and others. by @ialidzhikov [#8341]
# [gardener/etcd-druid]

## 🏃 Others

- `[OPERATOR]` Upgrade gardener/gardener from `1.65.0` to `1.76.0` by @acumino [gardener/etcd-druid#657]
- `[OPERATOR]` All default images are now present in `images.yaml` by @aaronfern [gardener/etcd-druid#673]
# [gardener/dependency-watchdog]

## 🏃 Others

- `[OPERATOR]` Bump g/g version to remove stale client-go dependency by @rishabh-11 [gardener/dependency-watchdog#92]
# [gardener/hvpa-controller]

## 🏃 Others

- `[OPERATOR]` Updated go to 1.20.7 by @voelzmo [gardener/hvpa-controller#126]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.78.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.78.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.78.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.78.0`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.78.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.78.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.78.0`

</details>
