# [github.com/gardener/gardener-extension-shoot-cert-service:v1.53.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Deployment on runtime cluster: `cert-class` needs also to be set for source controllers. by @MartinWeindel [[#461](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/461)]
- `[USER]` Control-plane certificate: Use `dnsNames` field instead of `commonName` for long domain names > 64 characters. by @MartinWeindel [[#445](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/445)]

## 🏃 Others
- `[OPERATOR]` `shoot-cert-service` no longer supports Shoots with Кubernetes version <= 1.28. by @MartinWeindel [[#437](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/437)]
- `[OPERATOR]` export testresults as inlined ocm-resource by @heldkat [[#438](https://github.com/gardener/gardener-extension-shoot-cert-service/pull/438)]


## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.53.0`
## Container (OCI) Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.53.0`
