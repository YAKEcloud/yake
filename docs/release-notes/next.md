---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update garden-kube-apiserver to <code>5.3.0</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/garden-kube-apiserver/compare/v5.2.0...v5.3.0

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.49.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixes the cert controller manager's observability configuration. by @rickardsjp [#356]
## 🏃 Others

- `[OPERATOR]` Support for using a `CA` issuer as default issuer. by @MartinWeindel [#337]
- `[OPERATOR]` `extension-shoot-cert-service` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#309]
# [gardener/cert-management]

## ✨ New Features

- `[OPERATOR]` Introduce multi-arch build for `linux/arm64` images. by @marc1404 [gardener/cert-management#405]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.49.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.49.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.51.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[OPERATOR]` The admission webhook is now allowed to GET workload identities. by @dimityrmirchev [#1121]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.51.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.51.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.51.1`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.51.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.51.1`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.43.1</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🐛 Bug Fixes

- `[OPERATOR]` The admission webhook is now allowed to GET workload identities. by @dimityrmirchev [#1013]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.43.1`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.43.1`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.43.1`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.43.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.43.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.114.1</code></b></summary>

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


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.114.1</code></b></summary>

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


</details>

<details>
<summary><b>Update gardenlet to <code>1.114.1</code></b></summary>

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


</details>
