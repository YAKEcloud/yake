# [github.com/gardener/gardener-extension-provider-aws:v1.69.0]

## 📰 Noteworthy
- `[OPERATOR]` The etcd StorageClass provisioner has been switched from in-tree `kubernetes.io/aws-ebs` to the EBS CSI driver `ebs.csi.aws.com`. The disk type is now configurable via `config.etcd.storage.parameters` in the Helm values (default: `type: gp3`).  
  The old way of configuring it via `.Values.config.etcd.storage.encrypted` is now deprecated and will be removed with a future release. by @voelzmo [[#1764](https://github.com/gardener/gardener-extension-provider-aws/pull/1764)]

## ✨ New Features
- `[OPERATOR]` Support mixed format for machine image specifications in CloudProfile and NamespacedCloudProfile, allowing both (legacy) architecture-per-region format and new capabilityFlavors format to coexist within the same CloudProfile for smooth migration. by @Roncossek [[#1645](https://github.com/gardener/gardener-extension-provider-aws/pull/1645)]
- `[USER]` `enableMTUCustomizer` field has been added to the `InfrastructureConfig` (default=true) to  
  preserve the existing behavior for all shoots. Users who no longer require the MTU to be set  
  to 1460 on worker nodes can opt out by setting `enableMTUCustomizer: false` in their shoot's `InfrastructureConfig`. by @axel7born [[#1732](https://github.com/gardener/gardener-extension-provider-aws/pull/1732)]

## 🐛 Bug Fixes
- `[OPERATOR]` Fix bastion creation by passing normalized capability definitions to `FindImageInCloudProfile` instead of raw CloudProfile spec values. by @Roncossek [[#1772](https://github.com/gardener/gardener-extension-provider-aws/pull/1772)]
- `[OPERATOR]` Support EFS in IPv6 only cluster. by @hebelsan [[#1675](https://github.com/gardener/gardener-extension-provider-aws/pull/1675)]
- `[USER]` It is again allowed shoots to use `WorkloadIdentity` as credentials for DNS management, e.g. via the `shoot.spec.dns.providers[].credentialsRef` field. by @vpnachev [[#1730](https://github.com/gardener/gardener-extension-provider-aws/pull/1730)]

## 🏃 Others
- `[OPERATOR]` Document route table entries limit if network overlay is disabled by @hebelsan [[#1744](https://github.com/gardener/gardener-extension-provider-aws/pull/1744)]
- `[OPERATOR]` updated github.com/gardener/gardener to v1.136.6 by @AndreasBurger [[#1748](https://github.com/gardener/gardener-extension-provider-aws/pull/1748)]
- `[OPERATOR]` VPC validation now also takes additional CIDR associations into account by @AndreasBurger [[#1747](https://github.com/gardener/gardener-extension-provider-aws/pull/1747)]
- `[OPERATOR]` [DEPRECATION] MTU customization on AWS nodes is being phased out. Previously, a DaemonSet on  
  seed nodes and a systemd unit on shoot nodes manually reduced network interface MTU to 1460.  
  With Calico and Cilium supporting MTU auto-detection, this is no longer required. A new  
  `MTUCustomizer` feature gate (default=true) has been introduced to allow gradual rollout of  
  the removal. Operators can proactively disable it by setting `featureGates.MTUCustomizer: false`  
  in the provider-aws controller configuration. The feature gate and all related code will be  
  removed in a future release. by @axel7born [[#1732](https://github.com/gardener/gardener-extension-provider-aws/pull/1732)]
- `[OPERATOR]` Update gardener to v1.139.0 by @hebelsan [[#1752](https://github.com/gardener/gardener-extension-provider-aws/pull/1752)]
- `[DEVELOPER]` Enhance Makefile to easily deploy to a remote cluster. by @matthias-horne [[#1751](https://github.com/gardener/gardener-extension-provider-aws/pull/1751)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v3.0.0 -> v3.2.1 (singleton)  
    - csi-driver: v1.56.0 -> v1.58.0 (singleton)  
    - csi-driver-efs: v2.3.0 -> v3.0.0 (singleton)  
    - csi-provisioner: v6.1.1 -> v6.2.0 (minor)  
    - csi-volume-modifier: v0.9.2 -> v0.9.3 (singleton)  
    - machine-controller-manager-provider-aws: v0.27.2 -> v0.27.3 (singleton) by @federated-github-access[bot] [[#1717](https://github.com/gardener/gardener-extension-provider-aws/pull/1717)]

## application/spdx+json
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:4484c396d6cb4963602be514fe3115a896b8d48374a3c83bdb66fd79ef3c23dc`
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:fcc1d45ec7d4562d7d9064a7401f633963897cf63fd027c528fcc26888b5ba01`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:9cca304b31d11cedbbf5eaf94cab4e9bef7be67b7583860d26a66f5fdbd0a198`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:c51e792601a9d7a5b603f3b4f9196af9d7c04529e50e6714b216c6c4c8086810`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.69.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.69.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.69.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.69.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.69.0`
