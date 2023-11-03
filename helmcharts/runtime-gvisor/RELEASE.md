# [gardener/gardener-extension-runtime-gvisor]

## 📰 Noteworthy

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @dimityrmirchev [#94]
## ✨ New Features

- `[USER]` `runtime-gvisor` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @shafeeqes [#101]
## 🏃 Others

- `[DEPENDENCY]` The following dependency were updated:  
  - github.com/gardener/gardener: v1.75.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @dimityrmirchev [#96]
- `[DEPENDENCY]` The go version was updated to `1.21.3`. by @dimityrmirchev [#96]

## Docker Images
gardener-extension-runtime-gvisor-installation: `eu.gcr.io/gardener-project/gardener/extensions/runtime-gvisor-installation:v0.12.0`
gardener-extension-runtime-gvisor: `eu.gcr.io/gardener-project/gardener/extensions/runtime-gvisor:v0.12.0`
