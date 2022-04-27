#!/usr/bin/env bash

export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml
DESIRED_PRESPAWNED_SHOOTS=2
LABEL=23technologies.cloud/free-to-use
ACTUAL_PRESPAWNED_SHOOTS=$(kubectl get shoots --namespace garden-23t-test --selector=23technologies.cloud/free-to-use='true' --no-headers=true | wc -l)
NEEDED_PRESPAWNED_SHOOTS=$(( $DESIRED_PRESPAWNED_SHOOTS - ACTUAL_PRESPAWNED_SHOOTS ))
while [ $NEEDED_PRESPAWNED_SHOOTS -gt 0 ]
do
    RAND=$(openssl rand -hex 2)
    export SHOOT="23ke-run-$RAND"
    # Alter shoot template
    yq eval '.metadata.name = env(SHOOT)' hack/ci/misc/shoot-template.yaml.tmpl | kubectl apply -f - > /tmp/stdout 2> /tmp/stderr || { echo -e "\rShoot creation unsuccessful ❌"; echo "STDOUT:"; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
    ACTUAL_PRESPAWNED_SHOOTS=$(kubectl get shoots --namespace garden-23t-test --selector=23technologies.cloud/free-to-use='true' --no-headers=true | wc -l)
    NEEDED_PRESPAWNED_SHOOTS=$(( $DESIRED_PRESPAWNED_SHOOTS - ACTUAL_PRESPAWNED_SHOOTS ))
done

# Choose our shoot (free to use and the one with highest progress)
export SHOOT=$(kubectl get shoot -n garden-23t-test -o custom-columns=NAME:.metadata.name --sort-by=.status.lastOperation.progress --no-headers=true --selector=23technologies.cloud/free-to-use='true'|tail -n 1)

# Mark as in use
kubectl label shoot -n garden-23t-test $SHOOT 23technologies.cloud/free-to-use=false --overwrite=true > /tmp/stdout 2> /tmp/stderr || { echo -e "\rShoot labelling unsuccessful ❌"; echo "STDOUT:"; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }


export MC_ALIAS=${MC_ALIAS:-shoot}
export MINIO_HOSTNAME="minio.ingress.$SHOOT.23t-test.okeanos.dev"
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
echo "Dashboard:    https://dashboard.ingress.$SHOOT.23t-test.okeanos.dev"
echo
echo "This line might be handy:"
echo ". hack/ci/handy.sh"

cat << EOF > hack/ci/handy.sh
export KUBECONFIG='hack/ci/secrets/shoot-kubeconfig.yaml:hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml'
export MC_ALIAS=$MC_ALIAS
export SHOOT=$SHOOT
export MINIO_HOSTNAME=$MINIO_HOSTNAME
export MINIO_URL=$MINIO_URL
export MINIO_PW=$MINIO_PW
export DASHBOARD_CLIENTSECRET=$DASHBOARD_CLIENTSECRET
export DASHBOARD_SESSIONSECRET=$DASHBOARD_SESSIONSECRET
export KUBEAPISERVER_BASICAUTHPASSWORD=$KUBEAPISERVER_BASICAUTHPASSWORD
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME
export BUCKET=$BUCKET
export CONFIG_BUCKET=$CONFIG_BUCKET
export TOKEN_ID=$(openssl rand -hex 3)
export TOKEN_ID_SECRET=$(openssl rand -hex 8)
EOF
