# [github.com/gardener/gardener-extension-provider-openstack:v1.50.0]

## ✨ New Features
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to refer only to credentials of type `v1.Secret`. by @vpnachev [[#1150](https://github.com/gardener/gardener-extension-provider-openstack/pull/1150)]
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1174](https://github.com/gardener/gardener-extension-provider-openstack/pull/1174)]

## 🏃 Others
- `[OPERATOR]` Configure QPS + burst for CSI components by @hendrikKahl [[#1178](https://github.com/gardener/gardener-extension-provider-openstack/pull/1178)]
- `[OPERATOR]` Updated gardener to v1.128.3 by @hebelsan [[#1167](https://github.com/gardener/gardener-extension-provider-openstack/pull/1167)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.31.3 -> v1.31.4 (patch)  
    - cloud-controller-manager: v1.32.0 -> v1.32.1 (patch)  
    - cloud-controller-manager: v1.33.0 -> v1.33.1 (patch)  
    - csi-driver-cinder: v1.31.3 -> v1.31.4 (patch)  
    - csi-driver-cinder: v1.32.0 -> v1.32.1 (patch)  
    - csi-driver-cinder: v1.33.0 -> v1.33.1 (patch)  
    - csi-driver-manila: v1.31.3 -> v1.31.4 (patch)  
    - csi-driver-manila: v1.32.0 -> v1.32.1 (patch)  
    - csi-driver-manila: v1.33.0 -> v1.33.1 (patch)  
    - csi-driver-nfs: v4.11.0 -> v4.12.0 (singleton)  
    - csi-provisioner: v5.2.0 -> v5.3.0 (singleton)  
    - csi-attacher: v4.8.1 -> v4.10.0 (singleton)  
    - csi-snapshotter: v8.2.1 -> v8.3.0 (singleton)  
    - csi-snapshot-controller: v8.2.1 -> v8.3.0 (singleton)  
    - csi-resizer: v1.13.2 -> v1.14.0 (singleton)  
    - csi-node-driver-registrar: v2.13.0 -> v2.15.0 (singleton)  
    - csi-liveness-probe: v2.15.0 -> v2.17.0 (singleton) by @gardener-github-actions[bot] [[#1177](https://github.com/gardener/gardener-extension-provider-openstack/pull/1177)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1169](https://github.com/gardener/gardener-extension-provider-openstack/pull/1169)]
- `[OPERATOR]` Updated gophercloud/v2 to v2.8.0 by @hebelsan [[#1167](https://github.com/gardener/gardener-extension-provider-openstack/pull/1167)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.50.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.50.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.50.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.50.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.50.0`
