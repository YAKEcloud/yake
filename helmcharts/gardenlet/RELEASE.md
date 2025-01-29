# [gardener/gardener]

## ✨ New Features

- `[DEVELOPER]` A wrapper function for `OperatingSystemConfig` provisioning bash script has been implemented. Using the wrapper ensures that the script exits early in case it has been executed successfully before. by @oliver-goetz [#11257]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.79.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.79.1) by @gardener-ci-robot [#11262]
- `[OPERATOR]` An issue has been fixed that caused the `garden` reconciliation to stop when structured authentication was used in combination with the gardener-dashboard `oidcConfig`. by @timuthy [#11233]
- `[DEVELOPER]` testing framework: The RootPodExecutor no longer requires output from command execution to interpret the command execution as successful. by @ialidzhikov [#11253]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.111.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.111.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.111.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.111.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.111.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.111.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.111.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.111.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.111.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.111.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.111.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.111.1`
