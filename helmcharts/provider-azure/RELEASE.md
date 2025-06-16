# [gardener/gardener-extension-provider-azure]

## 🐛 Bug Fixes

- `[USER]` Fixed a bug which was causing the `remedy-controller` to not be able to create and patch `events` by @AleksandarSavchev [#1196]
## 🏃 Others

- `[DEPENDENCY]` Update csi-driver-disk from v1.31.2 to v1.32.4 by @hebelsan [#1158]
- `[DEPENDENCY]` Patch csi-resizer, csi-snapshot-controller, csi-snapshotter and csi-attacher by @hebelsan [#1158]
- `[DEPENDENCY]` Patch versions of cloud-controller-manager by @hebelsan [#1158]
- `[DEPENDENCY]` Patch versions of cloud-node-manager by @hebelsan [#1158]
- `[DEPENDENCY]` Update csi-driver-file from v1.31.2 to v1.32.1 by @hebelsan [#1158]
- `[OPERATOR]` Obsolete ClusterRoles and ClusterRoleBindings that were leftovers from the machine-controller-manager component are now cleaned up. by @georgibaltiev [#1176]
- `[OPERATOR]` The images built by the Azure provider-extension are now multiarch-images, supporting x86_64 and arm64 by @AndreasBurger [#1118]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#1140]
- `[OPERATOR]` Update gardener/gardener to v1.118.0. by @ScheererJ [#1170]
- `[OPERATOR]` Remove the `podAntiAffinity` in the deployment in favor of only `TopologySpreadConstraints`. by @LucaBernstein [#1165]
- `[OPERATOR]` The `csi-snapshot-webhook-vpa` VerticalPodAutoscaler and the `csi-snapshot-validation` PodDisruptionBudget are now also cleaned up during the deletion of the legacy `csi-snapshot-validation` resources. by @ialidzhikov [#1177]
- `[OPERATOR]` The [`ServiceTrafficDistribution`](https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution) feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#1070]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#1108]
- `[OPERATOR]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#1142]
- `[OPERATOR]` Update `gardener/gardener` to `v1.117.0` [Release Notes](https://github.com/gardener/gardener/releases/tag/v1.117.0). by @acumino [#1150]
- `[DEVELOPER]` replace/remove github.com/Azure/go-autorest/autorest by @hebelsan [#1160]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update gardener to v1.117.0 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update aws-sdk-go to v1.55.7 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update fsnotify to v1.9.0 by @hebelsan [gardener/terraformer#162]

## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.53.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.53.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.53.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.53.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.53.0`
