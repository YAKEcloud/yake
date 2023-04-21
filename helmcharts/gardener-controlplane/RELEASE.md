# [gardener]
## 🏃 Others
* *[OPERATOR]* The nested kubelet in the Gardener e2e tests (in prow/kind) now work on hosts using cgroupsv2 ([gardener/gardener#7798](https://github.com/gardener/gardener/pull/7798), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[DEVELOPER]* Set `cgroupDriver` of `provider-local` to `systemd`. ([gardener/gardener#7806](https://github.com/gardener/gardener/pull/7806), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.66.3`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.66.3`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.66.3`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.66.3`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.66.3`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.66.3`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.66.3`