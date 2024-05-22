---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update gardener-controlplane to <code>1.95.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` gardenlet: An issue causing the blackbox-exporter Deployment to be created and to be unhealthy in the Shoot control plane for Shoots with `.spec.purpose=testing` is now fixed. by @ialidzhikov [#9798]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.95.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.95.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.95.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.95.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.95.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.95.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.95.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.95.1`


</details>

<details>
<summary><b>Update gardener-controlplane to <code>1.95.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` gardenlet: An issue causing the blackbox-exporter Deployment to be created and to be unhealthy in the Shoot control plane for Shoots with `.spec.purpose=testing` is now fixed. by @ialidzhikov [#9798]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.95.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.95.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.95.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.95.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.95.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.95.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.95.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.95.1`


</details>

<details>
<summary><b>Update gardenlet to <code>1.95.1</code></b></summary>

# [gardener/gardener]

## 🏃 Others

- `[OPERATOR]` gardenlet: An issue causing the blackbox-exporter Deployment to be created and to be unhealthy in the Shoot control plane for Shoots with `.spec.purpose=testing` is now fixed. by @ialidzhikov [#9798]

## Docker Images
- admission-controller: `europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.95.1`
- apiserver: `europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.95.1`
- controller-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.95.1`
- gardenlet: `europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.95.1`
- node-agent: `europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.95.1`
- operator: `europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.95.1`
- resource-manager: `europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.95.1`
- scheduler: `europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.95.1`


</details>

<details>
<summary><b>Update networking-calico to <code>1.39.1</code></b></summary>

# [gardener/gardener-extension-networking-calico]

- `[OPERATOR]` Downgraded calico-cni container to v3.27.0 to prevent cni copy failures.

## Docker Images
- gardener-extension-admission-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-calico:v1.39.1`
- gardener-extension-networking-calico: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-calico:v1.39.1`


</details>

<details>
<summary><b>Update shoot-rsyslog-relp to <code>0.4.3</code></b></summary>

# [gardener/gardener-extension-shoot-rsyslog-relp]

## 🏃 Others

- `[OPERATOR]` If the certificates used for the `rsyslog-relp` tls connection are changed, the `rsyslog` service on the nodes is restarted so that it can properly load the new certificates. by @plkokanov [#107]

## Docker Images
- gardener-extension-shoot-rsyslog-relp-admission: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp-admission:v0.4.3`
- gardener-extension-shoot-rsyslog-relp: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-rsyslog-relp:v0.4.3`


</details>
