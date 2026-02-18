---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update os-gardenlinux to <code>0.36.0</code></b></summary>



## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.36.0`
## Container (OCI) Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.36.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.36.0</code></b></summary>

# [github.com/gardener/gardener-extension-os-ubuntu:v1.36.0]

## 📰 Noteworthy
- `[DEVELOPER]` Some failing tests that were previously not caught by the CI were fixed, missing license header were added and the CI workflow description was fixed to catch such errors in the future. by @MrBatschner [[#283](https://github.com/gardener/gardener-extension-os-ubuntu/pull/283)]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.36.0`
## Container (OCI) Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.36.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.29.0</code></b></summary>

# [github.com/gardener/gardener-extension-runtime-gvisor:v0.29.0]

## 🏃 Others
- `[OPERATOR]` Updated gVisor binaries to 20260126.0. by @gardener-github-actions[bot] [[#346](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/346)]
- `[OPERATOR]` Updated gVisor binaries to 20260209.1. by @gardener-github-actions[bot] [[#359](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/359)]
- `[OPERATOR]` Updated gVisor binaries to 20260202.0. by @gardener-github-actions[bot] [[#355](https://github.com/gardener/gardener-extension-runtime-gvisor/pull/355)]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.29.0`
## Container (OCI) Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.29.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.29.0`


</details>

<details>
<summary><b>Update os-coreos to <code>1.28.0</code></b></summary>



## Helm Charts
- os-coreos: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-coreos:v1.28.0`
## Container (OCI) Images
- gardener-extension-os-coreos: `europe-docker.pkg.dev/gardener-project/releases/extensions/os-coreos:v1.28.0`


</details>

<details>
<summary><b>Update registry-cache to <code>0.20.0</code></b></summary>

# [github.com/gardener/gardener-extension-registry-cache:v0.20.0]

## 🏃 Others
- `[OPERATOR]` Add missing `securityContext` fields to the registry-cache extension components in order to comply with the `restricted` Pod Security Standards policy. by @mstueer [[#473](https://github.com/gardener/gardener-extension-registry-cache/pull/473)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#531](https://github.com/gardener/gardener-extension-registry-cache/pull/531)]
- `[OPERATOR]` The registry image is now referred by digest instead of tag. The upstream image `docker.io/library/registry` (and later on `europe-docker.pkg.dev/gardener-project/releases/3rd/registry`) is (by design) rebuilt frequently. by @ialidzhikov [[#523](https://github.com/gardener/gardener-extension-registry-cache/pull/523)]
- `[DEVELOPER]` The base image of registry-cache components is updated to `gcr.io/distroless/static-debian13:nonroot`. by @ialidzhikov [[#505](https://github.com/gardener/gardener-extension-registry-cache/pull/505)]

## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.20.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.20.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.20.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.20.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.20.0`


</details>
