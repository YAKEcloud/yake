# [gardener/machine-controller-manager]

## ⚠️ Breaking Changes

- `[DEVELOPER]`  New provider method Driver.InitializeMachine added for Post-Creation VM Instance Initialization steps. by @elankath [gardener/machine-controller-manager#898]
## 🏃 Others

- `[OPERATOR]` Updated k8s dependencies to `v0.29.3` by @rishabh-11 [gardener/machine-controller-manager#907]
- `[OPERATOR]` Removed vendor directory by @rishabh-11 [gardener/machine-controller-manager#903]
# [gardener/machine-controller-manager-provider-gcp]

## 🏃 Others

- `[USER]` The providerSpec validation has changed for the following driver calls:-  
  - DeleteMachine, ListMachines, and GetMachineStatus validate only the zone field in the providerSpec. by @rishabh-11 [gardener/machine-controller-manager-provider-gcp#123]
- `[USER]` Remove strict validation about disk types by @kon-angelo [gardener/machine-controller-manager-provider-gcp#108]
- `[DEVELOPER]` Removed vendor directory by @rishabh-11 [gardener/machine-controller-manager-provider-gcp#112]
- `[DEVELOPER]` Support for passing disk params provisioned-iops and provisioned-throughput by @hebelsan [gardener/machine-controller-manager-provider-gcp#122]
# [gardener/gardener-extension-provider-gcp]

## ✨ New Features

- `[USER]` Add support for specifying data volume sourceImage in the workerConfig by @hebelsan [#751]
## 🏃 Others

- `[OPERATOR]` A problem with deploying MachineClasses that reference an operating system image whose version contains a `+` character was fixed.  by @AndreasBurger [#787]
- `[OPERATOR]` Support and validation of disk params provisioned-iops and provisioned-throughput by @hebelsan [#743]

## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.37.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.37.0`
