---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update runtime-gvisor to <code>0.18.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## 🏃 Others

- `[USER]` The gVisor binaries were updated to release `20250210.0`. by @MrBatschner [#192]
- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#176]

## Helm Charts
- runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/runtime-gvisor:v0.18.0`
## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.18.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.18.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.50.1</code></b></summary>

no release notes available

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.50.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.50.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.50.1`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.50.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.50.1`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.59.1</code></b></summary>

no release notes available

## Helm Charts
- admission-alicloud-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-application:v1.59.1`
- admission-alicloud-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud-runtime:v1.59.1`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.59.1`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.59.1`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.59.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.113.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` There is an incompatible change in the `Garden` (`gardens.operator.gardener.cloud`) custom resource: Fields `.spec.runtimeCluster.networking.{nodes,pods,services}` and `.spec.virtualCluster.networking.services` were changed from type `string` to type `[]string`, e.g., in JSON format, replace `"nodes": "10.0.0.0/16"` with `"nodes": ["10.0.0.0/16"]`. by @ScheererJ [#11251]
## 📰 Noteworthy

- `[OPERATOR]` Incoming reverse VPN connections no longer get authenticated by the reversed-vpn-auth-server as the authentication logic was moved to envoy itself. by @Wieneo [#11328]
- `[OPERATOR]` The apiserver-proxy component does not use the proxy protocol anymore, see [GEP-30](https://github.com/gardener/gardener/blob/master/docs/proposals/30-apiserver-proxy.md). by @Wieneo [#11364]
- `[OPERATOR]` The `shoot.gardener.cloud/managed-seed-api-server` annotation is deprecated and will be removed in a future release. Instead, consider enabling high availability for the ManagedSeed's Shoot control plane. by @ialidzhikov [#11372]
- `[OPERATOR]` Added a new feature gate called "RemoveAPIServerProxyLegacyPort", which disables the unused proxy port (8443) on the istio-ingressgateway Services. Operators can choose to remove the legacy apiserver-proxy port as soon as all shoots have switched to the new apiserver-proxy configuration. They might want to do so if they activate the ACL extension, which is vulnerable to proxy protocol headers of untrusted clients on the apiserver-proxy port. by @Wieneo [#11380]
## ✨ New Features

- `[USER]` `gardener-operator` maintains information about Gardener API Server configuration in the world readable `ConfigMap` `gardener-info` in the `gardener-system-public` `Namespace`, read [here](https://github.com/gardener/gardener/blob/master/docs/usage/gardener/gardener_info_configmap.md) for more details about the content of the`ConfigMap`.  by @vpnachev [#11238]
- `[OPERATOR]` Enhance the `gardener-operator` to allow specification of more than a single network range for `.spec.runtimeCluster.networking.nodes`, `.spec.runtimeCluster.networking.pods`, `.spec.runtimeCluster.networking.services`, and `.spec.virtualCluster.networking.services`, which also allows dual-stack configurations. by @ScheererJ [#11251]
- `[OPERATOR]` Introduces `shoot_operation_duration_seconds` metric to record `Shoot` operation `Create` and `Delete`.  by @simcod [#10971]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.32. To allow creation/update of 1.32 clusters you will have to update the version of your provider extension(s) to a version that supports 1.32 as well. Please consult the respective releases and notes in the provider extension's repository. by @marc1404 [#11197]
- `[OPERATOR]` `CloudProfile.spec.limits.maxNodesTotal` can be used to limit the maximum number of nodes a shoot can have during runtime. See [the documentation](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_limits.md) for more details. by @timebertt [#11279]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.32. Extension developers have to prepare individual extensions as well to work with 1.32. by @marc1404 [#11197]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug which prevented usage of labels with `seed.gardener.cloud/` prefix on `Seed`, `ManagedSeed`, `BackupEntry`, and `Shoot` resources has been fixed. by @rfranzke [#11485]
- `[OPERATOR]` A misleading error message appearing when an operator has wrongly configured OIDC config for the Gardener Dashboard in the Garden resource was fixed. by @dimityrmirchev [#11432]
- `[USER]` The ETCD encryption config now properly configures a 32-byte key. by @dimityrmirchev [#11150]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.3.0` to `v1.4.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.4.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.3.0` to `v1.4.0`.  by @gardener-ci-robot [#11423]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.18.2` to `v0.19.0`.  by @gardener-ci-robot [#11419]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.35` to `v7.5.36`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.36) by @gardener-ci-robot [#11316]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-conntrack` from `3.21.1` to `3.21.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.3) by @gardener-ci-robot [#11409]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/apiserver-proxy` from `v0.18.0` to `v0.19.0`. [Release Notes](https://redirect.github.com/gardener/apiserver-proxy/releases/tag/v0.19.0) by @gardener-ci-robot [#11330]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.23.4` to `1.23.5`.   
  - `gcr.io/istio-release/proxyv2` from `1.23.4` to `1.23.5`.  by @gardener-ci-robot [#11371]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.34.0` to `0.35.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.35.0) by @gardener-ci-robot [#11348]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.35.0` to `0.36.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.36.0) by @gardener-ci-robot [#11438]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.20` to `v2.2.21`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.21) by @gardener-ci-robot [#11313]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*`: `v0.31.6` -> `v0.32.2`  
  - `sigs.k8s.io/controller-runtime`: `v0.19.6` -> `v0.20.2`  
  - `sigs.k8s.io/controller-tools`: `v0.16.5` -> `v0.17.2` by @LucaBernstein [#11418]
- `[DEVELOPER]` `github.com/gardener/gardener/pkg/utils/managedresources.{WaitUntilHealthy,WaitUntilHealthyAndNotProgressing}` funcs now accept a `client.Reader` instead of a `client.Client`. by @ialidzhikov [#11321]
- `[DEVELOPER]` `golang-test` images for Go 1.24 are built now. Those for Go 1.22 are not built anymore because it is out of maintenance.  by @oliver-goetz [#11369]
- `[OPERATOR]` Remove wildcards `*` from RBAC roles for the `cluster-autoscaler`, `machine-controller-manager` and `prometheus-operator` components. by @AleksandarSavchev [#11314]
- `[OPERATOR]` Shoot system and Shoot control plane containers, which do not require privilege escalations, now forbid privilege escalation explicitly. There is an [issue in Kubernetes](https://github.com/kubernetes/kubernetes/issues/118822) about the privilege escalation configuration being `true` by default. by @georgibaltiev [#11241]
- `[OPERATOR]` Fix the `shoot-annotated-seed-service-endpoints` scrape configuration by adding the address port by @vicwicker [#11413]
- `[OPERATOR]` Revisit the `VerticalPodAutoscalerCappedRecommendation` alert to fix a race condition and other small improvements by @vicwicker [#11325]
- `[OPERATOR]` Remove CPU as controlled resource from VPA for alertmanager and vpn-authzserver.  
  Remove CPU requests from alertmanager and vpn-authzserver. by @voelzmo [#11366]
- `[OPERATOR]` The `gardener-resource-manager` no longer syncs all resources every minute for virtual garden and shoot clusters. It already watches its desired resources anyways, i.e., it already reacts instantly, so there is no need to additionally apply them every minute. by @rfranzke [#11394]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.113.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` There is an incompatible change in the `Garden` (`gardens.operator.gardener.cloud`) custom resource: Fields `.spec.runtimeCluster.networking.{nodes,pods,services}` and `.spec.virtualCluster.networking.services` were changed from type `string` to type `[]string`, e.g., in JSON format, replace `"nodes": "10.0.0.0/16"` with `"nodes": ["10.0.0.0/16"]`. by @ScheererJ [#11251]
## 📰 Noteworthy

- `[OPERATOR]` Incoming reverse VPN connections no longer get authenticated by the reversed-vpn-auth-server as the authentication logic was moved to envoy itself. by @Wieneo [#11328]
- `[OPERATOR]` The apiserver-proxy component does not use the proxy protocol anymore, see [GEP-30](https://github.com/gardener/gardener/blob/master/docs/proposals/30-apiserver-proxy.md). by @Wieneo [#11364]
- `[OPERATOR]` The `shoot.gardener.cloud/managed-seed-api-server` annotation is deprecated and will be removed in a future release. Instead, consider enabling high availability for the ManagedSeed's Shoot control plane. by @ialidzhikov [#11372]
- `[OPERATOR]` Added a new feature gate called "RemoveAPIServerProxyLegacyPort", which disables the unused proxy port (8443) on the istio-ingressgateway Services. Operators can choose to remove the legacy apiserver-proxy port as soon as all shoots have switched to the new apiserver-proxy configuration. They might want to do so if they activate the ACL extension, which is vulnerable to proxy protocol headers of untrusted clients on the apiserver-proxy port. by @Wieneo [#11380]
## ✨ New Features

- `[USER]` `gardener-operator` maintains information about Gardener API Server configuration in the world readable `ConfigMap` `gardener-info` in the `gardener-system-public` `Namespace`, read [here](https://github.com/gardener/gardener/blob/master/docs/usage/gardener/gardener_info_configmap.md) for more details about the content of the`ConfigMap`.  by @vpnachev [#11238]
- `[OPERATOR]` Enhance the `gardener-operator` to allow specification of more than a single network range for `.spec.runtimeCluster.networking.nodes`, `.spec.runtimeCluster.networking.pods`, `.spec.runtimeCluster.networking.services`, and `.spec.virtualCluster.networking.services`, which also allows dual-stack configurations. by @ScheererJ [#11251]
- `[OPERATOR]` Introduces `shoot_operation_duration_seconds` metric to record `Shoot` operation `Create` and `Delete`.  by @simcod [#10971]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.32. To allow creation/update of 1.32 clusters you will have to update the version of your provider extension(s) to a version that supports 1.32 as well. Please consult the respective releases and notes in the provider extension's repository. by @marc1404 [#11197]
- `[OPERATOR]` `CloudProfile.spec.limits.maxNodesTotal` can be used to limit the maximum number of nodes a shoot can have during runtime. See [the documentation](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_limits.md) for more details. by @timebertt [#11279]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.32. Extension developers have to prepare individual extensions as well to work with 1.32. by @marc1404 [#11197]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug which prevented usage of labels with `seed.gardener.cloud/` prefix on `Seed`, `ManagedSeed`, `BackupEntry`, and `Shoot` resources has been fixed. by @rfranzke [#11485]
- `[OPERATOR]` A misleading error message appearing when an operator has wrongly configured OIDC config for the Gardener Dashboard in the Garden resource was fixed. by @dimityrmirchev [#11432]
- `[USER]` The ETCD encryption config now properly configures a 32-byte key. by @dimityrmirchev [#11150]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.3.0` to `v1.4.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.4.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.3.0` to `v1.4.0`.  by @gardener-ci-robot [#11423]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.18.2` to `v0.19.0`.  by @gardener-ci-robot [#11419]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.35` to `v7.5.36`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.36) by @gardener-ci-robot [#11316]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-conntrack` from `3.21.1` to `3.21.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.3) by @gardener-ci-robot [#11409]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/apiserver-proxy` from `v0.18.0` to `v0.19.0`. [Release Notes](https://redirect.github.com/gardener/apiserver-proxy/releases/tag/v0.19.0) by @gardener-ci-robot [#11330]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.23.4` to `1.23.5`.   
  - `gcr.io/istio-release/proxyv2` from `1.23.4` to `1.23.5`.  by @gardener-ci-robot [#11371]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.34.0` to `0.35.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.35.0) by @gardener-ci-robot [#11348]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.35.0` to `0.36.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.36.0) by @gardener-ci-robot [#11438]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.20` to `v2.2.21`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.21) by @gardener-ci-robot [#11313]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*`: `v0.31.6` -> `v0.32.2`  
  - `sigs.k8s.io/controller-runtime`: `v0.19.6` -> `v0.20.2`  
  - `sigs.k8s.io/controller-tools`: `v0.16.5` -> `v0.17.2` by @LucaBernstein [#11418]
- `[DEVELOPER]` `github.com/gardener/gardener/pkg/utils/managedresources.{WaitUntilHealthy,WaitUntilHealthyAndNotProgressing}` funcs now accept a `client.Reader` instead of a `client.Client`. by @ialidzhikov [#11321]
- `[DEVELOPER]` `golang-test` images for Go 1.24 are built now. Those for Go 1.22 are not built anymore because it is out of maintenance.  by @oliver-goetz [#11369]
- `[OPERATOR]` Remove wildcards `*` from RBAC roles for the `cluster-autoscaler`, `machine-controller-manager` and `prometheus-operator` components. by @AleksandarSavchev [#11314]
- `[OPERATOR]` Shoot system and Shoot control plane containers, which do not require privilege escalations, now forbid privilege escalation explicitly. There is an [issue in Kubernetes](https://github.com/kubernetes/kubernetes/issues/118822) about the privilege escalation configuration being `true` by default. by @georgibaltiev [#11241]
- `[OPERATOR]` Fix the `shoot-annotated-seed-service-endpoints` scrape configuration by adding the address port by @vicwicker [#11413]
- `[OPERATOR]` Revisit the `VerticalPodAutoscalerCappedRecommendation` alert to fix a race condition and other small improvements by @vicwicker [#11325]
- `[OPERATOR]` Remove CPU as controlled resource from VPA for alertmanager and vpn-authzserver.  
  Remove CPU requests from alertmanager and vpn-authzserver. by @voelzmo [#11366]
- `[OPERATOR]` The `gardener-resource-manager` no longer syncs all resources every minute for virtual garden and shoot clusters. It already watches its desired resources anyways, i.e., it already reacts instantly, so there is no need to additionally apply them every minute. by @rfranzke [#11394]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.113.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` There is an incompatible change in the `Garden` (`gardens.operator.gardener.cloud`) custom resource: Fields `.spec.runtimeCluster.networking.{nodes,pods,services}` and `.spec.virtualCluster.networking.services` were changed from type `string` to type `[]string`, e.g., in JSON format, replace `"nodes": "10.0.0.0/16"` with `"nodes": ["10.0.0.0/16"]`. by @ScheererJ [#11251]
## 📰 Noteworthy

- `[OPERATOR]` Incoming reverse VPN connections no longer get authenticated by the reversed-vpn-auth-server as the authentication logic was moved to envoy itself. by @Wieneo [#11328]
- `[OPERATOR]` The apiserver-proxy component does not use the proxy protocol anymore, see [GEP-30](https://github.com/gardener/gardener/blob/master/docs/proposals/30-apiserver-proxy.md). by @Wieneo [#11364]
- `[OPERATOR]` The `shoot.gardener.cloud/managed-seed-api-server` annotation is deprecated and will be removed in a future release. Instead, consider enabling high availability for the ManagedSeed's Shoot control plane. by @ialidzhikov [#11372]
- `[OPERATOR]` Added a new feature gate called "RemoveAPIServerProxyLegacyPort", which disables the unused proxy port (8443) on the istio-ingressgateway Services. Operators can choose to remove the legacy apiserver-proxy port as soon as all shoots have switched to the new apiserver-proxy configuration. They might want to do so if they activate the ACL extension, which is vulnerable to proxy protocol headers of untrusted clients on the apiserver-proxy port. by @Wieneo [#11380]
## ✨ New Features

- `[USER]` `gardener-operator` maintains information about Gardener API Server configuration in the world readable `ConfigMap` `gardener-info` in the `gardener-system-public` `Namespace`, read [here](https://github.com/gardener/gardener/blob/master/docs/usage/gardener/gardener_info_configmap.md) for more details about the content of the`ConfigMap`.  by @vpnachev [#11238]
- `[OPERATOR]` Enhance the `gardener-operator` to allow specification of more than a single network range for `.spec.runtimeCluster.networking.nodes`, `.spec.runtimeCluster.networking.pods`, `.spec.runtimeCluster.networking.services`, and `.spec.virtualCluster.networking.services`, which also allows dual-stack configurations. by @ScheererJ [#11251]
- `[OPERATOR]` Introduces `shoot_operation_duration_seconds` metric to record `Shoot` operation `Create` and `Delete`.  by @simcod [#10971]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.32. To allow creation/update of 1.32 clusters you will have to update the version of your provider extension(s) to a version that supports 1.32 as well. Please consult the respective releases and notes in the provider extension's repository. by @marc1404 [#11197]
- `[OPERATOR]` `CloudProfile.spec.limits.maxNodesTotal` can be used to limit the maximum number of nodes a shoot can have during runtime. See [the documentation](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_limits.md) for more details. by @timebertt [#11279]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.32. Extension developers have to prepare individual extensions as well to work with 1.32. by @marc1404 [#11197]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug which prevented usage of labels with `seed.gardener.cloud/` prefix on `Seed`, `ManagedSeed`, `BackupEntry`, and `Shoot` resources has been fixed. by @rfranzke [#11485]
- `[OPERATOR]` A misleading error message appearing when an operator has wrongly configured OIDC config for the Gardener Dashboard in the Garden resource was fixed. by @dimityrmirchev [#11432]
- `[USER]` The ETCD encryption config now properly configures a 32-byte key. by @dimityrmirchev [#11150]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.3.0` to `v1.4.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.4.0)  
  - `github.com/gardener/dependency-watchdog` from `v1.3.0` to `v1.4.0`.  by @gardener-ci-robot [#11423]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.18.2` to `v0.19.0`.  by @gardener-ci-robot [#11419]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.35` to `v7.5.36`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.36) by @gardener-ci-robot [#11316]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-conntrack` from `3.21.1` to `3.21.3`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.3) by @gardener-ci-robot [#11409]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/apiserver-proxy` from `v0.18.0` to `v0.19.0`. [Release Notes](https://redirect.github.com/gardener/apiserver-proxy/releases/tag/v0.19.0) by @gardener-ci-robot [#11330]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.23.4` to `1.23.5`.   
  - `gcr.io/istio-release/proxyv2` from `1.23.4` to `1.23.5`.  by @gardener-ci-robot [#11371]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.34.0` to `0.35.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.35.0) by @gardener-ci-robot [#11348]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.35.0` to `0.36.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.36.0) by @gardener-ci-robot [#11438]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.20` to `v2.2.21`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.21) by @gardener-ci-robot [#11313]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*`: `v0.31.6` -> `v0.32.2`  
  - `sigs.k8s.io/controller-runtime`: `v0.19.6` -> `v0.20.2`  
  - `sigs.k8s.io/controller-tools`: `v0.16.5` -> `v0.17.2` by @LucaBernstein [#11418]
- `[DEVELOPER]` `github.com/gardener/gardener/pkg/utils/managedresources.{WaitUntilHealthy,WaitUntilHealthyAndNotProgressing}` funcs now accept a `client.Reader` instead of a `client.Client`. by @ialidzhikov [#11321]
- `[DEVELOPER]` `golang-test` images for Go 1.24 are built now. Those for Go 1.22 are not built anymore because it is out of maintenance.  by @oliver-goetz [#11369]
- `[OPERATOR]` Remove wildcards `*` from RBAC roles for the `cluster-autoscaler`, `machine-controller-manager` and `prometheus-operator` components. by @AleksandarSavchev [#11314]
- `[OPERATOR]` Shoot system and Shoot control plane containers, which do not require privilege escalations, now forbid privilege escalation explicitly. There is an [issue in Kubernetes](https://github.com/kubernetes/kubernetes/issues/118822) about the privilege escalation configuration being `true` by default. by @georgibaltiev [#11241]
- `[OPERATOR]` Fix the `shoot-annotated-seed-service-endpoints` scrape configuration by adding the address port by @vicwicker [#11413]
- `[OPERATOR]` Revisit the `VerticalPodAutoscalerCappedRecommendation` alert to fix a race condition and other small improvements by @vicwicker [#11325]
- `[OPERATOR]` Remove CPU as controlled resource from VPA for alertmanager and vpn-authzserver.  
  Remove CPU requests from alertmanager and vpn-authzserver. by @voelzmo [#11366]
- `[OPERATOR]` The `gardener-resource-manager` no longer syncs all resources every minute for virtual garden and shoot clusters. It already watches its desired resources anyways, i.e., it already reacts instantly, so there is no need to additionally apply them every minute. by @rfranzke [#11394]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.113.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.113.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.113.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.113.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.113.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.113.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.113.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.113.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.113.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.113.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.113.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.113.0`


</details>
