# [gardener-extension-runtime-gvisor]
## 🏃 Others
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-runtime-gvisor#74](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/74), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* Update gvisor to version 20230227.0 and installation base image to golang:1.19.6 ([gardener/gardener-extension-runtime-gvisor#77](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/77), [@danielfoehrKn](https://github.com/danielfoehrKn))
* *[OPERATOR]* Adapted extension components to latest network policy improvements in `gardener/gardener`, see [here](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) and [#7352](https://github.com/gardener/gardener/pull/7589) for more information. ([gardener/gardener-extension-runtime-gvisor#78](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/78), [@timuthy](https://github.com/timuthy))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-runtime-gvisor#75](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/75), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.59.0 -> v1.65.0
  * k8s.io/* : v0.25.0 -> v0.26.1
  * sigs.k8s.io/controller-runtime: v0.13.0-> v0.14.4