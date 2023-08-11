# [gardener/external-dns-management]

## 🐛 Bug Fixes

- `[OPERATOR]` Update controller-manager-library dependency to fix panic on api-resources discovery. by @MartinWeindel [gardener/external-dns-management#310]
## 🏃 Others

- `[OPERATOR]` Bump builder image from `golang:1.20.5` to `golang:1.20.7` by @MartinWeindel [gardener/external-dns-management#312]
- `[OPERATOR]` Reduce memory footprint for secrets. by @MartinWeindel [gardener/external-dns-management#312]
# [gardener/gardener-extension-shoot-dns-service]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-dns-service` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#218]
- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#222]
## 🏃 Others

- `[OPERATOR]` Bumps golang from 1.20.5 to 1.21.0. by @dependabot[bot] [#227]
- `[OPERATOR]` Ensure dns-controller-manager is restarted on CA rotation for remote-access server by @MartinWeindel [#223]
- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.75.0 to 1.76.2. by @dependabot[bot] [#228]
- `[OPERATOR]` Fix set_dependency_version for `workerlessSupported` by @MartinWeindel [#226]