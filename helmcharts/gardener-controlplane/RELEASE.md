# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Gardener denies setting `Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type` if shoot is hibernated. ([gardener/gardener#7922](https://github.com/gardener/gardener/pull/7922), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed which could cause `kube-proxy`s from being missing after a `Shoot` has been woken up from hibernation. ([gardener/gardener#7919](https://github.com/gardener/gardener/pull/7919), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* An issue causing panic in the health check for extension is fixed. ([gardener/gardener#7916](https://github.com/gardener/gardener/pull/7916), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* The nested kubelet in the Gardener e2e tests (in prow/kind) now work on hosts using cgroupsv2 ([gardener/gardener#7800](https://github.com/gardener/gardener/pull/7800), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[DEVELOPER]* Set `cgroupDriver` of `provider-local` to `systemd`. ([gardener/gardener#7805](https://github.com/gardener/gardener/pull/7805), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.68.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.68.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.68.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.68.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.68.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.68.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.68.1`