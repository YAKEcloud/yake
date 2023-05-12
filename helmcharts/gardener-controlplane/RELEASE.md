# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Gardener denies setting `Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type` if shoot is hibernated. ([gardener/gardener#7921](https://github.com/gardener/gardener/pull/7921), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed which could cause `kube-proxy`s from being missing after a `Shoot` has been woken up from hibernation. ([gardener/gardener#7918](https://github.com/gardener/gardener/pull/7918), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* An issue causing panic in the health check for extension is fixed. ([gardener/gardener#7915](https://github.com/gardener/gardener/pull/7915), [@gardener-ci-robot](https://github.com/gardener-ci-robot))