# [gardener-extension-shoot-cert-service]
## 🐛 Bug Fixes
* *[OPERATOR]* The stale healthcheck conditions from the `shoot-cert-service` extension are now properly cleaned up. ([gardener/gardener-extension-shoot-cert-service#154](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/154), [@shafeeqes](https://github.com/shafeeqes))
## 🏃 Others
* *[OPERATOR]* Bump builder image from `golang:1.19.5` to `golang:1.20.2` ([gardener/gardener-extension-shoot-cert-service#153](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/153), [@MartinWeindel](https://github.com/MartinWeindel))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-shoot-cert-service#154](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/154), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.65.0 -> v1.65.3
# [cert-management]
## ✨ New Features
* *[USER]* The certificate spec can contain an optional section `secretLabels` to specify labels for the certificate secret. ([gardener/cert-management#123](https://github.com/gardener/cert-management/pull/123), [@MartinWeindel](https://github.com/MartinWeindel))
## 🏃 Others
* *[OPERATOR]* Bump builder image from golang version `1.20.1` to `1.20.2` ([gardener/cert-management#124](https://github.com/gardener/cert-management/pull/124), [@MartinWeindel](https://github.com/MartinWeindel))