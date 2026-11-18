#!/usr/bin/env bash
# Waits until the virtual garden runs a new Kubernetes version and everything is healthy again. The version itself is set
# in your yake configuration: garden.kubernetesVersion (one minor per step, the operator does not skip minors; Gardener 1.154
# no longer supports 1.32 for the Garden). Newest patches (2026-11): 1.33.13, 1.34.13, 1.35.10, 1.36.6, 1.37.2 (highest available).
# Usage: k8s-step.sh <k8s-version> --runtime-kubeconfig=<p> --garden-kubeconfig=<p> [--timeout=1500]
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib.sh"
EXTRA_ARGS=()
usage() { sed -n '2,6p' "$0"; }
TARGET="${1:-}"; [[ "$TARGET" =~ ^1\.[0-9]+\.[0-9]+$ ]] || { usage; exit 1; }
shift
TIMEOUT=1500
parse_common_args "$@"
for a in "${EXTRA_ARGS[@]:-}"; do [[ "$a" == --timeout=* ]] && TIMEOUT="${a#*=}"; done
require_runtime; require_garden
deadline=$(( $(date +%s) + TIMEOUT ))
echo "waiting up to ${TIMEOUT}s for the virtual garden at v$TARGET"
until [[ "$(kg version -o json 2>/dev/null | jq -r '.serverVersion.gitVersion // ""')" == "v$TARGET" ]]; do
  (( $(date +%s) < deadline )) || die "virtual garden did not reach v$TARGET in time"
  sleep 10
done
ok "virtual garden kube-apiserver at v$TARGET"
until [[ "$(kr get garden -o jsonpath='{.items[0].status.lastOperation.state}' 2>/dev/null)" == Succeeded ]]; do
  (( $(date +%s) < deadline )) || die "Garden did not reach Succeeded in time"
  sleep 10
done
ok "Garden reconcile Succeeded"
until "$SCRIPT_DIR/verify.sh" --quick --runtime-kubeconfig="$RUNTIME_KUBECONFIG" --garden-kubeconfig="$GARDEN_KUBECONFIG" > /tmp/k8s-step-health.log 2>&1; do
  (( $(date +%s) < deadline )) || { grep -E "FAIL|UNHEALTHY" /tmp/k8s-step-health.log; die "healthcheck still failing after the timeout, STOP"; }
  echo "healthcheck not green yet, retrying in 20s"; sleep 20
done
grep -E "ok \]|HEALTHY" /tmp/k8s-step-health.log
