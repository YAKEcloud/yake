# [gardener-extension-runtime-gvisor]
## 🐛 Bug Fixes
* *[OPERATOR]* The stale healthcheck conditions from the `runtime-gvisor` extension are now properly cleaned up. ([gardener/gardener-extension-runtime-gvisor#79](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/79), [@shafeeqes](https://github.com/shafeeqes))
## 🏃 Others
* *[OPERATOR]* Added NoExecute/NoSchedule tolerations to the gvisor daemonset to prevent reporting of `misscheduled` pods on node scale-down operations. ([gardener/gardener-extension-runtime-gvisor#81](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/81), [@bd3lage](https://github.com/bd3lage))
* *[OPERATOR]* The gVisor runtime extension is now built with Golang 1.20 and uses Gardener 1.70.2 libraries. ([gardener/gardener-extension-runtime-gvisor#83](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/83), [@MrBatschner](https://github.com/MrBatschner))
* *[DEPENDENCY]* The following dependency is updated: ([gardener/gardener-extension-runtime-gvisor#79](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/79), [@shafeeqes](https://github.com/shafeeqes))
  * github.com/gardener/gardener: v1.65.0 -> v1.65.3