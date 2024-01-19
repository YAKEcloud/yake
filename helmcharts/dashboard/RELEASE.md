# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[USER]` Removed support for deprecated annotations. These annotations have been deprecated long time ago:  
  - `garden.sapcloud.io/createdBy`. If you still have a cluster using this annotation, you can migrate it manually to `dashboard.gardener.cloud/created-by` if you need to  
  - `shoot.garden.sapcloud.io/ignore`: If you still have a cluster using this annotation, you can migrate it manually to `shoot.gardener.cloud/ignore` if you need to by @grolu [#1669]
## ✨ New Features

- `[USER]` Streamlined Kubernetes cluster upgrades for enhanced user experience. We've removed non-eligible versions from the upgrade selection, replacing them with a hint to indicate the existence of more versions. Additionally, only supported versions are now highlighted on the version chip. To aid in version management, chips for deprecated versions will now display in a warning color, alerting users to the need for an upgrade by @grolu [#1683]
- `[USER]` Hidden GitHub comments will no longer be displayed on the Cluster Details page. by @holgerkoser [#1675]
- `[USER]` Added support to request a time-limited kubeconfig on the cluster details page. The lifetime can be configured on the settings page. This feature is disabled by default and can be enabled by the gardener dashboard operator. by @grolu [#1666]
- `[OPERATOR]` The feature to request a time-limited kubeconfig is disabled by default. You can enabled it via `.Values.global.dashboard.frontendConfig.shootAdminKubeconfig.enabled`. The maximum expiration seconds can be controlled via `.Values.global.dashboard.frontendConfig.shootAdminKubeconfig.maxExpirationSeconds`. by @grolu [#1666]
## 🐛 Bug Fixes

- `[USER]` The broken link to the permission configuration documentation for Azure secrets was fixed. by @MrBatschner [#1667]
- `[USER]` Fixed an issue on the member management page. Update members and service account dialog did not render correctly because of an issue with the input validation by @grolu [#1686]
- `[USER]` Project list: fixed issue where the second entry is highlighted on key-down in some cases by @petersutter [#1687]
- `[USER]` Fixed email check for account names: Non email user accounts are no longer converted to a `mailto` link by @grolu [#1669]
- `[USER]` Resolved an issue from Dashboard version `1.70` that prevented the display of descriptions in the 'Update Cluster Version' dropdown selection by @grolu [#1672]
- `[USER]` Improved Navigation in project list filter: Disabled spell check to enhance arrow key navigation reliability. This update addresses an issue where spell check functionality occasionally interfered with keyboard navigation by @grolu [#1696]
- `[USER]` Resolved a styling issue that affected the hover functionality in the Safari browser by @grolu [#1696]
## 🏃 Others

- `[USER]` Introduced tonal variations to our chips and alert designs, previously defined with outline styles by @grolu [#1681]
## 📖 Documentation

- `[USER]` Enhanced the `Connect Kubectl` documentation by @petersutter [#1679]
- `[DEVELOPER]` Updated the `Project Operations` kubeconfig documentation by @n-boshnakov [#1673]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.72.0`
