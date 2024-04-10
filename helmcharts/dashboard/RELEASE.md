# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Changes have been made to two `gardener-dashboard` Helm chart values related to the ticket feature:  
  - The value previously at `Values.global.dashboard.frontendConfig.ticket.newTicketLabels` has been moved to `Values.global.dashboard.frontendConfig.ticket.newIssue.labels`.  
  - The value previously at `Values.global.dashboard.frontendConfig.ticket.issueDescriptionTemplate` has been moved to `Values.global.dashboard.frontendConfig.ticket.newIssue.body`. by @petersutter [#1775]
## ✨ New Features

- `[USER]` To enhance user experience and minimize premature notifications, we've implemented a new feature in the update notification system. Now, an update alert for Kubernetes and machine image versions will only be displayed if the current version is set to expire within the next 30 days. This adjustment ensures that users receive timely reminders without unnecessary warnings for versions expiring in the more distant future by @grolu [#1746]
- `[USER]` Route information is now included in the browser window title by @grolu [#1752]
- `[USER]` Added Fallback Solution for Non-SemVer Compatible Machine Image Versions: In previous versions, machine images from some vendors that did not adhere to Semantic Versioning (SemVer) standards were omitted from the user view in the dashboard. This was due to the Dashboard's strict adherence to SemVer for sorting and presenting image versions, resulting in non-compliant versions being filtered out. To address this, we now try to normalize those versions to make them SemVer compliant. If this is not possible, affected versions will still be filtered out. by @grolu [#1734]
- `[USER]` Several improvements to version and worker chips:  
  - Version & Worker Group Chips: Now, both show in a warning color if deprecated, offering a clear visual cue for items needing updates. The version chip also reveals detailed info, including classification and expiration, with a click.  
  - Cluster Management: Updating clusters is now streamlined under the actions menu on the cluster list page for easier access.  
  - Consistent UI: Version information now appears as a chip on cluster details, aligning with the display of worker chips for a unified look. by @grolu [#1758]
- `[OPERATOR]` GitHub issue forms are now supported when creating new tickets (GitHub issues) from the dashboard.  
  - Set `Values.global.dashboard.frontendConfig.ticket.newIssue.template` to specify the filename of the issue form template. For more information, refer to the [GitHub documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)  
  - To pre-fill template form elements, specify the `id` of the form element under `Values.global.dashboard.frontendConfig.ticket.newIssue`. For instance, if you have a form element with `id` `affectedCluster`, you can pre-fill it like this: `Values.global.dashboard.frontendConfig.ticket.newIssue.affectedCluster="${shootUrl}"`. The template variable `shootUrl` will be replaced during runtime with the actual dashboard link of the shoot cluster. by @petersutter [#1775]
## 🐛 Bug Fixes

- `[USER]` Fixed a bug that allowed to bypass the GDialog confirmation using <enter> by @grolu [#1751]
- `[USER]` Resolved Chrome Warnings and Enhanced Performance by Streamlining Font Formats for Material Design Icons: In our latest update, we've optimized the `@font-face` definition for Material Design Icons by removing the OpenType (.eot) and TrueType (.ttf) font formats. This adjustment significantly enhances the performance and reduces the bandwidth usage of our dashboard web application, ensuring a smoother and more efficient user experience. by @holgerkoser [#1731]
- `[USER]` Fixed an issue that caused quotas using numerical abbreviations (e.g., '1k') to not be displayed correctly in the Gardener Dashboard by @grolu [#1719]
## 🏃 Others

- `[USER]` The `gardenlogin` kubeconfig now only includes kube-apiserver addresses from `Shoot.status.advertisedAddresses`. This ensures compatibility with `gardener/gardener` version `v1.91.0` and later. by @petersutter [#1750]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.74.0`
