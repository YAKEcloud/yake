# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[OPERATOR]` `gardener-extension-admission-gcp` Helm chart has been removed. The admission can be deployed by applying `admission-gcp-application` and `admission-gcp-runtime` charts separately. With this change the `global` structure in Helm values of these charts has been removed. Still supported settings have been moved to other sections. by @oliver-goetz [#905]
## ✨ New Features

- `[OPERATOR]` The extension can now be deployed via `extensions.operator.gardener.cloud` CRD. by @oliver-goetz [#905]
## 🏃 Others

- `[DEPENDENCY]` Update go to version 1.23.3 by @hebelsan [#890]
- `[DEPENDENCY]` Update csi-driver from v.15.0 to v.15.1 by @hebelsan [#907]
- `[OPERATOR]` Add `NamespacedCloudProfile` admission mutation and validation to support custom machine images and types. by @LucaBernstein [#918]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#885]
- `[OPERATOR]` Create bastion vm from the info provided in the cloud profile bastion section by @hebelsan [#826]
- `[DEVELOPER]` Add gosec as sast makefile target by @hebelsan [#892]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.41.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.41.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.41.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.41.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.41.0`
