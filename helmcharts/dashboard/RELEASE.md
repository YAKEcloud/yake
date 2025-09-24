# [github.com/gardener/dashboard:1.82.2]

## 🐛 Bug Fixes
- `[USER]` Resolved a server error that occurred when retrieving information in the About dialog by @gardener-github-actions[bot] [[#2645](https://github.com/gardener/dashboard/pull/2645)]
- `[USER]` Fixed an issue where supported regions were not correctly identified as *recommended regions*. This caused invalid defaulting of regions, and in cases where `seedCandidateDeterminationStrategy` was set to `SameRegion`, the region list could incorrectly be empty by @gardener-github-actions[bot] [[#2646](https://github.com/gardener/dashboard/pull/2646)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.2`
