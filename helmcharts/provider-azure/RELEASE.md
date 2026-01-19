# [github.com/gardener/gardener-extension-provider-azure:v1.57.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The `github.com/gardener/gardener` dependency was bumped to `v1.132.4` to include a fix for an issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the `BackupEntry` Secret. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#1426](https://github.com/gardener/gardener-extension-provider-azure/pull/1426)]
- `[OPERATOR]` Downgrade csi-provisioner and csi-resizer for K8S <= 1.33 to make VolumeAttributesClass available for K8S <= 1.33 (v1beta1 + enabled featureGate) and K8S >= 1.34 (v1). by @AndreasBurger [[#1428](https://github.com/gardener/gardener-extension-provider-azure/pull/1428)]
- `[OPERATOR]` Fixed an issue during backupBucket validation without providerConfig. by @wpross [[#1424](https://github.com/gardener/gardener-extension-provider-azure/pull/1424)]

## 🏃 Others
- `[OPERATOR]` Fix an issue that would prevent cluster-autoscaler from considering `VolumeAttributesClasses` for scaling on shoot `< v1.34` by @AndreasBurger [[#1429](https://github.com/gardener/gardener-extension-provider-azure/pull/1429)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.57.2`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.57.2`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.57.2`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.57.2`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.57.2`
