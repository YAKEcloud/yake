---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update shoot-dns-service to <code>1.37.1</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[USER]` Fail if reading secret for external provider fails. (#231) by `Martin Weindel <martin.weindel@sap.com>` [$890c829ba1058e748ef1f05ec7bfe3bbf644f6a7]

</details>

<details>
<summary><b>Update provider-azure to <code>1.38.0</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#713]
- `[OPERATOR]` `provider-azure` no longer supports Shoots or Seeds with Кubernetes version < 1.22. by @shafeeqes [#708]
## ✨ New Features

- `[DEVELOPER]` This extension is now compatible with the `MachineControllerManagerDeployment` feature gate of `gardenlet`. by @rfranzke [#705]
- `[OPERATOR]` The `gardener-extension-admission-azure` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#721]
## 🏃 Others

- `[OPERATOR]` Remove limits from critical control plane components. by @kon-angelo [#715]
- `[OPERATOR]` always search latest os version to build up the Bastion instance by @tedteng [#668]
- `[USER]` The node-controller-manager is now set to keep setting deprecated node labels for k8s clusters of version `>=1.26.0, <1.28.0` to ensure pods using persistent volumes with node affinities are scheduled in the cluster. by @vpnachev [#716]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]

</details>
