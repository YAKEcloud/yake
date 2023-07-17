# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed for Istio-Ingress Gateways for seeds that use `ExposureClassHandler`s. Earlier, annotations in `seed.spec.settings.loadBalancerServices` caused an override of the ones specified in `gardenletConfiguration.exposureClassHandler[].loadBalancerService` for zonal Istios. Now, annotations in `gardenletConfiguration.exposureClassHandler[].loadBalancerService` are given priority, like it was already the case of the global Istio. by @gardener-ci-robot [#8180]
## 🏃 Others

- `[OPERATOR]` Adapt vpa-updater QPS limits such that it doesn't get throttled on large clusters by @gardener-ci-robot [#8176]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.72.3`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.72.3`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.72.3`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.72.3`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.72.3`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.72.3`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.72.3`