# [github.com/gardener/gardener-extension-provider-openstack:v1.52.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ETCD backup config in the provider-chart no longer requires an additional `backup` yaml-level to render as expected by @AndreasBurger [[#1234](https://github.com/gardener/gardener-extension-provider-openstack/pull/1234)]
- `[OPERATOR]` Following the renaming based on [PR13273](https://github.com/gardener/gardener/pull/13273), **autonomous shoot cluster** was renamed to **self hosted shoot cluster**. This leads to e.g. a change of the `/gardener-extension-provider-azure`'s cli argument `--autonomous-shoot-cluster` to change to `--self-hosted-shoot-cluster` and the respective helm chart's variable `.Values.gardener.autonomousShootCluster` to change to `.Values.gardener.selfHostedShootCluster`. by @tobschli [[#1210](https://github.com/gardener/gardener-extension-provider-openstack/pull/1210)]
- `[OPERATOR]` `provider-openstack` no longer supports Shoots with Кubernetes version <= 1.29. by @marc1404 [[#1226](https://github.com/gardener/gardener-extension-provider-openstack/pull/1226)]

## ✨ New Features
- `[OPERATOR]` Implements Machine Image Capabilities support for OpenStack, enabling better compatibility management between MachineTypes and MachineImages through CapabilitySets. by @Vincinator [[#1222](https://github.com/gardener/gardener-extension-provider-openstack/pull/1222)]
- `[OPERATOR]` The `Worker` controller is prepared to support self-hosted shoot clusters with managed infrastructure (see [GEP-28](https://github.com/gardener/gardener/blob/master/docs/proposals/28-self-hosted-shoot-clusters.md#managed-infrastructure)). by @timebertt [[#1211](https://github.com/gardener/gardener-extension-provider-openstack/pull/1211)]
- `[USER]` The provider-openstack extension does now support shoot clusters with Kubernetes version 1.34. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) before upgrading to 1.34. by @tobschli [[#1210](https://github.com/gardener/gardener-extension-provider-openstack/pull/1210)]

## 🐛 Bug Fixes
- `[OPERATOR]` Downgrade csi-provisioner and csi-resizer for K8S <= 1.33 to make VolumeAttributesClass available for K8S <= 1.33 (v1beta1 + enabled featureGate) and K8S >= 1.34 (v1). by @wpross [[#1232](https://github.com/gardener/gardener-extension-provider-openstack/pull/1232)]

## 🏃 Others
- `[OPERATOR]` Upgrade csi-provisioner for K8S version >= 1.34 to v6.1.0. by @wpross [[#1232](https://github.com/gardener/gardener-extension-provider-openstack/pull/1232)]
- `[OPERATOR]` Update gardener/gardener to v1.133.0 by @hebelsan [[#1224](https://github.com/gardener/gardener-extension-provider-openstack/pull/1224)]
- `[OPERATOR]` Adds DNS Record integration tests by @hebelsan [[#1205](https://github.com/gardener/gardener-extension-provider-openstack/pull/1205)]
- `[OPERATOR]` Set --strict-topology for the external provisioner of the Cinder CSI controller. by @hebelsan [[#1230](https://github.com/gardener/gardener-extension-provider-openstack/pull/1230)]
- `[OPERATOR]` Remove CPU requests for openstack-extension components in Shoot and Seed. by @voelzmo [[#1215](https://github.com/gardener/gardener-extension-provider-openstack/pull/1215)]
- `[OPERATOR]` Extension-provider logging config can now be changed via helm-values by @AndreasBurger [[#1234](https://github.com/gardener/gardener-extension-provider-openstack/pull/1234)]
- `[DEPENDENCY]` Updated dependency `gardener/gardener` to `v1.134.0` ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.0)). by @marc1404 [[#1226](https://github.com/gardener/gardener-extension-provider-openstack/pull/1226)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.52.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.52.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.52.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.52.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.52.0`
