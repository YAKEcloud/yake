# [gardener/gardener-extension-shoot-cert-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#175]
## 🏃 Others

- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.75.0 to 1.76.2. by @dependabot[bot] [#179]
- `[OPERATOR]` Refactor imagevector package to conform to usage pattern in gardener/gardener by @MartinWeindel [#181]
- `[OPERATOR]` Bumps golang from 1.20.6 to 1.21.0. by @dependabot[bot] [#178]
- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.76.2 to 1.77.0. by @dependabot[bot] [#180]
- `[USER]` Add configuration field `certExpirationAlertDays` to allow overriding default value in shoot manifest. by @MartinWeindel [#176]
# [gardener/cert-management]

## ⚠️ Breaking Changes

- `[OPERATOR]` Support of CRDs of version `apiextensions.k8s.io/v1beta1` is dropped. by @acumino [gardener/cert-management#133]
## 🐛 Bug Fixes

- `[OPERATOR]` Fix optional deployment of CRDs which was broken with release v0.10.8 by @MartinWeindel [gardener/cert-management#135]
## 🏃 Others

- `[OPERATOR]` Bump golang from `1.20.6` to `1.20.7` by @MartinWeindel [gardener/cert-management#134]