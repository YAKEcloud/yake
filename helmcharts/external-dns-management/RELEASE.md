# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` [aws-route53] Support dual-stack AWS load balancers by creating additional AAAA record with alias target if annotation `service.beta.kubernetes.io/aws-load-balancer-ip-address-type=dualstack` (services only) or `dns.gardener.cloud/ip-stack=dual-stack` (ingresses,dnsentries, and services) is set. by @MartinWeindel [#350]
## 🏃 Others

- `[DEVELOPER]` Move canonicalhostedzone map of `aws-route53` provider to own package to allow reuse in [gardener/provider-aws](https://github.com/gardener/gardener-extension-provider-aws/). by @MartinWeindel [#348]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.17.0`
