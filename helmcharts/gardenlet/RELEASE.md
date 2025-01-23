# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `OperatorConfiguration` changed incompatibly: `extensionRequired` was renamed to `extensionRequiredRuntime`. by @timuthy [#11001]
- `[OPERATOR]` The `ShootManagedIssuer` feature gate was removed. Enablement of the feature is now dependent on the existence of a secret in the `garden` namespace labeled with `gardener.cloud/role: shoot-service-account-issuer`. by @dimityrmirchev [#11078]
- `[OPERATOR]` The `ShootForceDeletion` feature gate has been graduated to GA and is locked to `true`.  by @shafeeqes [#11107]
- `[OPERATOR]` This change applies to IPv4 clusters only.  
  Gardener uses the CIDR range of 240.0.0.0/8 which is reserved as per [IANA db](https://www.iana.org/assignments/ipv4-address-space/ipv4-address-space.xhtml) to map the cluster ip of the kubernetes api-server in the seed to a different network range before exposing it to the shoot in the `kubernetes` service. This frees up address space in the shoot and removes potential clashes with shoot workload ips.  
    
  Seed operators need to check if any of the following properties collide with the 240.0.0.0/8 range:  
    
      spec:  
        networks:  
          pods: < check here >  
          nodes: < check here >  
          services: < check here >  
          shootDefaults:  
            pods: < check here >  
            nodes: < check here >  
            services: < check here >  
   by @domdom82 [#10949]
- `[OPERATOR]` The wildcard TLS certificate for the runtime cluster must now be labelled with `gardener.cloud/role=garden-cert` instead of `gardener.cloud/role=controlplane-cert` to avoid duplicate role assignments for runtime and seed certificate secrets if Gardener runtime and seed run on the same cluster.  
  The old role name is deprecated for the runtime cluster. It will not be accepted anymore with the next Gardener release. by @MartinWeindel [#11113]
- `[DEPENDENCY]` Client-related functions have been adapted to use the external version of `k8s.io/component-base/config.ClientConnectionConfiguration`. If you need a helper function for transitioning to the external version, use `pkg/client/kubernetes.ConvertClientConnectionConfigurationToExternal`. by @timebertt [#11052]
- `[DEPENDENCY]` The package `github.com/gardener/gardener/extensions/pkg/apis/config` has been dropped. Use the versioned variant of the package instead: `github.com/gardener/gardener/extensions/pkg/apis/config/v1alpha1`. by @timebertt [#11056]
## 📰 Noteworthy

- `[USER]` Expired versions from the `NamespacedCloudProfile` are always dropped, except for already applied versions. by @LucaBernstein [#10910]
- `[OPERATOR]` The `vpa` field (ineffective since `v1.102`) has been removed from the `ManagedSeed` API. by @rfranzke [#11047]
- `[OPERATOR]` Now "vali" contains the managed control plane logs from the early stages of shoot reconcile. by @nickytd [#11082]
## ✨ New Features

- `[OPERATOR]` Gardener-Operator handles generic Gardener extensions in the Garden-Runtime cluster (type: `Extension`). Such extensions can be configured via `spec.extensions` in the `Garden` resource. by @timuthy [#11192]
- `[OPERATOR]` `gardener-node-agent` now persists its applied changes after each step when reconciling the OSC. This should avoid unnecessary work and systemd unit restarts. by @maboehm [#10969]
- `[OPERATOR]` Add vpa histogram decay half-life parameters to the Shoot spec. by @voelzmo [#10959]
- `[OPERATOR]` The Gardener Admission Controller now implements a handler that can prevent tampering with system `Secret`s and `ConfigMap`s if they are labeled with `gardener.cloud/update-restriction=true`. by @dimityrmirchev [#11108]
- `[OPERATOR]` Add flow and flow task metrics for timing duration, delay and result count to gardenlet metrics. by @LucaBernstein [#10967]
- `[USER]` Gardener now allows to omit or to only partially define the machine image version in `shoot.Spec.Provider.Workers[].Machine.Image.Version`. The version will automatically be defaulted to the latest minor/patch version found in the referenced `CloudProfile`. by @LucaBernstein [#10954]
- `[DEVELOPER]` The extension library now supports adding watches via `WatchBuilder` for other resources in the generic extension controller. by @domdom82 [#11064]
- `[DEVELOPER]` Add option to register flow metrics on monitoring registry. by @LucaBernstein [#10967]
- `[DEVELOPER]` A local setup for trying out, developing, and testing the autonomous shoot cluster functionality of `gardenadm` has been introduced. You can find the documentation [here](https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally_with_gardenadm.md). by @rfranzke [#10977]
## 🐛 Bug Fixes

- `[OPERATOR]` Gardener can now delete and migrate shoots that use dynamic node network allocation, even if the infrastructure creation has never been successfully completed. by @timebertt [#11038]
- `[OPERATOR]` An issue was fixed in `gardener-operator` that prevented configuring OIDC for `gardener-dashboard` while using Structured Authentication. by @timuthy [#11080]
- `[OPERATOR]` `gardener-node-agent` does not restart `containerd.service` on every OSC reconciliation anymore. by @oliver-goetz [#11120]
- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#11036]
- `[DEVELOPER]` Avoid calling `GetCluster` for non-shoot namespaces in `shootNotFailedPredicate` and `dnsrecord` controller. by @MartinWeindel [#11123]
- `[DEVELOPER]` `gardener-node-agent` deletes unit files and drop-ins only if it created them previously. by @oliver-goetz [#11015]
## 🏃 Others

- `[USER]` Custom machine images and machine types in `NamespacedCloudProfile` are not interfered by later added conflicting entries in the parent `CloudProfile`. by @LucaBernstein [#11093]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.29.0`. by @gardener-ci-robot [#11138]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.26.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.26.1) by @gardener-ci-robot [#11202]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.23.4`. by @gardener-ci-robot [#11071]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.33.0`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.33.0) by @gardener-ci-robot [#11167]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image has been updated to `v1.12.0`. by @gardener-ci-robot [#11087]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.28.4`. by @gardener-ci-robot [#11053]
- `[DEPENDENCY]` The `gardener/logging` image has been updated to `v0.63.0`. [Release Notes](https://redirect.github.com/gardener/logging/releases/tag/v0.63.0) by @gardener-ci-robot [#11195]
- `[DEPENDENCY]` The `registry.k8s.io/dns/k8s-dns-node-cache` image has been updated to `1.24.0`. by @gardener-ci-robot [#11032]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.21.0`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.0) by @gardener-ci-robot [#11023]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.79.0`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.79.0) by @gardener-ci-robot [#11199]
- `[DEPENDENCY]` The `quay.io/prometheus/alertmanager` image has been updated to `v0.28.0`. by @gardener-ci-robot [#11176]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.32.3`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.32.3) by @gardener-ci-robot [#11068]
- `[DEPENDENCY]` The `gardener/ingress-default-backend` image has been updated to `0.21.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.21.0) by @gardener-ci-robot [#11046]
- `[DEPENDENCY]` The `gardener/terminal-controller-manager` image has been updated to `v0.34.0`. [Release Notes](https://redirect.github.com/gardener/terminal-controller-manager/releases/tag/v0.34.0) by @gardener-ci-robot [#11212]
- `[DEPENDENCY]` The `gardener/alpine-conntrack` image has been updated to `3.21.1`. [Release Notes](https://redirect.github.com/gardener/alpine-conntrack/releases/tag/3.21.1) by @gardener-ci-robot [#11151]
- `[DEVELOPER]` Fix malformed file path error on `go get github.com/gardener/gardener@master` by @MartinWeindel [#11145]
- `[DEVELOPER]` drop unused codepath from component_descriptor creation script. by @ccwienk [#11124]
- `[DEVELOPER]` The images of the registry caches used in the extensions local setup are now updated to [distribution/distribution@3.0.0 rc.2](https://github.com/distribution/distribution/releases/tag/v3.0.0-rc.2). by @ialidzhikov [#11079]
- `[OPERATOR]` Add additional context to shoot admission DNS errors so that it is more obvious what should be changed. by @ScheererJ [#11022]
- `[OPERATOR]` Allow specifying the IP families for the shoot creation tests. by @ScheererJ [#11135]
- `[OPERATOR]` Switch `vpa-recommender` back to the image built from the [vertical-pod-autoscaler upstream repo](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler) . by @plkokanov [#11122]
- `[OPERATOR]` The `gardener-dashboard` configuration was enhanced in the `garden` API with fields `gardenerDashboard.oidcConfig.clientIDPublic` and `gardenerDashboard.oidcConfig.issuerURL`.  
  Those are required to switch from the deprecated `kubeAPIServer.oidcConfig` to `kubeAPIServer.structuredAuthentication`. by @timuthy [#11080]
- `[OPERATOR]` `gardener-operator` now maintains a new condition `RequiredVirtual` for `Extension` resources. The new condition indicates whether the extension is related to required `ControllerInstallation`s in the virtual garden cluster. by @timuthy [#11001]
- `[OPERATOR]` Add alerts for capped VPA recommendations by @vicwicker [#11136]
- `[OPERATOR]` Retry failed `Cluster` resource sync after otherwise successful `Shoot` reconciliation.  by @LucaBernstein [#11144]
- `[OPERATOR]` `gardener-operator` restarts itself when the `garden` resource is deleted. This is required to stop controllers gracefully that depend on the existence of a virtual garden cluster. by @timuthy [#11058]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.111.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.111.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.111.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.111.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.111.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.111.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.111.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.111.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.111.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.111.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.111.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.111.0`
