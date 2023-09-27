---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


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
<summary><b>Update gardener-controlplane to <code>1.79.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]`  An issue causing several tasks from the Shoot reconciliation flow to fail with transient errors of type `duplicate filename in registry` is now fixed. by @gardener-ci-robot [#8555]
- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8552]
## 🏃 Others

- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @gardener-ci-robot [#8492]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.79.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]`  An issue causing several tasks from the Shoot reconciliation flow to fail with transient errors of type `duplicate filename in registry` is now fixed. by @gardener-ci-robot [#8555]
- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8552]
## 🏃 Others

- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @gardener-ci-robot [#8492]

</details>

<details>
<summary><b>Update gardenlet to <code>1.79.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]`  An issue causing several tasks from the Shoot reconciliation flow to fail with transient errors of type `duplicate filename in registry` is now fixed. by @gardener-ci-robot [#8555]
- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8552]
## 🏃 Others

- `[OPERATOR]` extension library: State update for a Worker object can be now skipped by annotating it with `worker.gardener.cloud/skip-state-update=true`. by @gardener-ci-robot [#8492]

</details>
