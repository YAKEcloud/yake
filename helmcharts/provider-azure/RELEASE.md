# [github.com/gardener/gardener-extension-provider-azure:v1.60.0]

## 📰 Noteworthy
- `[USER]` The '--volume-attach-limit' flag of the azuredisk-csi-driver can now be set for a shoot by using the 'azure.provider.extensions.gardener.cloud/volume-attach-limit' annotation.  
  The '--reserved-data-disk-slot-num' flag of the azuredisk-csi-driver can now be set for a shoot by using the 'azure.provider.extensions.gardener.cloud/reserved-data-disk-slot-num' annotation. by @AndreasBurger [[#1513](https://github.com/gardener/gardener-extension-provider-azure/pull/1513)]

## ✨ New Features
- `[OPERATOR]` Support mixed format for machine image specifications in CloudProfile and NamespacedCloudProfile, allowing both (legacy) architecture format and new capabilityFlavors format to coexist within the same CloudProfile for smooth migration. by @Roncossek [[#1507](https://github.com/gardener/gardener-extension-provider-azure/pull/1507)]
- `[OPERATOR]` Add required CSI disk RBAC to monitor premium v2 disk migration by @hebelsan [[#1506](https://github.com/gardener/gardener-extension-provider-azure/pull/1506)]
- `[OPERATOR]` No rollout hot-update of ProviderConfig.NodeTemplate.VirtualCapacity with/without already existing ProviderConfig.  
  New hash strategy adopted for ProviderConfig for k8s versions >= 1.35 by @gagan16k [[#1456](https://github.com/gardener/gardener-extension-provider-azure/pull/1456)]

## 🐛 Bug Fixes
- `[USER]` It is again allowed shoots to use `WorkloadIdentity` as credentials for DNS management, e.g. via the `shoot.spec.dns.providers[].credentialsRef` field. by @vpnachev [[#1477](https://github.com/gardener/gardener-extension-provider-azure/pull/1477)]

## 🏃 Others
- `[OPERATOR]` Update gardener to v1.139.1 by @hebelsan [[#1491](https://github.com/gardener/gardener-extension-provider-azure/pull/1491)]
- `[OPERATOR]` Add support for `StandardV2` SKU for NAT Gateways and Public IPs by @kon-angelo [[#1469](https://github.com/gardener/gardener-extension-provider-azure/pull/1469)]
- `[OPERATOR]` Update gardener to v1.140.1 by @AndreasBurger [[#1512](https://github.com/gardener/gardener-extension-provider-azure/pull/1512)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.32.14 -> v1.32.16 (patch)  
    - cloud-controller-manager: v1.33.9 -> v1.33.11 (patch)  
    - cloud-controller-manager: v1.34.6 -> v1.34.8 (patch)  
    - cloud-controller-manager: v1.35.1 -> v1.35.3 (patch)  
    - cloud-node-manager: v1.32.14 -> v1.32.16 (patch)  
    - cloud-node-manager: v1.33.9 -> v1.33.11 (patch)  
    - cloud-node-manager: v1.34.6 -> v1.34.8 (patch)  
    - cloud-node-manager: v1.35.1 -> v1.35.3 (patch)  
    - csi-driver-disk: v1.34.2 -> v1.34.3 (singleton)  
    - csi-driver-file: v1.35.1 -> v1.35.2 (singleton) by @federated-github-access[bot] [[#1479](https://github.com/gardener/gardener-extension-provider-azure/pull/1479)]

## application/spdx+json
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:2b23c2545b37ac93339a409b5369277ef39f88b698a0d1bcbed66a86b0c2ec97`
- gardener-extension-admission-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:8e0179874318501d0ba842047cc4553f159487f7689d446464dd715d92b09a5e`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:81577c310df75acffb0bc2b92efa05795eba4cca9a89b20e3b53427063689a06`
- gardener-extension-provider-azure-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:c6855c4df5e74ed997cfe8e0596fae188047476c88b70c2a68961c46208b2e86`
## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.60.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.60.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.60.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.60.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.60.0`
