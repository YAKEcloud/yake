---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-gcp to <code>1.39.0</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 📰 Noteworthy

- `[USER]` In order to reduce log events, only the minimal required changes will be made when applying firewall rules using the flow-reconciler. This matches the behaviour of the Terraform-reconciler. by @AndreasBurger [#831]
- `[OPERATOR]` Switch to upstream CCM for kubernetes versions greater than `1.31.0` by @AndreasBurger [#842]
## ✨ New Features

- `[USER]` Enable support for the field `shoot.Spec.CloudProfile` alongside `shoot.Spec.CloudProfileName` and enable the future use of `NamespacedCloudProfile`. by @LucaBernstein [#853]
- `[USER]` The provider-gcp extension does now support shoot clusters with Kubernetes version 1.31. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md) before upgrading to 1.31.  by @ialidzhikov [#844]
- `[USER]` The admission webhook now validates `CredentialsBinding`s. by @dimityrmirchev [#832]
## 🏃 Others

- `[OPERATOR]` The provider-gcp extension no longer configures min/maxAllowed in any managed VPA resource. by @AndreasBurger [#854]
- `[OPERATOR]` Update CCM and CSI-sidecar containers to latest version by @AndreasBurger [#816]
- `[OPERATOR]` Disable soft-delete for new GCP `backupbuckets`. by @kon-angelo [#834]
- `[DEVELOPER]` Update gardener/gardener to 1.103.0 and golang to 1.23.0 by @hebelsan [#841]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.39.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.39.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.39.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.39.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.39.0`


</details>

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.25.0</code></b></summary>

# [gardener/network-problem-detector]

## 📰 Noteworthy

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [gardener/network-problem-detector#75]
## ✨ New Features

- `[USER]` Support tcp checks for ipv6 endpoints. by @DockToFuture [gardener/network-problem-detector#76]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.6 to 1.23.0. by @dependabot[bot] [gardener/network-problem-detector#71]
- `[OPERATOR]` Bumps golang from 1.23.0 to 1.23.1. by @dependabot[bot] [gardener/network-problem-detector#73]
- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [gardener/network-problem-detector#70]
# [gardener/gardener-extension-shoot-networking-problemdetector]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#166]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.100.0 to 1.101.0. by @dependabot[bot] [#170]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.103.0 to 1.105.0. by @dependabot[bot] [#181]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.101.0 to 1.102.0. by @dependabot[bot] [#174]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @ScheererJ [#182]
- `[OPERATOR]` Bumps golang from 1.23.1 to 1.23.2. by @dependabot[bot] [#180]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.99.0 to 1.100.0. by @dependabot[bot] [#167]

## Helm Charts
- shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-problemdetector:v0.25.0`
## Docker Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.25.0`


</details>
