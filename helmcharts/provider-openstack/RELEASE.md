# [gardener/gardener-extension-provider-openstack]

## 📰 Noteworthy

- `[USER]` The kube-system/csi-driver-node and kube-system/csi-driver-manila-node DaemonSets are no longer scaled by a VerticalPodAutoscaler as they do not really benefit from it. Removing VerticalPodAutoscaler for these components will reduce unnecessary evictions by VPA and will be a mitigation for https://issues.k8s.io/126921. by @ialidzhikov [#938]
## 🐛 Bug Fixes

- `[USER]` Fix the `NamespacedCloudProfile` status mutation. by @LucaBernstein [#930]
## 🏃 Others

- `[DEPENDENCY]` Update gardener to v1.110.0 by @hebelsan [#933]
- `[OPERATOR]` The `EgressCIDRS` are now properly calculated for IPv6 addresses of the router. by @kon-angelo [#958]
- `[OPERATOR]` The `EgressCIDRS` are now properly calculated for multiple external fixed IPs of the router. by @kon-angelo [#958]
- `[OPERATOR]` Ignore not found errors on resource deletion during infrastructure reconciliation. by @kon-angelo [#948]
# [gardener/machine-controller-manager-provider-openstack]

## 🏃 Others

- `[DEVELOPER]` The `gardener/machine-controller-manager` dependency has been updated to `v0.55.1`. [Release Notes v0.55.0](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.0)  
  [Release Notes v0.55.1](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.55.1) by @gardener-robot-ci-3 [gardener/machine-controller-manager-provider-openstack#204]
- `[DEVELOPER]` Add gosec as sast makefile target by @hebelsan [gardener/machine-controller-manager-provider-openstack#199]
- `[DEPENDENCY]` Update gardener/gardener to v1.108.1 by @hebelsan [gardener/machine-controller-manager-provider-openstack#200]
- `[OPERATOR]` Increase VM status check timeout to 1200 seconds. by @kon-angelo [gardener/machine-controller-manager-provider-openstack#212]
# [gardener/terraformer]

## 🐛 Bug Fixes

- `[DEVELOPER]` Provider `azurerm` was updated to version 3.47.0 and is now properly recognising the `ARM_OIDC_TOKEN_FILE_PATH` env variable. by @dimityrmirchev [gardener/terraformer#156]
## 🏃 Others

- `[OPERATOR]` Update golang to `v1.23.5` by @kon-angelo [gardener/terraformer#157]
- `[OPERATOR]` Update alpine to `v3.21.2` by @kon-angelo [gardener/terraformer#157]

## Helm Charts
- admission-openstack-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-application:v1.45.0`
- admission-openstack-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-openstack-runtime:v1.45.0`
- provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-openstack:v1.45.0`
## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.45.0`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.45.0`
