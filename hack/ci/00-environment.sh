#!/usr/bin/env bash

export PROVIDER=${PROVIDER:=hcloud}

# Kubeconfig file is required to define the correct current namespace
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml

# Lookup user and namespace in config, lookup project label from namespace
export USERNAME=$(kubectl config view --minify -o jsonpath='{..context.user}')
export NAMESPACE=$(kubectl config view --minify -o jsonpath='{..namespace}')
export PROJECT=$(kubectl get ns $NAMESPACE -o jsonpath="{.metadata.labels['project\.gardener\.cloud/name']}")


DESIRED_PRESPAWNED_SHOOTS=2
ACTUAL_PRESPAWNED_SHOOTS=$(kubectl get shoots --selector=23technologies.cloud/free-to-use='true' --no-headers=true | cut -d ' ' -f4 | grep $PROVIDER | wc -l)
NEEDED_PRESPAWNED_SHOOTS=$(( $DESIRED_PRESPAWNED_SHOOTS - ACTUAL_PRESPAWNED_SHOOTS ))
while [ $NEEDED_PRESPAWNED_SHOOTS -gt 0 ]
do
    RAND=$(openssl rand -hex 2)
    export SHOOT="23ke-run-$RAND"
    # Alter shoot template
    yq eval '.metadata.name = env(SHOOT)' hack/ci/misc/shoot-template-$PROVIDER.yaml.tmpl | kubectl apply -f - > /tmp/stdout 2> /tmp/stderr || { echo -e "\rShoot creation unsuccessful ❌"; echo "STDOUT:"; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
    ACTUAL_PRESPAWNED_SHOOTS=$(kubectl get shoots --selector=23technologies.cloud/free-to-use='true' --no-headers=true | cut -d ' ' -f4 | grep $PROVIDER | wc -l)
    NEEDED_PRESPAWNED_SHOOTS=$(( $DESIRED_PRESPAWNED_SHOOTS - ACTUAL_PRESPAWNED_SHOOTS ))
done

# Choose our shoot (free to use and the one with highest progress)
export SHOOT=$(kubectl get shoot --sort-by=.status.lastOperation.progress --no-headers=true --selector=23technologies.cloud/free-to-use='true'| grep "   $PROVIDER   " |cut -d ' ' -f1|tail -n1)

# Mark as in use and by whom
kubectl label shoot $SHOOT 23technologies.cloud/free-to-use=false --overwrite=true
kubectl label shoot $SHOOT 23technologies.cloud/shoot-owner=$USERNAME

export SHOOT_DOMAIN=$(kubectl get shoot $SHOOT -o jsonpath="{.spec.dns.domain}")

echo "The script will now setup your development / testing environment."
echo
echo "shoot-name:   $SHOOT"
echo "Dashboard:    https://dashboard.ingress.$SHOOT_DOMAIN"
echo "Provider:     $PROVIDER"
echo
echo "This line might be handy:"
echo ". hack/ci/handy.sh"

cat << EOF > hack/ci/handy.sh
export KUBECONFIG='hack/ci/secrets/shoot-kubeconfig.yaml:hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml'
export MC_ALIAS=${MC_ALIAS:-shoot}
export SHOOT=$SHOOT
export MINIO_HOSTNAME="minio.ingress.$SHOOT_DOMAIN"
export MINIO_URL="https://$MINIO_HOSTNAME"
export DASHBOARD_CLIENTSECRET=$(openssl rand -hex 20)
export DASHBOARD_SESSIONSECRET=$(openssl rand -hex 20)
export KUBEAPISERVER_BASICAUTHPASSWORD=$(openssl rand -hex 20)
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME
export BUCKET=${BUCKET:-23ke}
export CONFIG_BUCKET=${CONFIG_BUCKET:-config}
export TOKEN_ID=ab$(openssl rand -hex 2)
export TOKEN_SECRET=cd$(openssl rand -hex 7)
export PROVIDER=$PROVIDER
export SHOOT_DOMAIN=$SHOOT_DOMAIN
EOF
