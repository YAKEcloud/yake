# [github.com/gardener/gardener-extension-provider-azure:v1.56.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Remove support for availability-sets. Operators should make sure that all availability-set-based shoots have migrated to VMSS. by @kon-angelo [[#1325](https://github.com/gardener/gardener-extension-provider-azure/pull/1325)]

## ✨ New Features
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1287](https://github.com/gardener/gardener-extension-provider-azure/pull/1287)]
- `[OPERATOR]` Add field for passing os disk caching type by @hebelsan [[#1259](https://github.com/gardener/gardener-extension-provider-azure/pull/1259)]
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to use credentials of either `v1.Secret` or `security.gardener.cloud/v1alpha1.WorkloadIdentity` by @vpnachev [[#1277](https://github.com/gardener/gardener-extension-provider-azure/pull/1277)]

## 🐛 Bug Fixes
- `[OPERATOR]` All `NamespacedCloudProfile` `MachineImageVersions` are all merged into its status, instead of only writing the last one by @Roncossek [[#1336](https://github.com/gardener/gardener-extension-provider-azure/pull/1336)]

## 🏃 Others
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.30.13 -> v1.30.15 (patch)  
    - cloud-controller-manager: v1.31.7 -> v1.31.9 (patch)  
    - cloud-controller-manager: v1.32.6 -> v1.32.8 (patch)  
    - cloud-controller-manager: v1.33.1 -> v1.33.3 (patch)  
    - cloud-node-manager: v1.30.13 -> v1.30.15 (patch)  
    - cloud-node-manager: v1.31.7 -> v1.31.9 (patch)  
    - cloud-node-manager: v1.32.6 -> v1.32.8 (patch)  
    - cloud-node-manager: v1.33.1 -> v1.33.3 (patch)  
    - csi-driver-disk: v1.32.4 -> v1.33.3 (singleton)  
    - csi-driver-file: v1.32.1 -> v1.33.3 (singleton)  
    - csi-provisioner: v5.2.0 -> v5.3.0 (singleton)  
    - csi-attacher: v4.8.1 -> v4.10.0 (singleton)  
    - csi-snapshotter: v8.2.1 -> v8.3.0 (singleton)  
    - csi-snapshot-controller: v8.2.1 -> v8.3.0 (singleton)  
    - csi-resizer: v1.13.2 -> v1.14.0 (singleton)  
    - csi-node-driver-registrar: v2.13.0 -> v2.15.0 (singleton)  
    - csi-liveness-probe: v2.15.0 -> v2.17.0 (singleton) by @gardener-github-actions[bot] [[#1312](https://github.com/gardener/gardener-extension-provider-azure/pull/1312)]
- `[OPERATOR]` Configure kube-apiserver QPS + burst for CSI components by @hendrikKahl [[#1319](https://github.com/gardener/gardener-extension-provider-azure/pull/1319)]
- `[OPERATOR]` Remove ForceNatGateway feature gate after the updated announcement by Microsoft by @kon-angelo [[#1299](https://github.com/gardener/gardener-extension-provider-azure/pull/1299)]
- `[OPERATOR]` Update gardener/gardener to v1.130.0 and other go mod dependencies by @hebelsan [[#1334](https://github.com/gardener/gardener-extension-provider-azure/pull/1334)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1307](https://github.com/gardener/gardener-extension-provider-azure/pull/1307)]
- `[OPERATOR]` Update mcm image to v0.17.1 by @hebelsan [[#1322](https://github.com/gardener/gardener-extension-provider-azure/pull/1322)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.56.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.56.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.56.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.56.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.56.0`
