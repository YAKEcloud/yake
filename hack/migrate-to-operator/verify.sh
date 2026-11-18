#!/usr/bin/env bash
# READ-ONLY verification of a landscape on gardener-operator. Exit != 0 on FAIL, [warn] lines need a look.
#   verify.sh --runtime-kubeconfig=<p> --garden-kubeconfig=<p> [--expect-version=1.155.1] [--expect-k8s=1.37.2] [--quick] [--dashboard-url=https://...]
# --quick: only Garden, versions, extensions, seeds, shoots (used inside the step scripts). Without it also pods, etcd, Flux, leftovers, certs, events.
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib.sh"
EXTRA_ARGS=()
usage() { sed -n '2,5p' "$0"; }
parse_common_args "$@"
EXPECT=""; EXPECT_K8S=""; QUICK=false; DASH=""
for a in "${EXTRA_ARGS[@]:-}"; do
  case "$a" in
    --expect-version=*) EXPECT="${a#*=}" ;; --expect-k8s=*) EXPECT_K8S="${a#*=}" ;;
    --quick) QUICK=true ;; --dashboard-url=*) DASH="${a#*=}" ;;
  esac
done
require_runtime; require_garden
WARNED=0; warn() { echo "[warn] $*"; WARNED=$((WARNED + 1)); }
all_ready() { jq -e --arg t "$1" '.items | all(([.status.conditions[]? | select(.type==$t) | .status] | first) == "True")' >/dev/null; }

echo "== Garden and versions"
v="$(kr get garden -o jsonpath='{.items[0].status.gardener.version}' 2>/dev/null || true)"; echo "Garden $v"
[[ -z "$EXPECT" || "$v" == "v$EXPECT" ]] && ok "Garden version" || fail "Garden version '$v', expected v$EXPECT"
kr get garden -o json | jq -e '.items[0] | (.status.lastOperation.state == "Succeeded") and (.status.conditions | all(.status == "True"))' >/dev/null && ok "Garden Succeeded, conditions True" || fail "Garden not Succeeded or a condition is not True"
k="$(kg version -o json 2>/dev/null | jq -r '.serverVersion.gitVersion // ""')"; echo "virtual garden Kubernetes $k"
[[ -z "$EXPECT_K8S" || "$k" == "v$EXPECT_K8S" ]] && ok "virtual garden Kubernetes" || fail "virtual garden Kubernetes '$k', expected v$EXPECT_K8S"
ov="$(kr get deploy gardener-operator -n garden -o jsonpath='{.spec.template.spec.containers[0].image}' | sed 's/.*://')"
[[ "$ov" == "$v" ]] && ok "operator $ov equals Garden version" || fail "operator $ov differs from Garden $v"
sv="$(kg get seeds -o json | jq -r '[.items[].status.gardener.version] | unique | join(",")')"
[[ "$sv" == "$v" ]] && ok "all seeds report $sv (gardenlet in lock-step)" || fail "seed versions '$sv' differ from Garden $v"
kg get controllerinstallations -o json | all_ready Healthy && ok "ControllerInstallations Healthy" || fail "a ControllerInstallation is not Healthy"
kg get seeds -o json | jq -e '.items | all(.status.lastOperation.state == "Succeeded" and (.status.conditions | all(.status == "True")))' >/dev/null && ok "seeds Succeeded, conditions True" || fail "a seed is not healthy"
kg get shoots -A -o json | jq -e '.items | all(.status.lastOperation.state == "Succeeded" and ((.metadata.labels["shoot.gardener.cloud/status"] // "healthy") == "healthy"))' >/dev/null && ok "all shoots Succeeded and healthy" || fail "a shoot is not healthy"
if [[ -n "$DASH" ]]; then code="$(curl -s -o /dev/null --max-time 15 -w '%{http_code}' "$DASH/" || true)"; [[ "$code" == 200 ]] && ok "dashboard $DASH answers 200" || fail "dashboard answers $code"; fi

