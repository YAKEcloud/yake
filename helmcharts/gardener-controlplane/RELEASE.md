# [github.com/gardener/gardener:v1.127.1]

## 🐛 Bug Fixes
- `[OPERATOR]` A bug in the gardenlet start-up migration of the Admin and Viewer Kubeconfig ClusterRoleBindings where a ManagedResource secret could be deleted leading to gardenlet being unable to startup is fixed. by @gardener-ci-robot [[#12928](https://github.com/gardener/gardener/pull/12928)]

## 🏃 Others
- `[OPERATOR]` Monitoring the Istio Ingress Gateways is temporarily disabled to mitigate a metric leak issue. This does not affect the monitoring of the shoot control planes where these metrics are not used. by @gardener-ci-robot [[#12935](https://github.com/gardener/gardener/pull/12935)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.127.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.127.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.127.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.127.1`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.127.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.127.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.127.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.127.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.127.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.127.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.127.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.127.1`
