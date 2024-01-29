# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9087]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9082]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.86.3`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.86.3`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.86.3`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.86.3`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.86.3`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.86.3`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.86.3`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.86.3`
