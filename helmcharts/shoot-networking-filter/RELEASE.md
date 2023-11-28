# [gardener/gardener-extension-shoot-networking-filter]

## ⚠️ Breaking Changes

- `[OPERATOR]` `extension-shoot-networking-filter` no longer supports Shoots with Кubernetes version < 1.22. by @shafeeqes [#71]
- `[OPERATOR]` The `security.gardener.cloud/pod-security-enforce` annotation in the ControllerRegistration is set to `baseline`. With this, the pods running in the extension namespace should comply with `baseline` pod-security standard. by @shafeeqes [#73]
## 🏃 Others

- `[OPERATOR]` Bump github.com/gardener/gardener from 1.83.0 to 1.84.0. by @dependabot[bot] [#99]
- `[OPERATOR]` Bumps golang from 1.21.1 to 1.21.2. by @dependabot[bot] [#88]
- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.80.1 to 1.81.1. by @dependabot[bot] [#91]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.0 to 1.82.1. by @dependabot[bot] [#94]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.81.1 to 1.82.0. by @dependabot[bot] [#93]
- `[OPERATOR]` Bump github.com/gardener/gardener from 1.82.1 to 1.83.0. by @dependabot[bot] [#96]
- `[OPERATOR]` The following dependency is updated:  
  - github.com/gardener/gardener: v1.77.0-> v1.80.1  
  - k8s.io/* : v0.26.3 -> v0.28.2  
  - sigs.k8s.io/controller-runtime: v0.14.6-> v0.16.2 by @acumino [#86]
- `[OPERATOR]` Bumps [github.com/gardener/gardener](https://github.com/gardener/gardener) from 1.76.0 to 1.77.0. by @dependabot[bot] [#81]
- `[OPERATOR]` Bumps golang from 1.21.2 to 1.21.3. by @dependabot[bot] [#90]
- `[OPERATOR]` Bumps golang from 1.21.3 to 1.21.4. by @dependabot[bot] [#97]

## Docker Images
- gardener-extension-shoot-networking-filter: `eu.gcr.io/gardener-project/gardener/extensions/shoot-networking-filter:v0.15.0`
