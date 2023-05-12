# [gardener]
## ⚠️ Breaking Changes
* *[USER]* Gardener denies setting `Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type` if shoot is hibernated. ([gardener/gardener#7920](https://github.com/gardener/gardener/pull/7920), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🐛 Bug Fixes
* *[USER]* A bug has been fixed which could cause `kube-proxy`s from being missing after a `Shoot` has been woken up from hibernation. ([gardener/gardener#7917](https://github.com/gardener/gardener/pull/7917), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
* *[OPERATOR]* An issue has been fixed that caused traffic from outside of the cluster to `Istio-Ingress` being blocked. This is only relevant if seed(s) specify additional load balancer annotations via `seed.spec.settings.loadBalancerServices.annotations`. ([gardener/gardener#7911](https://github.com/gardener/gardener/pull/7911), [@gardener-ci-robot](https://github.com/gardener-ci-robot))
## 🏃 Others
* *[OPERATOR]* An issue causing panic in the health check for extension is fixed. ([gardener/gardener#7914](https://github.com/gardener/gardener/pull/7914), [@gardener-ci-robot](https://github.com/gardener-ci-robot))