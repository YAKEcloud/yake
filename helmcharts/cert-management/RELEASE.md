# [github.com/gardener/cert-management:v0.20.0]

## ✨ New Features
- `[USER]` Support `PKCS#8` encoding of certificate private key. For `Certificate` objects, set `.spec.privateKey.encoding` to `PKCS8`. For source objects like `Ingress` and `Service`, set the annotation `cert.gardener.cloud/private-key-encoding=PKCS8`. by @MartinWeindel [[#638](https://github.com/gardener/cert-management/pull/638)]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#633](https://github.com/gardener/cert-management/pull/633)]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.20.0`
## Container (OCI) Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.20.0`
