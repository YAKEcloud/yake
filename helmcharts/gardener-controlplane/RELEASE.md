# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue has been fixed for highly-available `Shoot`s whose `etcd` clusters didn't get ready in the `Completing` phase of a CA credentials rotation. by @gardener-ci-robot [#8304]
## 🏃 Others

- `[OPERATOR]` gardenlet: A regression preventing the alertmanager in the garden namespace from sending email notifications is now fixed. by @gardener-ci-robot [#8316]
# [gardener/hvpa-controller]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused HVPA reconciliation to fail with `expected pointer, but got v2beta1.MetricSpec type` when the HPA spec had changed. by @voelzmo [gardener/hvpa-controller#125]

# Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.74.3`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.74.3`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.74.3`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.74.3`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.74.3`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.74.3`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.74.3`