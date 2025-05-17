# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug preventing the `system:serviceaccount:kube-system:gardener-internal` service account, used by `gardener-operator`, to label restricted resources was fixed. by @dimityrmirchev [#12067]
## 🏃 Others

- `[DEVELOPER]` The `admission-local` deployment was fixed to work with KinD based test setup. by @timuthy [#12108]
- `[OPERATOR]` Set minAllowed CPU to `150m` for prometheus-shoot to avoid frequent evictions by @voelzmo [#12080]
- `[OPERATOR]` A new check ensures that only owners and project members with a UAM role are allowed to modify the project owner. by @timuthy [#12081]
- `[OPERATOR]` Annotations and labels are now ignored when creating referenced resources in the shoot control plane namespaces in seed clusters. by @rfranzke [#12068]
- `[OPERATOR]` It is now ensured that extension admission webhooks have validated `WorkloadIdentity`s/`Secret`s referenced in `Shoot`s. by @rfranzke [#12077]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.4`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.4`
