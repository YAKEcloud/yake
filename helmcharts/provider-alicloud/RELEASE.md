# [github.com/gardener/gardener-extension-provider-alicloud:v1.65.0]

## 📰 Noteworthy
- `[OPERATOR]` Added support for immutable backup buckets in the Alicloud provider extension. Operators can configure immutability settings. Please refer to this doc: https://github.com/gardener/gardener-extension-provider-alicloud/blob/master/docs/usage/usage.md#BackupBucket by @ishan16696 [[#825](https://github.com/gardener/gardener-extension-provider-alicloud/pull/825)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug preventing all obsolete machine-controller-manager ClusterRoles and ClusterRoleBindings to be deleted on extension startup has been fixed. by @georgibaltiev [[#823](https://github.com/gardener/gardener-extension-provider-alicloud/pull/823)]

## 🏃 Others
- `[OPERATOR]` Upgrade gardener dependency to v1.123.1 by @theoddora [[#821](https://github.com/gardener/gardener-extension-provider-alicloud/pull/821)]
- `[OPERATOR]` Flow-base now supports zone CIDR named with worker ,  and enable migrate from worker to workers by @kevin-lacoo [[#836](https://github.com/gardener/gardener-extension-provider-alicloud/pull/836)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at `[example/extension.yaml](https://github.com/gardener/gardener-extension-provider-alicloud/blob/master/example/extension.yaml)` by @timuthy [[#833](https://github.com/gardener/gardener-extension-provider-alicloud/pull/833)]
- `[DEVELOPER]` disable upgrade-pullrequest-workflow for forks by @ccwienk [[#822](https://github.com/gardener/gardener-extension-provider-alicloud/pull/822)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#827](https://github.com/gardener/gardener-extension-provider-alicloud/pull/827)]
- `[OPERATOR]` Reverting the fix of creation of OSS backup-bucket with redundancy set to `ZRS` to `LRS` as some region doesn't support the ZRS. by @ishan16696 [[#826](https://github.com/gardener/gardener-extension-provider-alicloud/pull/826)]


## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.65.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.65.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.65.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.65.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.65.0`
