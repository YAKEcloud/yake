# [gardener/etcd-backup-restore]

## 📰 Noteworthy

- `[OPERATOR]` Etcd-backup-restore now uses a distroless image as its base image. It is no longer compatible with [etcd-custom-image](https://github.com/gardener/etcd-custom-image), and must be used with [etcd-wrapper](https://github.com/gardener/etcd-wrapper) instead.  by @aaronfern [gardener/etcd-backup-restore#637]
- `[OPERATOR]` Etcd-backup-restore now uses the user home directory to create files. by @aaronfern [gardener/etcd-backup-restore#637]
## 🏃 Others

- `[OPERATOR]` While scaling up a non-HA etcd cluster to HA skipping the scale-up checks for first member of etcd cluster as first member can never be a part of scale-up scenarios. by @ishan16696 [gardener/etcd-backup-restore#649]
- `[OPERATOR]` Backup-restore waits for its etcd to be ready before attempting to update peerUrl by @aaronfern [gardener/etcd-backup-restore#628]
- `[DEVELOPER]` Add CVE categorization for etcd-backup-restore. by @shreyas-s-rao [gardener/etcd-backup-restore#644]
# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEVELOPER]` If you are using `provider-extension` setup you should adapt your files in `example/provider-extensions/garden/controlplane` because `default-domain` and `internal-domain` secrets are removed from `gardener-controlplane` Helm chart. by @oliver-goetz [#8308]
- `[DEVELOPER]` Package `pkg/utils/managedresources` now works with immutable secrets for managed resources under the hood. Existing secrets will be marked for garbage collection and replaced with immutable ones during the first reconciliation of the managed resource. by @dimityrmirchev [#8116]
- `[DEVELOPER]` The `Secrets` type as well as the `Delete` functions for secrets were removed from `pkg/utils/managedresources/builder` since their usage was prone to errors. The higher level package `pkg/utils/managedresources` should be used instead. by @dimityrmirchev [#8116]
- `[DEPENDENCY]` `hack/generate.sh` has been renamed to `hack/generate-sequential.sh`. by @shafeeqes [#8289]
- `[DEPENDENCY]` The deprecated `extensions/pkg/controller/worker.{Options,ApplyMachineResources{ForConfig}}` symbols have been dropped since `gardenlet` takes over management of the `machine.gardener.cloud/v1alpha1` API CRDs since `gardener/gardener@v1.73`. by @rfranzke [#8280]
- `[OPERATOR]` The `virtual-garden-kube-apiserver` service (for the `virtual-garden` cluster) was switched from type `LoadBalancer` to `ClusterIP`. Please make sure to migrate all DNS records from the `virtual-garden-kube-apiserver` to the `istio-ingressgateway` endpoint before upgrading to this Gardener version. by @timuthy [#8302]
- `[OPERATOR]` `gardenlet` no longer reports the `Bootstrapped` condition on `Seed`s. Instead, it now reports the progress in `.status.lastOperation`, similar to how it's done for `Shoot`s. by @rfranzke [#8290]
- `[OPERATOR]` `default-domain`, `internal-domain`, `alerting` and `openvpn-diffie-hellman` secrets are removed from `gardener-controlplane` Helm chart. Please ensure to update them in a different way before upgrading Gardener. If you would like to prevent Helm from deleting these secret during the upgrade, you could annotate them with `"helm.sh/resource-policy": keep`. by @oliver-goetz [#8308]
## 📰 Noteworthy

- `[DEVELOPER]` The `charts/images.yaml` file was moved to `imagevector/images.yaml`. by @rfranzke [#8250]
- `[DEPENDENCY]` `pkg/utils/chart` does now support embedded charts. The already deprecated methods in the `ChartApplier` and `ChartRenderer` will be removed in a few releases, so extensions should adapt to embedded charts. by @rfranzke [#8250]
- `[OPERATOR]` Gardenlet can now set feature gates for `etcd-druid`. They can be specified via the gardenlet configuration `GardenletConfiguration.EtcdConfig.FeatureGates` by @gardener-ci-robot [#8335]
## ✨ New Features

- `[OPERATOR]` The garbage collection controller now also considers managed resources when deciding if secrets/configmaps should be garbage collected. by @dimityrmirchev [#8116]
- `[OPERATOR]` Gardener Scheduler's Minimal Distance strategy can take scheduling decisions based on region distances configured by operators. This especially improves the allocation for shoots of providers regions for which the standard Levenshtein distance is inappropriate. Please see `docs/concepts/scheduler.md` for more information. by @timuthy [#8277]
- `[OPERATOR]` Operators can now view and manage dashboards for compaction jobs running in shoot control plane. by @abdasgupta [#8206]
- `[OPERATOR]` `maintenance-controller` now disables `PodSecurityPolicy` admission controller when forcefully upgrading the Kubernetes version of a `Shoot` to `v1.25`. It also ensures maximum workers of each for group is greater or equal to its number of zone for forceful upgrades to `v1.27`. by @oliver-goetz [#8281]
- `[OPERATOR]` `kubectl get garden` now features additional printer columns providing more information about the substantial configuration values and statuses. by @rfranzke [#8279]
- `[OPERATOR]` The `gardener-apiserver` now drops expired `Kubernetes` and `MachineImage` versions from `Cloudprofile`s during creation. by @shafeeqes [#8297]
- `[OPERATOR]` `gardener-operator` now takes over management of `fluent-operator` and `vali`. by @vlvasilev [#8240]
- `[USER]` Two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` are attached to worker nodes to identify which operating system they are running. This can then be used in selectors that target only workers with a specific operating system and is helpful for e.g. driver deployment. by @MrBatschner [#8295]
- `[USER]` A new feature gate named `ContainerdRegistryHostsDir` is introduced to gardenlet. When enabled, the `/etc/containerd/certs.d` directory is created on the Node and containerd is configured to look up for registries/mirrors configuration in this directory (if there is any configuration applied). In future, the [registry-cache extension](https://github.com/gardener/gardener-extension-registry-cache/) will add such registries/mirrors configuration under this directory (via OperatingSystemConfig mutation). by @ialidzhikov [#8094]
- `[USER]` The `Shoot` maintenance controller now updates the CRI of worker pools from `docker` to `containerd` when force-upgrading from Kubernetes `v1.22` to `v1.23`. by @oliver-goetz [#8272]
- `[DEVELOPER]` Extensions running on seed clusters can get access to the garden cluster by using the injected kubeconfig specified by the `GARDEN_KUBECONFIG` environment variable. You can read about the details in this [doc](https://github.com/gardener/gardener/blob/master/docs/extensions/garden-api-access.md). by @timebertt [#8264]
## 🐛 Bug Fixes

- `[OPERATOR]` When `Shoot`s were updated from non high-availability to `zone` high-availability, it could happen that the control-plane was scheduled to two instead of three zones. This issue is relevant for cloud providers with an inconsistent zone naming (`Azure` is currently the only candidate to our knowledge).  
  Existing shoots with the before mentioned problem must be fixed manually be operators if required. An automatic move of `etcd`s and their volumes is not part of this fix due to availability reasons. by @gardener-ci-robot [#8345]
- `[OPERATOR]` gardenlet: A regression causing metering related recording rules for the aggregate-prometheus not to be applied is now fixed. by @istvanballok [#8284]
- `[USER]` An issue has been fixed for highly-available `Shoot`s whose `etcd` clusters didn't get ready in the `Completing` phase of a CA credentials rotation. by @timuthy [#8303]
## 🏃 Others

- `[OPERATOR]` A bug preventing `prometheus` ingress to use `wildcard-certificate` is fixed. by @acumino [#8319]
- `[OPERATOR]` A bug preventing `plutono` ingress to use `wildcard-certificate` is fixed. by @acumino [#8317]
- `[OPERATOR]` gardenlet: A regression preventing the alertmanager in the garden namespace from sending email notifications is now fixed. by @istvanballok [#8310]
- `[DEVELOPER]` The `github.com/golang/mock/gomock` dependency is replaced by `go.uber.org/mock`. by @afritzler [#8269]
- `[DEVELOPER]` Add failure tolerance option to the `CreateShoot` test. by @hendrikKahl [#8298]
# [gardener/etcd-druid]

## ⚠️ Breaking Changes

- `[OPERATOR]` :warning: `etcd.Status.ClusterSize`, `etcd.Status.ServiceName`, `etcd.Status.UpdatedReplicas` have been marked as deprecated and users should refrain from depending on these fields. by @unmarshall [gardener/etcd-druid#594]
- `[OPERATOR]` File ownership for `var/etcd/data` will be changed to non-root user (65532). by @aaronfern [gardener/etcd-druid#620]
- `[OPERATOR]` Etcd-druid will now deploy distroless `etcd-wrapper` and `etcd-backup-restore` images. Please refer to [etcd-wrapper](https://github.com/gardener/etcd-wrapper) for more information. by @aaronfern [gardener/etcd-druid#620]
- `[OPERATOR]` Etcd-related secrets will now be mounted onto the `/var/` directory instead of `/root/`. by @aaronfern [gardener/etcd-druid#620]
- `[DEVELOPER]` Developer Action Required: The `make deploy` command has been replaced with `make deploy-via-kustomize`. Please update your deployment workflows accordingly. by @seshachalam-yv [gardener/etcd-druid#599]
## ✨ New Features

- `[DEVELOPER]` Makefile has been updated to use `Skaffold` for deploying `etcd-druid` with the `make deploy` target, simplifying the deployment process and eliminating the need to push the image to the container registry for each local development testing. by @seshachalam-yv [gardener/etcd-druid#599]
- `[OPERATOR]` Feature gates have been introduced in etcd-druid, and can be specified using CLI flag `--feature-gate`. by @aaronfern [gardener/etcd-druid#646]
- `[OPERATOR]` Druid now exposes metrics related to snapshot compaction, on default port 8080. Please expose the desired metrics port via the etcd-druid service to allow metrics to be scraped by a Prometheus instance. by @abdasgupta [gardener/etcd-druid#569]
- `[OPERATOR]` `UseEtcdWrapper` feature gate has been introduced to allow users to opt for the new [etcd-wrapper](https://github.com/gardener/etcd-wrapper) image. by @aaronfern [gardener/etcd-druid#646]
## 🐛 Bug Fixes

- `[OPERATOR]` A bug causing incorrect volume mount path for `Etcd`s and `EtcdCopyBackupsTask`s using `Local` snapshot storage provider while using distroless etcd-backup-restore image `v0.25.x` has been resolved. by @aaronfern [gardener/etcd-druid#662]
- `[OPERATOR]` `AllMembersReady` condition has now been fixed to eventually show the correct overall readiness of an etcd cluster. by @unmarshall [gardener/etcd-druid#594]
- `[OPERATOR]` A bug causing `EtcdCopyBackupsTask` jobs to fail to create temp snapshot directory while using distroless etcd-backup-restore image `v0.25.x` has been resolved. by @aaronfern [gardener/etcd-druid#662]
## 🏃 Others

- `[OPERATOR]` Print build version and go runtime info. by @shreyas-s-rao [gardener/etcd-druid#636]
- `[OPERATOR]` Bumped up the custom image version to v3.4.13-bootstrap-11 by @abdasgupta [gardener/etcd-druid#623]
- `[OPERATOR]` When scaling from single-node to multi-node etcd cluster, Etcd Druid will now first ensure that any change to the peer URL (e.g TLS enablement)  is seen by the existing etcd process running within the etcd member pod. Once that is confirmed then it will scale up the Etcd StatefulSet and add relevant annotations. by @unmarshall [gardener/etcd-druid#598]
- `[DEVELOPER]` Refactored `statefulset`, `service`, `poddisruptionbudget`, `lease`, and `configmap` components to use default labels and owner references from `etcd`. by @seshachalam-yv [gardener/etcd-druid#559]
- `[DEVELOPER]` Add CVE categorization for etcd-druid. by @shreyas-s-rao [gardener/etcd-druid#634]
# [gardener/vpn2]

## 📰 Noteworthy

- `[OPERATOR]` Bump builder image golang from `1.20.4` to `1.20.6`  by @axel7born [gardener/vpn2#33]
# [gardener/hvpa-controller]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed a bug that caused HVPA reconciliation to fail with `expected pointer, but got v2beta1.MetricSpec type` when the HPA spec had changed. by @voelzmo [gardener/hvpa-controller#125]