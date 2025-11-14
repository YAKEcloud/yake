---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-azure to <code>1.56.1</code></b></summary>

# [github.com/gardener/gardener-extension-provider-azure:v1.56.1]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix bug in Azure client failing to make use of Workload Identity in Azure China by downgrading the module `github.com/AzureAD/microsoft-authentication-library-for-go` to version `v1.4.2`. by @vpnachev [[#1358](https://github.com/gardener/gardener-extension-provider-azure/pull/1358)]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.56.1`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.56.1`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.56.1`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.56.1`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.56.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.131.2</code></b></summary>

# [github.com/gardener/gardener:v1.131.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Gardenlet's backupbucket and backupentry controllers are now unsetting all unknown labels and annotations on the extension secrets in the seed cluster, this fixes a bug that occurs after migration from `WorkloadIdentity` to `Secret` credentials the workload identity annotations and labels were kept in the secrets causing other controllers to keep trying to use the WorkloadIdentity credentials. by @vpnachev [[#13364](https://github.com/gardener/gardener/pull/13364)]
- `[DEVELOPER]` Backupentry generic actuator is fixed to clean all unknown annotations and labels from the `etcd-backup` secret, this change fixes issues when the credentials are switched between static secret and workload identity. by @vpnachev [[#13364](https://github.com/gardener/gardener/pull/13364)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.131.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.131.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.131.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.131.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.131.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.131.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.131.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.131.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.131.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.131.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.131.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.131.2`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.131.2</code></b></summary>

# [github.com/gardener/gardener:v1.131.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Gardenlet's backupbucket and backupentry controllers are now unsetting all unknown labels and annotations on the extension secrets in the seed cluster, this fixes a bug that occurs after migration from `WorkloadIdentity` to `Secret` credentials the workload identity annotations and labels were kept in the secrets causing other controllers to keep trying to use the WorkloadIdentity credentials. by @vpnachev [[#13364](https://github.com/gardener/gardener/pull/13364)]
- `[DEVELOPER]` Backupentry generic actuator is fixed to clean all unknown annotations and labels from the `etcd-backup` secret, this change fixes issues when the credentials are switched between static secret and workload identity. by @vpnachev [[#13364](https://github.com/gardener/gardener/pull/13364)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.131.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.131.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.131.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.131.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.131.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.131.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.131.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.131.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.131.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.131.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.131.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.131.2`


</details>

<details>
<summary><b>Update gardenlet to <code>1.131.2</code></b></summary>

# [github.com/gardener/gardener:v1.131.2]

## 🐛 Bug Fixes
- `[OPERATOR]` Gardenlet's backupbucket and backupentry controllers are now unsetting all unknown labels and annotations on the extension secrets in the seed cluster, this fixes a bug that occurs after migration from `WorkloadIdentity` to `Secret` credentials the workload identity annotations and labels were kept in the secrets causing other controllers to keep trying to use the WorkloadIdentity credentials. by @vpnachev [[#13364](https://github.com/gardener/gardener/pull/13364)]
- `[DEVELOPER]` Backupentry generic actuator is fixed to clean all unknown annotations and labels from the `etcd-backup` secret, this change fixes issues when the credentials are switched between static secret and workload identity. by @vpnachev [[#13364](https://github.com/gardener/gardener/pull/13364)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.131.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.131.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.131.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.131.2`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.131.2`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.131.2`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.131.2`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.131.2`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.131.2`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.131.2`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.131.2`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.131.2`


</details>

<details>
<summary><b>Update image-rewriter to <code>0.6.0</code></b></summary>

# [github.com/gardener/gardener-extension-image-rewriter:v0.6.0]

## ✨ New Features
- `[OPERATOR]` The `regions` fields for image rewrites and containerd host configurations is now optional.  
  If regions is not set, only the shoot provider is used to select the mirror, enabling global, region-independent endpoints. by @timuthy [[#34](https://github.com/gardener/gardener-extension-image-rewriter/pull/34)]

## 🏃 Others
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#31](https://github.com/gardener/gardener-extension-image-rewriter/pull/31)]

## Helm Charts
- image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/image-rewriter:v0.6.0`
## Container (OCI) Images
- gardener-extension-image-rewriter: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/image-rewriter:v0.6.0`


</details>

<details>
<summary><b>Update registry-cache to <code>0.18.0</code></b></summary>

# [github.com/gardener/gardener-extension-registry-cache:v0.18.0]

## ⚠️ Breaking Changes
- `[USER]` Registry cache Pods are no longer reachable using Pod DNS - `$(podname).$(governing service domain)`, for example `registry-docker-io-0.registry-docker-io.kube-system.svc.cluster.local`. by @dimitar-kostadinov [[#455](https://github.com/gardener/gardener-extension-registry-cache/pull/455)]

## ✨ New Features
- `[USER]` The registry-cache service name can now be customized with the `serviceNameSuffix` option. by @Wieneo [[#425](https://github.com/gardener/gardener-extension-registry-cache/pull/425)]
- `[USER]` The registry-cache extension does now support shoot clusters with Kubernetes version 1.33. by @ialidzhikov [[#437](https://github.com/gardener/gardener-extension-registry-cache/pull/437)]

## 🐛 Bug Fixes
- `[OPERATOR]` The `Endpoints` role in monitoring `ScrapeConfig` has been fixed. by @oliver-goetz [[#459](https://github.com/gardener/gardener-extension-registry-cache/pull/459)]

## 🏃 Others
- `[DEVELOPER]` The golang version is updated to 1.25. by @dependabot[bot] [[#456](https://github.com/gardener/gardener-extension-registry-cache/pull/456)]
- `[OPERATOR]` The `spec.serviceName` field has been removed from the registry cache StatefulSet. All registry cache StatefulSets will be recreated once due to this change. by @dimitar-kostadinov [[#455](https://github.com/gardener/gardener-extension-registry-cache/pull/455)]
- `[DEVELOPER]` The Concourse CI/CD pipeline has been migrated to GitHub Actions. by @ccwienk [[#420](https://github.com/gardener/gardener-extension-registry-cache/pull/420)]
- `[OPERATOR]` An example `Extension` manifest for extension registration has been added. It can be found at [`example/extension.yaml`](https://github.com/gardener/gardener-extension-registry-cache/blob/v0.18.0/example/extension.yaml). by @timuthy [[#448](https://github.com/gardener/gardener-extension-registry-cache/pull/448)]

## Helm Charts
- admission-registry-cache-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-application:v0.18.0`
- admission-registry-cache-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-registry-cache-runtime:v0.18.0`
- registry-cache: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/registry-cache:v0.18.0`
## Container (OCI) Images
- gardener-extension-registry-cache-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache-admission:v0.18.0`
- gardener-extension-registry-cache: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/registry-cache:v0.18.0`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.32.0</code></b></summary>



## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.32.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.32.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.32.0`


</details>
