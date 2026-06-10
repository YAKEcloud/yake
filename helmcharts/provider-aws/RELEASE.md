# [github.com/gardener/gardener-extension-provider-aws:v1.71.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` ⚠️ This extension no longer support Gardener installation running with `github.com/gardener/gardener < v1.135.0`, kindly update `github.com/gardener/gardener` to version `>= v1.135.0` before updating the extension. by @vpnachev [[#1819](https://github.com/gardener/gardener-extension-provider-aws/pull/1819)]

## 🐛 Bug Fixes
- `[OPERATOR]` The AWS infrastructure controller now adds a self-referencing security group egress rule to the worker security group when any worker pool has an EFA-enabled network interface (`networkInterfaces[].type: efa` or `efa-only`). This rule is required for EFA's SRD traffic, which is not covered by the existing `egress 0.0.0.0/0` rule. by @shreyas-s-rao [[#1833](https://github.com/gardener/gardener-extension-provider-aws/pull/1833)]

## 🏃 Others
- `[OPERATOR]` Add support for InternalSecret validation in credentials binding by @hebelsan [[#1828](https://github.com/gardener/gardener-extension-provider-aws/pull/1828)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-attacher: v4.11.0 -> v4.12.0 (singleton)  
    - csi-driver: v1.59.0 -> v1.60.1 (singleton)  
    - csi-driver-efs: v3.1.0 -> v3.2.0 (singleton)  
    - csi-liveness-probe: v2.18.0 -> v2.19.0 (singleton)  
    - csi-node-driver-registrar: v2.16.0 -> v2.17.0 (singleton) by @federated-github-access[bot] [[#1814](https://github.com/gardener/gardener-extension-provider-aws/pull/1814)]
- `[DEPENDENCY]` The following container images have been updated:  
    - aws-load-balancer-controller: v3.3.0 -> v3.4.0 (singleton)  
    - csi-driver: v1.60.1 -> v1.61.1 (singleton) by @federated-github-access[bot] [[#1834](https://github.com/gardener/gardener-extension-provider-aws/pull/1834)]

## application/spdx+json
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:32006d92dc76e9316f55b7d3e649e06e53a5f2b3e5a8b26241325c4590e860da`
- gardener-extension-admission-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:df12cb8bd48daf9290f8552baae9925ee258c62712a627710f991d780f3ed00b`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:7821ff667760e2fab2c10432a3520c2920645a01721fe2d670e7e930fc01774c`
- gardener-extension-provider-aws-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:936202daf841481d0960bb56b0fa0be1617994714a815c41ecdb874f37da3930`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.71.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.71.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.71.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.71.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.71.0`
