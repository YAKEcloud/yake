#!/usr/bin/env bash
# Creates labeled COPIES of the existing CA and service account key Secrets in runtime namespace garden so that the
# operator's SecretsManager reuses them (label secrets-manager-use-data-for-name). Originals are not modified.
# Default is --dry-run. Usage: prepare-secrets.sh --runtime-kubeconfig=<path> [--apply]
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/lib.sh"
EXTRA_ARGS=()
usage() { sed -n '2,5p' "$0"; }
parse_common_args "$@"
require_runtime
confirm_apply

# copy_secret <source> <target> <label-value> <jq expression building .data from source .data>
copy_secret() {
  local src="$1" dst="$2" label="$3" expr="$4"
  kr get secret "$src" -n garden >/dev/null || die "source secret garden/$src not found"
  local n; n="$(kr get secret -n garden -l "secrets-manager-use-data-for-name=$label" -o name | { grep -v "secret/$dst\$" || true; } | wc -l)"
  [[ "$n" == 0 ]] || die "another secret already carries secrets-manager-use-data-for-name=$label (SecretsManager requires exactly one)"
  echo "secret/$src -> secret/$dst (label $label)"
  if $APPLY; then
    kr get secret "$src" -n garden -o json \
      | jq --arg name "$dst" --arg label "$label" "{apiVersion:\"v1\",kind:\"Secret\",type:\"Opaque\",metadata:{name:\$name,namespace:\"garden\",labels:{\"secrets-manager-use-data-for-name\":\$label}},data:(.data | $expr)}" \
      | kr apply -f - >/dev/null
  fi
}

copy_secret garden-kube-apiserver-ca       yake-migrated-ca              ca              '{"ca.crt":.["ca.crt"],"ca.key":.["ca.key"]}'
# The old kube-apiserver uses the same CA as client CA (--client-ca-file).
copy_secret garden-kube-apiserver-ca       yake-migrated-ca-client       ca-client       '{"ca.crt":.["ca.crt"],"ca.key":.["ca.key"]}'
# ca-front-proxy is deliberately NOT migrated: in the classic yake setup the aggregator CA is the same CA as the client CA, and
# Kubernetes 1.35 refuses overlapping --client-ca-file and --requestheader-client-ca-file. The operator generates a fresh one
# (the kube-apiserver publishes it itself, nothing has to be preserved).
# SecretsManager stores RSA keys under id_rsa (pkg/utils/secrets/rsa_private_key.go), the old chart under service_account.key.
copy_secret garden-service-account-key     yake-migrated-service-account-key service-account-key '{"id_rsa":.["service_account.key"]}'

# Backup of the static-token kubeconfig that Flux consumers use today. It is overwritten by the sync CronJob after the
# cutover and is needed for the rollback.
echo "secret/gardener-internal-kubeconfig -> secret/gardener-internal-kubeconfig-legacy (flux-system)"
kr get secret gardener-internal-kubeconfig -n flux-system >/dev/null || die "secret flux-system/gardener-internal-kubeconfig not found"
if $APPLY; then
  kr get secret gardener-internal-kubeconfig -n flux-system -o json \
    | jq '{apiVersion:"v1",kind:"Secret",type:"Opaque",metadata:{name:"gardener-internal-kubeconfig-legacy",namespace:"flux-system"},data:.data}' \
    | kr apply -f - >/dev/null
fi

echo "No etcd encryption key exists in the old setup (garden-kube-apiserver has no encryption config): nothing to label for it."
$APPLY || echo "DRY RUN done."
