# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug causing the gardenlet to be unable to access the BackupBucket generated secret in garden namespace is now fixed. ([gardener/gardener#7726](https://github.com/gardener/gardener/pull/7726), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed which prevented existing secrets from being adopted when they were named `kube-apiserver-etcd-encryption-key` or `service-account-key`. ([gardener/gardener#7719](https://github.com/gardener/gardener/pull/7719), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[DEVELOPER]* A bug in `managedresources.NewRegistry` that was leading to excessive memory usage when this function is called multiple times has been fixed. ([gardener/gardener#7701](https://github.com/gardener/gardener/pull/7701), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.65.4`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.65.4`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.65.4`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.65.4`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.65.4`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.65.4`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.65.4`