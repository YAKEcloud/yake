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
