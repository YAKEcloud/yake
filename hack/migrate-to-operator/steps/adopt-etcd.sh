#!/usr/bin/env bash
# Re-binds the existing etcd PersistentVolumes to PVCs with the names gardener-operator (etcd-druid) expects.
# Preconditions: Flux no longer manages etcd/etcd-events HelmReleases (see decouple-flux.sh), StatefulSets scaled to 0,
# an etcd snapshot was taken and stored outside the cluster. The PVs are never deleted (reclaimPolicy is set to Retain).
# etcd-druid runs etcd as UID/GID 65532, the old chart ran as root: after the re-binding a one-off Job chowns the data
# (image: CHOWN_IMAGE, default docker.io/library/busybox:1.37.0). --only-chown repeats just that step.
# Default is --dry-run. Usage: adopt-etcd.sh --runtime-kubeconfig=<path> [--only-chown] [--apply]
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../lib.sh"
EXTRA_ARGS=()
usage() { sed -n '2,6p' "$0"; }
parse_common_args "$@"
require_runtime
confirm_apply

CHOWN_IMAGE="${CHOWN_IMAGE:-docker.io/library/busybox:1.37.0}"
ONLY_CHOWN=false
for a in "${EXTRA_ARGS[@]:-}"; do [[ "$a" == --only-chown ]] && ONLY_CHOWN=true; done

fix_ownership() {
  local pvc="$1" job job_yaml
  job="etcd-chown-$(echo "$1" | md5sum | cut -c1-8)"
  job_yaml="$(cat <<EOF
apiVersion: batch/v1
kind: Job
metadata:
  name: $job
  namespace: garden
spec:
  backoffLimit: 2
  ttlSecondsAfterFinished: 600
  template:
    spec:
      restartPolicy: Never
      securityContext:
        runAsUser: 0
      containers:
        - name: chown
          image: $CHOWN_IMAGE
          command: [sh, -c, "chown -R 65532:65532 /data && chmod -R u+rwX /data && ls -ld /data"]
          volumeMounts:
            - {name: data, mountPath: /data}
      volumes:
        - name: data
          persistentVolumeClaim:
            claimName: $pvc
EOF
)"
  if $APPLY; then
    echo "$job_yaml" | kr apply -f - >/dev/null
    kr wait --for=condition=complete "job/$job" -n garden --timeout=180s
  else
    echo "[dry-run] Job $job chowns PVC $pvc to 65532:65532"
  fi
}

adopt() {
  local old="$1" new="$2"
  local pv size sc modes
  pv="$(kr get pvc "$old" -n garden -o jsonpath='{.spec.volumeName}')" || die "PVC garden/$old not found (already adopted?)"
  size="$(kr get pvc "$old" -n garden -o jsonpath='{.spec.resources.requests.storage}')"
  sc="$(kr get pvc "$old" -n garden -o jsonpath='{.spec.storageClassName}')"
  modes="$(kr get pvc "$old" -n garden -o jsonpath='{.spec.accessModes[0]}')"
  echo "== $old -> $new (PV $pv, $size, class $sc)"
  if [[ -n "$(kr get pods -n garden -o json | jq -r --arg c "$old" '.items[] | select(.spec.volumes[]?.persistentVolumeClaim.claimName == $c) | .metadata.name')" ]]; then
    $APPLY && die "a pod still mounts $old, scale the StatefulSet down first"
    echo "[note] a pod still mounts $old (must be scaled down before --apply)"
  fi
  mutate kr patch pv "$pv" -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
  # Safety: never delete the old PVC unless the volume survives it.
  if $APPLY; then [[ "$(kr get pv "$pv" -o jsonpath='{.spec.persistentVolumeReclaimPolicy}')" == Retain ]] || die "PV $pv is not Retain, refusing to delete PVC $old"; fi
  mutate kr delete pvc "$old" -n garden --wait=true
  mutate kr patch pv "$pv" --type=json -p '[{"op":"remove","path":"/spec/claimRef"}]'
  local pvc_yaml
  pvc_yaml="$(cat <<EOF
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: $new
  namespace: garden
spec:
  accessModes: [$modes]
  storageClassName: $sc
  volumeName: $pv
  resources:
    requests:
      storage: $size
EOF
)"
  if $APPLY; then echo "$pvc_yaml" | kr apply -f - ; else echo "[dry-run] create PVC:"; echo "$pvc_yaml"; fi
  fix_ownership "$new"
}

if $ONLY_CHOWN; then
  fix_ownership main-virtual-garden-etcd-virtual-garden-etcd-main-0
  fix_ownership virtual-garden-etcd-events-virtual-garden-etcd-events-0
  exit 0
fi
adopt virtual-garden-etcd-etcd-0                    main-virtual-garden-etcd-virtual-garden-etcd-main-0
adopt virtual-garden-etcd-events-etcd-events-0      virtual-garden-etcd-events-virtual-garden-etcd-events-0
