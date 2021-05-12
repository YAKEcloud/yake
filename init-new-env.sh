#!/bin/bash

# meant to be called when inside 23ke-config-repo/environment/ folder
# create/copy/replace config-templates
unset KUBECONFIG
ENV=dev

# FIXME: make idempotent
flux install --version=0.13.2 --export > flux/gotk-components.yaml

# FIXME: use tmp gpg keystore
# generate gpg for sops
if gpg --export-secret-keys --armor "${ENV}-GPG" 2>&1 | grep -q "WARNING: nothing exported"; then
  echo "Creating new GPG key"
  gpg --batch --full-generate-key <<EOF
%no-protection
Key-Type: 1
Key-Length: 4096
Subkey-Type: 1
Subkey-Length: 4096
Expire-Date: 0
Name-Comment: ${ENV}-GPG
Name-Real: ${ENV}-GPG
EOF
fi

gpg --export-secret-keys --armor "${ENV}-GPG" | kubectl create secret generic sops-gpg --namespace=flux-system --from-file=sops.asc=/dev/stdin --dry-run=client -o yaml > sops-gpg-secret.yaml
