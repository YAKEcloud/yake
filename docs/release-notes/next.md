---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.22.1</code></b></summary>

# [gardener/external-dns-management]

## 📰 Noteworthy

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [#394]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [#398]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.22.1`
## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.22.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.54.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.107.0 to 1.108.0. by @dependabot[bot] [#399]
- `[OPERATOR]` Reduce default values for resource utilisation of shoot-dns-service controller in the control plane. by @MartinWeindel [#392]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [#387]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.105.0 to 1.106.0. by @dependabot[bot] [#390]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.106.0 to 1.107.0. by @dependabot[bot] [#394]
# [gardener/external-dns-management]

## 📰 Noteworthy

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [gardener/external-dns-management#394]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [gardener/external-dns-management#398]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.54.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.54.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.54.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.54.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.54.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.11.0</code></b></summary>

## What's Changed
* Bump gardener to `v1.105.3` by @Duciwuci in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/119


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.10.0...v0.11.0

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.46.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Reduce default values for resource utilisation of cert-management controller in the control plane. by @MartinWeindel [#308]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.106.0 to 1.107.0. by @dependabot[bot] [#310]
- `[OPERATOR]` Bumps golang from 1.23.2 to 1.23.3. by @dependabot[bot] [#311]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.105.0 to 1.106.0. by @dependabot[bot] [#306]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.107.0 to 1.108.0. by @dependabot[bot] [#315]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.46.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.46.0`


</details>

<details>
<summary><b>Update backup-s3 to <code>0.7.0</code></b></summary>

## General Changes
* Revendor g/g v1.100 (https://github.com/metal-stack/gardener-extension-backup-s3/pull/11) @Gerrit91 


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.20</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.19...0.7.20

</details>

<details>
<summary><b>Update provider-azure to <code>1.49.0</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[USER]` Deprecate DNSRecordConfig object. Please configure the target Azure management API via the provided secret by @kon-angelo [#1018]
## ✨ New Features

- `[USER]` Enable extra-create-metadata in csi-provisioner. by @kon-angelo [#1008]
## 🏃 Others

- `[DEPENDENCY]` Update go to version 1.23.3 by @hebelsan [#1005]
- `[DEPENDENCY]` Update gardener/gardener to v1.108.0 by @hebelsan [#1014]
- `[OPERATOR]` Create bastion vm from the info provided in the cloud profile bastion section by @hebelsan [#948]
- `[OPERATOR]` Fix an issue where the subnet name was not calculated correctly in the migration to multi-subnet setup by @kon-angelo [#1004]
- `[OPERATOR]` Updating CSI driver provisioner ClusterRole rules by @hebelsan [#988]
- `[OPERATOR]` Remove outdated "Basic" SKU loadbalancer migration documentation. by @kon-angelo [#1017]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#998]
- `[OPERATOR]` Add `NamespacedCloudProfile` admission mutation and validation to support custom machine images and types. by @LucaBernstein [#1016]
- `[OPERATOR]` Added validation to prevent IPv6-only/dual-stack clusters as they are not supported, yet. by @ScheererJ [#993]
- `[DEVELOPER]` Add gosec as sast makefile target by @hebelsan [#1006]
- `[DEVELOPER]` Update gardener/gardener to v1.105.0 by @hebelsan [#989]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.49.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.49.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.49.0`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.49.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.49.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.43.0</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## ⚠️ Breaking Changes

- `[OPERATOR]` Deprecated configuring bastion via helm chart config map by @hebelsan [#838]
## 📰 Noteworthy

- `[OPERATOR]` Added support for configuring bastion vm from CloudProfile's bastion section by @hebelsan [#838]
## 🏃 Others

- `[DEPENDENCY]` Add gosec as sast makefile target by @hebelsan [#902]
- `[DEPENDENCY]` Update go to version 1.23.3 by @hebelsan [#900]
- `[OPERATOR]` Fix an issue where provider-openstack required permissions for share network operations even when not required by the `InfrastructureConfig`. by @kon-angelo [#885]
- `[OPERATOR]` Update gardener/gardener to v1.107.0 by @hebelsan [#896]
- `[OPERATOR]` Fix an issue where the deletion with the flow reconciler would fail if the network was already deleted. by @kon-angelo [#898]
- `[OPERATOR]` Added validation to prevent IPv6-only/dual-stack clusters as they are not supported, yet. by @ScheererJ [#886]
- `[OPERATOR]` Remove the duplicate provider type check from the admission webhooks. by @LucaBernstein [#895]
- `[OPERATOR]` Fix possible nil-pointer deref when looking for networks. during reconciliation by @AndreasBurger [#879]
- `[OPERATOR]` subnet overlapping, missing expected router and Policy doesn't allow .* to be performed errors are now non-retryable user errors. by @RadaBDimitrova [#894]
- `[OPERATOR]` Updating CSI driver provisioner ClusterRole rules by @hebelsan [#880]
- `[DEVELOPER]` Update gardener/gardener to v1.105.0 by @hebelsan [#881]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.43.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.43.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.43.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.43.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.43.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.26.0</code></b></summary>

# [gardener/gardener-extension-os-ubuntu]

## ⚠️ Breaking Changes

- `[OPERATOR]` This extension is no longer able to run with Gardener versions lower than `v1.90` when the `UseGardenerNodeAgent` feature gate is disabled. by @rfranzke [#126]
## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#143]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @LucaBernstein [#133]
- `[DEVELOPER]` Static Application Security Testing (sast) with `gosec` got enabled on this repository. by @MrBatschner [#163]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.26.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.26.0`


</details>
