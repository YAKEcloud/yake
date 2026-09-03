# [github.com/gardener/gardener-extension-provider-aws:v1.74.0]

## 📰 Noteworthy
- `[OPERATOR]` The `MTUCustomizer` feature gate has been promoted to beta, defaulting to `false`. In a future release the feature gate will be promoted to GA and reenabling the MTU-Customizer deployment in Seeds will no longer be possible by @AndreasBurger [[#1907](https://github.com/gardener/gardener-extension-provider-aws/pull/1907)]

## ✨ New Features
- `[OPERATOR]` Set supported extension classes for controllers by @hebelsan [[#1884](https://github.com/gardener/gardener-extension-provider-aws/pull/1884)]
- `[USER]` The new shoot annotation `aws.provider.extensions.gardener.cloud/force-detach-role-policies: "true"` allows the infrastructure deletion flow to detach all remaining (out-of-band) managed policies from the nodes IAM role, delete its remaining inline policies, and remove remaining instance-profile associations before deleting the role. This lets shoot deletion succeed when policies were attached to the nodes role outside of Gardener (e.g. by account-governance automation), without resorting to force-deletion. The annotation can also be set on a shoot whose deletion is already stuck on a `DeleteConflict` error; retry the operation afterwards. by @amendezsap [[#1957](https://github.com/gardener/gardener-extension-provider-aws/pull/1957)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix subnet describe race condition after creation due to EC2 eventual consistency by @hebelsan [[#1948](https://github.com/gardener/gardener-extension-provider-aws/pull/1948)]
- `[OPERATOR]` fix EFS FindFileSystemsByTags pagination by @hebelsan [[#1959](https://github.com/gardener/gardener-extension-provider-aws/pull/1959)]
- `[OPERATOR]` Support switching to byo eip with the one gardener created by @hebelsan [[#1955](https://github.com/gardener/gardener-extension-provider-aws/pull/1955)]

## 🏃 Others
- `[OPERATOR]` The update mode of the VerticalPodAutoscaler resources deployed by the gardener-extension-provider-aws is now explicitly set to `InPlaceOrRecreate`, reflecting the actual runtime behavior after the unconditional enablement of the `VPAInPlaceUpdates` feature gate. by @DobromirNPeev [[#1900](https://github.com/gardener/gardener-extension-provider-aws/pull/1900)]
- `[OPERATOR]` Extends the `PersistentVolumeClaimAutoscaler` mutating webhook to default and enforce a minimum `MinStepAbsolute` of `5Gi` on scale-up policies, alongside the existing `CooldownDuration` defaulting. by @RadaBDimitrova [[#1919](https://github.com/gardener/gardener-extension-provider-aws/pull/1919)]
- `[OPERATOR]` Add support for machine preservation by distributing the value of `worker[].machineControllerManager.autoPreserveFailedMachineMax` across zones. by @thiyyakat [[#1941](https://github.com/gardener/gardener-extension-provider-aws/pull/1941)]
- `[OPERATOR]` An erroneous network policy annotation in CSI driver controller service has been fixed. by @oliver-goetz [[#1943](https://github.com/gardener/gardener-extension-provider-aws/pull/1943)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-driver: v1.64.0 -> v1.65.0 (singleton) by @federated-github-access[bot] [[#1969](https://github.com/gardener/gardener-extension-provider-aws/pull/1969)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v3.4.0 -> v3.5.0 (singleton)  
    - csi-driver: v1.62.0 -> v1.63.1 (singleton)  
    - csi-driver-efs: v3.3.0 -> v3.4.1 (singleton) by @federated-github-access[bot] [[#1882](https://github.com/gardener/gardener-extension-provider-aws/pull/1882)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-driver: v1.63.1 -> v1.64.0 (singleton)  
    - csi-driver-efs: v3.4.1 -> v3.4.2 (singleton) by @federated-github-access[bot] [[#1958](https://github.com/gardener/gardener-extension-provider-aws/pull/1958)]

## application/spdx+json
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:257260652f92e88fb5458c723a53a346ec89f49d042acdd72493db66564d0625`
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:53e7fefe5eb484b9635635c11892f7f9f4d4f9ae86bb6a7a3116860506b23b64`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:06f4c5aeddc4287fa250ca3607be35a9e2e462a9d7e34fc43070506da764d79d`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:d7917e32d4a7298cc2b5bfc02c878c3e254b8f5e47f0fa6e6d87536c9fb8c5eb`
## application/vnd.cyclonedx+json
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:98495abb4ea48d4deaaf29b3989df135aa27a152915309c6fa81874192fe2879`
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:eb52ee150bc3f33fc99473c02f5d5201ec1fb1d2371d8833f304ebc8154ad85b`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:0e232ca9959494d20081b67756718ccdf73d3c87565fa3bd09ac6dd1a009a4d4`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:e462c0b7b061fa1370af92f4ae25ac67fa8dc1ab5ef198498cc310c93224cfc6`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.74.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.74.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.74.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.74.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.74.0`
