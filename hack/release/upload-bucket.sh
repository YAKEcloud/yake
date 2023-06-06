#!/usr/bin/env bash
set -eo pipefail

source hack/tools/install.sh

install_mc

export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME
$MC mb --ignore-existing "$MC_ALIAS/$tag"
tmpDir=$(hack/make-tmp-release-dir.sh Bucket)
$MC cp --recursive $tmpDir/* "$MC_ALIAS/$tag"
