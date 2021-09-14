#!/usr/bin/env bash

export PROGRESS_WIDTH=80
export PROGRESS_NUMBER_OF_STEPS=7
source hack/progress.sh

# Setup Environment
bash hack/ci/00-environment.sh || exit 1
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
progress_end
