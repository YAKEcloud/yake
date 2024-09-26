---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update networking-calico to <code>1.41.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#445]
## 🏃 Others

- `[OPERATOR]` Add static resource allocation autoscaling mode for calico node/typha (autoScaling.mode: static). by @ScheererJ [#464]
- `[OPERATOR]` The race between a calico-node instance shutting down and a new one coming up is mitigated by setting `NetworkUnavailable` condition properly some time after initialization. by @ScheererJ [#477]

## Helm Charts
- admission-calico-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-application:v1.41.0`
- admission-calico-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-calico-runtime:v1.41.0`
- networking-calico: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/networking-calico:v1.41.0`
## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.41.0`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.41.0`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.17</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.16...0.7.17

</details>

<details>
<summary><b>Update provider-hcloud to <code>0.6.31</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.31

</details>

<details>
<summary><b>Update shoot-flux to <code>0.7.0</code></b></summary>

## What's Changed
* Add ability to add args/env to deployment by @maboehm in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/93


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.6.1...v0.7.0

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.18</code></b></summary>

## What's Changed
* Add hcloud ccx[1-6]3 instances, remove ccx*1 and ccx*2 by @j2L4e in https://github.com/gardener-community/cloudprofiles/pull/29


**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.17...0.7.18

</details>

<details>
<summary><b>Update backup-s3 to <code>0.4.1</code></b></summary>

## General Changes

* Generate new controller-registration.yaml


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.54.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## 🏃 Others

- `[OPERATOR]` Starting with gardenlet >= v1.98.0, use controlplane webhook object selector to limit mutator calls. by @LucaBernstein [#731]
- `[OPERATOR]` The shoot-webhook does no longer mutate the metrics-server Deployment and the vpn-shoot Service. The shoot-webhook that now only mutates the `addons-nginx-ingress-controller` Service does now specify object selector. by @ialidzhikov [#730]
- `[OPERATOR]` Upgrade and adapt new `WorkerPoolHash` function in Gardener `v1.98`. by @Duciwuci [#736]

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.54.0`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.54.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.54.0`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.54.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.54.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.104.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[USER]` A bug has been fixed which was allowing users to set `Shoot` oidc configurations for the `kube-apiserver` without setting the `clientID` and `issuerURL` fields in `spec.kubernetes.kubeAPIServer.oidcConfig`, which would lead to the `kube-apiserver` stuck in a `Error` state. gardener-apiserver now requires both `clientID` and `issuerURL` fields to be set when the `spec.kubernetes.kubeAPIServer.oidcConfig` field is specified. by @AleksandarSavchev [#10461]
- `[OPERATOR]` `credentialsBinding.credentialsRef` is now an immutable field. by @dimityrmirchev [#10365]
## 📰 Noteworthy

- `[USER]` Users are allowed to change `shoot.spec.credentialsBindingName` and reference another `CredentialsBinding` only if they have the permissions to read both the old and newly referenced credential. by @dimityrmirchev [#10365]
- `[USER]` Users can migrate from `shoot.spec.secretBindingName` to `shoot.spec.credentialsBindingName` only if the referenced credential remains the same and is not changed during the process. by @dimityrmirchev [#10365]
- `[OPERATOR]` Allow project users to read `NamespacedCloudProfile`s and for project admins to make adjustments to machine types and volume types. by @LucaBernstein [#10485]
- `[OPERATOR]` Alerts based on the `proposals_failed_total` metric of the etcd cluster are not raised anymore. by @renormalize [#10524]
- `[DEVELOPER]` A new predicate `extensions/pkg/predicate.GardenSecurityProviderType` can be used to select resources from the `security.gardener.cloud` group that are related to the passed provider type. by @dimityrmirchev [#10499]
## ✨ New Features

- `[OPERATOR]` The `gardener-operator` metrics are now automatically scraped by the `garden` Prometheus. by @maboehm [#10464]
- `[OPERATOR]` Introduce custom RBAC verbs to allow for modification of `.spec.{kubernetes,machineImages}` in `NamespacedCloudProfile`s. by @LucaBernstein [#10485]
- `[OPERATOR]` The feature gate `NewVPN` is introduced for the `gardenlet` component. If enabled, the new VPN implementation (Golang rewrite) is used for all `Shoot`s of the respective `Seed`. In this case, the old implementation can be disabled for a single `Shoot` by annotating the shoot resource with `alpha.control-plane.shoot.gardener.cloud/disable-new-vpn=true`. For `Seed`s with disabled feature gate, the new implementation can be enabled for a single shoot by annotating it with `alpha.control-plane.shoot.gardener.cloud/disable-new-vpn=false`. by @MartinWeindel [#9774]
## 🐛 Bug Fixes

- `[USER]` Fixed disk read/write panel in the shoot's etcd dashboards by @rickardsjp [#10493]
- `[DEVELOPER]` An issue was fixed that rejected the creation of workerless shoots in the local setup. by @timuthy [#10498]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/hvpa-controller` image has been updated to `v0.17.0`. [Release Notes](https://redirect.github.com/gardener/hvpa-controller/releases/tag/v0.17.0) by @gardener-ci-robot [#10508]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.76.2`. by @gardener-ci-robot [#10500]
- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.54.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.54.0) by @gardener-ci-robot [#10528]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.20.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.20.3) by @gardener-ci-robot [#10487]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.31.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.31.1) by @gardener-ci-robot [#10531]
- `[OPERATOR]` Federate apiserver_total_request metric to the Prometheus longterm instance by @jguipi [#10457]
- `[OPERATOR]` Allow empty `networking.nodes` in case of IPv6 only shoots. by @axel7born [#10533]
- `[OPERATOR]` Improved node utilisation by reducing requests for etcd-druid managed pods. by @unmarshall [#10540]
- `[DEVELOPER]` Install go in the remote local setup from the go download site instead of using the apk package manager. by @vicwicker [#10502]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.104.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[USER]` A bug has been fixed which was allowing users to set `Shoot` oidc configurations for the `kube-apiserver` without setting the `clientID` and `issuerURL` fields in `spec.kubernetes.kubeAPIServer.oidcConfig`, which would lead to the `kube-apiserver` stuck in a `Error` state. gardener-apiserver now requires both `clientID` and `issuerURL` fields to be set when the `spec.kubernetes.kubeAPIServer.oidcConfig` field is specified. by @AleksandarSavchev [#10461]
- `[OPERATOR]` `credentialsBinding.credentialsRef` is now an immutable field. by @dimityrmirchev [#10365]
## 📰 Noteworthy

- `[USER]` Users are allowed to change `shoot.spec.credentialsBindingName` and reference another `CredentialsBinding` only if they have the permissions to read both the old and newly referenced credential. by @dimityrmirchev [#10365]
- `[USER]` Users can migrate from `shoot.spec.secretBindingName` to `shoot.spec.credentialsBindingName` only if the referenced credential remains the same and is not changed during the process. by @dimityrmirchev [#10365]
- `[OPERATOR]` Allow project users to read `NamespacedCloudProfile`s and for project admins to make adjustments to machine types and volume types. by @LucaBernstein [#10485]
- `[OPERATOR]` Alerts based on the `proposals_failed_total` metric of the etcd cluster are not raised anymore. by @renormalize [#10524]
- `[DEVELOPER]` A new predicate `extensions/pkg/predicate.GardenSecurityProviderType` can be used to select resources from the `security.gardener.cloud` group that are related to the passed provider type. by @dimityrmirchev [#10499]
## ✨ New Features

- `[OPERATOR]` The `gardener-operator` metrics are now automatically scraped by the `garden` Prometheus. by @maboehm [#10464]
- `[OPERATOR]` Introduce custom RBAC verbs to allow for modification of `.spec.{kubernetes,machineImages}` in `NamespacedCloudProfile`s. by @LucaBernstein [#10485]
- `[OPERATOR]` The feature gate `NewVPN` is introduced for the `gardenlet` component. If enabled, the new VPN implementation (Golang rewrite) is used for all `Shoot`s of the respective `Seed`. In this case, the old implementation can be disabled for a single `Shoot` by annotating the shoot resource with `alpha.control-plane.shoot.gardener.cloud/disable-new-vpn=true`. For `Seed`s with disabled feature gate, the new implementation can be enabled for a single shoot by annotating it with `alpha.control-plane.shoot.gardener.cloud/disable-new-vpn=false`. by @MartinWeindel [#9774]
## 🐛 Bug Fixes

- `[USER]` Fixed disk read/write panel in the shoot's etcd dashboards by @rickardsjp [#10493]
- `[DEVELOPER]` An issue was fixed that rejected the creation of workerless shoots in the local setup. by @timuthy [#10498]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/hvpa-controller` image has been updated to `v0.17.0`. [Release Notes](https://redirect.github.com/gardener/hvpa-controller/releases/tag/v0.17.0) by @gardener-ci-robot [#10508]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.76.2`. by @gardener-ci-robot [#10500]
- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.54.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.54.0) by @gardener-ci-robot [#10528]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.20.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.20.3) by @gardener-ci-robot [#10487]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.31.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.31.1) by @gardener-ci-robot [#10531]
- `[OPERATOR]` Federate apiserver_total_request metric to the Prometheus longterm instance by @jguipi [#10457]
- `[OPERATOR]` Allow empty `networking.nodes` in case of IPv6 only shoots. by @axel7born [#10533]
- `[OPERATOR]` Improved node utilisation by reducing requests for etcd-druid managed pods. by @unmarshall [#10540]
- `[DEVELOPER]` Install go in the remote local setup from the go download site instead of using the apk package manager. by @vicwicker [#10502]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.104.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[USER]` A bug has been fixed which was allowing users to set `Shoot` oidc configurations for the `kube-apiserver` without setting the `clientID` and `issuerURL` fields in `spec.kubernetes.kubeAPIServer.oidcConfig`, which would lead to the `kube-apiserver` stuck in a `Error` state. gardener-apiserver now requires both `clientID` and `issuerURL` fields to be set when the `spec.kubernetes.kubeAPIServer.oidcConfig` field is specified. by @AleksandarSavchev [#10461]
- `[OPERATOR]` `credentialsBinding.credentialsRef` is now an immutable field. by @dimityrmirchev [#10365]
## 📰 Noteworthy

- `[USER]` Users are allowed to change `shoot.spec.credentialsBindingName` and reference another `CredentialsBinding` only if they have the permissions to read both the old and newly referenced credential. by @dimityrmirchev [#10365]
- `[USER]` Users can migrate from `shoot.spec.secretBindingName` to `shoot.spec.credentialsBindingName` only if the referenced credential remains the same and is not changed during the process. by @dimityrmirchev [#10365]
- `[OPERATOR]` Allow project users to read `NamespacedCloudProfile`s and for project admins to make adjustments to machine types and volume types. by @LucaBernstein [#10485]
- `[OPERATOR]` Alerts based on the `proposals_failed_total` metric of the etcd cluster are not raised anymore. by @renormalize [#10524]
- `[DEVELOPER]` A new predicate `extensions/pkg/predicate.GardenSecurityProviderType` can be used to select resources from the `security.gardener.cloud` group that are related to the passed provider type. by @dimityrmirchev [#10499]
## ✨ New Features

- `[OPERATOR]` The `gardener-operator` metrics are now automatically scraped by the `garden` Prometheus. by @maboehm [#10464]
- `[OPERATOR]` Introduce custom RBAC verbs to allow for modification of `.spec.{kubernetes,machineImages}` in `NamespacedCloudProfile`s. by @LucaBernstein [#10485]
- `[OPERATOR]` The feature gate `NewVPN` is introduced for the `gardenlet` component. If enabled, the new VPN implementation (Golang rewrite) is used for all `Shoot`s of the respective `Seed`. In this case, the old implementation can be disabled for a single `Shoot` by annotating the shoot resource with `alpha.control-plane.shoot.gardener.cloud/disable-new-vpn=true`. For `Seed`s with disabled feature gate, the new implementation can be enabled for a single shoot by annotating it with `alpha.control-plane.shoot.gardener.cloud/disable-new-vpn=false`. by @MartinWeindel [#9774]
## 🐛 Bug Fixes

- `[USER]` Fixed disk read/write panel in the shoot's etcd dashboards by @rickardsjp [#10493]
- `[DEVELOPER]` An issue was fixed that rejected the creation of workerless shoots in the local setup. by @timuthy [#10498]
## 🏃 Others

- `[DEPENDENCY]` The `gardener/hvpa-controller` image has been updated to `v0.17.0`. [Release Notes](https://redirect.github.com/gardener/hvpa-controller/releases/tag/v0.17.0) by @gardener-ci-robot [#10508]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.76.2`. by @gardener-ci-robot [#10500]
- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.54.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.54.0) by @gardener-ci-robot [#10528]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.20.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.20.3) by @gardener-ci-robot [#10487]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.31.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.31.1) by @gardener-ci-robot [#10531]
- `[OPERATOR]` Federate apiserver_total_request metric to the Prometheus longterm instance by @jguipi [#10457]
- `[OPERATOR]` Allow empty `networking.nodes` in case of IPv6 only shoots. by @axel7born [#10533]
- `[OPERATOR]` Improved node utilisation by reducing requests for etcd-druid managed pods. by @unmarshall [#10540]
- `[DEVELOPER]` Install go in the remote local setup from the go download site instead of using the apk package manager. by @vicwicker [#10502]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.104.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.104.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.104.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.104.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.104.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.104.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.104.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.104.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.104.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.104.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.104.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.104.0`


</details>

<details>
<summary><b>Update backup-s3 to <code>0.5.0</code></b></summary>

## General Changes

* Bump g/g to 1.91.4 (#7) @simcod


</details>
