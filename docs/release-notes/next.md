---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update provider-openstack to <code>1.39.1</code></b></summary>

# [gardener/gardener-extension-provider-openstack]

## 🏃 Others

- `[OPERATOR]` Admission controller will be deployed with the LEADER_ELECTION_NAMESPACE set to the pod namespace by @AndreasBurger [#719]

## Docker Images
- gardener-extension-admission-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-openstack:v1.39.1`
- gardener-extension-provider-openstack: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-openstack:v1.39.1`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.18.2</code></b></summary>

# [gardener/external-dns-management]

## 🏃 Others

- `[USER]` Ignore empty targets for slave entries on update. More concretely, if an ingress resource lose their load balancer addresses during an update, the old targets are kept until new targets are set. by @MartinWeindel [#357]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.2`


</details>
