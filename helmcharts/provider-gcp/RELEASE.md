# [gardener/gardener-extension-provider-gcp]

## 📰 Noteworthy

- `[OPERATOR]` Use `cloud-controller-manager@v32.2.2` for Kubernetes >= v1.32 by @marc1404 [#990]
## 🏃 Others

- `[OPERATOR]` Improved credentials configuration validation. by @dimityrmirchev [#1061]
- `[OPERATOR]` The `csi-snapshot-webhook-vpa` VerticalPodAutoscaler and the `csi-snapshot-validation` PodDisruptionBudget are now also cleaned up during the deletion of the legacy `csi-snapshot-validation` resources. by @ialidzhikov [#1068]
- `[OPERATOR]` Add support for single-stack to dual-stack network migration. by @DockToFuture [#1010]
- `[OPERATOR]` The legacy method of providing monitoring configuration via `ConfigMap`s labeled with `extensions.gardener.cloud/configuration=monitoring` has been removed. The extension does now only uses the [new contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring) for providing monitoring configuration. Before upgrading to this version of the extension, make sure that the deployed Gardener version supports the [new monitoring contract](https://github.com/gardener/gardener/blob/v1.101.1/docs/extensions/logging-and-monitoring.md#monitoring). by @RadaBDimitrova [#1032]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#1031]
- `[OPERATOR]` Update CSI driver from v1.15.4 to v1.17.12 by @hebelsan [#1062]
- `[OPERATOR]` Update gardener/gardener to v1.118.0. by @ScheererJ [#1057]
- `[OPERATOR]` Update `gardener/gardener` to `v1.117.0` [Release Notes](https://github.com/gardener/gardener/releases/tag/v1.117.0). by @acumino [#1042]
- `[OPERATOR]` In dual-stack clusters, services of type `LoadBalancer` will automatically created as dual-stack load balancers. by @ScheererJ [#1001]
- `[OPERATOR]` Obsolete ClusterRoles and ClusterRoleBindings that were leftovers from the machine-controller-manager component are now cleaned up. by @georgibaltiev [#1064]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#989]
- `[OPERATOR]` `provider-gcp` no longer supports Shoots with Кubernetes version <= 1.26. by @RadaBDimitrova [#879]
- `[OPERATOR]` Include errors related to locating user-managed resources in the known error set. by @hebelsan [#1044]
- `[OPERATOR]` Remove the `podAntiAffinity` in the deployment in favor of only `TopologySpreadConstraints`. by @LucaBernstein [#1052]
- `[OPERATOR]` The images built by the GCP provider-extension are now multiarch-images, supporting x86_64 and arm64 by @AndreasBurger [#1037]
- `[OPERATOR]` Add missing list permissions for the vpa.  by @kon-angelo [#1075]
- `[OPERATOR]` The [`ServiceTrafficDistribution`](https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution) feature is being used on to make Services topology-aware when the runtime Kubernetes version is 1.31+. by @ialidzhikov [#949]
- `[DEPENDENCY]` Update csi images:  
  csi-attacher: v4.8.0 -> v4.8.1  
  csi-resizer: v1.13.1 -> v1.13.2  
  csi-snapshotter: v8.2.0 -> v8.2.1  
  csi-snapshot-controller: v8.2.0 -> v8.2.1 by @hebelsan [#1072]
# [gardener/terraformer]

## 🏃 Others

- `[OPERATOR]` Update gardener to v1.117.0 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update fsnotify to v1.9.0 by @hebelsan [gardener/terraformer#162]
- `[OPERATOR]` Update aws-sdk-go to v1.55.7 by @hebelsan [gardener/terraformer#162]

## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.44.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.44.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.44.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.44.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.44.0`
