# [gardener/gardener-extension-provider-aws]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-aws` no longer supports Shoots or Seeds with Кubernetes version < 1.22. by @shafeeqes [#771]
- `[USER]` If the AWS Load Balancer Controller is deployed, the user used by the cloudprovider needs additional permissions. See last section in this example AWS IAM policy document [here](https://github.com/gardener/gardener-extension-provider-aws/blob/master/docs/usage-as-end-user.md#permissions) for more details. by @MartinWeindel [#717]
## ✨ New Features

- `[OPERATOR]` The `gardener-extension-admission-aws` chart allows to optionally configure a projected volume based kubeconfig. by @timuthy [#791]
- `[DEVELOPER]` This extension is now compatible with the `MachineControllerManagerDeployment` feature gate of `gardenlet`. by @rfranzke [#774]
- `[USER]` The AWS Load Balancer Controller is deployed into the control plane if enabled with `spec.provider.controlPlaneConfig.loadBalancerController.enabled=true` in the shoot manifest. by @MartinWeindel [#717]
## 🏃 Others

- `[OPERATOR]` Infrastructure dualstack support can be enabled via `spec.provider.infrastructureConfig.dualStack.enabled: true` in the shoot.yaml. by @DockToFuture [#778]
- `[OPERATOR]` add a sustainable way to get available image AMIs for the test by @tedteng [#715]
- `[OPERATOR]` Remove limits from system critical components by @kon-angelo [#787]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Golang has been updated to v1.20.5 by @kon-angelo [gardener/terraformer#138]
- `[OPERATOR]` Alpine has been updated to v1.18.2 by @kon-angelo [gardener/terraformer#138]