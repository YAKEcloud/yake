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
