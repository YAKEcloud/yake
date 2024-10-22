# [gardener/gardener-extension-provider-aws]

## ✨ New Features

- `[USER]` The admission webhook now validates `CredentialsBinding`s. by @dimityrmirchev [#1047]
- `[USER]` Enable support for the field `shoot.Spec.CloudProfile` alongside `cloudProfileName` and enable the future use of `NamespacedCloudProfile`. by @LucaBernstein [#1000]
- `[USER]` The provider-aws extension does now support shoot clusters with Kubernetes version 1.31. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md) before upgrading to 1.31.  by @ialidzhikov [#1055]
## 🐛 Bug Fixes

- `[OPERATOR]` An issue causing Shoot force deletion to fail because the control plane webhook failing to get the Infrastructure object from the Seed cluster is now fixed. The control plane webhook now reads the infrastructureConfig from the Shoot spec in the Cluster resource. Previously, it was fetching the Infrastructure object from the Seed cluster and was reading the infrastructureConfig from there. by @Kostov6 [#1068]
- `[USER]` Fix cleanup of routing table associations by @hebelsan [#1083]
## 🏃 Others

- `[OPERATOR]` Create IPv6 ServiceCIDR and write IPv6 ranges to Infra.Status.Networking by @axel7born [#1081]
- `[OPERATOR]` The shoot-webhook that mutates the `addons-nginx-ingress-controller` ConfigMap does now specify object selector. The webhook will now intercept only requests for the `addons-nginx-ingress-controller` ConfigMap. by @ialidzhikov [#988]
- `[OPERATOR]` The aws-ipam-controller is enabled for IPv6 and dual stack shoot clusters. It replaces the IPAM of the cloud-controller-manager and kube-controller-manager and supports additionally prefix delegation in case of IPv6 or dual stack.  by @DockToFuture [#984]
- `[OPERATOR]` Add ipv6 support to deploy IPv6 shoots. by @axel7born [#1024]
- `[OPERATOR]` Enable `nat64` and `dns64` for IPv6 shoot clusters. by @DockToFuture [#1082]
- `[OPERATOR]` Fix error classification when deleting DNS record sets by @hebelsan [#1033]
- `[OPERATOR]` The provider-aws extension no longer configures min/maxAllowed in any managed VPA resource. by @hebelsan [#1070]
- `[OPERATOR]` The following images are updated:  
  registry.k8s.io/provider-aws/aws-ebs-csi-driver: v1.29.0 -> v1.35.0 by @scs-gardener-team-gitlab [#1080]
- `[OPERATOR]` `aws-custom-route-controller` is disabled for IPv6. by @DockToFuture [#1088]
- `[OPERATOR]` Update cloud-provider images including CSI driver images by @hebelsan [#1072]
- `[OPERATOR]` Add flow migration integration test by @kon-angelo [#1046]
- `[DEVELOPER]` Update gardener/gardener to 1.103.0 and golang to 1.23.0 by @hebelsan [#1049]
# [gardener/machine-controller-manager-provider-aws]

## 🏃 Others

- `[OPERATOR]` `InitializeMachine` returns `Uninitialized` error code if VM is not found. by @thiyyakat [gardener/machine-controller-manager-provider-aws#173]
- `[OPERATOR]` Set PrimaryIpv6 flag for instances with IPv6 addresses. by @axel7born [gardener/machine-controller-manager-provider-aws#174]
- `[OPERATOR]` Use `ProviderID` as a fallback for fetching the VM. by @thiyyakat [gardener/machine-controller-manager-provider-aws#173]
- `[OPERATOR]` Golang version used upgraded to `1.22.5` by @rishabh-11 [gardener/machine-controller-manager-provider-aws#166]
- `[OPERATOR]` Golangci-lint will now be used as the linter instead of the older golint. by @aaronfern [gardener/machine-controller-manager-provider-aws#168]
# [gardener/machine-controller-manager]

## ✨ New Features

- `[DEVELOPER]` MCM adds the name of the machine to `node.gardener.cloud/machine-name` label of the corresponding node. by @oliver-goetz [gardener/machine-controller-manager#919]
- `[DEVELOPER]` MCM replaces the magic string `<<MACHINE_NAME>>` in user data with the name of the machine when it is bootstrapped. by @oliver-goetz [gardener/machine-controller-manager#919]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug where failure of machine initialization caused label updates to not happen.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[DEVELOPER]` Fixed bug that removed the shoot-- prefix from control cluster namespace for integration tests using the gardener local setup case by @thiyyakat [gardener/machine-controller-manager#935]
## 🏃 Others

- `[OPERATOR]` `getVMStatus` always redirects to `InitiateDrain`. It also populates the node label on the machine object by checking `node.gardener.cloud/machine-name` label on the nodes.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[OPERATOR]` Drain timeout is now correctly honored for Pod eviction during Machine Drain by @sssash18 [gardener/machine-controller-manager#920]
- `[OPERATOR]` golangci-lint will now be used as the linter instead of the older golint by @aaronfern [gardener/machine-controller-manager#929]
- `[OPERATOR]` Golang version used is now upgraded to `1.22.5` by @aaronfern [gardener/machine-controller-manager#929]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.3` -> `v0.31.0` by @ary1992 [gardener/machine-controller-manager#938]
## 📖 Documentation

- `[OPERATOR]` Broken API doc links are now fixed by @rishabh-11 [gardener/machine-controller-manager#927]