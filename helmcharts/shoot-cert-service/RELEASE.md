# [gardener-extension-shoot-cert-service]
## 🏃 Others
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener-extension-shoot-cert-service#149](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/149), [@voelzmo](https://github.com/voelzmo))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-shoot-cert-service#148](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/148), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.62.2 -> v1.65.0
  * k8s.io/* : v0.26.0 -> v0.26.1
  * sigs.k8s.io/controller-runtime: v0.13.1-> v0.14.4
# [cert-management]
## 🐛 Bug Fixes
* *[USER]* Fix auto registration for issuer with external account binding. ([gardener/cert-management#121](https://github.com/gardener/cert-management/pull/121), [@MartinWeindel](https://github.com/MartinWeindel))
## 📖 Documentation
* *[USER]* Documentation for the `followCNAME` option ([gardener/cert-management#120](https://github.com/gardener/cert-management/pull/120), [@MartinWeindel](https://github.com/MartinWeindel))
## 🏃 Others
* *[OPERATOR]* bump builder image `golang` from `1.19.5` to `1.20.1` ([gardener/cert-management#122](https://github.com/gardener/cert-management/pull/122), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* k8s modules from `v0.26.0` to `v0.26.1` ([gardener/cert-management#122](https://github.com/gardener/cert-management/pull/122), [@MartinWeindel](https://github.com/MartinWeindel))
  * `golang.org/x/net` from `v0.5.0` to `v0.7.0`