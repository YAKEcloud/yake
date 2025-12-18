---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-gcp to <code>1.48.2</code></b></summary>



## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.48.2`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.48.2`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.48.2`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.48.2`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.48.2`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.76.0</code></b></summary>

# [github.com/gardener/gardener-extension-shoot-dns-service:v1.76.0]

## 🏃 Others
- `[USER]` Allow to use next-generation dns-controller-manager per configuration in shoot manifest with `.spec.extensions[@type="shoot-dns-service"].providerConfig.useNextGenerationController=true`. This feature has alpha status. by @MartinWeindel [[#615](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/615)]

# [github.com/gardener/external-dns-management:v0.34.0]

## 🐛 Bug Fixes
- `[OPERATOR]` In an edge case, the data section for a `Secret` is not dropped anymore when it is not longer used by any provider and the secret is updated to remove the finalizer. by @MartinWeindel [[#723](https://github.com/gardener/external-dns-management/pull/723)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.76.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.76.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.76.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.76.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.76.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.66.2</code></b></summary>

# [github.com/gardener/gardener-extension-provider-aws:v1.66.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Set --strict-topology for the external provisioner of the EBS CSI Driver. by @hebelsan [[#1610](https://github.com/gardener/gardener-extension-provider-aws/pull/1610)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.66.2`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.66.2`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.66.2`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.66.2`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.66.2`


</details>

<details>
<summary><b>Update provider-azure to <code>1.57.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.57.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Support not only the DNS-specific keys for dns provider secrets, but in addition the infrastructure secret keys. by @wpross [[#1404](https://github.com/gardener/gardener-extension-provider-azure/pull/1404)]

## 🏃 Others
- `[OPERATOR]` Fix a bug where the namespace for the discovery of the kubeconfig secret was incorrect during the remedy-controller removal. by @kon-angelo [[#1405](https://github.com/gardener/gardener-extension-provider-azure/pull/1405)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.57.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.57.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.57.1`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.57.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.57.1`


</details>
