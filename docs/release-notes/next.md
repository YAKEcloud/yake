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
