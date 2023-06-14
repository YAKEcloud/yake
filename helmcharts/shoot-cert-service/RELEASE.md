# [gardener-extension-shoot-cert-service]
## ✨ New Features
* *[USER]* The `shoot-cert-service` extension now supports workerless `Shoot`s. ([gardener/gardener-extension-shoot-cert-service#164](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/164), [@acumino](https://github.com/acumino))
## 🏃 Others
* *[OPERATOR]* Add dashboard panel for certificate object expire date. ([gardener/gardener-extension-shoot-cert-service#166](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/166), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Updated golang from version `1.20.4` to `1.20.5`. ([gardener/gardener-extension-shoot-cert-service#166](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/166), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Old and obsolete logging configurations are cleaned up. ([gardener/gardener-extension-shoot-cert-service#168](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/168), [@vlvasilev](https://github.com/vlvasilev))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-shoot-cert-service#164](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/164), [@acumino](https://github.com/acumino))
  * github.com/gardener/gardener: v1.65.3 -> v1.71.0
  * k8s.io/* : v0.26.1 -> v0.26.3
  * sigs.k8s.io/controller-runtime: v0.14.4-> v0.14.6
# [cert-management]
## ✨ New Features
* *[OPERATOR]* Added metrics named `cert_management_cert_object_expire` for certificate expiration date. ([gardener/cert-management#131](https://github.com/gardener/cert-management/pull/131), [@MartinWeindel](https://github.com/MartinWeindel))
## 🏃 Others
* *[OPERATOR]* The Helm chart is now adapted such that it works well in garden cluster with enabled `NetworkPolicy` protection (default since `gardener/gardener@v1.71` when garden cluster is managed by `gardener-operator`). ([gardener/cert-management#128](https://github.com/gardener/cert-management/pull/128), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Updated golang builder image from version `1.20.4` to `1.20.5`. ([gardener/cert-management#131](https://github.com/gardener/cert-management/pull/131), [@MartinWeindel](https://github.com/MartinWeindel))