# [github.com/gardener/gardener-extension-provider-aws:v1.66.0]

## ✨ New Features
- `[OPERATOR]` providerConfig.nodeTemplate.virtualCapacity mapped to MachineClass NodeTemplate without triggering rollout by @elankath [[#1545](https://github.com/gardener/gardener-extension-provider-aws/pull/1545)]
- `[USER]` Shoot worker nodes can now take advantage of AWS Capacity Reservations by @AndreasBurger [[#1513](https://github.com/gardener/gardener-extension-provider-aws/pull/1513)]
- `[OPERATOR]` Adding VPC filter when finding resources by tags by @hebelsan [[#1558](https://github.com/gardener/gardener-extension-provider-aws/pull/1558)]

## 🐛 Bug Fixes
- `[OPERATOR]` Always use the same node subnet in case of duplicated zones by @hebelsan [[#1552](https://github.com/gardener/gardener-extension-provider-aws/pull/1552)]

## 🏃 Others
- `[OPERATOR]` Updated aws-sdk aws/smithy-go gardener/etcd-druid gardener/gardener-external-dns-management gardener/gardener gardener/machine-controller-manager ginkgo k8s.io/utils by @wpross [[#1554](https://github.com/gardener/gardener-extension-provider-aws/pull/1554)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-driver: v1.47.1 -> v1.52.1 (singleton)  
    - csi-driver-efs: v2.1.13 -> v2.1.14 (singleton)  
    - csi-provisioner: v5.3.0 -> v6.0.0 (singleton)  
    - csi-resizer: v1.14.0 -> v2.0.0 (singleton)  
    - csi-snapshot-controller: v8.3.0 -> v8.4.0 (singleton)  
    - csi-snapshotter: v8.3.0 -> v8.4.0 (singleton) by @gardener-github-actions[bot] [[#1523](https://github.com/gardener/gardener-extension-provider-aws/pull/1523)]
- `[OPERATOR]` Fix an issue with gateway endpoint validation not accepting valid DNS subdomains. by @kon-angelo [[#1536](https://github.com/gardener/gardener-extension-provider-aws/pull/1536)]
- `[OPERATOR]` Update image tag of `europe-docker.pkg.dev/gardener-project/releases/gardener/aws-ipam-controller` to `v0.8.0`. by @DockToFuture [[#1559](https://github.com/gardener/gardener-extension-provider-aws/pull/1559)]
- `[OPERATOR]` Updated aws-sdk gardener/gardener by @wpross [[#1569](https://github.com/gardener/gardener-extension-provider-aws/pull/1569)]
- `[OPERATOR]` Revert to v1.47.1 due to a regression in the calculation of allocatable volumes by @kon-angelo [[#1548](https://github.com/gardener/gardener-extension-provider-aws/pull/1548)]
- `[OPERATOR]` Ensure NATGateway contains a public IP in the creation step by @hebelsan [[#1572](https://github.com/gardener/gardener-extension-provider-aws/pull/1572)]
- `[OPERATOR]` Update EBS CSI to v1.50.2 by @kon-angelo [[#1544](https://github.com/gardener/gardener-extension-provider-aws/pull/1544)]
- `[OPERATOR]` Fix a bug where security group port with value 0 leads to a reconcile error by @hebelsan [[#1551](https://github.com/gardener/gardener-extension-provider-aws/pull/1551)]

## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.66.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.66.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.66.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.66.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.66.0`
