# [github.com/gardener/gardener-extension-provider-openstack:v1.53.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The `PLATFORM` makefile variable has been replaced by `TARGET_PLATFORM`. by @wpross [[#1272](https://github.com/gardener/gardener-extension-provider-openstack/pull/1272)]

## 📰 Noteworthy
- `[USER]` virtualCapacities can now be added to worker.providerConfig.nodeTemplate and will be mapped to the machineclass nodeTemplate by @aaronfern [[#1266](https://github.com/gardener/gardener-extension-provider-openstack/pull/1266)]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.35. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) before upgrading to 1.35. by @rfranzke [[#1256](https://github.com/gardener/gardener-extension-provider-openstack/pull/1256)]
- `[DEVELOPER]` Gardener extension provider-openstack container images now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @wpross [[#1272](https://github.com/gardener/gardener-extension-provider-openstack/pull/1272)]

## 🐛 Bug Fixes
- `[OPERATOR]` fix verbosity flag in manila csi-provider chart by @AndreasBurger [[#1277](https://github.com/gardener/gardener-extension-provider-openstack/pull/1277)]
- `[OPERATOR]` Fixed missing create event permissions in runtime cluster when publishing "became leader" event by @matthias-horne [[#1275](https://github.com/gardener/gardener-extension-provider-openstack/pull/1275)]
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @matthias-horne [[#1275](https://github.com/gardener/gardener-extension-provider-openstack/pull/1275)]
- `[USER]` Fixed an issue, where a router was not always created in the correct floating pool subnet if it was specified with a wildcard `*`. by @matthias-horne [[#1274](https://github.com/gardener/gardener-extension-provider-openstack/pull/1274)]

## 🏃 Others
- `[OPERATOR]` export testresults as inlined ocm-resource second trial by @heldkat [[#1265](https://github.com/gardener/gardener-extension-provider-openstack/pull/1265)]
- `[OPERATOR]` Allows to configure storage of etcd events in shoot cluster by @chungtd203338 [[#1080](https://github.com/gardener/gardener-extension-provider-openstack/pull/1080)]
- `[OPERATOR]` Add input validation for primary DNS provider secret referenced in the shoot spec. by @wpross [[#1259](https://github.com/gardener/gardener-extension-provider-openstack/pull/1259)]
- `[OPERATOR]` Fix cleanup logic when shoot is going to hibernation or waking up by @DockToFuture [[#1284](https://github.com/gardener/gardener-extension-provider-openstack/pull/1284)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#1270](https://github.com/gardener/gardener-extension-provider-openstack/pull/1270)]
- `[OPERATOR]` Prevent Calico from setting the `NetworkUnavailable` condition on nodes when overlay networking gets disabled, and ensures cleanup of existing Calico-set conditions. by @DockToFuture [[#1279](https://github.com/gardener/gardener-extension-provider-openstack/pull/1279)]
- `[USER]` worker.providerConfig.nodeTemplate can now be specified without having to add all core resources by @aaronfern [[#1266](https://github.com/gardener/gardener-extension-provider-openstack/pull/1266)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-attacher: v4.10.0 -> v4.11.0 (singleton)  
    - csi-driver-nfs: v4.12.1 -> v4.13.1 (singleton)  
    - csi-liveness-probe: v2.17.0 -> v2.18.0 (singleton)  
    - csi-node-driver-registrar: v2.15.0 -> v2.16.0 (singleton)  
    - csi-provisioner: v6.1.0 -> v6.1.1 (patch)  
    - csi-resizer: v2.0.0 -> v2.1.0 (minor)  
    - csi-snapshot-controller: v8.4.0 -> v8.5.0 (singleton)  
    - csi-snapshotter: v8.4.0 -> v8.5.0 (singleton) by @gardener-github-actions[bot] [[#1250](https://github.com/gardener/gardener-extension-provider-openstack/pull/1250)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.53.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.53.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.53.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.53.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.53.0`
