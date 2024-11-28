# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The HVPA autoscaling option (which is unconditionally disabled since v1.105.0) is removed from the `etcd` component. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @plkokanov [#10800]
- `[OPERATOR]` The `Baseline` and `HVPA` autoscaling modes (which are unconditionally disabled since v1.105.0) are removed for `{gardener,kube}-apiserver`. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @plkokanov [#10796]
- `[OPERATOR]` The deprecated and unconditionally disabled `HVPA` and `HVPAForShootedSeed` feature gates are removed. The GA-ed and unconditionally enabled `VPAForETCD` and `VPAAndHPAForAPIServer` features gates are removed. If you have references to the feature gates, clean them up before upgrading to this version of Gardener. by @ialidzhikov [#10853]
- `[DEVELOPER]` Rename the controlplane exposure webhook (`ExposureWebhookName`) to seed provider webhook (`SeedProviderWebhookName`). by @LucaBernstein [#10788]
## 📰 Noteworthy

- `[OPERATOR]` The `gardener-scheduler` was improved to consider reconciliation backoffs. In the past, unassigned shoots were affected by frequent scheduler reconciliations and status updates which potentially strained the scheduler and etcd. by @timuthy [#10821]
- `[DEVELOPER]` extension library: Provider extensions should rename control plane exposure webhook related packages to seed provider to reflect the naming change on their side (for example rename `pkg/webhook/controlplaneexposure` to `pkg/webhook/seedprovider`). by @LucaBernstein [#10788]
## ✨ New Features

- `[OPERATOR]` `NodeAgentAuthorizer` feature gate was introduced. It allows a webhook based authorization of `gardener-node-agents` with reduced permissions.  
  ❗ This feature gate requires changes in `machine-controller-manager-provider-*`. Please check that you run a supported version before activating it. ❗ by @oliver-goetz [#10781]
- `[USER]` Allow dual-stack shoots creation. by @axel7born [#10803]
- `[USER]` shoot spec.kubernetes.clusterAutoscaler: Add support for startupTaints and statusTaints by @dhague [#10858]
## 🐛 Bug Fixes

- `[USER]` Fixed a bug where SSH key rotations for `Shoot`s did not properly update the authorized keys on the worker nodes (hence, the new key was unusable until a node restart or rollout). by @tobschli [#10671]
- `[USER]` On `Shoot` deletion, Gardener now properly skips certain validation checks that are only relevant for creations or updates of `Shoot` resources. by @rfranzke [#10902]
- `[OPERATOR]` Fixed an error in `BackupBucket` reconciliation by replacing `StrategicMergePatch` with `MergePatch` to properly handle `runtime.RawExtension` fields. by @seshachalam-yv [#10904]
## 🏃 Others

- `[OPERATOR]` update alpine to get latest security fixes by @DockToFuture [#10922]
- `[OPERATOR]` Add support for `node-local-dns` in dual-stack cluster. by @axel7born [#10891]
- `[OPERATOR]` Add dual stack support for VPN. by @DockToFuture [#10767]
- `[OPERATOR]` Fix kubelet CSRs to allow IPv6 addresses to be used by @kron4eg [#10876]
- `[OPERATOR]` Add dashboard for VPA admission-controller by @voelzmo [#10741]
- `[OPERATOR]` The HVPA component is removed. Before updating to this version of Gardener, make sure that you upgraded to v1.106.0 and all Seed and Garden resources reconciled with that version. This is required to ensure that the HVPA component and its CRD were properly cleaned up. by @ialidzhikov [#10851]
- `[OPERATOR]` Added validation for `issuerURL` in the OIDC configuration to reject URLs containing fragments. by @acumino [#10888]
- `[OPERATOR]` The `gardener/dependency-watchdog` image has been updated to `v1.3.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.3.0) by @rishabh-11 [#10930]
- `[OPERATOR]` Adapt `configure-admission.sh` for new extension releases with changed value names for Helm charts. by @MartinWeindel [#10877]
- `[DEPENDENCY]` The `registry.k8s.io/cpa/cluster-proportional-autoscaler` image has been updated to `v1.9.0`. by @gardener-ci-robot [#10898]
- `[DEPENDENCY]` The `gardener/autoscaler` image has been updated to `v1.30.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.30.1) by @gardener-ci-robot [#10914]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.30.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.30.0) by @gardener-ci-robot [#10872]
- `[DEPENDENCY]` The `registry.k8s.io/coredns/coredns` image has been updated to `v1.11.4`. by @gardener-ci-robot [#10856]
- `[DEPENDENCY]` The `gardener/gardener-discovery-server` image has been updated to `v0.3.0`. [Release Notes](https://redirect.github.com/gardener/gardener-discovery-server/releases/tag/v0.3.0) by @gardener-ci-robot [#10849]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.25.0`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.25.0) by @gardener-ci-robot [#10932]
- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.55.0`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.0) by @rishabh-11 [#10908]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.109.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.109.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.109.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.109.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.109.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.109.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.109.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.109.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.109.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.109.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.109.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.109.0`
