# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug which mounted the kubelet data volume to `/var/lib` instead of `/var/lib/kubelet` when `kubeletDataVolumeName` was set has been fixed. by @oliver-goetz [#9615]
- `[OPERATOR]` A bug in `gardener-node-agent` which prevented copying files between different block devices has been fixed. by @oliver-goetz [#9615]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.92.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.92.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.92.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.92.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.92.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.92.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.92.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.92.2`
