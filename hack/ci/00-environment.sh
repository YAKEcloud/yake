#!/usr/bin/env bash
set -euo pipefail

PROVIDER=${PROVIDER:=hcloud}
ZONE=${ZONE:=hel1}

# Kubeconfig file is required to define the correct current namespace
export KUBECONFIG=hack/ci/secrets/gardener-kubeconfig.yaml

# Lookup user and namespace in config, lookup project label from namespace
USERNAME=$(kubectl config view --minify -o jsonpath='{..context.user}')
#NAMESPACE=$(kubectl config view --minify -o jsonpath='{..namespace}')
#PROJECT=$(kubectl get ns $NAMESPACE -o jsonpath="{.metadata.labels['project\.gardener\.cloud/name']}")


export SHOOTHASH=$(git log -n 1 --pretty=format:%H -- hack/ci/misc/shoot-template-hcloud-fsn1.yaml.tmpl)
DESIRED_PRESPAWNED_SHOOTS=2
set +e
ACTUAL_PRESPAWNED_SHOOTS=$(kubectl get shoots --selector=23technologies.cloud/free-to-use='true',23technologies.cloud/region=$ZONE,23technologies.cloud/shoot.yaml=$SHOOTHASH --no-headers=true | cut -d ' ' -f4 | grep -c $PROVIDER)
set -e
NEEDED_PRESPAWNED_SHOOTS=$(( DESIRED_PRESPAWNED_SHOOTS - ACTUAL_PRESPAWNED_SHOOTS ))
while [ $NEEDED_PRESPAWNED_SHOOTS -gt 0 ]
do
    RANDNAME="23ke-run-$(openssl rand -hex 2)"
    export RANDNAME
    # Alter shoot template
    yq eval '.metadata.name = env(RANDNAME)' hack/ci/misc/shoot-template-$PROVIDER-$ZONE.yaml.tmpl |yq eval '.metadata.labels["23technologies.cloud/shoot.yaml"]=env(SHOOTHASH)' - | kubectl apply -f -
    set +e
    ACTUAL_PRESPAWNED_SHOOTS=$(kubectl get shoots --selector=23technologies.cloud/free-to-use='true',23technologies.cloud/region=$ZONE --no-headers=true | cut -d ' ' -f4 | grep -c $PROVIDER)
    set -e
    NEEDED_PRESPAWNED_SHOOTS=$(( DESIRED_PRESPAWNED_SHOOTS - ACTUAL_PRESPAWNED_SHOOTS ))
done

# Choose our shoot (free to use and the one with highest progress)
SHOOT=$(kubectl get shoot --sort-by=.status.lastOperation.progress --no-headers=true --selector=23technologies.cloud/free-to-use='true',23technologies.cloud/region=$ZONE,23technologies.cloud/shoot.yaml=$SHOOTHASH | grep "   $PROVIDER   " |cut -d ' ' -f1|tail -n1)

# Check if shoot is hibernated and wake-up otherwise
is_hibernated=$(kubectl get shoot $SHOOT -o jsonpath="{.status.hibernated}")
if [ $is_hibernated  == "true" ]; then
		kubectl patch shoot $SHOOT -p '{"spec":{"hibernation":{"enabled": false}}}'
fi

# Mark as in use and by whom
kubectl label shoot "$SHOOT" 23technologies.cloud/free-to-use=false --overwrite=true
kubectl label shoot "$SHOOT" 23technologies.cloud/shoot-owner="$USERNAME"

SHOOT_DOMAIN=$(kubectl get shoot "$SHOOT" -o jsonpath="{.spec.dns.domain}")


# FIXME: maybe do in a single get
echo "Fetching DNS secret from base gardener"
AZURE_BASE_DOMAIN=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_BASE_DOMAIN|base64decode}}')
AZURE_TENANT_ID=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_TENANT_ID}}')
AZURE_SUBSCRIPTION_ID=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_SUBSCRIPTION_ID}}')
AZURE_SECRET_ID=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_SECRET_ID}}')
AZURE_SECRET_VALUE=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret dns-for-ci -o go-template='{{.data.AZURE_SECRET_VALUE}}')

echo "Fetching gh token from base cluster"
GH_TOKEN=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret gh-token-for-ci -o go-template='{{.data.GH_TOKEN|base64decode}}')

echo "Fetching Minio credentials from base cluster"

MINIO_HOSTNAME=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret minio-creds-for-ci -o go-template='{{.data.MINIO_HOSTNAME|base64decode}}')
MINIO_PW=$(kubectl --kubeconfig hack/ci/secrets/gardener-kubeconfig.yaml get secret minio-creds-for-ci -o go-template='{{.data.MINIO_PW|base64decode}}')


echo "The script will now setup your development / testing environment."
echo
echo "shoot-name:   $SHOOT"
echo "Dashboard:    https://dashboard.$SHOOT.$AZURE_BASE_DOMAIN"
echo "Provider:     $PROVIDER"
echo
echo "This line might be handy:"
echo ". hack/ci/handy.sh"

export MC_ALIAS=releasesci
cat << EOF > hack/ci/handy.sh
export KUBECONFIG='hack/ci/secrets/shoot-kubeconfig.yaml:hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml'
export SHOOT=$SHOOT
export PROVIDER=$PROVIDER
export ZONE=$ZONE
export DASHBOARD_CLIENTSECRET=$(openssl rand -hex 20)
export DASHBOARD_SESSIONSECRET=$(openssl rand -hex 20)
export KUBEAPISERVER_BASICAUTHPASSWORD=$(openssl rand -hex 20)
export REMOTE=23KETESTBED
export BUCKET_23KE=$SHOOT-23ke
export CONFIG_BUCKET=$SHOOT-config
export BACKUP_BUCKET=$SHOOT-backup
export TOKEN_ID=ab$(openssl rand -hex 2)
export TOKEN_SECRET=cd$(openssl rand -hex 7)
export PROVIDER=$PROVIDER
export SHOOT_DOMAIN=$SHOOT_DOMAIN
export AZURE_BASE_DOMAIN=$AZURE_BASE_DOMAIN
export AZURE_TENANT_ID=$AZURE_TENANT_ID
export AZURE_SUBSCRIPTION_ID=$AZURE_SUBSCRIPTION_ID
export AZURE_SECRET_ID=$AZURE_SECRET_ID
export AZURE_SECRET_VALUE=$AZURE_SECRET_VALUE
export MC_ALIAS=$MC_ALIAS
export MINIO_HOSTNAME=$MINIO_HOSTNAME
export MINIO_URL=https://$MINIO_HOSTNAME
export MINIO_PW=$MINIO_PW
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME
export GH_TOKEN=$GH_TOKEN
EOF
