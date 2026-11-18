#!/usr/bin/env bash
# Lists (default) or deletes the objects of ABANDONED Helm releases (their HelmRelease was removed by decouple-flux.sh,
# the release Secrets still exist). CustomResourceDefinitions, Namespaces, PVCs, PVs, Secrets and PriorityClasses are never
# deleted (Secrets are kept for the rollback; clean them up manually after the soak period).
# Objects are only deleted when their Helm annotation names the release (ownership check), so nothing foreign can be hit.
# --stage=extensions: only the runtime workloads of the OLD admission releases (Deployments, Services, ServiceAccounts, Roles,
# PDBs, VPAs, ConfigMaps in namespace garden). The ControllerRegistrations/Deployments and the virtual garden webhooks are owned by the
# operator now and are never touched. Run it only after the operator's admission deployments are healthy.
# Needs the helm CLI. Usage:
#   remove-release-objects.sh --runtime-kubeconfig=<path> [--garden-kubeconfig=<path>] [--apply]
# Flux stores the Helm release Secrets in flux-system (storage namespace), independent of the target namespace.
# Virtual garden releases are only handled when --garden-kubeconfig is given.
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../lib.sh"
EXTRA_ARGS=()
usage() { sed -n '2,7p' "$0"; }
parse_common_args "$@"
require_runtime
command -v helm >/dev/null || die "helm not found"

RUNTIME_RELEASES=(
  garden-gardener-runtime garden-kube-apiserver garden-etcd garden-etcd-events
  garden-ingress-nginx garden-dashboard-runtime garden-terminal-controller-manager-runtime garden-gardener-metrics-exporter-runtime
)
EXT_RELEASES=()
STAGE=core
for a in "${EXTRA_ARGS[@]:-}"; do [[ "$a" == --stage=* ]] && STAGE="${a#*=}"; done
if [[ "$STAGE" == extensions ]]; then
  REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
  for k in $(grep -oE '^[a-z0-9-]+:$' "$REPO_ROOT/operator/extensions/templates/_catalog.tpl" | tr -d ':'); do EXT_RELEASES+=("garden-admission-$k-runtime"); done
fi

GARDEN_RELEASES=(
  flux-system-gardener-application garden-dashboard-application garden-terminal-controller-manager-application garden-gardener-metrics-exporter-application
)

handle() {
  local kubeconfig="$1" name="$2" kubectl_fn="$3" ns=flux-system release="$2" kinds="${4:-}"
  echo "== $release"
  local manifest
  manifest="$(KUBECONFIG="$kubeconfig" helm get manifest "$name" -n "$ns" 2>/dev/null)" || { echo "  (release not found, skip)"; return 0; }
  [[ -n "${manifest//[[:space:]]/}" ]] || { echo "  (empty release, skip)"; return 0; }
  # kind/name/namespace for every object, minus protected kinds
  echo "$manifest" | KUBECONFIG="$kubeconfig" kubectl create --dry-run=client --validate=false -f - -o json 2>/dev/null \
    | jq -r --arg kinds "$kinds" '(if .kind == "List" then .items[] else . end) | select(.kind | IN("CustomResourceDefinition","Namespace","PersistentVolumeClaim","PersistentVolume","Secret","PriorityClass") | not) | select($kinds == "" or (.kind | IN($kinds | split(",")[]))) | "\(.kind)\t\(.metadata.name)\t\(.metadata.namespace // "")"' \
    | while IFS=$'\t' read -r kind oname ons; do
        # Safety: only delete what really belongs to this Helm release (annotation set by Helm). Same-named objects of the operator
        # or of the customer carry another or no release annotation and are never touched.
        nsarg=(); [[ -n "$ons" ]] && nsarg=(-n "$ons")
        live="$("$kubectl_fn" get "$kind" "$oname" "${nsarg[@]}" -o json 2>/dev/null || true)"
        [[ -n "$live" ]] || continue                                  # not found
        owner="$(echo "$live" | jq -r '.metadata.annotations["meta.helm.sh/release-name"] // ""')"
        if [[ "$owner" != "$name" ]]; then echo "  skip $kind/$oname (Helm owner '${owner:-none}', not '$name')"; continue; fi
        mutate "$kubectl_fn" delete "$kind" "$oname" "${nsarg[@]}" --ignore-not-found --wait=false
      done
}

confirm_apply
if [[ "$STAGE" == extensions ]]; then
  for r in "${EXT_RELEASES[@]}"; do handle "$RUNTIME_KUBECONFIG" "$r" kr "Deployment,Service,ServiceAccount,Role,RoleBinding,PodDisruptionBudget,VerticalPodAutoscaler,ConfigMap"; done
  exit 0
fi
for r in "${RUNTIME_RELEASES[@]}"; do handle "$RUNTIME_KUBECONFIG" "$r" kr; done
if [[ -n "$GARDEN_KUBECONFIG" ]]; then
  for r in "${GARDEN_RELEASES[@]}"; do handle "$GARDEN_KUBECONFIG" "$r" kg; done
else
  echo "(virtual garden releases skipped: no --garden-kubeconfig)"
fi
