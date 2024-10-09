# [gardener/gardener-extension-provider-azure]

## ✨ New Features

- `[USER]` The provider-azure extension does now support shoot clusters with Kubernetes version 1.31. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md) before upgrading to 1.31.  by @ialidzhikov [#963]
- `[USER]` The admission webhook now validates `CredentialsBinding`s. by @dimityrmirchev [#957]
- `[USER]` Enable support for the field `shoot.Spec.CloudProfile` alongside `shoot.Spec.CloudProfileName` and enable the future use of `NamespacedCloudProfile`s. by @LucaBernstein [#922]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix nil pointer dereference if diagnostic profile without given storage URI is used. by @hebelsan [#975]
## 🏃 Others

- `[OPERATOR]` Update CCM and CSI-sidecar containers to latest version by @AndreasBurger [#974]
- `[OPERATOR]` Adds the ability to attach dataDisks with image references by @hebelsan [#891]
- `[OPERATOR]` The provider-azure extension no longer configures min/maxAllowed in any managed VPA resource. by @AndreasBurger [#973]
- `[OPERATOR]` Conditionally enable allow-egress-{tcp,udp} loadbalancers. by @kon-angelo [#958]
# [gardener/machine-controller-manager-provider-azure]

## 🏃 Others

- `[USER]` Golang version upgraded to `1.22.5` by @rishabh-11 [gardener/machine-controller-manager-provider-azure#159]
- `[USER]` Adds the ability to attach dataDisks with image references by @hebelsan [gardener/machine-controller-manager-provider-azure#165]
- `[USER]` golangci-lint will now be used as the linter instead of the older golint by @hebelsan [gardener/machine-controller-manager-provider-azure#139]
# [gardener/machine-controller-manager]

## ✨ New Features

- `[DEVELOPER]` MCM adds the name of the machine to `node.gardener.cloud/machine-name` label of the corresponding node. by @oliver-goetz [gardener/machine-controller-manager#919]
- `[DEVELOPER]` MCM replaces the magic string `<<MACHINE_NAME>>` in user data with the name of the machine when it is bootstrapped. by @oliver-goetz [gardener/machine-controller-manager#919]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug where failure of machine initialization caused label updates to not happen.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[OPERATOR]` Fixed a bug where the `Unitialised` error code was blocking machine deletion by @rishabh-11 [gardener/machine-controller-manager#928]
- `[DEVELOPER]` Fixed bug that removed the shoot-- prefix from control cluster namespace for integration tests using the gardener local setup case by @thiyyakat [gardener/machine-controller-manager#935]
## 🏃 Others

- `[OPERATOR]` Drain timeout is now correctly honored for Pod eviction during Machine Drain by @sssash18 [gardener/machine-controller-manager#920]
- `[OPERATOR]` `getVMStatus` always redirects to `InitiateDrain`. It also populates the node label on the machine object by checking `node.gardener.cloud/machine-name` label on the nodes.  by @thiyyakat [gardener/machine-controller-manager#940]
- `[OPERATOR]` golangci-lint will now be used as the linter instead of the older golint by @aaronfern [gardener/machine-controller-manager#929]
- `[OPERATOR]` Golang version used is now upgraded to `1.22.5` by @aaronfern [gardener/machine-controller-manager#929]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*` : `v0.29.3` -> `v0.31.0` by @ary1992 [gardener/machine-controller-manager#938]
## 📖 Documentation

- `[OPERATOR]` Broken API doc links are now fixed by @rishabh-11 [gardener/machine-controller-manager#927]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.48.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.48.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.48.0`
## Docker Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.48.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.48.0`
