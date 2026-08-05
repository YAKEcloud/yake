# [github.com/gardener/gardener-extension-provider-aws:v1.73.0]

## 📰 Noteworthy
- `[OPERATOR]` Adds capability to deploy shoot in existing subnet and provides better support for BYO infrastructure scenarios such user route-tables, security groups, ingress and egress traffic control. by @kon-angelo [[#1741](https://github.com/gardener/gardener-extension-provider-aws/pull/1741)]
- `[USER]` The `WorkloadIdentity` validation has been improved to ensure the configured `roleARN` is formatted correctly. by @vpnachev [[#1906](https://github.com/gardener/gardener-extension-provider-aws/pull/1906)]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.36.  
  You should consider the Kubernetes release notes before upgrading to 1.36. by @tobschli [[#1921](https://github.com/gardener/gardener-extension-provider-aws/pull/1921)]
- `[DEVELOPER]` A new webhook `seed-pvca` is introduced that ensures that there is at least 6 Hours between pvc upscales on aws seeds by @Kostov6 [[#1745](https://github.com/gardener/gardener-extension-provider-aws/pull/1745)]

## 🐛 Bug Fixes
- `[USER]` Capture correct `aws_ebs_csi_ec2_detach_pending_seconds_total` metric for CSI driver. by @matthias-horne [[#1886](https://github.com/gardener/gardener-extension-provider-aws/pull/1886)]

## application/spdx+json
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:7f57d116c04a1ca03a761256cac29e63970d3777a3958dbfb038dc064247eba6`
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:cdf1d9b931c504968da50ed01ec55205b78f3db311001b543fd91029821f2f70`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:0c202f0b8c51a7ada18f105e984aaf1ca33a393914c64d9b51cf2d43c93784e0`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:787ac694f3f0a6633862dc945c15305214469eeeb7aacc88429a269deb9e34b0`
## application/vnd.cyclonedx+json
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:0cf2efc7bd264042ac28c2209ec261f64f101fd004e6b774274262b91d8c41e2`
- gardener-extension-admission-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws@sha256:65f20e1e52bfbaa285d0e352517d5e5dec4b9c131fe9528c307ded649cf3d3c3`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:20e9c8900368e2ef9a398330efa5088e08c04ac19c0d08d17b2006e8951f6151`
- gardener-extension-provider-aws-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws@sha256:214863068c521cee36cc48fc10edcb16d3a0eec248ba17c39dc3637ed5694bc5`
## Helm Charts
- admission-aws-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-application:v1.73.0`
- admission-aws-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-aws-runtime:v1.73.0`
- provider-aws: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-aws:v1.73.0`
## Container (OCI) Images
- gardener-extension-admission-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.73.0`
- gardener-extension-provider-aws: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.73.0`
