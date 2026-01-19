# [github.com/gardener/gardener-extension-provider-gcp:v1.48.3]

## ✨ New Features
- `[USER]` Update `VolumeAttributesClass` enablement for clusters <= `v1.34`. If annotated the kube-apiserver, kube-scheduler, kube-controller-manager will get the VAC feature gate enabled automatically. by @kon-angelo [[#1289](https://github.com/gardener/gardener-extension-provider-gcp/pull/1289)]

## 🐛 Bug Fixes
- `[OPERATOR]` The `github.com/gardener/gardener` dependency was bumped to `v1.132.4` to include a fix for an issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the `BackupEntry` Secret. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#1288](https://github.com/gardener/gardener-extension-provider-gcp/pull/1288)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.48.3`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.48.3`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.48.3`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.48.3`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.48.3`
