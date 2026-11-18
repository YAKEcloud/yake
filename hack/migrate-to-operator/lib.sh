#!/usr/bin/env bash
# Shared helpers. Sourced by the other scripts. Never prints Secret contents.
set -euo pipefail

APPLY=false
RUNTIME_KUBECONFIG="${RUNTIME_KUBECONFIG:-}"
GARDEN_KUBECONFIG="${GARDEN_KUBECONFIG:-}"
FAILED=0

die() { echo "ERROR: $*" >&2; exit 1; }
ok() { echo "[ ok ] $*"; }
warn() { echo "[warn] $*"; }
fail() { echo "[FAIL] $*"; FAILED=$((FAILED + 1)); }

parse_common_args() {
  for arg in "$@"; do
    case "$arg" in
      --apply) APPLY=true ;;
      --dry-run) APPLY=false ;;
      --runtime-kubeconfig=*) RUNTIME_KUBECONFIG="${arg#*=}" ;;
      --garden-kubeconfig=*) GARDEN_KUBECONFIG="${arg#*=}" ;;
      -h|--help) usage; exit 0 ;;
      *) EXTRA_ARGS+=("$arg") ;;
    esac
  done
}

# kr: kubectl against the runtime cluster, kg: kubectl against the virtual garden (both with short timeouts).
kr() { KUBECONFIG="$RUNTIME_KUBECONFIG" kubectl --request-timeout=20s "$@"; }
kg() { KUBECONFIG="$GARDEN_KUBECONFIG" kubectl --request-timeout=20s "$@"; }

require_runtime() {
  [[ -n "$RUNTIME_KUBECONFIG" ]] || die "set --runtime-kubeconfig=<path> (or RUNTIME_KUBECONFIG)"
  echo "runtime cluster context: $(kr config current-context)"
}
require_garden() {
  [[ -n "$GARDEN_KUBECONFIG" ]] || die "set --garden-kubeconfig=<path> (or GARDEN_KUBECONFIG)"
}

# mutate: run a command only with --apply, otherwise print it.
mutate() {
  if $APPLY; then
    echo "+ $*"
    "$@"
  else
    echo "[dry-run] $*"
  fi
}

# confirm_apply: with --apply the operator must type the runtime context name.
confirm_apply() {
  [[ "${YAKE_CONFIRMED:-}" == 1 ]] && return 0
  $APPLY || { echo "DRY RUN (default). Nothing is changed. Use --apply to execute."; return 0; }
  local ctx; ctx="$(kr config current-context)"
  read -r -p "Type the runtime context name ($ctx) to continue: " answer
  [[ "$answer" == "$ctx" ]] || die "context name mismatch, aborting"
}
