# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` Fix an issue where the infrastructure state was not properly transformed to the provider status.  by @kon-angelo [#1042]
- `[OPERATOR]` Fix an issue where terraformer artifacts would not be deleted during the control-plane-migration `migrate` phase. by @kon-angelo [#1043]
- `[OPERATOR]` Correctly register infrastructure webhook with the controllerruntime manager by @kon-angelo [#1042]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.57.1`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.57.1`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.57.1`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.57.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.57.1`
