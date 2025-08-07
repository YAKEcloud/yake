# [gardener/gardener-extension-networking-calico]

## ⚠️ Breaking Changes

- `[OPERATOR]` `networking-calico` no longer supports Shoots with Кubernetes version <= 1.28. by @RadaBDimitrova [#684]
## 🏃 Others

- `[OPERATOR]` Admission controller and reconciliation now check the content of the networking provider configuration for validity and report problems. by @DockToFuture [#669]
- `[OPERATOR]` Enable the `usePodCidr` option for `ipam.cidr` during input validation. by @DockToFuture [#690]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [#686]
- `[OPERATOR]` Fixes a bug in Prometheus ScrapeConfigs that prevented Calico metrics from being collected. by @rickardsjp [#692]
