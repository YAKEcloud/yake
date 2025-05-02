---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.116.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing the `cloudprovider` Secret to contain both static credentials and workload identity config, which are mutually exclusive, when migrating to workload identity is now fixed. by @dimityrmirchev [#11847]
- `[DEVELOPER]` Fix malformed file path error on `go get github.com/gardener/gardener@v1.116.0` by @MartinWeindel [#11820]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.116.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing the `cloudprovider` Secret to contain both static credentials and workload identity config, which are mutually exclusive, when migrating to workload identity is now fixed. by @dimityrmirchev [#11847]
- `[DEVELOPER]` Fix malformed file path error on `go get github.com/gardener/gardener@v1.116.0` by @MartinWeindel [#11820]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.116.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` An issue causing the `cloudprovider` Secret to contain both static credentials and workload identity config, which are mutually exclusive, when migrating to workload identity is now fixed. by @dimityrmirchev [#11847]
- `[DEVELOPER]` Fix malformed file path error on `go get github.com/gardener/gardener@v1.116.0` by @MartinWeindel [#11820]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.116.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` When `IstioTLSTermination` feature gate is enabled the apiserver-proxy related EnvoyFilter is not deployed for the virtual-garden anymore. by @oliver-goetz [#11896]
## 🏃 Others

- `[OPERATOR]` Shoots that are currently in deletion now get ignored by the `RemoveAPIServerProxyLegacyPort` feature gate validation. by @Wieneo [#11887]
- `[OPERATOR]` Deploy MCM with higher `concurrent-syncs`, `kube-api-qps` and `kube-api-burst`. by @hendrikKahl [#11880]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.116.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` When `IstioTLSTermination` feature gate is enabled the apiserver-proxy related EnvoyFilter is not deployed for the virtual-garden anymore. by @oliver-goetz [#11896]
## 🏃 Others

- `[OPERATOR]` Shoots that are currently in deletion now get ignored by the `RemoveAPIServerProxyLegacyPort` feature gate validation. by @Wieneo [#11887]
- `[OPERATOR]` Deploy MCM with higher `concurrent-syncs`, `kube-api-qps` and `kube-api-burst`. by @hendrikKahl [#11880]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.116.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` When `IstioTLSTermination` feature gate is enabled the apiserver-proxy related EnvoyFilter is not deployed for the virtual-garden anymore. by @oliver-goetz [#11896]
## 🏃 Others

- `[OPERATOR]` Shoots that are currently in deletion now get ignored by the `RemoveAPIServerProxyLegacyPort` feature gate validation. by @Wieneo [#11887]
- `[OPERATOR]` Deploy MCM with higher `concurrent-syncs`, `kube-api-qps` and `kube-api-burst`. by @hendrikKahl [#11880]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.116.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Fix an issue where envoy filters to handle proxy-protocol are not deployed, even if configured for istio load-balancers. by @axel7born [#11920]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.116.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Fix an issue where envoy filters to handle proxy-protocol are not deployed, even if configured for istio load-balancers. by @axel7born [#11920]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.116.3</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` Fix an issue where envoy filters to handle proxy-protocol are not deployed, even if configured for istio load-balancers. by @axel7born [#11920]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.116.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.116.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.116.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.116.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.116.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.116.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.116.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.116.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.116.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.116.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.116.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.116.3`


</details>
