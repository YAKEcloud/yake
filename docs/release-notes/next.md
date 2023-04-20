---
hide_table_of_contents: true
---

# Release Notes next

## 23KE release notes and upgrade guide

Due to the upstream change in the Gardener [dashboard v1.68.0](https://github.com/gardener/dashboard/releases/tag/1.68.0) helm chart, the following changes need to be repected when upgrading.

> All properties under .Values.global have been moved under `.Values.global.dashboard`, except for `.Values.global.virtualGarden`, `.Values.global.terminal` and `.Values.global.unreachableSeeds`.
>  - `.Values.global.virtualGarden.userName` has been renamed to `.Values.global.virtualGarden.dashboardUserName`.
>  - `.Values.global.virtualGarden.terminalBootstrapperUserName` has been introduced.
>  - A new configuration section `.Values.global.bootstrapper` has been added. This section has similar properties as `.Values.global.dashboard` and allows you to configure the terminal bootstrapper deployment.

Please adjust your `dashboard-values` `secret` accordingly.

