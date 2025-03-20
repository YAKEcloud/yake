# [gardener/gardener]

## 🐛 Bug Fixes

- `[DEPENDENCY]` The `hack/check-generate.sh` script was fixed to only execute the `check-generate` target if it exists in the corresponding Makefile. by @timuthy [#11641]
- `[USER]` A bug which made the wildcard TLS certificate endpoint of non-HA-multizone shoot kube-apiservers inaccessible has been fixed. by @oliver-goetz [#11697]
- `[USER]` A bug has been fixed which prevented `Shoot` deletion because of an unavailable `gardener-resource-manager` deployment. by @rfranzke [#11710]
- `[USER]` A bug in gardener-operator which made the virtual-kube-apiserver serve the self-signed certificate on the wildcard TLS certificate endpoint when IstioTLSTermination feature gate is active has been fixed. by @oliver-goetz [#11697]
- `[OPERATOR]` A bug which might break control-plane access to shoots until their next reconciliation when deactivating IstioTLSTermination feature gate on their seed has been fixed. by @oliver-goetz [#11694]
## 🏃 Others

- `[OPERATOR]` gardener-apiserver now returns a warning when the Shoot has the `spec.kubernetes.enableStaticTokenKubeconfig` field set. by @shafeeqes [#11666]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.114.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.114.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.114.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.114.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.114.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.114.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.114.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.114.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.114.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.114.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.114.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.114.1`
