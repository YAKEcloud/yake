# [github.com/gardener/gardener-extension-provider-azure:v1.63.0]

## ✨ New Features
- `[USER]` This extension now supports shoot clusters with Kubernetes version 1.36.  
  You should consider the Kubernetes release notes before upgrading to 1.36. by @tobschli [[#1580](https://github.com/gardener/gardener-extension-provider-azure/pull/1580)]

## 🐛 Bug Fixes
- `[OPERATOR]` Update image vector for machine-controller-manager-provider-azure from `v0.20.0 -> v0.20.1`. by @thiyyakat [[#1572](https://github.com/gardener/gardener-extension-provider-azure/pull/1572)]

## 🏃 Others
- `[OPERATOR]` The `ServiceMonitor` that configures scraping of the `Remedy` controller by the shoot Prometheus is not rendered if the controller is disabled. by @vicwicker [[#1578](https://github.com/gardener/gardener-extension-provider-azure/pull/1578)]
- `[DEPENDENCY]` The following container images have been updated:  
    - machine-controller-manager-provider-azure: v0.20.1 -> v0.21.0 (singleton) by @federated-github-access[bot] [[#1598](https://github.com/gardener/gardener-extension-provider-azure/pull/1598)]
- `[DEPENDENCY]` The following container images have been updated:  
    - cloud-controller-manager: v1.32.18 -> v1.32.19 (patch)  
    - cloud-controller-manager: v1.33.14 -> v1.33.15 (patch)  
    - cloud-controller-manager: v1.34.11 -> v1.34.12 (patch)  
    - cloud-controller-manager: v1.35.6 -> v1.35.7 (patch)  
    - cloud-node-manager: v1.32.18 -> v1.32.19 (patch)  
    - cloud-node-manager: v1.33.14 -> v1.33.15 (patch)  
    - cloud-node-manager: v1.34.11 -> v1.34.12 (patch)  
    - cloud-node-manager: v1.35.6 -> v1.35.7 (patch)  
    - csi-driver-file: v1.35.4 -> v1.35.5 (singleton)  
    - csi-resizer: v2.2.0 -> v2.2.1 (singleton) by @federated-github-access[bot] [[#1579](https://github.com/gardener/gardener-extension-provider-azure/pull/1579)]

## application/spdx+json
- gardener-extension-admission-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:a1e9828ca7b8f5e617ecf64c37203eb5cf737a31a017c0348c7dd14593cac2a6`
- gardener-extension-admission-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:bd604a2f218cfa19ad47ec61d73db8280bf4d431cfe68b74484fe18cd41dc1be`
- gardener-extension-provider-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:1982f41ce5d439836e86880fb076dcb3e2ee2fe0554e108049f1119954111150`
- gardener-extension-provider-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:7273346b7f980f0e767253d55315105d5944326c37717a012d09b296fa8272c6`
## application/vnd.cyclonedx+json
- gardener-extension-admission-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:cdcc54abe61b108e8ba1ca2b90e41a9456aaf646d38c90374c96f6e216da67a4`
- gardener-extension-admission-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure@sha256:d0a169ba29f13324ae7c18c57dc2f7874e9c85fbf7b02a25342cbeb92813c472`
- gardener-extension-provider-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:33d6746d3619e7a81974021cc068443ac7d3ee9c6e0bc85a03213500f1440626`
- gardener-extension-provider-azure-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure@sha256:62f06db4ee58ea1a893800be6413c9f9f102200dabaa917cfca796b0bc4619cc`
## Helm Charts
- admission-azure-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-application:v1.63.0`
- admission-azure-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-azure-runtime:v1.63.0`
- provider-azure: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-azure:v1.63.0`
## Container (OCI) Images
- gardener-extension-admission-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.63.0`
- gardener-extension-provider-azure: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.63.0`
