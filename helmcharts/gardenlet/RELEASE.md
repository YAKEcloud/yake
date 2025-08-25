# [github.com/gardener/gardener:v1.126.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` A separate `node-local-dns` `DaemonSet` is deployed for each worker pool such that each `DaemonSet` has the name `node-local-dns-<worker-pool-name>`.  
  If you are using `gardener-extension-networking-cilium` in your landscape, it is required to update it to a version which supports these new names for the `DaemonSet`s.   
  Support is added with https://github.com/gardener/gardener-extension-networking-cilium/pull/622 and included in versions starting from: [`v1.42.1`](https://github.com/gardener/gardener-extension-networking-cilium/releases/tag/v1.42.1), [`v1.41.3`](https://github.com/gardener/gardener-extension-networking-cilium/releases/tag/v1.41.3) and [`v1.40.4`](https://github.com/gardener/gardener-extension-networking-cilium/releases/tag/v1.40.4) by @DockToFuture [[#12422](https://github.com/gardener/gardener/pull/12422)]
- `[OPERATOR]` ⚠️ The `NewWorkerPoolHash` feature gate has been promoted to beta and is now enabled by default. When the feature gate is enabled, changes to `kubeReserved`, `systemReserved`, `evictionHard` or `cpuManagerPolicy` in the `kubelet` of the `Shoot` will trigger a node-roll. All provider extensions must be upgraded to a version which includes Gardener `v1.98.0` first to support this feature. by @Duciwuci [[#12550](https://github.com/gardener/gardener/pull/12550)]
- `[DEVELOPER]` The local Gardener development setup has been restructured:  
    
  - The location of key config files has changed. In particular, `project.yaml` now has to be created at `example/provider-extensions/garden/project/base/project.yaml`.  
  - The deprecated `SecretBinding` resource has been removed from the local deployment. Developers should now use `CredentialsBinding` resources instead.  
  - The template for credentials bindings is now located at:  
    - For static credentials: [`example/provider-extensions/garden/project/without-workload-identity/credentials/credentialsbindings.yaml.tmpl`](https://github.com/gardener/gardener/blob/master/example/provider-extensions/garden/project/without-workload-identity/credentials/credentialsbindings.yaml.tmpl)  
    - For workload identity: [`example/provider-extensions/garden/project/with-workload-identity/credentials/credentialsbindings.yaml.tmpl`](https://github.com/gardener/gardener/blob/master/example/provider-extensions/garden/project/with-workload-identity/credentials/credentialsbindings.yaml.tmpl)  
  - When referencing static credentials, update your configuration to use `CredentialsBinding` referencing `Secret` objects, as shown in the new template file. The previous `secretbindings.yaml` file and template have been removed.  
    
  **Action required:**  
  If you use static credentials for your local setup, update your configuration to:  
  - Use the new location for `project.yaml`.  
  - Replace any usage of `secretbindings.yaml` with `credentialsbindings.yaml` as per the new template and location.  
  - In your shoot spec, use `spec.credentialsBindingName` instead of `spec.secretBindingName` by @wpross [[#12748](https://github.com/gardener/gardener/pull/12748)]
- `[DEVELOPER]` The constant `github.com/gardener/gardener/pkg/apis/core/v1beta1/constants.ShootGroupViewers` has been removed, please use `github.com/gardener/gardener/pkg/apis/core/v1beta1/constants.ShootSystemViewersGroupName` by @vpnachev [[#12673](https://github.com/gardener/gardener/pull/12673)]

## 📰 Noteworthy
- `[USER]` New ClusterRoleBindings are deployed in the shoot clusters, they will grant Admin and Viewer permissions that will be later leveraged by the `AdminKubeconfig` and `ViewerKubeconfig` feature of Gardener.  
  - `gardener.cloud:system:admins` - grants admin access to users that are Gardener System admins  
  - `gardener.cloud:system:viewers`- grants viewer access to users that are Gardener System viewers  
  - `gardener.cloud:project:admins` - grants admin access to users that are Gardener Project admins  
  - `gardener.cloud:project:viewers` - grants viewer access to users that are Gardener Project viewers by @vpnachev [[#12673](https://github.com/gardener/gardener/pull/12673)]

## ✨ New Features
- `[OPERATOR]` Add annotation `shoot.gardener.cloud/emergency-stop-reconciliations=true` to `Seed` resources to temporarily disable `Shoot` reconciliations. by @LucaBernstein [[#12712](https://github.com/gardener/gardener/pull/12712)]

## 🐛 Bug Fixes
- `[OPERATOR]` An issue causing the `plutono-datasources` ConfigMap to be reconciled by 2 ManagedResources when Seed is Garden managed by `gardener-operator` is now fixed. Occasionally, the issue was preventing successful Seed deletion. by @gardener-ci-robot [[#12798](https://github.com/gardener/gardener/pull/12798)]
- `[OPERATOR]` Fixed MachineImage and MachineType architecture defaulting for `CloudProfile`s supporting one architecture only. by @Roncossek [[#12745](https://github.com/gardener/gardener/pull/12745)]
- `[USER]` Errors that occur during `Worker` reconciliation are now also propagated to the `Shoot` status. by @matthias-horne [[#12769](https://github.com/gardener/gardener/pull/12769)]
- `[USER]` The status of constraint  `DualStackNodesMigrationReady`  is now `progressing` instead of `false` at the start of a migration to dual-stack networking. by @axel7born [[#12685](https://github.com/gardener/gardener/pull/12685)]
- `[OPERATOR]` The `plutono-datasources` `ConfigMap` is no longer wrongfully garbage collected while it is in use. by @timebertt [[#12762](https://github.com/gardener/gardener/pull/12762)]

## 🏃 Others
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.81.1` to `1.81.2`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.81.2) by @gardener-ci-robot [[#12691](https://github.com/gardener/gardener/pull/12691)]
- `[OPERATOR]` Starting from Kubernetes version 1.34, enabling or disabling node-local-dns will no longer trigger node rolling (except kube-proxy is running in IPVS mode). Instead, a cleanup job will be executed. Additionally, node-local-dns is deployed per WorkerPool and node-local-dns will use UDP as default protocol for DNS queries to the upstream DNS server. by @DockToFuture [[#12422](https://github.com/gardener/gardener/pull/12422)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.13.0` to `v1.13.1`. by @gardener-ci-robot [[#12710](https://github.com/gardener/gardener/pull/12710)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/ingress-nginx/controller-chroot` from `v1.12.4` to `v1.12.5`. by @gardener-ci-robot [[#12713](https://github.com/gardener/gardener/pull/12713)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.41.0` to `0.41.1`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.41.1) by @gardener-ci-robot [[#12722](https://github.com/gardener/gardener/pull/12722)]
- `[USER]` Collect `apiserver_validating_admission_policy_check_total` metric by shoot Prometheus. by @chrkl [[#12716](https://github.com/gardener/gardener/pull/12716)]
- `[OPERATOR]` The `device-taint-eviction-controller` is disabled for workerless Shoots with Kubernetes v1.33+. by @RadaBDimitrova [[#12757](https://github.com/gardener/gardener/pull/12757)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/autoscaler` from `v1.32.0` to `v1.32.1`. [Release Notes](https://redirect.github.com/gardener/autoscaler/releases/tag/v1.32.1) by @gardener-ci-robot [[#12715](https://github.com/gardener/gardener/pull/12715)]
- `[OPERATOR]` Remove the init container and annotation used for the Prometheus volume cleanup migration from Prometheus resources by @vicwicker [[#12728](https://github.com/gardener/gardener/pull/12728)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.7` to `1.30.8`. by @gardener-ci-robot [[#12727](https://github.com/gardener/gardener/pull/12727)]
- `[OPERATOR]` gardenlet now deploys a `ServiceMonitor` resource for the `vpa-updater`. With this, the `vpa-updater` metrics are scraped by prometheus. by @vitanovs [[#12677](https://github.com/gardener/gardener/pull/12677)]
- `[DEVELOPER]` `golang-test` images for Go 1.25 are built now. Those for Go 1.23 are not built anymore because it is out of maintenance. by @marc1404 [[#12770](https://github.com/gardener/gardener/pull/12770)]
- `[OPERATOR]` Validations for `spec.provider.worker[]` and `spec.kubernetes.clusterAutoscaler` have been improved. by @aaronfern [[#12567](https://github.com/gardener/gardener/pull/12567)]
- `[OPERATOR]` The AdmissionConfiguration API resource has been migrated from version v1alpha1 to v1. by @georgibaltiev [[#12615](https://github.com/gardener/gardener/pull/12615)]
- `[OPERATOR]` Update Setup Guide to include Cert Management for Garden by @hendrikKahl [[#12706](https://github.com/gardener/gardener/pull/12706)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/kiwigrid/k8s-sidecar` from `1.30.8` to `1.30.9`. by @gardener-ci-robot [[#12750](https://github.com/gardener/gardener/pull/12750)]
