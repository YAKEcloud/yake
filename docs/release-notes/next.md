---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-hcloud to <code>0.6.30</code></b></summary>

# [gardener-extension-provider-hcloud] v0.6.30

</details>

<details>
<summary><b>Update provider-openstack to <code>1.41.2</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🏃 Others

- `[OPERATOR]` Fix an issue with share network reconciliation not calculating number of existing share networks correctly. by @AndreasBurger [#827]

## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.41.2`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.41.2`


</details>

<details>
<summary><b>Update shoot-cert-service to <code>1.44.2</code></b></summary>

# [gardener/gardener-extension-shoot-cert-service]

## 🏃 Others

- `[OPERATOR]` The memory limit from the `cert-controller-manager` Deployment is now removed. by @ialidzhikov [#287]

## Docker Images
- gardener-extension-shoot-cert-service: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.44.2`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.5.2</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🐛 Bug Fixes

- `[OPERATOR]` Fixed an issue that caused the `-a exit,always -F arch=b64 -S mount_setattr -F auid!=-1 -F key=privileged_special` audit rule to not get correctly applied. by @plkokanov [#151]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.5.2`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.5.2`


</details>
