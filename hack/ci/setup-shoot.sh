#!/usr/bin/env bash
clear
export PROGRESS_WIDTH=80
export PROGRESS_NUMBER_OF_STEPS=8

# Setup Environment
bash hack/ci/00-environment.sh || exit 1
source hack/ci/misc/progress.sh
echo "env (handy.sh) ready ✅ "
progress_step

# Create Shoot
bash hack/ci/01-shoot.sh || exit 1
progress_step

# Deploy Letsencrypt
bash hack/ci/02-letsencrypt.sh || exit 1
progress_step

# Install minio
bash hack/ci/03-minio.sh || exit 1
progress_step

# 23KE Bucket
bash hack/ci/04-23ke-bucket.sh || exit 1
progress_step

# 23KE Config-Bucket
bash hack/ci/05-config-bucket.sh || exit 1
progress_step

# Install flux
bash hack/ci/06-flux.sh || exit 1
progress_step

# Install 23KE
bash hack/ci/07-23ke.sh || exit 1
progress_step
