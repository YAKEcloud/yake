# [gardener/gardener-extension-provider-gcp]

## ⚠️ Breaking Changes

- `[USER]` [csi-snapshotter] Enable prevent-volume-mode-conversion feature flag by default. Volume mode change can still be triggered with the respective annotations. You can read more in the [KEP](https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/3141-prevent-volume-mode-conversion) by @kon-angelo [#719]
- `[OPERATOR]` `provider-gcp` no longer supports Shoots with Кubernetes version == 1.24. by @shafeeqes [#677]
## 📰 Noteworthy

- `[USER]` Added support for the `EnableDynamicPortAllocation` flag and the related configuration of the related `MaxPortsPerVM` value on cloudNATs.  
  `IcmpIdleTimeoutSec`, `TcpEstablishedIdleTimeoutSec`, `TcpTimeWaitTimeoutSec`, `TcpTransitoryIdleTimeoutSec`, and `UdpIdleTimeoutSec` can now be configured on cloudNATs.  by @AndreasBurger [#706]
- `[USER]` `DisableGardenerServiceAccountCreation` feature gate has been promoted to beta and therefore is enabled by default. by @AndreasBurger [#711]
## ✨ New Features

- `[DEVELOPER]` Dependency update to `github.com/gardener/gardener@v1.90.4`. by @oliver-goetz [#714]
## 🐛 Bug Fixes

- `[DEVELOPER]` `source-` prefix of `BackupEntry` name is being ignored when performing entry deletion by @Kostov6 [#710]
## 🏃 Others

- `[OPERATOR]` [infrastructure] General stability flow reconciliation improvements. by @kon-angelo [#715]
- `[OPERATOR]` add os information as labels in machine class objects. by @tedteng [#689]
- `[OPERATOR]` NodeGroupAutoscalingOptions can now be specified per worker group via the worker through the field `worker.spec.pools.clusterAutoscaler` by @aaronfern [#733]
- `[USER]` An error text which better indicates the reason for the failure is displayed when a user tries to create a `SecretBinding` resource which references a `Secret` with a `serviceaccount.json` field in invalid json format. by @plkokanov [#723]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update go -> v1.21.5 by @kon-angelo [gardener/terraformer#146]
- `[OPERATOR]` Update alpine -> v1.29.0 by @kon-angelo [gardener/terraformer#146]

## Docker Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.35.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.35.0`
