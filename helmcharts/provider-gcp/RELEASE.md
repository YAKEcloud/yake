# [github.com/gardener/gardener-extension-provider-gcp:v1.49.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` `provider-gcp` no longer supports Shoots with Кubernetes version <= 1.29. by @marc1404 [[#1259](https://github.com/gardener/gardener-extension-provider-gcp/pull/1259)]
- `[OPERATOR]` ETCD backup config in the provider-chart no longer requires an additional `backup` yaml-level to render as expected by @AndreasBurger [[#1270](https://github.com/gardener/gardener-extension-provider-gcp/pull/1270)]

## 📰 Noteworthy
- `[OPERATOR]` The feature gate DisableGardenerServiceAccountCreation is now marked as deprecated and will be removed in v1.52 by @hebelsan [[#1269](https://github.com/gardener/gardener-extension-provider-gcp/pull/1269)]

## ✨ New Features
- `[OPERATOR]` It is possible to enable profiling for the extension by setting `.Values.config.profiling`. by @dimityrmirchev [[#1007](https://github.com/gardener/gardener-extension-provider-gcp/pull/1007)]
- `[USER]` Update `VolumeAttributesClass` enablement for clusters <= `v1.34`. If annotated the kube-apiserver, kube-scheduler, kube-controller-manager will get the VAC feature gate enabled automatically. by @kon-angelo [[#1274](https://github.com/gardener/gardener-extension-provider-gcp/pull/1274)]

## 🐛 Bug Fixes
- `[OPERATOR]` Downgrade csi-provisioner and csi-resizer for K8S <= 1.33 to make VolumeAttributesClass available for K8S <= 1.33 (v1beta1 + enabled featureGate) and K8S >= 1.34 (v1). by @wpross [[#1260](https://github.com/gardener/gardener-extension-provider-gcp/pull/1260)]
- `[OPERATOR]` Fix NPE if `.spec.targetSystem.providerConfig.credentialsConfig` section in a `WorkloadIdentity` resource is not set. by @MartinWeindel [[#1258](https://github.com/gardener/gardener-extension-provider-gcp/pull/1258)]
- `[OPERATOR]` Fixed issue when validating a backupBucket without providerConfig. by @wpross [[#1279](https://github.com/gardener/gardener-extension-provider-gcp/pull/1279)]

## 🏃 Others
- `[OPERATOR]` Add strict topology flag to the external provisioner of the block CSI controller deployment. by @hebelsan [[#1264](https://github.com/gardener/gardener-extension-provider-gcp/pull/1264)]
- `[OPERATOR]` Another fix of path to log file in build-job by @heldkat [[#1307](https://github.com/gardener/gardener-extension-provider-gcp/pull/1307)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#1305](https://github.com/gardener/gardener-extension-provider-gcp/pull/1305)]
- `[OPERATOR]` Add input validation for DNS provider secrets referenced in the shoot spec. by @wpross [[#1257](https://github.com/gardener/gardener-extension-provider-gcp/pull/1257)]
- `[OPERATOR]` Fix infrastructure status to correctly use spec IP families during single-stack to dual-stack migration. by @axel7born [[#1255](https://github.com/gardener/gardener-extension-provider-gcp/pull/1255)]
- `[OPERATOR]` Extension-provider logging config can now be changed via helm-values by @AndreasBurger [[#1270](https://github.com/gardener/gardener-extension-provider-gcp/pull/1270)]
- `[USER]` Adds support for GCP Storage Pools by @hebelsan [[#1046](https://github.com/gardener/gardener-extension-provider-gcp/pull/1046)]
- `[DEVELOPER]` Adds DNS Record integration tests by @matthias-horne [[#1009](https://github.com/gardener/gardener-extension-provider-gcp/pull/1009)]
- `[DEPENDENCY]` Updated dependency `gardener/gardener` to `v1.134.0` ([Release Notes](https://github.com/gardener/gardener/releases/tag/v1.134.0)). by @marc1404 [[#1259](https://github.com/gardener/gardener-extension-provider-gcp/pull/1259)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v34.1.0 -> v34.2.0 (minor) by @gardener-github-actions[bot] [[#1249](https://github.com/gardener/gardener-extension-provider-gcp/pull/1249)]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.49.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.49.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.49.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.49.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.49.0`
