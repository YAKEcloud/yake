#!/usr/bin/env bash

export KUBECONFIG=hack/secrets/gardener-kubeconfig.yaml
DESIRED_PRESPAWNED_SHOOTS=3
LABEL=23technologies.cloud/free-to-use
ACTUAL_PRESPAWNED_SHOOTS=$(kubectl get shoots --namespace garden-23t-test --selector=23technologies.cloud/free-to-use='true' --no-headers=true | wc -l)
NEEDED_PRESPAWNED_SHOOTS=$(( $DESIRED_PRESPAWNED_SHOOTS - ACTUAL_PRESPAWNED_SHOOTS ))
while [ $NEEDED_PRESPAWNED_SHOOTS -gt 0 ]
do
    RAND=$(openssl rand -hex 2)
    export SHOOT="23ke-run-$RAND"
    # Alter shoot template
    yq eval '.metadata.name = env(SHOOT)' hack/shoot-template.yaml.tmpl > hack/shoot-template.yaml

    # Create Shoot
    kubectl apply -f hack/shoot-template.yaml > /tmp/stdout 2> /tmp/stderr || { echo -e "\rShoot creation unsuccessful ❌"; echo "STDOUT:"; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
    ACTUAL_PRESPAWNED_SHOOTS=$(kubectl get shoots --namespace garden-23t-test --selector=23technologies.cloud/free-to-use='true' --no-headers=true | wc -l)
    NEEDED_PRESPAWNED_SHOOTS=$(( $DESIRED_PRESPAWNED_SHOOTS - ACTUAL_PRESPAWNED_SHOOTS ))
done

# remove templated shoot definition
rm hack/shoot-template.yaml

# Choose our shoot (free to use and the one with highest progress)
export SHOOT=$(kubectl get shoot -n garden-23t-test -o custom-columns=NAME:.metadata.name --sort-by=.status.lastOperation.progress --no-headers=true --selector=23technologies.cloud/free-to-use='true'|tail -n 1)

# Mark as in use
kubectl label shoot -n garden-23t-test $SHOOT 23technologies.cloud/free-to-use=false --overwrite=true > /tmp/stdout 2> /tmp/stderr || { echo -e "\rShoot labelling unsuccessful ❌"; echo "STDOUT:"; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }


export MC_ALIAS=${MC_ALIAS:-shoot}
export MINIO_HOSTNAME="minio.$SHOOT.23t-test.okeanos.dev"
export MINIO_URL="https://$MINIO_HOSTNAME"
export MINIO_PW=$(openssl rand -hex 20)
export DASHBOARD_CLIENTSECRET=$(openssl rand -hex 20)
export DASHBOARD_SESSIONSECRET=$(openssl rand -hex 20)
export KUBEAPISERVER_BASICAUTHPASSWORD=$(openssl rand -hex 20)
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME
export BUCKET=${BUCKET:-23ke}
export CONFIG_BUCKET=${CONFIG_BUCKET:-config}

#Only for testing
export TOKEN_ID=$(openssl rand -hex 3)
export TOKEN_ID_SECRET=$(openssl rand -hex 8)

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
echo "export KUBECONFIG='hack/secrets/shoot-kubeconfig.yaml'" > hack/handy.sh
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
echo "export TOKEN_ID=$(openssl rand -hex 3)" >> hack/handy.sh
echo "export TOKEN_ID_SECRET=$(openssl rand -hex 8)" >> hack/handy.sh
echo
