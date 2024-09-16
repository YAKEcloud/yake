#!/usr/bin/env bash
set -eo pipefail

source hack/tools/install.sh

install_flux

tmpDir=$(hack/release/make-tmp-release-dir.sh OCIRepository)
$FLUX push artifact oci://ghcr.io/yakecloud/yake:$tag \
  --source https://github.com/yakecloud/yake --revision $tag --path="$tmpDir"
