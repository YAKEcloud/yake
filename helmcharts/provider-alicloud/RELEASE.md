# [gardener/gardener-extension-provider-alicloud]

## 🐛 Bug Fixes

- `[OPERATOR]` Admission controller will be deployed with the `LEADER_ELECTION_NAMESPACE` environment variable set to the pod namespace by @plkokanov [#801]
## 🏃 Others

- `[OPERATOR]` The provider-alicloud extension does now support shoot clusters with Kubernetes version 1.33. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md) before upgrading to 1.33. by @plkokanov [#800]
- `[OPERATOR]` Memory and CPU resource limits have been removed from provider-alicloud extension chart templates. by @kevin-lacoo [#799]
- `[OPERATOR]` Fixed an issue that caused a `field.Path{...}` structure to be displayed in the error message shown when the CIDR validation of `shoot.spec.networking.{nodes,pods,services}` fields fails, instead of the actual incorrect value. by @plkokanov [#802]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.63.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.63.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.63.0`
## Container (OCI) Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.63.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.63.0`
