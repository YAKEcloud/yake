# [github.com/gardener/dashboard:1.82.0]

## ✨ New Features
- `[USER]` Added icon picker for custom fields by @petersutter [[#2572](https://github.com/gardener/dashboard/pull/2572)]
- `[OPERATOR]` Real-time updates for seeds are now supported. In the shoot list, you can now see the conditions of the corresponding seed cluster in the `Seed Readiness` column. The `Seed` column has also been moved close to the newly introduced `Seed Readiness` column. by @petersutter [[#2444](https://github.com/gardener/dashboard/pull/2444)]
- `[USER]` Add support for STACKIT infrastructure by @maboehm [[#2610](https://github.com/gardener/dashboard/pull/2610)]
- `[USER]` Considers project tolerations for cloudprofile selection in shoot creation dialog by @klocke-io [[#2589](https://github.com/gardener/dashboard/pull/2589)]
- `[USER]` Added support for `Project` titles by @marc1404 [[#2470](https://github.com/gardener/dashboard/pull/2470)]

## 🐛 Bug Fixes
- `[DEVELOPER]` Fix flaky test and pin NodeJS version for reproduceable pipeline runs by @klocke-io [[#2585](https://github.com/gardener/dashboard/pull/2585)]

## 🏃 Others
- `[DEVELOPER]` Adds a central serve command to start the development serve in both the backend and frontend. by @klocke-io [[#2633](https://github.com/gardener/dashboard/pull/2633)]
- `[DEVELOPER]` Add minimal AGENTS.md setup by @klocke-io [[#2622](https://github.com/gardener/dashboard/pull/2622)]
- `[DEVELOPER]` Migrated backend from CommonJS to ESM and added a temporary transpilation step for Jest tests, which are still in CommonJS until a later migration by @klocke-io [[#2494](https://github.com/gardener/dashboard/pull/2494)]


## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.82.0`
