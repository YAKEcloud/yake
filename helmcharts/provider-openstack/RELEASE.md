# [github.com/gardener/gardener-extension-provider-openstack:v1.49.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Update the defaults for the infrastructure controller. Unless opted out per shoot or per seed, the infrastructure controller will now by default reconcile using the flow implementation. In future release v1.50.0 we will disable reconciliation via terraform. by @kon-angelo [[#1114](https://github.com/gardener/gardener-extension-provider-openstack/pull/1114)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug preventing all obsolete machine-controller-manager ClusterRoles and ClusterRoleBindings to be deleted on extension startup has been fixed. by @georgibaltiev [[#1116](https://github.com/gardener/gardener-extension-provider-openstack/pull/1116)]

## 🏃 Others
- `[OPERATOR]` Remove deprecated storage class nfs-constraint-<zone> for manila-csi-driver by @hebelsan [[#1131](https://github.com/gardener/gardener-extension-provider-openstack/pull/1131)]
- `[OPERATOR]` `provider-openstack` no longer supports Shoots with Кubernetes version <= 1.28. by @RadaBDimitrova [[#1101](https://github.com/gardener/gardener-extension-provider-openstack/pull/1101)]
- `[OPERATOR]` Update non-gardener dependencies & gardener/gardener to v1.125.1 by @hebelsan [[#1127](https://github.com/gardener/gardener-extension-provider-openstack/pull/1127)]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#1090](https://github.com/gardener/gardener-extension-provider-openstack/pull/1090)]
- `[OPERATOR]` Upgrade gardener dependency to v1.123.1 by @theoddora [[#1113](https://github.com/gardener/gardener-extension-provider-openstack/pull/1113)]
- `[OPERATOR]` Upgrade gardener dependency to v1.122.1 by @plkokanov [[#1100](https://github.com/gardener/gardener-extension-provider-openstack/pull/1100)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#1107](https://github.com/gardener/gardener-extension-provider-openstack/pull/1107)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-provider-openstack/blob/master/example/extension.yaml) by @timuthy [[#1136](https://github.com/gardener/gardener-extension-provider-openstack/pull/1136)]
- `[DEVELOPER]` Separate bastion reconcile and delete options by @hebelsan [[#1108](https://github.com/gardener/gardener-extension-provider-openstack/pull/1108)]
- `[OPERATOR]` Add shoot input validation by @kon-angelo [[#1155](https://github.com/gardener/gardener-extension-provider-openstack/pull/1155)]
- `[OPERATOR]` Update RBAC for extensions running in the runtime cluster. by @hebelsan [[#1139](https://github.com/gardener/gardener-extension-provider-openstack/pull/1139)]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.49.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.49.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.49.0`
## Container (OCI) Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.49.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.49.0`
