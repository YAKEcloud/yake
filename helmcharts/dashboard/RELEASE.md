# [gardener/dashboard]

## ✨ New Features

- `[USER]` You can now force delete clusters via the dashboard if they are stuck in deletion by @grolu [#1665]
- `[USER]` Improved cluster messages:  
  - Show icons always next to title on cluster details page  
  - Fixed overall severity sometimes not correct by @grolu [#1665]
- `[USER]` Users with the `Project` `viewer` role are now able to to download the `gardenlogin` kubeconfig by fetching the cluster CA via `ConfigMap`. This feature is anticipated to be supported with Gardener `v1.89` and requires `gardenlogin` `v0.5` or higher. by @petersutter [#1708]
- `[OPERATOR]` Add support for IronCore as infrastructure provider by @afritzler [#1700]
## 🐛 Bug Fixes

- `[USER]` Fixed invalid default minimum volume size limits for clusters without a limit defined in the cloud profile. Also improved handling for machine types without storage or volume defined in the cloud profile by @grolu [#1701]
- `[USER]` Terminal: fixed an issue where the loading spinner would not disappear, even though the terminal pod is `running` and the terminal connection shows as `connected` by @petersutter [#1702]
- `[USER]` Fixed an issue that caused `dark` theme color to be applied to some alert messages by @grolu [#1665]
- `[USER]` Action dialogs fixes:  
  - We've addressed an issue where tooltips were missing for some disabled cluster action buttons. Users will now see helpful tooltips providing more context on why these actions are currently unavailable  
  - Fixed issues with line breaks in the tooltips for certain buttons, ensuring that the tooltip text is now displayed correctly and is easier to read  
  - Resolved problems related to the display of precondition constraint failure messages during maintenance operations  
  - Fixed an issue where some action buttons were visible to users who did not have permission to perform those actions. This update ensures that the interface correctly reflects available actions based on user rights by @grolu [#1697]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.73.0`
