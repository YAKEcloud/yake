---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-calico to <code>1.34.0</code></b></summary>

# [gardener-extension-networking-calico]
## 🏃 Others
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-networking-calico#267](https://github.com/gardener/gardener-extension-networking-calico/pull/267), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Updated cluster-proportional-autoscaler to v1.8.8 ([gardener/gardener-extension-networking-calico#268](https://github.com/gardener/gardener-extension-networking-calico/pull/268), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Update golang to 1.20.4. ([gardener/gardener-extension-networking-calico#269](https://github.com/gardener/gardener-extension-networking-calico/pull/269), [@ScheererJ](https://github.com/ScheererJ))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-networking-calico#272](https://github.com/gardener/gardener-extension-networking-calico/pull/272), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.66.1 -> v1.71.0
  * k8s.io/* : v0.26.1 -> v0.26.3
  * sigs.k8s.io/controller-runtime: v0.14.4-> v0.14.6

</details>

<details>
<summary><b>Update networking-cilium to <code>1.25.0</code></b></summary>

# [gardener-extension-networking-cilium]
## ✨ New Features
* *[USER]* The networking-cilium extension does now run cilium with `enable-service-topology: true`. With this it is possible to use the TopologyAwareHints (topology-aware traffic routing) feature in cilium Shoots. ([gardener/gardener-extension-networking-cilium#185](https://github.com/gardener/gardener-extension-networking-cilium/pull/185), [@ialidzhikov](https://github.com/ialidzhikov))
## 🏃 Others
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-networking-cilium#186](https://github.com/gardener/gardener-extension-networking-cilium/pull/186), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Update golang to 1.20.4. ([gardener/gardener-extension-networking-cilium#187](https://github.com/gardener/gardener-extension-networking-cilium/pull/187), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* The following dependency has been updated: ([gardener/gardener-extension-networking-cilium#189](https://github.com/gardener/gardener-extension-networking-cilium/pull/189), [@acumino](https://github.com/acumino))
  * github.com/gardener/gardener 1.67.1 -> 1.71.0
* *[OPERATOR]* Update cilium to `v1.13.3`. ([gardener/gardener-extension-networking-cilium#190](https://github.com/gardener/gardener-extension-networking-cilium/pull/190), [@DockToFuture](https://github.com/DockToFuture))

</details>
