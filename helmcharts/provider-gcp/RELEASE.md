# [github.com/gardener/gardener-extension-provider-gcp:v1.53.3]

## 🐛 Bug Fixes
- `[USER]` The `ingress-gce` pod is now rolled when the shoot's `cloudprovider` secret changes, so GCP LoadBalancer services no longer fail with `Invalid JWT Signature` after a service account key rotation. by @kon-angelo [[#1454](https://github.com/gardener/gardener-extension-provider-gcp/pull/1454)]

## application/spdx+json
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:1bfc6ee8150cb90d606d7bdd6c6e81703d84ebad713290490d348108cd4423ec`
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:9a552248a1d281dee09cfaf75088d947748df0bb2f017220055f777f3e483e6a`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:01a2b7e0a2eb2a6fdfa26768190f5f1cc0829e99c7bdf919daf3f4f5137392e8`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:8f97696e9bb742aeef0376fbc766d32634ce7b4f22f17e398ad3b34c9473fab9`
## application/vnd.cyclonedx+json
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:01efcf648d70cab5c1086aec1f62f843a3241fb3a22cc3672103595e43fd81f6`
- gardener-extension-admission-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp@sha256:57b71ca243ce563761fb2ff578279aa2cfbad19a61e50dc6a1ff4aa17ae0d809`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:0d2711a08de1826e887e129780efd2a925a6f96da63467e01a5ed4798eef303b`
- gardener-extension-provider-gcp-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp@sha256:e33f85d7d448ad86071d8a07d5cbab0ecfc0c029d7372b0b92f7bd29413ca462`
## Helm Charts
- admission-gcp-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-application:v1.53.3`
- admission-gcp-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/admission-gcp-runtime:v1.53.3`
- provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/provider-gcp:v1.53.3`
## Container (OCI) Images
- gardener-extension-admission-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.53.3`
- gardener-extension-provider-gcp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.53.3`
