# [gardener-extension-networking-calico]
## ✨ New Features
* *[USER]* `calico-node` is marked as a node-critical component. With this, workload pods are only scheduled to a `Node` if it runs a ready `calico-node` pod. ([gardener/gardener-extension-networking-calico#236](https://github.com/gardener/gardener-extension-networking-calico/pull/236), [@dergeberl](https://github.com/dergeberl))
## 🏃 Others
* *[OPERATOR]* Calico pod security policy now works with source network address translation to infrastructure dns feature. ([gardener/gardener-extension-networking-calico#241](https://github.com/gardener/gardener-extension-networking-calico/pull/241), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-networking-calico#246](https://github.com/gardener/gardener-extension-networking-calico/pull/246), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* Adapted extension components to support the [FullNetworkPoliciesInRuntimeCluster](https://github.com/gardener/gardener/blob/master/docs/deployment/feature_gates.md#list-of-feature-gates) feature gate introduced by `gardener/gardener` v1.66, see [here](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) and [#7352](https://github.com/gardener/gardener/pull/7589) for more information. ([gardener/gardener-extension-networking-calico#247](https://github.com/gardener/gardener-extension-networking-calico/pull/247), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Extension networking calico is scraped for metrics per default on the seed. ([gardener/gardener-extension-networking-calico#248](https://github.com/gardener/gardener-extension-networking-calico/pull/248), [@ScheererJ](https://github.com/ScheererJ))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-networking-calico#237](https://github.com/gardener/gardener-extension-networking-calico/pull/237), [@Kostov6](https://github.com/Kostov6))
  * github.com/gardener/gardener: v1.59.0 -> v1.62.2
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-networking-calico#243](https://github.com/gardener/gardener-extension-networking-calico/pull/243), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.62.2 -> v1.64.0
  * k8s.io/* : v0.25.2 -> v0.26.1
  * sigs.k8s.io/controller-runtime: v0.13.0-> v0.14.4
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-networking-calico#245](https://github.com/gardener/gardener-extension-networking-calico/pull/245), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.64.0 -> v1.65.0