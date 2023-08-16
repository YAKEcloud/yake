# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @ialidzhikov [gardener/machine-controller-manager#834]
# [gardener/gardener-extension-provider-openstack]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-openstack` no longer supports Seeds or Shoots with Кubernetes version < 1.22. by @shafeeqes [#648]
- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#653]
## ✨ New Features

- `[OPERATOR]` Flow-based infrastructure reconciliation without Terraformer by @MartinWeindel [#528]
- `[OPERATOR]` The `gardener-extension-admission-openstack` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#660]
- `[DEVELOPER]` This extension is now compatible with the `MachineControllerManagerDeployment` feature gate of `gardenlet`. by @rfranzke [#645]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix rendering of CSI manila storageclass if creating infrastructure fails. by @MartinWeindel [#652]
## 🏃 Others

- `[OPERATOR]` Provider-extension will attempt to delete all kubernetes loadbalancers that were not cleaned up by the CCM on infrastructure deletion. by @kon-angelo [#656]
- `[OPERATOR]` machineDeployment will have the label `topology.cinder.csi.openstack.org/zone` when created. by @elankath [#659]
- `[OPERATOR]` Remove limits from critical control plane components. by @kon-angelo [#657]
- `[DEVELOPER]` All code related to the removed `APIServerSNI` feature gate of `gardenlet` has been removed from this extension. by @rfranzke [#644]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]