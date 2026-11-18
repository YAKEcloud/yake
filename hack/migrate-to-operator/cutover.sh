#!/usr/bin/env bash
# Cutover to gardener-operator in scripted steps. Dry-run by default, --apply executes (asks once for the cluster context).
#   cutover.sh <mode> --runtime-kubeconfig=<p> --garden-kubeconfig=<p> [--sha=<commit>] [--apply]
# Modes (each ends with: you publish the named repo stand, then run the next mode):
#   pre         preflight, suspend Flux, decouple replaced HelmReleases, stop old workloads, re-bind etcd volumes, delete old release objects.
#               next: switch.sh core, publish
#   post        --sha: wait for the commit, resume Flux, wait for the virtual garden, access sync, repoint gardenlet, verify
#   extensions  suspend Flux, decouple the catalog extension HelmReleases.       next: switch.sh extensions, publish, then `resume --sha`
#   gardenlet   adopt the gardenlet into Gardener's self-upgrade, decouple its HelmRelease. next: switch.sh gardenlet-final, publish, `resume --sha`
#   resume      --sha: wait for the commit, resume Flux, verify
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib.sh"
EXTRA_ARGS=()
usage() { sed -n '2,12p' "$0"; }
MODE="${1:-}"; [[ "$MODE" =~ ^(pre|post|extensions|gardenlet|resume)$ ]] || { usage; exit 1; }
shift
parse_common_args "$@"
SHA=""; for a in "${EXTRA_ARGS[@]:-}"; do [[ "$a" == --sha=* ]] && SHA="${a#*=}"; done
require_runtime; require_garden
STEPS="$SCRIPT_DIR/steps"; A=(); $APPLY && A=(--apply)
RT=(--runtime-kubeconfig="$RUNTIME_KUBECONFIG"); BOTH=("${RT[@]}" --garden-kubeconfig="$GARDEN_KUBECONFIG")
confirm_apply; export YAKE_CONFIRMED=1

suspend_flux() { for k in yake gardener pre-gardener addons; do mutate kr patch kustomization "$k" -n flux-system --type merge -p '{"spec":{"suspend":true}}'; done; mutate kr patch hr addons -n flux-system --type merge -p '{"spec":{"suspend":true}}'; }
wait_for() { $APPLY || { echo "[dry-run] wait: $1"; return 0; }; until eval "$2"; do sleep 5; done; ok "$1"; }
resume_flux() {  # yake first: it resets the suspend flags of its children, so the artifact must already be the new commit
  [[ -n "$SHA" ]] || die "--sha=<published commit> is required"
  wait_for "Flux artifact is $SHA" '[[ "$(kr get gitrepository yake -n flux-system -o jsonpath="{.status.artifact.revision}")" == *"$SHA"* ]]'
  mutate kr patch kustomization yake -n flux-system --type merge -p '{"spec":{"suspend":false}}'
  $APPLY && sleep 30
  mutate kr patch hr addons -n flux-system --type merge -p '{"spec":{"suspend":false}}'
}
nudge_hrs() { local t; t="$(date +%s)"; for h in $(kr get hr -n flux-system -o name | sed 's#.*/##'); do mutate kr annotate hr "$h" -n flux-system "reconcile.fluxcd.io/requestedAt=$t" "reconcile.fluxcd.io/resetAt=$t" --overwrite >/dev/null 2>&1 || true; done; }
verify_until_green() { $APPLY || { echo "[dry-run] verify"; return 0; }; until "$SCRIPT_DIR/verify.sh" --quick "${BOTH[@]}" > /tmp/cutover-verify.log 2>&1; do grep FAIL /tmp/cutover-verify.log | head -3; sleep 20; done; ok "verify --quick green"; }

