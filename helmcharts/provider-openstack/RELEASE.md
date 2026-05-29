# [github.com/gardener/gardener-extension-provider-openstack:v1.55.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#1331](https://github.com/gardener/gardener-extension-provider-openstack/pull/1331)]

## ✨ New Features
- `[OPERATOR]` Allow mixed format machine images in CloudProfiles: old format (regions with architecture) and new format (capabilityFlavors) can coexist per image version. by @Roncossek [[#1333](https://github.com/gardener/gardener-extension-provider-openstack/pull/1333)]
- `[OPERATOR]` support for additional security groups in worker configuration by @hebelsan [[#1327](https://github.com/gardener/gardener-extension-provider-openstack/pull/1327)]

## 🏃 Others
- `[OPERATOR]` Enables the backupentry controller in the runtime cluster by @hebelsan [[#1337](https://github.com/gardener/gardener-extension-provider-openstack/pull/1337)]
- `[OPERATOR]` support OpenStack subnet pools for automatic CIDR allocation by @hebelsan [[#1326](https://github.com/gardener/gardener-extension-provider-openstack/pull/1326)]
- `[OPERATOR]` Add managed default VolumeSnapshotClass for Cinder by @hebelsan [[#1319](https://github.com/gardener/gardener-extension-provider-openstack/pull/1319)]
- `[OPERATOR]` Add dual-stack (IPv4/IPv6) networking support for OpenStack shoots. Configure `subnetPoolID` in InfrastructureConfig to allocate IPv6 subnets for nodes, pods, and services. by @axel7born [[#1257](https://github.com/gardener/gardener-extension-provider-openstack/pull/1257)]
- `[OPERATOR]` Update gardener/gardener to v1.142.0 by @hebelsan [[#1336](https://github.com/gardener/gardener-extension-provider-openstack/pull/1336)]
- `[DEVELOPER]` Enhance Makefile to easily deploy to a remote cluster. by @matthias-horne [[#1325](https://github.com/gardener/gardener-extension-provider-openstack/pull/1325)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-driver-nfs: v4.13.1 -> v4.13.2 (singleton) by @federated-github-access[bot] [[#1322](https://github.com/gardener/gardener-extension-provider-openstack/pull/1322)]

## application/spdx+json
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:b2df346ab7b83f39757c34e409220b42e6c4bb09bca017f42b523aac8f870fcc`
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:d93e46f5ce36a7324b8cf29526882b625bb862c3e1cdb2159c0ca4489f11bd73`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:b78f40513df0349fba8a8093e005a57318f73d717774d449adc1efb90bd51e11`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:c235822a89f3ed88c827a59623a0e16c67b41398545c06efb9cb86d495a68cb0`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.55.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.55.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.55.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.55.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.55.0`
