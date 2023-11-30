# [gardener/gardener-extension-provider-alicloud]

## 📰 Noteworthy

- `[DEVELOPER]` Remove dependency to specific calico and cilium versions. by @axel7born [#659]
## ✨ New Features

- `[USER]` `provider-alicloud` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion) for more details.).  by @shafeeqes [#652]
## 🏃 Others

- `[OPERATOR]` The following image is updated:  
  - registry.eu-central-1.aliyuncs.com/gardener-de/alibaba-cloud-controller-manager:v1.9.3-372 -> registry-eu-central-1.ack.aliyuncs.com/acs/cloud-controller-manager-amd64:v2.7.0 by @shaoyongfeng [#654]
- `[OPERATOR]` Flow-based infrastructure reconciliation without Terraformer by @kevin-lacoo [#656]
- `[OPERATOR]` The following golang dependencies have been upgraded :  
  - `gardener/gardener`: `v1.81.0`->`v1.81.6`  
  - `k8s.io/*`: `v0.28.2`-> `v0.28.3`  
  - `sigs.k8s.io/controller-runtime`: `v0.16.2`-> `v0.16.3` by @shafeeqes [#660]
- `[DEVELOPER]` Add new unit tests. by @axel7born [#664]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @gardener-robot-ci-1 [gardener/machine-controller-manager#866]

## Docker Images
- gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.50.0`
- gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.50.0`

## Docker Images
gardener-extension-provider-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.50.0`
gardener-extension-admission-alicloud: `eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.50.0`