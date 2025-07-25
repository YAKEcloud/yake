---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.123.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12566]
- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12561]
- `[OPERATOR]` A bug in the `istio-ingress` helm chart which could lead to a missing traffic distribution policy in the internal istio-ingressgateway service on certain Kubernetes versions has been fixed. by @oliver-goetz [#12545]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.123.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12566]
- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12561]
- `[OPERATOR]` A bug in the `istio-ingress` helm chart which could lead to a missing traffic distribution policy in the internal istio-ingressgateway service on certain Kubernetes versions has been fixed. by @oliver-goetz [#12545]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.123.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12566]
- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12561]
- `[OPERATOR]` A bug in the `istio-ingress` helm chart which could lead to a missing traffic distribution policy in the internal istio-ingressgateway service on certain Kubernetes versions has been fixed. by @oliver-goetz [#12545]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.123.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.123.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.123.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.123.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.123.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.123.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.123.2`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.123.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.123.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.123.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.123.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.123.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.123.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.124.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` ⚠️ The `BackupBucket` API field `spec.secretRef` has been removed, please migrate your backupbucket manifests to `spec.credentialsRef`! Gardener API server already has defaulted this field.  by @vpnachev [#12517]
- `[USER]` Starting with Kubernetes v1.34, setting the field `.spec.cloudProfileName` is be forbidden. The field will be dropped from existing Shoots once. Users are advised to drop this field and specify the cloud profile using the `.spec.cloudProfile.name` field instead. by @LucaBernstein [#11816]
## 📰 Noteworthy

- `[OPERATOR]` The graduated feature gate `NodeAgentAuthorizer` has been removed. by @oliver-goetz [#12576]
- `[USER]` Starting with Kubernetes v1.33, there are be API warnings for Shoots that have the `.spec.cloudProfileName` field set. Users are advised to drop this field and specify the cloud profile using the `.spec.cloudProfile.name` field instead. by @LucaBernstein [#11816]
## ✨ New Features

- `[USER]` IPv4 or dual-stack shoots can now define IPv4 pod, service and node networks overlapping with networks of their seed. This works for both HA and non-HA shoots now. by @domdom82 [#12204]
- `[USER]` The Shoot resource does now support configuring feature gates for the Vertical Pod Autoscaler (VPA). With this feature, end users can enable the `InPlacePodVerticalScaling` feature gate of VPA. For more details, see [In-Place Updates of Pod Resources](https://github.com/gardener/gardener/blob/v1.124.0/docs/usage/autoscaling/in-place-resource-updates.md). by @vitanovs [#12339]
- `[OPERATOR]` Istio service & workload dashboards are deployed now in Seeds and in Garden runtime cluster to improve observability when L7 load balancing is active. Additionally, the existing Istio dashboards for Seeds are now deployed in the Garden runtime cluster too. by @oliver-goetz [#12509]
- `[OPERATOR]` The Seed and Garden resources do now support configuring feature gates for the Vertical Pod Autoscaler (VPA). With this feature, Gardener operators can enable the `InPlacePodVerticalScaling` feature gate of VPA. For more details, see [In-Place Updates of Pod Resources](https://github.com/gardener/gardener/blob/v1.124.0/docs/usage/autoscaling/in-place-resource-updates.md). by @vitanovs [#12339]
- `[OPERATOR]` Introduced a feature gate `OpenTelemetryCollector` that enables the creation of an `OpenTelemetry Collector` inside the control-plane of every Shoot. This will route logs through the aforementioned `Collector`, enabling Shoot logs to be stored in any backend. by @rrhubenov [#12428]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12542]
- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12557]
- `[OPERATOR]` A bug where WorkloadIdentity tokens used for etcd backups, i.e. in the context of `BackupEntry` resource, tried to include shoot and project info when the shoot resource is deleted is now fixed.  by @vpnachev [#12516]
- `[OPERATOR]` `gardener-resource-manager` is now excluded from `pod-kube-apiserver-load-balancing` webhook when running in garden runtime cluster. by @oliver-goetz [#12526]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]
- `[OPERATOR]` A bug in the `istio-ingress` helm chart which could lead to a missing traffic distribution policy in the internal istio-ingressgateway service on certain Kubernetes versions has been fixed. by @oliver-goetz [#12541]
- `[OPERATOR]` A bug has been fixed which prevented the seed-specific Plutono dashboards from being provided by `gardenlet` in case its seed cluster was the garden runtime cluster at the same time. by @rfranzke [#12476]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.1` to `v1.34.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.2) by @gardener-ci-robot [#12501]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.58.0` to `v0.59.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.59.0)  
  - `github.com/gardener/machine-controller-manager` from `v0.58.0` to `v0.59.0`.  by @gardener-ci-robot [#12482]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `europe-docker.pkg.dev/gardener-project/releases/3rd/opentelemetry-operator/opentelemetry-operator` from `v0.127.0` to `v0.129.1`.  by @rrhubenov [#12480]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.24` to `v2.2.25`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.25) by @gardener-ci-robot [#12555]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.59.1` to `v0.59.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.59.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.59.1` to `v0.59.2`. by @gardener-ci-robot [#12595]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.59.0` to `v0.59.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.59.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.59.0` to `v0.59.1`.  by @gardener-ci-robot [#12569]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.39` to `v7.5.40`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.40) by @gardener-ci-robot [#12554]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.30.1` to `v0.31.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.31.0)  
  - `github.com/gardener/etcd-druid/api` from `v0.30.1` to `v0.31.0`.  by @rfranzke [#12551]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.2` to `v1.34.3`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.3) by @gardener-ci-robot [#12574]
- `[OPERATOR]` Resource limits on vpn-shoot have been removed. by @domdom82 [#12515]
- `[OPERATOR]` A new validation for Quota `.spec.clusterLifetimeDays` field is added. The field value must be greater than 0. by @tobschli [#12478]
- `[OPERATOR]` Resource limits on vpn envoy have been removed. by @domdom82 [#12534]
[github.com/gardener/gardener-discovery-server:v0.7.0]
# [gardener/gardener-discovery-server]

## 🏃 Others

- `[OPERATOR]` The following third-party dependencies have been updated:  
  - github.com/go-logr/logr v1.4.2 -> v1.4.3  
  - cel.dev/expr v0.23.1 -> v0.24.0  
  - github.com/Masterminds/semver/v3 v3.3.1 -> v3.4.0  
  - github.com/fluent/fluent-operator/v3 v3.3.0 -> v3.4.0   
  - golang.org/x/sync v0.15.0 -> v0.16.0  
  - golang.org/x/sys v0.33.0 -> v0.34.0  
  - golang.org/x/term v0.32.0 -> v0.33.0  
  - golang.org/x/text v0.26.0 -> v0.27.0  
  - helm.sh/helm/v3 v3.18.3 -> v3.18.4  
  - sigs.k8s.io/yaml v1.4.0 -> v1.5.0 by @vpnachev [#126]
- `[OPERATOR]` `gardener-discovery-server` is now built using go 1.24.5. by @dependabot[bot] [#125]
- `[DEPENDENCY]` The following third-party dependencies have been updated:  
  - github.com/gardener/gardener v1.121.2 -> v1.122.1  
  - k8s.io/api v0.32.5 -> v0.33.2  
  - k8s.io/apimachinery v0.32.5 -> v0.33.2  
  - k8s.io/client-go v0.32.5 -> v0.33.2  
  - k8s.io/component-base v0.32.5 -> v0.33.2  
  - sigs.k8s.io/controller-runtime v0.20.4 -> v0.21.0  
  - sigs.k8s.io/controller-tools v0.17.3 -> v0.18.0 by @dependabot[bot] [#124]

## Container (OCI) Images
- gardener-discovery-server: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardener-discovery-server:v0.7.0`

[github.com/gardener/etcd-druid:v0.31.0]
# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` The existing CLI flag reconciler-service-account was optional. Its value is a fully qualified name of the service account used by etcd-druid in the format "system:serviceaccount:<namespace>:<service-account-name>".  This has now been made required. If you are continuing to use the deprecated CLI fags then you must specify it. Alternatively if you have switched to using the new OperatorConfiguration then you should set "OperatorConfiguration.Webhooks.EtcdComponentProtection.ServiceAccountInfo" instead. by @unmarshall [#1090]
## ✨ New Features

- `[DEVELOPER]` The new `.spec.etcd.wrapperPort` field allows to change the server port of `etcd-wrapper`. by @rfranzke [#1086]
- `[OPERATOR]` Introduced OperatorConfiguration as a replacement to the existing etcd-druid CLI flags. The configuration gets mounted as a ConfigMap onto the etcd-druid Deployment. The existing CLI flags have been marked as deprecated. Their support will be removed after a few releases of etcd-druid. by @unmarshall [#1090]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fix incorrectly named config field in skaffold profile for e2e tests by @anveshreddy18 [#1134]
- `[DEVELOPER]` An issue has been fixed which caused `etcd` pods not to start when port different from the default values were used. by @rfranzke [#1086]
- `[OPERATOR]` Fix a bug which caused etcd-druid to fail at start up, due to a group mismatch for `OperatorConfiguration` in its group registration and templates. by @renormalize [#1118]
- `[USER]` Fix a volume mount issue of provider `Local` for etcd backups by @anveshreddy18 [#1102]
## 🏃 Others

- `[USER]` Secret controller now manages finalizer on referenced backup-restore TLS secrets. by @shreyas-s-rao [#1125]
- `[OPERATOR]` replace usage of fake client library in tests with the fake client builder in test/utils directory by @Shreyas-s14 [#1120]
- `[OPERATOR]` Fixes etcd-druid service template yaml to properly support operator configuration values defined in values.yaml by @unmarshall [#1132]
- `[DEVELOPER]` Remove the functionality that deletes old ConfigMaps from the cluster by @anveshreddy18 [#1103]
# [gardener/etcd-backup-restore]

## ✨ New Features

- `[DEVELOPER]` AWS SDK has been upgraded to v2. by @vpnachev [gardener/etcd-backup-restore#874]
## 🏃 Others

- `[DEVELOPER]` Update golang version to `1.24.4`. by @shreyas-s-rao [gardener/etcd-backup-restore#886]
# [gardener/etcd-wrapper]

## 🏃 Others

- `[DEVELOPER]` Update golang images to `1.24.4`. by @shreyas-s-rao [gardener/etcd-wrapper#58]

## Helm Charts
- etcd-druid: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/etcd-druid/etcd-druid:v0.31.0`
## Container (OCI) Images
- etcd-druid: `europe-docker.pkg.dev/gardener-project/releases/gardener/etcd-druid:v0.31.0`

[github.com/gardener/etcd-wrapper:v0.5.2]
# [gardener/etcd-wrapper]

## 🏃 Others

- `[DEVELOPER]` Update golang images to `1.24.4`. by @shreyas-s-rao [#58]

## Container (OCI) Images
- etcd-wrapper: `europe-docker.pkg.dev/gardener-project/releases/gardener/etcd-wrapper:v0.5.2`

[github.com/gardener/etcd-backup-restore:v0.37.0]
# [gardener/etcd-backup-restore]

## ✨ New Features

- `[DEVELOPER]` AWS SDK has been upgraded to v2. by @vpnachev [#874]
## 🏃 Others

- `[DEVELOPER]` Update golang version to `1.24.4`. by @shreyas-s-rao [#886]

## Container (OCI) Images
- etcdbrctl: `europe-docker.pkg.dev/gardener-project/releases/gardener/etcdbrctl:v0.37.0`

[github.com/gardener/machine-controller-manager:v0.59.0]
# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` machine-controller-manager can manage machines without a target cluster by specifying `--target-kubeconfig=none`. See the [documentation](https://github.com/gardener/machine-controller-manager/blob/master/docs/FAQ.md#how-to-run-mcm-in-different-cluster-setups) for more details. by @timebertt [#1004]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix a bug where MCM does not check if a pod has already been evicted before reattempting eviction blindly by @aaronfern [#979]
- `[OPERATOR]` Fixed a bug in the MachineSet controller where the machine status was set to `Terminating` even if attempt to delete the machine object failed. by @takoverflow [#995]
## 🏃 Others

- `[OPERATOR]` add new label `node_name` to the `mcm_machine_info` metric by @aaronfern [#1000]
- `[OPERATOR]` machine-controller-manager base image is updated to `gcr.io/distroless/static-debian12:nonroot`. by @aaronfern [#991]

## Container (OCI) Images
- machine-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/machine-controller-manager:v0.59.0`

[github.com/gardener/machine-controller-manager:v0.59.1]
# [gardener/machine-controller-manager]

## 🏃 Others

- `[OPERATOR]` `node.gardener.cloud/critical-components-not-ready` taint is added to the node after the successful in-place update to prevent scheduling any workload before critical component pods are ready. by @acumino [#1017]

## Container (OCI) Images
- machine-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/machine-controller-manager:v0.59.1`

[github.com/gardener/machine-controller-manager:v0.59.2]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug where machines in the `InPlaceUpdating` phase were incorrectly transferred to the new machine set during inplace updates. This caused the machine controller to miss updating the phase to `InPlaceUpdateSuccessful`, resulting in machines getting stuck or marked as `InPlaceUpdateFailed`. by @acumino [#1020]
[github.com/gardener/vpn2:0.39.0]
# [gardener/vpn2]

## 📰 Noteworthy

- `[OPERATOR]` Overlapping CIDR ranges between seed and shoot IPv4 networks for HA VPN deployments are now possible. by @domdom82 [#151]

## Container (OCI) Images
- vpn-client: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-client:0.39.0`
- vpn-server: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-server:0.39.0`

[github.com/gardener/vpn2:0.40.0]
# [gardener/vpn2]

## 📰 Noteworthy

- `[OPERATOR]` Double-NAT IP mapping will only be done if there is an actual overlap of shoot vs. seed IPv4 network ranges for HA VPN deployments. Non-HA VPN configurations are unchanged. by @domdom82 [#154]

## Container (OCI) Images
- vpn-client: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-client:0.40.0`
- vpn-server: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-server:0.40.0`


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.124.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` ⚠️ The `BackupBucket` API field `spec.secretRef` has been removed, please migrate your backupbucket manifests to `spec.credentialsRef`! Gardener API server already has defaulted this field.  by @vpnachev [#12517]
- `[USER]` Starting with Kubernetes v1.34, setting the field `.spec.cloudProfileName` is be forbidden. The field will be dropped from existing Shoots once. Users are advised to drop this field and specify the cloud profile using the `.spec.cloudProfile.name` field instead. by @LucaBernstein [#11816]
## 📰 Noteworthy

- `[OPERATOR]` The graduated feature gate `NodeAgentAuthorizer` has been removed. by @oliver-goetz [#12576]
- `[USER]` Starting with Kubernetes v1.33, there are be API warnings for Shoots that have the `.spec.cloudProfileName` field set. Users are advised to drop this field and specify the cloud profile using the `.spec.cloudProfile.name` field instead. by @LucaBernstein [#11816]
## ✨ New Features

- `[USER]` IPv4 or dual-stack shoots can now define IPv4 pod, service and node networks overlapping with networks of their seed. This works for both HA and non-HA shoots now. by @domdom82 [#12204]
- `[USER]` The Shoot resource does now support configuring feature gates for the Vertical Pod Autoscaler (VPA). With this feature, end users can enable the `InPlacePodVerticalScaling` feature gate of VPA. For more details, see [In-Place Updates of Pod Resources](https://github.com/gardener/gardener/blob/v1.124.0/docs/usage/autoscaling/in-place-resource-updates.md). by @vitanovs [#12339]
- `[OPERATOR]` Istio service & workload dashboards are deployed now in Seeds and in Garden runtime cluster to improve observability when L7 load balancing is active. Additionally, the existing Istio dashboards for Seeds are now deployed in the Garden runtime cluster too. by @oliver-goetz [#12509]
- `[OPERATOR]` The Seed and Garden resources do now support configuring feature gates for the Vertical Pod Autoscaler (VPA). With this feature, Gardener operators can enable the `InPlacePodVerticalScaling` feature gate of VPA. For more details, see [In-Place Updates of Pod Resources](https://github.com/gardener/gardener/blob/v1.124.0/docs/usage/autoscaling/in-place-resource-updates.md). by @vitanovs [#12339]
- `[OPERATOR]` Introduced a feature gate `OpenTelemetryCollector` that enables the creation of an `OpenTelemetry Collector` inside the control-plane of every Shoot. This will route logs through the aforementioned `Collector`, enabling Shoot logs to be stored in any backend. by @rrhubenov [#12428]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12542]
- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12557]
- `[OPERATOR]` A bug where WorkloadIdentity tokens used for etcd backups, i.e. in the context of `BackupEntry` resource, tried to include shoot and project info when the shoot resource is deleted is now fixed.  by @vpnachev [#12516]
- `[OPERATOR]` `gardener-resource-manager` is now excluded from `pod-kube-apiserver-load-balancing` webhook when running in garden runtime cluster. by @oliver-goetz [#12526]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]
- `[OPERATOR]` A bug in the `istio-ingress` helm chart which could lead to a missing traffic distribution policy in the internal istio-ingressgateway service on certain Kubernetes versions has been fixed. by @oliver-goetz [#12541]
- `[OPERATOR]` A bug has been fixed which prevented the seed-specific Plutono dashboards from being provided by `gardenlet` in case its seed cluster was the garden runtime cluster at the same time. by @rfranzke [#12476]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.1` to `v1.34.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.2) by @gardener-ci-robot [#12501]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.58.0` to `v0.59.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.59.0)  
  - `github.com/gardener/machine-controller-manager` from `v0.58.0` to `v0.59.0`.  by @gardener-ci-robot [#12482]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `europe-docker.pkg.dev/gardener-project/releases/3rd/opentelemetry-operator/opentelemetry-operator` from `v0.127.0` to `v0.129.1`.  by @rrhubenov [#12480]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.24` to `v2.2.25`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.25) by @gardener-ci-robot [#12555]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.59.1` to `v0.59.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.59.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.59.1` to `v0.59.2`. by @gardener-ci-robot [#12595]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.59.0` to `v0.59.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.59.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.59.0` to `v0.59.1`.  by @gardener-ci-robot [#12569]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.39` to `v7.5.40`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.40) by @gardener-ci-robot [#12554]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.30.1` to `v0.31.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.31.0)  
  - `github.com/gardener/etcd-druid/api` from `v0.30.1` to `v0.31.0`.  by @rfranzke [#12551]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.2` to `v1.34.3`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.3) by @gardener-ci-robot [#12574]
- `[OPERATOR]` Resource limits on vpn-shoot have been removed. by @domdom82 [#12515]
- `[OPERATOR]` A new validation for Quota `.spec.clusterLifetimeDays` field is added. The field value must be greater than 0. by @tobschli [#12478]
- `[OPERATOR]` Resource limits on vpn envoy have been removed. by @domdom82 [#12534]
[github.com/gardener/gardener-discovery-server:v0.7.0]
# [gardener/gardener-discovery-server]

## 🏃 Others

- `[OPERATOR]` The following third-party dependencies have been updated:  
  - github.com/go-logr/logr v1.4.2 -> v1.4.3  
  - cel.dev/expr v0.23.1 -> v0.24.0  
  - github.com/Masterminds/semver/v3 v3.3.1 -> v3.4.0  
  - github.com/fluent/fluent-operator/v3 v3.3.0 -> v3.4.0   
  - golang.org/x/sync v0.15.0 -> v0.16.0  
  - golang.org/x/sys v0.33.0 -> v0.34.0  
  - golang.org/x/term v0.32.0 -> v0.33.0  
  - golang.org/x/text v0.26.0 -> v0.27.0  
  - helm.sh/helm/v3 v3.18.3 -> v3.18.4  
  - sigs.k8s.io/yaml v1.4.0 -> v1.5.0 by @vpnachev [#126]
- `[OPERATOR]` `gardener-discovery-server` is now built using go 1.24.5. by @dependabot[bot] [#125]
- `[DEPENDENCY]` The following third-party dependencies have been updated:  
  - github.com/gardener/gardener v1.121.2 -> v1.122.1  
  - k8s.io/api v0.32.5 -> v0.33.2  
  - k8s.io/apimachinery v0.32.5 -> v0.33.2  
  - k8s.io/client-go v0.32.5 -> v0.33.2  
  - k8s.io/component-base v0.32.5 -> v0.33.2  
  - sigs.k8s.io/controller-runtime v0.20.4 -> v0.21.0  
  - sigs.k8s.io/controller-tools v0.17.3 -> v0.18.0 by @dependabot[bot] [#124]

## Container (OCI) Images
- gardener-discovery-server: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardener-discovery-server:v0.7.0`

[github.com/gardener/etcd-druid:v0.31.0]
# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` The existing CLI flag reconciler-service-account was optional. Its value is a fully qualified name of the service account used by etcd-druid in the format "system:serviceaccount:<namespace>:<service-account-name>".  This has now been made required. If you are continuing to use the deprecated CLI fags then you must specify it. Alternatively if you have switched to using the new OperatorConfiguration then you should set "OperatorConfiguration.Webhooks.EtcdComponentProtection.ServiceAccountInfo" instead. by @unmarshall [#1090]
## ✨ New Features

- `[DEVELOPER]` The new `.spec.etcd.wrapperPort` field allows to change the server port of `etcd-wrapper`. by @rfranzke [#1086]
- `[OPERATOR]` Introduced OperatorConfiguration as a replacement to the existing etcd-druid CLI flags. The configuration gets mounted as a ConfigMap onto the etcd-druid Deployment. The existing CLI flags have been marked as deprecated. Their support will be removed after a few releases of etcd-druid. by @unmarshall [#1090]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fix incorrectly named config field in skaffold profile for e2e tests by @anveshreddy18 [#1134]
- `[DEVELOPER]` An issue has been fixed which caused `etcd` pods not to start when port different from the default values were used. by @rfranzke [#1086]
- `[OPERATOR]` Fix a bug which caused etcd-druid to fail at start up, due to a group mismatch for `OperatorConfiguration` in its group registration and templates. by @renormalize [#1118]
- `[USER]` Fix a volume mount issue of provider `Local` for etcd backups by @anveshreddy18 [#1102]
## 🏃 Others

- `[USER]` Secret controller now manages finalizer on referenced backup-restore TLS secrets. by @shreyas-s-rao [#1125]
- `[OPERATOR]` replace usage of fake client library in tests with the fake client builder in test/utils directory by @Shreyas-s14 [#1120]
- `[OPERATOR]` Fixes etcd-druid service template yaml to properly support operator configuration values defined in values.yaml by @unmarshall [#1132]
- `[DEVELOPER]` Remove the functionality that deletes old ConfigMaps from the cluster by @anveshreddy18 [#1103]
# [gardener/etcd-backup-restore]

## ✨ New Features

- `[DEVELOPER]` AWS SDK has been upgraded to v2. by @vpnachev [gardener/etcd-backup-restore#874]
## 🏃 Others

- `[DEVELOPER]` Update golang version to `1.24.4`. by @shreyas-s-rao [gardener/etcd-backup-restore#886]
# [gardener/etcd-wrapper]

## 🏃 Others

- `[DEVELOPER]` Update golang images to `1.24.4`. by @shreyas-s-rao [gardener/etcd-wrapper#58]

## Helm Charts
- etcd-druid: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/etcd-druid/etcd-druid:v0.31.0`
## Container (OCI) Images
- etcd-druid: `europe-docker.pkg.dev/gardener-project/releases/gardener/etcd-druid:v0.31.0`

[github.com/gardener/etcd-wrapper:v0.5.2]
# [gardener/etcd-wrapper]

## 🏃 Others

- `[DEVELOPER]` Update golang images to `1.24.4`. by @shreyas-s-rao [#58]

## Container (OCI) Images
- etcd-wrapper: `europe-docker.pkg.dev/gardener-project/releases/gardener/etcd-wrapper:v0.5.2`

[github.com/gardener/etcd-backup-restore:v0.37.0]
# [gardener/etcd-backup-restore]

## ✨ New Features

- `[DEVELOPER]` AWS SDK has been upgraded to v2. by @vpnachev [#874]
## 🏃 Others

- `[DEVELOPER]` Update golang version to `1.24.4`. by @shreyas-s-rao [#886]

## Container (OCI) Images
- etcdbrctl: `europe-docker.pkg.dev/gardener-project/releases/gardener/etcdbrctl:v0.37.0`

[github.com/gardener/machine-controller-manager:v0.59.0]
# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` machine-controller-manager can manage machines without a target cluster by specifying `--target-kubeconfig=none`. See the [documentation](https://github.com/gardener/machine-controller-manager/blob/master/docs/FAQ.md#how-to-run-mcm-in-different-cluster-setups) for more details. by @timebertt [#1004]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix a bug where MCM does not check if a pod has already been evicted before reattempting eviction blindly by @aaronfern [#979]
- `[OPERATOR]` Fixed a bug in the MachineSet controller where the machine status was set to `Terminating` even if attempt to delete the machine object failed. by @takoverflow [#995]
## 🏃 Others

- `[OPERATOR]` add new label `node_name` to the `mcm_machine_info` metric by @aaronfern [#1000]
- `[OPERATOR]` machine-controller-manager base image is updated to `gcr.io/distroless/static-debian12:nonroot`. by @aaronfern [#991]

## Container (OCI) Images
- machine-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/machine-controller-manager:v0.59.0`

[github.com/gardener/machine-controller-manager:v0.59.1]
# [gardener/machine-controller-manager]

## 🏃 Others

- `[OPERATOR]` `node.gardener.cloud/critical-components-not-ready` taint is added to the node after the successful in-place update to prevent scheduling any workload before critical component pods are ready. by @acumino [#1017]

## Container (OCI) Images
- machine-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/machine-controller-manager:v0.59.1`

[github.com/gardener/machine-controller-manager:v0.59.2]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug where machines in the `InPlaceUpdating` phase were incorrectly transferred to the new machine set during inplace updates. This caused the machine controller to miss updating the phase to `InPlaceUpdateSuccessful`, resulting in machines getting stuck or marked as `InPlaceUpdateFailed`. by @acumino [#1020]
[github.com/gardener/vpn2:0.39.0]
# [gardener/vpn2]

## 📰 Noteworthy

- `[OPERATOR]` Overlapping CIDR ranges between seed and shoot IPv4 networks for HA VPN deployments are now possible. by @domdom82 [#151]

## Container (OCI) Images
- vpn-client: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-client:0.39.0`
- vpn-server: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-server:0.39.0`

[github.com/gardener/vpn2:0.40.0]
# [gardener/vpn2]

## 📰 Noteworthy

- `[OPERATOR]` Double-NAT IP mapping will only be done if there is an actual overlap of shoot vs. seed IPv4 network ranges for HA VPN deployments. Non-HA VPN configurations are unchanged. by @domdom82 [#154]

## Container (OCI) Images
- vpn-client: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-client:0.40.0`
- vpn-server: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-server:0.40.0`


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.124.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` ⚠️ The `BackupBucket` API field `spec.secretRef` has been removed, please migrate your backupbucket manifests to `spec.credentialsRef`! Gardener API server already has defaulted this field.  by @vpnachev [#12517]
- `[USER]` Starting with Kubernetes v1.34, setting the field `.spec.cloudProfileName` is be forbidden. The field will be dropped from existing Shoots once. Users are advised to drop this field and specify the cloud profile using the `.spec.cloudProfile.name` field instead. by @LucaBernstein [#11816]
## 📰 Noteworthy

- `[OPERATOR]` The graduated feature gate `NodeAgentAuthorizer` has been removed. by @oliver-goetz [#12576]
- `[USER]` Starting with Kubernetes v1.33, there are be API warnings for Shoots that have the `.spec.cloudProfileName` field set. Users are advised to drop this field and specify the cloud profile using the `.spec.cloudProfile.name` field instead. by @LucaBernstein [#11816]
## ✨ New Features

- `[USER]` IPv4 or dual-stack shoots can now define IPv4 pod, service and node networks overlapping with networks of their seed. This works for both HA and non-HA shoots now. by @domdom82 [#12204]
- `[USER]` The Shoot resource does now support configuring feature gates for the Vertical Pod Autoscaler (VPA). With this feature, end users can enable the `InPlacePodVerticalScaling` feature gate of VPA. For more details, see [In-Place Updates of Pod Resources](https://github.com/gardener/gardener/blob/v1.124.0/docs/usage/autoscaling/in-place-resource-updates.md). by @vitanovs [#12339]
- `[OPERATOR]` Istio service & workload dashboards are deployed now in Seeds and in Garden runtime cluster to improve observability when L7 load balancing is active. Additionally, the existing Istio dashboards for Seeds are now deployed in the Garden runtime cluster too. by @oliver-goetz [#12509]
- `[OPERATOR]` The Seed and Garden resources do now support configuring feature gates for the Vertical Pod Autoscaler (VPA). With this feature, Gardener operators can enable the `InPlacePodVerticalScaling` feature gate of VPA. For more details, see [In-Place Updates of Pod Resources](https://github.com/gardener/gardener/blob/v1.124.0/docs/usage/autoscaling/in-place-resource-updates.md). by @vitanovs [#12339]
- `[OPERATOR]` Introduced a feature gate `OpenTelemetryCollector` that enables the creation of an `OpenTelemetry Collector` inside the control-plane of every Shoot. This will route logs through the aforementioned `Collector`, enabling Shoot logs to be stored in any backend. by @rrhubenov [#12428]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug in which `gardener-node-agent` was not able to in-place update OS versions that specify only `MAJOR.MINOR` in the `os-release` but `MAJOR.MINOR.PATCH` in the cloud profile is now fixed. by @shafeeqes [#12542]
- `[OPERATOR]` A bug has been fixed which caused `Pod`s from namespaces other than `kube-system` and labeled with `node.gardener.cloud/critical-component=true` to be considered by `gardener-resource-manager`. by @rfranzke [#12557]
- `[OPERATOR]` A bug where WorkloadIdentity tokens used for etcd backups, i.e. in the context of `BackupEntry` resource, tried to include shoot and project info when the shoot resource is deleted is now fixed.  by @vpnachev [#12516]
- `[OPERATOR]` `gardener-resource-manager` is now excluded from `pod-kube-apiserver-load-balancing` webhook when running in garden runtime cluster. by @oliver-goetz [#12526]
- `[OPERATOR]` A bug in shoot reconciliation that caused RewriteEncryptedDataAddLabel to be called for hibernated shoots, leading to a panic in the gardenlet, has been fixed. by @acumino [#12602]
- `[OPERATOR]` A bug in the `istio-ingress` helm chart which could lead to a missing traffic distribution policy in the internal istio-ingressgateway service on certain Kubernetes versions has been fixed. by @oliver-goetz [#12541]
- `[OPERATOR]` A bug has been fixed which prevented the seed-specific Plutono dashboards from being provided by `gardenlet` in case its seed cluster was the garden runtime cluster at the same time. by @rfranzke [#12476]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.1` to `v1.34.2`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.2) by @gardener-ci-robot [#12501]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.58.0` to `v0.59.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.59.0)  
  - `github.com/gardener/machine-controller-manager` from `v0.58.0` to `v0.59.0`.  by @gardener-ci-robot [#12482]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `europe-docker.pkg.dev/gardener-project/releases/3rd/opentelemetry-operator/opentelemetry-operator` from `v0.127.0` to `v0.129.1`.  by @rrhubenov [#12480]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.24` to `v2.2.25`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.25) by @gardener-ci-robot [#12555]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.59.1` to `v0.59.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.59.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.59.1` to `v0.59.2`. by @gardener-ci-robot [#12595]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.59.0` to `v0.59.1`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.59.1)  
  - `github.com/gardener/machine-controller-manager` from `v0.59.0` to `v0.59.1`.  by @gardener-ci-robot [#12569]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.39` to `v7.5.40`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.40) by @gardener-ci-robot [#12554]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.30.1` to `v0.31.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.31.0)  
  - `github.com/gardener/etcd-druid/api` from `v0.30.1` to `v0.31.0`.  by @rfranzke [#12551]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.2` to `v1.34.3`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.3) by @gardener-ci-robot [#12574]
- `[OPERATOR]` Resource limits on vpn-shoot have been removed. by @domdom82 [#12515]
- `[OPERATOR]` A new validation for Quota `.spec.clusterLifetimeDays` field is added. The field value must be greater than 0. by @tobschli [#12478]
- `[OPERATOR]` Resource limits on vpn envoy have been removed. by @domdom82 [#12534]
[github.com/gardener/gardener-discovery-server:v0.7.0]
# [gardener/gardener-discovery-server]

## 🏃 Others

- `[OPERATOR]` The following third-party dependencies have been updated:  
  - github.com/go-logr/logr v1.4.2 -> v1.4.3  
  - cel.dev/expr v0.23.1 -> v0.24.0  
  - github.com/Masterminds/semver/v3 v3.3.1 -> v3.4.0  
  - github.com/fluent/fluent-operator/v3 v3.3.0 -> v3.4.0   
  - golang.org/x/sync v0.15.0 -> v0.16.0  
  - golang.org/x/sys v0.33.0 -> v0.34.0  
  - golang.org/x/term v0.32.0 -> v0.33.0  
  - golang.org/x/text v0.26.0 -> v0.27.0  
  - helm.sh/helm/v3 v3.18.3 -> v3.18.4  
  - sigs.k8s.io/yaml v1.4.0 -> v1.5.0 by @vpnachev [#126]
- `[OPERATOR]` `gardener-discovery-server` is now built using go 1.24.5. by @dependabot[bot] [#125]
- `[DEPENDENCY]` The following third-party dependencies have been updated:  
  - github.com/gardener/gardener v1.121.2 -> v1.122.1  
  - k8s.io/api v0.32.5 -> v0.33.2  
  - k8s.io/apimachinery v0.32.5 -> v0.33.2  
  - k8s.io/client-go v0.32.5 -> v0.33.2  
  - k8s.io/component-base v0.32.5 -> v0.33.2  
  - sigs.k8s.io/controller-runtime v0.20.4 -> v0.21.0  
  - sigs.k8s.io/controller-tools v0.17.3 -> v0.18.0 by @dependabot[bot] [#124]

## Container (OCI) Images
- gardener-discovery-server: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardener-discovery-server:v0.7.0`

[github.com/gardener/etcd-druid:v0.31.0]
# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` The existing CLI flag reconciler-service-account was optional. Its value is a fully qualified name of the service account used by etcd-druid in the format "system:serviceaccount:<namespace>:<service-account-name>".  This has now been made required. If you are continuing to use the deprecated CLI fags then you must specify it. Alternatively if you have switched to using the new OperatorConfiguration then you should set "OperatorConfiguration.Webhooks.EtcdComponentProtection.ServiceAccountInfo" instead. by @unmarshall [#1090]
## ✨ New Features

- `[DEVELOPER]` The new `.spec.etcd.wrapperPort` field allows to change the server port of `etcd-wrapper`. by @rfranzke [#1086]
- `[OPERATOR]` Introduced OperatorConfiguration as a replacement to the existing etcd-druid CLI flags. The configuration gets mounted as a ConfigMap onto the etcd-druid Deployment. The existing CLI flags have been marked as deprecated. Their support will be removed after a few releases of etcd-druid. by @unmarshall [#1090]
## 🐛 Bug Fixes

- `[DEVELOPER]` Fix incorrectly named config field in skaffold profile for e2e tests by @anveshreddy18 [#1134]
- `[DEVELOPER]` An issue has been fixed which caused `etcd` pods not to start when port different from the default values were used. by @rfranzke [#1086]
- `[OPERATOR]` Fix a bug which caused etcd-druid to fail at start up, due to a group mismatch for `OperatorConfiguration` in its group registration and templates. by @renormalize [#1118]
- `[USER]` Fix a volume mount issue of provider `Local` for etcd backups by @anveshreddy18 [#1102]
## 🏃 Others

- `[USER]` Secret controller now manages finalizer on referenced backup-restore TLS secrets. by @shreyas-s-rao [#1125]
- `[OPERATOR]` replace usage of fake client library in tests with the fake client builder in test/utils directory by @Shreyas-s14 [#1120]
- `[OPERATOR]` Fixes etcd-druid service template yaml to properly support operator configuration values defined in values.yaml by @unmarshall [#1132]
- `[DEVELOPER]` Remove the functionality that deletes old ConfigMaps from the cluster by @anveshreddy18 [#1103]
# [gardener/etcd-backup-restore]

## ✨ New Features

- `[DEVELOPER]` AWS SDK has been upgraded to v2. by @vpnachev [gardener/etcd-backup-restore#874]
## 🏃 Others

- `[DEVELOPER]` Update golang version to `1.24.4`. by @shreyas-s-rao [gardener/etcd-backup-restore#886]
# [gardener/etcd-wrapper]

## 🏃 Others

- `[DEVELOPER]` Update golang images to `1.24.4`. by @shreyas-s-rao [gardener/etcd-wrapper#58]

## Helm Charts
- etcd-druid: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/etcd-druid/etcd-druid:v0.31.0`
## Container (OCI) Images
- etcd-druid: `europe-docker.pkg.dev/gardener-project/releases/gardener/etcd-druid:v0.31.0`

[github.com/gardener/etcd-wrapper:v0.5.2]
# [gardener/etcd-wrapper]

## 🏃 Others

- `[DEVELOPER]` Update golang images to `1.24.4`. by @shreyas-s-rao [#58]

## Container (OCI) Images
- etcd-wrapper: `europe-docker.pkg.dev/gardener-project/releases/gardener/etcd-wrapper:v0.5.2`

[github.com/gardener/etcd-backup-restore:v0.37.0]
# [gardener/etcd-backup-restore]

## ✨ New Features

- `[DEVELOPER]` AWS SDK has been upgraded to v2. by @vpnachev [#874]
## 🏃 Others

- `[DEVELOPER]` Update golang version to `1.24.4`. by @shreyas-s-rao [#886]

## Container (OCI) Images
- etcdbrctl: `europe-docker.pkg.dev/gardener-project/releases/gardener/etcdbrctl:v0.37.0`

[github.com/gardener/machine-controller-manager:v0.59.0]
# [gardener/machine-controller-manager]

## ✨ New Features

- `[OPERATOR]` machine-controller-manager can manage machines without a target cluster by specifying `--target-kubeconfig=none`. See the [documentation](https://github.com/gardener/machine-controller-manager/blob/master/docs/FAQ.md#how-to-run-mcm-in-different-cluster-setups) for more details. by @timebertt [#1004]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix a bug where MCM does not check if a pod has already been evicted before reattempting eviction blindly by @aaronfern [#979]
- `[OPERATOR]` Fixed a bug in the MachineSet controller where the machine status was set to `Terminating` even if attempt to delete the machine object failed. by @takoverflow [#995]
## 🏃 Others

- `[OPERATOR]` add new label `node_name` to the `mcm_machine_info` metric by @aaronfern [#1000]
- `[OPERATOR]` machine-controller-manager base image is updated to `gcr.io/distroless/static-debian12:nonroot`. by @aaronfern [#991]

## Container (OCI) Images
- machine-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/machine-controller-manager:v0.59.0`

[github.com/gardener/machine-controller-manager:v0.59.1]
# [gardener/machine-controller-manager]

## 🏃 Others

- `[OPERATOR]` `node.gardener.cloud/critical-components-not-ready` taint is added to the node after the successful in-place update to prevent scheduling any workload before critical component pods are ready. by @acumino [#1017]

## Container (OCI) Images
- machine-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/machine-controller-manager:v0.59.1`

[github.com/gardener/machine-controller-manager:v0.59.2]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug where machines in the `InPlaceUpdating` phase were incorrectly transferred to the new machine set during inplace updates. This caused the machine controller to miss updating the phase to `InPlaceUpdateSuccessful`, resulting in machines getting stuck or marked as `InPlaceUpdateFailed`. by @acumino [#1020]
[github.com/gardener/vpn2:0.39.0]
# [gardener/vpn2]

## 📰 Noteworthy

- `[OPERATOR]` Overlapping CIDR ranges between seed and shoot IPv4 networks for HA VPN deployments are now possible. by @domdom82 [#151]

## Container (OCI) Images
- vpn-client: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-client:0.39.0`
- vpn-server: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-server:0.39.0`

[github.com/gardener/vpn2:0.40.0]
# [gardener/vpn2]

## 📰 Noteworthy

- `[OPERATOR]` Double-NAT IP mapping will only be done if there is an actual overlap of shoot vs. seed IPv4 network ranges for HA VPN deployments. Non-HA VPN configurations are unchanged. by @domdom82 [#154]

## Container (OCI) Images
- vpn-client: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-client:0.40.0`
- vpn-server: `europe-docker.pkg.dev/gardener-project/releases/gardener/vpn-server:0.40.0`


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.124.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.124.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.124.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.124.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.124.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.124.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.124.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.124.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.124.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.124.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.124.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.124.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.124.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.25.3</code></b></summary>

# [gardener/external-dns-management]

## 🏃 Others

- `[OPERATOR]` Revert "Fix sporadic failing updates on switching entries between simple and weighted routing policy (#524)" by @MartinWeindel [#569]
- `[OPERATOR]` Fix panic on startup if `DNSEntry` is ignored (#554) by @MartinWeindel [#570]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.25.3`
## Container (OCI) Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.25.3`


</details>
