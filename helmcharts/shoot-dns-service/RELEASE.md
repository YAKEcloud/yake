# [github.com/gardener/gardener-extension-shoot-dns-service:v1.78.0]

## ✨ New Features
- `[USER]` Support Trust Based Authentication by `WorkloadIdentity` for AWS Route53, Azure DNS, Azure Private DNS and Google Cloud DNS providers. by @MartinWeindel [[#663](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/663)]

## 🏃 Others
- `[OPERATOR]` Add seed label `service.dns.extensions.gardener.cloud/use-next-generation-controller` to control usage of next-generation controller. by @MartinWeindel [[#643](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/643)]
- `[OPERATOR]` The `.spec.trafficDistribution` field of the topology-aware Services will be automatically switched from the deprecated `PreferClose` to the new `PreferSameZone` option for Kubernetes 1.34+. by @Kostov6 [[#647](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/647)]
- `[OPERATOR]` Allow to configure the maximum QPS and burst to the apiserver for the `dns-controller-manager` with values `dnsControllerManager.configuration.kubeconfigBurst` and `dnsControllerManager.configuration.kubeconfigQPS` . by @MartinWeindel [[#664](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/664)]
- `[USER]` Classified "overlapping zones" as a non-retriable configuration error. by @acumino [[#653](https://github.com/gardener/gardener-extension-shoot-dns-service/pull/653)]

# [github.com/gardener/external-dns-management:v0.36.1]

## 🐛 Bug Fixes
- `[OPERATOR]` The `dnsprovider-replication` controller no longer replicates DNSProvider objects that carry a foreign dns.gardener.cloud/class annotation. Previously, such providers were copied to the target cluster and then instantly deleted, leading to avoidable processing. by @MartinWeindel [[#812](https://github.com/gardener/external-dns-management/pull/812)]

# [github.com/gardener/external-dns-management:v0.36.0]

## ✨ New Features
- `[OPERATOR]` Support Trust Based Authentication by `WorkloadIdentity` secrets for AWS Route53, Azure DNS, Azure Private DNS and Google Cloud DNS by @MartinWeindel [[#775](https://github.com/gardener/external-dns-management/pull/775)]

## 🏃 Others
- `[OPERATOR]` Fix race condition if only one of two expected gateway CRDs (either from group  `gateway.networking.k8s.io` or `networking.istio.io`) is deployed causing endless restarts. by @MartinWeindel [[#790](https://github.com/gardener/external-dns-management/pull/790)]

# [github.com/gardener/external-dns-management:v0.35.1]

## 🏃 Others
- `[OPERATOR]` Fix race condition if only one of two expected gateway CRDs (either from group  `gateway.networking.k8s.io` or `networking.istio.io`) is deployed causing endless restarts. (#790) by @Martin Weindel [[gardener/external-dns-management@30134a717b07f5d2ec7c706fe2b3d938be564cde](https://github.com/gardener/external-dns-management/commit/30134a717b07f5d2ec7c706fe2b3d938be564cde)]

## Helm Charts
- shoot-dns-service-admission-application: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-application:v1.78.0`
- shoot-dns-service-admission-runtime: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service-admission-runtime:v1.78.0`
- shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-dns-service:v1.78.0`
## Container (OCI) Images
- gardener-extension-admission-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.78.0`
- gardener-extension-shoot-dns-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.78.0`
