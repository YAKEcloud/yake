#!/usr/bin/env bash
RAND=$(openssl rand -hex 2)
export MC_ALIAS=${MC_ALIAS:-shoot}
export SHOOT="23ke-run-$RAND"
export MINIO_HOSTNAME="minio.$SHOOT.23t-test.okeanos.dev"
export MINIO_URL="https://$MINIO_HOSTNAME"
export MINIO_PW=$(openssl rand -hex 20)
export DASHBOARD_CLIENTSECRET=$(openssl rand -hex 20)
export DASHBOARD_SESSIONSECRET=$(openssl rand -hex 20)
export KUBEAPISERVER_BASICAUTHPASSWORD=$(openssl rand -hex 20)
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME
export BUCKET=${BUCKET:-23ke}
export CONFIG_BUCKET=${CONFIG_BUCKET:-config}

echo "The script will now setup your development / testing environment."
echo
echo "shoot-name:   $SHOOT"
echo "S3-URL:       $MINIO_URL"
echo "S3-User:      minio"
if [[ $CI == "true" ]]
then
    echo "S3-Password:  <omitted in Github Action run>"
else
    echo "S3-Password:  $MINIO_PW"
fi
echo
echo "This line might be handy:"
echo ". hack/handy.sh"
echo "export KUBECONFIG='hack/shoot-kubeconfig.yaml'" > hack/handy.sh
echo "export MC_ALIAS=$MC_ALIAS" >> hack/handy.sh
echo "export SHOOT=$SHOOT" >> hack/handy.sh
echo "export MINIO_HOSTNAME=$MINIO_HOSTNAME" >> hack/handy.sh
echo "export MINIO_URL=$MINIO_URL" >> hack/handy.sh
echo "export MINIO_PW=$MINIO_PW" >> hack/handy.sh
echo "export DASHBOARD_CLIENTSECRET=$DASHBOARD_CLIENTSECRET" >> hack/handy.sh
echo "export DASHBOARD_SESSIONSECRET=$DASHBOARD_SESSIONSECRET" >> hack/handy.sh
echo "export KUBEAPISERVER_BASICAUTHPASSWORD=$KUBEAPISERVER_BASICAUTHPASSWORD" >> hack/handy.sh
echo "export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME" >> hack/handy.sh
echo "export BUCKET=$BUCKET" >> hack/handy.sh
echo "export CONFIG_BUCKET=$CONFIG_BUCKET" >> hack/handy.sh
echo

export PROGRESS_WIDTH=80
export PROGRESS_NUMBER_OF_STEPS=6
source hack/progress.sh


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
