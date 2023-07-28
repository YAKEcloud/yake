# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` Removed `service.beta.kubernetes.io/aws-load-balancer-type: nlb` annotation from istio-ingressgateway service template. Set this annotation in seed configuration. Note: Changing load balancer type creates a new one, old one requires manual clean-up. by @axel7born [#8214]
- `[OPERATOR]` When deploying this version of `gardener-operator`, make sure that you update your `Garden` resources with the new `.spec.virtualCluster.gardener.clusterIdentity` field. If you already have a `gardener-apiserver` deployment, make sure that the value matches the `--cluster-identity` flag of the current `gardener-apiserver` deployment. by @rfranzke [#8234]
- `[OPERATOR]` `gardener-operator` no longer reports the `Reconciled` condition. Instead, it now reports the progress in `.status.lastOperation`, similar to how it's done for `Shoot`s. by @rfranzke [#8238]
- `[OPERATOR]` ⚠️ The deprecated field `.spec.settings.ownerChecks` has been removed from the Seed API. Please check your `Seed`s and remove any usage before upgrading to this Gardener version. by @dimitar-kostadinov [#8109]
- `[DEVELOPER]` So far the `github.com/gardener/gardener/pkg/utils/managedresources.{NewForShoot,CreateForShoot}` funcs were ignoring the passed `origin` func parameter and were always using `gardener` as value. These funcs will now respect and use the passed `origin` value. by @ialidzhikov [#8260]
- `[DEVELOPER]` A new field `errorCodeCheckFunc` is introduced in the generic `Worker` actuator. This should be set to parse the Gardener error codes from the error returned in `Worker` reconciliation. by @acumino [#8242]
## ✨ New Features

- `[OPERATOR]` Add `Care` reconciler to `Garden` controller in `gardener-operator`. by @oliver-goetz [#8158]
- `[OPERATOR]` `Shoot`s allow to optionally configure a specific scheduler via `.spec.schedulerName`. The `default-scheduler` is used in case non is configured. Please note, that `Shoot`s will remain `Pending` in case a scheduler name is configured but an adequate scheduler is not available in the landscape. by @timuthy [#8261]
## 🐛 Bug Fixes

- `[USER]` An issue has been fixed which caused CoreDNS to not rewrite CNAME values in DNS answers. by @axel7born [#8231]
- `[DEVELOPER]` A bug in the local development environment has been fixed which prevented admission of Gardener resources by extension webhooks. by @vpnachev [#8239]
- `[OPERATOR]` The obsolete `addons` `ManagedResource` is now properly cleaned up. by @shafeeqes [#8233]
- `[OPERATOR]` Now the vali ingress definition points to the shoot logging service. by @nickytd [#8252]
## 🏃 Others

- `[OPERATOR]` Stability of the ssh tunnel in the local extension setup should improve due to better failure handling. by @ScheererJ [#8236]
- `[OPERATOR]` Following dependency has been updated:-   
  - github.com/gardener/etcd-druid v0.18.1 -> v0.18.4 by @acumino [#8228]
- `[USER]` It is now possible to enable disabled APIs for workerless shoot clusters via `spec.kubernetes.kubeAPIServer.runtimeConfig`. by @timuthy [#8258]
# [gardener/dependency-watchdog]

## 🏃 Others

- `[DEVELOPER]` update client-go version and exclude the old one in go.mod by @acumino [gardener/dependency-watchdog#90]