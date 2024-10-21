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

<details>
<summary><b>Update shoot-flux to <code>0.8.0</code></b></summary>

## What's Changed
* Add extraSecrets option to create additional Secrets by @maboehm in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/94
* 🤖 Update k8s.io/utils digest to 49e7df5 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/90
* 🤖 Update module github.com/ironcore-dev/vgopath to v0.1.6 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/91
* 🤖 Update module github.com/onsi/ginkgo/v2 to v2.20.2 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/96
* 🤖 Update module github.com/onsi/gomega to v1.34.2 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/92
* 🤖 Update module golang.org/x/tools to v0.26.0 by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/86
* 🤖 Update k8s and gardener packages (patch) by @renovate in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/95
* bump Gardener to `v1.99` by @Duciwuci in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/97

## New Contributors
* @Duciwuci made their first contribution in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/97

**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.7.0...v0.8.0

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.105.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10631]
- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10674]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.105.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10631]
- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10674]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.105.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` An issue was fixed that cause `gardener-operator` to deploy the `gardenlet` into the runtime cluster instead of another intended remote cluster. by @timuthy [#10631]
- `[OPERATOR]` Fix a bug where the shoot care controller cannot reconcile shoots with `spec.maintenance.confineSpecUpdateRollout=true` and migrated between `secretBindingName` and `credentialsBindingName` until the shoot is reconciled.. by @vpnachev [#10674]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.105.1`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.105.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.105.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.105.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.105.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.105.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.105.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.105.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.105.1`


</details>

<details>
<summary><b>Update cert-management to <code>0.16.0</code></b></summary>

# [gardener/cert-management]

## 📰 Noteworthy

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [#313]
## ✨ New Features

- `[USER]` Istio gateways: Allow to specify namespace for TLS secret by annotation `cert.gardener.cloud/secret-namespace`. by @MartinWeindel [#316]
- `[OPERATOR]` The Helm chart is published as OCI artifacts now. by @rfranzke [#281]
## 🐛 Bug Fixes

- `[USER]` Creating certificates with a given csr referencing a ca issuer do not throw a nil pointer exception anymore  by @RaphaelVogel [#234]
## 🏃 Others

- `[DEVELOPER]` Refactoring: introduce issuer key interface by @MartinWeindel [#240]
- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [#253]
- `[OPERATOR]` Add local Kind setup with knot-dns,peeble, and dns-controller-manager by @MartinWeindel [#181]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.16.0`
## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.16.0`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.45.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#282]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.99.0 to 1.100.0. by @dependabot[bot] [#283]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.100.0 to 1.101.0. by @dependabot[bot] [#290]
- `[OPERATOR]` Bumps golang from 1.23.0 to 1.23.1. by @dependabot[bot] [#297]
- `[OPERATOR]` Bumps golang from 1.22.3 to 1.22.4. by @dependabot[bot] [#267]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.96.1 to 1.97.0. by @dependabot[bot] [#271]
- `[OPERATOR]` Bumps golang from 1.22.4 to 1.22.5. by @dependabot[bot] [#276]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.101.0 to 1.102.0. by @dependabot[bot] [#294]
- `[OPERATOR]` Bumps golang from 1.22.6 to 1.23.0. by @dependabot[bot] [#292]
- `[OPERATOR]` Bumps golang from 1.23.1 to 1.23.2. by @dependabot[bot] [#299]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.103.0 to 1.105.0. by @dependabot[bot] [#301]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.97.0 to 1.98.0. by @dependabot[bot] [#274]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.98.0 to 1.99.0. by @dependabot[bot] [#278]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.95.0 to 1.96.1. by @dependabot[bot] [#266]
- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [#302]
# [gardener/cert-management]

## 📰 Noteworthy

- `[OPERATOR]` `gosec` was introduced for Static Application Security Testing (SAST). by @MartinWeindel [gardener/cert-management#313]
## ✨ New Features

- `[OPERATOR]` The Helm chart is published as OCI artifacts now. by @rfranzke [gardener/cert-management#281]
- `[OPERATOR]` Use `dnsrecords.extensions.gardener.cloud` API as an alternative to `dnsentries.dns.gardener.cloud` for DNS challenges. by @MartinWeindel [gardener/cert-management#177]
- `[USER]` Istio gateways: Allow to specify namespace for TLS secret by annotation `cert.gardener.cloud/secret-namespace`. by @MartinWeindel [gardener/cert-management#316]
## 🐛 Bug Fixes

- `[USER]` Creating certificates with a given csr referencing a ca issuer do not throw a nil pointer exception anymore  by @RaphaelVogel [gardener/cert-management#234]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [gardener/cert-management#253]
- `[OPERATOR]` Add local Kind setup with knot-dns,peeble, and dns-controller-manager by @MartinWeindel [gardener/cert-management#181]
- `[DEVELOPER]` Refactoring: introduce issuer key interface by @MartinWeindel [gardener/cert-management#240]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.45.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.45.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.106.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` `kubeletCSRApprover` controller in `gardener-resource-manager` Helm chart has been renamed to `csrApprover`. by @oliver-goetz [#10549]
- `[OPERATOR]` The `HVPA` and `HVPAForShootedSeed` feature gates have been deprecated and locked to false. Disable the `HVPA` and `HVPAForShootedSeed` feature gates if you have them enabled before upgrading to this version of Gardener. by @plkokanov [#10659]
## 📰 Noteworthy

- `[USER]` For Kubernetes 1.31+ Shoot clusters, the kubelet and containerd cgroup driver is set to `systemd`. Previously, the used cgroup driver was `cgroupfs`. Find more details in the [cgroup driver section](https://github.com/gardener/gardener/blob/v1.105.0/docs/extensions/operatingsystemconfig.md#cgroup-driver). by @ialidzhikov [#10472]
- `[OPERATOR]` The gardener operator chart (`charts/gardener/operator`) does no longer enable the `HVPA` feature gate in its default `values.yaml`. by @ialidzhikov [#10566]
## ✨ New Features

- `[DEVELOPER]` Allow gosec to be consumed from gardener/gardener by @ScheererJ [#10642]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.31. Extension developers have to prepare individual extensions as well to work with 1.31. by @ialidzhikov [#10472]
- `[OPERATOR]` Adds `CloudProfile` validation for the recently introduced `.spec.bastion` section. by @hebelsan [#10318]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.31. To allow creation/update of 1.31 clusters you will have to update the version of your provider extension(s) to a version that supports 1.31 as well. Please consult the respective releases and notes in the provider extension's repository. by @ialidzhikov [#10472]
- `[OPERATOR]` Added an alert for the `Garden` resource's conditions, along with a dashboard that also displays the resource's last operation. by @rickardsjp [#10562]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixes an issue with the network metrics relabeling config that caused the `Node Details` dashboard to not display data for AWS nodes. by @rickardsjp [#10625]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.3`. by @gardener-ci-robot [#10626]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.28.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.28.0) by @gardener-ci-robot [#10640]
- `[DEPENDENCY]` The `quay.io/cortexproject/cortex` image has been updated to `v1.18.1`. by @gardener-ci-robot [#10657]
- `[DEPENDENCY]` The `registry.k8s.io/node-problem-detector/node-problem-detector` image has been updated to `v0.8.20`. by @gardener-ci-robot [#10661]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.0) by @gardener-ci-robot [#10656]
- `[OPERATOR]` HA-VPN works if seed and shoot have different IPFamilies. by @DockToFuture [#10622]
- `[OPERATOR]` Update istio to version 1.23.2 by @axel7born [#10558]
- `[OPERATOR]` [NewVPN] Enable IPv6 for HA if needed. by @MartinWeindel [#10641]
- `[OPERATOR]` Gardener generated certificates are valid 1 minute before issuance to handle some amount of clock skew. by @ScheererJ [#10603]
- `[OPERATOR]` Metrics for `vpa-recommender`s are now collected in separate prometheus instances depending on where the `vpa-recommender` pods are deployed. Metrics for the `vpa-recommender` in the `garden` namespace are collected in `prometheus-seed`. Metrics for the `vpa-recommender` in the shoot control plane namespaces are collected in the corresponding `prometheus-shoot`. Additionally, the `VPA Recommender` plutono dashboard is separately deployed for seeds in the `garden` namespace and shoots in their control plane namespaces. by @plkokanov [#10517]
- `[OPERATOR]` Clean up migration code from the monitoring component by @vicwicker [#10597]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.8` -> `v0.31.0`  
  - `sigs.k8s.io/controller-runtime`: `v0.17.5` -> `v0.19.0` by @ary1992 [#10459]
- `[DEVELOPER]` The HVPA features gates (`HVPA` and `HVPAForShootedSeed`) are no longer enabled in local setups. by @ialidzhikov [#10566]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.106.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` `kubeletCSRApprover` controller in `gardener-resource-manager` Helm chart has been renamed to `csrApprover`. by @oliver-goetz [#10549]
- `[OPERATOR]` The `HVPA` and `HVPAForShootedSeed` feature gates have been deprecated and locked to false. Disable the `HVPA` and `HVPAForShootedSeed` feature gates if you have them enabled before upgrading to this version of Gardener. by @plkokanov [#10659]
## 📰 Noteworthy

- `[USER]` For Kubernetes 1.31+ Shoot clusters, the kubelet and containerd cgroup driver is set to `systemd`. Previously, the used cgroup driver was `cgroupfs`. Find more details in the [cgroup driver section](https://github.com/gardener/gardener/blob/v1.105.0/docs/extensions/operatingsystemconfig.md#cgroup-driver). by @ialidzhikov [#10472]
- `[OPERATOR]` The gardener operator chart (`charts/gardener/operator`) does no longer enable the `HVPA` feature gate in its default `values.yaml`. by @ialidzhikov [#10566]
## ✨ New Features

- `[DEVELOPER]` Allow gosec to be consumed from gardener/gardener by @ScheererJ [#10642]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.31. Extension developers have to prepare individual extensions as well to work with 1.31. by @ialidzhikov [#10472]
- `[OPERATOR]` Adds `CloudProfile` validation for the recently introduced `.spec.bastion` section. by @hebelsan [#10318]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.31. To allow creation/update of 1.31 clusters you will have to update the version of your provider extension(s) to a version that supports 1.31 as well. Please consult the respective releases and notes in the provider extension's repository. by @ialidzhikov [#10472]
- `[OPERATOR]` Added an alert for the `Garden` resource's conditions, along with a dashboard that also displays the resource's last operation. by @rickardsjp [#10562]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixes an issue with the network metrics relabeling config that caused the `Node Details` dashboard to not display data for AWS nodes. by @rickardsjp [#10625]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.3`. by @gardener-ci-robot [#10626]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.28.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.28.0) by @gardener-ci-robot [#10640]
- `[DEPENDENCY]` The `quay.io/cortexproject/cortex` image has been updated to `v1.18.1`. by @gardener-ci-robot [#10657]
- `[DEPENDENCY]` The `registry.k8s.io/node-problem-detector/node-problem-detector` image has been updated to `v0.8.20`. by @gardener-ci-robot [#10661]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.0) by @gardener-ci-robot [#10656]
- `[OPERATOR]` HA-VPN works if seed and shoot have different IPFamilies. by @DockToFuture [#10622]
- `[OPERATOR]` Update istio to version 1.23.2 by @axel7born [#10558]
- `[OPERATOR]` [NewVPN] Enable IPv6 for HA if needed. by @MartinWeindel [#10641]
- `[OPERATOR]` Gardener generated certificates are valid 1 minute before issuance to handle some amount of clock skew. by @ScheererJ [#10603]
- `[OPERATOR]` Metrics for `vpa-recommender`s are now collected in separate prometheus instances depending on where the `vpa-recommender` pods are deployed. Metrics for the `vpa-recommender` in the `garden` namespace are collected in `prometheus-seed`. Metrics for the `vpa-recommender` in the shoot control plane namespaces are collected in the corresponding `prometheus-shoot`. Additionally, the `VPA Recommender` plutono dashboard is separately deployed for seeds in the `garden` namespace and shoots in their control plane namespaces. by @plkokanov [#10517]
- `[OPERATOR]` Clean up migration code from the monitoring component by @vicwicker [#10597]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.8` -> `v0.31.0`  
  - `sigs.k8s.io/controller-runtime`: `v0.17.5` -> `v0.19.0` by @ary1992 [#10459]
- `[DEVELOPER]` The HVPA features gates (`HVPA` and `HVPAForShootedSeed`) are no longer enabled in local setups. by @ialidzhikov [#10566]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.0`


</details>

<details>
<summary><b>Update gardenlet to <code>1.106.0</code></b></summary>

# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` `kubeletCSRApprover` controller in `gardener-resource-manager` Helm chart has been renamed to `csrApprover`. by @oliver-goetz [#10549]
- `[OPERATOR]` The `HVPA` and `HVPAForShootedSeed` feature gates have been deprecated and locked to false. Disable the `HVPA` and `HVPAForShootedSeed` feature gates if you have them enabled before upgrading to this version of Gardener. by @plkokanov [#10659]
## 📰 Noteworthy

- `[USER]` For Kubernetes 1.31+ Shoot clusters, the kubelet and containerd cgroup driver is set to `systemd`. Previously, the used cgroup driver was `cgroupfs`. Find more details in the [cgroup driver section](https://github.com/gardener/gardener/blob/v1.105.0/docs/extensions/operatingsystemconfig.md#cgroup-driver). by @ialidzhikov [#10472]
- `[OPERATOR]` The gardener operator chart (`charts/gardener/operator`) does no longer enable the `HVPA` feature gate in its default `values.yaml`. by @ialidzhikov [#10566]
## ✨ New Features

- `[DEVELOPER]` Allow gosec to be consumed from gardener/gardener by @ScheererJ [#10642]
- `[DEVELOPER]` Gardener can now support clusters with Kubernetes version 1.31. Extension developers have to prepare individual extensions as well to work with 1.31. by @ialidzhikov [#10472]
- `[OPERATOR]` Adds `CloudProfile` validation for the recently introduced `.spec.bastion` section. by @hebelsan [#10318]
- `[OPERATOR]` Gardener can now support clusters with Kubernetes version 1.31. To allow creation/update of 1.31 clusters you will have to update the version of your provider extension(s) to a version that supports 1.31 as well. Please consult the respective releases and notes in the provider extension's repository. by @ialidzhikov [#10472]
- `[OPERATOR]` Added an alert for the `Garden` resource's conditions, along with a dashboard that also displays the resource's last operation. by @rickardsjp [#10562]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixes an issue with the network metrics relabeling config that caused the `Node Details` dashboard to not display data for AWS nodes. by @rickardsjp [#10625]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.11.3`. by @gardener-ci-robot [#10626]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.28.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.28.0) by @gardener-ci-robot [#10640]
- `[DEPENDENCY]` The `quay.io/cortexproject/cortex` image has been updated to `v1.18.1`. by @gardener-ci-robot [#10657]
- `[DEPENDENCY]` The `registry.k8s.io/node-problem-detector/node-problem-detector` image has been updated to `v0.8.20`. by @gardener-ci-robot [#10661]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.0) by @gardener-ci-robot [#10656]
- `[OPERATOR]` HA-VPN works if seed and shoot have different IPFamilies. by @DockToFuture [#10622]
- `[OPERATOR]` Update istio to version 1.23.2 by @axel7born [#10558]
- `[OPERATOR]` [NewVPN] Enable IPv6 for HA if needed. by @MartinWeindel [#10641]
- `[OPERATOR]` Gardener generated certificates are valid 1 minute before issuance to handle some amount of clock skew. by @ScheererJ [#10603]
- `[OPERATOR]` Metrics for `vpa-recommender`s are now collected in separate prometheus instances depending on where the `vpa-recommender` pods are deployed. Metrics for the `vpa-recommender` in the `garden` namespace are collected in `prometheus-seed`. Metrics for the `vpa-recommender` in the shoot control plane namespaces are collected in the corresponding `prometheus-shoot`. Additionally, the `VPA Recommender` plutono dashboard is separately deployed for seeds in the `garden` namespace and shoots in their control plane namespaces. by @plkokanov [#10517]
- `[OPERATOR]` Clean up migration code from the monitoring component by @vicwicker [#10597]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.8` -> `v0.31.0`  
  - `sigs.k8s.io/controller-runtime`: `v0.17.5` -> `v0.19.0` by @ary1992 [#10459]
- `[DEVELOPER]` The HVPA features gates (`HVPA` and `HVPAForShootedSeed`) are no longer enabled in local setups. by @ialidzhikov [#10566]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.106.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.106.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.106.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.106.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.106.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.106.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.106.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.106.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.106.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.106.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.106.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.106.0`


</details>
