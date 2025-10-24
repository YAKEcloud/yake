# [github.com/gardener/gardener-extension-provider-gcp:v1.46.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Bug in the backupentry controller not properly setting the Workload Identity token mount dirpath in the credentials configuration file for source BackupEntries has been fixed. by @vpnachev [[#1213](https://github.com/gardener/gardener-extension-provider-gcp/pull/1213)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.46.2`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.46.2`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.46.2`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.46.2`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.46.2`
