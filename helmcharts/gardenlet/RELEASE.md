# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* The `terraformer` library will now skip deletion of the Terraformer pod when the request context has been canceled. This change aims to prevent inconsistencies in Terraform state by attempting to allow uninterrupted execution of healthy Terraformer pods. ([gardener/gardener#8108](https://github.com/gardener/gardener/pull/8108), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed in the `garden/fluent-bit` that caused a failure in creating `networkpolicies` for scraping metrics. ([gardener/gardener#8077](https://github.com/gardener/gardener/pull/8077), [@timuthy](https://github.com/timuthy))
## 🏃 Others
* *[OPERATOR]* Plutono is now updated to v7.5.22 ([gardener/gardener#8102](https://github.com/gardener/gardener/pull/8102), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* The `Deploying Shoot namespace in Seed` step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. ([gardener/gardener#8117](https://github.com/gardener/gardener/pull/8117), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The reconciliation time limit for the controller resource reconciliation, e.g. for `ManagedResource`, has been increased from `1m` to `3m`. ([gardener/gardener#8092](https://github.com/gardener/gardener/pull/8092), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.71.5`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.71.5`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.71.5`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.71.5`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.71.5`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.71.5`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.71.5`