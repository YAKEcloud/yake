# [gardener-extension-networking-calico]
## 🐛 Bug Fixes
* *[OPERATOR]* The stale healthcheck conditions from the network extension is now properly cleaned up. ([gardener/gardener-extension-networking-calico#252](https://github.com/gardener/gardener-extension-networking-calico/pull/252), [@shafeeqes](https://github.com/shafeeqes))
## 🏃 Others
* *[OPERATOR]* E2E tests are added which create a new calico shoot cluster, verify that it is running and clean it afterwards up. ([gardener/gardener-extension-networking-calico#257](https://github.com/gardener/gardener-extension-networking-calico/pull/257), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* Calico extension does not crash anymore when node cidr is not specified. ([gardener/gardener-extension-networking-calico#249](https://github.com/gardener/gardener-extension-networking-calico/pull/249), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Fixed bug disallowing shoot clusters without network provider configuration from reconciling successfully. ([gardener/gardener-extension-networking-calico#250](https://github.com/gardener/gardener-extension-networking-calico/pull/250), [@ScheererJ](https://github.com/ScheererJ))
* *[OPERATOR]* Bump builder image from `golang:1.19.4` to `golang:1.20.2` ([gardener/gardener-extension-networking-calico#251](https://github.com/gardener/gardener-extension-networking-calico/pull/251), [@DockToFuture](https://github.com/DockToFuture))
* *[OPERATOR]* Switched calico images from DockerHub to Gardener GCR ([gardener/gardener-extension-networking-calico#254](https://github.com/gardener/gardener-extension-networking-calico/pull/254), [@robinschneider](https://github.com/robinschneider))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-networking-calico#252](https://github.com/gardener/gardener-extension-networking-calico/pull/252), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.66.0 -> v1.66.1