# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @gardener-ci-robot [#8476]
## 🐛 Bug Fixes

- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @gardener-ci-robot [#8473]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8469]
- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @gardener-ci-robot [#8451]