# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Change OCI Image Registry from GCR (`eu.gcr.io/gardener-project`) to Artifact-Registry (`europe-docker.pkg.dev/gardener-project/releases`) by @ccwienk [#1645]
## ✨ New Features

- `[USER]` Enhanced Client-Side Validation:  
  Previously, if there was a validation error, the `submit` buttons on Dialogs and the Create Cluster page would be greyed out. Now, these buttons remain active even if there is a validation error.  
  Clicking on the `submit` button in the presence of a validation error will not execute the submit logic. Instead, it will trigger the validation process to ensure that all validation error messages are clearly visible at the respective input fields.  
  In addition, we've made it easier to view all error messages. They are now collected and displayed in an alert, similar to how server-side error messages are shown. This enhancement ensures that users are fully aware of any errors that prevent to proceed with the action. by @grolu [#1633]
- `[USER]` An improvement in performance and memory usage on the shoot list has been achieved when a large number of clusters are present. In the past, under heavy load, there were repeated instances where the dashboard became unresponsive due to very high memory consumption. This has been achieved by implementing the following two changes:  
  * Throttling of shoot events in the frontend.   
    Now, only the `uid` of the modified object is sent to the client, coupled with periodic synchronization of associated shoots.  
  * Removal of the key property in the `g-shoot-list-row` component   
  * Improved performance of sorting and filtering implementation  
  * Faster response times for list shoot request (experimental: must be enabled by an operator)  
  * Reduced network traffic for invisible browser tabs  by @holgerkoser [#1637]
- `[OPERATOR]` Added a configuration parameter `Values.global.dashboard.maxRequestBodySize` that specifies the maximum size of the request body. It's value defaults to `100kb`. by @holgerkoser [#1656]
- `[OPERATOR]` Experimental Features:  
  * Enhanced Watch Cache Control for List Shoots Requests.   
    We've introduced a new feature to fine-tune caching behavior for list shoots requests. A new configuration option, `Values.global.dashboard.experimentalUseWatchCacheForListShoots`, has been added to the `gardener-dashboard` Helm chart. This allows for more precise control over caching with four settings: `never`, `no`, `yes`, and `always`. By default, this is set to `never`. As an experimental feature, we welcome feedback and suggest caution in production environments.  
  * Fine-tune the throttle delay per cluster.  
    This option, found under `Values.global.dashboard.frontendConfig.experimental.throttleDelayPerCluster`, allows administrators to set the base number of milliseconds delay per cluster. This delay dynamically adjusts the synchronization throttle based on the number of active clusters, optimizing performance and resource utilization in environments with a varying number of clusters. by @holgerkoser [#1637]
## 🐛 Bug Fixes

- `[OPERATOR]` Fixed  garden cluster terminals when the host cluster is a managed Seed by @petersutter [#1657]
- `[OPERATOR]` Dashboard pods were not recreated after assets have been changed by @petersutter [#1627]
- `[USER]` Fixed issues with the machine image input field:  
  - image description was not shown  
  - certain mache image hints were not shown when editing the worker for an existing shoot by @petersutter [#1635]
- `[USER]` Fxed issue where the kubernetes dashboard was not shown on cluster details page in case the addon was enabled. The issue occurs when static token kubeconfig is disabled. by @petersutter [#1658]
- `[USER]` Fixed the owner selection via mouse click on the project administration page. by @holgerkoser [#1632]
- `[USER]` Fixed issue on create cluster page: On error, alert should scroll into view by @petersutter [#1629]
- `[USER]` Users will now be redirected back to the last visited URL after automatic logout due to session timeout or authentication errors. by @holgerkoser [#1624]
- `[USER]` Fixed several bugs on the project filter menu. More details in this PR by @petersutter [#1623]
- `[USER]` Fixed vSphere Load Balancer Class selection by @grolu [#1625]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.71.0`
