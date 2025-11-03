# [github.com/gardener/gardener-extension-provider-alicloud:v1.66.0]

## ✨ New Features
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to refer only to credentials of type `v1.Secret`. by @vpnachev [[#837](https://github.com/gardener/gardener-extension-provider-alicloud/pull/837)]

## 🏃 Others
- `[OPERATOR]` Configure kube-apiserver QPS + burst for CSI components by @hendrikKahl [[#843](https://github.com/gardener/gardener-extension-provider-alicloud/pull/843)]
- `[OPERATOR]` Include error protection when deleting a vSwitch during reconciliation. To prevent this error, you can annotate the infrastructure with alicloud.provider.extensions.gardener.cloud/flow-reconcile-can-delete-resource=true by @kevin-lacoo [[#845](https://github.com/gardener/gardener-extension-provider-alicloud/pull/845)]
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#841](https://github.com/gardener/gardener-extension-provider-alicloud/pull/841)]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.66.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.66.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.66.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.66.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.66.0`
