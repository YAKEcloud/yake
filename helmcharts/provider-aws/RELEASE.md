# [github.com/gardener/gardener-extension-provider-aws:v1.68.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Remove terraformer reconciler for infrastructure resources by @kon-angelo [[#1617](https://github.com/gardener/gardener-extension-provider-aws/pull/1617)]
- `[DEVELOPER]` The `PLATFORM` makefile variable has been replaced by `TARGET_PLATFORM`. by @wpross [[#1693](https://github.com/gardener/gardener-extension-provider-aws/pull/1693)]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.35. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) before upgrading to 1.35. by @rfranzke [[#1677](https://github.com/gardener/gardener-extension-provider-aws/pull/1677)]
- `[DEVELOPER]` Gardener extension provider-aws container images now can be built for multiple platforms locally via the variable `TARGET_PLATFORMS`, e.g. `make docker-images TARGET_PLATFORMS=linux/amd64,linux/arm64`. If the variable is unset, the container images are built for the platform `linux/<host-arch>` only. by @wpross [[#1693](https://github.com/gardener/gardener-extension-provider-aws/pull/1693)]

## 🐛 Bug Fixes
- `[OPERATOR]` The cloud-controller-manager image used for `Shoot` clusters running on kubernetes `1.31` was downgraded from `v1.31.9` to `v1.31.8`. This was done to resolve an issue that caused reconciliations of `Service`s of type LoadBalancer to fail because of attempts to add already existing `IpPermission` rules to the security groups created for the LoadBalancers. by @plkokanov [[#1671](https://github.com/gardener/gardener-extension-provider-aws/pull/1671)]
- `[OPERATOR]` Fixed missing create `event` permissions in runtime cluster when publishing "became leader" event by @axel7born [[#1695](https://github.com/gardener/gardener-extension-provider-aws/pull/1695)]
- `[OPERATOR]` Fixed `DNSRecords` not reconciling in runtime cluster because of missing `namespace` permissions by @axel7born [[#1695](https://github.com/gardener/gardener-extension-provider-aws/pull/1695)]
- `[OPERATOR]` Add check for non-empty IPv6 CIDR block before updating state by @hebelsan [[#1683](https://github.com/gardener/gardener-extension-provider-aws/pull/1683)]

## 🏃 Others
- `[OPERATOR]` Allow to use one secret as an infrastructure secret as well as a dns secret. by @wpross [[#1689](https://github.com/gardener/gardener-extension-provider-aws/pull/1689)]
- `[OPERATOR]` Disallow deletion of duplicated zones in infraConfig section by @hebelsan [[#1475](https://github.com/gardener/gardener-extension-provider-aws/pull/1475)]
- `[OPERATOR]` Update `aws-custom-route-controller` image to `v0.15.0`. by @DockToFuture [[#1669](https://github.com/gardener/gardener-extension-provider-aws/pull/1669)]
- `[OPERATOR]` Add support for AMD SEV-SNP in CPU options by @hebelsan [[#1642](https://github.com/gardener/gardener-extension-provider-aws/pull/1642)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#1690](https://github.com/gardener/gardener-extension-provider-aws/pull/1690)]
- `[OPERATOR]` Prevent Calico from setting the `NetworkUnavailable` condition on nodes when overlay networking gets disabled, and ensures cleanup of existing Calico-set conditions. by @DockToFuture [[#1703](https://github.com/gardener/gardener-extension-provider-aws/pull/1703)]
- `[OPERATOR]` Fix cleanup logic when shoot is going to hibernation or waking up. by @DockToFuture [[#1714](https://github.com/gardener/gardener-extension-provider-aws/pull/1714)]
- `[OPERATOR]` Add permissions to set network unavailable condition. by @DockToFuture [[#1665](https://github.com/gardener/gardener-extension-provider-aws/pull/1665)]
- `[OPERATOR]` AWS secret validation now allows mixing standard (e.g., `accessKeyID`) and DNS-specific keys (e.g., `AWS_SECRET_ACCESS_KEY`) within the same secret, but prevents duplicate keys for the same field (e.g., both `accessKeyID` and `AWS_ACCESS_KEY_ID`). by @wpross [[#1667](https://github.com/gardener/gardener-extension-provider-aws/pull/1667)]
- `[OPERATOR]` Allow `aws-custom-route-controller` to write events of group `events.k8s.io` by @MartinWeindel [[#1651](https://github.com/gardener/gardener-extension-provider-aws/pull/1651)]
- `[OPERATOR]` Add missing s3 policy partition for EUSC region by @kon-angelo [[#1663](https://github.com/gardener/gardener-extension-provider-aws/pull/1663)]
- `[OPERATOR]` Update AWS Load Balancer Controller from `v2.17.1` to `v3.0.0`. by @wpross [[#1707](https://github.com/gardener/gardener-extension-provider-aws/pull/1707)]
- `[OPERATOR]` Fix an issue that would prevent cluster-autoscaler from considering `VolumeAttributesClasses` for scaling on shoot `< v1.34` by @matthias-horne [[#1666](https://github.com/gardener/gardener-extension-provider-aws/pull/1666)]
- `[OPERATOR]` Enhance VPC validation by checking subnet CIDRs against VPC CIDR by @hebelsan [[#1662](https://github.com/gardener/gardener-extension-provider-aws/pull/1662)]
- `[OPERATOR]` Improved opt-in mechanism for dual-stack to avoid automatic load balancer recreation in dual-stack clusters by @axel7born [[#1696](https://github.com/gardener/gardener-extension-provider-aws/pull/1696)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.31.8 -> v1.31.9 (patch)  
    - csi-driver: v1.54.0 -> v1.55.0 (singleton)  
    - csi-driver-efs: v2.2.0 -> v2.3.0 (singleton)  
    - csi-volume-modifier: v0.9.1 -> v0.9.2 (singleton) by @gardener-github-actions[bot] [[#1648](https://github.com/gardener/gardener-extension-provider-aws/pull/1648)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-attacher: v4.10.0 -> v4.11.0 (singleton)  
    - csi-driver: v1.55.0 -> v1.56.0 (singleton)  
    - csi-liveness-probe: v2.17.0 -> v2.18.0 (singleton)  
    - csi-node-driver-registrar: v2.15.0 -> v2.16.0 (singleton)  
    - csi-provisioner: v6.1.0 -> v6.1.1 (patch)  
    - csi-resizer: v2.0.0 -> v2.1.0 (minor)  
    - csi-snapshot-controller: v8.4.0 -> v8.5.0 (singleton)  
    - csi-snapshotter: v8.4.0 -> v8.5.0 (singleton) by @gardener-github-actions[bot] [[#1692](https://github.com/gardener/gardener-extension-provider-aws/pull/1692)]
- `[DEPENDENCY]` The following container images have been updated:  
    - machine-controller-manager-provider-aws: v0.27.1 -> v0.27.2 (singleton) by @takoverflow [[#1704](https://github.com/gardener/gardener-extension-provider-aws/pull/1704)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.68.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.68.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.68.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.68.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.68.0`
