# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` [aws-route53] Support dual-stack AWS load balancers by creating additional AAAA record with alias target if annotation `service.beta.kubernetes.io/aws-load-balancer-ip-address-type=dualstack` (services only) or `dns.gardener.cloud/ip-stack=dual-stack` (ingresses,dnsentries, and services) is set. by @MartinWeindel [gardener/external-dns-management#350]
## 🏃 Others

- `[DEVELOPER]` Move canonicalhostedzone map of `aws-route53` provider to own package to allow reuse in [gardener/provider-aws](https://github.com/gardener/gardener-extension-provider-aws/). by @MartinWeindel [gardener/external-dns-management#348]
# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` The requirement for the admission controller to need cluster-wide read permissions for secrets has been dropped. by @timuthy [#280]
- `[OPERATOR]` Bumps golang from 1.21.5 to 1.21.6. by @dependabot[bot] [#283]
- `[DEVELOPER]` An issue causing the testmachinery test to fail to due to an outdated golang version in the TestDefinition is now fixed. by @ialidzhikov [#282]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.43.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.43.0`
