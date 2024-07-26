# [gardener/gardener]

## ⚠️ Breaking Changes

- `[DEPENDENCY]` The `pkg/utils/kubernetes.{Parse}ObjectName` functions have been dropped. Use `client.ObjectKeyFromObject` instead. by @rfranzke [#10162]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix permissions for `cert-management` to handle `DNSRecord`s when enabled in the `operator.gardener.cloud/v1alpha1.Garden` resource. by @MartinWeindel [#10184]
- `[USER]` A bug causing `sshd` running in cluster pods to receive a SIGTERM when `SSHAccess` for worker nodes is disabled is now fixed. by @AleksandarSavchev [#10123]
- `[DEVELOPER]` Seed kubeconfig is checked for expiration before running `gardener-extensions-up.sh` and `gardener-extensions-down.sh` by @Kostov6 [#10025]
## 🏃 Others

- `[OPERATOR]` It is now possible to delete the seed in a combined garden runtime/soil setup. by @ScheererJ [#10143]
- `[OPERATOR]` `gardener-operator` now deploys Gardener Dashboard with mounted secrets instead of storing them as environment variables. by @AleksandarSavchev [#10100]
- `[OPERATOR]` The `containerd-intializer` systemd unit has been deprecated and will remain functionless on existing nodes for compatibility reasons. by @timuthy [#10050]
- `[OPERATOR]` gardener-operator: The HVPA -> VPAAndHHPA autoscaling mode transition is now improved for the gardener-apiserver to preserve the Deployment resources. by @ialidzhikov [#10008]
- `[OPERATOR]` Scrape vpa-admission-controller metrics with prometheus by @voelzmo [#10033]
- `[OPERATOR]` The resource requests of the `sidecar` and `proxy` containers of the `apiserver-proxy` DaemonSet have been reduced as follows:  
  - `sidecar` container `resources.requests.cpu` and `resources.requests.memory` were reduced to  `5m` and `15Mi`, respectively  
  - `proxy` container `resources.requests.cpu` and `resources.requests.memory` were modified to `5m` and `30Mi`, respectively by @plkokanov [#10173]
- `[DEPENDENCY]` The `quay.io/prometheus/node-exporter` image has been updated to `v1.8.2`. by @gardener-ci-robot [#10125]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/alpine` image has been updated to `3.20.2`. by @gardener-ci-robot [#10175]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.75.1`. by @gardener-ci-robot [#10037]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.76.1`. [Release Notes](https://togithub.com/gardener/dashboard/releases/tag/1.76.1) by @gardener-ci-robot [#10124]
- `[DEPENDENCY]` The `quay.io/prometheus-operator/prometheus-config-reloader` image has been updated to `v0.75.2`. by @gardener-ci-robot [#10183]
- `[DEPENDENCY]` The `gardener/apiserver-proxy` image has been updated to `v0.17.0`. [Release Notes](https://togithub.com/gardener/apiserver-proxy/releases/tag/v0.17.0) by @gardener-ci-robot [#10186]
- `[DEPENDENCY]` The `gardener/dashboard` image has been updated to `1.76.0`. [Release Notes](https://togithub.com/gardener/dashboard/releases/tag/1.76.0) by @gardener-ci-robot [#10115]
- `[DEPENDENCY]` The `quay.io/kiwigrid/k8s-sidecar` image has been updated to `1.27.5`. by @gardener-ci-robot [#10118]
- `[DEPENDENCY]` The `gardener/vpn2` image has been updated to `0.26.0`. [Release Notes](https://togithub.com/gardener/vpn2/releases/tag/0.26.0) by @gardener-ci-robot [#10174]
- `[DEPENDENCY]` The `gcr.io/istio-release/pilot` image has been updated to `1.21.5`. by @gardener-ci-robot [#10138]
- `[DEPENDENCY]` The `registry.k8s.io/ingress-nginx/controller-chroot` image for clusters with k8s >= v1.26 has been updated to `v1.11.1`. by @gardener-ci-robot [#10149]
- `[DEPENDENCY]` The `envoyproxy/envoy` image has been updated to `v1.31.0`. [Release Notes](https://togithub.com/envoyproxy/envoy/releases/tag/v1.31.0) by @gardener-ci-robot [#10156]
- `[DEPENDENCY]` The `gardener/machine-controller-manager` image has been updated to `v0.53.1`. [Release Notes](https://togithub.com/gardener/machine-controller-manager/releases/tag/v0.53.1) by @gardener-ci-robot [#10126]
- `[DEPENDENCY]` The `gardener/etcd-druid` image has been updated to `v0.22.3`. [Release Notes](https://togithub.com/gardener/etcd-druid/releases/tag/v0.22.3) by @gardener-ci-robot [#10097]
- `[DEPENDENCY]` The `europe-docker.pkg.dev/gardener-project/releases/3rd/alpine` image has been updated to `3.20.1`. by @gardener-ci-robot [#10129]
## 📖 Documentation

- `[OPERATOR]` Network policy documentation has been enhanced with the use case of webhook servers in shoot clusters. by @ScheererJ [#10119]
- `[OPERATOR]` The default value for `machineDrainTimeout` in the documentation has been updated. by @hendrikKahl [#10128]
- `[DEVELOPER]` The documentation of the handling of file permissions in OperatingSystemConfig is now reflecting the actual behavior: if no permissions are defined, the operating system's defaults are used. by @ftl [#10152]
- `[USER]` User content has improved titles and descriptions by @Kostov6 [#10077]
- `[USER]` Added document in which we share our pod autoscaling best practices with end users. by @vlerenc [#10083]

## Helm Charts
- controlplane: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.100.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.100.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.100.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.100.0`
## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.100.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.100.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.100.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.100.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.100.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.100.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.100.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.100.0`
