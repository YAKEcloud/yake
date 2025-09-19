# [github.com/gardener/gardener:v1.128.0]

## ⚠️ Breaking Changes
- `[USER]` The validation logic for `Project` resources has been changed: `.spec.description` and `.spec.purpose` fields may only contain letters, numbers and some punctuation characters. Existing projects are not affected by this change unless their description or purpose is updated. by @timuthy [[#12902](https://github.com/gardener/gardener/pull/12902)]
- `[OPERATOR]` The long time deprecated legacy `ScrapeConfig` roles in `monitoring.coreos.com` have been removed from CRD. by @oliver-goetz [[#12908](https://github.com/gardener/gardener/pull/12908)]
- `[USER]` In the Shoot API, the `.spec.kubernetes.kubelet.cpuManagerPolicy` and `.spec.provider.workers[].kubelet.cpuManagerPolicy` fields are now validated to ensure they can only be set to static or none. by @shafeeqes [[#12914](https://github.com/gardener/gardener/pull/12914)]
- `[USER]` In the Shoot API, the `.spec.kubernetes.kubelet.containerLogMaxSize` and `.spec.provider.workers[].kubelet.containerLogMaxSize` fields are now validated to ensure they contain a valid resource quantity. by @shafeeqes [[#12914](https://github.com/gardener/gardener/pull/12914)]
- `[OPERATOR]` The [`ShootVPAEnabledByDefault`](https://github.com/gardener/gardener/blob/v1.127.0/docs/concepts/apiserver-admission-plugins.md#shootvpaenabledbydefault) admission plugin is now enabled by default for the Gardener API server. Disable this admission plugin explicitly if you don't want VPA to be enabled by default for newly created Shoots. If you already have the admission plugin enabled, you can remove the explicit enablement after upgrading to this version of Gardener as the plugin is now enabled by default. by @georgibaltiev [[#12854](https://github.com/gardener/gardener/pull/12854)]
- `[OPERATOR]` The following fields in the `CloudProfile` have been renamed:  
  - `spec.capabilities` -> `spec.machineCapabilities`  
  - `spec.MachineImages[].Versions[].capabilitySets` -> `spec.MachineImages[].Versions[].capabilityFlavors`  
  Please update your `CloudProfile`s accordingly if you are using capabilities (currently in alpha state). by @Roncossek [[#12751](https://github.com/gardener/gardener/pull/12751)]

## 📰 Noteworthy
- `[USER]` The `rotate-etcd-encryption-start` and `rotate-etcd-encryption-complete` operation annotations have been deprecated in favour of `rotate-etcd-encryption-key`. by @AleksandarSavchev [[#12605](https://github.com/gardener/gardener/pull/12605)]
- `[DEVELOPER]` Usages of the deprecated `gopkg.in/yaml.v{2|3}` packages were dropped. Please refrain from using them. Instead, please use the `go.yaml.in/yaml/v4` package instead. by @tobschli [[#12895](https://github.com/gardener/gardener/pull/12895)]

## ✨ New Features
- `[OPERATOR]` It is now allowed backups to use `WorkloadIdentity` as credentials via the `seed.spec.backup.credentialsRef` and `backupBucket.spec.credentialsRef` APIs. In order to make use of this feature, the infrastructure and provider extension must support `WorkloadIdentity` credentials. by @vpnachev [[#12924](https://github.com/gardener/gardener/pull/12924)]
- `[DEVELOPER]` A developer guideline on validation in Gardener extensions has been added. Please consult this document as an extension developer or reviewer to ensure consistency in validation code across the Gardener extensions codebase. Check out the [Validation Guidelines for Extensions](https://github.com/gardener/gardener/blob/v1.127.0/docs/extensions/validation-guidelines-for-extensions.md) document. by @ialidzhikov [[#12811](https://github.com/gardener/gardener/pull/12811)]
- `[DEVELOPER]` A developer guideline on validation in Gardener components has been added. Please consult this document as a developer or reviewer to ensure consistency in validation code across the Gardener codebase. Check out the [Validation Guidelines](https://github.com/gardener/gardener/blob/v1.127.0/docs/development/validation-guidelines.md) document. by @ialidzhikov [[#12811](https://github.com/gardener/gardener/pull/12811)]
- `[USER]` Added operation annotation `rotate-etcd-encryption-key` which can be set to the `Shoot` and `Garden` resource to perform an etcd encryption key rotation. by @AleksandarSavchev [[#12605](https://github.com/gardener/gardener/pull/12605)]

## 🐛 Bug Fixes
- `[DEPENDENCY]` The certificate issuance and renewal flow for webhooks has been improved. Previously, controller restarts during the renewal process could leave the system in an unrecoverable error state, preventing the extension from starting. by @timuthy [[#12852](https://github.com/gardener/gardener/pull/12852)]
- `[OPERATOR]` An issue causing the update of existing `CustomResourceDefinitions` to be no-op is now fixed. by @shafeeqes [[#12963](https://github.com/gardener/gardener/pull/12963)]
- `[OPERATOR]` A bug in the gardenlet start-up migration of the Admin and Viewer Kubeconfig ClusterRoleBindings where a ManagedResource secret could be deleted leading to gardenlet being unable to startup is fixed. by @vpnachev [[#12923](https://github.com/gardener/gardener/pull/12923)]

## 🏃 Others
- `[OPERATOR]` gardener-node-agent no longer reboots a node if it flaps too often between ready/non-ready in a short period of time. by @ScheererJ [[#12930](https://github.com/gardener/gardener/pull/12930)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.82.0` to `1.82.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.1) by @gardener-ci-robot [[#12982](https://github.com/gardener/gardener/pull/12982)]
- `[OPERATOR]` Monitoring the Istio Ingress Gateways is temporarily disabled to mitigate a metric leak issue. This does not affect the monitoring of the shoot control planes where these metrics are not used. by @istvanballok [[#12896](https://github.com/gardener/gardener/pull/12896)]
- `[OPERATOR]` Reduce the CPU resource requests of istio-ingressgateway to `450m` for the case with enabled L7 loadbalancing. by @voelzmo [[#12881](https://github.com/gardener/gardener/pull/12881)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.35.0` to `v1.35.3`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.35.3) by @gardener-ci-robot [[#12909](https://github.com/gardener/gardener/pull/12909)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.25.4` to `1.25.5`.   
  - `gcr.io/istio-release/proxyv2` from `1.25.4` to `1.25.5`.   
  - `istio.io/api` from `v1.25.4` to `v1.25.5`. by @gardener-ci-robot [[#12886](https://github.com/gardener/gardener/pull/12886)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `perses/perses` from `v0.51.1` to `v0.52.0`. [Release Notes](https://redirect.github.com/perses/perses/releases/tag/v0.52.0) by @gardener-ci-robot [[#12951](https://github.com/gardener/gardener/pull/12951)]
- `[DEVELOPER]` Add ensure capabilities for HA vpn statefulsets by @RiRa12621 [[#12949](https://github.com/gardener/gardener/pull/12949)]
- `[OPERATOR]` Ensure that enabling `node-local-dns` for all shoot clusters does not alter DNS behaviour. To maintain consistency the custom CoreDNS configmap is mounted into the `node-local-dns` pods and the custom overwrite rules defined in the custom CoreDNS configuration is applied onto the `node-local-dns` pods. by @DockToFuture [[#12893](https://github.com/gardener/gardener/pull/12893)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.81.3` to `1.82.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.82.0) by @gardener-ci-robot [[#12970](https://github.com/gardener/gardener/pull/12970)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ingress-default-backend` from `0.23.0` to `0.24.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.24.0) by @gardener-ci-robot [[#12945](https://github.com/gardener/gardener/pull/12945)]
- `[OPERATOR]` Adds Machine Capabilities support for provider local. Read more about Machine Capabilities [here](https://github.com/gardener/gardener/blob/master/docs/proposals/33-machine-image-capabilities.md) by @Roncossek [[#12751](https://github.com/gardener/gardener/pull/12751)]
- `[OPERATOR]` The VPA ManagedResource and the Secret it references are now removed when VPA is disabled in the Shoot, Seed or Garden specification. Previously, when VPA was disabled a ManagedResource with an empty Secret would be created. Now, no ManagedResource is created. by @RadaBDimitrova [[#12870](https://github.com/gardener/gardener/pull/12870)]
- `[OPERATOR]` set semver-compliant resource-version for envoy-proxy by @ccwienk [[#12941](https://github.com/gardener/gardener/pull/12941)]
- `[DEVELOPER]` The `istio-ingressgateway` service of the `local2` seed is now exposed on `172.18.255.2:443` instead of `172.18.255.2:9443` on the developer's host machine. by @plkokanov [[#12905](https://github.com/gardener/gardener/pull/12905)]
- `[OPERATOR]` Allowlist new etcd-druid compaction metric and update network policies to allow full-snapshot API requests from etcd-druid to etcd-main client service. by @anveshreddy18 [[#12849](https://github.com/gardener/gardener/pull/12849)]


## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.128.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.128.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.128.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.128.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.128.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.128.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.128.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.128.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.128.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.128.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.128.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.128.0`
