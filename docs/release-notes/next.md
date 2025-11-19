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
