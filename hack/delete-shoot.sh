#!/usr/bin/env bash
export SHOOT=$(yq eval '.clusters[0].name' hack/shoot-kubeconfig.yaml|sed 's/shoot--23t-test--//')
export KUBECONFIG=.github/gardener-kubeconfig.yaml
# Annotate Shoot for deletion
kubectl annotate shoot -n garden-23t-test $SHOOT confirmation.gardener.cloud/deletion=true > /dev/null 2>&1
# Delete shoot
kubectl delete shoot -n garden-23t-test $SHOOT --wait=false > /dev/null || (echo -e "Shoot deletion unsuccessful❌\nexiting..."; exit 1)
echo -n "Deleting shoot..."
OLD_PERCENTAGE=0
while kubectl get shoot $SHOOT -n garden-23t-test > /dev/null 2>&1
do
    PERCENTAGE=$(kubectl get shoot -n garden-23t-test $SHOOT -o jsonpath="{.status.lastOperation.progress}" 2> /dev/null)
    if [ $OLD_PERCENTAGE -lt $PERCENTAGE ]
    then
        echo -n -e "\rDeleting shoot: $PERCENTAGE%"
        OLD_PERCENTAGE=$PERCENTAGE
    fi
	sleep 1
done
echo  -e "\rshoot deleted 🗑       "
