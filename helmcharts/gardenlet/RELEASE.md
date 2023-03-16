# [gardener]
## ⚠️ Breaking Changes
* *[OPERATOR]* All the functionality related to the deprecated field `spec.dns.ingressDomain` in the Seed has been removed. Subsequently, `.spec.dns.ingressDomain` will be dropped from the Seed API in a later release of Gardener. Before upgrading to this Gardener version, make sure to switch all seeds to `.spec.ingress` and `.spec.dns.provider`. Please find more details here, https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#kubernetes-cluster-that-should-be-registered-as-a-seed-cluster ([gardener/gardener#7529](https://github.com/gardener/gardener/pull/7529), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* The fields `.spec.dns.provider.domains` and `.spec.dns.provider.zones` in the Seed are deprecated, and all the functionality related to the deprecated fields has been removed. Subsequently these fields will be dropped from the Seed API in a later release of Gardener. Before upgrading to this Gardener version, make sure to switch all seeds not to use these fields. ([gardener/gardener#7529](https://github.com/gardener/gardener/pull/7529), [@shafeeqes](https://github.com/shafeeqes))
* *[OPERATOR]* The `ForceRestore` feature gate has been removed. ([gardener/gardener#7543](https://github.com/gardener/gardener/pull/7543), [@plkokanov](https://github.com/plkokanov))
* *[OPERATOR]* The Gardener API server now has the following validation enforced for ManagedSeeds: ([gardener/gardener#7546](https://github.com/gardener/gardener/pull/7546), [@ialidzhikov](https://github.com/ialidzhikov))
  * It is now forbidden to set the Seed `secretRef` when the Shoot static token kubeconfig is disabled. (`ManagedSeed` admission plugin)
  * It is now forbidden to disable the Shoot static token kubeconfig when the Seed `secretRef` is set. (`ShootManagedSeed` admission plugin)
## ✨ New Features
* *[OPERATOR]* A new feature for toplogy-aware routing is introduced. The feature enables topology-aware traffic routing in the seed clusters using the Kubernetes feature `TopologyAwareHints`. For more details, see the [Topology-aware Traffic Routing documentation](https://github.com/gardener/gardener/blob/v1.66.0/docs/usage/topology_aware_routing.md). ([gardener/gardener#7191](https://github.com/gardener/gardener/pull/7191), [@ialidzhikov](https://github.com/ialidzhikov))
* *[OPERATOR]* A new feature gate (alpha) `FullNetworkPoliciesInRuntimeCluster` was introduced. If enabled, it adds `NetworkPolicy`s to namespaces running extensions. Only enable this when all extensions registered in your system support it. ([gardener/gardener#7589](https://github.com/gardener/gardener/pull/7589), [@rfranzke](https://github.com/rfranzke))
## 🐛 Bug Fixes
* *[OPERATOR]* Updates to the `AuditPolicy` referenced by `Shoot`s are now also validated against the Kubernetes versions of those shoot clusters. This fixes an issue where it was possible to specify an unsupported `audit.k8s.io` version when updating the `ConfigMap` which contains the `AuditPolicy`. ([gardener/gardener#7563](https://github.com/gardener/gardener/pull/7563), [@plkokanov](https://github.com/plkokanov))
* *[OPERATOR]* A bug has been fixed which prevented `blackbox-exporter` to scrape the `kube-apiserver`s of shoot clusters via the `istio-ingressgateway`. As a result, its "external probe" was always failing. ([gardener/gardener#7603](https://github.com/gardener/gardener/pull/7603), [@rfranzke](https://github.com/rfranzke))
* *[OPERATOR]* Fixes control-plane migration of hibernated shoot being stuck if shoot was hibernated for 24h ([gardener/gardener#7608](https://github.com/gardener/gardener/pull/7608), [@Kumm-Kai](https://github.com/Kumm-Kai))
## 📖 Documentation
* *[USER]* Add additional information about custom server config to custom-dns-config docs. ([gardener/gardener#7559](https://github.com/gardener/gardener/pull/7559), [@axel7born](https://github.com/axel7born))
* *[USER]* Adding documentation on the webhook remediator and how users can to fix it ([gardener/gardener#7535](https://github.com/gardener/gardener/pull/7535), [@etiennnr](https://github.com/etiennnr))
## 🏃 Others
* *[USER]* The `.spec.kubernetes.kubeAPIServer.enableBasicAuthentication` field is now no-op - the `gardener-apiserver` no longer defaults this field and no longer validates it. The field will be set always to `nil` on CREATE/UPDATE request. ([gardener/gardener#7534](https://github.com/gardener/gardener/pull/7534), [@ialidzhikov](https://github.com/ialidzhikov))
  * End users specifying this field should no longer specify it. The field will be removed in a future version of Gardener.
* *[OPERATOR]* The golang version is now updated to `1.20.1`. ([gardener/gardener#7553](https://github.com/gardener/gardener/pull/7553), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The following dependency is updated: ([gardener/gardener#7553](https://github.com/gardener/gardener/pull/7553), [@acumino](https://github.com/acumino))
  * go.uber.org/automaxprocs: v1.4.0 -> v1.5.1
  * golang.org/x/crypto: v0.1.0 -> v0.6.0
  * golang.org/x/tools: v0.4.0 -> v0.6.0
  * gonum.org/v1/gonum: v0.11.0 -> v0.12.0
  * github.com/onsi/ginkgo/v2: v2.6.1 -> v2.8.3
  * github.com/onsi/gomega: v1.24.2 -> v1.27.1
* *[OPERATOR]* Removed `minAllowed.cpu` from all VPA objects ([gardener/gardener#7572](https://github.com/gardener/gardener/pull/7572), [@voelzmo](https://github.com/voelzmo))
* *[OPERATOR]* This PR adds required labels for exposureclass handler in `vpn-seed-server` service so that `NetworkPolicy` controller can create required network policies for allowing ingress traffice to `vpn-seed-server` pods. ([gardener/gardener#7587](https://github.com/gardener/gardener/pull/7587), [@acumino](https://github.com/acumino))
* *[OPERATOR]* The `BackupEntry` and `Shoot` "Migration" reconcilers were removed, as part of the removal of the control plane migration "bad case" scenario. ([gardener/gardener#7543](https://github.com/gardener/gardener/pull/7543), [@plkokanov](https://github.com/plkokanov))
* *[OPERATOR]* The ManagedSeed controller does no longer tries to sync the Seed kubeconfig Secret when Shoot's static token kubeconfig is not enabled. ([gardener/gardener#7546](https://github.com/gardener/gardener/pull/7546), [@ialidzhikov](https://github.com/ialidzhikov))
* *[DEVELOPER]* Network policies for `Istio-System` and `Istio-Ingress` have been adapted and now make use of GRM's [NetworkPolicy Controller](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#networkpolicy-controller). ([gardener/gardener#7570](https://github.com/gardener/gardener/pull/7570), [@timuthy](https://github.com/timuthy))
* *[DEVELOPER]* Update to Go `1.20.2`. ([gardener/gardener#7616](https://github.com/gardener/gardener/pull/7616), [@oliver-goetz](https://github.com/oliver-goetz))
# [etcd-backup-restore]
## 🐛 Bug Fixes
* *[OPERATOR]* Fixes a bug in snapshotter loop when backup-restore fails to collect events or fails to apply watch if required etcd revision has been compacted. ([gardener/etcd-backup-restore#602](https://github.com/gardener/etcd-backup-restore/pull/602), [@ishan16696](https://github.com/ishan16696))
# [hvpa-controller]
## 🏃 Others
* *[OPERATOR]* Bumped golang.org/x/text from 0.3.7 to 0.3.8 ([gardener/hvpa-controller#116](https://github.com/gardener/hvpa-controller/pull/116), [@dependabot[bot]](https://github.com/dependabot[bot]))
* *[OPERATOR]* Bumped golang.org/x/net from 0.0.0-20220722155237-a158d28d115b to 0.7.0 ([gardener/hvpa-controller#118](https://github.com/gardener/hvpa-controller/pull/118), [@dependabot[bot]](https://github.com/dependabot[bot]))