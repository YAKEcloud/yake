#!/usr/bin/env bash
set -euo pipefail

source hack/ci/util.sh
source hack/ci/handy.sh

PROVIDER=${PROVIDER:=hcloud}
ZONE=${ZONE:=hel1}

echo "Check whether we rolled out any image with tag latest"
images=$(kubectl get pods --all-namespaces -o go-template --template="{{range .items}}{{range .spec.containers}}{{.image}} {{end}}{{end}}")
for image in $images; do
		if echo $image | grep latest ; then
			 echo "found latest tag in image $image"
			 exit 1
		fi
done

echo "Testing Backup storage"
# Test if velero backuplocation and etcdbackup location work
# velero
kubectl wait backupstoragelocations.velero.io -n flux-system default --for=jsonpath='{.status.phase}'=Available || exit 1
# etcd br
# The bucket should have been created by the time the seed reports itself as ready
kubectl wait seed.core.gardener.cloud --all --for=condition=BackupBucketsReady --timeout=600s --context garden || exit 1
FIRSTBUCKET=$(kubectl get backupbuckets.extensions.gardener.cloud -o name | head -n1)
kubectl wait $FIRSTBUCKET --for=jsonpath='{.status.lastOperation.state}'=Succeeded || exit 1

echo "Deploying sample Shoot"
export SHOOTNAME="test-${SHOOT#23ke-run-}"

echo "Deploying test Shoot"
yq eval '.metadata.name = env(SHOOTNAME)' hack/ci/misc/shoot-microservice-"$PROVIDER"-"$ZONE".yaml | kubectl --context garden apply -f -

# Wait for shoot to become available
echo "Waiting for shoot $SHOOTNAME creation..."

while [ ! "$(kubectl --context garden get shoot "$SHOOTNAME" -n garden-testing -o jsonpath="{.status.lastOperation.state}")" == "Succeeded" ]; do
  PERCENTAGE=$(kubectl --context garden get shoot "$SHOOTNAME" -n garden-testing -o jsonpath="{.status.lastOperation.progress}")
  echo "Creating shoot: $PERCENTAGE%"
	sleep 5
done
echo "Shoot creation succeeded"

kubectl get secret -n garden-testing "$SHOOTNAME".kubeconfig -o go-template='{{.data.kubeconfig|base64decode}}' --context garden > hack/ci/secrets/shoot-microservice-kubeconfig.yaml

echo "Deploying microservice demo"
kubectl apply -n default -f hack/ci/misc/microservices-demo.yaml --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml
echo "Waiting for microservice demo"
sleep 5
kubectl wait --for=condition=available --timeout=600s -n default deployment/loadgenerator --kubeconfig hack/ci/secrets/shoot-microservice-kubeconfig.yaml \
  || { kubectl --context garden get shoot "$SHOOTNAME" -n garden-testing -o yaml; exit 1; }

echo -e "Demo-Deployment ready ✅"
