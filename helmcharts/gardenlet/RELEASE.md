# [github.com/gardener/gardener:v1.137.7]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix a bug where the `shoot-care` controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and updated DNS credentials, i.e. `shoot.spec.dns.providers[].credentialsRef`, until the shoot is reconciled. by @vpnachev [[#14445](https://github.com/gardener/gardener/pull/14445)]

## 🏃 Others
- `[OPERATOR]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.34.0` to `v1.34.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.34.1)  
  - `gardener/autoscaler` from `v1.33.0` to `v1.33.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.33.1)  
  - `gardener/autoscaler` from `v1.32.2` to `v1.32.3`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.3)  
  - `gardener/autoscaler` from `v1.31.0` to `v1.31.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.31.1)  
  - `gardener/autoscaler` from `v1.30.2` to `v1.30.3`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.30.3) by @aaronfern [[#14498](https://github.com/gardener/gardener/pull/14498)]
- `[OPERATOR]` There is now `maxConnectionDuration` of 1 day for connections to kube-apiserver endpoints. Their `maxConnections` limit has been removed. by @oliver-goetz [[#14469](https://github.com/gardener/gardener/pull/14469)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.2` to `v0.61.3`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.3)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.2` to `v0.61.3`. by @gardener-ci-robot [[#14488](https://github.com/gardener/gardener/pull/14488)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.7`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.7`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.7`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.7`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.7`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.7`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.7`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.7`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.7`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.7`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.7`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.7`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.7`
