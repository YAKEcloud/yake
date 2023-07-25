#!/usr/bin/env bash
set -eo pipefail

source hack/tools/install.sh

install_flux

tmpDir=$(hack/release/make-tmp-release-dir.sh OCIRepository)
$FLUX push artifact --creds $creds --source https://23ke.cloud --revision $tag --path="$tmpDir" oci://registry.regio.digital/23ke-releases/23ke:$tag
