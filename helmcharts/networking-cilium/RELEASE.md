# [gardener-extension-networking-cilium]
## ✨ New Features
* *[USER]* `cilium` is marked as a node-critical component. With this, workload pods are only scheduled to a `Node` if it runs a ready `cilium` pod. ([gardener/gardener-extension-networking-cilium#152](https://github.com/gardener/gardener-extension-networking-cilium/pull/152), [@dergeberl](https://github.com/dergeberl))
## 🏃 Others
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-networking-cilium#160](https://github.com/gardener/gardener-extension-networking-cilium/pull/160), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* Dashboard for cilium agent, cilium operator and hubble is updated and deprecated http metric is replaced. ([gardener/gardener-extension-networking-cilium#161](https://github.com/gardener/gardener-extension-networking-cilium/pull/161), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* Adapted extension components to support the [FullNetworkPoliciesInRuntimeCluster](https://github.com/gardener/gardener/blob/master/docs/deployment/feature_gates.md#list-of-feature-gates) feature gate introduced by `gardener/gardener` v1.66, see [here](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller) and [#7352](https://github.com/gardener/gardener/pull/7589) for more information. ([gardener/gardener-extension-networking-cilium#162](https://github.com/gardener/gardener-extension-networking-cilium/pull/162), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Extension networking calico is scraped for metrics per default on the seed. ([gardener/gardener-extension-networking-cilium#163](https://github.com/gardener/gardener-extension-networking-cilium/pull/163), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Update cilium to `v1.13.0`. ([gardener/gardener-extension-networking-cilium#154](https://github.com/gardener/gardener-extension-networking-cilium/pull/154), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* Enforcement of overlay network for cilium shoot clusters is now disabled. ([gardener/gardener-extension-networking-cilium#159](https://github.com/gardener/gardener-extension-networking-cilium/pull/159), [@DockToFuture](https://github.com/DockToFuture))
  * For clusters without overlay network SNAT is now disabled in node CIDR range and pod CIDR range.
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-networking-cilium#155](https://github.com/gardener/gardener-extension-networking-cilium/pull/155), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.59.0 -> v1.64.0
  * k8s.io/* : v0.25.0 -> v0.26.1
  * sigs.k8s.io/controller-runtime: v0.13.0-> v0.14.4
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-networking-cilium#158](https://github.com/gardener/gardener-extension-networking-cilium/pull/158), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.64.0 -> v1.65.0