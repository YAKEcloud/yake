# [github.com/gardener/gardener-extension-provider-gcp:v1.50.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The `PLATFORM` makefile variable has been replaced by `TARGET_PLATFORM`. by @vpnachev [[#1322](https://github.com/gardener/gardener-extension-provider-gcp/pull/1322)]

## 📰 Noteworthy
- `[OPERATOR]` Ingress-gce no longer requires deployment of `BackendConfig` CRDs. In addition, the deployment of the default-http-backend in the shoot is no longer necessary and hence removed. by @kon-angelo [[#1320](https://github.com/gardener/gardener-extension-provider-gcp/pull/1320)]

## ✨ New Features
- `[OPERATOR]` `BackupBucketConfig.Endpoint` is introduced for specifying the regional endpoint at which the backup buckets are hosted, and this is passed to the etcd resource's backup specification. by @renormalize [[#1273](https://github.com/gardener/gardener-extension-provider-gcp/pull/1273)]
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.35. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) before upgrading to 1.35. by @rfranzke [[#1300](https://github.com/gardener/gardener-extension-provider-gcp/pull/1300)]
- `[USER]` Update ingress-gce to v1.38.2 by @kon-angelo [[#1320](https://github.com/gardener/gardener-extension-provider-gcp/pull/1320)]
- `[USER]` No rollout hot-update of ProviderConfig.NodeTemplate.VirtualCapacity with/without already existing ProviderConfig.  
  New hash strategy adopted for ProviderConfig for k8s versions >= 1.35 by @takoverflow [[#1318](https://github.com/gardener/gardener-extension-provider-gcp/pull/1318)]
- `[DEVELOPER]` Gardener extension provider-gcp container images now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @vpnachev [[#1322](https://github.com/gardener/gardener-extension-provider-gcp/pull/1322)]

## 🐛 Bug Fixes
- `[OPERATOR]` Allow private key to end without a newline character. by @wpross [[#1314](https://github.com/gardener/gardener-extension-provider-gcp/pull/1314)]
- `[OPERATOR]` Loosen secret validation to allow not only for user-generated service accounts in IAM, but also for Google-managed service accounts. by @wpross [[#1310](https://github.com/gardener/gardener-extension-provider-gcp/pull/1310)]
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @matthias-horne [[#1326](https://github.com/gardener/gardener-extension-provider-gcp/pull/1326)]
- `[OPERATOR]` Fixed missing create `event` permissions in runtime cluster when publishing "became leader" event by @matthias-horne [[#1326](https://github.com/gardener/gardener-extension-provider-gcp/pull/1326)]
- `[USER]` Set correct `onHostMaintenance: "TERMINATE"` flag for machine types, where live migration is not supported. by @matthias-horne [[#1329](https://github.com/gardener/gardener-extension-provider-gcp/pull/1329)]
- `[USER]` It is again allowed shoots to use `WorkloadIdentity` as credentials for DNS management, e.g. via the `shoot.spec.dns.providers[].credentialsRef` field. by @vpnachev [[#1346](https://github.com/gardener/gardener-extension-provider-gcp/pull/1346)]

## 🏃 Others
- `[OPERATOR]` Adopts Gardener MachineImage `Capabilities` and introduces `CapabilityFlavors` to `providerConfig`. by @Roncossek [[#1067](https://github.com/gardener/gardener-extension-provider-gcp/pull/1067)]
- `[OPERATOR]` The following image is updated:  
  - registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver: v1.22.1 -> v1.23.3 by @ialidzhikov [[#1319](https://github.com/gardener/gardener-extension-provider-gcp/pull/1319)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#1317](https://github.com/gardener/gardener-extension-provider-gcp/pull/1317)]
- `[OPERATOR]` Prevent Calico from setting the `NetworkUnavailable` condition on nodes when overlay networking gets disabled, and ensures cleanup of existing Calico-set conditions. by @DockToFuture [[#1309](https://github.com/gardener/gardener-extension-provider-gcp/pull/1309)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v35.0.0 -> v35.0.2 (patch)  
    - csi-attacher: v4.10.0 -> v4.11.0 (singleton)  
    - csi-driver-filestore: v1.11.4 -> v1.12.0 (singleton)  
    - csi-liveness-probe: v2.17.0 -> v2.18.0 (singleton)  
    - csi-node-driver-registrar: v2.15.0 -> v2.16.0 (singleton)  
    - csi-provisioner: v6.1.0 -> v6.1.1 (patch)  
    - csi-resizer: v2.0.0 -> v2.1.0 (minor)  
    - csi-snapshot-controller: v8.4.0 -> v8.5.0 (singleton)  
    - csi-snapshotter: v8.4.0 -> v8.5.0 (singleton) by @ghost [[#1297](https://github.com/gardener/gardener-extension-provider-gcp/pull/1297)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.50.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.50.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.50.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.50.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.50.0`
