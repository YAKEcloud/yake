# [github.com/gardener/gardener-extension-shoot-dns-service:v1.84.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Deploying the shoot-dns-service admission in a setup where the virtual cluster is NOT enabled is no longer supported. The presence of the virtual cluster is now always required. It is recommended to deploy the shoot-dns-service extension via the gardener-operator. by @MartinWeindel [[#739](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/739)]

# [github.com/gardener/external-dns-management:v0.42.0]

## 🏃 Others
- `[OPERATOR]` fix validation of GDC-ag credentials: check for correct type-string by @AndreasBurger [[#893](https://github.com/gardener/external-dns-management/pull/893)]

## application/spdx+json
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:7a18081c05f1f45400ac1874e3b516012885e00703cd85136794f17dcfae92f3`
- gardener-extension-admission-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service@sha256:a2b4d08d189e1062657236e793a82d9a50e31de448925169b88397fcf2f2522b`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:711a8db63b1adab35165be95bc39433de20c6b67a81c5a02db1abd9d1f969c38`
- gardener-extension-shoot-dns-service-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service@sha256:b5c47c2bb16bc69dcc37946009030ed52f40a0df2f9a2a047e9f0757a00c40e9`
## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.84.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.84.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.84.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.84.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.84.0`
