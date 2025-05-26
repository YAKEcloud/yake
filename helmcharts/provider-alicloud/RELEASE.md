# [gardener/gardener-extension-provider-alicloud]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug was fixed which caused `BackupBucket`s to fail in reconciliation when the referenced secret did not contain a `credentialsFile` field. by @ialidzhikov [#789]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.61.1`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.61.1`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.61.1`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.61.1`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.61.1`
