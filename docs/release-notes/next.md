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

<details>
<summary><b>Update runtime-gvisor to <code>0.17.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## 🏃 Others

- `[OPERATOR]` SAST assets are now collected in the release pipeline and attached to the component-descriptor. by @MrBatschner [#173]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.17.0`
## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.17.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.17.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.23.0</code></b></summary>

# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[USER]` The creation and management of metadata DNS records holding the owner identifier for each `DNSEntry` has been removed. These metadata DNS records will be removed automatically.  
  For more details, please see https://github.com/gardener/external-dns-management/tree/master?tab=readme-ov-file#important-note-support-for-owner-identifiers-is-discontinued by @MartinWeindel [#403]
## 🐛 Bug Fixes

- `[OPERATOR]` Ignore TTL on comparing alias records for remote provider by @MartinWeindel [#411]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.23.0`
## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.23.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.111.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `OperatorConfiguration` changed incompatibly: `extensionRequired` was renamed to `extensionRequiredRuntime`. by @timuthy [#11001]
- `[OPERATOR]` The `ShootManagedIssuer` feature gate was removed. Enablement of the feature is now dependent on the existence of a secret in the `garden` namespace labeled with `gardener.cloud/role: shoot-service-account-issuer`. by @dimityrmirchev [#11078]
- `[OPERATOR]` The `ShootForceDeletion` feature gate has been graduated to GA and is locked to `true`.  by @shafeeqes [#11107]
- `[OPERATOR]` This change applies to IPv4 clusters only.  
  Gardener uses the CIDR range of 240.0.0.0/8 which is reserved as per [IANA db](https://www.iana.org/assignments/ipv4-address-space/ipv4-address-space.xhtml) to map the cluster ip of the kubernetes api-server in the seed to a different network range before exposing it to the shoot in the `kubernetes` service. This frees up address space in the shoot and removes potential clashes with shoot workload ips.  
    
  Seed operators need to check if any of the following properties collide with the 240.0.0.0/8 range:  
    
      spec:  
        networks:  
          pods: < check here >  
          nodes: < check here >  
          services: < check here >  
          shootDefaults:  
            pods: < check here >  
            nodes: < check here >  
            services: < check here >  
   by @domdom82 [#10949]
- `[OPERATOR]` The wildcard TLS certificate for the runtime cluster must now be labelled with `gardener.cloud/role=garden-cert` instead of `gardener.cloud/role=controlplane-cert` to avoid duplicate role assignments for runtime and seed certificate secrets if Gardener runtime and seed run on the same cluster.  
  The old role name is deprecated for the runtime cluster. It will not be accepted anymore with the next Gardener release. by @MartinWeindel [#11113]
- `[DEPENDENCY]` Client-related functions have been adapted to use the external version of `k8s.io/component-base/config.ClientConnectionConfiguration`. If you need a helper function for transitioning to the external version, use `pkg/client/kubernetes.ConvertClientConnectionConfigurationToExternal`. by @timebertt [#11052]
- `[DEPENDENCY]` The package `github.com/gardener/gardener/extensions/pkg/apis/config` has been dropped. Use the versioned variant of the package instead: `github.com/gardener/gardener/extensions/pkg/apis/config/v1alpha1`. by @timebertt [#11056]
## 📰 Noteworthy

- `[USER]` Expired versions from the `NamespacedCloudProfile` are always dropped, except for already applied versions. by @LucaBernstein [#10910]
- `[OPERATOR]` The `vpa` field (ineffective since `v1.102`) has been removed from the `ManagedSeed` API. by @rfranzke [#11047]
- `[OPERATOR]` Now "vali" contains the managed control plane logs from the early stages of shoot reconcile. by @nickytd [#11082]
## ✨ New Features

- `[OPERATOR]` Gardener-Operator handles generic Gardener extensions in the Garden-Runtime cluster (type: `Extension`). Such extensions can be configured via `spec.extensions` in the `Garden` resource. by @timuthy [#11192]
- `[OPERATOR]` `gardener-node-agent` now persists its applied changes after each step when reconciling the OSC. This should avoid unnecessary work and systemd unit restarts. by @maboehm [#10969]
- `[OPERATOR]` Add vpa histogram decay half-life parameters to the Shoot spec. by @voelzmo [#10959]
- `[OPERATOR]` The Gardener Admission Controller now implements a handler that can prevent tampering with system `Secret`s and `ConfigMap`s if they are labeled with `gardener.cloud/update-restriction=true`. by @dimityrmirchev [#11108]
- `[OPERATOR]` Add flow and flow task metrics for timing duration, delay and result count to gardenlet metrics. by @LucaBernstein [#10967]
- `[USER]` Gardener now allows to omit or to only partially define the machine image version in `shoot.Spec.Provider.Workers[].Machine.Image.Version`. The version will automatically be defaulted to the latest minor/patch version found in the referenced `CloudProfile`. by @LucaBernstein [#10954]
- `[DEVELOPER]` The extension library now supports adding watches via `WatchBuilder` for other resources in the generic extension controller. by @domdom82 [#11064]
- `[DEVELOPER]` Add option to register flow metrics on monitoring registry. by @LucaBernstein [#10967]
- `[DEVELOPER]` A local setup for trying out, developing, and testing the autonomous shoot cluster functionality of `gardenadm` has been introduced. You can find the documentation [here](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally_with_gardenadm.md). by @rfranzke [#10977]
## 🐛 Bug Fixes

- `[OPERATOR]` Gardener can now delete and migrate shoots that use dynamic node network allocation, even if the infrastructure creation has never been successfully completed. by @timebertt [#11038]
- `[OPERATOR]` An issue was fixed in `gardener-operator` that prevented configuring OIDC for `gardener-dashboard` while using Structured Authentication. by @timuthy [#11080]
- `[OPERATOR]` `gardener-node-agent` does not restart `containerd.service` on every OSC reconciliation anymore. by @oliver-goetz [#11120]
- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#11036]
- `[DEVELOPER]` Avoid calling `GetCluster` for non-shoot namespaces in `shootNotFailedPredicate` and `dnsrecord` controller. by @MartinWeindel [#11123]
- `[DEVELOPER]` `gardener-node-agent` deletes unit files and drop-ins only if it created them previously. by @oliver-goetz [#11015]
## 🏃 Others

- `[USER]` Custom machine images and machine types in `NamespacedCloudProfile` are not interfered by later added conflicting entries in the parent `CloudProfile`. by @LucaBernstein [#11093]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.29.0`. by @gardener-ci-robot [#11138]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.26.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.26.1) by @gardener-ci-robot [#11202]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.23.4`. by @gardener-ci-robot [#11071]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.33.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.33.0) by @gardener-ci-robot [#11167]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.12.0`. by @gardener-ci-robot [#11087]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.28.4`. by @gardener-ci-robot [#11053]
- `[DEPENDENCY]` The `gardener/logging` image has been updated to `v0.63.0`. [Release Notes](https://redirect.github.com/gardener/logging/releases/tag/v0.63.0) by @gardener-ci-robot [#11195]
- `[DEPENDENCY]` The `registry.k8s.io/dns/k8s-dns-node-cache` image has been updated to `1.24.0`. by @gardener-ci-robot [#11032]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.21.0`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.0) by @gardener-ci-robot [#11023]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.79.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.79.0) by @gardener-ci-robot [#11199]
- `[DEPENDENCY]` The `quay.io/prometheus/alertmanager` image has been updated to `v0.28.0`. by @gardener-ci-robot [#11176]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.3`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.3) by @gardener-ci-robot [#11068]
- `[DEPENDENCY]` The `gardener/ingress-default-backend` image has been updated to `0.21.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.21.0) by @gardener-ci-robot [#11046]
- `[DEPENDENCY]` The `gardener/terminal-controller-manager` image has been updated to `v0.34.0`. [Release Notes](https://redirect.github.com/gardener/terminal-controller-manager/releases/tag/v0.34.0) by @gardener-ci-robot [#11212]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.21.1`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.1) by @gardener-ci-robot [#11151]
- `[DEVELOPER]` Fix malformed file path error on `go get github.com/gardener/gardener@master` by @MartinWeindel [#11145]
- `[DEVELOPER]` drop unused codepath from component_descriptor creation script. by @ccwienk [#11124]
- `[DEVELOPER]` The images of the registry caches used in the extensions local setup are now updated to [distribution/distribution@3.0.0 rc.2](https://github.com/distribution/distribution/releases/tag/v3.0.0-rc.2). by @ialidzhikov [#11079]
- `[OPERATOR]` Add additional context to shoot admission DNS errors so that it is more obvious what should be changed. by @ScheererJ [#11022]
- `[OPERATOR]` Allow specifying the IP families for the shoot creation tests. by @ScheererJ [#11135]
- `[OPERATOR]` Switch `vpa-recommender` back to the image built from the [vertical-pod-autoscaler upstream repo](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler) . by @plkokanov [#11122]
- `[OPERATOR]` The `gardener-dashboard` configuration was enhanced in the `garden` API with fields `gardenerDashboard.oidcConfig.clientIDPublic` and `gardenerDashboard.oidcConfig.issuerURL`.  
  Those are required to switch from the deprecated `kubeAPIServer.oidcConfig` to `kubeAPIServer.structuredAuthentication`. by @timuthy [#11080]
- `[OPERATOR]` `gardener-operator` now maintains a new condition `RequiredVirtual` for `Extension` resources. The new condition indicates whether the extension is related to required `ControllerInstallation`s in the virtual garden cluster. by @timuthy [#11001]
- `[OPERATOR]` Add alerts for capped VPA recommendations by @vicwicker [#11136]
- `[OPERATOR]` Retry failed `Cluster` resource sync after otherwise successful `Shoot` reconciliation.  by @LucaBernstein [#11144]
- `[OPERATOR]` `gardener-operator` restarts itself when the `garden` resource is deleted. This is required to stop controllers gracefully that depend on the existence of a virtual garden cluster. by @timuthy [#11058]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.111.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.111.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.111.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.111.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.111.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.111.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.111.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.111.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.111.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.111.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.111.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.111.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.111.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `OperatorConfiguration` changed incompatibly: `extensionRequired` was renamed to `extensionRequiredRuntime`. by @timuthy [#11001]
- `[OPERATOR]` The `ShootManagedIssuer` feature gate was removed. Enablement of the feature is now dependent on the existence of a secret in the `garden` namespace labeled with `gardener.cloud/role: shoot-service-account-issuer`. by @dimityrmirchev [#11078]
- `[OPERATOR]` The `ShootForceDeletion` feature gate has been graduated to GA and is locked to `true`.  by @shafeeqes [#11107]
- `[OPERATOR]` This change applies to IPv4 clusters only.  
  Gardener uses the CIDR range of 240.0.0.0/8 which is reserved as per [IANA db](https://www.iana.org/assignments/ipv4-address-space/ipv4-address-space.xhtml) to map the cluster ip of the kubernetes api-server in the seed to a different network range before exposing it to the shoot in the `kubernetes` service. This frees up address space in the shoot and removes potential clashes with shoot workload ips.  
    
  Seed operators need to check if any of the following properties collide with the 240.0.0.0/8 range:  
    
      spec:  
        networks:  
          pods: < check here >  
          nodes: < check here >  
          services: < check here >  
          shootDefaults:  
            pods: < check here >  
            nodes: < check here >  
            services: < check here >  
   by @domdom82 [#10949]
- `[OPERATOR]` The wildcard TLS certificate for the runtime cluster must now be labelled with `gardener.cloud/role=garden-cert` instead of `gardener.cloud/role=controlplane-cert` to avoid duplicate role assignments for runtime and seed certificate secrets if Gardener runtime and seed run on the same cluster.  
  The old role name is deprecated for the runtime cluster. It will not be accepted anymore with the next Gardener release. by @MartinWeindel [#11113]
- `[DEPENDENCY]` Client-related functions have been adapted to use the external version of `k8s.io/component-base/config.ClientConnectionConfiguration`. If you need a helper function for transitioning to the external version, use `pkg/client/kubernetes.ConvertClientConnectionConfigurationToExternal`. by @timebertt [#11052]
- `[DEPENDENCY]` The package `github.com/gardener/gardener/extensions/pkg/apis/config` has been dropped. Use the versioned variant of the package instead: `github.com/gardener/gardener/extensions/pkg/apis/config/v1alpha1`. by @timebertt [#11056]
## 📰 Noteworthy

- `[USER]` Expired versions from the `NamespacedCloudProfile` are always dropped, except for already applied versions. by @LucaBernstein [#10910]
- `[OPERATOR]` The `vpa` field (ineffective since `v1.102`) has been removed from the `ManagedSeed` API. by @rfranzke [#11047]
- `[OPERATOR]` Now "vali" contains the managed control plane logs from the early stages of shoot reconcile. by @nickytd [#11082]
## ✨ New Features

- `[OPERATOR]` Gardener-Operator handles generic Gardener extensions in the Garden-Runtime cluster (type: `Extension`). Such extensions can be configured via `spec.extensions` in the `Garden` resource. by @timuthy [#11192]
- `[OPERATOR]` `gardener-node-agent` now persists its applied changes after each step when reconciling the OSC. This should avoid unnecessary work and systemd unit restarts. by @maboehm [#10969]
- `[OPERATOR]` Add vpa histogram decay half-life parameters to the Shoot spec. by @voelzmo [#10959]
- `[OPERATOR]` The Gardener Admission Controller now implements a handler that can prevent tampering with system `Secret`s and `ConfigMap`s if they are labeled with `gardener.cloud/update-restriction=true`. by @dimityrmirchev [#11108]
- `[OPERATOR]` Add flow and flow task metrics for timing duration, delay and result count to gardenlet metrics. by @LucaBernstein [#10967]
- `[USER]` Gardener now allows to omit or to only partially define the machine image version in `shoot.Spec.Provider.Workers[].Machine.Image.Version`. The version will automatically be defaulted to the latest minor/patch version found in the referenced `CloudProfile`. by @LucaBernstein [#10954]
- `[DEVELOPER]` The extension library now supports adding watches via `WatchBuilder` for other resources in the generic extension controller. by @domdom82 [#11064]
- `[DEVELOPER]` Add option to register flow metrics on monitoring registry. by @LucaBernstein [#10967]
- `[DEVELOPER]` A local setup for trying out, developing, and testing the autonomous shoot cluster functionality of `gardenadm` has been introduced. You can find the documentation [here](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally_with_gardenadm.md). by @rfranzke [#10977]
## 🐛 Bug Fixes

- `[OPERATOR]` Gardener can now delete and migrate shoots that use dynamic node network allocation, even if the infrastructure creation has never been successfully completed. by @timebertt [#11038]
- `[OPERATOR]` An issue was fixed in `gardener-operator` that prevented configuring OIDC for `gardener-dashboard` while using Structured Authentication. by @timuthy [#11080]
- `[OPERATOR]` `gardener-node-agent` does not restart `containerd.service` on every OSC reconciliation anymore. by @oliver-goetz [#11120]
- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#11036]
- `[DEVELOPER]` Avoid calling `GetCluster` for non-shoot namespaces in `shootNotFailedPredicate` and `dnsrecord` controller. by @MartinWeindel [#11123]
- `[DEVELOPER]` `gardener-node-agent` deletes unit files and drop-ins only if it created them previously. by @oliver-goetz [#11015]
## 🏃 Others

- `[USER]` Custom machine images and machine types in `NamespacedCloudProfile` are not interfered by later added conflicting entries in the parent `CloudProfile`. by @LucaBernstein [#11093]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.29.0`. by @gardener-ci-robot [#11138]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.26.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.26.1) by @gardener-ci-robot [#11202]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.23.4`. by @gardener-ci-robot [#11071]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.33.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.33.0) by @gardener-ci-robot [#11167]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.12.0`. by @gardener-ci-robot [#11087]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.28.4`. by @gardener-ci-robot [#11053]
- `[DEPENDENCY]` The `gardener/logging` image has been updated to `v0.63.0`. [Release Notes](https://redirect.github.com/gardener/logging/releases/tag/v0.63.0) by @gardener-ci-robot [#11195]
- `[DEPENDENCY]` The `registry.k8s.io/dns/k8s-dns-node-cache` image has been updated to `1.24.0`. by @gardener-ci-robot [#11032]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.21.0`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.0) by @gardener-ci-robot [#11023]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.79.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.79.0) by @gardener-ci-robot [#11199]
- `[DEPENDENCY]` The `quay.io/prometheus/alertmanager` image has been updated to `v0.28.0`. by @gardener-ci-robot [#11176]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.3`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.3) by @gardener-ci-robot [#11068]
- `[DEPENDENCY]` The `gardener/ingress-default-backend` image has been updated to `0.21.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.21.0) by @gardener-ci-robot [#11046]
- `[DEPENDENCY]` The `gardener/terminal-controller-manager` image has been updated to `v0.34.0`. [Release Notes](https://redirect.github.com/gardener/terminal-controller-manager/releases/tag/v0.34.0) by @gardener-ci-robot [#11212]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.21.1`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.1) by @gardener-ci-robot [#11151]
- `[DEVELOPER]` Fix malformed file path error on `go get github.com/gardener/gardener@master` by @MartinWeindel [#11145]
- `[DEVELOPER]` drop unused codepath from component_descriptor creation script. by @ccwienk [#11124]
- `[DEVELOPER]` The images of the registry caches used in the extensions local setup are now updated to [distribution/distribution@3.0.0 rc.2](https://github.com/distribution/distribution/releases/tag/v3.0.0-rc.2). by @ialidzhikov [#11079]
- `[OPERATOR]` Add additional context to shoot admission DNS errors so that it is more obvious what should be changed. by @ScheererJ [#11022]
- `[OPERATOR]` Allow specifying the IP families for the shoot creation tests. by @ScheererJ [#11135]
- `[OPERATOR]` Switch `vpa-recommender` back to the image built from the [vertical-pod-autoscaler upstream repo](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler) . by @plkokanov [#11122]
- `[OPERATOR]` The `gardener-dashboard` configuration was enhanced in the `garden` API with fields `gardenerDashboard.oidcConfig.clientIDPublic` and `gardenerDashboard.oidcConfig.issuerURL`.  
  Those are required to switch from the deprecated `kubeAPIServer.oidcConfig` to `kubeAPIServer.structuredAuthentication`. by @timuthy [#11080]
- `[OPERATOR]` `gardener-operator` now maintains a new condition `RequiredVirtual` for `Extension` resources. The new condition indicates whether the extension is related to required `ControllerInstallation`s in the virtual garden cluster. by @timuthy [#11001]
- `[OPERATOR]` Add alerts for capped VPA recommendations by @vicwicker [#11136]
- `[OPERATOR]` Retry failed `Cluster` resource sync after otherwise successful `Shoot` reconciliation.  by @LucaBernstein [#11144]
- `[OPERATOR]` `gardener-operator` restarts itself when the `garden` resource is deleted. This is required to stop controllers gracefully that depend on the existence of a virtual garden cluster. by @timuthy [#11058]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.111.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.111.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.111.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.111.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.111.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.111.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.111.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.111.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.111.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.111.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.111.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.111.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.111.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `OperatorConfiguration` changed incompatibly: `extensionRequired` was renamed to `extensionRequiredRuntime`. by @timuthy [#11001]
- `[OPERATOR]` The `ShootManagedIssuer` feature gate was removed. Enablement of the feature is now dependent on the existence of a secret in the `garden` namespace labeled with `gardener.cloud/role: shoot-service-account-issuer`. by @dimityrmirchev [#11078]
- `[OPERATOR]` The `ShootForceDeletion` feature gate has been graduated to GA and is locked to `true`.  by @shafeeqes [#11107]
- `[OPERATOR]` This change applies to IPv4 clusters only.  
  Gardener uses the CIDR range of 240.0.0.0/8 which is reserved as per [IANA db](https://www.iana.org/assignments/ipv4-address-space/ipv4-address-space.xhtml) to map the cluster ip of the kubernetes api-server in the seed to a different network range before exposing it to the shoot in the `kubernetes` service. This frees up address space in the shoot and removes potential clashes with shoot workload ips.  
    
  Seed operators need to check if any of the following properties collide with the 240.0.0.0/8 range:  
    
      spec:  
        networks:  
          pods: < check here >  
          nodes: < check here >  
          services: < check here >  
          shootDefaults:  
            pods: < check here >  
            nodes: < check here >  
            services: < check here >  
   by @domdom82 [#10949]
- `[OPERATOR]` The wildcard TLS certificate for the runtime cluster must now be labelled with `gardener.cloud/role=garden-cert` instead of `gardener.cloud/role=controlplane-cert` to avoid duplicate role assignments for runtime and seed certificate secrets if Gardener runtime and seed run on the same cluster.  
  The old role name is deprecated for the runtime cluster. It will not be accepted anymore with the next Gardener release. by @MartinWeindel [#11113]
- `[DEPENDENCY]` Client-related functions have been adapted to use the external version of `k8s.io/component-base/config.ClientConnectionConfiguration`. If you need a helper function for transitioning to the external version, use `pkg/client/kubernetes.ConvertClientConnectionConfigurationToExternal`. by @timebertt [#11052]
- `[DEPENDENCY]` The package `github.com/gardener/gardener/extensions/pkg/apis/config` has been dropped. Use the versioned variant of the package instead: `github.com/gardener/gardener/extensions/pkg/apis/config/v1alpha1`. by @timebertt [#11056]
## 📰 Noteworthy

- `[USER]` Expired versions from the `NamespacedCloudProfile` are always dropped, except for already applied versions. by @LucaBernstein [#10910]
- `[OPERATOR]` The `vpa` field (ineffective since `v1.102`) has been removed from the `ManagedSeed` API. by @rfranzke [#11047]
- `[OPERATOR]` Now "vali" contains the managed control plane logs from the early stages of shoot reconcile. by @nickytd [#11082]
## ✨ New Features

- `[OPERATOR]` Gardener-Operator handles generic Gardener extensions in the Garden-Runtime cluster (type: `Extension`). Such extensions can be configured via `spec.extensions` in the `Garden` resource. by @timuthy [#11192]
- `[OPERATOR]` `gardener-node-agent` now persists its applied changes after each step when reconciling the OSC. This should avoid unnecessary work and systemd unit restarts. by @maboehm [#10969]
- `[OPERATOR]` Add vpa histogram decay half-life parameters to the Shoot spec. by @voelzmo [#10959]
- `[OPERATOR]` The Gardener Admission Controller now implements a handler that can prevent tampering with system `Secret`s and `ConfigMap`s if they are labeled with `gardener.cloud/update-restriction=true`. by @dimityrmirchev [#11108]
- `[OPERATOR]` Add flow and flow task metrics for timing duration, delay and result count to gardenlet metrics. by @LucaBernstein [#10967]
- `[USER]` Gardener now allows to omit or to only partially define the machine image version in `shoot.Spec.Provider.Workers[].Machine.Image.Version`. The version will automatically be defaulted to the latest minor/patch version found in the referenced `CloudProfile`. by @LucaBernstein [#10954]
- `[DEVELOPER]` The extension library now supports adding watches via `WatchBuilder` for other resources in the generic extension controller. by @domdom82 [#11064]
- `[DEVELOPER]` Add option to register flow metrics on monitoring registry. by @LucaBernstein [#10967]
- `[DEVELOPER]` A local setup for trying out, developing, and testing the autonomous shoot cluster functionality of `gardenadm` has been introduced. You can find the documentation [here](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally_with_gardenadm.md). by @rfranzke [#10977]
## 🐛 Bug Fixes

- `[OPERATOR]` Gardener can now delete and migrate shoots that use dynamic node network allocation, even if the infrastructure creation has never been successfully completed. by @timebertt [#11038]
- `[OPERATOR]` An issue was fixed in `gardener-operator` that prevented configuring OIDC for `gardener-dashboard` while using Structured Authentication. by @timuthy [#11080]
- `[OPERATOR]` `gardener-node-agent` does not restart `containerd.service` on every OSC reconciliation anymore. by @oliver-goetz [#11120]
- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#11036]
- `[DEVELOPER]` Avoid calling `GetCluster` for non-shoot namespaces in `shootNotFailedPredicate` and `dnsrecord` controller. by @MartinWeindel [#11123]
- `[DEVELOPER]` `gardener-node-agent` deletes unit files and drop-ins only if it created them previously. by @oliver-goetz [#11015]
## 🏃 Others

- `[USER]` Custom machine images and machine types in `NamespacedCloudProfile` are not interfered by later added conflicting entries in the parent `CloudProfile`. by @LucaBernstein [#11093]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.29.0`. by @gardener-ci-robot [#11138]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.26.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.26.1) by @gardener-ci-robot [#11202]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.23.4`. by @gardener-ci-robot [#11071]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.33.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.33.0) by @gardener-ci-robot [#11167]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.12.0`. by @gardener-ci-robot [#11087]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.28.4`. by @gardener-ci-robot [#11053]
- `[DEPENDENCY]` The `gardener/logging` image has been updated to `v0.63.0`. [Release Notes](https://redirect.github.com/gardener/logging/releases/tag/v0.63.0) by @gardener-ci-robot [#11195]
- `[DEPENDENCY]` The `registry.k8s.io/dns/k8s-dns-node-cache` image has been updated to `1.24.0`. by @gardener-ci-robot [#11032]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.21.0`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.0) by @gardener-ci-robot [#11023]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.79.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.79.0) by @gardener-ci-robot [#11199]
- `[DEPENDENCY]` The `quay.io/prometheus/alertmanager` image has been updated to `v0.28.0`. by @gardener-ci-robot [#11176]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.3`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.3) by @gardener-ci-robot [#11068]
- `[DEPENDENCY]` The `gardener/ingress-default-backend` image has been updated to `0.21.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.21.0) by @gardener-ci-robot [#11046]
- `[DEPENDENCY]` The `gardener/terminal-controller-manager` image has been updated to `v0.34.0`. [Release Notes](https://redirect.github.com/gardener/terminal-controller-manager/releases/tag/v0.34.0) by @gardener-ci-robot [#11212]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.21.1`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.1) by @gardener-ci-robot [#11151]
- `[DEVELOPER]` Fix malformed file path error on `go get github.com/gardener/gardener@master` by @MartinWeindel [#11145]
- `[DEVELOPER]` drop unused codepath from component_descriptor creation script. by @ccwienk [#11124]
- `[DEVELOPER]` The images of the registry caches used in the extensions local setup are now updated to [distribution/distribution@3.0.0 rc.2](https://github.com/distribution/distribution/releases/tag/v3.0.0-rc.2). by @ialidzhikov [#11079]
- `[OPERATOR]` Add additional context to shoot admission DNS errors so that it is more obvious what should be changed. by @ScheererJ [#11022]
- `[OPERATOR]` Allow specifying the IP families for the shoot creation tests. by @ScheererJ [#11135]
- `[OPERATOR]` Switch `vpa-recommender` back to the image built from the [vertical-pod-autoscaler upstream repo](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler) . by @plkokanov [#11122]
- `[OPERATOR]` The `gardener-dashboard` configuration was enhanced in the `garden` API with fields `gardenerDashboard.oidcConfig.clientIDPublic` and `gardenerDashboard.oidcConfig.issuerURL`.  
  Those are required to switch from the deprecated `kubeAPIServer.oidcConfig` to `kubeAPIServer.structuredAuthentication`. by @timuthy [#11080]
- `[OPERATOR]` `gardener-operator` now maintains a new condition `RequiredVirtual` for `Extension` resources. The new condition indicates whether the extension is related to required `ControllerInstallation`s in the virtual garden cluster. by @timuthy [#11001]
- `[OPERATOR]` Add alerts for capped VPA recommendations by @vicwicker [#11136]
- `[OPERATOR]` Retry failed `Cluster` resource sync after otherwise successful `Shoot` reconciliation.  by @LucaBernstein [#11144]
- `[OPERATOR]` `gardener-operator` restarts itself when the `garden` resource is deleted. This is required to stop controllers gracefully that depend on the existence of a virtual garden cluster. by @timuthy [#11058]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.111.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.111.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.111.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.111.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.111.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.111.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.111.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.111.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.111.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.111.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.111.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.111.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.56.1</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` introduce image named dns-controller-manager-with-metadata-records by `Martin Weindel <martin.weindel@sap.com>` [$3708e670f9a36a2c04624b745718b7975fd9e77c]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.56.1`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.56.1`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.56.1`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.56.1`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.56.1`


</details>

<details>
<summary><b>Update shoot-networking-filter to <code>0.22.0</code></b></summary>

# [gardener/gardener-extension-shoot-networking-filter]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.109.0 to 1.110.0. by @dependabot[bot] [#197]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.108.0 to 1.109.0. by @dependabot[bot] [#195]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.107.0 to 1.108.0. by @dependabot[bot] [#193]

## Helm Charts
- runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-networking-filter:v0.22.0`
- shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-networking-filter:v0.22.0`
## Docker Images
- gardener-extension-shoot-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-filter:v0.22.0`
- gardener-runtime-networking-filter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-networking-filter:v0.22.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.45.0</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 📰 Noteworthy

- `[USER]` The kube-system/csi-driver-node and kube-system/csi-driver-manila-node DaemonSets are no longer scaled by a VerticalPodAutoscaler as they do not really benefit from it. Removing VerticalPodAutoscaler for these components will reduce unnecessary evictions by VPA and will be a mitigation for https://issues.k8s.io/126921. by @ialidzhikov [#938]
## 🐛 Bug Fixes

- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#930]
## 🏃 Others

- `[DEPENDENCY]` Update gardener to v1.110.0 by @hebelsan [#933]
- `[OPERATOR]` The `EgressCIDRS` are now properly calculated for IPv6 addresses of the router. by @kon-angelo [#958]
- `[OPERATOR]` The `EgressCIDRS` are now properly calculated for multiple external fixed IPs of the router. by @kon-angelo [#958]
- `[OPERATOR]` Ignore not found errors on resource deletion during infrastructure reconciliation. by @kon-angelo [#948]
# [gardener/machine-controller-manager-provider-openstack]

## 🏃 Others

- `[DEVELOPER]` The `gardener/machine-controller-manager` dependency has been updated to `v0.55.1`. [Release Notes v0.55.0](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.0)  
  [Release Notes v0.55.1](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.1) by @gardener-robot-ci-3 [gardener/machine-controller-manager-provider-openstack#204]
- `[DEVELOPER]` Add gosec as sast makefile target by @hebelsan [gardener/machine-controller-manager-provider-openstack#199]
- `[DEPENDENCY]` Update gardener/gardener to v1.108.1 by @hebelsan [gardener/machine-controller-manager-provider-openstack#200]
- `[OPERATOR]` Increase VM status check timeout to 1200 seconds. by @kon-angelo [gardener/machine-controller-manager-provider-openstack#212]
# [gardener/terraformer]

## 🐛 Bug Fixes

- `[DEVELOPER]` Provider `azurerm` was updated to version 3.47.0 and is now properly recognising the `ARM_OIDC_TOKEN_FILE_PATH` env variable. by @dimityrmirchev [gardener/terraformer#156]
## 🏃 Others

- `[OPERATOR]` Update golang to `v1.23.5` by @kon-angelo [gardener/terraformer#157]
- `[OPERATOR]` Update alpine to `v3.21.2` by @kon-angelo [gardener/terraformer#157]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.45.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.45.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.45.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.45.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.45.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.57.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Add support for switching the `dns-controller-manager` image. by @marc1404 [#421]
# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[USER]` The creation and management of metadata DNS records holding the owner identifier for each `DNSEntry` has been removed. These metadata DNS records will be removed automatically.  
  For more details, please see https://github.com/gardener/external-dns-management/tree/master?tab=readme-ov-file#important-note-support-for-owner-identifiers-is-discontinued by @MartinWeindel [gardener/external-dns-management#403]
## 🐛 Bug Fixes

- `[OPERATOR]` Ignore TTL on comparing alias records for remote provider by @MartinWeindel [gardener/external-dns-management#411]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.57.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.57.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.57.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.57.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.57.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.58.0</code></b></summary>

# [gardener/terraformer]

## 🐛 Bug Fixes

- `[DEVELOPER]` Provider `azurerm` was updated to version 3.47.0 and is now properly recognising the `ARM_OIDC_TOKEN_FILE_PATH` env variable. by @dimityrmirchev [gardener/terraformer#156]
## 🏃 Others

- `[OPERATOR]` Update alpine to `v3.21.2` by @kon-angelo [gardener/terraformer#157]
- `[OPERATOR]` Update golang to `v1.23.5` by @kon-angelo [gardener/terraformer#157]
# [gardener/gardener-extension-provider-alicloud]

## 📰 Noteworthy

- `[USER]` The kube-system/csi-disk-plugin-alicloud DaemonSet is no longer scaled by a VerticalPodAutoscaler as it does not really benefit from it. Removing VerticalPodAutoscaler for that component will reduce unnecessary evictions by VPA and will be a mitigation for https://issues.k8s.io/126921. by @ialidzhikov [#750]
## 🏃 Others

- `[OPERATOR]` Update CSI image version by @kevin-lacoo [#757]
- `[OPERATOR]` Update `gardener/gardener` dependency to `v1.110.4` by @MartinWeindel [#756]
- `[OPERATOR]` The kube-system/csi-disk-plugin-alicloud DaemonSet does no longer specify resource limits. by @ialidzhikov [#750]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.58.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.58.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.58.0`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.58.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.58.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.60.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 📰 Noteworthy

- `[USER]` The kube-system/csi-driver-node DaemonSet is no longer scaled by a VerticalPodAutoscaler as it does not really benefit from it. Removing VerticalPodAutoscaler for that component will reduce unnecessary evictions by VPA and will be a mitigation for https://issues.k8s.io/126921. by @ialidzhikov [#1179]
## ✨ New Features

- `[USER]` Support for VolumeAttributesClasses can now be enabled via shoot annotation. by @AndreasBurger [#1152]
## 🏃 Others

- `[OPERATOR]` In IPv6 and dual stack shoot cluster external load balancers will get the aws dual stack load balancer annotations in order to work properly.  by @DockToFuture [#1160]
- `[OPERATOR]` Add validation of internal-subnet CIDR for IPv6 shoots by @AndreasBurger [#1186]
- `[OPERATOR]` Set `primary-ip-family` flag for `aws-ipam-controller` by @DockToFuture [#1168]
- `[USER]` Shoots with NodeLocalDNS enabled will use UDP instead of TCP for upstream DNS queries by default to avoid performance issues on AWS. by @domdom82 [#1161]
- `[DEPENDENCY]` Update gardener to v1.110.0 by @hebelsan [#1176]
# [gardener/machine-controller-manager-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a panic that occurs while fetching the status of a VM backing a machine from the provider. by @renormalize [gardener/machine-controller-manager-provider-aws#180]
## 🏃 Others

- `[OPERATOR]` Added `gosec` for Static Application Security Testing (SAST). by @thiyyakat [gardener/machine-controller-manager-provider-aws#179]
- `[DEVELOPER]` Updated go lang version to `1.23.3` by @thiyyakat [gardener/machine-controller-manager-provider-aws#179]
- `[DEVELOPER]` The `gardener/machine-controller-manager` dependency has been updated to `v0.55.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.1) by @thiyyakat [gardener/machine-controller-manager-provider-aws#179]
# [gardener/terraformer]

## 🐛 Bug Fixes

- `[DEVELOPER]` Provider `azurerm` was updated to version 3.47.0 and is now properly recognising the `ARM_OIDC_TOKEN_FILE_PATH` env variable. by @dimityrmirchev [gardener/terraformer#156]
## 🏃 Others

- `[OPERATOR]` Update alpine to `v3.21.2` by @kon-angelo [gardener/terraformer#157]
- `[OPERATOR]` Update golang to `v1.23.5` by @kon-angelo [gardener/terraformer#157]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.60.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.60.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.60.0`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.60.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.60.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.42.0</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 📰 Noteworthy

- `[USER]` The kube-system/csi-driver-node DaemonSet is no longer scaled by a VerticalPodAutoscaler as it does not really benefit from it. Removing VerticalPodAutoscaler for that component will reduce unnecessary evictions by VPA and will be a mitigation for https://issues.k8s.io/126921. by @ialidzhikov [#929]
- `[OPERATOR]` Added support for immutable backup buckets in the GCP provider extension. Operators can configure immutability settings to enhance backup data security by preventing data alteration or deletion before the specified retention period. by @seshachalam-yv [#906]
## ✨ New Features

- `[OPERATOR]` Support specification of extended resources in provider config node template without re-specifying core resources. by @elankath [#889]
## 🐛 Bug Fixes

- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#942]
## 🏃 Others

- `[DEPENDENCY]` Update gardener to v1.110.0 by @hebelsan [#927]
- `[OPERATOR]` Validate that all images in cloudProfile map to a valid image in the cloudProfileConfig  by @hebelsan [#932]
# [gardener/machine-controller-manager-provider-gcp]

## 🏃 Others

- `[USER]` MCM provider GCP is able to provide the values for a `shieldedInstanceConfiguration` from a machineClass to the GCP API. by @MrBatschner [gardener/machine-controller-manager-provider-gcp#135]
- `[DEVELOPER]` The `gardener/machine-controller-manager` dependency has been updated to `v0.55.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.1) by @thiyyakat [gardener/machine-controller-manager-provider-gcp#134]
- `[DEVELOPER]` Added `gosec` for Static Application Security Testing (SAST). by @thiyyakat [gardener/machine-controller-manager-provider-gcp#134]
- `[DEVELOPER]` Updated go lang version to `1.23.3` by @thiyyakat [gardener/machine-controller-manager-provider-gcp#134]
# [gardener/terraformer]

## 🐛 Bug Fixes

- `[DEVELOPER]` Provider `azurerm` was updated to version 3.47.0 and is now properly recognising the `ARM_OIDC_TOKEN_FILE_PATH` env variable. by @dimityrmirchev [gardener/terraformer#156]
## 🏃 Others

- `[OPERATOR]` Update golang to `v1.23.5` by @kon-angelo [gardener/terraformer#157]
- `[OPERATOR]` Update alpine to `v3.21.2` by @kon-angelo [gardener/terraformer#157]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.42.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.42.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.42.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.42.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.42.0`


</details>

<details>
<summary><b>Update provider-openstack to <code>1.46.0</code></b></summary>

no release notes available

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.46.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.46.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.46.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.46.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.46.0`


</details>

<details>
<summary><b>Update cert-management to <code>0.17.3</code></b></summary>

# [gardener/cert-management]

## 🏃 Others

- `[DEPENDENCY]` Update module `gardener/gardener` from `v1.110.0` to `v1.110.2`. by @gardener-ci-robot  [#385]
- `[DEPENDENCY]` Update module `cert-manager/cert-manager` from `v1.16.2` to `v1.16.3`. by @gardener-ci-robot  [#388]
- `[DEPENDENCY]` Update `golang` docker tag from `1.23.4` to `1.23.5`. by @gardener-ci-robot  [#390]
- `[DEPENDENCY]` Update `go` toolchain from `1.23.4` to `1.23.5`. by @gardener-ci-robot  [#389]
- `[DEPENDENCY]` Update module `gardener/external-dns-management` from `v0.22.2` to `v0.23.0`. by @gardener-ci-robot  [#392]
- `[DEPENDENCY]` Update module `gardener/gardener` from `v1.110.4` to `v1.111.0`. by @gardener-ci-robot  [#393]
- `[DEPENDENCY]` Update module `letsencrypt/pebble` from `v2.6.0` to `v2.7.0`. by @gardener-ci-robot  [#394]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.17.3`
## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.17.3`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.42.1</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## 🏃 Others

- `[OPERATOR]` Fix an issue where the node-cidr-mask-size was not respected by the IPAM controller of the cloud-controller-manager by @kon-angelo [#955]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.42.1`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.42.1`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.42.1`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.42.1`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.42.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.79.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue with `redirectPath` handling during the OIDC authentication flow. by @petersutter [#2278]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.79.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.79.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue with `redirectPath` handling during the OIDC authentication flow. by @petersutter [#2278]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.79.1`


</details>
