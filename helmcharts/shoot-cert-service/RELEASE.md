# [gardener/cert-management]

## 🐛 Bug Fixes

- `[USER]` Fixed key algorithm and bit size in self-signed certificates from a CA issuer. by @marc1404 [gardener/cert-management#451]
- `[OPERATOR]` fix: ClusterRole needs dnsrecord permissions when issuerUseDnsrecords is true by @matthias-horne [gardener/cert-management#460]
## 🏃 Others

- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [gardener/cert-management#468]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [gardener/cert-management#456]
- `[OPERATOR]` Add condition for deployment of CRDs in Helm charts by @MartinWeindel [gardener/cert-management#447]
## 📖 Documentation

- `[USER]` Added documentation for triggering a manual `Certificate` renewal. by @marc1404 [gardener/cert-management#443]
- `[USER]` Replaced usages of `secretName` in the `Certificate` spec with `secretRef`. by @marc1404 [gardener/cert-management#438]
# [gardener/gardener-extension-shoot-cert-service]

## 📰 Noteworthy

- `[OPERATOR]` Support for deploying the shoot-cert-service extension on the Garden runtime cluster. For runtime and seed clusters separate `cert-controller-manager` deployments can be triggered by `extensions.extensions.gardener.cloud` resources. by @MartinWeindel [#357]
## 🏃 Others

- `[OPERATOR]` Add `patch` verb for the `gardener-extension-heartbeat` resource in the RBAC rules by @MartinWeindel [#394]
- `[OPERATOR]` `RBAC` resources now explicitly state `resources` and `verbs`, replaced use of wildcards `*`. by @georgibaltiev [#362]

## Helm Charts
- shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/charts/gardener/extensions/shoot-cert-service:v1.50.0`
## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.50.0`
