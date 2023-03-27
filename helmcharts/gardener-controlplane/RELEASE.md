# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug has been fixed which prevented existing secrets from being adopted when they were named `kube-apiserver-etcd-encryption-key` or `service-account-key`. ([gardener/gardener#7716](https://github.com/gardener/gardener/pull/7716), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug causing the gardenlet to be unable to access the BackupBucket generated secret in garden namespace is now fixed. ([gardener/gardener#7725](https://github.com/gardener/gardener/pull/7725), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[DEVELOPER]* A bug in `managedresources.NewRegistry` that was leading to excessive memory usage when this function is called multiple times has been fixed. ([gardener/gardener#7700](https://github.com/gardener/gardener/pull/7700), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.66.2`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.66.2`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.66.2`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.66.2`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.66.2`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.66.2`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.66.2`