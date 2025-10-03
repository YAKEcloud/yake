# [github.com/gardener/gardener:v1.129.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The GA-ed and unconditionally enabled `UseNamespacedCloudProfile` feature gates is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @LucaBernstein [[#13020](https://github.com/gardener/gardener/pull/13020)]
- `[OPERATOR]` It is not allowed anymore to specify the following characters: [, #], as well as capitalized letters, within the entries of the Garden's `.spec.virtualCluster.Gardener.apiServer.watchCacheSizes.resources[].apiGroup` field. Please update your Gardens accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[USER]` It is not allowed anymore to specify the following characters: [, #], as well as capitalized letters, within the entries of the Shoot's `.spec.kubernetes.kubeAPIServer.watchCacheSizes.resources[].apiGroup` field. Please update your Shoots accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[OPERATOR]` The GA-ed and unconditionally enabled `CredentialsRotationWithoutWorkersRollout` feature gates is removed. If you have references to this feature gate, clean them up before upgrading to this version of Gardener. by @rfranzke [[#13041](https://github.com/gardener/gardener/pull/13041)]
- `[OPERATOR]` It is not allowed anymore to specify the following characters: [,. #], as well as capitalized letters, within the entries of the Garden's `.spec.virtualCluster.Gardener.apiServer.watchCacheSizes.resources[].resource` field. Please update your Gardens accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]
- `[USER]` The `.status.credentials.rotation.kubeconfig` field in the `Shoot` API is removed. This field has been deprecated since Gardener v1.114.0. by @shafeeqes [[#13037](https://github.com/gardener/gardener/pull/13037)]
- `[USER]` It is not allowed anymore to specify the following characters: [,. #], as well as capitalized letters, within the entries of the Shoot's `.spec.kubernetes.kubeAPIServer.watchCacheSizes.resources[].resource` field. Please update your Shoots accordingly. by @tobschli [[#12839](https://github.com/gardener/gardener/pull/12839)]

## 📰 Noteworthy
- `[USER]` `ViewerKubeconfig` is no longer using solely the group `gardener.cloud:system:viewers` to grant viewer access to the shoot cluster, instead it is now granted only to Gardener system viewer users. Project Viewer users are granted viewer access to the shoot cluster via the group `gardener.cloud:project:viewers`. by @vpnachev [[#12674](https://github.com/gardener/gardener/pull/12674)]
- `[USER]` `AdminKubeconfig` is no longer using the group `system:masters` to grant admin access to the shoot cluster, instead it is now using the groups `gardener.cloud:system:admins` granted to Gardener system admins and `gardener.cloud:project:admins` granted to Gardener Project admins. by @vpnachev [[#12674](https://github.com/gardener/gardener/pull/12674)]

## ✨ New Features
- `[OPERATOR]` gardener-admission-controller now supports enabling the [`OwnerReferencesPermissionEnforcement` admission plugin](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#ownerreferencespermissionenforcement) for the virtual kube-apiserver. Previously, it was rejecting requests from gardenlet because the `shoots/finalizers` and `backupbuckets/finalizers` subresources were not allowed. by @gardener-ci-robot [[#13059](https://github.com/gardener/gardener/pull/13059)]
- `[OPERATOR]` The `OperatingSystemConfig` containerd config was enhanced to specify the [`override_path`](https://github.com/containerd/containerd/blob/cef8ce2ecb572bc8026323c0c3dfad9953b952f6/docs/hosts.md?override_path#override_path-field) option which is respected when generating the `hosts.toml` file for the respective upstream config. by @timuthy [[#13002](https://github.com/gardener/gardener/pull/13002)]

## 🐛 Bug Fixes
- `[USER]` A bug causing finalizers to not be removed from `Secret`s when such are deleted and referenced by both a `CredentialsBinding` and a `SecretBinding` is fixed. by @gardener-ci-robot [[#13075](https://github.com/gardener/gardener/pull/13075)]
- `[OPERATOR]` Fixed an issue that caused `Machine`s to be duplicated when being saved in the `ShootState`. This caused the `ShootState` to grow exponentially large and fail to be created. The issue could occur when there are multiple `MachineDeployments` created for the `Shoot`. by @gardener-ci-robot [[#13089](https://github.com/gardener/gardener/pull/13089)]
- `[OPERATOR]` A bug in the `gardenletdeployer` unable to handle backup credentials of type `WorkloadIdentity` has been fixed. by @gardener-ci-robot [[#13087](https://github.com/gardener/gardener/pull/13087)]
- `[OPERATOR]` Fixed the `alertmanager-garden` peer discovery service port names by @rickardsjp [[#12988](https://github.com/gardener/gardener/pull/12988)]
- `[DEVELOPER]` An issue preventing `extensions.gardener.cloud/v1alpha1.Bastion`s to be listed due to missing json tags is now fixed. by @gardener-ci-robot [[#13062](https://github.com/gardener/gardener/pull/13062)]
- `[DEVELOPER]` The `Priority` field for the `MachineDeployment` API is optional instead of required again. by @tobschli [[#13014](https://github.com/gardener/gardener/pull/13014)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.41.1` to `0.42.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.42.0) by @gardener-ci-robot [[#13009](https://github.com/gardener/gardener/pull/13009)]
- `[OPERATOR]` Revert server block import of coredns-custom configmap for node-local-dns. by @DockToFuture [[#13028](https://github.com/gardener/gardener/pull/13028)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.41` to `v7.5.42`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.42) by @gardener-ci-robot [[#13023](https://github.com/gardener/gardener/pull/13023)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.19.1` to `v0.20.0`. by @gardener-ci-robot [[#12980](https://github.com/gardener/gardener/pull/12980)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.26` to `v2.2.27`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.27) by @gardener-ci-robot [[#13022](https://github.com/gardener/gardener/pull/13022)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.13.2` to `v1.13.3`. by @gardener-ci-robot [[#13047](https://github.com/gardener/gardener/pull/13047)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `fluent/fluent-operator` from `v3.2.5` to `v4.0.9` by @nickytd [[#12998](https://github.com/gardener/gardener/pull/12998)]
- `[DEVELOPER]` An issue with the ssh tunnel in the extensions setup is fixed. by @axel7born [[#13019](https://github.com/gardener/gardener/pull/13019)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.1` to `1.82.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.2) by @gardener-ci-robot [[#13010](https://github.com/gardener/gardener/pull/13010)]
- `[DEVELOPER]` The optimistic defaulting of priorities for `MachineDeployment`s was introduced again. by @tobschli [[#13014](https://github.com/gardener/gardener/pull/13014)]
- `[OPERATOR]` Remove migration code to clean up obsolete Prometheus volumes by @vicwicker [[#13021](https://github.com/gardener/gardener/pull/13021)]
- `[USER]` Gardener API server now serves the OpenAPI v2 schema ( `/openapi/v2` endpoint) again and will keep on serving it until Gardener `v1.160`. In Gardener `v1.127.0`, the support for OpenAPI v2 schemas was removed. However, [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) does not yet support OpenAPI v3 schema. by @shafeeqes [[#12987](https://github.com/gardener/gardener/pull/12987)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.129.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.129.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.129.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.129.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.129.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.129.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.129.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.129.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.129.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.129.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.129.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.129.0`
