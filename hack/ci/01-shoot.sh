#/usr/bin/env bash

source hack/handy.sh
export KUBECONFIG=hack/secrets/gardener-kubeconfig.yaml
# Wait for shoot to become available
echo -n "Creating shoot: 0%"
OLD_PERCENTAGE=0
while [ ! "$(kubectl get shoot $SHOOT -n garden-23t-test -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]
do
    sleep 5
    PERCENTAGE=$(kubectl get shoot -n garden-23t-test $SHOOT -o jsonpath="{.status.lastOperation.progress}")
    if [ $OLD_PERCENTAGE -le $PERCENTAGE ]
    then
        echo -n -e "\rCreating shoot: $PERCENTAGE%"
        OLD_PERCENTAGE=$PERCENTAGE
    fi
	sleep 1
done
# Get shoot kubeconfig
kubectl get secret -n garden-23t-test $SHOOT.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' > hack/secrets/shoot-kubeconfig.yaml 2> /tmp/stderr || { echo -e "\rshoot creation unsuccessful            ❌               "; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -e "\rshoot ready          ✅               "
