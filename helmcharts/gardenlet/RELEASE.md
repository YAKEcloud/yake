# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `Seed` API field `spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.backup.credentialsRef`, please adapt your seed manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` Gardener no longer sets the flags `--audit-log-(path|maxsize|maxbackups)` on shoot `kube-apiserver`s, `gardener-apiserver` or Garden's `virtual-garden-kube-apiserver`. If you rely on the audit logs being available in the file `/tmp/audit/audit.log` in the container's file system, please follow [controlplane-webhooks](https://github.com/gardener/gardener/blob/master/docs/extensions/controlplane-webhooks.md#kube-apiserver) and set the required flags via mutating webhook.  by @vpnachev [#11935]
- `[OPERATOR]` The `ManagedSeed` API field `spec.gardenlet.config.seedConfig.spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`, please adapt your managedseed manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` The legacy `support.gardener.cloud/eu-access*` labels and annotations on `CloudProfile`s and `Seed`s are no longer synced automatically. You have to use the new API established in Gardener v1.107 (released in 11/2024). Read more about it [here](https://gardener.cloud/docs/gardener/shoot/access_restrictions/). Please make sure to manually remove these labels and annotations from your `CloudProfile`s and `Seed`s! by @rfranzke [#11913]
- `[OPERATOR]` The `Gardenlet` API field `spec.config.seedConfig.spec.backup.secretRef` has been deprecated and will be removed in a future version of Gardener in favor of `spec.config.seedConfig.spec.backup.credentialsRef`, please adapt your gardenlet manifests to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[OPERATOR]` The `GardenletConfiguration` configuration file field `seedConfig.spec.backup.secretRef` has been deprecated and will be removed in future version of Gardener in favor of `seedConfig.spec.backup.credentialsRef`, please adapt your `GardenletConfiguration` configuration files to use the new `credentialsRef` field.  by @vpnachev [#11583]
- `[USER]` The legacy `support.gardener.cloud/eu-access*` labels and annotations on `Shoot`s are no longer synced automatically. You have to use the new API established in Gardener v1.107 (released in 11/2024). Read more about it [here](https://gardener.cloud/docs/gardener/shoot/access_restrictions/#shoot). Please make sure to manually remove these labels and annotations from your `Shoot`s! by @rfranzke [#11913]
## 📰 Noteworthy

- `[USER]` The CA bundle of the kubelet is now available via a `ConfigMap` the project's namespace, called `<shoot-name>.ca-kubelet`. by @tobschli [#11916]
## ✨ New Features

- `[USER]` The [Stale Project Controller](https://gardener.cloud/docs/gardener/concepts/controller-manager/#stale-projects-reconcilerhttpsgithubcomgardenergardenertreemasterpkgcontrollermanagercontrollerprojectstale) now also considers `WorkloadIdentity` resources when deciding if a `Project` is stale or not. by @dimityrmirchev [#11962]
- `[OPERATOR]` Gardener core components are automatically restarted (due to a failing liveness probe) in case their Kubernetes API server watch caches do not sync for `3m`. by @rfranzke [#11966]
- `[OPERATOR]` The `Seed` API feature new field `spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` Add alpha feature gate `CloudProfileCapabilities` to enable usage of `architecture` capability instead of current architecture fields in machine images and types. by @LucaBernstein [#11736]
- `[OPERATOR]` The `GardenletConfiguration` configuration file feature new field `seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` The `ManagedSeed` API feature new field `spec.gardenlet.config.seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
- `[OPERATOR]` The `Gardenlet` API feature new field `spec.config.seedConfig.spec.backup.credentialsRef`, it is of type `corev1.ObjectReference` and is allowed to refer to a `Secret`.   by @vpnachev [#11583]
## 🐛 Bug Fixes

- `[OPERATOR]` The gardenlet deployer would not try to copy the shoot infrastructure secret for seed backup credentials if the shoot uses workload identity. by @dimityrmirchev [#11983]
- `[DEVELOPER]` The `DumpLogsForPodsWithLabelsInNamespace` function in the test framework now supports dumping pods with multiple containers. by @domdom82 [#11878]
## 🏃 Others

- `[OPERATOR]` Virtual extended resources can now be set on the NodeTemplate without triggering rollout by @elankath [#11809]
- `[OPERATOR]` The `gardener/autoscaler` image has been updated to `v1.32.0`. [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.32.0) by @marc1404 [#11903]
- `[OPERATOR]` The etcd-druid component no longer defines resource limits. by @ialidzhikov [#11973]
- `[OPERATOR]` Fixed an issue, where IPv6 shoots without configured pod and service ranges can't be scheduled on seeds without configured shootDefaults. by @axel7born [#11955]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.19.0` to `v0.19.1`.  by @gardener-ci-robot [#11941]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.29.0` to `v0.29.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.29.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.29.0` to `v0.29.1`.  by @gardener-ci-robot [#11940]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.1` to `v1.12.2`.  by @gardener-ci-robot [#11981]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.79.1` to `1.80.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.80.0) by @gardener-ci-robot [#11976]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.11.5` to `v1.11.6`.  by @gardener-ci-robot [#11968]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ingress-default-backend` from `0.22.0` to `0.23.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.23.0) by @gardener-ci-robot [#11948]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.57.2` to `v0.58.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.58.0)  
  - `github.com/gardener/machine-controller-manager` from `v0.57.2` to `v0.58.0`.  by @gardener-ci-robot [#11963]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.33.2` to `v1.34.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.0) by @gardener-ci-robot [#11883]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/autoscaling/vpa-admission-controller` from `1.3.0` to `1.3.1`.   
  - `registry.k8s.io/autoscaling/vpa-recommender` from `1.3.0` to `1.3.1`.   
  - `registry.k8s.io/autoscaling/vpa-updater` from `1.3.0` to `1.3.1`.  by @gardener-ci-robot [#11985]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/prometheus` from `v3.2.1` to `v3.3.0`.  by @gardener-ci-robot [#11877]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.37.0` to `0.38.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.38.0) by @gardener-ci-robot [#11905]
- `[DEVELOPER]` The `hack/tools/extension-generator` tool now automatically sets the `.spec.deployment.extension.injectGardenKubeconfig: true` field in the generated provider `Extension` resources . by @plkokanov [#11837]
- `[DEVELOPER]` A new flag `-i|--inject-garden-kubeconfig` was added to the `hack/generate-controller-registration.sh` script. When the flag is set, the `injectGardenKubeconfig: true` field is added to the generated `ControllerDeployment`. by @plkokanov [#11837]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.118.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.118.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.118.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.118.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.118.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.118.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.118.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.118.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.118.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.118.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.118.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.118.0`
