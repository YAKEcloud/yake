# [gardener-extension-os-ubuntu]
## 🏃 Others
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-os-ubuntu#77](https://github.com/gardener/gardener-extension-os-ubuntu/pull/77), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* Adapted extension components to support the [FullNetworkPoliciesInRuntimeCluster](https://github.com/gardener/gardener/blob/master/docs/deployment/feature_gates.md#list-of-feature-gates) feature gate introduced by `gardener/gardener` v1.66, see [here](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) and [#7352](https://github.com/gardener/gardener/pull/7589) for more information. ([gardener/gardener-extension-os-ubuntu#78](https://github.com/gardener/gardener-extension-os-ubuntu/pull/78), [@oliver-goetz](https://github.com/oliver-goetz))
* *[DEVELOPER]* Update to Go 1.19.7. ([gardener/gardener-extension-os-ubuntu#79](https://github.com/gardener/gardener-extension-os-ubuntu/pull/79), [@oliver-goetz](https://github.com/oliver-goetz))