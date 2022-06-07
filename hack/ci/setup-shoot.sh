#!/usr/bin/env bash
clear
export PROGRESS_WIDTH=90
export PROGRESS_NUMBER_OF_STEPS=9

# Setup Environment
bash hack/ci/00-environment.sh || exit 1
source hack/ci/misc/progress.sh
echo "env (handy.sh) ready ✅ "
progress_step

# Create Shoot
bash hack/ci/01-shoot.sh || exit 1
progress_step

# 23KE Bucket
bash hack/ci/02-23ke-bucket.sh || exit 1
progress_step

# 23KE Config-Bucket
bash hack/ci/03-23ke-config-bucket.sh || exit 1
progress_step

# Install 23KE
bash hack/ci/04-23ke.sh || exit 1
progress_step

# Add hcloud secret
bash hack/ci/05-gardenlet.sh || exit 1
progress_step
