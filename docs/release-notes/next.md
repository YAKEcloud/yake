---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-cilium to <code>1.28.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## ✨ New Features

- `[OPERATOR]` Expose configuration of `cni.exclusive`.  by @axel7born [#214]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.79.1</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @gardener-ci-robot [#8476]
## 🐛 Bug Fixes

- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @gardener-ci-robot [#8473]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8469]
- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @gardener-ci-robot [#8451]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.79.1</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @gardener-ci-robot [#8476]
## 🐛 Bug Fixes

- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @gardener-ci-robot [#8473]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8469]
- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @gardener-ci-robot [#8451]

</details>

<details>
<summary><b>Update gardenlet to <code>1.79.1</code></b></summary>

# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` `gardener-resource-manager` now disables cache only for `Secrets` and `ConfigMap` if `DisableCachedClient` set to true. by @gardener-ci-robot [#8476]
## 🐛 Bug Fixes

- `[USER]` Applying Gardener resources server-side has caused the `the server is currently unable to handle the request` error which is now fixed. by @gardener-ci-robot [#8473]
- `[OPERATOR]` Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot [#8469]
- `[OPERATOR]` A bug has been fixed that prevented `ControllerInstallation`s from getting deleted when the backing `ControllerRegistration` with `.spec.deployment.policy={Always,AlwaysExceptNoShoots}` was deleted. by @gardener-ci-robot [#8451]

</details>

<details>
<summary><b>Update provider-aws to <code>1.48.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @ialidzhikov [#801]

</details>
