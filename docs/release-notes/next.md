---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-cilium to <code>1.42.2</code></b></summary>

# [github.com/gardener/gardener-extension-networking-cilium:v1.42.2]

## 🏃 Others
- `[OPERATOR]` Update cilium to v1.17.7 by @ScheererJ [[#626](https://github.com/gardener/gardener-extension-networking-cilium/pull/626)]


</details>

<details>
<summary><b>Update dashboard to <code>1.81.3</code></b></summary>

# [github.com/gardener/dashboard:1.81.3]

## 🐛 Bug Fixes
- `[USER]` Infrastructure dependency, resource depletion, and quota exceeded errors no longer appear as credential issues. by @gardener-github-actions[bot] [[#2591](https://github.com/gardener/dashboard/pull/2591)]
- `[USER]` Fixed an issue where worker disk performance settings (IOPS) weren’t saved after editing, ensuring your changes now persist. by @gardener-github-actions[bot] [[#2609](https://github.com/gardener/dashboard/pull/2609)]


</details>

<details>
<summary><b>Update dashboard to <code>1.81.3</code></b></summary>

# [github.com/gardener/dashboard:1.81.3]

## 🐛 Bug Fixes
- `[USER]` Infrastructure dependency, resource depletion, and quota exceeded errors no longer appear as credential issues. by @gardener-github-actions[bot] [[#2591](https://github.com/gardener/dashboard/pull/2591)]
- `[USER]` Fixed an issue where worker disk performance settings (IOPS) weren’t saved after editing, ensuring your changes now persist. by @gardener-github-actions[bot] [[#2609](https://github.com/gardener/dashboard/pull/2609)]


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.24.1</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-filter:v0.24.1]

## 🏃 Others
- `[OPERATOR]` Fix priorityClassName for deployment on Garden runtime cluster. by @MartinWeindel [[#266](https://github.com/gardener/gardener-extension-shoot-networking-filter/pull/266)]


## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.24.1`
- shoot-networking-filter-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-application:v0.24.1`
- shoot-networking-filter-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter-admission-runtime:v0.24.1`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.24.1`
## Container (OCI) Images
- gardener-extension-shoot-networking-filter-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter-admission:v0.24.1`
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.24.1`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.24.1`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.29.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-networking-problemdetector:v0.29.0]

## 🏃 Others
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/blob/master/example/extension.yaml) by @timuthy [[#271](https://github.com/gardener/gardener-extension-shoot-networking-problemdetector/pull/271)]


## Helm Charts
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.29.0`
## Container (OCI) Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.29.0`


</details>

<details>
<summary><b>Update acl to <code>1.11.0</code></b></summary>

<!-- Release notes generated using configuration in .github/release.yaml at main -->

## What's Changed
### 🤖 Dependencies
* Update k8s packages to v0.32.7 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/155
* Update module github.com/spf13/pflag to v1.0.7 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/156
* Update dependency go to v1.24.6 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/153
* Update k8s packages to v0.32.8 (patch) by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/160
* Update k8s.io/utils digest to 0af2bda by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/162
* Update module github.com/onsi/gomega to v1.38.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/157
* Update actions/checkout action to v5 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/158
* Update dependency go to v1.25.0 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/159
* Update module github.com/spf13/cobra to v1.10.1 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/164
* Update module github.com/onsi/ginkgo/v2 to v2.25.2 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/165
* Update module github.com/spf13/pflag to v1.0.10 by @renovate[bot] in https://github.com/stackitcloud/gardener-extension-acl/pull/163
### ℹ️ Other Changes
* fix: add input validation to admission controller by @domdom82 in https://github.com/stackitcloud/gardener-extension-acl/pull/152


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-acl/compare/v1.10.0...v1.11.0

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.53.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-cert-service:v1.53.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Deployment on runtime cluster: `cert-class` needs also to be set for source controllers. by @MartinWeindel [[#461](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/461)]
- `[USER]` Control-plane certificate: Use `dnsNames` field instead of `commonName` for long domain names > 64 characters. by @MartinWeindel [[#445](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/445)]

## 🏃 Others
- `[OPERATOR]` `shoot-cert-service` no longer supports Shoots with Кubernetes version <= 1.28. by @MartinWeindel [[#437](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/437)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#438](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/438)]


## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.53.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.53.0`


</details>
