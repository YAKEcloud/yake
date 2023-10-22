# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The deprecated `ChartRenderer.Render` and `ChartApplier.{Apply,Delete}` methods have been dropped. Use `ChartRendere.RenderEmbeddedFS` and `ChartApplier.{Apply,Delete}FromEmbeddedFS` instead. by @rfranzke [#8540]
- `[DEPENDENCY]` The `hack/generate-crds.sh` script now receives the file name prefix via the `-p` option (previously, the prefix was the first argument to the script). by @rfranzke [#8560]
- `[DEPENDENCY]` The no longer required `--gardenlet-manages-mcm` option has been removed. All code in provider extensions related to management/deployment of `machine-controller-manager` should be removed. by @rfranzke [#8596]
- `[DEPENDENCY]` The deprecated `core.gardener.cloud/apiserver-exposure` label and handling has been dropped. by @rfranzke [#8540]
- `[DEPENDENCY]` Provider extensions must now pass the `cluster.Cluster` object for the garden cluster to the `genericactuator.NewActuator` function. See [this](https://github.com/gardener/gardener/blob/8d2f116aa606e5181cd430e5063dd798629bdc78/cmd/gardener-extension-provider-local/app/app.go#L228-L246) for an example how to create such a `cluster.Cluster` object. by @rfranzke [#8559]
- `[OPERATOR]` Before upgrading to this Gardener versions, you must make sure that the `Service`s of all registered provider extensions serving webhooks for the shoot cluster are annotated with `networking.resources.gardener.cloud/from-all-webhook-targets-allowed-ports=[{"protocol":"TCP","port":<port>}]`, `networking.resources.gardener.cloud/namespace-selectors=[{"matchLabels":{"gardener.cloud/role":"shoot"}}]`, and `networking.resources.gardener.cloud/pod-label-selector-namespace-alias=extensions`. by @rfranzke [#8540]
- `[DEVELOPER]` Methods `SkipIf` and `DoIf` for `TaskFn` have been dropped. A new field `SkipIf` is introduced in `Task`, If set to true the task will be skipped and will also not be reported by the progress reporter. by @acumino [#8541]
## 📰 Noteworthy

- `[DEVELOPER]` The `pkg/utils/secrets` package now signs certificates with 3072 bit RSA keys. by @dimityrmirchev [#8635]
- `[DEVELOPER]` During the `Migrate` phase of a control plane migration of a `Shoot`, the state is now only persisted after all extension resources have been migrated. Consequently, make sure that you have added all state to the `.status.state` field of the respective extension object when running `Migrate()`. by @rfranzke [#8559]
- `[DEVELOPER]` A `generate-admin-kubeconf.sh` script which can be used to generate an admin kubeconfig for a local shoot cluster was added in the `hack/usage` directory. by @dimityrmirchev [#8636]
- `[DEVELOPER]` The `extensions/pkg/controller/operatingsystemconfig/oscommon` package is deprecated and will be removed as soon as the `UseGardenerNodeAgent` feature gate has been promoted to GA. OS extension developers should start adapting to this new feature, see [documentation](https://github.com/gardener/gardener/blob/master/docs/extensions/operatingsystemconfig.md#what-needs-to-be-implemented-to-support-a-new-operating-system) and [example](https://github.com/rfranzke/gardener/tree/gna/osc-api/pkg/provider-local/controller/operatingsystemconfig) based on `provider-local`. by @rfranzke [#8647]
- `[OPERATOR]` The `Worker` state reconciler has been dropped, i.e., updated provider extensions will no longer populate the machine state to the `.status.state` field of `Worker` resources. For a few releases, `gardenlet` will no longer persist any still existing data in the `.status.state` field of `Worker` resources during a control plane migration of a `Shoot`, and it will set `.status.state` to `nil` after a successful reconciliation or restore operation. by @rfranzke [#8559]
- `[OPERATOR]` Configure the value for the flag `metrics-scrape-wait-duration` for compaction controller to set a wait duration at the end of every compaction job, to allow for metrics to be scraped by a Prometheus instance. by @abdasgupta [#8607]
- `[OPERATOR]` The `MachineControllerManagerDeployment` has been promoted to GA and is now locked to "enabled by default". Make sure that all registered provider extensions support this feature gate before upgrading to this version of Gardener. by @rfranzke [#8596]
- `[OPERATOR]` The GA-ed `DisableScalingClassesForShoots` feature gate has been removed. by @rfranzke [#8596]
- `[OPERATOR]` `maxSurge` for `kube-apiserver` and `gardener-apiserver` of the virtual garden cluster is set to `100%`. by @oliver-goetz [#8640]
- `[OPERATOR]` The `kube-apiserver` no longer mounts root CA bundles from the underlying host. by @dimityrmirchev [#8645]
- `[USER]` Gardener now uses 3072 bit RSA keys in order to generate TLS certificates. by @dimityrmirchev [#8635]
- `[USER]` `nginx-ingress-controller` now enables annotation validation. by @dimityrmirchev [#8644]
- `[DEPENDENCY]` The `MachineClassKind()`, `MachineClass()`, and `MachineClassList()` methods have been dropped from the generic `Worker` actuator's interface and do not need to be implemented anymore. by @rfranzke [#8559]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` maintains the two most recent `generic-token-kubeconfig` secrets in the runtime-cluster. In addition the latest secret name is published to the `garden` resource in `.metadata.annotations[generic-token-kubeconfig.secret.gardener.cloud/name]`. Third-party components referring to this secret should check this annotation value after a credentials or CA rotation for the virtual-garden cluster took place. by @timuthy [#8657]
- `[OPERATOR]` Feature gate `APIServerFastRollout` for `gardenlet` is introduced and enabled by default. When enabled, `maxSurge` for `kube-apiservers` of `Shoot`s is set to `100%`.  by @oliver-goetz [#8640]
- `[DEVELOPER]` It is now possible to annotate managed resources part of `ManagedResource` objects with `resources.gardener.cloud/finalize-deletion-after=<duration>`, e.g., `resources.gardener.cloud/finalize-deletion-after=1h`. After this time, `gardener-resource-manager` will forcefully delete the resource by removing their finalizers. by @rfranzke [#8584]
- `[DEVELOPER]` Change port of ssh reverse tunnel to 443 by @axel7born [#8606]
- `[USER]` Machine scale-up delay for new pods can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.newPodScaleupDelay` in the `Shoot` API . by @aaronfern [#8590]
- `[USER]` Concurrent empty machines bulk deletion can now be configured for `cluster-autoscaler` via the field `.spec.kubernetes.clusterAutoscaler.maxEmptyBulkDelete` in the `Shoot` API . by @aaronfern [#8590]
## 🐛 Bug Fixes

- `[DEVELOPER]` Use cgroupv2 fix for local-setup on macOS too. by @oliver-goetz [#8633]
## 🏃 Others

- `[DEVELOPER]` Gardener base image is updated to `gcr.io/distroless/static-debian12:nonroot`. by @oliver-goetz [#8628]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.1`. by @dimityrmirchev [#8644]
- `[DEPENDENCY]` The skaffold version is updated from v2.7.0 to v2.8.0. by @dimitar-kostadinov [#8634]
- `[DEPENDENCY]` `nginx-ingress-controller` image is updated to `v1.9.3`. by @dimityrmirchev [#8650]
- `[OPERATOR]` Kubernetes feature gate `UnauthenticatedHTTP2DOSMitigation` is considered valid for versions >= `1.25`. by @gardener-ci-robot [#8670]
- `[OPERATOR]` The regression is now fixed and the control plane logs shall be visible in the Plutono dashboards. by @nickytd [#8655]
- `[OPERATOR]` The following Golang dependencies have been updated:  
  - `k8s.io/*` from `v0.28.2` to `v0.28.3`  
  - `sigs.k8s.io/controller-runtime` from `v0.16.2` to `v0.16.3` by @gardener-ci-robot [#8677]
## 📖 Documentation

- `[USER]` Added an example for `AdminKubeconfigRequest` via the Python Kubernetes client. by @Shegox [#8651]
# [gardener/ext-authz-server]

## ✨ New Features

- `[USER]` Update golang 1.20.4 -> 1.21.3 by @axel7born [gardener/ext-authz-server#23]
# [gardener/apiserver-proxy]

## 🏃 Others

- `[OPERATOR]` Remove unneeded Monitor function from iptables implementation  by @axel7born [gardener/apiserver-proxy#54]
- `[OPERATOR]` Update golang image in verify step to 1.21.3. by @DockToFuture [gardener/apiserver-proxy#56]
# [gardener/etcd-backup-restore]

## 🏃 Others

- `[OPERATOR]` Update alpine base image version to 3.18.4. by @shreyas-s-rao [gardener/etcd-backup-restore#666]

## Docker Images
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.82.0`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.82.0`
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.82.0`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.82.0`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.82.0`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.82.0`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.82.0`
