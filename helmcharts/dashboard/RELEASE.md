# [gardener/dashboard]

## ✨ New Features

- `[USER]` The Dashboard now recognizes and displays automatic update notifications according to the configured `update strategy` for machine image vendors by @grolu [#1807]
- `[OPERATOR]` Promoting `experimentalUseWatchCacheForListShoots` to Stable  
  - The `experimentalUseWatchCacheForListShoots` feature flag in the gardener-dashboard Helm chart, which was introduced with #1637, has now been promoted to stable and removed. Previously, this feature was gated behind the `Values.global.dashboard.experimentalUseWatchCacheForListShoots` Helm chart value. With this release, the feature is now enabled by default, which is equivalent to setting `Values.global.dashboard.experimentalUseWatchCacheForListShoots: always` by @petersutter [#1822]
- `[OPERATOR]` The dashboard supports a previous session secret. It allows for a seamless rotation of the session secret by supporting both the current and previous secrets. When installed using the helm chart, provide `Values.global.dashboard.sessionSecretPrevious`. Set this value to the previous sessionSecret during secret rotation, and leave it empty otherwise. by @petersutter [#1856]
## 🐛 Bug Fixes

- `[USER]` Fixed: Addressed an issue where the Dashboard incorrectly reported no available update paths to a Kubernetes version when no immediate supported minor version updates were available by @grolu [#1848]
- `[USER]` During session secret rotation, an unexpected error with code 500 could occur, requiring manual deletion of session cookies to resolve. This situation is now properly handled, and the user will be redirected to the login page accordingly. by @holgerkoser [#1869]
## 🏃 Others

- `[USER]` The last error description of the `Terminal` resource is shown on timeout. by @petersutter [#1810]
- `[OPERATOR]` Terminal: `terminal-controller-manager` `v0.32.0` required in order to display the last error description of the `Terminal` resource. by @petersutter [#1810]
- `[OPERATOR]` The component name is changed from `dashboard` to `gardener-dashboard`. by @ialidzhikov [#1857]
- `[OPERATOR]` The Helm chart was adapted to mount Kubernetes secrets as read-only files instead of storing them as environment variables, in order to comply with DISA STIG V-242415. by @petersutter [#1842]
- `[OPERATOR]` `Values.global.dashboard.oidc.clientSecret` is now optional. The dashboard can now also use a public OIDC client. by @petersutter [#1835]
- `[DEVELOPER]` The `Lease` object is no longer included in the Helm chart. Instead, it is now created dynamically during runtime if it does not already exist by @petersutter [#1823]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.75.0`
