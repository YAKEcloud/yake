# [gardener/gardener-extension-networking-cilium]

## 🏃 Others

- `[OPERATOR]` Cilium uses the `label-prefix-file` with the excluded identities from: https://docs.cilium.io/en/stable/operations/performance/scalability/identity-relevant-labels/#identity-relevant-labels except the statefulset. by @DockToFuture [#326]
- `[OPERATOR]` Set policy-cidr-match-mode to match node CIDRs in networkpolicies. by @axel7born [#321]

## Docker Images
- gardener-extension-admission-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-cilium:v1.35.0`
- gardener-extension-networking-cilium: `europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/networking-cilium:v1.35.0`
