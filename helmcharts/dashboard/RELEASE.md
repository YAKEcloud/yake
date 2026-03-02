# [github.com/gardener/dashboard:1.83.7]

## ✨ New Features
- `[USER]` Change CredentialsBinding  
  - It is now possible to change the referenced CredentialsBinding on the cluster details page  
  - Clusters that still use a SecretBinding can now be migrated to a CredentialsBinding on the cluster details page by @grolu [[#2810](https://github.com/gardener/dashboard/pull/2810)]
- `[USER]` Create CredentialsBindings for deprecated SecretBindings  
  - For SecretBindings a migration dialog is available to create a new CredentialsBinding on the credentials page  
  - If a CredentialsBinding exists, the dialog shows migration information for clusters that still use the deprecated SecretBinding  
  - Ensure defaulting prefers CredentialsBindings over SecretBindings when creating new clusters by @grolu [[#2810](https://github.com/gardener/dashboard/pull/2810)]

## Container (OCI) Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.83.7`
