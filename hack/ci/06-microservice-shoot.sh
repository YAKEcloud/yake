#/usr/bin/env bash

source hack/ci/handy.sh

echo -e -n "\rDeploying sample Shoot"

kubectl apply -f hack/ci/misc/shoot-microservice-$PROVIDER.yaml --context garden > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while applying testing shoot ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }

echo -n "."

echo -n -e "\rCreating shoot: 0%        "
OLD_PERCENTAGE=0
while [ ! "$(kubectl get shoot microservice -n garden-testing -o jsonpath="{.status.lastOperation.state}" --context garden)" == "Succeeded" ]
do
    sleep 5
    PERCENTAGE=$(kubectl get shoot -n garden-testing microservice -o jsonpath="{.status.lastOperation.progress}" --context garden)
    if [ -z $PERCENTAGE ]; then PERCENTAGE=0; fi
    if [ $OLD_PERCENTAGE -le $PERCENTAGE ]
    then
        echo -n -e "\rCreating shoot: $PERCENTAGE%         "
        OLD_PERCENTAGE=$PERCENTAGE
    fi
	sleep 1
done

kubectl get secret -n garden-testing microservice.kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' --context garden > hack/ci/secrets/shoot-microservice-kubeconfig.yaml 
echo -n -e "\rDeploying sample shoot: .           "

kubectl apply -n default -f hack/ci/misc/microservices-demo.yaml --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml > /tmp/stdout 2> /tmp/stderr || { echo -e "\rUnsuccessful microservice deployment            ❌               "; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -e -n "\rWaiting for microservice demo:         "
sleep 5
kubectl wait --for=condition=available --timeout=600s -n default deployment/loadgenerator --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml > /tmp/stdout 2> /tmp/stderr || { echo -e "\rUnsuccessful microservice deployment            ❌               "; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }


echo -e "\rDemo-Deployment ready✅                "
