# [github.com/gardener/gardener-extension-provider-openstack:v1.51.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Deprecate usage of terraformer reconciler. Existing infrastructure objects that have yet to be migrated, will be reconciled with the flow reconciler instead. by @kon-angelo [[#1166](https://github.com/gardener/gardener-extension-provider-openstack/pull/1166)]
- `[OPERATOR]` Remove use-octavia field uses from the cloudprofile and CCM charts. Operators must update their `cloudprofiles` if they still use the field. by @kon-angelo [[#1179](https://github.com/gardener/gardener-extension-provider-openstack/pull/1179)]

## 🏃 Others
- `[OPERATOR]` Updated gardener/etcd-druid gardener/gardener gardener/machine-controller-manager ginkgo go tools k8s.io/utils by @wpross [[#1198](https://github.com/gardener/gardener-extension-provider-openstack/pull/1198)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-driver-cinder: v1.33.1 -> v1.34.1 (minor)  
    - csi-driver-manila: v1.33.1 -> v1.34.1 (minor)  
    - csi-driver-nfs: v4.12.0 -> v4.12.1 (singleton)  
    - csi-provisioner: v5.3.0 -> v6.0.0 (singleton)  
    - csi-resizer: v1.14.0 -> v2.0.0 (singleton)  
    - csi-snapshot-controller: v8.3.0 -> v8.4.0 (singleton)  
    - csi-snapshotter: v8.3.0 -> v8.4.0 (singleton) by @gardener-github-actions[bot] [[#1183](https://github.com/gardener/gardener-extension-provider-openstack/pull/1183)]
- `[OPERATOR]` Update min go version in go.mod to 1.25 by @hebelsan [[#1203](https://github.com/gardener/gardener-extension-provider-openstack/pull/1203)]
- `[OPERATOR]` Fix an issue preventing OpenStack installations without manila endpoints. Flow reconciler will now do lazy instantiation of the manila client. by @kon-angelo [[#1181](https://github.com/gardener/gardener-extension-provider-openstack/pull/1181)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.51.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.51.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.51.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.51.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.51.0`
