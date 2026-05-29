# [github.com/gardener/gardener-extension-provider-aws:v1.70.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` `provider-aws` no longer supports Shoots with Кubernetes version <= 1.30. by @acumino [[#1763](https://github.com/gardener/gardener-extension-provider-aws/pull/1763)]
- `[OPERATOR]` ⚠️ This extension no longer supports Kubernetes versions `<= 1.31`. Please make sure to upgrade all Garden, Seed and Shoot clusters to at least version 1.32 before deploying this extension version. by @timuthy [[#1785](https://github.com/gardener/gardener-extension-provider-aws/pull/1785)]

## ✨ New Features
- `[USER]` Metrics for the CSI driver controller are now enabled by @matthias-horne [[#1773](https://github.com/gardener/gardener-extension-provider-aws/pull/1773)]
- `[USER]` Add ability to specify IPv6CIDR from an IPAM pool by @guydc [[#1799](https://github.com/gardener/gardener-extension-provider-aws/pull/1799)]
- `[USER]` Add `networkInterfaces` field to WorkerConfig API for configuring multiple EFA network interfaces with network card index ranges and device index ranges on GPU worker pools by @shreyas-s-rao [[#1791](https://github.com/gardener/gardener-extension-provider-aws/pull/1791)]
- `[USER]` Add `placement` field to WorkerConfig API for configuring placement groups, tenancy, dedicated hosts, and partition numbers on worker pools by @shreyas-s-rao [[#1791](https://github.com/gardener/gardener-extension-provider-aws/pull/1791)]
- `[USER]` Add `instanceMarketOptions` field to WorkerConfig API for configuring options like `spot` instances, `capacity-block` (for targeting ML capacity block reservations), `interruptible-capacity-reservation`. by @shreyas-s-rao [[#1791](https://github.com/gardener/gardener-extension-provider-aws/pull/1791)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix `NamespacedCloudProfile` admission to populate `capabilityFlavors` on spec machine images and allow expirationDate-only overrides of parent versions without requiring a providerConfig entry. by @Roncossek [[#1797](https://github.com/gardener/gardener-extension-provider-aws/pull/1797)]
- `[USER]` Validation no longer assumes all subnets of a zone must be covered by a single VPC cidr by @AndreasBurger [[#1813](https://github.com/gardener/gardener-extension-provider-aws/pull/1813)]
- `[DEVELOPER]` Validate that `capabilityDefinitions` is not empty in `FindImageInCloudProfile` to fail fast when normalization was skipped. by @Roncossek [[#1775](https://github.com/gardener/gardener-extension-provider-aws/pull/1775)]

## 🏃 Others
- `[OPERATOR]` Update aws-custom-route-controller image tag to `v0.16.0`. by @MartinWeindel [[#1794](https://github.com/gardener/gardener-extension-provider-aws/pull/1794)]
- `[OPERATOR]` Calico mutating admission policy chart uses the correct API version based on the shoot's Kubernetes version, and aligns the enable/disable logic accordingly. by @DockToFuture [[#1770](https://github.com/gardener/gardener-extension-provider-aws/pull/1770)]
- `[OPERATOR]` Explicitly set 'NLBGatewayAPI' and 'ALBGatewayAPI' featuregates on AWS LB controller to false to avoid autodetection by the controller which results in issues with permissions and CRDs by @AndreasBurger [[#1786](https://github.com/gardener/gardener-extension-provider-aws/pull/1786)]
- `[OPERATOR]` Bump `machine-controller-manager-provider-aws` to `v0.28.0`. by @shreyas-s-rao [[#1791](https://github.com/gardener/gardener-extension-provider-aws/pull/1791)]
- `[OPERATOR]` Enables the backupentry controller in the runtime cluster by @hebelsan [[#1806](https://github.com/gardener/gardener-extension-provider-aws/pull/1806)]
- `[OPERATOR]` `MachineClass`es and their `Secret`s are now deployed with the controller-runtime's client instead of using the [`github.com/gardener/gardener/pkg/client/kubernetes.ChartApplier`](https://github.com/gardener/gardener/blob/b5d62d852baa2256c8dab11451cc1f8d2692bc6f/pkg/client/kubernetes/chartapplier.go#L18-L24) and the `machineclass` chart.  
  Additionally, the deployments are done in parallel, which speeds up the whole operation. This is important for cases when there is high latency to the `kube-apiserver` and a large number of resources have to be deployed. by @plkokanov [[#1731](https://github.com/gardener/gardener-extension-provider-aws/pull/1731)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v3.2.1 -> v3.3.0 (singleton)  
    - csi-driver: v1.58.0 -> v1.59.0 (singleton)  
    - csi-driver-efs: v3.0.0 -> v3.1.0 (singleton) by @federated-github-access[bot] [[#1774](https://github.com/gardener/gardener-extension-provider-aws/pull/1774)]

## application/spdx+json
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:0c07ebfc90b62ddec6bb82a633c94e08e5e0b733e0bde04f0c6eb38c337ff017`
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:3f578059b1dafc06d4bd739ae956d21b0139e4c9941c0c61e0e337b58435491c`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:08c06e9b50c1ca1995d80372ff23db25100dee3ea6e9fcdab3c4b95ebe4132a8`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:eeaf6c50ac863dd48f24667d94b65a29f6186a6b1e8bb2560f84c46f20309efa`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.70.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.70.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.70.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.70.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.70.0`
