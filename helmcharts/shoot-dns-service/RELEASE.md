# [gardener/gardener-extension-shoot-dns-service]

## 🐛 Bug Fixes

- `[OPERATOR]` The `CustomResourceDefinition`s deployed to shoot clusters are now annotated with `resources.gardener.cloud/skip-health-check=true` to prevent `gardener-resource-manager` from recreating them too fast during shoot deletion. by `Johannes Scheerer <johannes.scheerer@sap.com>` [$48423afc7bda51bbcdcee01df2c9317a3f278e1a]