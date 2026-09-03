# [github.com/gardener/dashboard:1.85.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` Machine image vendor matching no longer uses substring/wildcard patterns. Image names must now exactly match an entry in `knownMachineImageVendors` (or the branding config `vendors.machineImage` array). Images without an exact match will display their raw name without vendor icon or grouping by @grolu [[#3000](https://github.com/gardener/dashboard/pull/3000)]
- `[OPERATOR]` The condition visibility configuration field `showAdminOnly` has been replaced by `showLandscapeViewerOnly`. Landscape operators that define additional conditions or override condition configuration must update their configuration accordingly. Conditions marked with `showLandscapeViewerOnly` are now visible to users with landscape-viewer access, instead of being restricted to dashboard admins only by @petersutter [[#3015](https://github.com/gardener/dashboard/pull/3015)]
- `[OPERATOR]` OIDC providers that do not support PKCE must explicitly configure `usePKCE: false` under `global.dashboard.oidc` when using the Helm chart. by @petersutter [[#3109](https://github.com/gardener/dashboard/pull/3109)]

## ✨ New Features
- `[OPERATOR]` Add support for IronCore Metal as infrastructure provider by @afritzler [[#3114](https://github.com/gardener/dashboard/pull/3114)]
- `[OPERATOR]` New `shootDefaults` Configuration: A new frontend configuration namespace, `shootDefaults`, has been introduced. It allows predefined default values to be applied when users create new Shoot resources in the Gardener Dashboard.  
    
  The following existing configuration properties have been moved to the new namespace:  
    
  * `controlPlaneHighAvailabilityHelp` → `shootDefaults.controlPlaneHighAvailabilityHelp`  
  * `defaultHibernationSchedule` → `shootDefaults.hibernationSchedule`  
  * `defaultNodesCIDR` → `shootDefaults.nodesCIDR`  
    
  The previous configuration paths are now deprecated. Please update your deployments to use the corresponding properties under `shootDefaults`. by @benedikt-haug [[#2476](https://github.com/gardener/dashboard/pull/2476)]
- `[OPERATOR]` The Gardener dashboard backend now supports optional TLS termination. Configure `tls.certFile` and `tls.privateKeyFile` in the dashboard configuration to enable HTTPS. by @grolu [[#3014](https://github.com/gardener/dashboard/pull/3014)]
- `[OPERATOR]` Landscape viewers now see operations-oriented UI elements such as the control plane (CP) chip, seed readiness, seed link on shoots, and a role badge in the main toolbar by @petersutter [[#3015](https://github.com/gardener/dashboard/pull/3015)]
- `[OPERATOR]` The All Projects cluster list can now be configured to open in Operations View by default. Exclusion criteria for Operations View (progressing clusters, clusters not requiring operator action, clusters with only ignored tickets) are configurable from the Settings page. by @petersutter [[#3135](https://github.com/gardener/dashboard/pull/3135)]
- `[OPERATOR]` Add `KUBE_CLIENT_REQUEST_TIMEOUT` environment variable to configure a total per-request timeout (in milliseconds) for Kubernetes API requests made by the dashboard backend. Defaults to 300000 (5 minutes); set to 0 to disable. When using the Helm chart, this can be configured via `.Values.global.dashboard.kubeClient.requestTimeout`. by @petersutter [[#2954](https://github.com/gardener/dashboard/pull/2954)]
- `[USER]` Add theming support and support for copy/paste shortcuts in terminal by @julestree [[#3110](https://github.com/gardener/dashboard/pull/3110)]
- `[USER]` Seed capacity indicators and health donuts link to the corresponding filtered Shoot list. by @petersutter [[#3141](https://github.com/gardener/dashboard/pull/3141)]
- `[USER]` Support field-qualified search terms in shoot and seed list filters (e.g. `seed:aws-ha`, `-region:eu`). by @petersutter [[#3044](https://github.com/gardener/dashboard/pull/3044)]
- `[USER]` The all projects Shoot list toolbar now shows the active Operations View state and provides controls to restore it or show all clusters. by @petersutter [[#3140](https://github.com/gardener/dashboard/pull/3140)]
- `[USER]` The seed list now displays per-seed shoot health statistics as donut charts and shoot capacity indicators, with real-time updates. Health stats respect the active Operations View exclusion criteria. by @petersutter [[#2901](https://github.com/gardener/dashboard/pull/2901)]
- `[DEVELOPER]` To restrict local Dashboard services to the loopback interface, developers should add `host: 127.0.0.1` to `${HOME}/.gardener/config.yaml`. by @petersutter [[#3120](https://github.com/gardener/dashboard/pull/3120)]

## 🐛 Bug Fixes
- `[OPERATOR]` Hardened OIDC callback validation and enabled PKCE by default. by @petersutter [[#3109](https://github.com/gardener/dashboard/pull/3109)]
- `[OPERATOR]` Fixed a bug where clicking the "Terminal Shortcuts" tab in the terminal dialog closes the dialog by @julestree [[#3055](https://github.com/gardener/dashboard/pull/3055)]
- `[OPERATOR]` Detect stalled HTTP/2 sessions used by the kube-client via a Go-style read-idle / ping-timeout heartbeat. Previously a half-open session was never torn down, which could leave streams hanging indefinitely. Configurable via `KUBE_CLIENT_READ_IDLE_TIMEOUT` / `KUBE_CLIENT_PING_TIMEOUT` env vars and the matching `global.dashboard.kubeClient.readIdleTimeout` / `pingTimeout` Helm values. by @petersutter [[#2981](https://github.com/gardener/dashboard/pull/2981)]
- `[USER]` Fixed the project selector showing a different project than the URL and cluster list after an interrupted project switch. by @petersutter [[#3169](https://github.com/gardener/dashboard/pull/3169)]
- `[USER]` Fixed socket event handler crashing when events arrive before store initialization. by @grolu [[#2962](https://github.com/gardener/dashboard/pull/2962)]
- `[USER]` Fix transient "Cluster is gone" error page that briefly appeared when switching between sub-routes of the same cluster (e.g. overview to YAML editor). by @petersutter [[#3012](https://github.com/gardener/dashboard/pull/3012)]
- `[USER]` Prevent a TypeError in the HTTP/2 session pool heartbeat when the underlying socket is no longer available. by @petersutter [[#3010](https://github.com/gardener/dashboard/pull/3010)]
- `[USER]` Fixed stale selected project in the navigation after store entry changes. by @petersutter [[#3079](https://github.com/gardener/dashboard/pull/3079)]
- `[USER]` Project name filter now ignores leading and trailing whitespace, preventing empty search results caused by accidental spaces. by @jguipi [[#3126](https://github.com/gardener/dashboard/pull/3126)]
- `[USER]` Fixed the container runtime selector from shrinking in Safari when configuring shoot workers by @petersutter [[#3173](https://github.com/gardener/dashboard/pull/3173)]
- `[USER]` DNS Handling Improvements & Fixes  
  - Fixed an issue where clusters without a custom domain could appear incorrectly in the Configure DNS dialog  
  - Disabled Edit and Delete buttons for DNS Workload Identities, as Dashboard support for managing them is not yet available by @grolu [[#2939](https://github.com/gardener/dashboard/pull/2939)]
- `[USER]` Fix status sort order to include the 'Error' state by @petersutter [[#3057](https://github.com/gardener/dashboard/pull/3057)]
- `[USER]` Fix machine image vendor matching to use exact names instead of substring matching, preventing misclassification of images like memorone-gardenlinux or gardenlinux-fips by @grolu [[#3000](https://github.com/gardener/dashboard/pull/3000)]
- `[USER]` The Gardener dashboard now sends ETag headers for SPA fallback responses such as /login. This improves browser cache validation and fixes an issue where rolling back to a previous dashboard version could make browsers reuse stale HTML that referenced assets no longer present on the server, causing 404 errors and failed page loads by @grolu [[#3059](https://github.com/gardener/dashboard/pull/3059)]
- `[USER]` Fixed IOPS input field not visible for aws workers by @grolu [[#2951](https://github.com/gardener/dashboard/pull/2951)]
- `[USER]` Increased tooltip open-delay on shoot/seed status tags from 200ms to 750ms to reduce accidental tooltip flashes during list scanning. by @petersutter [[#3019](https://github.com/gardener/dashboard/pull/3019)]
- `[DEVELOPER]` Frontend development TLS certificates generated by `yarn setup` are now shared across local Dashboard repositories. by @grolu [[#3077](https://github.com/gardener/dashboard/pull/3077)]
- `[DEVELOPER]` Forward caller-provided abort signals through `list` and `get` operations in the kube-client so hung requests can be cancelled. by @petersutter [[#2954](https://github.com/gardener/dashboard/pull/2954)]
- `[DEVELOPER]` Exclude Vuetify from Vite dependency pre-bundling in development to prevent full-page reloads caused by cold-cache dependency optimization changes. by @petersutter [[#3153](https://github.com/gardener/dashboard/pull/3153)]

## 🏃 Others
- `[OPERATOR]` Tickets: Scope ticket access and real-time updates to project members. by @julestree [[#3063](https://github.com/gardener/dashboard/pull/3063)]
- `[OPERATOR]` Redesigned tooltips: shoot health donut, seed capacity indicators, and seed condition status now use a unified layout. by @petersutter [[#3078](https://github.com/gardener/dashboard/pull/3078)]
- `[USER]` The table column selection and filter selection are now separate toolbar buttons. by @petersutter [[#3040](https://github.com/gardener/dashboard/pull/3040)]
- `[USER]` Redesigned tooltips: project details, infrastructure details, shoot health, and status tags now use a unified layout. by @petersutter [[#3078](https://github.com/gardener/dashboard/pull/3078)]
- `[DEVELOPER]` Cloud-provider credential forms and details are now driven by the vendor definitions under `frontend/src/data/vendors`. Prefer extending a vendor's `secret` configuration and the shared generic credential components over adding provider-specific credential dialogs; dedicated UI can still be used where needed by @grolu [[#3157](https://github.com/gardener/dashboard/pull/3157)]
- `[DEVELOPER]` Yarn zero-installs are no longer used; run `yarn install` after pulling the repository. by @petersutter [[#2977](https://github.com/gardener/dashboard/pull/2977)]

## 📖 Documentation
- `[OPERATOR]` The `gardener-dashboard` Helm chart is deprecated in favor of `gardener-operator` managed deployments. The `identity` Helm chart is deprecated without replacement. Both will be removed earliest around November 2026. by @petersutter [[#2935](https://github.com/gardener/dashboard/pull/2935)]

## application/spdx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:6359470acb52b80711beeffa981698cf28332a78d38dab4edd77697e9744de56`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:ef235effe21c651bfae7ec868adee47ab01586539815ed0b2b0e5bc90d30dfcc`
## application/vnd.cyclonedx+json
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:3bf356b8c0fc6ba8f8a72a7f397fc46f1dfc8a8dee0337d29f7f2f1fedb9deab`
- gardener-dashboard-sbom-ref: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard@sha256:76717286e8aa1594b47e22691f5db78eb0c4cd45b837a6bbefb4be76296f9017`
## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.85.0`
