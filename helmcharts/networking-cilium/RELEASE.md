# [gardener/gardener-extension-networking-cilium]

## 🐛 Bug Fixes

- `[OPERATOR]` The `actuator.Delete` doesn't wait for ManagedResources to get deleted in case of `ForceDelete`. by @shafeeqes [#227]
- `[OPERATOR]` An issue in the charts missing versions for some resources is now fixed. by @shafeeqes [#225]
- `[OPERATOR]` Fixes an error that occurs when running with iptables-nft. by @axel7born [#229]
## 🏃 Others

- `[OPERATOR]` Reconciliation of hibernated cilium clusters now works again. by @ScheererJ [#226]

## Docker Images
- gardener-extension-admission-cilium: `eu.gcr.io/gardener-project/gardener/extensions/admission-cilium:v1.31.0`
- gardener-extension-networking-cilium: `eu.gcr.io/gardener-project/gardener/extensions/networking-cilium:v1.31.0`
