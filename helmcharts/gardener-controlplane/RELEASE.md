# [github.com/gardener/gardener:v1.135.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Internal dns configuration for seeds `.spec.dns.internal` is now required. Make sure to set this field in your templates before upgrading Gardener to the current version. by @dimityrmirchev [[#13529](https://github.com/gardener/gardener/pull/13529)]
- `[OPERATOR]` gardener-resource-manager now enforces the desired OwnerReferences for objects it manages. Previously, it set OwnerReferences only when creating objects and did not update them afterwards. by @oliver-goetz [[#13606](https://github.com/gardener/gardener/pull/13606)]
- `[USER]` :warning: The Seed API field `spec.dns.provider.secretRef` has been deprecated in favor of `spec.dns.provider.credentialsRef`. The `secretRef` field will be removed in Gardener version `>= v1.139.0`, until then - please consider migrating to the new `credentialsRef` field.  
  - :info: Gardener takes care to keep both fields in sync when the configured credentials is of type `Secret`. by @vpnachev [[#13680](https://github.com/gardener/gardener/pull/13680)]
- `[USER]` :warning: The Shoot API field `spec.dns.providers.secretName` has been deprecated in favor of `spec.dns.providers.credentialsRef`. The `secretName` field will be disallowed to be used by shoots running on Kubernetes 1.35 or newer, until then - please consider migrating to the new `credentialsRef` field.  
  - Gardener API server takes care to keep both fields in sync when `Secret` is the type of the configured credentials. by @vpnachev [[#13552](https://github.com/gardener/gardener/pull/13552)]
- `[DEVELOPER]` Change the registry port in the local setup to `:5001`. by @LucaBernstein [[#13661](https://github.com/gardener/gardener/pull/13661)]
- `[DEVELOPER]` The `extension-class` flag has been renamed to `extension-classes` to support multiple extension classes per controller deployment. If the extension depends on [`cmd.ReconcilerOptions`](https://github.com/gardener/gardener/blob/master/extensions/pkg/controller/cmd/reconciler_options.go), the renaming will automatically take effect. Please adjust your deployment manifest to reflect this change. by @timuthy [[#13718](https://github.com/gardener/gardener/pull/13718)]
- `[DEVELOPER]` The `SecretData` field has been removed from the `github.com/gardener/gardener/pkg/component/extensions/dnsrecord.Values` struct, use `github.com/gardener/gardener/pkg/component/extensions/dnsrecord.CredentialsDeployFunc` instead to deploy secret data into a secret. by @vpnachev [[#13720](https://github.com/gardener/gardener/pull/13720)]
- `[DEVELOPER]` The function `github.com/gardener/gardener/pkg/utils/gardener.GenerateDNSProviderName` has been removed. by @vpnachev [[#13552](https://github.com/gardener/gardener/pull/13552)]
- `[DEVELOPER]` `github.com/gardener/gardener/pkg/apis/core/v1beta1/helper.ShootDNSProviderSecretNamesEqual` has been removed, use `github.com/gardener/gardener/pkg/apis/core/v1beta1/helper.ShootDNSProviderCredentialsRefsEqual` instead. by @vpnachev [[#13552](https://github.com/gardener/gardener/pull/13552)]
- `[DEVELOPER]` The `SecretData` field of the `github.com/gardener/gardener/pkg/utils/gardener.Domain` struct has been replaced with `Credentials` field of type `sigs.k8s.io/controller-runtime/pkg/client.Object`. by @vpnachev [[#13720](https://github.com/gardener/gardener/pull/13720)]
- `[DEPENDENCY]` The naming logic for automatically generated webhooks has changed. If the extension name passed to [`extensionscmdwebhook.NewAddToManagerOptions`](https://github.com/gardener/gardener/blob/aae8c452607280e1008393519651bb66c282264c/extensions/pkg/webhook/cmd/options.go#L203) starts with `gardener-`, the extension's webhook names are no longer prefixed with `gardener-extension-`. by @timuthy [[#13786](https://github.com/gardener/gardener/pull/13786)]

## 📰 Noteworthy
- `[OPERATOR]` Adapted the policy in the Kubernetes version support process to retain only the latest 4 minor versions, improving security by dropping older, unpatched versions. Additionally, a minimum period of 14 months has been added, during which Gardener will maintain support for any given Kubernetes version before removing it again. by @marc1404 [[#13471](https://github.com/gardener/gardener/pull/13471)]
- `[USER]` The order of entries in the `NamespacedCloudProfile.Status.CloudProfileSpec` is now the same as in the parent `CloudProfile.Spec`. by @LucaBernstein [[#13772](https://github.com/gardener/gardener/pull/13772)]
- `[DEVELOPER]` The function `github.com/gardener/gardener/pkg/utils/kubernetes.GetCredentialsByObjectReference` has been changed to accept `client.Reader` instead of `client.Client`. by @vpnachev [[#13552](https://github.com/gardener/gardener/pull/13552)]
- `[DEVELOPER]` The script `hack/vgopath-setup.sh` and `hack/tools.mk` entry for `$(VGOPATH)` are deprecated and will be removed after `gardener/gardener@v1.142` has been released. It is recommended that consumers stop using them from the `gardener/gardener` repository. by @LucaBernstein [[#13556](https://github.com/gardener/gardener/pull/13556)]
- `[DEVELOPER]` Source code changes that break various aspects of the monitoring stack in ways that were previously unnoticed are now detected during pull request validation. by @vicwicker [[#13341](https://github.com/gardener/gardener/pull/13341)]
- `[DEVELOPER]` The generic actuator of the control plane now wraps seed-related charts into `ManagedResource`s . Any imperative logic in your provider extension that does not consider management through the gardener-resource-manager can potentially be cleaned up. by @kon-angelo [[#13585](https://github.com/gardener/gardener/pull/13585)]
- `[DEVELOPER]` The usages of `VGOPATH` have been removed. by @LucaBernstein [[#13556](https://github.com/gardener/gardener/pull/13556)]
- `[DEVELOPER]` A new rule was added to the [Component Checklist](https://github.com/gardener/gardener/blob/v1.135.0/docs/development/component-checklist.md) - `Drop unutilised capabilities`. Additionally, the `Do not run containers as root` rule was extended. For more details, check the [Component Checklist](https://github.com/gardener/gardener/blob/v1.135.0/docs/development/component-checklist.md). by @mstueer [[#13204](https://github.com/gardener/gardener/pull/13204)]
- `[DEPENDENCY]` `CredentialsBinding`s can now reference `core.gardener.cloud/v1beta1.InternalSecret` resources. Provider extensions should start validating them similar to references for `v1.Secret` resources. by @rfranzke [[#13759](https://github.com/gardener/gardener/pull/13759)]

## ✨ New Features
- `[OPERATOR]` A new `VPNBondingModeRoundRobin` feature gate is introduced for gardenlet. When enabled, HA VPN uses round-robin bonding mode to increase availability under network degradation. by @domdom82 [[#13649](https://github.com/gardener/gardener/pull/13649)]
- `[OPERATOR]` `gardenlet` can now propagate static manifests stored in the seed cluster's `garden` namespace to all shoot namespaces. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/extensions/static-manifests.md). by @rfranzke [[#13614](https://github.com/gardener/gardener/pull/13614)]
- `[OPERATOR]` Support replacement of individual assets for the gardener dashboard ([gardener/dashboard#2687](https://github.com/gardener/dashboard/pull/2687)) by @grolu [[#13640](https://github.com/gardener/gardener/pull/13640)]
- `[OPERATOR]` Extend `gardener-operator` and `gardenlet` care controllers to query the Prometheus instances for health checks of the monitoring components. If the new health checks fail, they are reflected in the status condition of the `Shoot`, `Seed` or `Garden` resources. These health checks are introduced behind a feature gate `PrometheusHealthChecks` that is disabled by default. by @vicwicker [[#13341](https://github.com/gardener/gardener/pull/13341)]
- `[OPERATOR]` It is now possible to configure custom namespaces in the virtual cluster that the `virtual-garden-gardener-resource-manager` should handle. Use `.spec.virtualCluster.gardener.gardenerResourceManager.additionalTargetNamespaces` in `Garden` resource. by @rfranzke [[#13761](https://github.com/gardener/gardener/pull/13761)]
- `[OPERATOR]` WorkloadIdentity credentials are now allowed to be used for Shoot DNS domains, Seed ingress, default and internal DNS domains. by @vpnachev [[#13720](https://github.com/gardener/gardener/pull/13720)]
- `[OPERATOR]` Add new `Plutono` dashboard for monitoring `VPA Updater` operations across `Shoot`, `Seed` and `Garden` clusters. by @vitanovs [[#13477](https://github.com/gardener/gardener/pull/13477)]
- `[USER]` Rotation for the ssh keypair for worker nodes, observability passwords and etcd encryption key can now be done in the maintenance window via the `.spec.maitenance.autoRotation.credentials` field of a `Shoot`. by @AleksandarSavchev [[#13493](https://github.com/gardener/gardener/pull/13493)]
- `[USER]` A new Seed API field `credentialsRef` has been introduced in `spec.dns.provider` structure. It is designed to support diverse types of credentials, as of now `v1.Secrets` and `security.gardener.cloud/v1alpha1.WorkloadIdentity` are allowed, but only `Secrets` are supported. by @vpnachev [[#13680](https://github.com/gardener/gardener/pull/13680)]
- `[USER]` You can now specify `nftables` as proxy mode implementation of `kube-proxy` in the `Shoot` spec like so if your Kubernetes version is `>= 1.31`: `.spec.kubernetes.kubeProxy.mode=NFTables`, please consult https://kubernetes.io/blog/2025/02/28/nftables-kube-proxy/ for all glory details. by @majst01 [[#13558](https://github.com/gardener/gardener/pull/13558)]
- `[USER]` A new optional Shoot API field `credentialsRef` has been introduced in `spec.dns.providers` structure. It is designed to support diverse types of credentials. As of now only `v1.Secrets` are supported. by @vpnachev [[#13552](https://github.com/gardener/gardener/pull/13552)]
- `[USER]` The Shoot resource does now support configuring the vpa-recommender concurrent workers to update VerticalPodAutoscalers and VerticalPodAutoscalerCheckpoints via the new `.spec.kubernetes.verticalPodAutoscaler.recommenderUpdateWorkerCount` field. by @voelzmo [[#13591](https://github.com/gardener/gardener/pull/13591)]
- `[DEVELOPER]` `Shoot`s and `Seed`s are now allowed to reference `WorkloadIdentity` resources via their respective field `spec.resources`, extensions can leverage this mechanism in order to use workload identity credentials for authentication with external services supporting trust based authentication. by @vpnachev [[#13469](https://github.com/gardener/gardener/pull/13469)]
- `[DEVELOPER]` `CredentialsBinding`s can now reference `core.gardener.cloud/v1beta1.InternalSecret` resources. This can be beneficial if shoot credentials are not managed directly by end-users but by the service provider/Gardener operators. by @rfranzke [[#13759](https://github.com/gardener/gardener/pull/13759)]
- `[DEVELOPER]` It is now possible to create a `SecretsManager` based on a `Garden` resource. Extensions can, for instance, manage certificates for webhooks in the garden runtime cluster while leveraging Gardener's certificate automation features (such as CA rotation, renewal, etc.). by @timuthy [[#13662](https://github.com/gardener/gardener/pull/13662)]
- `[DEPENDENCY]` The certificate library for extension webhooks now supports skipping the component name prefixing with `gardener-extension` when `DoNotPrefixComponentName` is set to `true`. by @rfranzke [[#13765](https://github.com/gardener/gardener/pull/13765)]
- `[DEPENDENCY]` [`extensionscmdcontroller.GeneralOptions`](https://github.com/gardener/gardener/blob/aae8c452607280e1008393519651bb66c282264c/extensions/pkg/controller/cmd/options.go#L479) can now be shared between controllers and webhooks. It contains general deployment information that are relevant to both. by @timuthy [[#13786](https://github.com/gardener/gardener/pull/13786)]

## 🐛 Bug Fixes
- `[OPERATOR]` Refactor the collector `journald` receiver to capture kernel logs via a more stable method. by @rrhubenov [[#13664](https://github.com/gardener/gardener/pull/13664)]
- `[OPERATOR]` An issue causing credentials rotation for the Garden resource to fail is now fixed. by @ialidzhikov [[#13735](https://github.com/gardener/gardener/pull/13735)]
- `[OPERATOR]` A bug has been fix which could lead to pending `ManagedResource`s in the shoot's control plane namespace (effectively, blocking `Shoot` deletion). by @rfranzke [[#13858](https://github.com/gardener/gardener/pull/13858)]
- `[OPERATOR]` A bug has been fixed which was preventing removing image vector overwrite configurations from `gardenlet`s deployed via `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resources (even though `.spec.deployment.{imageVectorOverwrite,componentImageVectorOverwrite}` was removed). by @rfranzke [[#13646](https://github.com/gardener/gardener/pull/13646)]
- `[OPERATOR]` The token requestor will check the UID of a referenced `ServiceAccount` and request a new token before the former one issued for a different UID expired. by @LucaBernstein [[#13630](https://github.com/gardener/gardener/pull/13630)]
- `[USER]` A bug has been fixed which was causing invalid high-availability configuration for system components in case a `Shoot` was configured with a worker pool with `maximum=0`. by @rfranzke [[#13873](https://github.com/gardener/gardener/pull/13873)]
- `[USER]` Project admins are allowed to set ownerReference with `kind: Shoot` and `blockOwnerDeletion: true` for Secrets/ConfigMaps when the [`OwnerReferencesPermissionEnforcement`](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#ownerreferencespermissionenforcement) admission plugin is enabled for the virtual kube-apiserver. by @ialidzhikov [[#13743](https://github.com/gardener/gardener/pull/13743)]
- `[USER]` Fix a bug that prevents updating expiration dates of overridden machine image versions in `NamespacedCloudProfile`s. by @LucaBernstein [[#13754](https://github.com/gardener/gardener/pull/13754)]
- `[USER]` Fixed an issue where the Manual Worker Pool Rollout feature worked only when there is only one machine deployment per worker. by @rrhubenov [[#13670](https://github.com/gardener/gardener/pull/13670)]
- `[USER]` A bug causing `Shoot` clusters to not be reconciled during their maintenance window when the `Shoot` does not enable `ssh` and has `rotate-ssh-keypair` operation configured for maintenance window was fixed. by @AleksandarSavchev [[#13493](https://github.com/gardener/gardener/pull/13493)]
- `[DEPENDENCY]` extension library: An issue causing deletions of `extensions.BackupEntry` to be stuck due to conflicts while removing the finalizer from the BackupEntry Secret is now fixed. This mostly affected the deletion of the source `BackupEntry` during the `restore` phase of control plane migration. by @plkokanov [[#13775](https://github.com/gardener/gardener/pull/13775)]

## 🏃 Others
- `[OPERATOR]` Set static cpu requests for fluent-operator. by @voelzmo [[#13788](https://github.com/gardener/gardener/pull/13788)]
- `[OPERATOR]` OwnerReferences now ensure that no orphan EnvoyFilters and Secrets remain in istio-ingressgateway namespaces when a shoot was purged manually. by @oliver-goetz [[#13606](https://github.com/gardener/gardener/pull/13606)]
- `[OPERATOR]` Allow scraping `kube_node_created` from kube-state-metrics by adding it to the metric allowlist. by @jguipi [[#13683](https://github.com/gardener/gardener/pull/13683)]
- `[OPERATOR]` Add Plutono dashboard for shoot control plane cost calculation by @vicwicker [[#13605](https://github.com/gardener/gardener/pull/13605)]
- `[OPERATOR]` Refactor node local dns tests to avoid duplications and simplify structure. by @DockToFuture [[#13694](https://github.com/gardener/gardener/pull/13694)]
- `[OPERATOR]` gardenlet now adds labels for `DNSRecord` resources created for `Shoot` control planes. This allows using label selectors to target `DNSRecord`s used for `Shoot` control plane components. by @hown3d [[#13444](https://github.com/gardener/gardener/pull/13444)]
- `[OPERATOR]` Updates on old `Shoots`, `ManagedSeedSets`, and `Garden` are now allowed if invalid accepted issuers are unchanged. by @acumino [[#13514](https://github.com/gardener/gardener/pull/13514)]
- `[OPERATOR]` On starup, gardenlet and gardener-operator now patch the needed VerticalPodAutoscaler resources depending on the `VPAInPlaceUpdates` feature gate value. This is needed to ensure that all VerticalPodAutoscaler resources will be updated immediately with the desired update mode when the `VPAInPlaceUpdates` feature gate is enabled or disabled. by @vitanovs [[#13573](https://github.com/gardener/gardener/pull/13573)]
- `[OPERATOR]` Set static cpu requests for node-exporter by @voelzmo [[#13790](https://github.com/gardener/gardener/pull/13790)]
- `[OPERATOR]` A link to the `Seed`-specific dashboard has been added to the annotations of `Seed`-related alerts. This allows operators to quickly navigate from an alert to the relevant monitoring dashboard for faster troubleshooting. by @cathyzhang05 [[#13555](https://github.com/gardener/gardener/pull/13555)]
- `[OPERATOR]` Change metrics port for OTel collector on the nodes from 8888 to 18888. by @dnaeon [[#13798](https://github.com/gardener/gardener/pull/13798)]
- `[OPERATOR]` Extended RBAC rules for `gardener-metrics-exporter` to cover `Gardenlet` resources as well. by @RaphSku [[#13806](https://github.com/gardener/gardener/pull/13806)]
- `[OPERATOR]` Update gardenlets values.yaml template to include the internal DNS secret for the local extension setup. by @DockToFuture [[#13679](https://github.com/gardener/gardener/pull/13679)]
- `[OPERATOR]` The Kubernetes version check can now be explicitly disabled by setting the environment variable `EXPERIMENTAL_DISABLE_KUBERNETES_VERSION_CHECK` to `true`. This is intended for specific experimental or troubleshooting scenarios where temporarily bypassing the version validation is necessary. by @majst01 [[#13221](https://github.com/gardener/gardener/pull/13221)]
- `[OPERATOR]` The mutating `ManagedSeed` admission plugin is now also a validating one. Validations which are executed by this admission plugin during the mutation phase will be gradually moved to the validating `ManagedSeed` admission plugin. by @ialidzhikov [[#13621](https://github.com/gardener/gardener/pull/13621)]
- `[USER]` The `.spec.kubernetes.kubeAPIServer.requests.max{Non}MutatingInflight` flags can now be increased to `5000` (non-mutating) / `2500` (mutating). by @rfranzke [[#13877](https://github.com/gardener/gardener/pull/13877)]
- `[DEVELOPER]` The `CloudProfile` for the local dev setup was updated from Kubernetes version 1.34.0 to 1.34.3. by @timuthy [[#13874](https://github.com/gardener/gardener/pull/13874)]
- `[DEVELOPER]` The kubectl apply command for the `00-namespace-garden.yaml` resource now includes the `--force-conflicts flag`. This enhancement resolves conflicts that previously caused errors during the local extension setup, ensuring a smoother and more reliable deployment process. by @DockToFuture [[#13676](https://github.com/gardener/gardener/pull/13676)]
- `[DEVELOPER]` Add permissions to read and watch `NamespacedCloudProfile`s for the dashboard. by @klocke-io [[#13500](https://github.com/gardener/gardener/pull/13500)]
- `[DEVELOPER]` The generic control-plane webhook is now capable of ensuring the `kube-apiserver` and `kube-controller-manager` deployments, as well as `etcd`s, of the virtual garden cluster. by @timuthy [[#13635](https://github.com/gardener/gardener/pull/13635)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.30.0` to `v0.30.1`. by @gardener-ci-robot [[#13779](https://github.com/gardener/gardener/pull/13779)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-conntrack` from `3.21.3` to `3.23.2`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.23.2) by @gardener-ci-robot [[#13744](https://github.com/gardener/gardener/pull/13744)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/kube-state-metrics/kube-state-metrics` from `v2.17.0` to `v2.18.0`. by @gardener-ci-robot [[#13808](https://github.com/gardener/gardener/pull/13808)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.29.0` to `v0.30.0`. by @gardener-ci-robot [[#13663](https://github.com/gardener/gardener/pull/13663)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.29` to `v2.2.30`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.30) by @gardener-ci-robot [[#13689](https://github.com/gardener/gardener/pull/13689)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.1.4` to `2.2.3`. by @gardener-ci-robot [[#13726](https://github.com/gardener/gardener/pull/13726)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.36.4` to `v1.37.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.37.0) by @gardener-ci-robot [[#13781](https://github.com/gardener/gardener/pull/13781)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.4` to `1.27.5`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.4` to `1.27.5`.   
  - `istio.io/api` from `v1.27.4` to `v1.27.5`. by @gardener-ci-robot [[#13711](https://github.com/gardener/gardener/pull/13711)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.22` to `v0.8.24`. by @gardener-ci-robot [[#13716](https://github.com/gardener/gardener/pull/13716)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/gardener-metrics-exporter` from `0.42.0` to `0.43.0`. [Release Notes](https://redirect.github.com/gardener/gardener-metrics-exporter/releases/tag/0.43.0) by @gardener-ci-robot [[#13760](https://github.com/gardener/gardener/pull/13760)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v1.34.0` to `v1.34.2`. by @gardener-ci-robot [[#13717](https://github.com/gardener/gardener/pull/13717)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.44.0` to `0.45.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.45.0) by @gardener-ci-robot [[#13677](https://github.com/gardener/gardener/pull/13677)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/brancz/kube-rbac-proxy` from `v0.20.1` to `v0.20.2`. by @gardener-ci-robot [[#13782](https://github.com/gardener/gardener/pull/13782)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/logging` from `v0.70.0` to `v0.71.0`. [Release Notes](https://redirect.github.com/gardener/logging/releases/tag/v0.71.0) by @gardener-ci-robot [[#13741](https://github.com/gardener/gardener/pull/13741)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.1` to `1.83.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.2) by @gardener-ci-robot [[#13884](https://github.com/gardener/gardener/pull/13884)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/apiserver-proxy` from `v0.19.0` to `v0.20.0`. [Release Notes](https://redirect.github.com/gardener/apiserver-proxy/releases/tag/v0.20.0) by @gardener-ci-robot [[#13749](https://github.com/gardener/gardener/pull/13749)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.44` to `v7.5.45`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.45) by @gardener-ci-robot [[#13690](https://github.com/gardener/gardener/pull/13690)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `distroless-v1.36.3` to `v1.36.4`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.36.4) by @gardener-ci-robot [[#13629](https://github.com/gardener/gardener/pull/13629)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.0` to `1.83.1`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.1) by @gardener-ci-robot [[#13836](https://github.com/gardener/gardener/pull/13836)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `2.2.3` to `2.4.0`. by @gardener-ci-robot [[#13787](https://github.com/gardener/gardener/pull/13787)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.135.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.135.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.135.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.135.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.135.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.135.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.135.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.135.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.135.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.135.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.135.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.135.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.135.0`
