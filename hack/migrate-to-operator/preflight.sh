#!/usr/bin/env bash
# Read-only checks before migrating to gardener-operator. Exit code != 0 if a blocking check fails.
# Usage: preflight.sh --runtime-kubeconfig=<path> --garden-kubeconfig=<path> [--target-minor=155]
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib.sh"
EXTRA_ARGS=()
usage() { sed -n '2,4p' "$0"; }
parse_common_args "$@"
TARGET_MINOR=155
for a in "${EXTRA_ARGS[@]:-}"; do [[ "$a" == --target-minor=* ]] && TARGET_MINOR="${a#*=}"; done
require_runtime; require_garden
echo "virtual garden context: $(kg config current-context)"

echo "== Gardener versions"
seed_versions="$(kg get seeds -o json | jq -r '[.items[] | "\(.metadata.name)=\(.status.gardener.version)"] | join(" ")')"
echo "seeds: $seed_versions"
[[ "$(kg get seeds -o json | jq '[.items[].status.gardener.version] | unique | length')" == 1 ]] && ok "all seeds report one Gardener version" || fail "seeds report different Gardener versions"
kg get seeds -o json | jq -e 'all(.items[]; .status.conditions | all(.status == "True"))' >/dev/null && ok "all seed conditions True" || fail "seed conditions not all True"
for hr in gardener-application gardener-runtime internal-gardenlet; do
  v="$(kr get hr "$hr" -n flux-system -o jsonpath='{.spec.chart.spec.version}' 2>/dev/null || true)"
  echo "HelmRelease $hr chart version: ${v:-missing}"
done
if kr get crd gardens.operator.gardener.cloud >/dev/null 2>&1; then warn "Garden CRD already exists (operator installed?)"; else ok "no Garden CRD yet (operator not installed)"; fi

echo "== Flux"
kr get gitrepository yake -n flux-system -o jsonpath='yake GitRepository ref: {.spec.ref}{"\n"}'
not_ready="$(kr get hr -n flux-system -o json | jq -r '[.items[] | select(([.status.conditions[]? | select(.type=="Ready")][0].status) != "True") | .metadata.name] | join(" ")')"
[[ -z "$not_ready" ]] && ok "all HelmReleases Ready" || fail "HelmReleases not Ready: $not_ready"

echo "== Shoots and virtual garden"
kg get shoots -A -o json | jq -r '
  "shoots: \(.items | length)",
  "not healthy: \([.items[] | select(.status.lastOperation.state != "Succeeded") | "\(.metadata.namespace)/\(.metadata.name)"] | join(" "))",
  "hibernated: \([.items[] | select(.spec.hibernation.enabled == true) | "\(.metadata.namespace)/\(.metadata.name)"] | join(" "))",
  "k8s versions: \([.items[].spec.kubernetes.version] | unique | join(" "))"'
# Gardener mirrors credentialsRef into the legacy secretName field, so only a missing credentialsRef is a problem (1.139+, K8s >= 1.35).
sn="$(kg get shoots -A -o json | jq -r '[.items[] | select([.spec.dns.providers[]? | select(has("secretName") and (has("credentialsRef") | not))] | any) | "\(.metadata.namespace)/\(.metadata.name)"] | join(" ")')"
[[ -z "$sn" ]] && ok "all shoot DNS providers use credentialsRef" || fail "shoots with dns.providers[].secretName but no credentialsRef: $sn"
echo "virtual garden Kubernetes version: $(kg version -o json | jq -r .serverVersion.gitVersion) (Gardener 1.154 drops support for K8s 1.32)"
if kg api-versions | grep -q '^settings.gardener.cloud'; then
  n="$(kg get openidconnectpresets,clusteropenidconnectpresets -A --no-headers 2>/dev/null | wc -l)"
  [[ "$n" == 0 ]] && ok "no OpenIDConnectPresets (API group removed in 1.142)" || fail "$n OpenIDConnectPreset objects exist, clean up before 1.142"
fi

echo "== etcd data (must survive)"
for pvc in virtual-garden-etcd-etcd-0 virtual-garden-etcd-events-etcd-events-0; do
  pv="$(kr get pvc "$pvc" -n garden -o jsonpath='{.spec.volumeName}' 2>/dev/null || true)"
  if [[ -z "$pv" ]]; then fail "PVC garden/$pvc missing"; continue; fi
  pol="$(kr get pv "$pv" -o jsonpath='{.spec.persistentVolumeReclaimPolicy}')"
  [[ "$pol" == Retain ]] && ok "PVC $pvc -> PV $pv (reclaimPolicy Retain)" || fail "PV $pv has reclaimPolicy $pol, set to Retain first"
done
kr get sts etcd -n garden -o jsonpath='{.spec.template.spec.containers[*].name}' | grep -q backup-restore && ok "etcd has the backup-restore sidecar" || warn "etcd without backup-restore sidecar"
kr get secret etcd-backup -n garden >/dev/null 2>&1 && ok "secret etcd-backup exists (verify the last snapshot in the bucket manually)" || warn "secret etcd-backup missing"

echo "== Secrets to preserve (names only)"
for s in garden-kube-apiserver-ca garden-kube-aggregator-ca garden-service-account-key; do
  kr get secret "$s" -n garden >/dev/null 2>&1 && ok "secret $s present, keys: $(kr get secret "$s" -n garden -o json | jq -c '[.data | keys[]]')" || fail "secret $s missing"
done
if kr get secret -n garden -l secrets-manager-use-data-for-name -o name 2>/dev/null | grep -q .; then ok "migration labels already present"; else warn "no secrets-manager-use-data-for-name labels yet (run prepare-secrets.sh)"; fi

echo "== Name collisions in runtime namespace garden"
kr get ingressclass nginx >/dev/null 2>&1 && warn "IngressClass nginx exists (Flux ingress-nginx). The operator deploys its own nginx up to the DisableNginxIngressInGarden gate: remove ingress-nginx first"
kr get ingress -A -o json | jq -r '.items[] | select(.spec.ingressClassName == "nginx" and (.metadata.annotations["meta.helm.sh/release-name"] // "") == "") | "\(.metadata.namespace)/\(.metadata.name)"' | sed 's/^/  /' | { grep . && warn "customer Ingresses above use class nginx, ingress-nginx is removed by the migration: expose them via the Istio ingress gateway or another controller you maintain"; true; }
kr get deploy -n garden -o name | grep -E 'gardener-resource-manager|etcd-druid|vpa-' | sed 's/^/  existing seed component: /' || true
echo "  (UNGEPRUEFT how operator and gardenlet seed controller share these, test in the throwaway environment)"

echo "== Target"
echo "path: 137 -> ${TARGET_MINOR} minor by minor, see docs/migration-to-operator.md"
(( FAILED == 0 )) && { echo "PREFLIGHT OK"; exit 0; } || { echo "PREFLIGHT FAILED ($FAILED blocking checks)"; exit 1; }
