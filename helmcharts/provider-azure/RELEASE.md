# [gardener/machine-controller-manager-provider-azure]

## 📰 Noteworthy

- `[USER]` The cloud instance to connect to can now be configured via the provider spec by @AndreasBurger [gardener/machine-controller-manager-provider-azure#148]
## 🏃 Others

- `[USER]` Machine-Controller-Manager Provider-Azure now supports enabling of vm boot diagnostics.  by @hebelsan [gardener/machine-controller-manager-provider-azure#136]
- `[USER]` Add support for `ConfidentialVM` types in Azure. by @kon-angelo [gardener/machine-controller-manager-provider-azure#146]
- `[USER]` Error Code is now extracted from azcore.ResponseError.ErrorCode by @rishabh-11 [gardener/machine-controller-manager-provider-azure#153]
- `[USER]` Fix passing data disk caching method by @hebelsan [gardener/machine-controller-manager-provider-azure#149]
- `[DEVELOPER]` Removed vendor directory by @rishabh-11 [gardener/machine-controller-manager-provider-azure#140]
- `[DEVELOPER]` Switch AzureDataDisk.Lun from pointer to value by @hebelsan [gardener/machine-controller-manager-provider-azure#150]
# [gardener/gardener-extension-provider-azure]

## ✨ New Features

- `[USER]` Extension-Provider-Azure now supports enabling of vm boot diagnostics in the worker providerConfig. by @hebelsan [#808]
## 🏃 Others

- `[OPERATOR]` Add support for confidential VMs by @kon-angelo [#835]
- `[OPERATOR]` The CIDR blocks used for shoot egress will now be provided via the status of the shoot's infrastructure-resource by @AndreasBurger [#852]
- `[OPERATOR]` `OverconstrainedZonalAllocationRequest` is now classified as `ERR_RETRYABLE_CONFIGURATION_PROBLEM` by @Kostov6 [#881]
- `[OPERATOR]` Improve flow shoot deletion with custom vnet by @hebelsan [#896]
- `[OPERATOR]` A problem with deploying MachineClasses that reference an operating system image whose version contains a `+` character was fixed.  by @AndreasBurger [#898]
# [gardener/machine-controller-manager]

## ⚠️ Breaking Changes

- `[DEVELOPER]`  New provider method Driver.InitializeMachine added for Post-Creation VM Instance Initialization steps. by @elankath [gardener/machine-controller-manager#898]
## 🏃 Others

- `[OPERATOR]` Updated k8s dependencies to `v0.29.3` by @rishabh-11 [gardener/machine-controller-manager#907]
- `[OPERATOR]` Removed vendor directory by @rishabh-11 [gardener/machine-controller-manager#903]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.45.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.45.0`
