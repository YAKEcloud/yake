# [gardener/gardener-extension-provider-alicloud]

## ⚠️ Breaking Changes

- `[OPERATOR]` The Helm charts for the `application` and `runtime` parts of the gardener-extension-admission-alicloud admission controller have been separated into standalone charts. These charts now assume a Garden setup with a virtual garden. Both charts must be deployed individually: the `runtime` chart on the Garden runtime cluster, and the `application` chart on the virtual garden. Additionally, the intermediate `global` level in the Helm values has been removed, so you may need to adjust your provided values accordingly. by @MartinWeindel [#746]
## ✨ New Features

- `[OPERATOR]` Adjustments for additional deployment of extension and admission controller on Garden runtime cluster by gardener-operator. by @MartinWeindel [#746]
## 🏃 Others

- `[OPERATOR]` Fixes Alicloud bastion instance CPU architecture not aligning with the image CPU architecture in certain conditions by @tedteng [#747]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#749]
- `[OPERATOR]` Bump gardener/gardener from v1.98.4 to v1.108.1. by @MartinWeindel [#746]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.57.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.57.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.57.0`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.57.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.57.0`
