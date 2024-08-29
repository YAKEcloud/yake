---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-hcloud to <code>0.6.30</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.30

</details>

<details>
<summary><b>Update provider-openstack to <code>1.41.2</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🏃 Others

- `[OPERATOR]` Fix an issue with share network reconciliation not calculating number of existing share networks correctly. by @AndreasBurger [#827]

## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.41.2`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.41.2`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.44.2</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` The memory limit from the `cert-controller-manager` Deployment is now removed. by @ialidzhikov [#287]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.44.2`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.5.2</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused the `-a exit,always -F arch=b64 -S mount_setattr -F auid!=-1 -F key=privileged_special` audit rule to not get correctly applied. by @plkokanov [#151]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.5.2`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.5.2`


</details>

<details>
<summary><b>Update provider-alicloud to <code>1.53.0</code></b></summary>

# [gardener/gardener-extension-provider-alicloud]

## ✨ New Features

- `[OPERATOR]` This extension now makes use of the new `.spec.pools[].userDataSecretRef` field to get to the worker pool user data. by @rfranzke [#727]
- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#734]
- `[USER]` The provider-alicloud extension does now support shoot clusters with Kubernetes version 1.30. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md) before upgrading to 1.30.  by @shafeeqes [#722]
## 🏃 Others

- `[OPERATOR]` The `controlplaneexposure.alicloud.extensions.gardener.cloud` webhook does no longer mutate Services/Deployments. Previously the webhook was called for Services/Deployments mutations and was not mutating anything. by @ialidzhikov [#725]
- `[OPERATOR]` This extension is now using the new way of providing monitoring configuration (ref [GEP-19](https://github.com/gardener/gardener/blob/master/docs/proposals/19-migrating-observability-stack-to-operators.md)) in case a shoot cluster's Prometheus has been migrated to management via `prometheus-operator`. by @rfranzke [#720]
- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-alicloud` Helm chart. by @timuthy [#732]
- `[OPERATOR]` Inserts architecture from worker to the machine class by @sssash18 [#735]
- `[OPERATOR]` NodeGroupAutoscalingOptions can now be specified per worker group via the worker through the field `worker.spec.pools.clusterAutoscaler` by @aaronfern [#715]
# [gardener/machine-controller-manager]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @ccwienk [gardener/machine-controller-manager#878]
- `[DEVELOPER]`  New provider method Driver.InitializeMachine added for Post-Creation VM Instance Initialization steps. by @elankath [gardener/machine-controller-manager#898]
## 🐛 Bug Fixes

- `[DEVELOPER]` MCM restart happens properly in integration tests now. This fix will get activated, once this version is vendored in your mcm-provider by @sssash18 [gardener/machine-controller-manager#879]
- `[OPERATOR]` Fix for edge case of Node object deletion missed during machine termination. by @elankath [gardener/machine-controller-manager#887]
## 🏃 Others

- `[OPERATOR]` machine controller won't reconcile machine on non-spec update events by @himanshu-kun [gardener/machine-controller-manager#877]
- `[OPERATOR]` Updated k8s dependencies to `v0.29.3` by @rishabh-11 [gardener/machine-controller-manager#907]
- `[OPERATOR]` fixed IT for seed with k8s >= 1.27 as control cluster  by @piyuagr [gardener/machine-controller-manager#869]
- `[OPERATOR]` Removed vendor directory by @rishabh-11 [gardener/machine-controller-manager#903]
- `[OPERATOR]` Architecture field added in the nodetemplate. This will allow CA to pickup architecture from machine class and schedule pods on relevant arch nodes. by @sssash18 [gardener/machine-controller-manager#894]
- `[DEVELOPER]` go-git now removed from dependencies due to CVE's. by @elankath [gardener/machine-controller-manager#896]
- `[DEVELOPER]` Bump `k8s.io/*` deps to `v0.28.2` by @afritzler [gardener/machine-controller-manager#858]
## 📖 Documentation

- `[DEVELOPER]` Phase transition diagram for a machine object is added to FAQs by @himanshu-kun [gardener/machine-controller-manager#886]
# [gardener/machine-controller-manager-provider-alicloud]

## 🏃 Others

- `[DEVELOPER]` Removed vendor directory by @rishabh-11 [gardener/machine-controller-manager-provider-alicloud#74]

## Helm Charts
- admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-alicloud:v1.53.0`
- provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-alicloud:v1.53.0`
## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.53.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.53.0`


</details>

<details>
<summary><b>Update provider-aws to <code>1.57.0</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#1012]
## 🐛 Bug Fixes

- `[OPERATOR]` Removed unnecessary preStop hook from `node-driver-registrar` in `csi-driver-node`, as socket removal is now handled internally by `node-driver-registrar`, resolving distroless image error. by @AndreasBurger [#992]
## 🏃 Others

- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-aws` Helm chart. by @timuthy [#994]
- `[OPERATOR]` Starting with gardenlet >= v1.98.0, use controlplane webhook object selector to limit mutator calls. by @LucaBernstein [#989]
- `[OPERATOR]` Update the VPA CRD used for testing locally by @kon-angelo [#1019]
- `[OPERATOR]` Inserts `architecture` from worker to the machine class by @sssash18 [#853]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.57.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.57.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.57.0`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.57.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.57.0`


</details>

<details>
<summary><b>Update provider-azure to <code>1.47.1</code></b></summary>

# [gardener/gardener-extension-provider-azure]

## 🏃 Others

- `[OPERATOR]` The storage domain to use for backup buckets is now inferred from the buckets' region if no explicit config is given by @AndreasBurger [#947]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.47.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.47.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.47.1`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.47.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.47.1`


</details>

<details>
<summary><b>Update provider-gcp to <code>1.38.0</code></b></summary>

# [gardener/gardener-extension-provider-gcp]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#805]
## 🐛 Bug Fixes

- `[OPERATOR]` Removed unnecessary preStop hook from `node-driver-registrar` in `csi-driver-node`, as socket removal is now handled internally by `node-driver-registrar`, resolving distroless image error. by @sujeet01 [#792]
- `[USER]` Allow configuring iops and throughput of hyperdisk-balanced disks by @hebelsan [#793]
## 🏃 Others

- `[OPERATOR]` Inserts architecture from worker to the machine class by @sssash18 [#809]
- `[OPERATOR]` Starting with gardenlet >= v1.98.0, use controlplane webhook object selector to limit mutator calls. by @LucaBernstein [#789]
- `[OPERATOR]` Update the VPA CRD used for testing locally by @hebelsan [#812]
- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-gcp` Helm chart. by @timuthy [#794]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.38.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.38.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.38.0`
## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.38.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.38.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.51.0</code></b></summary>

# [gardener/external-dns-management]

## 🏃 Others

- `[OPERATOR]` Lookup processor: sort lookup results and retry on timeout by @MartinWeindel [gardener/external-dns-management#382]
# [gardener/gardener-extension-shoot-dns-service]

## ✨ New Features

- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#359]
## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.99.0 to 1.100.0. by @dependabot[bot] [#360]

## Helm Charts
- admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service:v1.51.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.51.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.51.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.51.0`


</details>

<details>
<summary><b>Update shoot-flux to <code>0.6.1</code></b></summary>

## What's Changed
* :bug: Fix reconcile order for new Shoots by @maboehm in https://github.com/stackitcloud/gardener-extension-shoot-flux/pull/84


**Full Changelog**: https://github.com/stackitcloud/gardener-extension-shoot-flux/compare/v0.6.0...v0.6.1

</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.27.0</code></b></summary>

# [gardener/gardener-extension-shoot-oidc-service]

## ✨ New Features

- `[OPERATOR]` The extension mutating webhook now uses object selector to reduce the number of calls. by @dimityrmirchev [#224]
- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#222]
## 🏃 Others

- `[DEPENDENCY]` The extension is now built using go version 1.22.5. by @dimityrmirchev [#220]
# [gardener/oidc-webhook-authenticator]

## 🏃 Others

- `[DEVELOPER]` The following dependencies have been updated:  
  - github.com/coreos/go-oidc/v3 v3.1.0 -> v3.10.0  
  - golang.org/x/time v0.3.0 -> v0.5.0  
  - k8s.io/* v0.27.9 -> v0.30.1  
  - sigs.k8s.io/controller-runtime v0.15.3 -> v0.18.4  
  - golang.org/x/crypto v0.21.0 -> v0.24.0  
  - golang.org/x/net v0.23.0 -> v0.26.0 by @vpnachev [gardener/oidc-webhook-authenticator#157]
- `[DEPENDENCY]` OWA is now built using go version 1.22.5. by @dimityrmirchev [gardener/oidc-webhook-authenticator#158]

## Helm Charts
- shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-oidc-service:v0.27.0`
## Docker Images
- gardener-extension-shoot-oidc-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.27.0`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.52.0</code></b></summary>

# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Conditional deploy of CRDs on shoot. by @MartinWeindel [#369]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.100.0 to 1.101.0. by @dependabot[bot] [#365]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.101.0 to 1.102.0. by @dependabot[bot] [#372]
# [gardener/external-dns-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Drop support for custom resources `dnslock.dns.gardener.cloud` and `remoteaccesscertificates.dns.gardener.cloud`.  
  As these experimental features have no been used in Gardener, it should not be relevant in most cases. by @MartinWeindel [gardener/external-dns-management#381]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.22.6 to 1.23.0. by @dependabot[bot] [gardener/external-dns-management#384]
- `[OPERATOR]` Bumps golang from 1.22.5 to 1.22.6. by @dependabot[bot] [gardener/external-dns-management#383]
- `[OPERATOR]` The dependency controller-manager-library has been updated to include the new flag `--<cluster>.conditional-deploy-crds` by @MartinWeindel [gardener/external-dns-management#385]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.52.0`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.52.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.52.0`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.52.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.52.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.21.1</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix NPE if DNSEntry contains invalid domain name by @MartinWeindel [#387]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.21.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.52.1</code></b></summary>

# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix NPE if `DNSEntry` contains invalid domain name by @MartinWeindel [gardener/external-dns-management@7a7b7d6c195a692bc80f91c59b4c93b315252f27]

## Helm Charts
- admission-shoot-dns-service-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-application:v1.52.1`
- admission-shoot-dns-service-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-shoot-dns-service-runtime:v1.52.1`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.52.1`
## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.52.1`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.52.1`


</details>

<details>
<summary><b>Update provider-aws to <code>1.57.1</code></b></summary>

# [gardener/gardener-extension-provider-aws]

## 🏃 Others

- `[OPERATOR]` Fix an issue where the infrastructure state was not properly transformed to the provider status.  by @kon-angelo [#1042]
- `[OPERATOR]` Fix an issue where terraformer artifacts would not be deleted during the control-plane-migration `migrate` phase. by @kon-angelo [#1043]
- `[OPERATOR]` Correctly register infrastructure webhook with the controllerruntime manager by @kon-angelo [#1042]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.57.1`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.57.1`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.57.1`
## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.57.1`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.57.1`


</details>
