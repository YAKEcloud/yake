---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-azure to <code>1.45.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where only one infra mutator gets called by @AndreasBurger [#911]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.45.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.45.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.98.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing gardenlet to panic while deleting `dependency-watchdog-access` secrets for workerless Shoots if the `status.technicalID` is not set for the Shoot is now fixed. by @shafeeqes [#10068]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.98.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing gardenlet to panic while deleting `dependency-watchdog-access` secrets for workerless Shoots if the `status.technicalID` is not set for the Shoot is now fixed. by @shafeeqes [#10068]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.98.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing gardenlet to panic while deleting `dependency-watchdog-access` secrets for workerless Shoots if the `status.technicalID` is not set for the Shoot is now fixed. by @shafeeqes [#10068]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.98.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been upgraded.  
  - github.com/gardener/autoscaler v1.29.0->v1.29.1  
  - github.com/gardener/autoscaler v1.28.2->v1.28.3  
  - github.com/gardener/autoscaler v1.27.2->v1.27.3 by @gardener-ci-robot [#10076]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.98.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been upgraded.  
  - github.com/gardener/autoscaler v1.29.0->v1.29.1  
  - github.com/gardener/autoscaler v1.28.2->v1.28.3  
  - github.com/gardener/autoscaler v1.27.2->v1.27.3 by @gardener-ci-robot [#10076]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.98.2</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been upgraded.  
  - github.com/gardener/autoscaler v1.29.0->v1.29.1  
  - github.com/gardener/autoscaler v1.28.2->v1.28.3  
  - github.com/gardener/autoscaler v1.27.2->v1.27.3 by @gardener-ci-robot [#10076]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.98.2`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.98.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.98.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.98.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.98.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.98.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.98.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.98.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.98.2`


</details>

<details>
<summary><b>Update dashboard to <code>1.76.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[USER]` DNS configuration is now maintained under `spec.extensions`. When modifying the DNS configuration of an existing shoot, the settings will be migrated to this new location, and the `syncProvidersFromShootSpecDNS` flag will be set to false by @grolu [#1888]
- `[USER]` The basic auth observability URLs and credentials are hidden if the OIDC observability URLs are displayed. Instead, fetch the credentials from the `<shootname>.monitoring` `Secret`. See also https://github.com/gardener/gardener/issues/9867 by @petersutter [#1899]
- `[DEVELOPER]` The local Vite dev server now starts on HTTPS at `https://localhost:8443` instead of `http://localhost:8080`. Run `yarn setup` to generate a server certificate and add the CA to the macOS keychain. by @holgerkoser [#1894]
## ✨ New Features

- `[USER]` Added support for DDNS / RFC2136 DNS provider by @grolu [#1889]
- `[USER]` Reflect search query on project clusters page in URL by @petersutter [#1952]
- `[USER]` The OIDC observability URLs can now be displayed for `Shoot` clusters, if enabled by the administrator by @petersutter [#1899]
- `[USER]` You can now configure custom shoot fields directly from the dashboard using the new editor, eliminating the need to use `kubectl`. by @petersutter [#1926]
- `[USER]` Enhanced DNS configuration logic to configure extension DNS settings in the `spec.extensions` section by @grolu [#1888]
- `[OPERATOR]` In order to mitigate Cross-Site Request Forgery (CSRF) attacks a random value is now part of the `state` parameter during the OIDC authorization code flow. by @holgerkoser [#1894]
- `[OPERATOR]` Added [host-prefix](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes#host-prefix) to all cookie names. by @holgerkoser [#1894]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fixed debugging issues by updating vscode-jest-runner config and scripts. by @holgerkoser [#1923]
## 🏃 Others

- `[USER]` Readiness Chips improvement: All `Shoot` constraints that are not in the condition `status != "True"` are shown. This includes conditions with statuses `"False"`, `"Unknown"` and `"Progressing"`. Previously, only constraints with an error code were displayed. by @petersutter [#1887]
- `[DEVELOPER]` Refactored store to use context and getters, and improved frontend components by eliminating fuzzy interfaces and direct store data mapping for better maintainability and quality. by @holgerkoser [#1838]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.76.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.76.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[USER]` DNS configuration is now maintained under `spec.extensions`. When modifying the DNS configuration of an existing shoot, the settings will be migrated to this new location, and the `syncProvidersFromShootSpecDNS` flag will be set to false by @grolu [#1888]
- `[USER]` The basic auth observability URLs and credentials are hidden if the OIDC observability URLs are displayed. Instead, fetch the credentials from the `<shootname>.monitoring` `Secret`. See also https://github.com/gardener/gardener/issues/9867 by @petersutter [#1899]
- `[DEVELOPER]` The local Vite dev server now starts on HTTPS at `https://localhost:8443` instead of `http://localhost:8080`. Run `yarn setup` to generate a server certificate and add the CA to the macOS keychain. by @holgerkoser [#1894]
## ✨ New Features

- `[USER]` Added support for DDNS / RFC2136 DNS provider by @grolu [#1889]
- `[USER]` Reflect search query on project clusters page in URL by @petersutter [#1952]
- `[USER]` The OIDC observability URLs can now be displayed for `Shoot` clusters, if enabled by the administrator by @petersutter [#1899]
- `[USER]` You can now configure custom shoot fields directly from the dashboard using the new editor, eliminating the need to use `kubectl`. by @petersutter [#1926]
- `[USER]` Enhanced DNS configuration logic to configure extension DNS settings in the `spec.extensions` section by @grolu [#1888]
- `[OPERATOR]` In order to mitigate Cross-Site Request Forgery (CSRF) attacks a random value is now part of the `state` parameter during the OIDC authorization code flow. by @holgerkoser [#1894]
- `[OPERATOR]` Added [host-prefix](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes#host-prefix) to all cookie names. by @holgerkoser [#1894]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fixed debugging issues by updating vscode-jest-runner config and scripts. by @holgerkoser [#1923]
## 🏃 Others

- `[USER]` Readiness Chips improvement: All `Shoot` constraints that are not in the condition `status != "True"` are shown. This includes conditions with statuses `"False"`, `"Unknown"` and `"Progressing"`. Previously, only constraints with an error code were displayed. by @petersutter [#1887]
- `[DEVELOPER]` Refactored store to use context and getters, and improved frontend components by eliminating fuzzy interfaces and direct store data mapping for better maintainability and quality. by @holgerkoser [#1838]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.76.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.99.0</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Merge the CoreDNS and Node Local DNS dashboards into a single improved DNS dashboard by @vicwicker [#10034]
## 🏃 Others

- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/kubernetesui/metrics-scraper` image has been updated to `v1.0.9`. by @gardener-ci-robot [#10055]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.53.1`. by @gardener-ci-robot [#10104]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.17`. [Release Notes](https://togithub.com/credativ/vali/releases/tag/v2.2.17) by @gardener-ci-robot [#10069]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.53.0`. by @gardener-ci-robot [#10002]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.30.4`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.30.4) by @gardener-ci-robot [#10048]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/kubernetesui/dashboard` image has been updated to `v2.7.0`. by @gardener-ci-robot [#10057]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/alpine` image has been updated to `3.19.2`. by @gardener-ci-robot [#10054]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.4`. by @gardener-ci-robot [#10043]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.10.2`. by @gardener-ci-robot [#10084]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.0`. by @gardener-ci-robot [#10089]
- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.32`. [Release Notes](https://togithub.com/credativ/plutono/releases/tag/v7.5.32) by @gardener-ci-robot [#10074]
- `[OPERATOR]` [OPERATOR] Optional deployment of cert-management component by @MartinWeindel [#9957]
- `[OPERATOR]` Adds the garden_seed_info metric to the longterm prometheus scrape config by @dmahmalat-sap [#10016]
- `[OPERATOR]` Gardener logging stack now features fluent-bit v3. by @nickytd [#10064]
- `[OPERATOR]` Infrastructure extensions can now propagate networking ranges (nodes, pods & services) to the shoot status. by @ScheererJ [#9998]
- `[USER]` Erroneous warnings for incomplete shoots credentials rotation has been fixed. by @oliver-goetz [#10059]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.99.0</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Merge the CoreDNS and Node Local DNS dashboards into a single improved DNS dashboard by @vicwicker [#10034]
## 🏃 Others

- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/kubernetesui/metrics-scraper` image has been updated to `v1.0.9`. by @gardener-ci-robot [#10055]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.53.1`. by @gardener-ci-robot [#10104]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.17`. [Release Notes](https://togithub.com/credativ/vali/releases/tag/v2.2.17) by @gardener-ci-robot [#10069]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.53.0`. by @gardener-ci-robot [#10002]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.30.4`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.30.4) by @gardener-ci-robot [#10048]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/kubernetesui/dashboard` image has been updated to `v2.7.0`. by @gardener-ci-robot [#10057]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/alpine` image has been updated to `3.19.2`. by @gardener-ci-robot [#10054]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.4`. by @gardener-ci-robot [#10043]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.10.2`. by @gardener-ci-robot [#10084]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.0`. by @gardener-ci-robot [#10089]
- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.32`. [Release Notes](https://togithub.com/credativ/plutono/releases/tag/v7.5.32) by @gardener-ci-robot [#10074]
- `[OPERATOR]` [OPERATOR] Optional deployment of cert-management component by @MartinWeindel [#9957]
- `[OPERATOR]` Adds the garden_seed_info metric to the longterm prometheus scrape config by @dmahmalat-sap [#10016]
- `[OPERATOR]` Gardener logging stack now features fluent-bit v3. by @nickytd [#10064]
- `[OPERATOR]` Infrastructure extensions can now propagate networking ranges (nodes, pods & services) to the shoot status. by @ScheererJ [#9998]
- `[USER]` Erroneous warnings for incomplete shoots credentials rotation has been fixed. by @oliver-goetz [#10059]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.99.0</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Merge the CoreDNS and Node Local DNS dashboards into a single improved DNS dashboard by @vicwicker [#10034]
## 🏃 Others

- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/kubernetesui/metrics-scraper` image has been updated to `v1.0.9`. by @gardener-ci-robot [#10055]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.53.1`. by @gardener-ci-robot [#10104]
- `[DEPENDENCY]` The `credativ/vali` image has been updated to `v2.2.17`. [Release Notes](https://togithub.com/credativ/vali/releases/tag/v2.2.17) by @gardener-ci-robot [#10069]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.53.0`. by @gardener-ci-robot [#10002]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.30.4`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.30.4) by @gardener-ci-robot [#10048]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/kubernetesui/dashboard` image has been updated to `v2.7.0`. by @gardener-ci-robot [#10057]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/alpine` image has been updated to `3.19.2`. by @gardener-ci-robot [#10054]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.4`. by @gardener-ci-robot [#10043]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.10.2`. by @gardener-ci-robot [#10084]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.0`. by @gardener-ci-robot [#10089]
- `[DEPENDENCY]` The `credativ/plutono` image has been updated to `v7.5.32`. [Release Notes](https://togithub.com/credativ/plutono/releases/tag/v7.5.32) by @gardener-ci-robot [#10074]
- `[OPERATOR]` [OPERATOR] Optional deployment of cert-management component by @MartinWeindel [#9957]
- `[OPERATOR]` Adds the garden_seed_info metric to the longterm prometheus scrape config by @dmahmalat-sap [#10016]
- `[OPERATOR]` Gardener logging stack now features fluent-bit v3. by @nickytd [#10064]
- `[OPERATOR]` Infrastructure extensions can now propagate networking ranges (nodes, pods & services) to the shoot status. by @ScheererJ [#9998]
- `[USER]` Erroneous warnings for incomplete shoots credentials rotation has been fixed. by @oliver-goetz [#10059]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.99.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.99.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.99.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.99.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.99.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.99.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.99.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.99.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.99.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.99.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.99.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.99.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.76.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixed a bug where navigating between cluster details pages caused new ticket titles to inherit the title from the previously viewed cluster by @petersutter [#1976]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.76.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.76.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Fixed a bug where navigating between cluster details pages caused new ticket titles to inherit the title from the previously viewed cluster by @petersutter [#1976]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.76.1`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.5.1</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🏃 Others

- `[OPERATOR]` The memory of the `rsyslog.service` systemd unit is now limited via a drop-in config. The following configurations are used: `MemoryMin=15M`, `MemoryHigh=150M`, `MemoryMax=300M`, `MemorySwapMax=0` by @plkokanov [#139]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.5.1`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.5.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.19.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[OPERATOR]` The address lookups for domain names in `DNSEntries` to create  `A` or `AAAA` records has been moved to a separate background processing to avoid periodic reconciliation of such `DNSEntries`.  
  Additionally, it is now possible to create `A` or `AAAA` records instead of a `CNAME` record for a single domain name target by specifying `.spec.resolveTargetsToAddresses: true`. by @MartinWeindel [#377]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.4 to 1.22.5. by @dependabot[bot] [#376]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.19.0`


</details>

<details>
<summary><b>Update networking-calico to <code>1.40.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## 🏃 Others

- `[OPERATOR]` This extension is now using the new way of providing monitoring configuration (ref [GEP-19](https://github.com/gardener/gardener/blob/master/docs/proposals/19-migrating-observability-stack-to-operators.md)) in case a shoot cluster's Prometheus has been migrated to management via `prometheus-operator`. by @rfranzke [#394]
- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-calico` Helm chart. by @timuthy [#437]
- `[OPERATOR]` Downgraded calico-cni container to v3.27.0 to prevent cni copy failures. by @ScheererJ [#404]
- `[OPERATOR]` allow users to enable node to node wireguard encryption by @hown3d [#381]
- `[OPERATOR]` Enable automatic MTU detection as default. by @axel7born [#387]
- `[OPERATOR]` Update calico to `v3.27.4`. by @DockToFuture [#440]

## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.40.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.40.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.49.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.96.1 to 1.97.0. by @dependabot[bot] [#342]
- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-shoot-dns-service` Helm chart. by @timuthy [#353]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.95.0 to 1.96.1. by @dependabot[bot] [#336]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.97.0 to 1.98.0. by @dependabot[bot] [#346]
- `[OPERATOR]` Bumps golang from 1.22.3 to 1.22.4. by @dependabot[bot] [#338]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.98.0 to 1.99.0. by @dependabot[bot] [#355]
# [gardener/external-dns-management]

## ✨ New Features

- `[OPERATOR]` The address lookups for domain names in `DNSEntries` to create  `A` or `AAAA` records has been moved to a separate background processing to avoid periodic reconciliation of such `DNSEntries`.  
  Additionally, it is now possible to create `A` or `AAAA` records instead of a `CNAME` record for a single domain name target by specifying `.spec.resolveTargetsToAddresses: true`. by @MartinWeindel [gardener/external-dns-management#377]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.4 to 1.22.5. by @dependabot[bot] [gardener/external-dns-management#376]
- `[OPERATOR]` Update golang from `1.22.3` to `1.22.4` by @MartinWeindel [gardener/external-dns-management#372]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.49.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.49.0`


</details>
