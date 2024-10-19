# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10624]
- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10676]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.103.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.103.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.103.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.103.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.103.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.103.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.103.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.103.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.103.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.103.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.103.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.103.2`
