# [github.com/gardener/gardener-extension-provider-openstack:v1.58.0]

## ✨ New Features
- `[OPERATOR]` Enable security group management for OVN load balancers so that Kubernetes loadBalancerSourceRanges are enforced out of the box. by @Lappihuan [[#1398](https://github.com/gardener/gardener-extension-provider-openstack/pull/1398)]
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.36.  
  You should consider the Kubernetes release notes before upgrading to 1.36. by @tobschli [[#1390](https://github.com/gardener/gardener-extension-provider-openstack/pull/1390)]
- `[USER]` OpenStack Shoot clusters can now configure `cloudControllerManager.internalLoadBalancer` in their `ControlPlaneConfig`. When enabled, all Services of type `LoadBalancer` are provisioned as internal load balancers without floating IPs. by @stblatzheim [[#1417](https://github.com/gardener/gardener-extension-provider-openstack/pull/1417)]

## 🐛 Bug Fixes
- `[OPERATOR]` fix gardenctl ssh floating ip attachment by @modzilla99 [[#1411](https://github.com/gardener/gardener-extension-provider-openstack/pull/1411)]
- `[OPERATOR]` Don't read bastion floating IP from Nova server addresses by @hebelsan [[#1419](https://github.com/gardener/gardener-extension-provider-openstack/pull/1419)]

## 🏃 Others
- `[OPERATOR]` The update mode of the VerticalPodAutoscaler resource, deployed by gardener-extension-provider-openstack,  is now explicitly set to `InPlaceOrRecreate`, reflecting the actual runtime behavior after the unconditional enablement of the `VPAInPlaceUpdates` feature gate. by @Velin-Todorov [[#1397](https://github.com/gardener/gardener-extension-provider-openstack/pull/1397)]
- `[OPERATOR]` Add support for machine preservation by distributing the value of `worker[].machineControllerManager.autoPreserveFailedMachineMax` across zones. by @thiyyakat [[#1409](https://github.com/gardener/gardener-extension-provider-openstack/pull/1409)]
- `[OPERATOR]` Controller only registers for the extension classes it actually handles by @hebelsan [[#1424](https://github.com/gardener/gardener-extension-provider-openstack/pull/1424)]

## application/spdx+json
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:a9f8041567e5af18f1f1888bce0694b3e3ccd26ff14a56d842752a53a3b6eccf`
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:e7deff34119c2da230131aca3c73798f02313e03fdc11545e4cca61940b4afef`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:9b73aedad0f49f4cba09ca45395614f9437bb20af3579f3a5a40cfc2de434598`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:f9a6f997717efce3437396454ac160f12ff5e9b8448020b931a4ae19c066abbe`
## application/vnd.cyclonedx+json
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:42feb5be4811258a286670c35ee94cbdcc50453f7ffdd7af8a5a6b6197b36f66`
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:9e531c16d0e56167067b4c69f46b17290f4eada8877901c35298519b75b7cf61`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:6a222fe02cbbab76c384eb53dd3903932f41f52c19d67f1506be06e309471c54`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:8bceb8a2249ee938f2ac404799bbe3bd0819f5968a380b6ce3561490bf130bc0`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.58.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.58.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.58.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.58.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.58.0`
