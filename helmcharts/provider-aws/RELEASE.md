# [gardener/machine-controller-manager]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`). Users should update their references. by @ccwienk [gardener/machine-controller-manager#878]
- `[DEVELOPER]`  New provider method Driver.InitializeMachine added for Post-Creation VM Instance Initialization steps. by @elankath [gardener/machine-controller-manager#898]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix for edge case of Node object deletion missed during machine termination. by @elankath [gardener/machine-controller-manager#887]
- `[DEVELOPER]` A bug in `UpdateNodeToMachine` which cause the IT to fail is fixed. by @elankath [gardener/machine-controller-manager#893]
- `[DEVELOPER]` MCM restart happens properly in integration tests now. This fix will get activated, once this version is vendored in your mcm-provider by @sssash18 [gardener/machine-controller-manager#879]
## 🏃 Others

- `[OPERATOR]` Removed vendor directory by @rishabh-11 [gardener/machine-controller-manager#903]
- `[OPERATOR]` Updated k8s dependencies to `v0.29.3` by @rishabh-11 [gardener/machine-controller-manager#907]
- `[OPERATOR]` fixed IT for seed with k8s >= 1.27 as control cluster  by @piyuagr [gardener/machine-controller-manager#869]
- `[OPERATOR]` machine controller won't reconcile machine on non-spec update events by @himanshu-kun [gardener/machine-controller-manager#877]
- `[OPERATOR]` Architecture field added in the nodetemplate. This will allow CA to pickup architecture from machine class and schedule pods on relevant arch nodes. by @sssash18 [gardener/machine-controller-manager#894]
- `[DEVELOPER]` go-git now removed from dependencies due to CVE's. by @elankath [gardener/machine-controller-manager#896]
- `[DEVELOPER]` Bump `k8s.io/*` deps to `v0.28.2` by @afritzler [gardener/machine-controller-manager#858]
## 📖 Documentation

- `[DEVELOPER]` Phase transition diagram for a machine object is added to FAQs by @himanshu-kun [gardener/machine-controller-manager#886]
# [gardener/machine-controller-manager-provider-aws]

## ✨ New Features

- `[OPERATOR]` Add `Ipv6AddressCount` and `Ipv6PrefixCount` to enable the assignment of an ipv6 address and an ipv6 prefix to instances. by @gardener-robot-ci-2 [gardener/machine-controller-manager-provider-aws#162]
- `[USER]` It is now possible to specify CPU options for AWS instances. by @AndreasBurger [gardener/machine-controller-manager-provider-aws#161]
- `[USER]` Implements the driver metrics added to MCM in version `0.50.0` such that duration of calls to AWS and any failed requests are recorded:  
  * driver_request_duration_seconds  
  * driver_requests_failed_total by @saley89 [gardener/machine-controller-manager-provider-aws#153]
## 🏃 Others

- `[OPERATOR]` Vendor directory removed by @rishabh-11 [gardener/machine-controller-manager-provider-aws#160]
# [gardener/gardener-extension-provider-aws]

## 📰 Noteworthy

- `[OPERATOR]` Aws error code `NoSuchHostedZone` is now ignored on DNSRecord deletion by @Kostov6 [#971]
## ✨ New Features

- `[USER]` CPU Options for AWS instances can now be set in the worker config. by @AndreasBurger [#924]
## 🏃 Others

- `[OPERATOR]` A problem with deploying MachineClasses that reference an operating system image whose version contains a `+` character was fixed.  by @MrBatschner [#983]
- `[OPERATOR]` Validation of shoots now takes the CloudProfile into account to make sure that the configured images are defined. by @AndreasBurger [#979]

## Docker Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.56.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.56.0`
