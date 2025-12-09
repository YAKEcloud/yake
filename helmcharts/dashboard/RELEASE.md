# [github.com/gardener/dashboard:1.83.0]

## ⚠️ Breaking Changes
- `[OPERATOR]` The backend now requires an `websocketAllowedOrigins` configuration to protect the Socket.IO server from cross-site requests  
    
  * To allow all origins, you may set the value to `*` (not recommended)  
  * When deploying with the **Gardener operator**, this setting is automatically configured based on the public ingress hosts  
  * For manual deployments, you must provide the correct values in the Helm chart configuration by @grolu [[#2588](https://github.com/gardener/dashboard/pull/2588)]
- `[USER]` Simplified DNS Credential Handling:   
  - DNS credentials no longer require a `SecretBinding` or `CredentialsBinding` to work with the Gardener Dashboard.  The Dashboard now relies on a new label, `dashboard.gardener.cloud/dnsProviderType: <provider-type>`, to identify the DNS provider type. All `Secret` resources containing this label will appear as DNS credentials in the Dashboard.  
  - For backward compatibility, `Secrets` previously created through the Dashboard — which have the label `provider.shoot.gardener.cloud/<provider-type>` set by Gardener — will continue to be recognized as DNS credentials. This label now serves as a fallback for existing DNS `Secrets`.  
  - For new DNS credentials, only a `Secret` resource is created (no additional `CredentialsBinding` resource). You may safely clean up any existing `CredentialsBinding` or `SecretBinding` resources related to DNS credentials, as they are no longer required. by @grolu [[#2632](https://github.com/gardener/dashboard/pull/2632)]
- `[DEVELOPER]` The dashboard configuration now requires a `websocketAllowedOrigins` setting. Without it, the dashboard will not start. See the [local development setup documentation](https://github.com/gardener/dashboard/blob/master/docs/development/local-setup.md#3-configuration) for more details. by @grolu [[#2588](https://github.com/gardener/dashboard/pull/2588)]

## ✨ New Features
- `[OPERATOR]` Improved Custom Asset Handling  
  - You no longer need to provide the full asset set — individual icons can now be overridden as needed  
  - Improved caching behavior by applying correct cache-control headers, preventing outdated assets from being served by @grolu [[#2687](https://github.com/gardener/dashboard/pull/2687)]
- `[USER]` Add providerTemplate for stackit clusters by @nschad [[#2686](https://github.com/gardener/dashboard/pull/2686)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.0`
