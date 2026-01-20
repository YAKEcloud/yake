# [github.com/gardener/gardener-extension-shoot-cert-service:v1.56.0]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#497](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/497)]
- `[OPERATOR]` Adjust DNS class if next generation dns-shoot-service settings detected. by @MartinWeindel [[#505](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/505)]

# [github.com/gardener/cert-management:v0.20.0]

## ✨ New Features
- `[USER]` Support `PKCS#8` encoding of certificate private key. For `Certificate` objects, set `.spec.privateKey.encoding` to `PKCS8`. For source objects like `Ingress` and `Service`, set the annotation `cert.gardener.cloud/private-key-encoding=PKCS8`. by @MartinWeindel [[#638](https://github.com/gardener/cert-management/pull/638)]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#633](https://github.com/gardener/cert-management/pull/633)]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.56.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.56.0`
