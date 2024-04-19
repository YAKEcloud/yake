# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug in `gardener-node-agent` which prevented copying files between different block devices has been fixed. by @oliver-goetz [#9618]
- `[USER]` A bug which mounted the kubelet data volume to `/var/lib` instead of `/var/lib/kubelet` when `kubeletDataVolumeName` was set has been fixed. by @oliver-goetz [#9618]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.90.8`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.90.8`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.90.8`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.90.8`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.90.8`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.90.8`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.90.8`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.90.8`
