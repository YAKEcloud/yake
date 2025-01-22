---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update backup-s3 to <code>0.7.1</code></b></summary>

## General Changes

* Remove deployment anti affinity rule. (#12) @Gerrit91


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where gardenlet was missing permissions to read `v1.Events` in the istio ingress namespace in the seed cluster. by @vpnachev [#11163]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.34.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.34.0) by @gardener-ci-robot [#11161]
- `[OPERATOR]` Fix a bug in the gardener operator where the issuer URL domain for workload identity tokens was not prefixed with `discovery.` resulting in invalid OIDC tokens and discovery documents. by @vpnachev [#11158]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.3`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where gardenlet was missing permissions to read `v1.Events` in the istio ingress namespace in the seed cluster. by @vpnachev [#11163]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.34.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.34.0) by @gardener-ci-robot [#11161]
- `[OPERATOR]` Fix a bug in the gardener operator where the issuer URL domain for workload identity tokens was not prefixed with `discovery.` resulting in invalid OIDC tokens and discovery documents. by @vpnachev [#11158]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.3`


</details>

<details>
<summary><b>Update gardenlet to <code>1.110.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix bug where gardenlet was missing permissions to read `v1.Events` in the istio ingress namespace in the seed cluster. by @vpnachev [#11163]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.34.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.34.0) by @gardener-ci-robot [#11161]
- `[OPERATOR]` Fix a bug in the gardener operator where the issuer URL domain for workload identity tokens was not prefixed with `discovery.` resulting in invalid OIDC tokens and discovery documents. by @vpnachev [#11158]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.3`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.3`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.3`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.3`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.3`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.3`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.3`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.3`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.3`


</details>

<details>
<summary><b>Update provider-azure to <code>1.49.3</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix an issue causing nil pointer exception when the remote resource that was once existing and present in the inventory, had been deleted during reconciliation by @AndreasBurger [#1062]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.49.3`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.49.3`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.49.3`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.49.3`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.49.3`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.22</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.21...0.7.22

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.4</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following images have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-recommender`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-updater`: 1.2.1 -> 1.2.2 by @ialidzhikov [#11179]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.4`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.110.4</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following images have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-recommender`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-updater`: 1.2.1 -> 1.2.2 by @ialidzhikov [#11179]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.4`


</details>

<details>
<summary><b>Update gardenlet to <code>1.110.4</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[DEPENDENCY]` The following images have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-recommender`: 1.2.1 -> 1.2.2  
  - `registry.k8s.io/autoscaling/vpa-updater`: 1.2.1 -> 1.2.2 by @ialidzhikov [#11179]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.110.4`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.110.4`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.110.4`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.110.4`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.110.4`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.110.4`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.110.4`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.110.4`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.110.4`


</details>

<details>
<summary><b>Update os-gardenlinux to <code>0.28.0</code></b></summary>

# [gardener/gardener-extension-os-gardenlinux]

## 🏃 Others

- `[OPERATOR]` SAST assets are now collected in the release pipeline and attached to the component-descriptor. by @MrBatschner [#225]
- `[OPERATOR]` remove 11-exec_config.conf & config.toml file creation by @Roncossek [#215]

## Helm Charts
- os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-gardenlinux:v0.28.0`
## Docker Images
- gardener-extension-os-gardenlinux: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-gardenlinux:v0.28.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.14.0</code></b></summary>

## What's Changed
*  bump gardener to `v1.109.0` by @ElDrinko in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/130

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.13.0...v0.14.0

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.56.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 📰 Noteworthy

- `[OPERATOR]` The entry list stored in the extension resource status is now compressed to shift the limit before hitting the request size limit of etcd.  by @MartinWeindel [#416]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.56.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.56.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.56.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.56.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.56.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.79.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Access Restrictions:  
  - This dashboard version requires Gardener version `v1.107.0` if access restrictions are configured.  
  - The `accessRestriction.items[].display.visibleIf` and `accessRestriction.items[].display.inverted` configurations are no longer supported and will be ignored. The dashboard will now assume `visibleIf=true` and `inverted=false`. However, this change does not affect the `accessRestriction.items[].input.options[].display.visibleIf` and `accessRestriction.items[].input.options[].display.inverted` settings. by @petersutter [#2163]
- `[OPERATOR]` The dashboard no longer falls back to reading the cluster CA from the deprecated `<shoot-name>.ca-cluster` `Secret`. This change requires Gardener `v1.89.0` or higher. by @petersutter [#2164]
- `[USER]` Static token kubeconfig support has been removed from the dashboard. This feature is no longer needed as of Kubernetes version `1.27`, where the `enableStaticTokenKubeconfig` field is permanently set to `false`. by @petersutter [#2171]
- `[USER]` The dashboard no longer relies on the specific labels `cloudprofile.garden.sapcloud.io/name` and `gardener.cloud/dnsProviderName` to filter when selecting secrets. Instead, it now solely relies on the newly introduced provider.type field. As a result, cloud profiles are no longer selectable during secret creation, and all cloud profiles for the current infrastructure are now available for selection by @grolu [#2141]
## 🐛 Bug Fixes

- `[USER]` Fixed alertmanager URL by @petersutter [#2178]
- `[USER]` Resolved an issue where the editor search did not function correctly for non-editable clusters, such as 'Purpose: Infrastructure' by @grolu [#2176]
- `[OPERATOR]` Switched to a polling-based watcher approach for kube-config files, as we've observed that some filesystem events can be missed by chokidar. by @holgerkoser [#2202]
## 🏃 Others

- `[OPERATOR]` **Action Required:** The automatic mapping from `accessRestriction.items[@key="seed.gardener.cloud/eu-access"]` to `accessRestriction.items[@key="eu-access-only"]` will be removed in a future dashboard version. Dashboard operators who use `seed.gardener.cloud/eu-access` in their access restriction configuration should update the key to `eu-access-only`. If your configuration does not include `seed.gardener.cloud/eu-access`, no action is required. by @petersutter [#2196]
## 📖 Documentation

- `[OPERATOR]` Fix the link reference to the shoot credentials rotation page. by @marc1404 [#2221]
- `[OPERATOR]` Fix the link reference to the control plane high availability page. by @marc1404 [#2225]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.79.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.79.0</code></b></summary>

# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Access Restrictions:  
  - This dashboard version requires Gardener version `v1.107.0` if access restrictions are configured.  
  - The `accessRestriction.items[].display.visibleIf` and `accessRestriction.items[].display.inverted` configurations are no longer supported and will be ignored. The dashboard will now assume `visibleIf=true` and `inverted=false`. However, this change does not affect the `accessRestriction.items[].input.options[].display.visibleIf` and `accessRestriction.items[].input.options[].display.inverted` settings. by @petersutter [#2163]
- `[OPERATOR]` The dashboard no longer falls back to reading the cluster CA from the deprecated `<shoot-name>.ca-cluster` `Secret`. This change requires Gardener `v1.89.0` or higher. by @petersutter [#2164]
- `[USER]` Static token kubeconfig support has been removed from the dashboard. This feature is no longer needed as of Kubernetes version `1.27`, where the `enableStaticTokenKubeconfig` field is permanently set to `false`. by @petersutter [#2171]
- `[USER]` The dashboard no longer relies on the specific labels `cloudprofile.garden.sapcloud.io/name` and `gardener.cloud/dnsProviderName` to filter when selecting secrets. Instead, it now solely relies on the newly introduced provider.type field. As a result, cloud profiles are no longer selectable during secret creation, and all cloud profiles for the current infrastructure are now available for selection by @grolu [#2141]
## 🐛 Bug Fixes

- `[USER]` Fixed alertmanager URL by @petersutter [#2178]
- `[USER]` Resolved an issue where the editor search did not function correctly for non-editable clusters, such as 'Purpose: Infrastructure' by @grolu [#2176]
- `[OPERATOR]` Switched to a polling-based watcher approach for kube-config files, as we've observed that some filesystem events can be missed by chokidar. by @holgerkoser [#2202]
## 🏃 Others

- `[OPERATOR]` **Action Required:** The automatic mapping from `accessRestriction.items[@key="seed.gardener.cloud/eu-access"]` to `accessRestriction.items[@key="eu-access-only"]` will be removed in a future dashboard version. Dashboard operators who use `seed.gardener.cloud/eu-access` in their access restriction configuration should update the key to `eu-access-only`. If your configuration does not include `seed.gardener.cloud/eu-access`, no action is required. by @petersutter [#2196]
## 📖 Documentation

- `[OPERATOR]` Fix the link reference to the shoot credentials rotation page. by @marc1404 [#2221]
- `[OPERATOR]` Fix the link reference to the control plane high availability page. by @marc1404 [#2225]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.79.0`


</details>

<details>
<summary><b>Update gardener-webterminal to <code>0.34.0</code></b></summary>

# [gardener/terminal-controller-manager]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `credential.secretRef` property has been removed from the terminal `host` and `target` properties:  
  - For `Seed` resources, `spec.secretRef` was removed from the API without replacement, eliminating the need for `credential.secretRef`.  
  - For `Shoot` resources, `credential.shootRef` now replaces the previously used `credential.secretRef` for static token kubeconfigs. by @petersutter [#320]
## ✨ New Features

- `[OPERATOR]` Enhance terminal pods with service account token projection when the terminal host and target are in the same cluster and namespace by @petersutter [#322]
- `[DEVELOPER]` `gosec` was introduced for Static Application Security Testing (SAST). by @petersutter [#328]

## Docker Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.34.0`


</details>

<details>
<summary><b>Update gardener-webterminal to <code>0.34.0</code></b></summary>

# [gardener/terminal-controller-manager]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `credential.secretRef` property has been removed from the terminal `host` and `target` properties:  
  - For `Seed` resources, `spec.secretRef` was removed from the API without replacement, eliminating the need for `credential.secretRef`.  
  - For `Shoot` resources, `credential.shootRef` now replaces the previously used `credential.secretRef` for static token kubeconfigs. by @petersutter [#320]
## ✨ New Features

- `[OPERATOR]` Enhance terminal pods with service account token projection when the terminal host and target are in the same cluster and namespace by @petersutter [#322]
- `[DEVELOPER]` `gosec` was introduced for Static Application Security Testing (SAST). by @petersutter [#328]

## Docker Images
- terminal-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/terminal-controller-manager:v0.34.0`


</details>

<details>
<summary><b>Update networking-calico to <code>1.46.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## 🏃 Others

- `[OPERATOR]` Do not enable IPIP for non-overlay case when no networkConfig is set. by @DockToFuture [#563]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.46.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.46.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.46.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.46.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.46.0`


</details>

<details>
<summary><b>Update os-ubuntu to <code>1.28.0</code></b></summary>

# [gardener/gardener-extension-os-ubuntu]

## 🏃 Others

- `[OPERATOR]` Container images for the ubuntu extension are now built with Docker buildx to enable cross-platform builds and default to the `linux/amd64` architecture. by @Roncossek [#166]
- `[OPERATOR]` SAST assets are now collected in the release pipeline and attached to the component-descriptor. by @MrBatschner [#177]

## Helm Charts
- os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/os-ubuntu:v1.28.0`
## Docker Images
- gardener-extension-os-ubuntu: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/os-ubuntu:v1.28.0`


</details>
