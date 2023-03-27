# [gardener]
## 🐛 Bug Fixes
* *[OPERATOR]* A bug causing the gardenlet to be unable to access the BackupBucket generated secret in garden namespace is now fixed. ([gardener/gardener#7728](https://github.com/gardener/gardener/pull/7728), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* A bug has been fixed which prevented existing secrets from being adopted when they were named `kube-apiserver-etcd-encryption-key` or `service-account-key`. ([gardener/gardener#7717](https://github.com/gardener/gardener/pull/7717), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.67.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.67.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.67.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.67.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.67.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.67.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.67.1`