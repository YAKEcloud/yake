---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update os-ubuntu to <code>1.23.0</code></b></summary>

# [gardener/gardener-extension-os-ubuntu]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-os-ubuntu` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#82]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8551]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8551]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1`

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.1</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` The two additional labels `worker.gardener.cloud/image-name` and `worker.gardener.cloud/image-version` that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the `kubelet` to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their `Pod`s to become temporarily unready. by @gardener-ci-robot [#8551]

## Docker Images
admission-controller: `eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1`
apiserver: `eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1`
controller-manager: `eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1`
scheduler: `eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1`
operator: `eu.gcr.io/gardener-project/gardener/operator:v1.80.1`
gardenlet: `eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1`
resource-manager: `eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1`

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.2</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug causing unnecessary reorder of extension in `Shoot` `spec.extensions` is fixed. by @gardener-ci-robot [#8575]
- `[OPERATOR]` Fixed a possibility for the `migrate` phase of control plane migration to become permanently stuck if the shoot was created when the `MachineControllerManagerDeployment` feature gate is disabled, control plane migration is triggered for the shoot and the feature gate is enabled during the migration phase. by @gardener-ci-robot [#8570]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @gardener-ci-robot [#8580]

</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.80.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @gardener-ci-robot [#8580]

</details>

<details>
<summary><b>Update gardenlet to <code>1.80.3</code></b></summary>

# [gardener/gardener]

## 🐛 Bug Fixes

- `[USER]` A bug has been fixed that prevented users without permissions to list `CustomResourceDefinition`s from interacting with the Gardener APIs when using a `kubectl` version lower than `1.27`. by @gardener-ci-robot [#8580]

</details>

<details>
<summary><b>Update provider-openstack to <code>1.37.0</code></b></summary>

# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Included `UnavailableReplicas` in determining if a machine deployment status update is needed by @rishabh-11 [gardener/machine-controller-manager#833]
- `[OPERATOR]` Force drain and delete volume attachments for nodes un-healthy due to `ReadOnlyFileSystem` and `NotReady` for too long by @elankath [gardener/machine-controller-manager#839]
- `[OPERATOR]` An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed by @acumino [gardener/machine-controller-manager#814]
- `[USER]` An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. by @rishabh-11 [gardener/machine-controller-manager#821]
## 🏃 Others

- `[DEVELOPER]` status.Status now captures underline cause, allowing consumers to introspect the error returned by the provider. WrapError() function could be used to wrap the provider error by @unmarshall [gardener/machine-controller-manager#842]
- `[DEVELOPER]` Removed dead metrics code and refactored the remaining metrics code by @himanshu-kun [gardener/machine-controller-manager#823]
- `[DEVELOPER]` A new make target is introduced to add license headers. by @unmarshall [gardener/machine-controller-manager#845]
- `[DEVELOPER]` Bump `k8s.io/*` deps to v0.27.2 by @afritzler [gardener/machine-controller-manager#820]
- `[OPERATOR]` Added a new metric that will allow to get the number of stale (due to unhealthiness) machines  that are getting terminated by @jguipi [gardener/machine-controller-manager#808]
- `[OPERATOR]` Updated to go v1.20.5 by @rishabh-11 [gardener/machine-controller-manager#827]
- `[OPERATOR]` Makefile targets have changed: Introduced gardener-setup, gardener-restore, gardener-local-mcm-up, non-gardener-setup, non-gardener-restore,  non-gardener-local-mcm-up. Users can also directly use the scripts which are used by these makefile targets. by @unmarshall [gardener/machine-controller-manager#852]
- `[OPERATOR]` Added `errorCode` field in the `LastOperation` struct. This should be implemented only for the `CreateMachine` call in the `triggerCreationFlow`. This field will be utilized by Cluster autoscaler to do early backoff  by @rishabh-11 [gardener/machine-controller-manager#851]
- `[OPERATOR]` New metrics introduced:   
  - api_request_duration_seconds -> tracks time taken for successful invocation of provider APIs. This metric can be filtered by provider and service.  
  - driver_request_duration_seconds -> tracks total time taken to successfully complete driver method invocation. This metric can be filtered by provider and operation.  
  - driver_requests_failed_total -> records total number of failed driver API requests. This metric can be filtered by provider, operations and error_code. by @unmarshall [gardener/machine-controller-manager#842]
# [gardener/gardener-extension-provider-openstack]

## ⚠️ Breaking Changes

- `[OPERATOR]` `provider-openstack` no longer supports Shoots or Seeds with Кubernetes version < 1.24. by @shafeeqes [#670]
## 🏃 Others

- `[OPERATOR]` Enable propagating pod routes to nodes without overlay network by @ScheererJ [#654]
- `[OPERATOR]` updated image csi-attacher -> `v4.4.0` by @kon-angelo [#675]
- `[OPERATOR]` updated image manila-csi-plugin `v1.27.1`-> `v1.27.2` by @kon-angelo [#675]
- `[OPERATOR]` updated image snapshot-controller -> `v6.3.0` by @kon-angelo [#675]
- `[OPERATOR]` updated image livenessprobe -> `v2.11.0` by @kon-angelo [#675]
- `[OPERATOR]` Add manila topology labels to machines. This enables scaling from 0 for pods depending on manila volumes. by @kon-angelo [#674]
- `[OPERATOR]` updated image cinder-csi-plugin `v1.27.1`-> `v1.27.2` by @kon-angelo [#675]
- `[OPERATOR]` updated image cloud-provider-openstack `v1.27.1`-> `v1.27.2` by @kon-angelo [#675]
- `[OPERATOR]` updated image csi-provisioner -> `v3.6.0` by @kon-angelo [#675]
- `[OPERATOR]` updated image csi-resizer -> `v1.9.0` by @kon-angelo [#675]
- `[DEVELOPER]` Added description to openstack security group rules. by @nschad [#666]
# [gardener/machine-controller-manager-provider-openstack]

## 🏃 Others

- `[USER]` Vendor gardener `v1.79.0` by @kon-angelo [gardener/machine-controller-manager-provider-openstack#100]
- `[USER]` `ResourceExhausted` error code is returned when no valid host is found in the zone  by @rishabh-11 [gardener/machine-controller-manager-provider-openstack#97]
- `[DEPENDENCY]` The following dependency is updated:-  
  github.com/gardener/machine-controller-manager v0.49.1 -> v0.50.0 by @rishabh-11 [gardener/machine-controller-manager-provider-openstack#98]

</details>

<details>
<summary><b>Update cert-management to <code>0.11.2</code></b></summary>

# [gardener/cert-management]

## 🏃 Others

- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [#142]
- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [#142]

</details>

<details>
<summary><b>Update external-dns-management to <code>0.15.9</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` Creating a `DNSEntry` for the base domain of a hosted zone is now allowed for all providers but `azure-dns` and `azure-private-dns`. by @MartinWeindel [#316]
## 🏃 Others

- `[OPERATOR]` Update AWS canonical hosted zones from github.com/kubernetes-sigs/external-dns repository. by @MartinWeindel [#322]
- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [#323]
- `[OPERATOR]` Bumps golang from 1.20.7 to 1.21.1. by @dependabot[bot] [#318]
- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [#323]
- `[OPERATOR]` Additional AWS regions `ap-southeast-4` and `il-central-1` with canonical hosted zones for ELBs by @MartinWeindel [#321]
- `[USER]` Infoblox provider: support for extensible attributes by @nitrocb [#320]

</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.38.0</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now labelled with `shoot.gardener.cloud/no-cleanup=true` to prevent `gardenlet` to deleting them during shoot deletion. by @MartinWeindel [#195]
- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by @rfranzke [#194]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.0 to 1.21.1. by @dependabot[bot] [#193]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#196]
# [gardener/cert-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel [gardener/cert-management#138]
- `[USER]` Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel [gardener/cert-management#140]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [gardener/cert-management#142]
- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [gardener/cert-management#142]

</details>

<details>
<summary><b>Update shoot-dns-service to <code>1.39.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` Creating a `DNSEntry` for the base domain of a hosted zone is now allowed for all providers but `azure-dns` and `azure-private-dns`. by @MartinWeindel [gardener/external-dns-management#316]
## 🏃 Others

- `[USER]` Infoblox provider: support for extensible attributes by @nitrocb [gardener/external-dns-management#320]
- `[OPERATOR]` Update AWS canonical hosted zones from github.com/kubernetes-sigs/external-dns repository. by @MartinWeindel [gardener/external-dns-management#322]
- `[OPERATOR]` Bumps golang from 1.20.7 to 1.21.1. by @dependabot[bot] [gardener/external-dns-management#318]
- `[OPERATOR]` Additional AWS regions `ap-southeast-4` and `il-central-1` with canonical hosted zones for ELBs by @MartinWeindel [gardener/external-dns-management#321]
- `[OPERATOR]` Update k8s dependencies by updating controller-manager-library by @MartinWeindel [gardener/external-dns-management#323]
- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @MartinWeindel [gardener/external-dns-management#323]
# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-dns-service` no longer supports Shoots with Кubernetes version < 1.24. by @shafeeqes [#241]
## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by @rfranzke [#240]
- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now labelled with `shoot.gardener.cloud/no-cleanup=true` to prevent `gardenlet` to deleting them during shoot deletion. by @MartinWeindel [#243]
## 🏃 Others

- `[OPERATOR]` Add copy of images.yaml to charts dir to resolve installation issue for landscapes using RBSC by @MartinWeindel [#237]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#244]
- `[OPERATOR]` Bumps golang from 1.21.0 to 1.21.1. by @dependabot[bot] [#239]

</details>
