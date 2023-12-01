# [gardener/etcd-backup-restore]

## 📰 Noteworthy

- `[OPERATOR]` Fix a restoration failure which can occurs due to an etcd database space exceeds during restoration. by @ishan16696 [gardener/etcd-backup-restore#668]
- `[OPERATOR]` Making etcd-backup-restore restart tolerant while scaling-up an etcd cluster. by @ishan16696 [gardener/etcd-backup-restore#661]
## 🏃 Others

- `[OPERATOR]` Enhanced Garbage Collector to garbage collect the chunks for cloud providers like GCP and OpenStack which does not automatically delete snapshot chunks after the formation of a composite object. by @anveshreddy18 [gardener/etcd-backup-restore#673]
- `[USER]` The snapshots are fetched from the actual backend store when queried for latest snapshots on `/snapshot/latest` endpoint. by @abdasgupta [gardener/etcd-backup-restore#675]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `webhookcmd.NewAddToManagerSimpleOptions` function was removed, please use `webhookcmd.NewAddToManagerOptions` instead. by @timuthy [#8725]
- `[DEPENDENCY]` The `extensionswebhook.New` forbids to pass `mutators` and `validators` at the same time. Please use separate webhooks for validating and mutating actions if required. by @timuthy [#8725]
- `[OPERATOR]` All the functionality related to the deprecated field `seed.spec.secretRef` has been removed and subsequently `seed.spec.secretRef` will be dropped from the Seed API in a later release of Gardener. Please check your `Seed`s and remove any usage before upgrading to this Gardener version. by @acumino [#8833]
- `[USER]` With this PR, the plutono UI will be able to fetch newer logs only. The older logs, which are submitted via the tenant operator will not be visible in the UI. To access the older logs, for the standard log retention period , either set the `--org-id` parameter for `valicli` or the `X-Scope-Org` http request header for `curl` or `wget` needs to be supplied to fetch them, using the port-forwarded service to the `vali` target. by @nickytd [#8800]
## 📰 Noteworthy

- `[DEVELOPER]` The extension webhook registration does now differentiate between mutating and validating actions and creates matching `ValidatingWebhookConfigration` or `MutatingWebhookConfiguration` objects. Earlier, only `MutatingWebhookConfiguration`s were created. by @timuthy [#8725]
- `[DEVELOPER]` The `UseGardenerNodeAgent` feature gate is now enabled for the local development scenario. You can read more about `gardener-node-agent` [here](https://github.com/gardener/gardener/blob/master/docs/concepts/node-agent.md). by @rfranzke [#8847]
## ✨ New Features

- `[DEVELOPER]` Add full single-stack IPv6 support for gardener provider-local  by @nschad [#8574]
- `[DEPENDENCY]` Webhook registration `webhookcmd.NewAddToManagerOptions` can now be used for admission controllers performing validation and mutation in the Garden cluster. This option automatically creates and maintains required `{Mutating,Validating}WebhookConfiguration` objects as well as comes with an automated management for CA and server certificates. by @timuthy [#8725]
- `[OPERATOR]` `gardenlet'`s `Shoot` care controller now garbage-collects orphaned `Lease` objects related to no longer existing `Node`s - see [this upstream issue](https://github.com/kubernetes/kubernetes/issues/119660) for more details. by @rfranzke [#8817]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug has been fixed which prevented shoot reconciliations in case the old `system:machine-controller-manager-seed` `ClusterRole` was still referenced in the `RoleBinding` for `machine-controller`-manager`. by @himanshu-kun [#8816]
- `[OPERATOR]` A bug causing `EveryNodeReady` condition to be added in workerless shoot status if gardenlet of the given shoot's seed becomes unhealthy is fixed. by @gardener-ci-robot [#8889]
- `[OPERATOR]` A bug in the `Seed` care controller has been fixed which caused the `Seed` to remain in `NotReady` state when `vali` was disabled in `gardenlet`'s component config (via `.logging.vali.enabled=false`) while logging was enabled (`.logging.enabled=true`). by @rfranzke [#8840]
## 🏃 Others

- `[OPERATOR]` Federate non-namespaced metrics, e.g. kube_node_spec_taint, kube_node_spec_unschedulable.  by @adenitiu [#8850]
- `[OPERATOR]` The Version of Istio is up-dated to 1.19.3 by @axel7born [#8723]
- `[OPERATOR]` showing kubelet version and OS image version in Plutono Node/Worker Pool overview dashboard by @tedteng [#8757]
- `[OPERATOR]` The `gardener-resource-manager` deployment procedure was improved. Earlier, GRM was unnecessarily rolled during shoot reconciliation if worker nodes contained custom taints. by @timuthy [#8835]
- `[OPERATOR]` Update vertical-pod-autoscaler to 1.0.0. This introduces the `/status` subresource on VPA objects. by @voelzmo [#8852]
## 📖 Documentation

- `[USER]` Document whether is an error in the `shoot.status` is a user error or not. by @hendrikKahl [#8758]
# [gardener/etcd-druid]

## 📰 Noteworthy

- `[DEVELOPER]` Added e2e test for compaction. by @abdasgupta [gardener/etcd-druid#723]
- `[OPERATOR]` Compaction job now reconciles on Job Status changes along with the holder identity changes in snapshot leases. by @abdasgupta [gardener/etcd-druid#711]
## ✨ New Features

- `[DEVELOPER]` Added documentation and sample configurations for simplifying Localstack setup, making it easier for developers to create a local testing environment using a Kind cluster. by @seshachalam-yv [gardener/etcd-druid#713]
## 🐛 Bug Fixes

- `[OPERATOR]` Local storage provider for backups is now supported for snapshot compaction jobs. by @abdasgupta [gardener/etcd-druid#682]
## 🏃 Others

- `[OPERATOR]` Update alpine image version to `3.18.4`. by @shreyas-s-rao [gardener/etcd-druid#724]
## 📖 Documentation

- `[OPERATOR]` Updated the recovery from permanent quorum loss ops guide. by @ishan16696 [gardener/etcd-druid#697]

## Docker Images
- admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.85.0`
- apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.85.0`
- controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.85.0`
- gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.85.0`
- node-agent: `eu.gcr.io/gardener-project/gardener/node-agent:v1.85.0`
- operator: `eu.gcr.io/gardener-project/gardener/operator:v1.85.0`
- resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.85.0`
- scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.85.0`
