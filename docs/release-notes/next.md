---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.87.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9086]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9083]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.87.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9086]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9083]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.87.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[OPERATOR]` A regression is fixed that led to unnecessary and repetitive updates in the `status.constraints[].last{Update,Transition}Time` fields of the shoot. In larger Gardener installations, these superfluous updates could have resulted in significant excess network traffic, particularly between the `gardener-apiserver` and the `gardenlet`s in the seeds. by @istvanballok [#9086]
- `[USER]` Fixed an issue which prevented project admins and viewers from creating read-only kubeconfigs (via the `shoots/viewerkubeconfig` subresource). by @petersutter [#9083]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.17.1</code></b></summary>

# [gardener/external-dns-management]

## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.5 to 1.21.6. by @MartinWeindel [#353]
- `[USER]` Merge `dns.gardener.cloud/dnsnames` annotations from multiple DNSAnnotation objects. by @MartinWeindel [#352]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.17.1`


</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.44.0</code></b></summary>

# [gardener/external-dns-management]

## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.5 to 1.21.6. by @MartinWeindel [gardener/external-dns-management#353]
- `[USER]` Merge `dns.gardener.cloud/dnsnames` annotations from multiple DNSAnnotation objects. by @MartinWeindel [gardener/external-dns-management#352]
# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.86.0 to 1.87.0. by @dependabot[bot] [#286]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.44.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.44.0`


</details>

<details>
<summary><b>Update runtime-gvisor to <code>0.13.0</code></b></summary>

# [gardener/gardener-extension-runtime-gvisor]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#109]
## 🏃 Others

- `[OPERATOR]` Update runsc to version 20240115.0 by @danatsap [#113]

## Docker Images
- gardener-extension-runtime-gvisor-installation: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor-installation:v0.13.0`
- gardener-extension-runtime-gvisor: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/runtime-gvisor:v0.13.0`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.87.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9111]

## Docker Images
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.87.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9111]

## Docker Images
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.87.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The `worker.gardener.cloud/kubernetes-version` is now correctly maintained as label on `Node`s (instead of an annotation) when the `UseGardenerNodeAgent` feature gate is turned on. by @rfranzke [#9111]

## Docker Images
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.87.2`
- gardener: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.87.2`


</details>

<details>
<summary><b>Update shoot-oidc-service to <code>0.24.0</code></b></summary>

# [gardener/gardener-extension-shoot-oidc-service]

## ✨ New Features

- `[USER]` `shoot-oidc-service` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion).  by @acumino [#134]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug in the `shoot-oidc-service` controller that was causing the OIDC Webhook Authenticator CA secret for a shoot cluster to be recreated instead of restored during control plane migration has been fixed.   by @vpnachev [#137]
## 🏃 Others

- `[DEPENDENCY]` The extension now uses a debian 12 based base image. by @dimityrmirchev [#149]
- `[DEPENDENCY]` This extension is now built using go version `1.21.6`. by @dependabot[bot] [#146]
- `[DEPENDENCY]` The following dependencies were updated:  
   - github.com/gardener/gardener v1.81.1 -> v1.86.1  
   - k8s.io/* v0.28.2 -> v0.28.3  
   - sigs.k8s.io/controller-runtime v0.16.2 -> v0.16.3 by @dimityrmirchev [#143]
# [gardener/oidc-webhook-authenticator]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [gardener/oidc-webhook-authenticator#143]
## 🏃 Others

- `[DEPENDENCY]` OWA is now built using go version `1.21.5`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#145]
- `[DEPENDENCY]` OWA is now built using go version `1.21.6`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#146]
- `[DEPENDENCY]` Base image updated to `gcr.io/distroless/static-debian12:nonroot`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#145]
- `[DEPENDENCY]` The following dependencies were updated:  
   - k8s.io/* v0.27.7 -> v0.27.9 by @dimityrmirchev [gardener/oidc-webhook-authenticator#145]
- `[DEPENDENCY]` The following dependencies were updated:  
   - github.com/go-logr/logr v1.2.4 -> v1.3.0  
   - k8s.io/* v0.27.6 -> v0.27.6  
   - sigs.k8s.io/controller-runtime v0.15.2 -> v0.15.3 by @dimityrmirchev [gardener/oidc-webhook-authenticator#141]
- `[DEPENDENCY]` OWA is now built using go version `1.21.4`. by @dimityrmirchev [gardener/oidc-webhook-authenticator#141]

## Docker Images
- gardener-extension-shoot-oidc-service-linux-amd64: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-oidc-service:v0.24.0`


</details>

<details>
<summary><b>Update networking-calico to <code>1.38.0</code></b></summary>

# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#321]
- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#327]
## ✨ New Features

- `[DEVELOPER]` add ipv6 support for this extension by @nschad [#301]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#327]
- `[OPERATOR]` Update calico to `v3.26.4`. by @DockToFuture [#320]
- `[OPERATOR]` Determine iptables backend in container add-snat-rule-to-upstream-dns. by @axel7born [#324]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#327]
- `[OPERATOR]` Update calico to `v3.27.0`. by @DockToFuture [#329]

## Docker Images
- gardener-extension-admission-calico-linux-amd64: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.38.0`
- gardener-extension-networking-calico-linux-amd64: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.38.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.32.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#234]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#231]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixes an error that occurs when running with iptables-nft. by @axel7born [#229]
- `[OPERATOR]` The `actuator.Delete` doesn't wait for ManagedResources to get deleted in case of `ForceDelete`. by @shafeeqes [#227]
- `[OPERATOR]` An issue in the charts missing versions for some resources is now fixed. by @shafeeqes [#225]
## 🏃 Others

- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#234]
- `[OPERATOR]` Update cilium to `v1.14.6` by @DockToFuture [#239]
- `[OPERATOR]` Reconciliation of hibernated cilium clusters now works again. by @ScheererJ [#226]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#234]
- `[OPERATOR]` Update cilium to `v1.14.5`. by @DockToFuture [#235]
- `[OPERATOR]` Update cilium to `v1.14.4`. by @DockToFuture [#230]

## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.32.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.32.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.32.1</code></b></summary>

no release notes available

## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.32.1`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.32.1`


</details>

<details>
<summary><b>Update networking-calico to <code>1.38.1</code></b></summary>

no release notes available

## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.38.1`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.38.1`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.32.2</code></b></summary>

no release notes available

## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.32.2`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.32.2`


</details>
