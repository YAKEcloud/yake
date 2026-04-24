# [github.com/gardener/dashboard:1.84.0]

## ✨ New Features
- `[OPERATOR]` Add `avatarSource` frontend config to control avatar display (values: `gravatar`, `none`). Setting `none` displays placeholder icons instead of Gravatar images. by @petersutter [[#2752](https://github.com/gardener/dashboard/pull/2752)]
- `[OPERATOR]` The dashboard now displays seeds in a dedicated table by @petersutter [[#2776](https://github.com/gardener/dashboard/pull/2776)]
- `[OPERATOR]` Vendor Branding  
  - Define order, name and icon of cloud providers in dashboard configuration  
  - Define order, name and icon of machine image vendors in dashboard configuration  
  - Extend built-in providers by providing additional configuration by @grolu [[#2695](https://github.com/gardener/dashboard/pull/2695)]
- `[OPERATOR]` A link to the seed plutono is displayed on the shoot details page by @petersutter [[#2805](https://github.com/gardener/dashboard/pull/2805)]
- `[OPERATOR]` Add optional PodDisruptionBudget, affinity, and securityContext configuration to the Helm chart for improved availability and security hardening. by @r3m1n0x [[#2745](https://github.com/gardener/dashboard/pull/2745)]
- `[USER]` Seed details page by @petersutter [[#2820](https://github.com/gardener/dashboard/pull/2820)]
- `[USER]` Prevent search engines from crawling the dashboard UI. The dashboard will no longer be automatically indexed by @klocke-io [[#2773](https://github.com/gardener/dashboard/pull/2773)]
- `[USER]` Added support for using Workload Identities when managing DNS providers in the dashboard by @grolu [[#2838](https://github.com/gardener/dashboard/pull/2838)]
- `[USER]` Landscape viewers with `create` `shoots/viewerkubeconfig` (in case of managed seeds) or `get` `configmaps` permission (in case of non-managed seeds) in the `garden` namespace now see the "Target Control Plane" gardenctl command without requiring admin access. by @petersutter [[#2890](https://github.com/gardener/dashboard/pull/2890)]
- `[USER]` Shoot and seed status tags in the cluster list are now horizontally scrollable when they overflow the available space by @grolu [[#2905](https://github.com/gardener/dashboard/pull/2905)]

## 🐛 Bug Fixes
- `[USER]` Fixed sorting by KIND column in infrastructure credentials table could lead to table not being rendered by @grolu [[#2916](https://github.com/gardener/dashboard/pull/2916)]
- `[USER]` Resolved multiple styling issues that resulted in unnecessary scrollbars in some environments by @grolu [[#2909](https://github.com/gardener/dashboard/pull/2909)]
- `[USER]` Use the new `rotate-etcd-encryption-key` annotation to rotate the ETCD encryption key. This operation is no longer performed in two steps. This updated approach is required for clusters running Kubernetes version 1.34.0 and later by @grolu [[#2908](https://github.com/gardener/dashboard/pull/2908)]
- `[USER]` Fixed an incorrect warning message for forced machine image update by @grolu [[#2775](https://github.com/gardener/dashboard/pull/2775)]
- `[USER]` Fixed an issue with web-terminals that require confirmation by @grolu [[#2864](https://github.com/gardener/dashboard/pull/2864)]

## 🏃 Others
- `[USER]` Refactored DNS secret handling to align with the new specification and remove deprecated fields by @grolu [[#2838](https://github.com/gardener/dashboard/pull/2838)]
- `[DEVELOPER]` Upgraded Gardener Dashboard to use Node.js 24 by @gardener-ci-robot [[#2749](https://github.com/gardener/dashboard/pull/2749)]
- `[DEVELOPER]` The firsttris.vscode-jest-runner extension has been replaced by the official Vitest extension (vitest.explorer) for running and debugging tests in VS Code by @grolu [[#2876](https://github.com/gardener/dashboard/pull/2876)]
- `[DEVELOPER]` Refactor cloud profile store by extracting functionality to dedicated composables by @klocke-io [[#2673](https://github.com/gardener/dashboard/pull/2673)]
- `[DEVELOPER]` Replaced Jest with Vitest across backend and all packages (kube-client, kube-config, request, logger, monitor, polling-watcher). Removed CommonJS transpilation (rollup) and legacy Jest fixtures/mocks by @grolu [[#2876](https://github.com/gardener/dashboard/pull/2876)]

## application/spdx+json
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:4d71a510f2c66b58d3867a8815aea6fb39205dc385fc78fe5efb8b8557e6aa2b`
- gardener-dashboard-spdx-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:dc92ab6c79b27b1264e7be7aacb1f48d8abb449e18fb2abbb708aeb2666f713d`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.84.0`
