#!/usr/bin/env bash
# One Gardener upgrade step: operator, Garden health check and gardenlet go to the same version in one commit.
# Rules (version_skew_policy.md): the operator crashes when it skips a minor, so exactly one minor per step (or a patch of the
# same minor). The order operator -> Garden -> gardenlet is enforced by Flux (healthCheckExprs on the garden HelmRelease).
#
#   upgrade-step.sh <target> [--no-commit]            edit files (+ commit) in the current repo checkout
#   upgrade-step.sh <target> --wait --runtime-kubeconfig=<p> --garden-kubeconfig=<p> [--timeout=900]
#                                                      wait for Garden/gardenlet at <target> and run healthcheck.sh (exit != 0: STOP)
# <target> is a version like 1.138.3. Use the newest patch of the minor, see docs/migration-to-operator.md (section 6).
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../lib.sh"
EXTRA_ARGS=()
usage() { sed -n '2,10p' "$0"; }
TARGET="${1:-}"; [[ "$TARGET" =~ ^1\.[0-9]+\.[0-9]+$ ]] || { usage; exit 1; }
shift
COMMIT=true; WAIT=false; TIMEOUT=900
parse_common_args "$@"
for a in "${EXTRA_ARGS[@]:-}"; do
  [[ "$a" == --no-commit ]] && COMMIT=false
  [[ "$a" == --wait ]] && WAIT=true
  [[ "$a" == --timeout=* ]] && TIMEOUT="${a#*=}"
done
ROOT="$(git rev-parse --show-toplevel)"; cd "$ROOT"

if ! $WAIT; then
  CUR="$(grep -m1 -E '^\s+version: v1\.' operator/operator.yaml | sed -E 's/.*v(1\.[0-9]+\.[0-9]+).*/\1/')"
  [[ -n "$CUR" ]] || die "cannot read the current operator version from operator/operator.yaml"
  cm="${CUR#1.}"; cm="${cm%%.*}"; tm="${TARGET#1.}"; tm="${tm%%.*}"
  (( tm == cm || tm == cm + 1 )) || die "refusing $CUR -> $TARGET: the operator must not skip a minor (one minor per step)"
  [[ "$CUR" != "$TARGET" ]] || die "already at $TARGET"
  echo "operator $CUR -> $TARGET"
  # 1. operator chart, 2. Garden health check, 3. gardenlet chart (classic Helm gardenlet of the runtime seed)
  sed -i -E "s/^(\s+version: )v1\.[0-9]+\.[0-9]+/\1v$TARGET/" operator/operator.yaml
  sed -i -E "s/status\.gardener\.version == 'v1\.[0-9]+\.[0-9]+'/status.gardener.version == 'v$TARGET'/; s/(gardenerVersion: \")1\.[0-9]+\.[0-9]+/\1$TARGET/" operator/garden.yaml
  if [[ -f gardener/gardenlet.yaml ]]; then
    sed -i -E "/chart: gardenlet/{n;s/(version: )1\.[0-9]+\.[0-9]+/\1$TARGET/}; s#(charts/gardener/gardenlet:v)1\.[0-9]+\.[0-9]+#\1$TARGET#" gardener/gardenlet.yaml
  fi
  grep -n "v$TARGET" operator/operator.yaml operator/garden.yaml | cut -c1-110
  [[ ! -f gardener/gardenlet.yaml ]] || grep -n -A1 "chart: gardenlet" gardener/gardenlet.yaml | grep version
  if $COMMIT; then
    git add operator/operator.yaml operator/garden.yaml; [[ -f gardener/gardenlet.yaml ]] && git add gardener/gardenlet.yaml
    git commit -q -s -m "Upgrade Gardener to $TARGET" -m "Operator, Garden health check and gardenlet in one step (previous: $CUR)." && git log --oneline -1
  fi
  echo "next: point the yake GitRepository at this commit, then: $0 $TARGET --wait --runtime-kubeconfig=... --garden-kubeconfig=..."
  exit 0
fi

require_runtime; require_garden
echo "waiting up to ${TIMEOUT}s for Garden and gardenlet at v$TARGET"
deadline=$(( $(date +%s) + TIMEOUT ))
until [[ "$(kr get garden -o jsonpath='{.items[0].status.gardener.version}' 2>/dev/null)" == "v$TARGET" \
      && "$(kr get garden -o jsonpath='{.items[0].status.lastOperation.state}' 2>/dev/null)" == Succeeded ]]; do
  (( $(date +%s) < deadline )) || die "Garden did not reach v$TARGET in time"
  sleep 10
done
ok "Garden at v$TARGET (Succeeded)"
until [[ "$(kg get seeds -o json 2>/dev/null | jq -r '[.items[].status.gardener.version] | unique | join(",")')" == "v$TARGET" ]]; do
  (( $(date +%s) < deadline )) || die "seeds did not report v$TARGET in time (gardenlet not upgraded?)"
  sleep 10
done
ok "all seeds report v$TARGET"
# After a gardenlet upgrade all shoots are reconciled once, so the healthcheck is repeated until it is green or the time is up.
until "$SCRIPT_DIR/../verify.sh" --quick --runtime-kubeconfig="$RUNTIME_KUBECONFIG" --garden-kubeconfig="$GARDEN_KUBECONFIG" --expect-version="$TARGET" > /tmp/upgrade-step-health.log 2>&1; do
  (( $(date +%s) < deadline )) || { grep -E "FAIL|UNHEALTHY" /tmp/upgrade-step-health.log; die "healthcheck still failing after the timeout, STOP"; }
  echo "healthcheck not green yet ($(grep -c FAIL /tmp/upgrade-step-health.log) failing), retrying in 20s"; sleep 20
done
grep -E "ok \]|HEALTHY" /tmp/upgrade-step-health.log
