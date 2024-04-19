# [gardener/gardener]

## 📰 Noteworthy

- `[OPERATOR]` Set `kube-apiserver` `maxReplicas=3` for all Shoots that are not annotated with `alpha.control-plane.scaling.shoot.gardener.cloud/scale-down-disabled=true`. by @voelzmo [#9605]
## ✨ New Features

- `[OPERATOR]` `gardener-operator` now deploys two Prometheus replicas into the `garden` namespace. Read more about it [here](https://github.com/gardener/gardener/blob/master/docs/concepts/operator.md#observability). by @rfranzke [#9543]
- `[OPERATOR]` A new gardenlet feature gate called `ShootManagedIssuer` was introduced. This feature gate guards the functionality described in [GEP-24](https://github.com/gardener/gardener/blob/master/docs/proposals/24-shoot-oidc-issuer.md) until all of the components mentioned in the enhancement proposal are implemented by Gardener. by @dimityrmirchev [#9489]
- `[OPERATOR]` A new admission plugin `ShootResourceReservation` has been added to `gardener-apiserver`. It supports calculating resource reservations (memory/CPU/PID) for the `kubelet.kubeReserved` fields in `Shoot`s based on the available resources of a machine type. This only applies when `typeDependentReservations` is set to `true`. Otherwise, the old static values remain to be used.  by @MichaelEischer [#9449]
- `[OPERATOR]` Support for proxy protocol is added to the istio ingress gateway to preserve the client source IP addresses. by @DockToFuture [#9526]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix kube-apiserver advertise address for ipv6 local setup. by @axel7born [#9555]
- `[OPERATOR]` When vali is disabled in the `GardenletConfiguration` its fluentbit `ClusterOutputs` are no longer deployed. by @maboehm [#9525]
- `[OPERATOR]` Istio-ingress gateway dashboard now shows the correct sent tcp traffic metric and the correct memory usage. by @ScheererJ [#9596]
- `[OPERATOR]` A bug in `gardener-node-agent` which prevented copying files between different block devices has been fixed. by @oliver-goetz [#9614]
- `[USER]` A bug which mounted the kubelet data volume to `/var/lib` instead of `/var/lib/kubelet` when `kubeletDataVolumeName` was set has been fixed. by @oliver-goetz [#9614]
## 🏃 Others

- `[OPERATOR]` The `vpn-seed-server` now has better minimum memory settings so that less auto-scaling should occur. by @ScheererJ [#9590]
- `[OPERATOR]` Resource utilization metrics for the kube-apiserver container are now federated in the runtime/prometheus. by @ialidzhikov [#9581]
- `[OPERATOR]` K8s dashboard tests are classified as `beta`. by @hendrikKahl [#9567]
- `[OPERATOR]` Update Istio to v1.21.1 by @axel7born [#9560]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.93.0`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.93.0`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.93.0`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.93.0`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.93.0`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.93.0`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.93.0`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.93.0`
