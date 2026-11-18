#!/usr/bin/env bash
# Runs the Gardener upgrade path minor by minor and STOPS at the first failing step.
# Per step: upgrade-step.sh (edit + commit) -> your pin command (publishes the commit) -> wait -> healthcheck.
#
#   upgrade-chain.sh --pin-cmd='<command with {sha}>' --runtime-kubeconfig=<p> --garden-kubeconfig=<p> \
#                    [--versions="1.138.3 1.139.4 ..."] [--confirm] [--timeout=1800]
#
# --pin-cmd   publishes the commit to Flux. In production that is your push to garden-control-plane that sets the yake GitRepository
#             to `ref.commit: {sha}`, in tests e.g. 'git push -q -f local HEAD:e2e-137'. {sha} is replaced by the commit id.
# --confirm   asks before every step.
# --versions  default: the newest patch of every minor from 1.138 to 1.155 (state 2026-11-16). Versions at or below the
#             current operator version are skipped. Read docs/migration-to-operator.md (section 6) for the per-version hints.
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib.sh"
EXTRA_ARGS=()
usage() { sed -n '2,13p' "$0"; }
parse_common_args "$@"
PIN=""; CONFIRM=false; TIMEOUT=1800
VERSIONS="1.138.3 1.139.4 1.140.5 1.141.6 1.142.6 1.143.4 1.144.6 1.145.4 1.146.6 1.147.5 1.148.5 1.149.5 1.150.4 1.151.4 1.152.3 1.153.5 1.154.5 1.155.1"
for a in "${EXTRA_ARGS[@]:-}"; do
  case "$a" in
    --pin-cmd=*) PIN="${a#*=}" ;;
    --confirm) CONFIRM=true ;;
    --timeout=*) TIMEOUT="${a#*=}" ;;
    --versions=*) VERSIONS="${a#*=}" ;;
  esac
done
[[ -n "$PIN" ]] || { usage; die "--pin-cmd is required"; }
require_runtime; require_garden
cd "$(git rev-parse --show-toplevel)"
minor() { local v="${1#1.}"; echo "${v%%.*}"; }
patchof() { echo "${1##*.}"; }

for v in $VERSIONS; do
  cur="$(grep -m1 -E '^\s+version: v1\.' operator/operator.yaml | sed -E 's/.*v(1\.[0-9]+\.[0-9]+).*/\1/')"
  if (( $(minor "$v") < $(minor "$cur") )) || { (( $(minor "$v") == $(minor "$cur") )) && (( $(patchof "$v") <= $(patchof "$cur") )); }; then
    echo "skip $v (current $cur)"; continue
  fi
  echo; echo "=== $cur -> $v ==="
  if $CONFIRM; then read -r -p "Proceed with $v? [y/N] " yn; [[ "$yn" == y ]] || die "aborted before $v"; fi
  "$SCRIPT_DIR/steps/upgrade-step.sh" "$v" > /tmp/upgrade-chain-edit.log 2>&1 || { cat /tmp/upgrade-chain-edit.log; die "edit step for $v failed"; }
  sha="$(git rev-parse HEAD)"
  echo "commit $sha, pinning"
  eval "${PIN//\{sha\}/$sha}"
  "$SCRIPT_DIR/steps/upgrade-step.sh" "$v" --wait --runtime-kubeconfig="$RUNTIME_KUBECONFIG" --garden-kubeconfig="$GARDEN_KUBECONFIG" --timeout="$TIMEOUT" \
    || die "step $v FAILED, STOP. Roll back by pinning the previous commit only if the Garden is still at $cur (no minor skipping, no downgrade)."
  ok "step $v done"
done
echo "chain finished"
