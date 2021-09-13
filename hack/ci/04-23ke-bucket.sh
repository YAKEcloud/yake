#/usr/bin/env bash

source hack/handy.sh

# 23KE Bucket
# Let's Encrypt Staging CA needed.
mkdir -p ~/.mc/certs/CAs/
cp hack/le-staging.pem ~/.mc/certs/CAs/le-staging.pem
echo  -n -e "\r23KE Bucket creating"
(mc ls $MC_ALIAS/$BUCKET > /dev/null 2>&1 ) || mc mb $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo "23KE Bucket did not exist. error while creating a new one ❌" ; exit 1; }
echo -n "."
# TODO: Upload only the necessary parts of the repository
mc cp --recursive . $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo "Error while uploading 23KE to Bucket ❌" ; exit 1; }
echo -n "."
# we now upload packet versions which use a bucket instead of the GitRepository
for file in $(grep --exclude-dir=hack --exclude-dir=env-template -lr GitRepository . | sed 's/^\.\///'); do
    cat $file | sed s/GitRepository/Bucket/ | mc pipe $MC_ALIAS/$BUCKET/$file > /dev/null 2>&1 || { echo "Error while uploading to 23KE Bucket ❌" ; exit 1; }
done
echo -n "."
# Deleting additional cert-manager installation, we already deployed one for minio
mc rm $MC_ALIAS/$BUCKET/base-addons/cert-manager.yaml > /dev/null 2>&1 || { echo "Error while deleting cert-manager helmrelease ❌" ; exit 1; }
echo -n "."
# Deleting additional nginx-ingress installation, we already deployed one for minio
mc rm $MC_ALIAS/$BUCKET/base-addons/nginx-ingress.yaml > /dev/null 2>&1 || { echo "Error while deleting nginx-ingress helmrelease ❌" ; exit 1; }
echo -n "."
echo  -e "\r23KE Bucket ready ✅       "