case "$MODE" in
pre)
  echo "== preflight"; "$SCRIPT_DIR/preflight.sh" "${BOTH[@]}"
  echo "== suspend Flux"; suspend_flux
  echo "== decouple replaced HelmReleases"; "$STEPS/decouple-flux.sh" "${RT[@]}" "${A[@]}"
  echo "== stop old workloads (the gardenlet keeps running)"
  for d in gardener-apiserver gardener-controller-manager gardener-scheduler gardener-admission-controller gardener-dashboard garden-ingress-nginx-controller terminal-controller-manager garden-kube-apiserver; do
    kr get deploy "$d" -n garden >/dev/null 2>&1 && mutate kr scale deploy "$d" -n garden --replicas=0
  done
  mutate kr scale sts etcd etcd-events -n garden --replicas=0
  wait_for "old pods gone" '[[ -z "$(kr get pods -n garden --no-headers | grep -E "^(etcd-0|etcd-events-0|garden-kube-apiserver|gardener-apiserver)")" ]]'
  echo "== re-bind etcd volumes"; "$STEPS/adopt-etcd.sh" "${RT[@]}" "${A[@]}"
  echo "== delete objects of the abandoned releases (only valid BEFORE the operator runs; runtime only)"; "$STEPS/remove-release-objects.sh" "${RT[@]}" "${A[@]}"
  echo; echo "NEXT: switch.sh core, publish, then: cutover.sh post --sha=<commit>" ;;
post)
  resume_flux
  wait_for "virtual garden API available" '[[ "$(kr get garden -o jsonpath="{.items[0].status.conditions[?(@.type==\"VirtualGardenAPIServerAvailable\")].status}" 2>/dev/null)" == True ]]'
  echo "== access for Flux"
  wait_for "access sync CronJob exists" 'kr get cronjob virtual-garden-access-sync -n garden >/dev/null 2>&1'
  if $APPLY; then kr delete job first-sync -n garden --ignore-not-found >/dev/null; kr create job --from=cronjob/virtual-garden-access-sync first-sync -n garden >/dev/null; kr wait --for=condition=complete job/first-sync -n garden --timeout=300s; else echo "[dry-run] run the access sync once"; fi
  echo "== repoint the gardenlet kubeconfig to the external API address (the old Service is gone)"
  domain="$(kr get garden -o jsonpath='{.items[0].spec.virtualCluster.dns.domains[0].name}' 2>/dev/null || true)"; new="https://api.${domain:-<domain>}:443"
  cur="$(kr get secret gardenlet-kubeconfig -n garden -o jsonpath='{.data.kubeconfig}' | base64 -d | awk '/server:/{print $2; exit}')"
  echo "gardenlet kubeconfig: $cur -> $new"
  if [[ "$cur" != "$new" ]]; then
    $APPLY && { kr get secret gardenlet-kubeconfig -n garden -o json | jq --arg o "$cur" --arg n "$new" '.data.kubeconfig |= ((@base64d | gsub($o; $n)) | @base64)' | kr apply -f - >/dev/null; kr rollout restart deployment/gardenlet -n garden; } || echo "[dry-run] rewrite the server address and restart the gardenlet"
  fi
  nudge_hrs; verify_until_green
  echo "NEXT: with dnsManagedByGardener=false set garden.dns.entries now; then cutover.sh extensions" ;;
extensions)
  suspend_flux; "$STEPS/decouple-flux.sh" "${RT[@]}" --stage=extensions "${A[@]}"
  echo "NEXT: switch.sh extensions, publish, then: cutover.sh resume --sha=<commit>" ;;
gardenlet)
  m="$(kr get cm gardenlet-selfupgrade-config -n garden -o jsonpath='{.data.gardenlet\.yaml}' 2>/dev/null || true)"
  if [[ -n "$m" ]]; then name="$(echo "$m" | awk '/^  name:/{print $2; exit}')"; $APPLY && echo "$m" | kg apply -f - >/dev/null || echo "[dry-run] apply the Gardenlet resource $name"
  else name="$(kg get gardenlets -n garden -o jsonpath='{.items[0].metadata.name}' 2>/dev/null || true)"; [[ -n "$name" ]] || die "no gardenlet-selfupgrade-config and no Gardenlet resource: publish switch.sh gardenlet first"; fi
  if $APPLY; then
    kg label gardenlet "$name" -n garden operator.gardener.cloud/auto-update-gardenlet-helm-chart-ref=true --overwrite >/dev/null
    wait_for "Gardenlet $name reconciled" '[[ "$(kg get gardenlet "$name" -n garden -o jsonpath="{.status.conditions[?(@.type==\"GardenletReconciled\")].status}")" == True ]]'
  else echo "[dry-run] label the Gardenlet for the operator auto-update"; fi
  suspend_flux; "$STEPS/decouple-flux.sh" "${RT[@]}" --stage=gardenlet "${A[@]}"
  echo "NEXT: switch.sh gardenlet-final, publish, then: cutover.sh resume --sha=<commit>" ;;
resume) resume_flux; nudge_hrs; verify_until_green ;;
esac
