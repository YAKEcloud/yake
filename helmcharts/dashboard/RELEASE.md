# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Cost Object: You must migrate existing configurations to the new format. Previously, the configuration used `Values.global.dashboard.frontendConfig.costObject`. It should now be updated to `Values.global.dashboard.frontendConfig.costObjects`, which is a list of objects. Each object in this list must include a `type` property, alongside existing properties such as `title`, `description`, and `regex`. by @petersutter [#2102]
- `[USER]` Removed the ability for users to retrieve their token from the My Account page. by @petersutter [#2131]
## ✨ New Features

- `[USER]` Header warnings returned by the Kubernetes API server are now displayed as notifications in the Gardener dashboard. This includes important messages like deprecation warnings. Additionally, admission webhooks may provide custom warnings in the headers by @grolu [#2033]
- `[USER]` Upgraded the code editor from CodeMirror 5 to CodeMirror 6 to enhance performance, modernize the interface, and improve extensibility by @grolu [#2058]
- `[USER]` Support Azure Cloud Configuration for DNS Secrets by @grolu [#2034]
- `[OPERATOR]` Enhanced cost object configuration to support multiple cost object types. The selected type is now stored under `Project.annotations["billing.gardener.cloud/costObjectType"]`. by @petersutter [#2102]
## 🐛 Bug Fixes

- `[USER]` Fixed issues with hibernation schedule dialog: reset button and time saving by @petersutter [#2076]
- `[USER]` Consider all seeds for Shoot migration and add warning for provider mismatch by @petersutter [#2079]
- `[USER]` To enhance the overview and readability of the cluster list, particularly in environments constrained by space or containing an abundance of information, we have introduced a feature that allows items to be collapsed when they are displayed in the cluster list. by @grolu [#1991]
- `[USER]` Fixed display issues with minimum volume size by @grolu [#2030]
## 🏃 Others

- `[USER]` The option to rotate the SSH keypair is hidden when SSH access is disabled. by @petersutter [#2077]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.78.0`
