# [github.com/gardener/gardener-extension-provider-openstack:v1.56.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Filter subnet DNS servers from CloudProfile by IP family in reconcile logic by @hebelsan [[#1347](https://github.com/gardener/gardener-extension-provider-openstack/pull/1347)]
- `[OPERATOR]` VPA for the extension pod now also controls CPU requests in addition to memory. The VPA container policy also explicitly disables autoscaling for any non-main containers following Gardener best practices. by @voelzmo [[#1341](https://github.com/gardener/gardener-extension-provider-openstack/pull/1341)]
- `[OPERATOR]` Add credentials validation to support InternalSecret type by @hebelsan [[#1359](https://github.com/gardener/gardener-extension-provider-openstack/pull/1359)]
- `[OPERATOR]` Enables the use of `spec.dns.providers[].credentialsRef` and thus enables to upgrade to k8s version `v1.135` where spec.dns.providers[].secretName is not allowed anymore. by @wpross [[#1357](https://github.com/gardener/gardener-extension-provider-openstack/pull/1357)]
- `[OPERATOR]` Fix CSI manila share client value race condition in control plane reconciliation by @hebelsan [[#1351](https://github.com/gardener/gardener-extension-provider-openstack/pull/1351)]
- `[OPERATOR]` Fix a nil pointer dereference panic in the worker controller that could prevent reconciliation or deletion of workers whose `providerStatus.machineImages` was empty and whose referenced machine image was missing from the CloudProfile. by @Roncossek [[#1352](https://github.com/gardener/gardener-extension-provider-openstack/pull/1352)]

## 🏃 Others
- `[OPERATOR]` Added securityContext attributes to comply with the Pod Security Standards `restricted` level by @relusc [[#1360](https://github.com/gardener/gardener-extension-provider-openstack/pull/1360)]
- `[DEVELOPER]` Migrate test mock clients to fakeclient following https://github.com/gardener/gardener/pull/14799 by @wpross [[#1367](https://github.com/gardener/gardener-extension-provider-openstack/pull/1367)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-provisioner: v6.2.0 -> v6.3.0 (singleton)  
    - csi-resizer: v2.1.0 -> v2.2.0 (singleton)  
    - csi-snapshot-controller: v8.5.0 -> v8.6.0 (singleton)  
    - csi-snapshotter: v8.5.0 -> v8.6.0 (singleton) by @federated-github-access[bot] [[#1369](https://github.com/gardener/gardener-extension-provider-openstack/pull/1369)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-attacher: v4.11.0 -> v4.12.0 (singleton)  
    - csi-liveness-probe: v2.18.0 -> v2.19.0 (singleton)  
    - csi-node-driver-registrar: v2.16.0 -> v2.17.0 (singleton)  
    - machine-controller-manager-provider-openstack: v0.26.0 -> v0.27.0 (singleton) by @federated-github-access[bot] [[#1345](https://github.com/gardener/gardener-extension-provider-openstack/pull/1345)]

## application/spdx+json
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:7c8fcd8b41dcfa82eaa3f7abeb809dcb91357ed03c7dbcfe00f3df8f8538e5aa`
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:811fa1d7fe9707b349a8a821e64167a626002012c8a375de931e17d8b7bd59e6`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:324bc3923c88a142cace00f6074269c4ef54d84b698b004e0acf72b47d1dede3`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:fdda8c7d3472ce2c6846f9000d98ee77551f32b0ca45933f53de3ea2c853caf6`
## application/vnd.cyclonedx+json
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:98ae00aa636257297b16593216a311976edd1239371fb2fa19ca05509cd28682`
- gardener-extension-admission-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:a0d845fc9ab2c82f268d4d7243975d8cbbc5653da03b84ad93ef2f41fecd7d61`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:a05b9b65d4fa8a1bb4d8ecdc0506e3a92b35052094069409fc5855f454bd38e0`
- gardener-extension-provider-openstack-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:c0d17beabbc31f79eff6e5924bb32e3f02a8b1c7c178b2069d2afc2b45d3a9cb`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.56.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.56.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.56.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.56.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.56.0`
