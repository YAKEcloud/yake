#/usr/bin/env bash

source hack/handy.sh

# 23KE Bucket
# Let's Encrypt Staging CA needed.
mkdir -p ~/.mc/certs/CAs/
cp hack/le-staging.pem ~/.mc/certs/CAs/le-staging.pem
echo  -n -e "\r23KE Bucket creating"
(mc ls $MC_ALIAS/$BUCKET > /dev/null 2>&1 ) || mc mb $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo -e "\r23KE Bucket did not exist. error while creating a new one ❌" ; exit 1; }
echo -n "."
mc cp kustomization.yaml $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo -e "\rError while uploading 23KE root-ks Bucket ❌" ; exit 1; }
echo -n "."
mc cp 23ke-base-substitutions.yaml $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo -e "\rError while uploading 23KE-base-substitutions to Bucket ❌" ; exit 1; }
echo -n "."
mc cp --recursive flux/ $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo -e "\rError while uploading 23KE/flux to Bucket ❌" ; exit 1; }
echo -n "."
mc cp --recursive base-install $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo -e "\rError while uploading 23KE/base-install to Bucket ❌" ; exit 1; }
echo -n "."
mc cp --recursive base-config $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo -e "\rError while uploading 23KE/base-config to Bucket ❌" ; exit 1; }
echo -n "."
mc cp --recursive helmcharts $MC_ALIAS/$BUCKET > /dev/null 2>&1 || { echo -e "\rError while uploading 23KE/helmcharts to Bucket ❌" ; exit 1; }
echo -n "."
# we now upload packet versions which use a bucket instead of the GitRepository
for file in $(grep --exclude-dir=hack --exclude-dir=env-template -lr GitRepository . | sed 's/^\.\///'); do
    cat $file | sed s/GitRepository/Bucket/ | mc pipe $MC_ALIAS/$BUCKET/$file > /dev/null 2>&1 || { echo -e "\rError while uploading to 23KE Bucket ❌" ; exit 1; }
done
echo -n "."
echo -e "\r23KE Bucket ready    ✅               "
