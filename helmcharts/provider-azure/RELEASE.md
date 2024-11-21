# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[USER]` Deprecate DNSRecordConfig object. Please configure the target Azure management API via the provided secret by @kon-angelo [#1018]
## ✨ New Features

- `[USER]` Enable extra-create-metadata in csi-provisioner. by @kon-angelo [#1008]
## 🏃 Others

- `[DEPENDENCY]` Update go to version 1.23.3 by @hebelsan [#1005]
- `[DEPENDENCY]` Update gardener/gardener to v1.108.0 by @hebelsan [#1014]
- `[OPERATOR]` Create bastion vm from the info provided in the cloud profile bastion section by @hebelsan [#948]
- `[OPERATOR]` Fix an issue where the subnet name was not calculated correctly in the migration to multi-subnet setup by @kon-angelo [#1004]
- `[OPERATOR]` Updating CSI driver provisioner ClusterRole rules by @hebelsan [#988]
- `[OPERATOR]` Remove outdated "Basic" SKU loadbalancer migration documentation. by @kon-angelo [#1017]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#998]
- `[OPERATOR]` Add `NamespacedCloudProfile` admission mutation and validation to support custom machine images and types. by @LucaBernstein [#1016]
- `[OPERATOR]` Added validation to prevent IPv6-only/dual-stack clusters as they are not supported, yet. by @ScheererJ [#993]
- `[DEVELOPER]` Add gosec as sast makefile target by @hebelsan [#1006]
- `[DEVELOPER]` Update gardener/gardener to v1.105.0 by @hebelsan [#989]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.49.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.49.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.49.0`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.49.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.49.0`
