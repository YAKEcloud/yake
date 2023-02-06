#!/usr/bin/env bash
set -e

if [[ $MINIO_PW == "" ]]; then
		echo "You must export the MINIO_PW environment variable. Otherwise, I cannot do anything for you."
		exit
fi

export MC_ALIAS=releases
export MINIO_HOSTNAME="minio.ingress.23ke-releases.23t-prod.okeanos.dev"
export MINIO_URL="https://minio.ingress.23ke-releases.23t-prod.okeanos.dev"
export MC_HOST_$MC_ALIAS=https://minio:$MINIO_PW@$MINIO_HOSTNAME

# Enter the userName of the user to be created here
userName=$1

if [[ $userName == "" ]]; then
		echo "You need to provide a user name. Please open the script and check how you can provide a user name."
		exit
fi

# Check if the user already exists and exit in that case, as we do not want to "update"
# the user's password.
if  mc admin user list $MC_ALIAS --json | grep -q $userName ; then
		echo "The user already exists. I will not create it a second time. Exiting now."
		exit
fi

export userPW=$(echo -n $(uuidgen) | base64)

mc admin user add $MC_ALIAS $userName $userPW

# The v* policy allows the user to access buckets named with v*
# This are by concept the release buckets for enterprise customers
mc admin policy set $MC_ALIAS "v*" user=$userName

yq e -n '.bucket.endpoint = env(MINIO_HOSTNAME), .bucket.accesskey = env(userName), .bucket.secretkey = env(userPW)'
