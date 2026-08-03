# [github.com/gardener/gardener-extension-provider-gcp:v1.54.0]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.32 again. by @tobschli [[#1442](https://github.com/gardener/gardener-extension-provider-gcp/pull/1442)]

## 🐛 Bug Fixes
- `[OPERATOR]` Added missing extension class filtering to the backupentry controller by @hebelsan [[#1460](https://github.com/gardener/gardener-extension-provider-gcp/pull/1460)]
- `[OPERATOR]` The `ingress-gce` deployment now rolls when the mounted `cloud-provider-config-ingress-gce` ConfigMap changes. by @kon-angelo [[#1458](https://github.com/gardener/gardener-extension-provider-gcp/pull/1458)]
- `[USER]` The `ingress-gce` pod is now rolled when the shoot's `cloudprovider` secret changes, so GCP LoadBalancer services no longer fail with `Invalid JWT Signature` after a service account key rotation. by @xavier-re [[#1452](https://github.com/gardener/gardener-extension-provider-gcp/pull/1452)]

## 🏃 Others
- `[OPERATOR]` Metrics for the CSI driver controller are now enabled by @hebelsan [[#1457](https://github.com/gardener/gardener-extension-provider-gcp/pull/1457)]
- `[OPERATOR]` Update image vector for machine-controller-manager-provider-gcp from `v0.28.0 → v0.28.1`. by @aaronfern [[#1444](https://github.com/gardener/gardener-extension-provider-gcp/pull/1444)]
- `[DEPENDENCY]` The following container images have been updated:  
    - csi-resizer: v2.2.0 -> v2.2.1 (singleton) by @federated-github-access[bot] [[#1450](https://github.com/gardener/gardener-extension-provider-gcp/pull/1450)]

## application/spdx+json
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:9550dccc42dcdf2bd45bcb0472547d6c8cce9253bba9cdafbc571a78fed79245`
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:95fb881f2fd9a958cbdab685cc32d717a6af99cd82b12480cf91c1dc2ffe09e8`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:6df1d0d09f87c7233184379c605639bf1190c0d42f58245733e6248a1a5bc3d5`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:a2f4b485c46e98d061c75a296bc41447232f780baae5fde0a49810fbd98024e2`
## application/vnd.cyclonedx+json
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:28a510746bfd5fc34a6c2ec6e20d2f31c05d8df52aa0abac5f78193459834278`
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:c4f86dfdd7ed40ab04cb58d9cda1714f0e03f1d7ba0015d9896856d0337c9b35`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:f983c2ad67831af9f56894a55db1c9ff5eb5697ef63830feddeeda5480123a2a`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:ff2397e12c2688409dd3acc9253ccd8ccfdc6030568f085ac7fa60245e38e551`
## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.54.0`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.54.0`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.54.0`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.54.0`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.54.0`
