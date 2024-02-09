# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `kube-apiserver` deployment is annotated to mark the completion of labeling the resources for encrytion so that this step is not repeated in case the "label removal" step fails and resources are partially without the label. by @shafeeqes [#9148]
- `[OPERATOR]` A bug has been fixed which was preventing `valitail` systemd services on shoot workers from starting when the `UseGardenerNodeAgent` feature gate is enabled. by @oliver-goetz [#9150]
## 🏃 Others

- `[OPERATOR]` `nginx-ingress-controller` image is updated to `v1.9.6`. by @shafeeqes [#9133]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.3`
