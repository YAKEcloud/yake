# [github.com/gardener/gardener:v1.127.5]

## 🐛 Bug Fixes
- `[USER]` A bug causing finalizers to not be removed from `Secret`s when such are deleted and referenced by both a `CredentialsBinding` and a `SecretBinding` is fixed. by @gardener-ci-robot [[#13076](https://github.com/gardener/gardener/pull/13076)]
- `[DEVELOPER]` An issue preventing `extensions.gardener.cloud/v1alpha1.Bastion`s to be listed due to missing json tags is now fixed. by @gardener-ci-robot [[#13064](https://github.com/gardener/gardener/pull/13064)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.127.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.127.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.127.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.127.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.127.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.127.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.127.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.127.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.127.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.127.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.127.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.127.5`
