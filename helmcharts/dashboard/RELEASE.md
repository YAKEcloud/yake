# [gardener/dashboard]

## ⚠️ Breaking Changes

- `[OPERATOR]` Access Restrictions:  
  - This dashboard version requires Gardener version `v1.107.0` if access restrictions are configured.  
  - The `accessRestriction.items[].display.visibleIf` and `accessRestriction.items[].display.inverted` configurations are no longer supported and will be ignored. The dashboard will now assume `visibleIf=true` and `inverted=false`. However, this change does not affect the `accessRestriction.items[].input.options[].display.visibleIf` and `accessRestriction.items[].input.options[].display.inverted` settings. by @petersutter [#2163]
- `[OPERATOR]` The dashboard no longer falls back to reading the cluster CA from the deprecated `<shoot-name>.ca-cluster` `Secret`. This change requires Gardener `v1.89.0` or higher. by @petersutter [#2164]
- `[USER]` Static token kubeconfig support has been removed from the dashboard. This feature is no longer needed as of Kubernetes version `1.27`, where the `enableStaticTokenKubeconfig` field is permanently set to `false`. by @petersutter [#2171]
- `[USER]` The dashboard no longer relies on the specific labels `cloudprofile.garden.sapcloud.io/name` and `gardener.cloud/dnsProviderName` to filter when selecting secrets. Instead, it now solely relies on the newly introduced provider.type field. As a result, cloud profiles are no longer selectable during secret creation, and all cloud profiles for the current infrastructure are now available for selection by @grolu [#2141]
## 🐛 Bug Fixes

- `[USER]` Fixed alertmanager URL by @petersutter [#2178]
- `[USER]` Resolved an issue where the editor search did not function correctly for non-editable clusters, such as 'Purpose: Infrastructure' by @grolu [#2176]
- `[OPERATOR]` Switched to a polling-based watcher approach for kube-config files, as we've observed that some filesystem events can be missed by chokidar. by @holgerkoser [#2202]
## 🏃 Others

- `[OPERATOR]` **Action Required:** The automatic mapping from `accessRestriction.items[@key="seed.gardener.cloud/eu-access"]` to `accessRestriction.items[@key="eu-access-only"]` will be removed in a future dashboard version. Dashboard operators who use `seed.gardener.cloud/eu-access` in their access restriction configuration should update the key to `eu-access-only`. If your configuration does not include `seed.gardener.cloud/eu-access`, no action is required. by @petersutter [#2196]
## 📖 Documentation

- `[OPERATOR]` Fix the link reference to the shoot credentials rotation page. by @marc1404 [#2221]
- `[OPERATOR]` Fix the link reference to the control plane high availability page. by @marc1404 [#2225]

## Docker Images
- gardener-dashboard: `europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.79.0`
