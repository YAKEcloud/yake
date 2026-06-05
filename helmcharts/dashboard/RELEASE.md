# [github.com/gardener/dashboard:1.84.3]

## ⚠️ Breaking Changes
- `[OPERATOR]` Machine image vendor matching no longer uses substring/wildcard patterns. Image names must now exactly match an entry in `knownMachineImageVendors` (or the branding config `vendors.machineImage` array). Images without an exact match will display their raw name without vendor icon or grouping by @grolu [[#3001](https://github.com/gardener/dashboard/pull/3001)]

## 🐛 Bug Fixes
- `[USER]` Fix machine image vendor matching to use exact names instead of substring matching, preventing misclassification of images like memorone-gardenlinux or gardenlinux-fips by @grolu [[#3001](https://github.com/gardener/dashboard/pull/3001)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:00dfdc7a5715840962a45dc6ad8248149eeb82096596487e1fc20d18e222a05b`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:71f92cae4a0de4ff4c05a976702f7d4612e5cd5882a51afd2df3e4034c054456`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.3`
