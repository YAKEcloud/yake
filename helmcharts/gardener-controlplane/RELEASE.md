# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` `PodTopologySpreadConstraints` webhook in the `gardener-resource-manager` is disabled for seeds unconditionally and for shoots which doesn't disable kubernetes feature gate `MatchLabelKeysInPodTopologySpread` explicitly. by @shafeeqes [#11497]
- `[OPERATOR]` `TokenInvalidator` controller and webhook in the `gardener-resource-manager` are removed.   by @shafeeqes [#11497]
- `[DEVELOPER]` The `github.com/gardener/gardener/pkg/utils/gardener.ReconcileTopologyAwareRoutingMetadata` func in deperecated in favor of `github.com/gardener/gardener/pkg/utils/gardener.ReconcileTopologyAwareRoutingSettings`. by @ialidzhikov [#11178]
## 📰 Noteworthy

- `[OPERATOR]` The [`ServiceTrafficDistribution`](https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution) feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#11178]
- `[DEVELOPER]` `fluent-operator` APIs and CRDs are updated from v2 to v3 by @nickytd [#11673]
- `[USER]` The `updateStrategy` of existing machine images in a `CloudProfile` can now be overridden in a `NamespacedCloudProfile`. by @LucaBernstein [#11550]
## ✨ New Features

- `[OPERATOR]` The `injectGardenKubeconfig` field is defaulted to `true` for extensions responsible for `Worker` resources when registered via the `operator.gardener.cloud/v1alpha1.Extension` API. by @rfranzke [#11658]
- `[OPERATOR]` You can use `.spec.virtualCluster.gardener.gardenerAPIServer.goAwayChance` in the `Garden` API to specify the probability for randomly closing a connection (GOAWAY) in order to prevent HTTP/2 clients from getting stuck on a single `gardener-apiserver`. by @rfranzke [#11551]
- `[USER]` `NamespacedCloudProfile.spec.limits.maxNodesTotal` can be used to override the limit of the maximum number of nodes a shoot can have during runtime, as defined in the parent `CloudProfile`. See [the documentation](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_limits.md) for more details. by @LucaBernstein [#11647]
- `[USER]` If the Gardener operator has defined a control plane wildcard certificate, the `.status.advertisedAddresses` of the `Shoot` contain an entry with an endpoint secured by this certificate. Note that this endpoint is specific to the seed cluster the `Shoot` is scheduled to. Read all about it in [this document](https://github.com/gardener/gardener/blob/master/docs/usage/shoot/shoot_access.md). by @rfranzke [#11612]
- `[USER]` The feature gate `NewVPN` has been graduated to `Beta` and is now enabled by default. by @ScheererJ [#11693]
## 🐛 Bug Fixes

- `[USER]` A bug causing race condition in the `kube-proxy` pod related to concurrent modifications of iptables rules was fixed. by @AleksandarSavchev [#11668]
- `[USER]` Fix authentication panel in API server Plutono dashboard for Shoot clusters by @chrkl [#11667]
## 🏃 Others

- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.1` to `1.30.2`.  by @gardener-ci-robot [#11628]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.56.1` to `v0.57.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.57.0)  
  - `github.com/gardener/machine-controller-manager` from `v0.56.1` to `v0.57.0`.  by @gardener-ci-robot [#11620]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.21` to `v2.2.22`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.22) by @gardener-ci-robot [#11664]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.36.0` to `0.37.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.37.0) by @gardener-ci-robot [#11677]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.36` to `v7.5.37`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.37) by @gardener-ci-robot [#11663]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.28.0` to `v0.28.1`.  by @gardener-ci-robot [#11625]
- `[OPERATOR]` Added field `OCIRepository.PullSecretRef` for pulling helm charts from repositories with access restrictions. by @MartinWeindel [#11324]
- `[OPERATOR]` The ports used by provider-local can now be specified via helm values. by @ScheererJ [#11700]
- `[OPERATOR]` `CreateShoot` testdefinition exposes `minAllowed` options for control plane by @hendrikKahl [#11637]
- `[OPERATOR]` The gardener-node-agent is now able to deal with the new version v3 of containerd's configuration file `/etc/containerd/config.toml`. As this new version of the configuration file comes with a new structure of certain configuration options, gardener-node-agent must be able to write configuration changes to different locations within the file based on its version. If it detects this config file to be version 3, it will write all relevant configuration changes to the new config keys. In addition, for any plugins inserted through an OSC `PluginConfiguration`, it will check if its path matches a typical v2 compliant path prefix and will translate it to the equivalent v3 compliant path prefix. by @MrBatschner [#11623]
- `[OPERATOR]` Upgrade Prometheus to v3.2 by @vicwicker [#11552]
- `[OPERATOR]` Garden and Seed cluster component containers, which do not require privilege escalations, now forbid privilege escalation explicitly. by @georgibaltiev [#11519]
- `[OPERATOR]` The `gardener/autoscaler` image has been updated to `v1.31.0`. [Release Notes](https://github.com/gardener/autoscaler/releases/tag/v1.31.0) by @aaronfern [#11646]
- `[OPERATOR]` Enable the `VerticalPodAutoscalerCappedRecommendation` alerts by @vicwicker [#11622]
- `[OPERATOR]` `gardener-apiserver` is now deployed with a fixed number of replicas (HA configuration: 3, non-HA configuration: 2). It does not use `HPA` anymore. by @oliver-goetz [#11684]
- `[OPERATOR]` `gardener-operator` rejects deletion requests for `Extension`s deemed required for the landscape.  by @timuthy [#11606]
- `[DEVELOPER]` The `ObjectNames()` function of `github.com/gardener/gardener/test/utils/matchers` can be used to modify `object.Object` lists to a `[]string` with their name. This is useful in tests to avoid using `gstruct` matchers that bloat the test output. by @tobschli [#11616]
- `[DEVELOPER]` The [component checklist](https://github.com/gardener/gardener/blob/v1.115.0/docs/development/component-checklist.md) now recommends setting `revisionHistoryLimit=2` for `DaemonSet`s as well. by @rfranzke [#11659]
- `[DEVELOPER]` Allow to configure bootstrapping control plane nodes with controller installations by setting `hostNetwork`, `replicas`, `tolerations` and usable ports. by @ScheererJ [#11527]
- `[DEVELOPER]` An issue causing the VPN tunnel test-machinery integration test to fail is now fixed. by @ialidzhikov [#11716]
## 📖 Documentation

- `[USER]` Add documentation on how to federate metrics from the shoot Prometheus into an external Prometheus instance by @vicwicker [#11609]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.115.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.115.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.115.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.115.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.115.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.115.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.115.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.115.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.115.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.115.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.115.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.115.0`
