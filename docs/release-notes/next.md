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

<details>
<summary><b>Update shoot-networking-problemdetector to <code>0.22.0</code></b></summary>

# [gardener/network-problem-detector]

## 🏃 Others

- `[OPERATOR]` Allow nodes without hostname by @MartinWeindel [gardener/network-problem-detector#66]
- `[OPERATOR]` Bumps golang from 1.22.2 to 1.22.3. by @dependabot[bot] [gardener/network-problem-detector#65]
# [gardener/gardener-extension-shoot-networking-problemdetector]

## 🏃 Others

- `[OPERATOR]` This extension is now using the new way of providing monitoring configuration (ref [GEP-19](https://github.com/gardener/gardener/blob/master/docs/proposals/19-migrating-observability-stack-to-operators.md)) in case a shoot cluster's Prometheus has been migrated to management via `prometheus-operator`. by @rfranzke [#142]
- `[OPERATOR]` Bumps github.com/gardener/gardener from 1.94.0 to 1.95.0. by @dependabot[bot] [#144]

## Docker Images
- gardener-extension-shoot-networking-problemdetector: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-networking-problemdetector:v0.22.0`


</details>

<details>
<summary><b>Update networking-cilium to <code>1.35.0</code></b></summary>

# [gardener/gardener-extension-networking-cilium]

## 🏃 Others

- `[OPERATOR]` Cilium uses the `label-prefix-file` with the excluded identities from: https://docs.cilium.io/en/stable/operations/performance/scalability/identity-relevant-labels/#identity-relevant-labels except the statefulset. by @DockToFuture [#326]
- `[OPERATOR]` Set policy-cidr-match-mode to match node CIDRs in networkpolicies. by @axel7born [#321]

## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.35.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.35.0`


</details>

<details>
<summary><b>Update cert-management to <code>0.14.3</code></b></summary>

# [gardener/cert-management]

## 🏃 Others

- `[USER]` Support Istio apiVersion `networking.istio.io/v1` by @MartinWeindel [#179]
- `[OPERATOR]` Bumps golang from 1.22.2 to 1.22.3. by @dependabot[bot] [#178]

## Docker Images
- cert-management: `europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.14.3`


</details>

<details>
<summary><b>Update external-dns-management to <code>0.18.6</code></b></summary>

# [gardener/external-dns-management]

## 🏃 Others

- `[USER]` Support Istio apiVersion `networking.istio.io/v1`. by @MartinWeindel [#369]
- `[OPERATOR]` Update golang from `1.22.2` to `1.22.3` by @MartinWeindel [#370]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.6`


</details>
