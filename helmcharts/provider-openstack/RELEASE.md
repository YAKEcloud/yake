# [github.com/gardener/gardener-extension-provider-openstack:v1.54.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Behavioral change: rootDiskType and rootDiskSize now derived from cloud profile machine type storage.  
  Previously, if a worker pool did not explicitly configure volume.type / volume.size, the generated MachineClass omitted rootDiskType and rootDiskSize entirely, leaving the choice to OpenStack's infrastructure defaults.  
  With this change, if the cloud profile's MachineType.Storage defines a type (other than "default") and optionally a storageSize, those values are now used as defaults in the generated MachineClass.  
  Impact: Shoots using machine types whose cloud profile entry has a non-"default" Storage.Type will now have an explicit rootDiskType (and potentially rootDiskSize) set in their MachineClass. If this differs from the OpenStack infrastructure's previous default, the root disk type of newly created nodes will change.  
  Action required: Review the Storage field on machine types in affected cloud profiles. If the Storage.Type was set for informational purposes only and should not influence disk provisioning, set it to "default" to preserve the previous behavior. by @hebelsan [[#1317](https://github.com/gardener/gardener-extension-provider-openstack/pull/1317)]

## 📰 Noteworthy
- `[OPERATOR]` The etcd StorageClass provisioner has been switched from the deprecated in-tree `kubernetes.io/cinder` to the OpenStack CSI driver `cinder.csi.openstack.org`. by @voelzmo [[#1312](https://github.com/gardener/gardener-extension-provider-openstack/pull/1312)]

## 🏃 Others
- `[OPERATOR]` Update gardener to v1.139.0 by @hebelsan [[#1299](https://github.com/gardener/gardener-extension-provider-openstack/pull/1299)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-provisioner: v6.1.1 -> v6.2.0 (minor)  
    - machine-controller-manager-provider-openstack: v0.25.0 -> v0.26.0 (singleton) by @federated-github-access[bot] [[#1290](https://github.com/gardener/gardener-extension-provider-openstack/pull/1290)]

## application/spdx+json
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:7ede51723b3d26286cd3bb9069ebd03374bebd50a5ef03872a7bc2313139263a`
- gardener-extension-admission-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack@sha256:8b064e514b3467e48f3b45acc1e3beb64f085977d88dc46974aeff8aa9b9fe67`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:830feef79a00632ac4b4278679e21147f933b9a1e1a3a7e06ac3bfdd61714a7e`
- gardener-extension-provider-openstack-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack@sha256:9f829611bbb5317f097d0bf88a4d86a236f8101809a7796575733924fc549a2c`
## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.54.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.54.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.54.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.54.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.54.0`
