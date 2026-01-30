# [github.com/gardener/gardener-extension-provider-aws:v1.67.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The cloud-controller-manager image used for `Shoot` clusters running on kubernetes `1.31` was downgraded from `v1.31.9` to `v1.31.8`. This was done to resolve an issue that caused reconciliations of `Service`s of type LoadBalancer to fail because of attempts to add already existing `IpPermission` rules to the security groups created for the LoadBalancers. by @plkokanov [[#1672](https://github.com/gardener/gardener-extension-provider-aws/pull/1672)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.67.2`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.67.2`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.67.2`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.67.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.67.2`
