# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug preventing the `system:serviceaccount:kube-system:gardener-internal` service account, used by `gardener-operator`, to label restricted resources was fixed. by @dimityrmirchev [#12065]
## 🏃 Others

- `[OPERATOR]` It is now ensured that extension admission webhooks have validated `WorkloadIdentity`s/`Secret`s referenced in `Shoot`s. by @rfranzke [#12076]
- `[OPERATOR]` Set minAllowed CPU to `150m` for prometheus-shoot to avoid frequent evictions by @voelzmo [#12079]
- `[OPERATOR]` Annotations and labels are now ignored when creating referenced resources in the shoot control plane namespaces in seed clusters. by @rfranzke [#12066]
- `[OPERATOR]` A new check ensures that only owners and project members with a UAM role are allowed to modify the project owner. by @timuthy [#12083]
- `[DEVELOPER]` The `admission-local` deployment was fixed to work with KinD based test setup. by @timuthy [#12107]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.117.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.117.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.117.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.117.5`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.117.5`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.117.5`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.117.5`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.117.5`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.117.5`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.117.5`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.117.5`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.117.5`
