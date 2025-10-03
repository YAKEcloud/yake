# [github.com/gardener/gardener:v1.126.3]

## 🐛 Bug Fixes
- `[DEVELOPER]` An issue preventing `extensions.gardener.cloud/v1alpha1.Bastion`s to be listed due to missing json tags is now fixed. by @gardener-ci-robot [[#13065](https://github.com/gardener/gardener/pull/13065)]
- `[USER]` A bug causing finalizers to not be removed from `Secret`s when such are deleted and referenced by both a `CredentialsBinding` and a `SecretBinding` is fixed. by @gardener-ci-robot [[#13077](https://github.com/gardener/gardener/pull/13077)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.126.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.126.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.126.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.126.3`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.126.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.126.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.126.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.126.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.126.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.126.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.126.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.126.3`
