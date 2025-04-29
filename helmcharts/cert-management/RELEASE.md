# [gardener/cert-management]

## 🐛 Bug Fixes

- `[OPERATOR]` fix: ClusterRole needs dnsrecord permissions when issuerUseDnsrecords is true by @matthias-horne [#460]
- `[USER]` Fixed key algorithm and bit size in self-signed certificates from a CA issuer. by @marc1404 [#451]
## 🏃 Others

- `[OPERATOR]` Containers, which do not require privilege escalations, now forbid privilege escalations explicitly. by @georgibaltiev [#468]
- `[OPERATOR]` Update base image from `debian11` to `debian12`. by @MartinWeindel [#456]
- `[OPERATOR]` Add condition for deployment of CRDs in Helm charts by @MartinWeindel [#447]
## 📖 Documentation

- `[USER]` Replaced usages of `secretName` in the `Certificate` spec with `secretRef`. by @marc1404 [#438]
- `[USER]` Added documentation for triggering a manual `Certificate` renewal. by @marc1404 [#443]

## Helm Charts
- cert-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/charts/cert-controller-manager:v0.17.6`
## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.17.6`
