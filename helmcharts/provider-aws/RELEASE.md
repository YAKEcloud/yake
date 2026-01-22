# [github.com/gardener/gardener-extension-provider-aws:v1.67.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` `provider-aws` no longer supports Shoots with Кubernetes version <= 1.29. by @tobschli [[#1591](https://github.com/gardener/gardener-extension-provider-aws/pull/1591)]
- `[OPERATOR]` Following the renaming based on [PR13273](https://github.com/gardener/gardener/pull/13273), **autonomous shoot cluster** was renamed to **self hosted shoot cluster**. This leads to e.g. a change of the `/gardener-extension-provider-aws`'s cli argument `--autonomous-shoot-cluster` to change to `--self-hosted-shoot-cluster` and the respective helm chart's variable `.Values.gardener.autonomousShootCluster` to change to `.Values.gardener.selfHostedShootCluster`. by @tobschli [[#1591](https://github.com/gardener/gardener-extension-provider-aws/pull/1591)]
- `[OPERATOR]` ETCD backup config in the provider-chart no longer requires an additional `backup` yaml-level to render as expected by @AndreasBurger [[#1623](https://github.com/gardener/gardener-extension-provider-aws/pull/1623)]

## 📰 Noteworthy
- `[OPERATOR]` Update credential provider ECR patterns by @hebelsan [[#1602](https://github.com/gardener/gardener-extension-provider-aws/pull/1602)]

## ✨ New Features
- `[OPERATOR]` The `Worker` controller is prepared to support self-hosted shoot clusters with managed infrastructure (see [GEP-28](https://github.com/gardener/gardener/blob/master/docs/proposals/28-self-hosted-shoot-clusters.md#managed-infrastructure)). by @timebertt [[#1581](https://github.com/gardener/gardener-extension-provider-aws/pull/1581)]
- `[USER]` It's possible to specify an own IPv6 IPAM pool now. by @axel7born [[#1573](https://github.com/gardener/gardener-extension-provider-aws/pull/1573)]
- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.34. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) before upgrading to 1.34. by @tobschli [[#1591](https://github.com/gardener/gardener-extension-provider-aws/pull/1591)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix cluster deletion if EFS can not be found by @hebelsan [[#1593](https://github.com/gardener/gardener-extension-provider-aws/pull/1593)]
- `[OPERATOR]` no rollout hot-update of ProviderConfig.NodeTemplate.VirtualCapacity with/without already existing ProviderConfig.  
  new hash strategy adopted for ProviderConfig for k8s versions >= 1.34 by @elankath [[#1589](https://github.com/gardener/gardener-extension-provider-aws/pull/1589)]
- `[OPERATOR]` Downgrade csi-provisioner and csi-resizer for K8S <= 1.33 to make VolumeAttributesClass available for K8S <= 1.33 (v1beta1 + enabled featureGate) and K8S >= 1.34 (v1). by @wpross [[#1609](https://github.com/gardener/gardener-extension-provider-aws/pull/1609)]
- `[OPERATOR]` Fixed issue when validating a backupBucket without providerConfig. by @wpross [[#1633](https://github.com/gardener/gardener-extension-provider-aws/pull/1633)]
- `[OPERATOR]` A bug leading to nil pointer exception in the Route53 client when Workload Identity credentials are used has been fixed. by @vpnachev [[#1629](https://github.com/gardener/gardener-extension-provider-aws/pull/1629)]

## 🏃 Others
- `[OPERATOR]` Add the ipAddressType to VPC Gateway Endpoints by @hebelsan [[#1611](https://github.com/gardener/gardener-extension-provider-aws/pull/1611)]
- `[OPERATOR]` Set --strict-topology for the external provisioner of the EBS CSI Driver. by @hebelsan [[#1607](https://github.com/gardener/gardener-extension-provider-aws/pull/1607)]
- `[OPERATOR]` Switch VPAs to control memory only by @voelzmo [[#1585](https://github.com/gardener/gardener-extension-provider-aws/pull/1585)]
- `[OPERATOR]` Improve routing table association management by @hebelsan [[#1636](https://github.com/gardener/gardener-extension-provider-aws/pull/1636)]
- `[OPERATOR]` Update aws-custom-route-controller image tag to `v0.14.0`. by @DockToFuture [[#1587](https://github.com/gardener/gardener-extension-provider-aws/pull/1587)]
- `[OPERATOR]` Add input validation for DNS provider secrets referenced in the shoot spec. by @wpross [[#1612](https://github.com/gardener/gardener-extension-provider-aws/pull/1612)]
- `[OPERATOR]` Update alpine to v3.32.2 by @kon-angelo [[#1620](https://github.com/gardener/gardener-extension-provider-aws/pull/1620)]
- `[OPERATOR]` Move back to `public.ecr.aws` registry for `aws-load-balancer-controller` and `volume-modifier-for-k8s` as it is now reachable via AAAA record. by @DockToFuture [[#1597](https://github.com/gardener/gardener-extension-provider-aws/pull/1597)]
- `[OPERATOR]` Update AWS SDK to support EUSC region by @kon-angelo [[#1618](https://github.com/gardener/gardener-extension-provider-aws/pull/1618)]
- `[OPERATOR]` Introduce automated conversions for `NamespacedCloudProfile.status.spec.{machineTypes,machineImages,providerConfig}` to ensure consistency and compatibility during the transition to CloudProfiles with enabled `machineCapabilities`, see also [GEP-33](https://github.com/gardener/gardener/blob/master/docs/proposals/33-machine-image-capabilities.md). by @Roncossek [[#1515](https://github.com/gardener/gardener-extension-provider-aws/pull/1515)]
- `[OPERATOR]` Update `aws-ipam-controller` image to `europe-docker.pkg.dev/gardener-project/releases/gardener/aws-ipam-controller:v0.9.0`. by @DockToFuture [[#1627](https://github.com/gardener/gardener-extension-provider-aws/pull/1627)]
- `[OPERATOR]` Upgrade csi-provisioner for K8S version >= 1.34 to v6.1.0. by @wpross [[#1609](https://github.com/gardener/gardener-extension-provider-aws/pull/1609)]
- `[OPERATOR]` Extension-provider logging config can now be changed via helm-values by @AndreasBurger [[#1623](https://github.com/gardener/gardener-extension-provider-aws/pull/1623)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v2.13.4 -> v2.17.1 (singleton)  
    - cloud-controller-manager: v1.30.9 -> v1.30.10 (patch)  
    - cloud-controller-manager: v1.31.8 -> v1.31.9 (patch)  
    - cloud-controller-manager: v1.34.0 -> v1.35.0 (minor)  
    - csi-driver: v1.52.1 -> v1.54.0 (singleton)  
    - csi-driver-efs: v2.1.14 -> v2.2.0 (singleton)  
    - csi-volume-modifier: v0.7.0 -> v0.9.1 (singleton)  
    - machine-controller-manager-provider-aws: v0.26.0 -> v0.27.0 (singleton) by @gardener-github-actions[bot] [[#1562](https://github.com/gardener/gardener-extension-provider-aws/pull/1562)]
- `[DEPENDENCY]` Updated dependency `gardener/gardener` to `v1.134.0` ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.0)). by @marc1404 [[#1603](https://github.com/gardener/gardener-extension-provider-aws/pull/1603)]
- `[DEPENDENCY]` The following container images have been updated:  
    - machine-controller-manager-provider-aws: v0.27.0 -> v0.27.1 (singleton) by @AndreasBurger [[#1655](https://github.com/gardener/gardener-extension-provider-aws/pull/1655)]
- `[DEPENDENCY]` The following container images have been updated:  
    - ecr-credential-provider: v1.34.0 -> v1.34.1 (patch) by @gardener-github-actions[bot] [[#1646](https://github.com/gardener/gardener-extension-provider-aws/pull/1646)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.67.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.67.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.67.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.67.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.67.0`
