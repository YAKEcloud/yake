# [github.com/gardener/gardener:v1.137.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The `garden_garden_last_operation` metric structure has changed: the `last_operation` label has been renamed to `type`, and a new `state` label has been added to expose the operation state. Existing queries and dashboards using the `last_operation` label must be updated to use `type` instead. Additionally, two new alerts have been introduced: `GardenLastOperationInErrorState` and `GardenLastOperationStuckProcessing`. by @rickardsjp [[#13827](https://github.com/gardener/gardener/pull/13827)]
- `[DEVELOPER]` The `pkg/utils/secrets/manager.New` function's signature has been reworked to accept config functions. Namespaces are now passed via `WithNamespaces(...string)`, automatic CA secret rotation can be disabled via `WithoutCASecretAutoRotation()`, and the map of secret names to "last rotation initiation times" is passed via `WithSecretNamesToTimes(map[string]time.Time)`. Accordingly, `pkg/utils/secrets/manager.Config` has been removed. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]
- `[DEVELOPER]` All Gardener Enhancement Proposals (GEPs) have been moved out of `gardener/gardener` to the new `gardener/enhancements` repository. Read the [Slack thread](https://gardener-cloud.slack.com/archives/CAPMD6DCG/p1770880997465959) to learn more about it. by @rfranzke [[#14043](https://github.com/gardener/gardener/pull/14043)]
- `[DEVELOPER]` When using `ModeService` in the extension webhook library, the specified service port is now properly propagated when constructing the `admissionregistrationv1.WebhookClientConfig` for `{Validating,Mutating}WebhookConfiguration`s (previously, it was not specified at all and defaulted to `443` by Kubernetes). Make sure to specify `--webhook-config-service-port` to prevent falling back to the `--webhook-config-server-port` (if configured). by @rfranzke [[#14063](https://github.com/gardener/gardener/pull/14063)]
- `[DEVELOPER]` The package `github.com/gardener/gardener/pkg/apis` has been made a Go submodule. Validations and helpers from `./pkg/apis` have been moved to `./pkg/api`. The package `pkg/utils/timewindow` has been moved to `pkg/apis/utils/timewindow`. The component configs `./pkg/{admissioncontroller,controllermanager,gardenlet,nodeagent,operator,resourcemanager,scheduler}` have been moved to `./pkg/apis/config/...` and their `helper` and `validation` packages to `./pkg/api/config/...`. Extension developers can use the commands provided in [this Gist](https://gist.github.com/LucaBernstein/a0a4bd39fb1232511ed0b65432fff653) to update the import paths programmatically. by @LucaBernstein [[#13536](https://github.com/gardener/gardener/pull/13536)]

## ✨ New Features
- `[OPERATOR]` A default `.machineControllerManager.machineCreationTimeout` can be provided for a machine type in the `CloudProfile`. by @LucaBernstein [[#14032](https://github.com/gardener/gardener/pull/14032)]
- `[OPERATOR]` Operators can configure workload identity token expiration duration via gardenlet's configuration by setting `.controllers.tokenRequestorWorkloadIdentity.tokenExpirationDuration`. by @dimityrmirchev [[#13752](https://github.com/gardener/gardener/pull/13752)]
- `[OPERATOR]` Feature gate `VictoriaLogsBackend` has been introduced to the `gardenlet` and `gardener-operator`. When enabled, an instance of `VictoriaLogs` is deployed in the respective cluster. by @rrhubenov [[#13988](https://github.com/gardener/gardener/pull/13988)]
- `[OPERATOR]` The "Reversed VPN OpenVPN Server (HA)" dashboard now shows packet loss statistics. by @domdom82 [[#14088](https://github.com/gardener/gardener/pull/14088)]
- `[DEVELOPER]` Secrets Manager: The automatic renewal of `Secret`s about to expire can now be disabled with the config function `WithoutAutomaticSecretRenewal()` passed to `New()`. This is useful if you want to prevent your secrets manager instance from listing all existing `Secret`s in the cluster when instantiated. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]
- `[DEVELOPER]` gardener-node-agent now supports node-specific configuration files, i.e. files which are only applied to a specified node. by @ScheererJ [[#13412](https://github.com/gardener/gardener/pull/13412)]
- `[DEVELOPER]` The secrets manager now allows to load missing signing CA certificate secrets directly from the cluster in case they were not generated upfront. This is helpful when the secrets manager instance generating certificates is not the same managing the signing CA certificate lifecycle. by @rfranzke [[#14000](https://github.com/gardener/gardener/pull/14000)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed the shoot-care controller panic for clusters where `.status.credentials.rotation` exists but `.status.credentials.encryptionAtRest` is nil. by @maboehm [[#14147](https://github.com/gardener/gardener/pull/14147)]
- `[OPERATOR]` Fixed an issue with the maximum batch size that the `OpenTelemetry Collector` instances can send. by @rrhubenov [[#14108](https://github.com/gardener/gardener/pull/14108)]
- `[OPERATOR]` Systemd logs are now collected from seed clusters as expected. by @nickytd [[#14071](https://github.com/gardener/gardener/pull/14071)]
- `[OPERATOR]` Additional finetuning to the `Collector` configuration has been applied for improved memory usage. by @rrhubenov [[#14127](https://github.com/gardener/gardener/pull/14127)]
- `[OPERATOR]` A bug is fixed in the extension scrape configuration in the seed Prometheus, where the scrape address was not correctly configured on IPv4 setups. by @vicwicker [[#14111](https://github.com/gardener/gardener/pull/14111)]
- `[OPERATOR]` An issue causing the control-plane migration to get stuck if the source backup entry deployment was retried is now fixed. by @shafeeqes [[#14091](https://github.com/gardener/gardener/pull/14091)]
- `[USER]` An issue which lead to a nil pointer in gardenlet when a Shoot had an empty `.spec.addons` structure defined is now fixed. by @voelzmo [[#14112](https://github.com/gardener/gardener/pull/14112)]
- `[DEPENDENCY]` extension library: Extension admission webhooks now return `http.StatusForbidden` when validation/mutation fails. With this, the failure reason is now properly displayed when updating the resource with `kubectl edit`. by @dnaeon [[#14026](https://github.com/gardener/gardener/pull/14026)]

## 🏃 Others
- `[OPERATOR]` When L7 load-balancing is active, connections to kube-apiservers have a timeout of 1 day now. by @oliver-goetz [[#14061](https://github.com/gardener/gardener/pull/14061)]
- `[OPERATOR]` All VerticalPodAutoscaler resources managed by Gardener are enhanced to define an explicit container policy for all containers that need to be auto-scaled and to have a `catch-all` container policy (`containerName: '*'` and `mode: Off`) always. by @voelzmo [[#14009](https://github.com/gardener/gardener/pull/14009)]
- `[OPERATOR]` Resource limits are dropped from apiserver-proxy to increase shoot connectivity. by @domdom82 [[#14110](https://github.com/gardener/gardener/pull/14110)]
- `[OPERATOR]` fluent-bit is now updated to v4.2.2, fluent-operator to v3.6.0, fluent-bit-plugin to v1.1.0. Small fine-tunings of the logging stack. by @nickytd [[#14093](https://github.com/gardener/gardener/pull/14093)]
- `[DEVELOPER]` `golang-test` images for Go 1.26 are built now. Those for Go 1.24 are not built anymore because it is out of maintenance. by @marc1404 [[#14024](https://github.com/gardener/gardener/pull/14024)]
- `[DEVELOPER]` The following dependencies are updated:  
  - `k8s.io/*`: `v0.34.3` -> `v0.35.0`  
  - `sigs.k8s.io/controller-runtime`: `v0.22.5` -> `v0.23.1`  
  - `sigs.k8s.io/controller-tools`: `v0.19.0` -> `v0.20.0` by @timuthy [[#13982](https://github.com/gardener/gardener/pull/13982)]
- `[DEVELOPER]` New slice functions were added to the `pkg/utils` package that can be used to transform and filter elements. by @timuthy [[#14042](https://github.com/gardener/gardener/pull/14042)]
- `[DEVELOPER]` The message for the recently introduced Prometheus health checks that is part of the status conditions of `Garden`, `Seed` or `Shoot` resources is improved. It provides more detailed information about the failing Prometheus health checks to facilitate troubleshooting. by @vicwicker [[#14006](https://github.com/gardener/gardener/pull/14006)]
- `[DEVELOPER]` `etcd-druid` is now configured with `OperatorConfiguration` instead of the deprecated CLI flags. by @CaptainIRS [[#13674](https://github.com/gardener/gardener/pull/13674)]
- `[DEPENDENCY]` `make format` target supports sequential run (again) by passing `MODE=sequential`. by @LucaBernstein [[#14076](https://github.com/gardener/gardener/pull/14076)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v0.8.24` to `v0.8.25`. by @gardener-ci-robot [[#14017](https://github.com/gardener/gardener/pull/14017)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dependency-watchdog` from `v1.6.0` to `v1.7.0`. [Release Notes](https://redirect.github.com/gardener/dependency-watchdog/releases/tag/v1.7.0) by @gardener-ci-robot [[#14154](https://github.com/gardener/gardener/pull/14154)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v1.35.1` to `v1.35.2`. by @gardener-ci-robot [[#14019](https://github.com/gardener/gardener/pull/14019)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/etcd-druid` from `v0.35.0` to `v0.35.1`. [Release Notes](https://redirect.github.com/gardener/etcd-druid/releases/tag/v0.35.1)  
  - `github.com/gardener/etcd-druid/api` from `v0.35.0` to `v0.35.1`. by @gardener-ci-robot [[#14146](https://github.com/gardener/gardener/pull/14146)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/vpn2` from `0.46.2` to `0.47.0`. [Release Notes](https://redirect.github.com/gardener/vpn2/releases/tag/0.47.0) by @gardener-ci-robot [[#14086](https://github.com/gardener/gardener/pull/14086)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. [Release Notes](https://redirect.github.com/gardener/machine-controller-manager/releases/tag/v0.61.2)  
  - `github.com/gardener/machine-controller-manager` from `v0.61.1` to `v0.61.2`. by @gardener-ci-robot [[#14092](https://github.com/gardener/gardener/pull/14092)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/plutono` from `v7.5.45` to `v7.5.46`. [Release Notes](https://redirect.github.com/credativ/plutono/releases/tag/v7.5.46) by @gardener-ci-robot [[#14116](https://github.com/gardener/gardener/pull/14116)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `quay.io/prometheus/alertmanager` from `v0.31.0` to `v0.31.1`. by @gardener-ci-robot [[#14038](https://github.com/gardener/gardener/pull/14038)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `credativ/vali` from `v2.2.30` to `v2.2.31`. [Release Notes](https://redirect.github.com/credativ/vali/releases/tag/v2.2.31) by @gardener-ci-robot [[#14115](https://github.com/gardener/gardener/pull/14115)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gcr.io/istio-release/pilot` from `1.27.6` to `1.27.7`.   
  - `gcr.io/istio-release/proxyv2` from `1.27.6` to `1.27.7`.   
  - `istio.io/api` from `v1.27.6` to `v1.27.7`. by @gardener-ci-robot [[#14080](https://github.com/gardener/gardener/pull/14080)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `registry.k8s.io/node-problem-detector/node-problem-detector` from `v1.34.2` to `v1.34.3`. by @gardener-ci-robot [[#14018](https://github.com/gardener/gardener/pull/14018)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/dashboard` from `1.83.5` to `1.83.6`. [Release Notes](https://redirect.github.com/gardener/dashboard/releases/tag/1.83.6) by @gardener-ci-robot [[#14124](https://github.com/gardener/gardener/pull/14124)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `open-telemetry/opentelemetry-operator` from `v0.143.0` to `v0.145.0`. [Release Notes](https://redirect.github.com/open-telemetry/opentelemetry-operator/releases/tag/v0.145.0) by @gardener-ci-robot [[#14078](https://github.com/gardener/gardener/pull/14078)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/ingress-default-backend` from `0.24.0` to `0.25.0`. [Release Notes](https://redirect.github.com/gardener/ingress-default-backend/releases/tag/0.25.0) by @gardener-ci-robot [[#14099](https://github.com/gardener/gardener/pull/14099)]
- `[DEPENDENCY]` The following dependencies have been updated:  
  - `gardener/alpine-iptables` from `3.22.1` to `3.23.3`. [Release Notes](https://redirect.github.com/gardener/alpine-iptables/releases/tag/3.23.3) by @gardener-ci-robot [[#14098](https://github.com/gardener/gardener/pull/14098)]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.137.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.137.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.137.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.137.0`
## Container (OCI) Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.137.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.137.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.137.0`
- gardenadm: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenadm:v1.137.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.137.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.137.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.137.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.137.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.137.0`
