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

<details>
<summary><b>Update provider-gcp to <code>1.32.0</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-gcp` no longer supports Shoots or Seeds with Кubernetes version < 1.22. by @shafeeqes [#628]
- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#632]
## ✨ New Features

- `[DEVELOPER]` This extension is now compatible with the `MachineControllerManagerDeployment` feature gate of `gardenlet`. by @rfranzke [#624]
- `[OPERATOR]` The `gardener-extension-admission-gcp` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#638]
## 🏃 Others

- `[OPERATOR]` `cloud-controller-manager`'s route controller is no longer activated for clusters with overlay network by @ScheererJ [#631]
- `[OPERATOR]` Remove limits from critical control plane components. by @kon-angelo [#634]
- `[OPERATOR]` The following image is updated:  
  - registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver: v1.9.5 -> v1.9.7 by @ialidzhikov [#636]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]

</details>
