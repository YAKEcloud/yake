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

<details>
<summary><b>Update gardener-controlplane to <code>1.136.0</code></b></summary>

# [github.com/gardener/gardener:v1.136.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The Garden's `.spec.virtualCluster.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new Garden creations and for field value updates. Already existing Gardens which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[OPERATOR]` The ManagedSeedSet's `.spec.shootTemplate.spec.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new ManagedSeedSet creations and for field value updates. Already existing ManagedSeedSets which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[USER]` Shoot addons (`.spec.addons`) have been deprecated and will be forbidden starting with Kubernetes `1.35`. Their usage was already discouraged for productive clusters, as they now only include unmaintained components (Kubernetes dashboard and Ingress NGINX Controller). by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The shoot field `.spec.kubernetes.kubeScheduler.kubeMaxPDVols` has been deprecated and will be forbidden starting with Kubernetes `1.35`. The maximum number of attachable volumes is maintained by the respective CSI plugin. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The Shoot's `.spec.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new Shoots creations and for field value updates. Already existing Shoots which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[USER]` Downgrading the machine image version (`.spec.provider.workers[].machine.image.version`) is not allowed for worker pools using the `AutoInPlaceUpdate` or `ManualInPlaceUpdate` strategy, as Gardener does not support machine image downgrades for any operating system currently.  For `AutoRollingUpdate`, the entire node is replaced, so this limitation does not apply. by @shafeeqes [[#13828](https://github.com/gardener/gardener/pull/13828)]
- `[USER]` The shoot field `.spec.kubernetes.kubeAPIServer.watchCacheSizes.default` has been deprecated and will be forbidden starting with Kubernetes `1.35`. Watch cache sizes are automatically sized by Kubernetes. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` Setting `.spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` in the `Shoot` spec is forbidden for clusters with Kubernetes version >= 1.35. Users that enable anonymous authentication should use Structured Authentication with [anonymous authenticator](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_access.md#configuring-anonymous-authentication) instead. by @dimityrmirchev [[#13707](https://github.com/gardener/gardener/pull/13707)]
- `[DEVELOPER]` The healthcheck controller now supports the `garden` extension class. Health check client interfaces have been renamed from `SeedClient/ShootClient` to `SourceClient/TargetClient` for better abstraction across extension classes. The `PreCheckFunc` method signature has been changed to accept `any` for cluster or garden object. by @theoddora [[#13789](https://github.com/gardener/gardener/pull/13789)]

## 📰 Noteworthy
- `[OPERATOR]` New health and readiness checks have been added to vpn-seed-server to improve availability and reduce log clutter. by @domdom82 [[#13802](https://github.com/gardener/gardener/pull/13802)]
- `[OPERATOR]` The `Shoot` spec has a new field `spec.kubernetes.kubeAPIServer.encryptionConfig.provider.type`, which currently can only be set to `aescbc`. by @AleksandarSavchev [[#13732](https://github.com/gardener/gardener/pull/13732)]
- `[OPERATOR]` For Kubernetes virtual clusters `>= 1.33`, we now deploy both `Endpoints` and `EndpointSlice` resources for the APIService connection between virtual-garden-kube-apiserver and gardener-apiserver. by @acumino [[#14041](https://github.com/gardener/gardener/pull/14041)]
- `[OPERATOR]` The `Garden` spec has 2 new fields `spec.virtualCluster.kubernetes.kubeAPIServer.encryptionConfig.provider.type`and `spec.virtualCluster.gardener.gardenerAPIServer.encryptionConfig.provider.type`, which currently can only be set to `aescbc`. by @AleksandarSavchev [[#13732](https://github.com/gardener/gardener/pull/13732)]
- `[OPERATOR]` The `OpenTelemetryCollector` feature gate has been promoted to Beta and is enabled by default. by @rrhubenov [[#13851](https://github.com/gardener/gardener/pull/13851)]
- `[USER]` The field `.spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` in the `Shoot` spec will be automatically set to `nil` if users set it `false` as these two are equivalent across the codebase. The field is deprecated and users that enable anonymous authentication should migrate to Structured Authentication with [anonymous authenticator](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_access.md#configuring-anonymous-authentication) instead. by @dimityrmirchev [[#13707](https://github.com/gardener/gardener/pull/13707)]
- `[USER]` It is now explicitly supported to use short worker OS image versions in the `CloudProfile`, which are not defaulted when creating or updating the `Shoot` spec. by @Gerrit91 [[#13785](https://github.com/gardener/gardener/pull/13785)]
- `[USER]` The shoot deletion flow has been enhanced to tolerate leftover resources in the following situations:  
  - Objects that belong to namespaces which have already been deleted (finalized).  
  - Objects that were created after the cleanup process began for the first time, plus the finalize grace period. by @timuthy [[#13918](https://github.com/gardener/gardener/pull/13918)]

## ✨ New Features
- `[OPERATOR]` Gardener now supports pulling Helm charts from OCI registries that use custom or self-signed TLS certificates. This is particularly useful for air-gapped environments or when using private container registries with custom certificate authorities.  
    
  A new `caBundleSecretRef` field has been added to the `ociRepository` configuration in the following resources:  
  - `core.gardener.cloud/v1.ControllerDeployment`: `.helm.ociRepository.caBundleSecretRef`  
  - `core.gardener.cloud/v1beta1.ControllerDeployment`: `.helm.ociRepository.caBundleSecretRef`  
  - `operator.gardener.cloud/v1alpha1.Extension`: `.spec.deployment.{admission.{runtimeCluster,virtualCluster},extension}.helm.ociRepository.caBundleSecretRef`  
    
  The field references a secret in the `garden` namespace containing a PEM-encoded CA certificate bundle (data key: `bundle.crt`). For gardenlet usage, the secret must be labeled with `gardener.cloud/role=oci-ca-bundle`. by @shafeeqes [[#13868](https://github.com/gardener/gardener/pull/13868)]
- `[OPERATOR]` The `gardener-controller-manager` now increases all `ResourceQuota`s in project namespaces when a Gardener update leads to Gardener creating more resources in them. This was introduced to prevent failing Shoot reconciliations when `ResourceQuota`s of projects are near their limit. by @tobschli [[#13850](https://github.com/gardener/gardener/pull/13850)]
- `[OPERATOR]` Introduce fluent-bit-plugin v1 with OTLP support behind the OpenTelemetryCollector feature gate and adjust fluent-bit resources to select OTLP. by @nickytd [[#13961](https://github.com/gardener/gardener/pull/13961)]
- `[OPERATOR]` Introduced the Victoria Operator as a component to Seed & Garden Clusters. by @rrhubenov [[#13708](https://github.com/gardener/gardener/pull/13708)]
- `[OPERATOR]` When configuring a custom CNI path for containerd, GNA will now - in addition to checking the version of the config.toml config file - query containerd for its version and use the `bin_dirs` path with a string array if the config file version is 3 and containerd >= 2.2 is detected. by @MrBatschner [[#13826](https://github.com/gardener/gardener/pull/13826)]
- `[OPERATOR]` An instance of `OpenTelemetry Collector` is now deployed to the `garden` namespace of both `Garden` and `Seed` clusters. by @rrhubenov [[#13481](https://github.com/gardener/gardener/pull/13481)]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.35. To allow creation/update of 1.35 clusters you will have to update the version of your provider extension(s) to a version that supports 1.35 as well. Please consult the respective releases and notes in the provider extension's repository. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The `Shoot` field `.spec.seedSelector` can now be adjusted for already scheduled shoots, as long as the new selector still selects the assigned seed. by @timuthy [[#13920](https://github.com/gardener/gardener/pull/13920)]
- `[DEVELOPER]` gardenctl in local setup by @hown3d [[#13842](https://github.com/gardener/gardener/pull/13842)]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version `1.35`. Extension developers have to prepare individual extensions as well to work with `1.35`. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[DEVELOPER]` Environment variable `MAX_PARALLEL_WORKERS` can now be used to control the number of parallel workers that are spawned during the call to the `make generate` target. by @rrhubenov [[#13903](https://github.com/gardener/gardener/pull/13903)]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing unwanted reconciliations of Secrets and other objects due to cache resyncs in the project activity reconciler is now fixed. by @shafeeqes [[#13945](https://github.com/gardener/gardener/pull/13945)]
- `[OPERATOR]` This PR fixes webhook certificate reconciliation to properly apply changes in webhook configurations. by @acumino [[#13971](https://github.com/gardener/gardener/pull/13971)]
- `[OPERATOR]` Fixes a bug when feature gate UseUnifiedHTTPProxyPort was used in conjunction with a seed load balancer using proxy protocol. by @maboehm [[#13832](https://github.com/gardener/gardener/pull/13832)]
- `[OPERATOR]` Fixes a bug in the `UsesUnifiedHTTPProxyPort` constraint, when feature gate `UseUnifiedHTTPProxyPort` was used and then disabled again by @maboehm [[#13844](https://github.com/gardener/gardener/pull/13844)]
- `[USER]` gardener-apiserver: An issue in gardener-apiserver v1.135.0 causing `kubectl apply` for a Shoot to be wrongly rejected with "spec.dns.providers[0]: Required value: non-primary DNS providers must specify `type` and `credentialsRef`" in some cases is now fixed. by @ialidzhikov [[#13861](https://github.com/gardener/gardener/pull/13861)]
- `[DEVELOPER]` Enable MCM (cluster-autoscaler) to scale `provider-local` `Node`s. by @LucaBernstein [[#13804](https://github.com/gardener/gardener/pull/13804)]

## 🏃 Others
- `[OPERATOR]` Audit policy configmap for the gardener API server referenced in the garden resource is now validated. by @acumino [[#13478](https://github.com/gardener/gardener/pull/13478)]
- `[OPERATOR]` Upon gardenlet start all existing opentelemetry collector pipelines in shoot control planes will be migrated to the expected content. by @nickytd [[#14054](https://github.com/gardener/gardener/pull/14054)]
- `[OPERATOR]` The mutating `ShootDNS` admission plugin is now also a validating one. Validations which are executed by this admission plugin during the mutation phase are now moved to the validating `ShootDNS` admission plugin. by @ialidzhikov [[#13910](https://github.com/gardener/gardener/pull/13910)]
- `[OPERATOR]` Add Prometheus health check rule in the cache Prometheus to ensure the presence of `kubelet` volume stats metrics. by @vicwicker [[#13855](https://github.com/gardener/gardener/pull/13855)]
- `[OPERATOR]` Federate `shoot:node_operating_system:sum` time series from the garden to the longterm Prometheus. by @vicwicker [[#13805](https://github.com/gardener/gardener/pull/13805)]
- `[OPERATOR]` Fix flaky test for latest MCM release v0.61.x by @r4mek [[#13916](https://github.com/gardener/gardener/pull/13916)]
- `[OPERATOR]` The majority of the VerticalPodAutoscaler resources managed by Gardener are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @voelzmo [[#13819](https://github.com/gardener/gardener/pull/13819)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.2` to `v0.61.1`. [Release Notes](https://github.com/gardener/machine-controller-manager/releases/tag/v0.61.1) by @aaronfern [[#13865](https://github.com/gardener/gardener/pull/13865)]
- `[OPERATOR]` The existing `TooManyEtcdSnapshotCompactionJobsFailing` alert has been renamed to `EtcdSnapshotCompactionJobsFailingForSeed` and its expression has been fixed to correctly measure the fraction of namespaces with failures.  
  Two new per-namespace alerts (`EtcdSnapshotCompactionJobsFailingForNamespace` and `EtcdFullSnapshotsFailingForNamespace`) have been added to help operators identify specific shoot clusters where compaction jobs or full snapshots are failing above the 10% threshold. by @anveshreddy18 [[#14053](https://github.com/gardener/gardener/pull/14053)]
- `[OPERATOR]` Use Kubernetes 1.34.3 in the local setup. by @vicwicker [[#13855](https://github.com/gardener/gardener/pull/13855)]
- `[USER]` Allow `NamespacedCloudProfile.spec.limits` to be decreased. by @LucaBernstein [[#13724](https://github.com/gardener/gardener/pull/13724)]
- `[DEVELOPER]` The component checklist rule for **Define a `VerticalPodAutoscaler`** is enhanced with the convention that a VPA should define an explicit container policy for all containers that need to be auto-scaled and should have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. For more details, refer to the[Component Checklist](https://github.com/gardener/gardener/blob/v1.136.0/docs/development/component-checklist.md). by @voelzmo [[#13819](https://github.com/gardener/gardener/pull/13819)]
- `[DEVELOPER]` The TM tests are now adapted to run against Kubernetes 1.35. by @ialidzhikov [[#13995](https://github.com/gardener/gardener/pull/13995)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.34.0` to `v0.35.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.35.0)  
  - `github.com/gardener/etcd-druid/api` from `v0.34.0` to `v0.35.0`. by @renormalize [[#13950](https://github.com/gardener/gardener/pull/13950)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.3` to `1.83.4`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.4) by @gardener-ci-robot [[#13970](https://github.com/gardener/gardener/pull/13970)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.14.1` to `v1.14.2`. by @gardener-ci-robot [[#13880](https://github.com/gardener/gardener/pull/13880)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.4` to `1.83.5`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.5) by @gardener-ci-robot [[#13983](https://github.com/gardener/gardener/pull/13983)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/cpa/cluster-proportional-autoscaler` from `v1.9.0` to `v1.10.3`. by @gardener-ci-robot [[#13905](https://github.com/gardener/gardener/pull/13905)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.5` to `1.27.6`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.5` to `1.27.6`.   
  - `istio.io/api` from `v1.27.5` to `v1.27.6`. by @gardener-ci-robot [[#13986](https://github.com/gardener/gardener/pull/13986)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.2` to `1.83.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.3) by @gardener-ci-robot [[#13917](https://github.com/gardener/gardener/pull/13917)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/terminal-controller-manager` from `v0.34.0` to `v0.35.0`. [Release Notes](https://redirect.github.com/gardener/terminal-controller-manager/releases/tag/v0.35.0) by @gardener-ci-robot [[#13953](https://github.com/gardener/gardener/pull/13953)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.46.1` to `0.46.2`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.46.2) by @gardener-ci-robot [[#13959](https://github.com/gardener/gardener/pull/13959)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.30.1` to `v0.31.0`. by @gardener-ci-robot [[#13931](https://github.com/gardener/gardener/pull/13931)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/metrics-server/metrics-server` from `v0.8.0` to `v0.8.1`. by @gardener-ci-robot [[#13912](https://github.com/gardener/gardener/pull/13912)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.14.2` to `v1.14.3`. by @gardener-ci-robot [[#13940](https://github.com/gardener/gardener/pull/13940)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-conntrack` from `3.23.2` to `3.23.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.23.3) by @gardener-ci-robot [[#13948](https://github.com/gardener/gardener/pull/13948)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.4.0` to `2.5.0`. by @gardener-ci-robot [[#13839](https://github.com/gardener/gardener/pull/13839)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.136.0</code></b></summary>

# [github.com/gardener/gardener:v1.136.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The Garden's `.spec.virtualCluster.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new Garden creations and for field value updates. Already existing Gardens which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[OPERATOR]` The ManagedSeedSet's `.spec.shootTemplate.spec.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new ManagedSeedSet creations and for field value updates. Already existing ManagedSeedSets which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[USER]` Shoot addons (`.spec.addons`) have been deprecated and will be forbidden starting with Kubernetes `1.35`. Their usage was already discouraged for productive clusters, as they now only include unmaintained components (Kubernetes dashboard and Ingress NGINX Controller). by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The shoot field `.spec.kubernetes.kubeScheduler.kubeMaxPDVols` has been deprecated and will be forbidden starting with Kubernetes `1.35`. The maximum number of attachable volumes is maintained by the respective CSI plugin. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The Shoot's `.spec.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new Shoots creations and for field value updates. Already existing Shoots which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[USER]` Downgrading the machine image version (`.spec.provider.workers[].machine.image.version`) is not allowed for worker pools using the `AutoInPlaceUpdate` or `ManualInPlaceUpdate` strategy, as Gardener does not support machine image downgrades for any operating system currently.  For `AutoRollingUpdate`, the entire node is replaced, so this limitation does not apply. by @shafeeqes [[#13828](https://github.com/gardener/gardener/pull/13828)]
- `[USER]` The shoot field `.spec.kubernetes.kubeAPIServer.watchCacheSizes.default` has been deprecated and will be forbidden starting with Kubernetes `1.35`. Watch cache sizes are automatically sized by Kubernetes. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` Setting `.spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` in the `Shoot` spec is forbidden for clusters with Kubernetes version >= 1.35. Users that enable anonymous authentication should use Structured Authentication with [anonymous authenticator](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_access.md#configuring-anonymous-authentication) instead. by @dimityrmirchev [[#13707](https://github.com/gardener/gardener/pull/13707)]
- `[DEVELOPER]` The healthcheck controller now supports the `garden` extension class. Health check client interfaces have been renamed from `SeedClient/ShootClient` to `SourceClient/TargetClient` for better abstraction across extension classes. The `PreCheckFunc` method signature has been changed to accept `any` for cluster or garden object. by @theoddora [[#13789](https://github.com/gardener/gardener/pull/13789)]

## 📰 Noteworthy
- `[OPERATOR]` New health and readiness checks have been added to vpn-seed-server to improve availability and reduce log clutter. by @domdom82 [[#13802](https://github.com/gardener/gardener/pull/13802)]
- `[OPERATOR]` The `Shoot` spec has a new field `spec.kubernetes.kubeAPIServer.encryptionConfig.provider.type`, which currently can only be set to `aescbc`. by @AleksandarSavchev [[#13732](https://github.com/gardener/gardener/pull/13732)]
- `[OPERATOR]` For Kubernetes virtual clusters `>= 1.33`, we now deploy both `Endpoints` and `EndpointSlice` resources for the APIService connection between virtual-garden-kube-apiserver and gardener-apiserver. by @acumino [[#14041](https://github.com/gardener/gardener/pull/14041)]
- `[OPERATOR]` The `Garden` spec has 2 new fields `spec.virtualCluster.kubernetes.kubeAPIServer.encryptionConfig.provider.type`and `spec.virtualCluster.gardener.gardenerAPIServer.encryptionConfig.provider.type`, which currently can only be set to `aescbc`. by @AleksandarSavchev [[#13732](https://github.com/gardener/gardener/pull/13732)]
- `[OPERATOR]` The `OpenTelemetryCollector` feature gate has been promoted to Beta and is enabled by default. by @rrhubenov [[#13851](https://github.com/gardener/gardener/pull/13851)]
- `[USER]` The field `.spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` in the `Shoot` spec will be automatically set to `nil` if users set it `false` as these two are equivalent across the codebase. The field is deprecated and users that enable anonymous authentication should migrate to Structured Authentication with [anonymous authenticator](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_access.md#configuring-anonymous-authentication) instead. by @dimityrmirchev [[#13707](https://github.com/gardener/gardener/pull/13707)]
- `[USER]` It is now explicitly supported to use short worker OS image versions in the `CloudProfile`, which are not defaulted when creating or updating the `Shoot` spec. by @Gerrit91 [[#13785](https://github.com/gardener/gardener/pull/13785)]
- `[USER]` The shoot deletion flow has been enhanced to tolerate leftover resources in the following situations:  
  - Objects that belong to namespaces which have already been deleted (finalized).  
  - Objects that were created after the cleanup process began for the first time, plus the finalize grace period. by @timuthy [[#13918](https://github.com/gardener/gardener/pull/13918)]

## ✨ New Features
- `[OPERATOR]` Gardener now supports pulling Helm charts from OCI registries that use custom or self-signed TLS certificates. This is particularly useful for air-gapped environments or when using private container registries with custom certificate authorities.  
    
  A new `caBundleSecretRef` field has been added to the `ociRepository` configuration in the following resources:  
  - `core.gardener.cloud/v1.ControllerDeployment`: `.helm.ociRepository.caBundleSecretRef`  
  - `core.gardener.cloud/v1beta1.ControllerDeployment`: `.helm.ociRepository.caBundleSecretRef`  
  - `operator.gardener.cloud/v1alpha1.Extension`: `.spec.deployment.{admission.{runtimeCluster,virtualCluster},extension}.helm.ociRepository.caBundleSecretRef`  
    
  The field references a secret in the `garden` namespace containing a PEM-encoded CA certificate bundle (data key: `bundle.crt`). For gardenlet usage, the secret must be labeled with `gardener.cloud/role=oci-ca-bundle`. by @shafeeqes [[#13868](https://github.com/gardener/gardener/pull/13868)]
- `[OPERATOR]` The `gardener-controller-manager` now increases all `ResourceQuota`s in project namespaces when a Gardener update leads to Gardener creating more resources in them. This was introduced to prevent failing Shoot reconciliations when `ResourceQuota`s of projects are near their limit. by @tobschli [[#13850](https://github.com/gardener/gardener/pull/13850)]
- `[OPERATOR]` Introduce fluent-bit-plugin v1 with OTLP support behind the OpenTelemetryCollector feature gate and adjust fluent-bit resources to select OTLP. by @nickytd [[#13961](https://github.com/gardener/gardener/pull/13961)]
- `[OPERATOR]` Introduced the Victoria Operator as a component to Seed & Garden Clusters. by @rrhubenov [[#13708](https://github.com/gardener/gardener/pull/13708)]
- `[OPERATOR]` When configuring a custom CNI path for containerd, GNA will now - in addition to checking the version of the config.toml config file - query containerd for its version and use the `bin_dirs` path with a string array if the config file version is 3 and containerd >= 2.2 is detected. by @MrBatschner [[#13826](https://github.com/gardener/gardener/pull/13826)]
- `[OPERATOR]` An instance of `OpenTelemetry Collector` is now deployed to the `garden` namespace of both `Garden` and `Seed` clusters. by @rrhubenov [[#13481](https://github.com/gardener/gardener/pull/13481)]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.35. To allow creation/update of 1.35 clusters you will have to update the version of your provider extension(s) to a version that supports 1.35 as well. Please consult the respective releases and notes in the provider extension's repository. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The `Shoot` field `.spec.seedSelector` can now be adjusted for already scheduled shoots, as long as the new selector still selects the assigned seed. by @timuthy [[#13920](https://github.com/gardener/gardener/pull/13920)]
- `[DEVELOPER]` gardenctl in local setup by @hown3d [[#13842](https://github.com/gardener/gardener/pull/13842)]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version `1.35`. Extension developers have to prepare individual extensions as well to work with `1.35`. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[DEVELOPER]` Environment variable `MAX_PARALLEL_WORKERS` can now be used to control the number of parallel workers that are spawned during the call to the `make generate` target. by @rrhubenov [[#13903](https://github.com/gardener/gardener/pull/13903)]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing unwanted reconciliations of Secrets and other objects due to cache resyncs in the project activity reconciler is now fixed. by @shafeeqes [[#13945](https://github.com/gardener/gardener/pull/13945)]
- `[OPERATOR]` This PR fixes webhook certificate reconciliation to properly apply changes in webhook configurations. by @acumino [[#13971](https://github.com/gardener/gardener/pull/13971)]
- `[OPERATOR]` Fixes a bug when feature gate UseUnifiedHTTPProxyPort was used in conjunction with a seed load balancer using proxy protocol. by @maboehm [[#13832](https://github.com/gardener/gardener/pull/13832)]
- `[OPERATOR]` Fixes a bug in the `UsesUnifiedHTTPProxyPort` constraint, when feature gate `UseUnifiedHTTPProxyPort` was used and then disabled again by @maboehm [[#13844](https://github.com/gardener/gardener/pull/13844)]
- `[USER]` gardener-apiserver: An issue in gardener-apiserver v1.135.0 causing `kubectl apply` for a Shoot to be wrongly rejected with "spec.dns.providers[0]: Required value: non-primary DNS providers must specify `type` and `credentialsRef`" in some cases is now fixed. by @ialidzhikov [[#13861](https://github.com/gardener/gardener/pull/13861)]
- `[DEVELOPER]` Enable MCM (cluster-autoscaler) to scale `provider-local` `Node`s. by @LucaBernstein [[#13804](https://github.com/gardener/gardener/pull/13804)]

## 🏃 Others
- `[OPERATOR]` Audit policy configmap for the gardener API server referenced in the garden resource is now validated. by @acumino [[#13478](https://github.com/gardener/gardener/pull/13478)]
- `[OPERATOR]` Upon gardenlet start all existing opentelemetry collector pipelines in shoot control planes will be migrated to the expected content. by @nickytd [[#14054](https://github.com/gardener/gardener/pull/14054)]
- `[OPERATOR]` The mutating `ShootDNS` admission plugin is now also a validating one. Validations which are executed by this admission plugin during the mutation phase are now moved to the validating `ShootDNS` admission plugin. by @ialidzhikov [[#13910](https://github.com/gardener/gardener/pull/13910)]
- `[OPERATOR]` Add Prometheus health check rule in the cache Prometheus to ensure the presence of `kubelet` volume stats metrics. by @vicwicker [[#13855](https://github.com/gardener/gardener/pull/13855)]
- `[OPERATOR]` Federate `shoot:node_operating_system:sum` time series from the garden to the longterm Prometheus. by @vicwicker [[#13805](https://github.com/gardener/gardener/pull/13805)]
- `[OPERATOR]` Fix flaky test for latest MCM release v0.61.x by @r4mek [[#13916](https://github.com/gardener/gardener/pull/13916)]
- `[OPERATOR]` The majority of the VerticalPodAutoscaler resources managed by Gardener are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @voelzmo [[#13819](https://github.com/gardener/gardener/pull/13819)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.2` to `v0.61.1`. [Release Notes](https://github.com/gardener/machine-controller-manager/releases/tag/v0.61.1) by @aaronfern [[#13865](https://github.com/gardener/gardener/pull/13865)]
- `[OPERATOR]` The existing `TooManyEtcdSnapshotCompactionJobsFailing` alert has been renamed to `EtcdSnapshotCompactionJobsFailingForSeed` and its expression has been fixed to correctly measure the fraction of namespaces with failures.  
  Two new per-namespace alerts (`EtcdSnapshotCompactionJobsFailingForNamespace` and `EtcdFullSnapshotsFailingForNamespace`) have been added to help operators identify specific shoot clusters where compaction jobs or full snapshots are failing above the 10% threshold. by @anveshreddy18 [[#14053](https://github.com/gardener/gardener/pull/14053)]
- `[OPERATOR]` Use Kubernetes 1.34.3 in the local setup. by @vicwicker [[#13855](https://github.com/gardener/gardener/pull/13855)]
- `[USER]` Allow `NamespacedCloudProfile.spec.limits` to be decreased. by @LucaBernstein [[#13724](https://github.com/gardener/gardener/pull/13724)]
- `[DEVELOPER]` The component checklist rule for **Define a `VerticalPodAutoscaler`** is enhanced with the convention that a VPA should define an explicit container policy for all containers that need to be auto-scaled and should have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. For more details, refer to the[Component Checklist](https://github.com/gardener/gardener/blob/v1.136.0/docs/development/component-checklist.md). by @voelzmo [[#13819](https://github.com/gardener/gardener/pull/13819)]
- `[DEVELOPER]` The TM tests are now adapted to run against Kubernetes 1.35. by @ialidzhikov [[#13995](https://github.com/gardener/gardener/pull/13995)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.34.0` to `v0.35.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.35.0)  
  - `github.com/gardener/etcd-druid/api` from `v0.34.0` to `v0.35.0`. by @renormalize [[#13950](https://github.com/gardener/gardener/pull/13950)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.3` to `1.83.4`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.4) by @gardener-ci-robot [[#13970](https://github.com/gardener/gardener/pull/13970)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.14.1` to `v1.14.2`. by @gardener-ci-robot [[#13880](https://github.com/gardener/gardener/pull/13880)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.4` to `1.83.5`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.5) by @gardener-ci-robot [[#13983](https://github.com/gardener/gardener/pull/13983)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/cpa/cluster-proportional-autoscaler` from `v1.9.0` to `v1.10.3`. by @gardener-ci-robot [[#13905](https://github.com/gardener/gardener/pull/13905)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.5` to `1.27.6`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.5` to `1.27.6`.   
  - `istio.io/api` from `v1.27.5` to `v1.27.6`. by @gardener-ci-robot [[#13986](https://github.com/gardener/gardener/pull/13986)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.2` to `1.83.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.3) by @gardener-ci-robot [[#13917](https://github.com/gardener/gardener/pull/13917)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/terminal-controller-manager` from `v0.34.0` to `v0.35.0`. [Release Notes](https://redirect.github.com/gardener/terminal-controller-manager/releases/tag/v0.35.0) by @gardener-ci-robot [[#13953](https://github.com/gardener/gardener/pull/13953)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.46.1` to `0.46.2`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.46.2) by @gardener-ci-robot [[#13959](https://github.com/gardener/gardener/pull/13959)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.30.1` to `v0.31.0`. by @gardener-ci-robot [[#13931](https://github.com/gardener/gardener/pull/13931)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/metrics-server/metrics-server` from `v0.8.0` to `v0.8.1`. by @gardener-ci-robot [[#13912](https://github.com/gardener/gardener/pull/13912)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.14.2` to `v1.14.3`. by @gardener-ci-robot [[#13940](https://github.com/gardener/gardener/pull/13940)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-conntrack` from `3.23.2` to `3.23.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.23.3) by @gardener-ci-robot [[#13948](https://github.com/gardener/gardener/pull/13948)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.4.0` to `2.5.0`. by @gardener-ci-robot [[#13839](https://github.com/gardener/gardener/pull/13839)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.136.0</code></b></summary>

# [github.com/gardener/gardener:v1.136.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The Garden's `.spec.virtualCluster.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new Garden creations and for field value updates. Already existing Gardens which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[OPERATOR]` The ManagedSeedSet's `.spec.shootTemplate.spec.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new ManagedSeedSet creations and for field value updates. Already existing ManagedSeedSets which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[USER]` Shoot addons (`.spec.addons`) have been deprecated and will be forbidden starting with Kubernetes `1.35`. Their usage was already discouraged for productive clusters, as they now only include unmaintained components (Kubernetes dashboard and Ingress NGINX Controller). by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The shoot field `.spec.kubernetes.kubeScheduler.kubeMaxPDVols` has been deprecated and will be forbidden starting with Kubernetes `1.35`. The maximum number of attachable volumes is maintained by the respective CSI plugin. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The Shoot's `.spec.kubernetes.kubeAPIServer.eventTTL` field's valid values range is restricted from `[0, 168h]` to `[0, 24h]`. The new range is imposed for new Shoots creations and for field value updates. Already existing Shoots which specify invalid values (more than `24h`) are not affected. by @ialidzhikov [[#13830](https://github.com/gardener/gardener/pull/13830)]
- `[USER]` Downgrading the machine image version (`.spec.provider.workers[].machine.image.version`) is not allowed for worker pools using the `AutoInPlaceUpdate` or `ManualInPlaceUpdate` strategy, as Gardener does not support machine image downgrades for any operating system currently.  For `AutoRollingUpdate`, the entire node is replaced, so this limitation does not apply. by @shafeeqes [[#13828](https://github.com/gardener/gardener/pull/13828)]
- `[USER]` The shoot field `.spec.kubernetes.kubeAPIServer.watchCacheSizes.default` has been deprecated and will be forbidden starting with Kubernetes `1.35`. Watch cache sizes are automatically sized by Kubernetes. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` Setting `.spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` in the `Shoot` spec is forbidden for clusters with Kubernetes version >= 1.35. Users that enable anonymous authentication should use Structured Authentication with [anonymous authenticator](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_access.md#configuring-anonymous-authentication) instead. by @dimityrmirchev [[#13707](https://github.com/gardener/gardener/pull/13707)]
- `[DEVELOPER]` The healthcheck controller now supports the `garden` extension class. Health check client interfaces have been renamed from `SeedClient/ShootClient` to `SourceClient/TargetClient` for better abstraction across extension classes. The `PreCheckFunc` method signature has been changed to accept `any` for cluster or garden object. by @theoddora [[#13789](https://github.com/gardener/gardener/pull/13789)]

## 📰 Noteworthy
- `[OPERATOR]` New health and readiness checks have been added to vpn-seed-server to improve availability and reduce log clutter. by @domdom82 [[#13802](https://github.com/gardener/gardener/pull/13802)]
- `[OPERATOR]` The `Shoot` spec has a new field `spec.kubernetes.kubeAPIServer.encryptionConfig.provider.type`, which currently can only be set to `aescbc`. by @AleksandarSavchev [[#13732](https://github.com/gardener/gardener/pull/13732)]
- `[OPERATOR]` For Kubernetes virtual clusters `>= 1.33`, we now deploy both `Endpoints` and `EndpointSlice` resources for the APIService connection between virtual-garden-kube-apiserver and gardener-apiserver. by @acumino [[#14041](https://github.com/gardener/gardener/pull/14041)]
- `[OPERATOR]` The `Garden` spec has 2 new fields `spec.virtualCluster.kubernetes.kubeAPIServer.encryptionConfig.provider.type`and `spec.virtualCluster.gardener.gardenerAPIServer.encryptionConfig.provider.type`, which currently can only be set to `aescbc`. by @AleksandarSavchev [[#13732](https://github.com/gardener/gardener/pull/13732)]
- `[OPERATOR]` The `OpenTelemetryCollector` feature gate has been promoted to Beta and is enabled by default. by @rrhubenov [[#13851](https://github.com/gardener/gardener/pull/13851)]
- `[USER]` The field `.spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` in the `Shoot` spec will be automatically set to `nil` if users set it `false` as these two are equivalent across the codebase. The field is deprecated and users that enable anonymous authentication should migrate to Structured Authentication with [anonymous authenticator](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_access.md#configuring-anonymous-authentication) instead. by @dimityrmirchev [[#13707](https://github.com/gardener/gardener/pull/13707)]
- `[USER]` It is now explicitly supported to use short worker OS image versions in the `CloudProfile`, which are not defaulted when creating or updating the `Shoot` spec. by @Gerrit91 [[#13785](https://github.com/gardener/gardener/pull/13785)]
- `[USER]` The shoot deletion flow has been enhanced to tolerate leftover resources in the following situations:  
  - Objects that belong to namespaces which have already been deleted (finalized).  
  - Objects that were created after the cleanup process began for the first time, plus the finalize grace period. by @timuthy [[#13918](https://github.com/gardener/gardener/pull/13918)]

## ✨ New Features
- `[OPERATOR]` Gardener now supports pulling Helm charts from OCI registries that use custom or self-signed TLS certificates. This is particularly useful for air-gapped environments or when using private container registries with custom certificate authorities.  
    
  A new `caBundleSecretRef` field has been added to the `ociRepository` configuration in the following resources:  
  - `core.gardener.cloud/v1.ControllerDeployment`: `.helm.ociRepository.caBundleSecretRef`  
  - `core.gardener.cloud/v1beta1.ControllerDeployment`: `.helm.ociRepository.caBundleSecretRef`  
  - `operator.gardener.cloud/v1alpha1.Extension`: `.spec.deployment.{admission.{runtimeCluster,virtualCluster},extension}.helm.ociRepository.caBundleSecretRef`  
    
  The field references a secret in the `garden` namespace containing a PEM-encoded CA certificate bundle (data key: `bundle.crt`). For gardenlet usage, the secret must be labeled with `gardener.cloud/role=oci-ca-bundle`. by @shafeeqes [[#13868](https://github.com/gardener/gardener/pull/13868)]
- `[OPERATOR]` The `gardener-controller-manager` now increases all `ResourceQuota`s in project namespaces when a Gardener update leads to Gardener creating more resources in them. This was introduced to prevent failing Shoot reconciliations when `ResourceQuota`s of projects are near their limit. by @tobschli [[#13850](https://github.com/gardener/gardener/pull/13850)]
- `[OPERATOR]` Introduce fluent-bit-plugin v1 with OTLP support behind the OpenTelemetryCollector feature gate and adjust fluent-bit resources to select OTLP. by @nickytd [[#13961](https://github.com/gardener/gardener/pull/13961)]
- `[OPERATOR]` Introduced the Victoria Operator as a component to Seed & Garden Clusters. by @rrhubenov [[#13708](https://github.com/gardener/gardener/pull/13708)]
- `[OPERATOR]` When configuring a custom CNI path for containerd, GNA will now - in addition to checking the version of the config.toml config file - query containerd for its version and use the `bin_dirs` path with a string array if the config file version is 3 and containerd >= 2.2 is detected. by @MrBatschner [[#13826](https://github.com/gardener/gardener/pull/13826)]
- `[OPERATOR]` An instance of `OpenTelemetry Collector` is now deployed to the `garden` namespace of both `Garden` and `Seed` clusters. by @rrhubenov [[#13481](https://github.com/gardener/gardener/pull/13481)]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.35. To allow creation/update of 1.35 clusters you will have to update the version of your provider extension(s) to a version that supports 1.35 as well. Please consult the respective releases and notes in the provider extension's repository. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[USER]` The `Shoot` field `.spec.seedSelector` can now be adjusted for already scheduled shoots, as long as the new selector still selects the assigned seed. by @timuthy [[#13920](https://github.com/gardener/gardener/pull/13920)]
- `[DEVELOPER]` gardenctl in local setup by @hown3d [[#13842](https://github.com/gardener/gardener/pull/13842)]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version `1.35`. Extension developers have to prepare individual extensions as well to work with `1.35`. by @timuthy [[#13845](https://github.com/gardener/gardener/pull/13845)]
- `[DEVELOPER]` Environment variable `MAX_PARALLEL_WORKERS` can now be used to control the number of parallel workers that are spawned during the call to the `make generate` target. by @rrhubenov [[#13903](https://github.com/gardener/gardener/pull/13903)]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing unwanted reconciliations of Secrets and other objects due to cache resyncs in the project activity reconciler is now fixed. by @shafeeqes [[#13945](https://github.com/gardener/gardener/pull/13945)]
- `[OPERATOR]` This PR fixes webhook certificate reconciliation to properly apply changes in webhook configurations. by @acumino [[#13971](https://github.com/gardener/gardener/pull/13971)]
- `[OPERATOR]` Fixes a bug when feature gate UseUnifiedHTTPProxyPort was used in conjunction with a seed load balancer using proxy protocol. by @maboehm [[#13832](https://github.com/gardener/gardener/pull/13832)]
- `[OPERATOR]` Fixes a bug in the `UsesUnifiedHTTPProxyPort` constraint, when feature gate `UseUnifiedHTTPProxyPort` was used and then disabled again by @maboehm [[#13844](https://github.com/gardener/gardener/pull/13844)]
- `[USER]` gardener-apiserver: An issue in gardener-apiserver v1.135.0 causing `kubectl apply` for a Shoot to be wrongly rejected with "spec.dns.providers[0]: Required value: non-primary DNS providers must specify `type` and `credentialsRef`" in some cases is now fixed. by @ialidzhikov [[#13861](https://github.com/gardener/gardener/pull/13861)]
- `[DEVELOPER]` Enable MCM (cluster-autoscaler) to scale `provider-local` `Node`s. by @LucaBernstein [[#13804](https://github.com/gardener/gardener/pull/13804)]

## 🏃 Others
- `[OPERATOR]` Audit policy configmap for the gardener API server referenced in the garden resource is now validated. by @acumino [[#13478](https://github.com/gardener/gardener/pull/13478)]
- `[OPERATOR]` Upon gardenlet start all existing opentelemetry collector pipelines in shoot control planes will be migrated to the expected content. by @nickytd [[#14054](https://github.com/gardener/gardener/pull/14054)]
- `[OPERATOR]` The mutating `ShootDNS` admission plugin is now also a validating one. Validations which are executed by this admission plugin during the mutation phase are now moved to the validating `ShootDNS` admission plugin. by @ialidzhikov [[#13910](https://github.com/gardener/gardener/pull/13910)]
- `[OPERATOR]` Add Prometheus health check rule in the cache Prometheus to ensure the presence of `kubelet` volume stats metrics. by @vicwicker [[#13855](https://github.com/gardener/gardener/pull/13855)]
- `[OPERATOR]` Federate `shoot:node_operating_system:sum` time series from the garden to the longterm Prometheus. by @vicwicker [[#13805](https://github.com/gardener/gardener/pull/13805)]
- `[OPERATOR]` Fix flaky test for latest MCM release v0.61.x by @r4mek [[#13916](https://github.com/gardener/gardener/pull/13916)]
- `[OPERATOR]` The majority of the VerticalPodAutoscaler resources managed by Gardener are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @voelzmo [[#13819](https://github.com/gardener/gardener/pull/13819)]
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.60.2` to `v0.61.1`. [Release Notes](https://github.com/gardener/machine-controller-manager/releases/tag/v0.61.1) by @aaronfern [[#13865](https://github.com/gardener/gardener/pull/13865)]
- `[OPERATOR]` The existing `TooManyEtcdSnapshotCompactionJobsFailing` alert has been renamed to `EtcdSnapshotCompactionJobsFailingForSeed` and its expression has been fixed to correctly measure the fraction of namespaces with failures.  
  Two new per-namespace alerts (`EtcdSnapshotCompactionJobsFailingForNamespace` and `EtcdFullSnapshotsFailingForNamespace`) have been added to help operators identify specific shoot clusters where compaction jobs or full snapshots are failing above the 10% threshold. by @anveshreddy18 [[#14053](https://github.com/gardener/gardener/pull/14053)]
- `[OPERATOR]` Use Kubernetes 1.34.3 in the local setup. by @vicwicker [[#13855](https://github.com/gardener/gardener/pull/13855)]
- `[USER]` Allow `NamespacedCloudProfile.spec.limits` to be decreased. by @LucaBernstein [[#13724](https://github.com/gardener/gardener/pull/13724)]
- `[DEVELOPER]` The component checklist rule for **Define a `VerticalPodAutoscaler`** is enhanced with the convention that a VPA should define an explicit container policy for all containers that need to be auto-scaled and should have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. For more details, refer to the[Component Checklist](https://github.com/gardener/gardener/blob/v1.136.0/docs/development/component-checklist.md). by @voelzmo [[#13819](https://github.com/gardener/gardener/pull/13819)]
- `[DEVELOPER]` The TM tests are now adapted to run against Kubernetes 1.35. by @ialidzhikov [[#13995](https://github.com/gardener/gardener/pull/13995)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.34.0` to `v0.35.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.35.0)  
  - `github.com/gardener/etcd-druid/api` from `v0.34.0` to `v0.35.0`. by @renormalize [[#13950](https://github.com/gardener/gardener/pull/13950)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.3` to `1.83.4`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.4) by @gardener-ci-robot [[#13970](https://github.com/gardener/gardener/pull/13970)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.14.1` to `v1.14.2`. by @gardener-ci-robot [[#13880](https://github.com/gardener/gardener/pull/13880)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.4` to `1.83.5`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.5) by @gardener-ci-robot [[#13983](https://github.com/gardener/gardener/pull/13983)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/cpa/cluster-proportional-autoscaler` from `v1.9.0` to `v1.10.3`. by @gardener-ci-robot [[#13905](https://github.com/gardener/gardener/pull/13905)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.5` to `1.27.6`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.5` to `1.27.6`.   
  - `istio.io/api` from `v1.27.5` to `v1.27.6`. by @gardener-ci-robot [[#13986](https://github.com/gardener/gardener/pull/13986)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.2` to `1.83.3`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.3) by @gardener-ci-robot [[#13917](https://github.com/gardener/gardener/pull/13917)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/terminal-controller-manager` from `v0.34.0` to `v0.35.0`. [Release Notes](https://redirect.github.com/gardener/terminal-controller-manager/releases/tag/v0.35.0) by @gardener-ci-robot [[#13953](https://github.com/gardener/gardener/pull/13953)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.46.1` to `0.46.2`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.46.2) by @gardener-ci-robot [[#13959](https://github.com/gardener/gardener/pull/13959)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.30.1` to `v0.31.0`. by @gardener-ci-robot [[#13931](https://github.com/gardener/gardener/pull/13931)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/metrics-server/metrics-server` from `v0.8.0` to `v0.8.1`. by @gardener-ci-robot [[#13912](https://github.com/gardener/gardener/pull/13912)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.14.2` to `v1.14.3`. by @gardener-ci-robot [[#13940](https://github.com/gardener/gardener/pull/13940)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-conntrack` from `3.23.2` to `3.23.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.23.3) by @gardener-ci-robot [[#13948](https://github.com/gardener/gardener/pull/13948)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.4.0` to `2.5.0`. by @gardener-ci-robot [[#13839](https://github.com/gardener/gardener/pull/13839)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.136.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.136.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.136.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.136.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.136.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.136.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.136.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.136.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.136.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.136.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.136.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.136.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.136.0`


</details>
