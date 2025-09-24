# [github.com/gardener/gardener-extension-provider-gcp:v1.46.0]

## ✨ New Features
- `[OPERATOR]` This extension now supports `WorkloadIdentity`s as credentials for etcd backup. by @vpnachev [[#1151](https://github.com/gardener/gardener-extension-provider-gcp/pull/1151)]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug in the `admission-gcp` component, which was causing a nil-pointer exception in case a new in-place worker is added, is now fixed. by @shafeeqes [[#1169](https://github.com/gardener/gardener-extension-provider-gcp/pull/1169)]
- `[OPERATOR]` A bug preventing all obsolete machine-controller-manager ClusterRoles and ClusterRoleBindings to be deleted on extension startup has been fixed. by @georgibaltiev [[#1137](https://github.com/gardener/gardener-extension-provider-gcp/pull/1137)]

## 🏃 Others
- `[OPERATOR]` Remove unused terraformer image by @kon-angelo [[#1181](https://github.com/gardener/gardener-extension-provider-gcp/pull/1181)]
- `[OPERATOR]` Update GHA for new release options by @kon-angelo [[#1131](https://github.com/gardener/gardener-extension-provider-gcp/pull/1131)]
- `[OPERATOR]` Update RBAC for extensions running in the runtime cluster. by @kon-angelo [[#1155](https://github.com/gardener/gardener-extension-provider-gcp/pull/1155)]
- `[OPERATOR]` Upgrade gardener dependency to v1.122.1 by @plkokanov [[#1122](https://github.com/gardener/gardener-extension-provider-gcp/pull/1122)]
- `[OPERATOR]` `provider-gcp` no longer supports Shoots with Кubernetes version <= 1.28. by @georgibaltiev [[#1123](https://github.com/gardener/gardener-extension-provider-gcp/pull/1123)]
- `[OPERATOR]` Improve user input validation for provider related fields. by @kon-angelo [[#1173](https://github.com/gardener/gardener-extension-provider-gcp/pull/1173)]
- `[OPERATOR]` Upgrade gardener/gardener to v1.125.0 by @hebelsan [[#1142](https://github.com/gardener/gardener-extension-provider-gcp/pull/1142)]
- `[OPERATOR]` Upgrade gardener dependency to v1.123.1 by @theoddora [[#1132](https://github.com/gardener/gardener-extension-provider-gcp/pull/1132)]
- `[OPERATOR]` Deprecate obsolete role, rolebinding and serviceaccounts from terraformer by @kon-angelo [[#1136](https://github.com/gardener/gardener-extension-provider-gcp/pull/1136)]
- `[DEVELOPER]` migrate CICD-Pipeline to GitHub-Actions by @ccwienk [[#1121](https://github.com/gardener/gardener-extension-provider-gcp/pull/1121)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-provider-gcp/blob/master/example/extension.yaml) by @timuthy [[#1154](https://github.com/gardener/gardener-extension-provider-gcp/pull/1154)]
- `[OPERATOR]` Update csi driver filestore image from v1.10.1 to v1.11.0 by @hebelsan [[#1124](https://github.com/gardener/gardener-extension-provider-gcp/pull/1124)]
- `[OPERATOR]` Add missing securityContext controls in order to comply with the restricted Pod Security Standards policy. by @mstueer [[#1165](https://github.com/gardener/gardener-extension-provider-gcp/pull/1165)]
- `[OPERATOR]` Increase node controller workers for cloud-controller-manager by @kon-angelo [[#1138](https://github.com/gardener/gardener-extension-provider-gcp/pull/1138)]
- `[OPERATOR]` Update gardener/gardener to v1.127.1 by @hebelsan [[#1172](https://github.com/gardener/gardener-extension-provider-gcp/pull/1172)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.46.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.46.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.46.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.46.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.46.0`
