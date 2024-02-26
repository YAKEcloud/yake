# [gardener/gardener-extension-shoot-dns-service]

## 🏃 Others

- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.88.0 to 1.89.0. by @dependabot[bot] [#297]
- `[OPERATOR]` Bumps golang from 1.21.6 to 1.22.0. by @dependabot[bot] [#291]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.87.0 to 1.88.0. by @dependabot[bot] [#292]
# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` The Istio resource `Gateway` can now be annotated with `dns.gardener.cloud/dnsnames='*'` to enable the automatic creation of `DNSEntries` for domain names extracted from hosts fields in this resource or related `VirtualServices` resources.  
  The `Gateway` and `HTTPRoute` resources from the Gateway API are supported in a similar way. by @MartinWeindel [gardener/external-dns-management#354]
## 🐛 Bug Fixes

- `[OPERATOR]` Uncached listing of virtual services and httproutes by @MartinWeindel [gardener/external-dns-management#355]
- `[OPERATOR]` Ignore generated load balancer services of gateways. by @MartinWeindel [gardener/external-dns-management#355]
## 🏃 Others

- `[USER]` Ignore empty targets for slave entries on update. More concretely, if an ingress resource lose their load balancer addresses during an update, the old targets are kept until new targets are set. by @MartinWeindel [gardener/external-dns-management#357]

## Docker Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.45.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.45.0`
