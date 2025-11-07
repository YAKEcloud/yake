---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-azure to <code>1.56.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.56.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix bug in Azure client failing to make use of Workload Identity in Azure China by downgrading the module `github.com/AzureAD/microsoft-authentication-library-for-go` to version `v1.4.2`. by @vpnachev [[#1358](https://github.com/gardener/gardener-extension-provider-azure/pull/1358)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.56.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.56.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.56.1`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.56.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.56.1`


</details>