if ! $QUICK; then
echo "== Pods and managed resources"
bad="$(kr get pods -A -o json | jq -r '.items[] | select(.status.phase != "Running" and .status.phase != "Succeeded") | "\(.metadata.namespace)/\(.metadata.name) \(.status.phase)"')"
[[ -z "$bad" ]] && ok "no pod outside Running/Succeeded" || { echo "$bad" | head -8; fail "pods not Running"; }
nr="$(kr get pods -A -o json | jq -r '.items[] | select(.status.phase == "Running") | select([.status.containerStatuses[]? | .ready] | all | not) | "\(.metadata.namespace)/\(.metadata.name)"')"
[[ -z "$nr" ]] && ok "all running pods are ready" || { echo "$nr" | head -8; fail "running pods not ready"; }
rs="$(kr get pods -A -o json | jq -r '.items[] | .metadata as $m | .status.containerStatuses[]? | select(.restartCount > 5) | "\($m.namespace)/\($m.name) restarts=\(.restartCount)"' | head -5)"
[[ -z "$rs" ]] && ok "no container with more than 5 restarts" || { echo "$rs"; warn "many restarts (history, check they are stable now)"; }
kr get managedresources -A -o json | jq -e '.items | all([.status.conditions[]? | select(.type=="ResourcesApplied" or .type=="ResourcesHealthy") | .status] | all(. == "True"))' >/dev/null && ok "all ManagedResources applied and healthy" || fail "a ManagedResource is not healthy"
kr get extensions.operator.gardener.cloud -o json 2>/dev/null | all_ready Installed && ok "operator Extensions Installed" || warn "an operator Extension is not Installed (or none exist)"

echo "== etcd and storage"
kr get etcds.druid.gardener.cloud -A -o json | jq -e '.items | all(.status.ready == true)' >/dev/null && ok "Etcds ready" || fail "an Etcd is not ready"
pv="$(kr get pvc -n garden -o json | jq -r '.items[] | select(.status.phase != "Bound") | .metadata.name')"
[[ -z "$pv" ]] && ok "all PVCs in garden Bound" || fail "unbound PVCs: $pv"

echo "== Flux"
retry_ready() { "$@" || { echo "not ready, rechecking in 30s (may be mid-upgrade)"; sleep 30; }; "$@"; }
hr_ok() { kr get hr -A -o json | all_ready Ready; }
ks_ok() { kr get kustomization -A -o json | all_ready Ready; }
retry_ready hr_ok && ok "all HelmReleases Ready" || fail "a HelmRelease is not Ready"
retry_ready ks_ok && ok "all Kustomizations Ready" || fail "a Kustomization is not Ready"
sus="$(kr get hr,kustomization -A -o json | jq -r '.items[] | select(.spec.suspend == true) | "\(.kind)/\(.metadata.name)"')"
[[ -z "$sus" ]] && ok "nothing suspended" || warn "suspended (forgotten after the cutover?): $(echo "$sus" | tr "\n" " ")"
[[ -n "$(kr get cronjob virtual-garden-access-sync -n garden -o jsonpath='{.status.lastSuccessfulTime}' 2>/dev/null)" ]] && ok "access sync has run" || warn "access sync never succeeded"

echo "== Leftovers of the classic setup (must not exist)"
left=""; for h in gardener-application gardener-runtime kube-apiserver etcd etcd-events dashboard-runtime dashboard-application ingress-nginx; do kr get hr "$h" -n flux-system >/dev/null 2>&1 && left="$left hr/$h"; done
for o in deploy/garden-kube-apiserver statefulset/etcd statefulset/etcd-events deploy/garden-ingress-nginx-controller; do kr get "$o" -n garden >/dev/null 2>&1 && left="$left $o"; done
[[ -z "$left" ]] && ok "no classic object left" || fail "classic objects exist:$left"

echo "== Certificates, DNS, events"
kr get certificates.cert.gardener.cloud -A -o json 2>/dev/null | jq -e '.items | all(.status.state == "Ready")' >/dev/null && ok "Certificates Ready" || warn "a Certificate is not Ready (or none exist)"
kr get dnsentries.dns.gardener.cloud -A -o json 2>/dev/null | jq -e '.items | all(.status.state == "Ready")' >/dev/null && ok "DNSEntries Ready" || warn "a DNSEntry is not Ready (or none exist)"
now=$(date +%s)
w="$(kr get events -A --field-selector type=Warning -o json | jq -r --argjson now "$now" '[.items[] | select((.lastTimestamp // .eventTime // "1970-01-01T00:00:00Z") | sub("\\.[0-9]+Z$"; "Z") | fromdateiso8601 > ($now - 900)) | select(.metadata.namespace | test("^(garden|virtual-garden|istio|extension|runtime-extension)")) | .reason] | group_by(.) | map("\(length)x \(.[0])") | join(", ")')"
[[ -z "$w" ]] && ok "no warning events in the last 15 min" || echo "warning events (15 min): $w"
fi

echo
(( FAILED == 0 )) && { echo "VERIFY OK ($WARNED warnings)"; exit 0; } || { echo "VERIFY FAILED ($FAILED failures, $WARNED warnings)"; exit 1; }
