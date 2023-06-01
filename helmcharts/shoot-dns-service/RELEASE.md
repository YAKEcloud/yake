# [gardener-extension-shoot-dns-service]
## 🏃 Others
* *[OPERATOR]* The admission/validation component is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/gardener-extension-shoot-dns-service#210](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/210), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Exclude external kube-apiserver domain from the `external` DNSProvider ([gardener/gardener-extension-shoot-dns-service#213](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/213), [@MartinWeindel](https://github.com/MartinWeindel))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-shoot-dns-service#212](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/212), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.65.3 -> v1.71.0
  * k8s.io/* : v0.26.1 -> v0.26.3
  * sigs.k8s.io/controller-runtime: v0.14.4-> v0.14.6