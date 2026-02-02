# [github.com/gardener/external-dns-management:v0.35.0]

## 🐛 Bug Fixes
- `[OPERATOR]` Fixed an issue where gateway controllers could remain disabled if Kubernetes or Istio Gateway CRDs were added during dns-controller-manager startup. The manager now detects this condition and enforces a restart to ensure gateway resources are properly handled. by @MartinWeindel [[#764](https://github.com/gardener/external-dns-management/pull/764)]
- `[USER]` [Istio Gateway as source]: Handle wildcard value in field `spec.hosts` for virtual services correctly. by @MartinWeindel [[#751](https://github.com/gardener/external-dns-management/pull/751)]

## 🏃 Others
- `[OPERATOR]` The base image is updated to `gcr.io/distroless/static-debian13:nonroot`. by @MartinWeindel [[#752](https://github.com/gardener/external-dns-management/pull/752)]
- `[OPERATOR]` Update aws sdk to enable new regions by @kon-angelo [[#757](https://github.com/gardener/external-dns-management/pull/757)]
- `[DEVELOPER]` Reintroduce typed client for stakeholders, which has been removed by wrong assumptions in release `v0.34.0`. by @MartinWeindel [[#750](https://github.com/gardener/external-dns-management/pull/750)]

## Helm Charts
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/dns-controller-manager:v0.35.0`
## Container (OCI) Images
- dns-controller-manager-next-generation: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager-next-generation:v0.35.0`
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.35.0`
