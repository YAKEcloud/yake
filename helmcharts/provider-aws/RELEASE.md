# [github.com/gardener/gardener-extension-provider-aws:v1.65.0]

## ✨ New Features
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1504](https://github.com/gardener/gardener-extension-provider-aws/pull/1504)]
- `[OPERATOR]` Support migration of shoots with duplicated zone entries from terraform to flow by @hebelsan [[#1496](https://github.com/gardener/gardener-extension-provider-aws/pull/1496)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix nil pointer dereference in getSubnetKey by @hebelsan [[#1516](https://github.com/gardener/gardener-extension-provider-aws/pull/1516)]
- `[OPERATOR]` Set EFS daemonset hostnetwork field true by @hebelsan [[#1530](https://github.com/gardener/gardener-extension-provider-aws/pull/1530)]
- `[OPERATOR]` Wait until NATGateway is available after update by @hebelsan [[#1512](https://github.com/gardener/gardener-extension-provider-aws/pull/1512)]

## 🏃 Others
- `[OPERATOR]` Remove cleanup for SeedLegacyCSISnapshotValidation by @hebelsan [[#1506](https://github.com/gardener/gardener-extension-provider-aws/pull/1506)]
- `[OPERATOR]` Remove code duplication for infra status creation by @hebelsan [[#1505](https://github.com/gardener/gardener-extension-provider-aws/pull/1505)]
- `[OPERATOR]` Update aws-ipam-controller to `v0.7.0`. by @DockToFuture [[#1485](https://github.com/gardener/gardener-extension-provider-aws/pull/1485)]
- `[OPERATOR]` Updated aws sdk, gardener-external-dns-management, ginkgo, golang/time and golang/tools library by @hebelsan [[#1511](https://github.com/gardener/gardener-extension-provider-aws/pull/1511)]
- `[OPERATOR]` Reduce AWS api calls for IPv6 or DualStack cluster by @hebelsan [[#1503](https://github.com/gardener/gardener-extension-provider-aws/pull/1503)]
- `[OPERATOR]` Deny dual-stack migration if overlay is not explicitly disabled. by @DockToFuture [[#1489](https://github.com/gardener/gardener-extension-provider-aws/pull/1489)]
- `[OPERATOR]` Update AWS CCM images by @hebelsan [[#1487](https://github.com/gardener/gardener-extension-provider-aws/pull/1487)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1498](https://github.com/gardener/gardener-extension-provider-aws/pull/1498)]
- `[OPERATOR]` Update EFS CSI driver image to v2.1.12 by @hebelsan [[#1486](https://github.com/gardener/gardener-extension-provider-aws/pull/1486)]
- `[OPERATOR]` The following fields in the `CloudProfile` have been renamed: `spec.ProviderConfig.MachineImages[].Versions[].capabilitySets` -> `spec.ProviderConfig.MachineImages[].Versions[].capabilityFlavors`  
  Please update your `CloudProfile`s accordingly if you are using capabilities (currently in alpha state). by @Roncossek [[#1480](https://github.com/gardener/gardener-extension-provider-aws/pull/1480)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v2.13.3 -> v2.13.4 (singleton)  
    - csi-driver: v1.47.0 -> v1.50.1 (singleton)  
    - csi-driver-efs: v2.1.12 -> v2.1.13 (singleton)  
    - csi-volume-modifier: v0.5.1 -> v0.7.0 (singleton)  
    - csi-attacher: v4.9.0 -> v4.10.0 (singleton)  
    - csi-node-driver-registrar: v2.14.0 -> v2.15.0 (singleton)  
    - csi-liveness-probe: v2.16.0 -> v2.17.0 (singleton) by @gardener-github-actions[bot] [[#1509](https://github.com/gardener/gardener-extension-provider-aws/pull/1509)]
- `[OPERATOR]` Update aws-custom-route-controller from version `v0.12.0` to `v0.13.0`. by @MartinWeindel [[#1502](https://github.com/gardener/gardener-extension-provider-aws/pull/1502)]
- `[OPERATOR]` Increase client-side QPS/burst for CSI-* components by @hendrikKahl [[#1514](https://github.com/gardener/gardener-extension-provider-aws/pull/1514)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.65.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.65.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.65.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.65.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.65.0`
