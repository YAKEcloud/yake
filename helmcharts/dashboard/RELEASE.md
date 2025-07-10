# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` The temporary mapping from `accessRestriction.items[@key="seed.gardener.cloud/eu-access"]` to `accessRestriction.items[@key="eu-access-only"]` has been removed as previously announced ([ref](https://github.com/gardener/dashboard/pull/2196)). by @petersutter [#2452]
## ✨ New Features

- `[USER]` The dashboard now supports `Shoot.spec.cloudProfile`. Previously, `Shoot.spec.cloudProfileName` was used. by @petersutter [#2427]
## 🐛 Bug Fixes

- `[USER]` update of dependent autoscaler value will only be triggered after the ui element is not focused anymore by @klocke-io [#2490]
- `[USER]` Fixed Alertmanager URL by @petersutter [#2483]
- `[DEVELOPER]` install dependencies prior to running sast-lint by @ccwienk [#2510]
## 🏃 Others

- `[USER]` Added description for constraint DualStackNodesMigrationReady by @axel7born [#2502]
- `[OPERATOR]` Removed the logic that filters cloud profiles without a matching seed in the backend. All cloud profiles will now show up in the frontend. If a cloud profile without a matching seed is selected for a new cluster, a hint will be shown to the user by @grolu [#2454]
- `[DEVELOPER]` adapt server entry point from server.mjs to server.js in dashboard deployment template by @klocke-io [#2507]
- `[DEVELOPER]` migrade CICD-Pipelines to GitHub-Actions by @ccwienk [#2505]
