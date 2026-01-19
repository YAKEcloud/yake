# [github.com/gardener/gardener-extension-provider-alicloud:v1.68.1]

## 🐛 Bug Fixes
- `[OPERATOR]` The `github.com/gardener/gardener` dependency was bumped to `v1.134.2` to include a fix for an issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the `BackupEntry` Secret. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.2)). by @plkokanov [[#866](https://github.com/gardener/gardener-extension-provider-alicloud/pull/866)]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.68.1`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.68.1`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.68.1`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.68.1`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.68.1`
