---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update dashboard to <code>1.83.3</code></b></summary>

# [github.com/gardener/dashboard:1.83.3]

## 🐛 Bug Fixes
- `[USER]` Tooltips are now loaded on-demand instead of being eagerly pre-rendered, improving performance. by @petersutter [[#2758](https://github.com/gardener/dashboard/pull/2758)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.3`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.3</code></b></summary>

# [github.com/gardener/dashboard:1.83.3]

## 🐛 Bug Fixes
- `[USER]` Tooltips are now loaded on-demand instead of being eagerly pre-rendered, improving performance. by @petersutter [[#2758](https://github.com/gardener/dashboard/pull/2758)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.3`


</details>

<details>
<summary><b>Update provider-azure to <code>1.58.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.58.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` `provider-azure` no longer supports Shoots with Кubernetes version <= 1.29. by @marc1404 [[#1395](https://github.com/gardener/gardener-extension-provider-azure/pull/1395)]
- `[OPERATOR]` ETCD backup config in the provider-chart no longer requires an additional `backup` yaml-level to render as expected by @AndreasBurger [[#1411](https://github.com/gardener/gardener-extension-provider-azure/pull/1411)]

## 🐛 Bug Fixes
- `[OPERATOR]` Support not only the DNS-specific keys for dns provider secrets, but in addition the infrastructure secret keys. by @wpross [[#1403](https://github.com/gardener/gardener-extension-provider-azure/pull/1403)]
- `[OPERATOR]` Fixed an issue during backupBucket validation without providerConfig. by @wpross [[#1418](https://github.com/gardener/gardener-extension-provider-azure/pull/1418)]
- `[OPERATOR]` Downgrade csi-provisioner and csi-resizer for K8S <= 1.33 to make VolumeAttributesClass available for K8S <= 1.33 (v1beta1 + enabled featureGate) and K8S >= 1.34 (v1). by @wpross [[#1401](https://github.com/gardener/gardener-extension-provider-azure/pull/1401)]
- `[USER]` Fixes the RBAC permission setup when using VACs by @AndreasBurger [[#1436](https://github.com/gardener/gardener-extension-provider-azure/pull/1436)]

## 🏃 Others
- `[OPERATOR]` Adopts Gardener MachineImage `Capabilities` and introduces `CapabilityFlavors` to the `providerConfig`. by @Roncossek [[#1313](https://github.com/gardener/gardener-extension-provider-azure/pull/1313)]
- `[OPERATOR]` Fix an issue that would prevent cluster-autoscaler from considering `VolumeAttributesClasses` for scaling on shoot `< v1.34` by @kon-angelo [[#1427](https://github.com/gardener/gardener-extension-provider-azure/pull/1427)]
- `[OPERATOR]` Improves VNet configuration validation and documentation. by @hebelsan [[#1406](https://github.com/gardener/gardener-extension-provider-azure/pull/1406)]
- `[OPERATOR]` Extension-provider logging config can now be changed via helm-values by @AndreasBurger [[#1411](https://github.com/gardener/gardener-extension-provider-azure/pull/1411)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @GuezelS [[#1391](https://github.com/gardener/gardener-extension-provider-azure/pull/1391)]
- `[OPERATOR]` Set --strict-topology for the external provisioner of the CSI Disk controller. by @hebelsan [[#1399](https://github.com/gardener/gardener-extension-provider-azure/pull/1399)]
- `[OPERATOR]` Fix remedy controller finalizer removal from nodes based on virtualmachine objects by @kon-angelo [[#1412](https://github.com/gardener/gardener-extension-provider-azure/pull/1412)]
- `[OPERATOR]` Fix a bug where the namespace for the discovery of the kubeconfig secret was incorrect during the remedy-controller removal. by @kon-angelo [[#1402](https://github.com/gardener/gardener-extension-provider-azure/pull/1402)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-driver-disk: v1.34.0 -> v1.34.1 (minor) by @AndreasBurger [[#1442](https://github.com/gardener/gardener-extension-provider-azure/pull/1442)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.31.11 -> v1.31.12 (patch)  
    - cloud-controller-manager: v1.32.10 -> v1.32.11 (patch)  
    - cloud-controller-manager: v1.33.5 -> v1.33.6 (patch)  
    - cloud-controller-manager: v1.33.6 -> v1.34.3 (minor)  
    - cloud-node-manager: v1.31.11 -> v1.31.12 (patch)  
    - cloud-node-manager: v1.32.10 -> v1.32.11 (patch)  
    - cloud-node-manager: v1.33.5 -> v1.33.6 (patch)  
    - cloud-node-manager: v1.33.6 -> v1.34.3 (minor)  
    - csi-driver-disk: v1.33.6 -> v1.34.0 (singleton)  
    - csi-driver-file: v1.33.3 -> v1.34.3 (singleton) by @gardener-github-actions[bot] [[#1388](https://github.com/gardener/gardener-extension-provider-azure/pull/1388)]
- `[DEPENDENCY]` Updated dependency `gardener/gardener` to `v1.134.0` ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.0)). by @marc1404 [[#1395](https://github.com/gardener/gardener-extension-provider-azure/pull/1395)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.58.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.58.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.58.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.58.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.58.0`


</details>

<details>
<summary><b>Update networking-calico to <code>1.56.0</code></b></summary>

# [github.com/gardener/gardener-extension-networking-calico:v1.56.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Multus with additional CNI plugins enabled should now also work without specifying an image vector override for the extension. by @ScheererJ [[#778](https://github.com/gardener/gardener-extension-networking-calico/pull/778)]

## 🏃 Others
- `[OPERATOR]` If `calico-node` is automatically scaled by VPA and a minimum amount of resources are specified, the daemonset reflects the specified values to not confuse cluster autoscaling components. by @ScheererJ [[#771](https://github.com/gardener/gardener-extension-networking-calico/pull/771)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.56.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.56.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.56.0`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.56.0`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.56.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.56.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.135.1</code></b></summary>

# [github.com/gardener/gardener:v1.135.1]

## 🐛 Bug Fixes
- `[USER]` gardener-apiserver: An issue in gardener-apiserver v1.135.0 causing `kubectl apply` for a Shoot to be wrongly rejected with "spec.dns.providers[0]: Required value: non-primary DNS providers must specify `type` and `credentialsRef`" in some cases is now fixed. by @ialidzhikov [[#13921](https://github.com/gardener/gardener/pull/13921)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.2` to `1.83.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.3) by @gardener-ci-robot [[#13925](https://github.com/gardener/gardener/pull/13925)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.135.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.135.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.135.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.135.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.135.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.135.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.135.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.135.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.135.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.135.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.135.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.135.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.135.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.135.1</code></b></summary>

# [github.com/gardener/gardener:v1.135.1]

## 🐛 Bug Fixes
- `[USER]` gardener-apiserver: An issue in gardener-apiserver v1.135.0 causing `kubectl apply` for a Shoot to be wrongly rejected with "spec.dns.providers[0]: Required value: non-primary DNS providers must specify `type` and `credentialsRef`" in some cases is now fixed. by @ialidzhikov [[#13921](https://github.com/gardener/gardener/pull/13921)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.2` to `1.83.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.3) by @gardener-ci-robot [[#13925](https://github.com/gardener/gardener/pull/13925)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.135.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.135.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.135.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.135.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.135.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.135.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.135.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.135.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.135.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.135.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.135.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.135.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.135.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.135.1</code></b></summary>

# [github.com/gardener/gardener:v1.135.1]

## 🐛 Bug Fixes
- `[USER]` gardener-apiserver: An issue in gardener-apiserver v1.135.0 causing `kubectl apply` for a Shoot to be wrongly rejected with "spec.dns.providers[0]: Required value: non-primary DNS providers must specify `type` and `credentialsRef`" in some cases is now fixed. by @ialidzhikov [[#13921](https://github.com/gardener/gardener/pull/13921)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.2` to `1.83.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.3) by @gardener-ci-robot [[#13925](https://github.com/gardener/gardener/pull/13925)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.135.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.135.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.135.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.135.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.135.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.135.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.135.1`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.135.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.135.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.135.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.135.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.135.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.135.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.35.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.35.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed an issue where gateway controllers could remain disabled if Kubernetes or Istio Gateway CRDs were added during dns-controller-manager startup. The manager now detects this condition and enforces a restart to ensure gateway resources are properly handled. by @MartinWeindel [[#764](https://github.com/gardener/external-dns-management/pull/764)]
- `[USER]` [Istio Gateway as source]: Handle wildcard value in field `spec.hosts` for virtual services correctly. by @MartinWeindel [[#751](https://github.com/gardener/external-dns-management/pull/751)]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#752](https://github.com/gardener/external-dns-management/pull/752)]
- `[OPERATOR]` Update aws sdk to enable new regions by @kon-angelo [[#757](https://github.com/gardener/external-dns-management/pull/757)]
- `[DEVELOPER]` Reintroduce typed client for stakeholders, which has been removed by wrong assumptions in release `v0.34.0`. by @MartinWeindel [[#750](https://github.com/gardener/external-dns-management/pull/750)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.35.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.35.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.35.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.58.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.58.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed an issue that prevented featuregates from being rendered correctly by @AndreasBurger [[#1445](https://github.com/gardener/gardener-extension-provider-azure/pull/1445)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.58.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.58.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.58.1`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.58.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.58.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.77.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.77.0]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#627](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/627)]
- `[USER]` Support syncing `credentialsRef` in the shoot mutator webhook. by @MartinWeindel [[#638](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/638)]

# [github.com/gardener/external-dns-management:v0.35.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed an issue where gateway controllers could remain disabled if Kubernetes or Istio Gateway CRDs were added during dns-controller-manager startup. The manager now detects this condition and enforces a restart to ensure gateway resources are properly handled. by @MartinWeindel [[#764](https://github.com/gardener/external-dns-management/pull/764)]
- `[USER]` [Istio Gateway as source]: Handle wildcard value in field `spec.hosts` for virtual services correctly. by @MartinWeindel [[#751](https://github.com/gardener/external-dns-management/pull/751)]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#752](https://github.com/gardener/external-dns-management/pull/752)]
- `[OPERATOR]` Update aws sdk to enable new regions by @kon-angelo [[#757](https://github.com/gardener/external-dns-management/pull/757)]
- `[DEVELOPER]` Reintroduce typed client for stakeholders, which has been removed by wrong assumptions in release `v0.34.0`. by @MartinWeindel [[#750](https://github.com/gardener/external-dns-management/pull/750)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.77.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.77.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.77.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.77.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.77.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.49.0</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.49.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` `provider-gcp` no longer supports Shoots with Кubernetes version <= 1.29. by @marc1404 [[#1259](https://github.com/gardener/gardener-extension-provider-gcp/pull/1259)]
- `[OPERATOR]` ETCD backup config in the provider-chart no longer requires an additional `backup` yaml-level to render as expected by @AndreasBurger [[#1270](https://github.com/gardener/gardener-extension-provider-gcp/pull/1270)]

## 📰 Noteworthy
- `[OPERATOR]` The feature gate DisableGardenerServiceAccountCreation is now marked as deprecated and will be removed in v1.52 by @hebelsan [[#1269](https://github.com/gardener/gardener-extension-provider-gcp/pull/1269)]

## ✨ New Features
- `[OPERATOR]` It is possible to enable profiling for the extension by setting `.Values.config.profiling`. by @dimityrmirchev [[#1007](https://github.com/gardener/gardener-extension-provider-gcp/pull/1007)]
- `[USER]` Update `VolumeAttributesClass` enablement for clusters <= `v1.34`. If annotated the kube-apiserver, kube-scheduler, kube-controller-manager will get the VAC feature gate enabled automatically. by @kon-angelo [[#1274](https://github.com/gardener/gardener-extension-provider-gcp/pull/1274)]

## 🐛 Bug Fixes
- `[OPERATOR]` Downgrade csi-provisioner and csi-resizer for K8S <= 1.33 to make VolumeAttributesClass available for K8S <= 1.33 (v1beta1 + enabled featureGate) and K8S >= 1.34 (v1). by @wpross [[#1260](https://github.com/gardener/gardener-extension-provider-gcp/pull/1260)]
- `[OPERATOR]` Fix NPE if `.spec.targetSystem.providerConfig.credentialsConfig` section in a `WorkloadIdentity` resource is not set. by @MartinWeindel [[#1258](https://github.com/gardener/gardener-extension-provider-gcp/pull/1258)]
- `[OPERATOR]` Fixed issue when validating a backupBucket without providerConfig. by @wpross [[#1279](https://github.com/gardener/gardener-extension-provider-gcp/pull/1279)]

## 🏃 Others
- `[OPERATOR]` Add strict topology flag to the external provisioner of the block CSI controller deployment. by @hebelsan [[#1264](https://github.com/gardener/gardener-extension-provider-gcp/pull/1264)]
- `[OPERATOR]` Another fix of path to log file in build-job by @heldkat [[#1307](https://github.com/gardener/gardener-extension-provider-gcp/pull/1307)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#1305](https://github.com/gardener/gardener-extension-provider-gcp/pull/1305)]
- `[OPERATOR]` Add input validation for DNS provider secrets referenced in the shoot spec. by @wpross [[#1257](https://github.com/gardener/gardener-extension-provider-gcp/pull/1257)]
- `[OPERATOR]` Fix infrastructure status to correctly use spec IP families during single-stack to dual-stack migration. by @axel7born [[#1255](https://github.com/gardener/gardener-extension-provider-gcp/pull/1255)]
- `[OPERATOR]` Extension-provider logging config can now be changed via helm-values by @AndreasBurger [[#1270](https://github.com/gardener/gardener-extension-provider-gcp/pull/1270)]
- `[USER]` Adds support for GCP Storage Pools by @hebelsan [[#1046](https://github.com/gardener/gardener-extension-provider-gcp/pull/1046)]
- `[DEVELOPER]` Adds DNS Record integration tests by @matthias-horne [[#1009](https://github.com/gardener/gardener-extension-provider-gcp/pull/1009)]
- `[DEPENDENCY]` Updated dependency `gardener/gardener` to `v1.134.0` ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.0)). by @marc1404 [[#1259](https://github.com/gardener/gardener-extension-provider-gcp/pull/1259)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v34.1.0 -> v34.2.0 (minor) by @gardener-github-actions[bot] [[#1249](https://github.com/gardener/gardener-extension-provider-gcp/pull/1249)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.49.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.49.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.49.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.49.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.49.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.4</code></b></summary>

# [github.com/gardener/dashboard:1.83.4]

## 🐛 Bug Fixes
- `[USER]` Project Menu Improvements  
  - Fixed performance issues with the project selection dropdown menu  
  - Fixed scrolling by optimizing lazy loading with a virtual scroller  
  - Optimized the project menu layout by increasing the list size, creating cleaner project tiles, and aligning heights by @grolu [[#2768](https://github.com/gardener/dashboard/pull/2768)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.4`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.4</code></b></summary>

# [github.com/gardener/dashboard:1.83.4]

## 🐛 Bug Fixes
- `[USER]` Project Menu Improvements  
  - Fixed performance issues with the project selection dropdown menu  
  - Fixed scrolling by optimizing lazy loading with a virtual scroller  
  - Optimized the project menu layout by increasing the list size, creating cleaner project tiles, and aligning heights by @grolu [[#2768](https://github.com/gardener/dashboard/pull/2768)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.4`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.5</code></b></summary>

# [github.com/gardener/dashboard:1.83.5]

## 🐛 Bug Fixes
- `[USER]` Major performance improvements on pages displaying large numbers of shoots, by updating Vuetify to the latest version by @petersutter [[#2771](https://github.com/gardener/dashboard/pull/2771)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.5`


</details>

<details>
<summary><b>Update dashboard to <code>1.83.5</code></b></summary>

# [github.com/gardener/dashboard:1.83.5]

## 🐛 Bug Fixes
- `[USER]` Major performance improvements on pages displaying large numbers of shoots, by updating Vuetify to the latest version by @petersutter [[#2771](https://github.com/gardener/dashboard/pull/2771)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.5`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.49.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.49.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Loosen secret validation to allow not only for user-generated service accounts in IAM, but also for Google-managed service accounts. by @wpross [[#1311](https://github.com/gardener/gardener-extension-provider-gcp/pull/1311)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.49.1`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.49.1`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.49.1`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.49.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.49.1`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.24.0</code></b></summary>

## New Features

* feat: OCI image support by @craigvanaman in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/206
* Propagate labels from seed secrets to shoot secrets and update tests by @eldr0n in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/217
* Support configuring components when installing flux by @maboehm in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/211

## What's Changed
* 🤖 Update module github.com/ironcore-dev/vgopath to v0.1.9 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/201
* 🤖 Update module github.com/gardener/gardener to v1.130.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/199
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.27.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/202
* 🤖 Update module sigs.k8s.io/controller-runtime to v0.22.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/196
* 🤖 Update module github.com/fluxcd/pkg/apis/meta to v1.22.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/197
* 🤖 Update module github.com/gardener/gardener to v1.131.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/204
* 🤖 Update module golang.org/x/tools to v0.39.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/207
* 🤖 Update module github.com/gardener/gardener to v1.132.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/208
* 🤖 Update module github.com/fluxcd/pkg/apis/meta to v1.23.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/209
* 🤖 Update actions/checkout action to v6 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/210
* 🤖 Update module github.com/spf13/cobra to v1.10.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/213
* 🤖 Update module golang.org/x/tools to v0.40.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/216
* 🤖 Update module github.com/onsi/gomega to v1.39.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/221
* 🤖 Update dependency ko-build/ko to v0.18.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/218
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.27.5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/214
* 🤖 Update k8s.io/utils digest to 914a6e7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/219
* 🤖 Update module github.com/fluxcd/pkg/apis/meta to v1.24.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/220
* 🤖 Update fluxcd (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/195
* 🤖 Update module github.com/gardener/gardener to v1.134.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/212
* 🤖 Update module golang.org/x/tools to v0.41.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/222
* 🤖 Update module sigs.k8s.io/controller-runtime to v0.22.5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/203
* 🤖 Update module github.com/fluxcd/pkg/apis/meta to v1.25.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/224
* 🤖 Update module github.com/gardener/gardener to v1.134.3 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/225
* 🤖 Update module github.com/gardener/gardener to v1.135.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/226
* 🤖 Update module github.com/ironcore-dev/vgopath to v0.1.10 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/223
* 🤖 Update module github.com/gardener/gardener to v1.135.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/229
* Add permissions to watch namespaces by @maboehm in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/230

## New Contributors
* @eldr0n made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/217
* @craigvanaman made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/206

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.23.0...v0.24.0

</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.36.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-oidc-service:v0.36.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` References to the health check controller and its configuration have been removed, as they are no longer needed. Additionally, the unused OIDC service configuration API and its related files have been removed. by @theoddora [[#404](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/404)]

## ✨ New Features
- `[USER]` The OIDC service is enabled to work with the garden control plane by supporting the garden extension class alongside the existing shoot class. by @theoddora [[#412](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/412)]

## 🏃 Others
- `[OPERATOR]` The extension is now built using go version 1.25.7. by @dependabot[bot] [[#421](https://github.com/gardener/gardener-extension-shoot-oidc-service/pull/421)]

# [github.com/gardener/oidc-webhook-authenticator:v0.41.0]

## 🏃 Others
- `[OPERATOR]` OWA is now built using go version 1.25.6. by @dependabot[bot] [[#215](https://github.com/gardener/oidc-webhook-authenticator/pull/215)]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.36.0`
## Container (OCI) Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.36.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.49.2</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.49.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Allow private key to end without a newline character. by @wpross [[#1315](https://github.com/gardener/gardener-extension-provider-gcp/pull/1315)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.49.2`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.49.2`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.49.2`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.49.2`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.49.2`


</details>

<details>
<summary><b>Update provider-aws to <code>1.67.3</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.67.3]

## 🏃 Others
- `[OPERATOR]` Allow to use one secret as an infrastructure secret as well as a dns secret. by @wpross [[#1691](https://github.com/gardener/gardener-extension-provider-aws/pull/1691)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.67.3`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.67.3`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.67.3`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.67.3`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.67.3`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.49.3</code></b></summary>

# [github.com/gardener/gardener-extension-provider-gcp:v1.49.3]

## 🏃 Others
- `[OPERATOR]` The following image is updated:  
  - registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver: v1.22.1 -> v1.23.3 by @ialidzhikov [[#1321](https://github.com/gardener/gardener-extension-provider-gcp/pull/1321)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.49.3`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.49.3`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.49.3`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.49.3`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.49.3`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.35.1</code></b></summary>

# [github.com/gardener/external-dns-management:v0.35.1]

## 🏃 Others
- `[OPERATOR]` Fix race condition if only one of two expected gateway CRDs (either from group  `gateway.networking.k8s.io` or `networking.istio.io`) is deployed causing endless restarts. (#790) by @Martin Weindel [[gardener/external-dns-management@30134a717b07f5d2ec7c706fe2b3d938be564cde](https://github.com/gardener/external-dns-management/commit/30134a717b07f5d2ec7c706fe2b3d938be564cde)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.35.1`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.35.1`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.35.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.77.1</code></b></summary>

# [github.com/gardener/external-dns-management:v0.35.1]

## 🏃 Others
- `[OPERATOR]` Fix race condition if only one of two expected gateway CRDs (either from group  `gateway.networking.k8s.io` or `networking.istio.io`) is deployed causing endless restarts. (#790) by @Martin Weindel [[gardener/external-dns-management@30134a717b07f5d2ec7c706fe2b3d938be564cde](https://github.com/gardener/external-dns-management/commit/30134a717b07f5d2ec7c706fe2b3d938be564cde)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.77.1`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.77.1`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.77.1`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.77.1`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.77.1`


</details>
