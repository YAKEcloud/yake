---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


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

<details>
<summary><b>Update gardener-controlplane to <code>1.114.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The step which deploys the source `BackupEntry` during the `restore` phase of control plane migration now depends on the successful deployment of the `Shoot`'s control plane namespace. This fixes a potential race condition which could cause the `source-etcd-backup` Secret to not be deployed in the `Shoot`'s control plane namespace and the subsequent step which copies etcd backups to time out. by @plkokanov [#11813]
## 🏃 Others

- `[DEVELOPER]` An issue causing the `should copy data to pod` VPN tunnel test-machinery integration test to fail is now fixed. by @ialidzhikov [#11805]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.1` to `1.30.2`.  by @gardener-ci-robot [#11752]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @gardener-ci-robot [#11740]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @gardener-ci-robot [#11738]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.114.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.114.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.114.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.114.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.114.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.114.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.114.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.114.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.114.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.114.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.114.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.114.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.114.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The step which deploys the source `BackupEntry` during the `restore` phase of control plane migration now depends on the successful deployment of the `Shoot`'s control plane namespace. This fixes a potential race condition which could cause the `source-etcd-backup` Secret to not be deployed in the `Shoot`'s control plane namespace and the subsequent step which copies etcd backups to time out. by @plkokanov [#11813]
## 🏃 Others

- `[DEVELOPER]` An issue causing the `should copy data to pod` VPN tunnel test-machinery integration test to fail is now fixed. by @ialidzhikov [#11805]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.1` to `1.30.2`.  by @gardener-ci-robot [#11752]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @gardener-ci-robot [#11740]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @gardener-ci-robot [#11738]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.114.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.114.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.114.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.114.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.114.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.114.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.114.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.114.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.114.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.114.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.114.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.114.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.114.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` The step which deploys the source `BackupEntry` during the `restore` phase of control plane migration now depends on the successful deployment of the `Shoot`'s control plane namespace. This fixes a potential race condition which could cause the `source-etcd-backup` Secret to not be deployed in the `Shoot`'s control plane namespace and the subsequent step which copies etcd backups to time out. by @plkokanov [#11813]
## 🏃 Others

- `[DEVELOPER]` An issue causing the `should copy data to pod` VPN tunnel test-machinery integration test to fail is now fixed. by @ialidzhikov [#11805]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.1` to `1.30.2`.  by @gardener-ci-robot [#11752]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.0` to `v1.12.1`.  by @gardener-ci-robot [#11740]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.4` to `v1.11.5`.  by @gardener-ci-robot [#11738]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.114.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.114.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.114.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.114.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.114.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.114.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.114.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.114.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.114.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.114.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.114.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.114.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.114.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` When `IstioTLSTermination` feature gate is enabled the apiserver-proxy related EnvoyFilter is not deployed for the virtual-garden anymore. by @oliver-goetz [#11894]
- `[USER]` An issue causing the `cloudprovider` Secret to contain both static credentials and workload identity config, which are mutually exclusive, when migrating to workload identity is now fixed. by @dimityrmirchev [#11849]
## 🏃 Others

- `[OPERATOR]` Shoots that are currently in deletion now get ignored by the `RemoveAPIServerProxyLegacyPort` feature gate validation. by @Wieneo [#11889]
- `[OPERATOR]` Deploy MCM with higher `concurrent-syncs`, `kube-api-qps` and `kube-api-burst`. by @hendrikKahl [#11884]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.114.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.114.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.114.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.114.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.114.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.114.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.114.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.114.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.114.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.114.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.114.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.114.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.114.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` When `IstioTLSTermination` feature gate is enabled the apiserver-proxy related EnvoyFilter is not deployed for the virtual-garden anymore. by @oliver-goetz [#11894]
- `[USER]` An issue causing the `cloudprovider` Secret to contain both static credentials and workload identity config, which are mutually exclusive, when migrating to workload identity is now fixed. by @dimityrmirchev [#11849]
## 🏃 Others

- `[OPERATOR]` Shoots that are currently in deletion now get ignored by the `RemoveAPIServerProxyLegacyPort` feature gate validation. by @Wieneo [#11889]
- `[OPERATOR]` Deploy MCM with higher `concurrent-syncs`, `kube-api-qps` and `kube-api-burst`. by @hendrikKahl [#11884]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.114.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.114.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.114.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.114.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.114.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.114.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.114.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.114.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.114.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.114.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.114.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.114.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.114.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` When `IstioTLSTermination` feature gate is enabled the apiserver-proxy related EnvoyFilter is not deployed for the virtual-garden anymore. by @oliver-goetz [#11894]
- `[USER]` An issue causing the `cloudprovider` Secret to contain both static credentials and workload identity config, which are mutually exclusive, when migrating to workload identity is now fixed. by @dimityrmirchev [#11849]
## 🏃 Others

- `[OPERATOR]` Shoots that are currently in deletion now get ignored by the `RemoveAPIServerProxyLegacyPort` feature gate validation. by @Wieneo [#11889]
- `[OPERATOR]` Deploy MCM with higher `concurrent-syncs`, `kube-api-qps` and `kube-api-burst`. by @hendrikKahl [#11884]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.114.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.114.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.114.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.114.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.114.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.114.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.114.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.114.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.114.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.114.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.114.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.114.3`


</details>
