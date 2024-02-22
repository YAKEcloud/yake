# [gardener/dashboard]

## 🐛 Bug Fixes

- `[USER]` Enhanced volume management for OpenStack workers  
  In the last dashboard release, we inadvertently introduced an issue that caused the loss of custom volume sizes for OpenStack workers when they were updated via the dashboard. This release brings a fix to this bug, ensuring that your custom volume configurations are retained post-update.  
  Additionally, we've improved the storage size configuration interface. Now, it's easier to distinguish between default and custom volumes. by @grolu [#1722]

## Docker Images
- dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.73.1`
