# [gardener/gardener-extension-networking-cilium]

## 📰 Noteworthy

- `[OPERATOR]` Cilium operator HA logic now uses guaranteed (minimum) node count instead of maximum, preventing unnecessary node spin-up and reducing compute costs in single-node clusters; HA remains guaranteed for shoots with minimum ≥ 2. by @Lappihuan [#576]
- `[DEPENDENCY]` cilium-envoy got updated to v1.32.5 by @domdom82 [#562]
## 🐛 Bug Fixes

- `[OPERATOR]` Hubble relay cert generation now also works with private api server deployments by @domdom82 [#606]
- `[OPERATOR]` An issue preventing the networking-cilium extension to patch its heartbeat lease is now fixed. by @ialidzhikov [#559]
## 🏃 Others

- `[DEVELOPER]` migrate CICD-Pipelines to GitHub-Actions by @ccwienk [#585]
- `[DEVELOPER]` connectivity test stability has been improved and should be less flaky now by @domdom82 [#587]
- `[OPERATOR]` Dual-Stack should now work consistently regardless of the order of the IP families. by @ScheererJ [#609]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [#598]
- `[OPERATOR]` Fixes an issue where network status is not correct during migration to dual-stack.  by @axel7born [#611]
- `[OPERATOR]` Allow networking-cilium extension to be used in autonomous shoot clusters. by @ScheererJ [#567]
- `[OPERATOR]` Allows disabling IPv4, IPv6 and BPF masquerading in networking-cilium extension. by @vknabel [#573]
- `[OPERATOR]` Admission controller and reconciliation now check the content of the networking provider configuration for validity and report problems. by @ScheererJ [#584]
- `[OPERATOR]` The healthcheck controller is now removed. by @axel7born [#566]
- `[OPERATOR]` `kube-proxy-replacement-healthz-bind-address` is now correctly set when `kube-proxy` is disabled. by @ScheererJ [#603]
- `[OPERATOR]` Fixes some more bugs in Prometheus ScrapeConfigs that prevented Cilium metrics from being collected. by @rickardsjp [#610]
- `[OPERATOR]` Fixes a bug in Prometheus ScrapeConfigs that prevented Cilium metrics from being collected. by @ScheererJ [#608]
- `[OPERATOR]` Fix 'add-reports-to-component-descriptor' build step by @heldkat [#602]
- `[OPERATOR]` Fixed webhook for node-local-dns appending command line arguments multiple times. by @ScheererJ [#586]
- `[OPERATOR]` `networking-cilium` no longer supports Shoots with Кubernetes version <= 1.28. by @georgibaltiev [#597]
