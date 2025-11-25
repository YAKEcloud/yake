---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-cilium to <code>1.45.1</code></b></summary>

# [github.com/gardener/gardener-extension-networking-cilium:v1.45.1]

## 🏃 Others
- `[OPERATOR]` Increased backoff limit of hubble-generate-certs job. by @axel7born [[#660](https://github.com/gardener/gardener-extension-networking-cilium/pull/660)]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.45.1`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.45.1`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.45.1`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.45.1`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.45.1`


</details>

<details>
<summary><b>Update networking-calico to <code>1.53.1</code></b></summary>

# [github.com/gardener/gardener-extension-networking-calico:v1.53.1]

## 🏃 Others
- `[OPERATOR]` fix indentation for Helm chart securityContext by @domdom82 [[#750](https://github.com/gardener/gardener-extension-networking-calico/pull/750)]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.53.1`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.53.1`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.53.1`
## Container (OCI) Images
- cni-plugins: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/cni-plugins:v1.53.1`
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.53.1`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.53.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.33.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.33.0]

## 🏃 Others
- `[OPERATOR]` Entry should go to state `Stale`, if its provider is deleted or not responsible after changes by @MartinWeindel [[#718](https://github.com/gardener/external-dns-management/pull/718)]
- `[OPERATOR]` Fix recreation of fully ignored entry with different name. by @MartinWeindel [[#711](https://github.com/gardener/external-dns-management/pull/711)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.33.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.33.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.33.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.27.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.27.0]

## 🏃 Others
- `[OPERATOR]` The wrong handling of the config value for `panic-signal` was fixed by adding enclosing quotes. by @MrBatschner [[#320](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/320)]
- `[OPERATOR]` Updated gVisor binaries to 20251110.0. by @gardener-github-actions[bot] [[#318](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/318)]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.27.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.27.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.27.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.75.0</code></b></summary>

# [github.com/gardener/external-dns-management:v0.33.0]

## 🏃 Others
- `[OPERATOR]` Entry should go to state `Stale`, if its provider is deleted or not responsible after changes by @MartinWeindel [[#718](https://github.com/gardener/external-dns-management/pull/718)]
- `[OPERATOR]` Fix recreation of fully ignored entry with different name. by @MartinWeindel [[#711](https://github.com/gardener/external-dns-management/pull/711)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.75.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.75.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.75.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.75.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.75.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.45.2</code></b></summary>

# [github.com/gardener/gardener-extension-networking-cilium:v1.45.2]

## 🏃 Others
- `[OPERATOR]` Update `node-local-dns` mutate function to init sidecar approach. by @DockToFuture [[#662](https://github.com/gardener/gardener-extension-networking-cilium/pull/662)]

## Helm Charts
- admission-cilium-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-application:v1.45.2`
- admission-cilium-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-cilium-runtime:v1.45.2`
- networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-cilium:v1.45.2`
## Container (OCI) Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.45.2`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.45.2`


</details>

<details>
<summary><b>Update registry-cache to <code>0.19.0</code></b></summary>

# [github.com/gardener/gardener-extension-registry-cache:v0.19.0]

## 🏃 Others
- `[OPERATOR]` Migrate the extension VPAs from the deprecated update mode `Auto` to its only fallback strategy - update mode `Recreate`. by @vitanovs [[#467](https://github.com/gardener/gardener-extension-registry-cache/pull/467)]

## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.19.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.19.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.19.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.19.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.19.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.132.2</code></b></summary>

# [github.com/gardener/gardener:v1.132.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The server block import feature for node-local-dns is now behind a feature gate (`CustomDNSServerInNodeLocalDNS`). by @ialidzhikov [[#13523](https://github.com/gardener/gardener/pull/13523)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.132.2</code></b></summary>

# [github.com/gardener/gardener:v1.132.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The server block import feature for node-local-dns is now behind a feature gate (`CustomDNSServerInNodeLocalDNS`). by @ialidzhikov [[#13523](https://github.com/gardener/gardener/pull/13523)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.132.2</code></b></summary>

# [github.com/gardener/gardener:v1.132.2]

## 🐛 Bug Fixes
- `[OPERATOR]` The server block import feature for node-local-dns is now behind a feature gate (`CustomDNSServerInNodeLocalDNS`). by @ialidzhikov [[#13523](https://github.com/gardener/gardener/pull/13523)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.132.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.132.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.132.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.132.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.132.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.132.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.132.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.132.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.132.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.132.2`


</details>
