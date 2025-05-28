# [gardener/gardener]

## ⚠️ Breaking Changes

- `[OPERATOR]` The already deprecated `autoscaling.k8s.io/v1beta2` API version is no longer served. Before upgrading to this version of Gardener, make sure that all components use the `autoscaling.k8s.io/v1` API version for managing VerticalPodAutoscaler resources. by @ialidzhikov [#11840]
- `[OPERATOR]` The support for the already deprecated `shoot.gardener.cloud/managed-seed-api-server` annotation is now removed. Instead, consider enabling high availability for the ManagedSeed's Shoot control plane. by @ialidzhikov [#11838]
- `[USER]` The already deprecated `autoscaling.k8s.io/v1beta2` API version is no longer served. Instead, use the `autoscaling.k8s.io/v1` API version for managing VerticalPodAutoscaler resources. by @ialidzhikov [#11840]
## 📰 Noteworthy

- `[USER]` The `spec.kubernetes.kubeAPIServer.enableAnonymousAuthentication` field in the `Shoot` API is deprecated and will be removed in a future release. Before removal, it will be forbidden to set the field when using a future Kubernetes version that graduates the feature gate `AnonymousAuthConfigurableEndpoints`. by @marc1404 [#11984]
- `[OPERATOR]` The `RemoveAPIServerProxyLegacyPort` feature gate has been promoted to beta and is now turned on by default. by @Wieneo [#11902]
## ✨ New Features

- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDashboard.ingress.enabled` can now be used to control whether the `gardener-operator` should deploy a `Ingress` resource for the dashboard. by @Wieneo [#12002]
- `[OPERATOR]` `Garden.spec.virtualCluster.gardener.gardenerDashboard.oidcConfig.certificateAuthoritySecretRef` can now be used to specify a secret containing a custom CA certificate for talking to the OIDC endpoint. The certificate must be stored under the `ca.crt` key. by @Wieneo [#11967]
- `[OPERATOR]` Gardener supports gardener-node-agent images built by [ko](https://github.com/ko-build/ko). by @timebertt [#12021]
- `[OPERATOR]` It is now possible forcing `gardener-operator` to re-deploy `gardenlet`s by annotating the responsible `seedmanagement.gardener.cloud/v1alpha1.Gardenlet` resource with `gardener.cloud/operation=force-redeploy`. Read all about it [here](https://github.com/gardener/gardener/tree/master/docs/deployment/deploy_gardenlet_via_operator.md#forceful-re-deployment). by @rfranzke [#11972]
## 🐛 Bug Fixes

- `[OPERATOR]` gardenlet's shoot-care controller : An issue causing gardenlet to report a misleading reason (`NodesScalingDown`) during rolling update of Shoot Nodes is now fixed. by @RadaBDimitrova [#11869]
- `[DEVELOPER]` Fix extension webhook registration for autonomous shoot clusters. by @ScheererJ [#12040]
## 🏃 Others

- `[OPERATOR]` The utilization of the VPN containers running in the seed is now improved by adapting their initial/static requests and by changing the corresponding VPA configuration:  
  - autoscaling is disabled for the `vpn-seed-server` and `openvpn-exporter` containers  
  - initial/static resource requests are reduced  
  - limits are removed  
  - `minAllowed` for the `envoy-proxy` container is removed by @axel7born [#12023]
- `[OPERATOR]` Remove sum for VPA Pod metrics in 'recommendations' dashboard by @voelzmo [#12057]
- `[OPERATOR]` Spreading Istio ingress-gateway pods across hosts is enforced only for zonal Istio deployments now. by @oliver-goetz [#12007]
- `[OPERATOR]` `kube-proxy` no longer fails its readiness probe in case the node is about to be deleted by `cluster-autoscaler`. by @ScheererJ [#12015]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.25.2` to `1.25.3`.   
  - `gcr.io/istio-release/proxyv2` from `1.25.2` to `1.25.3`.   
  - `istio.io/api` from `v1.25.2` to `v1.25.3`.  by @gardener-ci-robot [#12074]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `envoyproxy/envoy` from `v1.34.0` to `v1.34.1`. [Release Notes](https://redirect.github.com/envoyproxy/envoy/releases/tag/v1.34.1) by @gardener-ci-robot [#12024]
## 📖 Documentation

- `[USER]` Dual-Stack Migration documentation now clearly states the precondition of overlay removal. by @ScheererJ [#12053]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.119.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.119.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.119.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.119.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.119.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.119.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.119.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.119.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.119.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.119.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.119.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.119.0`
