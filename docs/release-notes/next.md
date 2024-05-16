---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs

<details>
<summary><b>Update external-dns-management to <code>0.18.5</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` As AWS "us-gov" zones do not support alias target records, they are excluded from the list of canonical hosted zones used to decide if `ALIAS` records are created instead of `CNAME` records. by @MartinWeindel [#365]
- `[USER]` Keep stale entries of other providers of the same zone untouched if all providers but one have invalid credentials and last valid provider is removed. by @MartinWeindel [#364]
## 🏃 Others

- `[OPERATOR]` Update golang from `1.21.6` to `1.22.2` by @MartinWeindel [#366]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.5`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.47.0</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[USER]` Keep stale entries of other providers of the same zone untouched if all providers but one have invalid credentials and last valid provider is removed. by @MartinWeindel [gardener/external-dns-management#364]
- `[OPERATOR]` As AWS "us-gov" zones do not support alias target records, they are excluded from the list of canonical hosted zones used to decide if `ALIAS` records are created instead of `CNAME` records. by @MartinWeindel [gardener/external-dns-management#365]
## 🏃 Others

- `[OPERATOR]` Update golang from `1.21.6` to `1.22.2` by @MartinWeindel [gardener/external-dns-management#366]
# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.91.0 to 1.92.0. by @dependabot[bot] [#318]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.47.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.47.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.47.1</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[OPERATOR]` fix regression bug "secret name is not defined as named resource references at 'spec.resources'" introduced with #320 by `Martin Weindel <martin.weindel@sap.com>` [$490d837737a4f524b83b8997a18f31e860f23fc3]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.47.1`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.47.1`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.30.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` The costObject for workerless shoots is now determined correctly. by @vicwicker [#103]
- `[OPERATOR]` Add garden_version to the garden_shoot_info metric by @Kumm-Kai [#101]
- `[OPERATOR]` Rename `garden_version` label to `gardener_version` on `garden_shoot_info` metric. by @rickardsjp [#102]

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.30.0`


</details>

<details>
<summary><b>Update gardener-metrics-exporter to <code>0.30.0</code></b></summary>

# [gardener/gardener-metrics-exporter]

## 🏃 Others

- `[OPERATOR]` The costObject for workerless shoots is now determined correctly. by @vicwicker [#103]
- `[OPERATOR]` Add garden_version to the garden_shoot_info metric by @Kumm-Kai [#101]
- `[OPERATOR]` Rename `garden_version` label to `gardener_version` on `garden_shoot_info` metric. by @rickardsjp [#102]

## Docker Images
- metrics-exporter: `europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.30.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.54.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🐛 Bug Fixes

- `[OPERATOR]` DNSRecord controller will not create ALIAS DNS records for AWS "us-gov" zones anymore. by @AndreasBurger [#930]
## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/external-dns-management from 0.18.4 to 0.18.5. by @AndreasBurger [#930]

## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.54.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.54.1`


</details>

<details>
<summary><b>Update cert-management to <code>0.14.1</code></b></summary>

# [gardener/cert-management]

## 🏃 Others

- `[OPERATOR]` Fix cluster configuration for new source controllers `istio-gateways-dns` and `k8s-gateways-dns`. by @MartinWeindel [#175]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.14.1`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.43.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.91.0 to 1.92.0. by @dependabot[bot] [#249]
- `[OPERATOR]` Bumps golang from 1.22.1 to 1.22.2. by @dependabot[bot] [#247]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.92.0 to 1.93.0. by @dependabot[bot] [#251]
- `[USER]` The defaults for the private key of new certificates have been changed from `RSA 2048bit` to `RSA 3072bit`. Existing certificates will make use of these new defaults when they are renewed. by @gardener-robot-ci-3 [#253]
# [gardener/cert-management]

## ✨ New Features

- `[USER]` The Istio resource `Gateway` can now be annotated with `cert.gardener.cloud/purpose=managed` to enable the automatic creation of `Certificate` resources for domain names extracted from hosts fields in this resource or related `VirtualServices` resources.  
  The `Gateway` and `HTTPRoute` resources from the Gateway API are supported in a similar way. by @MartinWeindel [gardener/cert-management#174]
## 🏃 Others

- `[OPERATOR]` Fix cluster configuration for new source controllers `istio-gateways-dns` and `k8s-gateways-dns`. by @MartinWeindel [gardener/cert-management#175]
- `[OPERATOR]` Support deployment specific default values for private key algorithm and size with the new command line options `--default-private-key-algorithm`, `--default-rsa-private-key-size`, `--default-ecdsa-private-key-size` by @MartinWeindel [gardener/cert-management#171]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.43.0`


</details>

<details>
<summary><b>Update dashboard to <code>1.74.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Ticket titles start with `[<projectName>/<shootName>]`, unless overridden by a Gardener administrator's configuration. by @petersutter [#1830]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.74.1`


</details>

<details>
<summary><b>Update dashboard to <code>1.74.1</code></b></summary>

# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Ticket titles start with `[<projectName>/<shootName>]`, unless overridden by a Gardener administrator's configuration. by @petersutter [#1830]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.74.1`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.52.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-alicloud` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#678]
## 🐛 Bug Fixes

- `[DEVELOPER]` `source-` prefix of `BackupEntry` name is being ignored when performing entry deletion by @Kostov6 [#698]
## 🏃 Others

- `[OPERATOR]` Update csi-plugin-alicloud to v1.30.1-242df8a-aliyun by @kevin-lacoo [#709]
- `[OPERATOR]` The code related to `machine-controller-manager` management has been cleaned up because `gardenlet` is responsible for it since `gardener/gardener@v1.83`. by @kevin-lacoo [#706]
- `[OPERATOR]` add os information as labels in machine class objects. by @tedteng [#703]
- `[DEVELOPER]` Add GetBucketInfo to OSS client interface. by @MartinWeindel [#694]
- `[DEPENDENCY]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.86.0`->`v1.91.1`  
  - k8s.io/* : v0.28.3 -> v0.29.3  
  - sigs.k8s.io/controller-runtime: v0.16.3-> v0.17.2 by @shafeeqes [#704]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update go -> v1.21.5 by @kon-angelo [gardener/terraformer#146]
- `[OPERATOR]` Update alpine -> v1.29.0 by @kon-angelo [gardener/terraformer#146]

## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.52.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.52.0`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.35.0</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[USER]` [csi-snapshotter] Enable prevent-volume-mode-conversion feature flag by default. Volume mode change can still be triggered with the respective annotations. You can read more in the [KEP](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/3141-prevent-volume-mode-conversion) by @kon-angelo [#719]
- `[OPERATOR]` `provider-gcp` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#677]
## 📰 Noteworthy

- `[USER]` Added support for the `EnableDynamicPortAllocation` flag and the related configuration of the related `MaxPortsPerVM` value on cloudNATs.  
  `IcmpIdleTimeoutSec`, `TcpEstablishedIdleTimeoutSec`, `TcpTimeWaitTimeoutSec`, `TcpTransitoryIdleTimeoutSec`, and `UdpIdleTimeoutSec` can now be configured on cloudNATs.  by @AndreasBurger [#706]
- `[USER]` `DisableGardenerServiceAccountCreation` feature gate has been promoted to beta and therefore is enabled by default. by @AndreasBurger [#711]
## ✨ New Features

- `[DEVELOPER]` Dependency update to `github.com/gardener/gardener@v1.90.4`. by @oliver-goetz [#714]
## 🐛 Bug Fixes

- `[DEVELOPER]` `source-` prefix of `BackupEntry` name is being ignored when performing entry deletion by @Kostov6 [#710]
## 🏃 Others

- `[OPERATOR]` [infrastructure] General stability flow reconciliation improvements. by @kon-angelo [#715]
- `[OPERATOR]` add os information as labels in machine class objects. by @tedteng [#689]
- `[OPERATOR]` NodeGroupAutoscalingOptions can now be specified per worker group via the worker through the field `worker.spec.pools.clusterAutoscaler` by @aaronfern [#733]
- `[USER]` An error text which better indicates the reason for the failure is displayed when a user tries to create a `SecretBinding` resource which references a `Secret` with a `serviceaccount.json` field in invalid json format. by @plkokanov [#723]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update go -> v1.21.5 by @kon-angelo [gardener/terraformer#146]
- `[OPERATOR]` Update alpine -> v1.29.0 by @kon-angelo [gardener/terraformer#146]

## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.35.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.35.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.42.3</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🏃 Others

- `[OPERATOR]` Fix a bug where the terraform-provider-azure would not properly delete shoot resource groups. The infrastructure-controller will issue an additional delete operation for the shoot's resource group. by @kon-angelo [#842]
- `[OPERATOR]` The extension will now try to delete empty resource groups on infrastructure creation after an unsuccessful terraform-apply operation.   
  A resource group may not be ready for some time after a successful create call returns. The azurerm terraform-provider on resource group does not respect that and the GET call may result in a NotFound error creating a deadlock. The extension will try to workaround this by deleting empty resource groups under the condition that this is a Create operation. by @AndreasBurger [#844]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.42.3`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.42.3`


</details>

<details>
<summary><b>Update cert-management to <code>0.14.2</code></b></summary>

# [gardener/cert-management]

## 🐛 Bug Fixes

- `[USER]` Fix regression for annotations on ingress resources: `dns.gardener.cloud/dnsnames` annotation must be ignored. by @MartinWeindel [#176]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.14.2`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.43.1</code></b></summary>

# [gardener/cert-management]

## 🐛 Bug Fixes

- `[USER]` Fix regression for annotations on ingress resources: `dns.gardener.cloud/dnsnames` annotation must be ignored. by @MartinWeindel [gardener/cert-management@1dafe3aaf6ac378167b28b96639676b0390ef550]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.43.1`


</details>

<details>
<summary><b>Update provider-azure to <code>1.43.0</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## ⚠️ Breaking Changes

- `[USER]` [csi-snapshotter] Enable prevent-volume-mode-conversion feature flag by default. Volume mode change can still be triggered with the respective annotations. You can read more in the [KEP](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/3141-prevent-volume-mode-conversion) by @hebelsan [#809]
- `[OPERATOR]` `provider-azure` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#769]
## 🏃 Others

- `[OPERATOR]` Update clients for dns, storage, compute, and msi to use the new Azure SDK libraries by @AndreasBurger [#833]
- `[OPERATOR]` add os information as labels in machine class objects. by @tedteng [#816]
- `[OPERATOR]` Deployment of the Remedy Controller can now additionally be controlled using the `DisableRemedyController` feature gate. by @AndreasBurger [#806]
- `[OPERATOR]` The Azure instance to connect to can now be configured in the CloudProfile and BackupBucket/BackupEntry. by @AndreasBurger [#815]
- `[OPERATOR]` NodeGroupAutoscalingOptions can now be specified per worker group via the worker through the field `worker.spec.pools.clusterAutoscaler` by @aaronfern [#831]
- `[DEPENDENCY]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.87.0`->`v1.91.1`  
  - k8s.io/* : v0.28.3 -> v0.29.3  
  - sigs.k8s.io/controller-runtime: v0.16.3-> v0.17.2  
  - sigs.k8s.io/controller-tools v0.13.0-> v0.14.0  by @hebelsan [#814]
# [gardener/machine-controller-manager-provider-azure]

## 🏃 Others

- `[USER]` Bugfix:- During VM deletion, the cascade delete option is set only for the resources part of VM creation.  by @rishabh-11 [gardener/machine-controller-manager-provider-azure#143]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.43.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.43.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.94.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix an issue in the etcd component which caused Shoot deletion to fail when the `VPAForETCD` feature gate was enabled by @voelzmo [#9703]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.94.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.94.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.94.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.94.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.94.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.94.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.94.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.94.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.94.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix an issue in the etcd component which caused Shoot deletion to fail when the `VPAForETCD` feature gate was enabled by @voelzmo [#9703]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.94.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.94.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.94.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.94.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.94.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.94.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.94.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.94.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.94.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix an issue in the etcd component which caused Shoot deletion to fail when the `VPAForETCD` feature gate was enabled by @voelzmo [#9703]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.94.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.94.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.94.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.94.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.94.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.94.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.94.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.94.1`


</details>
<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.21.0</code></b></summary>

# [gardener/network-problem-detector]

## 🏃 Others

- `[OPERATOR]` Drop support for obsolete PodSecurityPolicy by @MartinWeindel [gardener/network-problem-detector#60]
- `[OPERATOR]` Bumps golang from 1.22.0 to 1.22.1. by @dependabot[bot] [gardener/network-problem-detector#59]
- `[OPERATOR]` Bumps golang from 1.21.5 to 1.21.6. by @dependabot[bot] [gardener/network-problem-detector#56]
- `[OPERATOR]` Bumps golang from 1.22.1 to 1.22.2. by @dependabot[bot] [gardener/network-problem-detector#61]
- `[OPERATOR]` Bumps golang from 1.21.6 to 1.22.0. by @dependabot[bot] [gardener/network-problem-detector#57]
- `[OPERATOR]` Drop CPU limit for agents by @MartinWeindel [gardener/network-problem-detector#63]
# [gardener/gardener-extension-shoot-networking-problemdetector]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-networking-filter` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#113]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.88.0 to 1.89.0. by @dependabot[bot] [#123]
- `[OPERATOR]` Drop CPU limit for controller by @gardener-robot-ci-3 [#140]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.91.0 to 1.92.0. by @dependabot[bot] [#136]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.89.0 to 1.90.0. by @dependabot[bot] [#126]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.92.0 to 1.93.0. by @dependabot[bot] [#138]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.87.2 to 1.88.0. by @dependabot[bot] [#122]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.86.0 to 1.87.0. by @dependabot[bot] [#117]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.90.0 to 1.91.0. by @dependabot[bot] [#132]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.93.0 to 1.94.0. by @dependabot[bot] [#139]

## Docker Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.21.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.5.0</code></b></summary>

## ✨ New Features

* Allow setting controller image repository and tag independently by @j2L4e in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/66

## ℹ️ Other Changes
* 🤖 Update ghcr.io/stackitcloud/gardener-extension-shoot-flux Docker tag to v0.4.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/54
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.17.1 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/56
* 🤖 Update k8s and gardener packages (patch) by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/58
* 🤖 Update module golang.org/x/tools to v0.21.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/57
* 🤖 Update module github.com/onsi/gomega to v1.33.1 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/60
* 🤖 Update module github.com/fluxcd/source-controller/api to v1.2.5 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/63
* 🤖 Update module k8s.io/utils to v0.0.0-20240502163921-fe8a2dddb1d0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/65
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.17.3 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/64
* 🤖 Update k8s and gardener packages (patch) by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/61

## New Contributors
* @j2L4e made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/66

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.4.0...v0.5.0

</details>

<details>
<summary><b>Update provider-azure to <code>1.43.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🏃 Others

- `[OPERATOR]` Fix a bug causing nil pointer exceptions on the backupbucket reconciliation when no BackupBucket  providerConfig was provided. by @ialidzhikov [#856]

## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.43.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.43.1`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.14.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## ⚠️ Breaking Changes

- `[OPERATOR]` `runtime-gvisor` extension no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#110]
## 🏃 Others

- `[OPERATOR]` Fix CVE-2024-0727 by @marwinski [#124]

## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.14.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.14.0`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.52.1</code></b></summary>

no release notes available

## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.52.1`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.52.1`


</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.7</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.6...0.7.7

</details>

<details>
<summary><b>Update cloudprofiles to <code>0.7.8</code></b></summary>

**Full Changelog**: https://github.com/gardener-community/cloudprofiles/compare/0.7.7...0.7.8

</details>
