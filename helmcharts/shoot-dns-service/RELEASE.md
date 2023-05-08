# [gardener-extension-shoot-dns-service]
## ⚠️ Breaking Changes
* *[OPERATOR]* The charts for the controller-registration uses now `gardener.seed.name` instead of `gardener.seed.identity`. ([gardener/gardener-extension-shoot-dns-service#209](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/209), [@MartinWeindel](https://github.com/MartinWeindel))
  * Make sure to use Gardener Version >= `v1.67.0`.
## 🐛 Bug Fixes
* *[OPERATOR]* Fix nil pointer when rendering the gardener-extension-admission-shoot-dns-service runtime chart separately. ([gardener/gardener-extension-shoot-dns-service#204](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/204), [@hendrikKahl](https://github.com/hendrikKahl))
## 🏃 Others
* *[OPERATOR]* Update builder image from `golang:1.20.3` to `golang:1.20.4` ([gardener/gardener-extension-shoot-dns-service#209](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/209), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Bump builder image from `golang:1.20.2` to `golang:1.20.3`. ([gardener/gardener-extension-shoot-dns-service#207](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/207), [@MartinWeindel](https://github.com/MartinWeindel))
# [external-dns-management]
## ✨ New Features
* *[USER]* Added support for proxy for HTTP Transport for Openstack Designate Provider ([gardener/external-dns-management#304](https://github.com/gardener/external-dns-management/pull/304), [@sdputurn](https://github.com/sdputurn))
## 🏃 Others
* *[OPERATOR]* Updated controller-manager-library dependency. ([gardener/external-dns-management#305](https://github.com/gardener/external-dns-management/pull/305), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Updated builder image from `golang:1.20.2` to `golang:1.20.4` ([gardener/external-dns-management#305](https://github.com/gardener/external-dns-management/pull/305), [@MartinWeindel](https://github.com/MartinWeindel))