# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* Prevent nil pointer exceptions on shoot deletion in `gardenlet` when seed namespace is gone. ([gardener/gardener#7833](https://github.com/gardener/gardener/pull/7833), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.69.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.69.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.69.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.69.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.69.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.69.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.69.1`