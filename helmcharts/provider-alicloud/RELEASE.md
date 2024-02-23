# [gardener/gardener-extension-provider-alicloud]

## ⚠️ Breaking Changes

- `[OPERATOR]` CA and server certificates for the admission component are managed automatically. Passing custom certificates via Helm values is not supported anymore. by @timuthy [#683]
- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references.  
   by @ccwienk [#673]
## 📰 Noteworthy

- `[DEVELOPER]` Remove dependency to specific calico and cilium versions. by @axel7born [#659]
## ✨ New Features

- `[USER]` The provider-alicloud extension does now support shoot clusters with Kubernetes version 1.29. You should consider the [Kubernetes release notes](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.29.md) before upgrading to 1.29.  by @acumino [#688]
- `[USER]` `provider-alicloud` extension now supports [Shoot Force Deletion](https://github.com/gardener/gardener/blob/master/docs/usage/shoot_operations.md#force-deletion) for more details.).  by @shafeeqes [#652]
## 🏃 Others

- `[OPERATOR]` The following image is updated:  
- `[OPERATOR]` Enhance NatGateway availableZone validation is moved to ConfigValidator, If first zone user sets under network section doesn't support enhance natgateway, an error will occur during shoot reconcile process. by @kevin-lacoo [#681]
- `[OPERATOR]` Bump github.com/gardener/gardener to 1.86.0. by @timuthy [#683]
- `[OPERATOR]` Now user can change EIP after infrastructure created in flow based case. by @kevin-lacoo [#686]
- `[OPERATOR]` Update terraformer to v2.24.0 by @kevin-lacoo [#685]
- `[DEVELOPER]` The `vendor` directory was removed in favor of the `go mod cache`. by @timuthy [#683]
# [gardener/machine-controller-manager]

## 🐛 Bug Fixes

- `[OPERATOR]` Removes `node.machine.sapcloud.io/not-managed-by-mcm` annotation from nodes managed by the MCM. by @gardener-robot-ci-1 [gardener/machine-controller-manager#866]

## Docker Images
- gardener-extension-admission-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.51.0`
- gardener-extension-provider-alicloud: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.51.0`
