# [github.com/gardener/gardener-extension-provider-gcp:v1.47.0]

## ✨ New Features
- `[USER]` Set enable-data-cache on the CSI-driver if shoot annotation gcp.provider.extensions.gardener.cloud/enable-csi-data-cache is set by @hebelsan [[#1059](https://github.com/gardener/gardener-extension-provider-gcp/pull/1059)]
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1199](https://github.com/gardener/gardener-extension-provider-gcp/pull/1199)]
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to use credentials of either `v1.Secret` or `security.gardener.cloud/v1alpha1.WorkloadIdentity` by @vpnachev [[#1163](https://github.com/gardener/gardener-extension-provider-gcp/pull/1163)]

## 🐛 Bug Fixes
- `[OPERATOR]` Bug in the backupentry controller not properly setting the Workload Identity token mount dirpath in the credentials configuration file for source BackupEntries has been fixed. by @vpnachev [[#1209](https://github.com/gardener/gardener-extension-provider-gcp/pull/1209)]
- `[OPERATOR]` All `NamespacedCloudProfile` `MachineImageVersions` are all merged into its status, instead of only writing the last one by @Roncossek [[#1212](https://github.com/gardener/gardener-extension-provider-gcp/pull/1212)]

## 🏃 Others
- `[OPERATOR]` Deny dual-stack migration if overlay is not explicitly disabled. by @DockToFuture [[#1185](https://github.com/gardener/gardener-extension-provider-gcp/pull/1185)]
- `[USER]` `google-guest-agent` is configured to not add a route for alias IPs now. This fixes dual-stack clusters with Cilium. by @axel7born [[#1197](https://github.com/gardener/gardener-extension-provider-gcp/pull/1197)]
- `[OPERATOR]` Remove cleanup function FirewallRuleAllowExternalName by @hebelsan [[#1218](https://github.com/gardener/gardener-extension-provider-gcp/pull/1218)]
- `[OPERATOR]` Migration from dual-stack IPv6, IPv4 is now supported. by @axel7born [[#1171](https://github.com/gardener/gardener-extension-provider-gcp/pull/1171)]
- `[OPERATOR]` Update gardener/gardener to v1.130.0 and other dependencies by @hebelsan [[#1214](https://github.com/gardener/gardener-extension-provider-gcp/pull/1214)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1193](https://github.com/gardener/gardener-extension-provider-gcp/pull/1193)]
- `[OPERATOR]` Configure kube-apiserver QPS + burst for CSI components by @hendrikKahl [[#1203](https://github.com/gardener/gardener-extension-provider-gcp/pull/1203)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v32.2.4 -> v32.2.5 (patch)  
    - machine-controller-manager-provider-gcp: v0.25.0 -> v0.26.0 (singleton)  
    - csi-driver: v1.17.12 -> v1.17.14 (singleton)  
    - csi-provisioner: v5.2.0 -> v5.3.0 (singleton)  
    - csi-attacher: v4.8.1 -> v4.10.0 (singleton)  
    - csi-resizer: v1.13.2 -> v1.14.0 (singleton)  
    - csi-snapshotter: v8.2.1 -> v8.3.0 (singleton)  
    - csi-snapshot-controller: v8.2.1 -> v8.3.0 (singleton)  
    - csi-node-driver-registrar: v2.13.0 -> v2.15.0 (singleton)  
    - csi-liveness-probe: v2.15.0 -> v2.17.0 (singleton) by @gardener-github-actions[bot] [[#1211](https://github.com/gardener/gardener-extension-provider-gcp/pull/1211)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.47.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.47.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.47.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.47.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.47.0`
