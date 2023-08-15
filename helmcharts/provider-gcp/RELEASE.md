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