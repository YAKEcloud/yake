# [gardener/gardener]

## ⚠️ Breaking Changes

- `[USER]` The `url` annotation in `<shoot-name>.monitoring` secrets in the project namespace is deprecated and will be removed soon. Please use the `plutono-url` annotation instead. by @oliver-goetz [#10735]
- `[OPERATOR]` There is an incompatible change in the `Garden` (`gardens.operator.gardener.cloud`) custom resource, which required manual action:  
  - Fields `.spec.virtualCluster.dns.domains` and `.spec.runtimeCluster.ingress.domains` were changed from type string to object with a field `name` and an optional field `provider`,  e.g., in `JSON` format, replace `"domains": ["domain1.example.com", "domain2.example.com"]` with `"domains": [{"name": "domain1.example.com"}, {"name": "domain2.example.com"}]`.  
  - `.spec.runtimeCluster.ingress.domains` is required now  
  - `.spec.virtualCluster.dns.domains` is required now by @MartinWeindel [#10645]
- `[OPERATOR]` The optional deployment of cert-management component has been removed. As it was only introduced recently and probably not used, this change should have no impact typically. by @MartinWeindel [#10802]
## 📰 Noteworthy

- `[USER]` Allow changing `shoot.spec.cloudProfile` between `CloudProfile` and its descendant `NamespacedCloudProfile`s. by @LucaBernstein [#10811]
## ✨ New Features

- `[USER]` Allow for custom machine images in `NamespacedCloudProfile`s and add the `spec.providerConfig` field. by @LucaBernstein [#10629]
- `[USER]` The URLs of Shoot `plutono`, `prometheus` and `alertmanager` are now stored as annotations in `<shoot-name>.monitoring` secret in the project namespace. by @oliver-goetz [#10735]
- `[OPERATOR]` Enhance the `gardener-operator` to deploy `DNSRecords` and `BackupBucket` for the virtual garden resource.  
  `DNSRecords` are only deployed if at least one provider is specified at `.spec.dns.providers` in the `Garden` resource.  
  A `BackupBucket` is created if the `.spec.virtualCluster.etcd.backup` section is specified. An existing backup bucket on the infrastructure becomes automatically managed this way. by @MartinWeindel [#10645]
- `[DEVELOPER]` gardener-apiserver: The `ExtensionLabels` admission plugin now also sets labels to `WorkloadIdentity`s. by @dimityrmirchev [#10786]
## 🐛 Bug Fixes

- `[DEVELOPER]` `gardener-node-agent` applies inline files before applying containerd registries now. by @oliver-goetz [#10831]
## 🏃 Others

- `[DEPENDENCY]` The `registry.k8s.io/kube-state-metrics/kube-state-metrics` image has been updated to `v2.14.0`. by @gardener-ci-robot [#10818]
- `[DEPENDENCY]` The `quay.io/prometheus/prometheus` image has been updated to `v2.55.1`. by @gardener-ci-robot [#10804]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.24.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.24.1) by @gardener-ci-robot [#10843]
- `[OPERATOR]` Fixed an issue that that could occur during control plane migration causing the `core.gardener.cloud/v1beta1.BackupEntry` to be reconciled after it was successfully migrated, but before it was restored. by @plkokanov [#10761]
- `[OPERATOR]` The deployment of `BackupBucket` resource in the runtime cluster is skipped if no suitable operator extension is deployed. by @MartinWeindel [#10837]
- `[OPERATOR]` Following components in gardener logging stack are updated: fluent-operator to v3.2.0, fluent-bit to v3.1.8, gardener/logging to v0.62.0 by @nickytd [#10790]
- `[OPERATOR]` The following image has been updated:  
  - europe-docker.pkg.dev/gardener-project/releases/gardener/autoscaler/vertical-pod-autoscaler/vpa-recommender: 1.2.1 -> 1.2.1-gardener-build.3 ([Release notes vpa-1.2.1-gardener-build.2](https://github.com/gardener/autoscaler/releases/tag/vpa-1.2.1-gardener-build.2) and [Release notes vpa-1.2.1-gardener-build.3](https://github.com/gardener/autoscaler/releases/tag/vpa-1.2.1-gardener-build.3)) by @ialidzhikov [#10785]
- `[DEVELOPER]` The `hack/sast.sh` script accepts two new optional flags:  
  - `--exclude-dirs`: comma-separated list of dirs to exclude  
  - `--report-dir`: where to store the gosec report by @Kostov6 [#10766]
- `[DEVELOPER]` The provider-local admission is now deployed with the local kind setup. by @LucaBernstein [#10629]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.108.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.108.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.108.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.108.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.108.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.108.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.108.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.108.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.108.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.108.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.108.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.108.0`
