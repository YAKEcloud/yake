# [github.com/gardener/gardener-extension-provider-azure:v1.59.0]

## ⚠️ Breaking Changes
- `[DEVELOPER]` The `PLATFORM` makefile variable has been replaced by `TARGET_PLATFORM`. by @wpross [[#1453](https://github.com/gardener/gardener-extension-provider-azure/pull/1453)]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.35. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) before upgrading to 1.35. by @rfranzke [[#1443](https://github.com/gardener/gardener-extension-provider-azure/pull/1443)]
- `[DEVELOPER]` Gardener extension provider-azure container images now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @wpross [[#1453](https://github.com/gardener/gardener-extension-provider-azure/pull/1453)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed an issue that prevented featuregates from being rendered correctly by @AndreasBurger [[#1444](https://github.com/gardener/gardener-extension-provider-azure/pull/1444)]
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @matthias-horne [[#1460](https://github.com/gardener/gardener-extension-provider-azure/pull/1460)]
- `[OPERATOR]` Fixed missing create `event` permissions in runtime cluster when publishing "became leader" event by @matthias-horne [[#1460](https://github.com/gardener/gardener-extension-provider-azure/pull/1460)]

## 🏃 Others
- `[OPERATOR]` Fix premature deletion of the remedy-controller deployment on startup. It will be scaled to 0 by @kon-angelo [[#1461](https://github.com/gardener/gardener-extension-provider-azure/pull/1461)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#1452](https://github.com/gardener/gardener-extension-provider-azure/pull/1452)]
- `[OPERATOR]` Update gardener/gardener v1.137.4 -> v1.137.5 by @wpross [[#1480](https://github.com/gardener/gardener-extension-provider-azure/pull/1480)]
- `[OPERATOR]` Updated Azure `cloud-controller-manager` and `cloud-node-manager` image repositories to `mcr.microsoft.com/oss/v2/kubernetes` for Kubernetes versions `>= 1.32` to align with upstream Dalec build system changes. by @wpross [[#1474](https://github.com/gardener/gardener-extension-provider-azure/pull/1474)]
- `[USER]` Classified "CannotDeleteLoadBalancerWithPrivateLinkService" as a dependency error. by @acumino [[#1455](https://github.com/gardener/gardener-extension-provider-azure/pull/1455)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.32.11 -> v1.32.14 (patch)  
    - cloud-controller-manager: v1.33.6 -> v1.33.9 (patch)  
    - cloud-controller-manager: v1.34.5 -> v1.34.6 (patch)  
    - cloud-controller-manager: v1.35.0 -> v1.35.1 (patch)  
    - cloud-node-manager: v1.32.11 -> v1.32.14 (patch)  
    - cloud-node-manager: v1.33.6 -> v1.33.9 (patch)  
    - cloud-node-manager: v1.34.5 -> v1.34.6 (patch)  
    - cloud-node-manager: v1.35.0 -> v1.35.1 (patch)  
    - csi-driver-disk: v1.34.1 -> v1.34.2 (singleton)  
    - csi-driver-file: v1.35.0 -> v1.35.1 (singleton)  
    - csi-provisioner: v6.1.1 -> v6.2.0 (minor) by @federated-github-access[bot] [[#1472](https://github.com/gardener/gardener-extension-provider-azure/pull/1472)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.34.3 -> v1.34.5 (patch)  
    - cloud-controller-manager: v1.34.5 -> v1.35.0 (minor)  
    - cloud-node-manager: v1.34.3 -> v1.34.5 (patch)  
    - cloud-node-manager: v1.34.5 -> v1.35.0 (minor)  
    - csi-attacher: v4.10.0 -> v4.11.0 (singleton)  
    - csi-driver-file: v1.34.3 -> v1.35.0 (singleton)  
    - csi-liveness-probe: v2.17.0 -> v2.18.0 (singleton)  
    - csi-node-driver-registrar: v2.15.0 -> v2.16.0 (singleton)  
    - csi-provisioner: v6.1.0 -> v6.1.1 (patch)  
    - csi-resizer: v2.0.0 -> v2.1.0 (minor)  
    - csi-snapshot-controller: v8.4.0 -> v8.5.0 (singleton)  
    - csi-snapshotter: v8.4.0 -> v8.5.0 (singleton) by @ghost [[#1437](https://github.com/gardener/gardener-extension-provider-azure/pull/1437)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.59.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.59.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.59.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.59.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.59.0`
