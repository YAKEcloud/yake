# [github.com/gardener/gardener-extension-provider-gcp:v1.46.1]

## ✨ New Features
- `[DEVELOPER]` Add GH Workflow to auto-update images in `imagevector/images.yaml` and create a corresponding PR. by @wpross [[#1199](https://github.com/gardener/gardener-extension-provider-gcp/pull/1199)]
- `[OPERATOR]` Admission controller now allows `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` to use credentials of either `v1.Secret` or `security.gardener.cloud/v1alpha1.WorkloadIdentity` by @vpnachev [[#1163](https://github.com/gardener/gardener-extension-provider-gcp/pull/1163)]

## 🐛 Bug Fixes
- `[OPERATOR]` Bug in the backupentry controller not properly setting the Workload Identity token mount dirpath in the credentials configuration file for source BackupEntries has been fixed. by @vpnachev [[#1213](https://github.com/gardener/gardener-extension-provider-gcp/pull/1213)]

## 🏃 Others
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#1193](https://github.com/gardener/gardener-extension-provider-gcp/pull/1193)]
- `[USER]` `google-guest-agent` is configured to not add a route for alias IPs now. This fixes dual-stack clusters with Cilium. by @axel7born [[#1197](https://github.com/gardener/gardener-extension-provider-gcp/pull/1197)]
- `[OPERATOR]` Configure kube-apiserver QPS + burst for CSI components by @hendrikKahl [[#1203](https://github.com/gardener/gardener-extension-provider-gcp/pull/1203)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.46.1`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.46.1`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.46.1`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.46.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.46.1`
