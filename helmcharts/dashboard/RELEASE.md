# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Tickets are no longer automatically closed by the dashboard when a shoot is deleted. This should be handled by a different component instead, like a robot. by @petersutter [#1517]
- `[OPERATOR]` The `gardener-dashboard` `Deployment` now runs with high availability config (with label `high-availability-config.resources.gardener.cloud/type=server`). For more information about the HA config see [resource-manager.md#high-availability-config](https://github.com/gardener/gardener/blob/master/docs/concepts/resource-manager.md#high-availability-config) by @petersutter [#1504]
- `[OPERATOR]` Terminals: The `connectSrc` directive of the Content Security Policy no longer permits the use of `wss:` by default. You need to set up the allowed hosts that the browser can connect to for the web terminal feature. This can be done using `Values.global.terminal.allowedHostSourceList`. For more details see [webterminals.md#allowlist-for-hosts](https://github.com/gardener/dashboard/blob/master/docs/operations/webterminals.md#allowlist-for-hosts) by @petersutter [#1561]
- `[OPERATOR]` Terminals: As gardener took over the responsibility of providing kube-apiserver endpoints with trusted certificates the `terminal-bootstrap` component was dropped. Make sure to clean up the created resources of the terminal bootstrapper. See PR description for more details. by @petersutter [#1561]
## ✨ New Features

- `[USER]` Added an input field to configure the maintenance time window duration. The textfield hints now show the UTC begin and end time by @grolu [#1587]
- `[USER]` Enable focus mode for regular project lists. This feature used to be exclusive for operators. It can now be used by regular users on all cluster lists. This feature enables users to get a static overview of clusters with issues. In order to use this feature, you need to enable it on the `Settings` page. by @grolu [#1557]
- `[USER]` Implementation of lazy loading for copy to clipboard functionality by @holgerkoser [#1546]
- `[USER]` Added functionality to create, view and manage workerless clusters by @grolu [#1531]
- `[OPERATOR]` Allow customization of dashboard branding like product logo, name, title, slogan and custom html templates for teaser and footer. The documentation and a detailed example can be found in the dashboard operation guidelines https://github.com/gardener/dashboard/blob/master/docs/operations/customization.md by @holgerkoser [#1568]
- `[OPERATOR]` Terminal: By default, the access service account within the garden terminal pod is bound to `gardener.cloud:system:administrators`, not `cluster-admin` anymore. by @petersutter [#1541]
- `[OPERATOR]` Github app authentication is now supported (in addition to token authentication) for the ticket feature by @petersutter [#1514]
- `[OPERATOR]` Terminal: You can now configure the role bindings to which the access service account within the `garden` terminal pod is bound (`Values.global.terminal.garden.roleBindings`). by @petersutter [#1541]
- `[OPERATOR]` The `dashboard` chart allows to optionally configure a projected volume based kubeconfig by @timuthy [#1598]
- `[OPERATOR]` In addition to the `defaultNodesCIDR` config (`Values.global.dashboard.frontendConfig.defaultNodesCIDR`) of the `gardener-dashboard` which applies for all new Shoots, you can now have a configuration per cloud profile, by setting `.spec.providerConfig.defaultNodesCIDR` on the respective `CloudProfile` by @petersutter [#1591]
- `[DEVELOPER]` Migrated frontend code to Vue 3 and Vuetify 3 UI components. Vue 2 will reach [End of Life](/https://v2.vuejs.org/lts/) (EOL) on December 31st, 2023 by @holgerkoser [#1510]
## 🐛 Bug Fixes

- `[USER]` Fixed code completion and tooltips in cluster editor: Recent Gardener releases dropped support for OpenAPI v2. Dashboard now uses OpenAPI v3 to fetch shoot resource information by @grolu [#1600]
- `[USER]` Users with permission to `list` all `projects` can see them now in the dashboard. Previously the permission to `get` `secrets` across all namespaces was required. by @petersutter [#1518]
- `[USER]` Fixed hibernation schedule time input for Safari browser by @grolu [#1536]
- `[USER]` Fixed an issue where the filter on the `Secrets`, `Members` and `Clusters` page was not reset when switching the Project by @petersutter [#1529]
## 🏃 Others

- `[OPERATOR]` The default grant types for the garden cluster OIDC kubeconfig have changed to `auto`, `authcode` and `device-code`. `authcode-keyboard` was removed and `device-code` grant type was added. The default grant types can be overridden by setting `Values.global.dashboard.frontendConfig.grantTypes` in the `gardener-dashboard` helm chart by @petersutter [#1512]
- `[OPERATOR]` An error will now be logged in case the OIDC issuer discovery fails by @petersutter [#1562]