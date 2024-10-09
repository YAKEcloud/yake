# [gardener/gardener-extension-provider-openstack]

## ✨ New Features

- `[USER]` The provider-openstack extension does now support shoot clusters with Kubernetes version 1.31. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md) before upgrading to 1.31.  by @ialidzhikov [#856]
- `[USER]` The admission webhook now validates `CredentialsBinding`s. by @dimityrmirchev [#845]
- `[OPERATOR]` Allows the operator to configure whether he wants to deploy the standard ClusterFilters and/or StorageClass by @nschad [#830]
- `[OPERATOR]` Enable support for the field `shoot.Spec.CloudProfile` alongside `shoot.Spec.CloudProfileName` and enable the future use of `NamespacedCloudProfile`. by @LucaBernstein [#834]
- `[OPERATOR]` Helm charts of extension and admission controller are published as OCI artifacts now. by @oliver-goetz [#811]
## 🐛 Bug Fixes

- `[OPERATOR]` Removed unnecessary preStop hook from `node-driver-registrar` in `csi-driver-node`, as socket removal is now handled internally by `node-driver-registrar`, resolving distroless image error. by @AndreasBurger [#802]
## 🏃 Others

- `[OPERATOR]` A `priorityClassName` can now be set for the admission deployment via the `gardener-extension-admission-openstack` Helm chart. by @timuthy [#806]
- `[OPERATOR]` Starting with gardenlet >= v1.98.0, use controlplane webhook object selector to limit mutator calls. by @LucaBernstein [#797]
- `[OPERATOR]` Update cloud-provider-openstack images and remove credential use from nodeserver by @kon-angelo [#864]
- `[OPERATOR]` Update the VPA CRD used for testing locally by @hebelsan [#822]
- `[OPERATOR]` Update CSI sidecar containers to latest version. by @kon-angelo [#865]
- `[OPERATOR]` Adapt new `WorkerPoolHash` function in Gardener `v1.98`. by @Duciwuci [#816]
- `[OPERATOR]` Inserts architecture from worker to the machine class by @sssash18 [#820]
- `[OPERATOR]` The provider-openstack extension no longer configures min/maxAllowed in any managed VPA resource. by @kon-angelo [#863]
- `[OPERATOR]` Allow multiple loadBalancerProviders as the default and for a region by @lotharbach [#841]
- `[DEVELOPER]` Update gardener/gardener to 1.103.0 and golang to 1.23.0 by @hebelsan [#850]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug where the `Unitialised` error code was blocking machine deletion by @rishabh-11 [gardener/machine-controller-manager#928]
# [gardener/machine-controller-manager-provider-openstack]

## 🏃 Others

- `[DEVELOPER]` Set repository PR template /platform from aws to openstack by @hebelsan [gardener/machine-controller-manager-provider-openstack#165]
- `[DEVELOPER]` Update golang to v1.23.1 by @kon-angelo [gardener/machine-controller-manager-provider-openstack#175]
- `[DEVELOPER]` Update gardener to v1.103.0 by @kon-angelo [gardener/machine-controller-manager-provider-openstack#175]
- `[DEPENDENCY]` Golang version updated to 1.22.5 by @rishabh-11 [gardener/machine-controller-manager-provider-openstack#152]
- `[OPERATOR]` Allow input of pod CIDRs as slice. by @kon-angelo [gardener/machine-controller-manager-provider-openstack#177]
- `[OPERATOR]` Update machine-controller-manager to v0.54.0 by @kon-angelo [gardener/machine-controller-manager-provider-openstack#181]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.42.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.42.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.42.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.42.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.42.0`
