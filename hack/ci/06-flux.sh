#/usr/bin/env bash
source hack/handy.sh
# Install flux
echo -n "Installing Flux"
flux install > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while installing Flux ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."

if ! kubectl -n flux-system get secret target-gardencluster-kubeconfig > /tmp/stdout 2> /tmp/stderr
then
	kubectl -n flux-system create secret generic target-gardencluster-kubeconfig --from-literal=value="$(cat $KUBECONFIG)" > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating target-gardencluster-kubeconfig secret ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
fi
echo -n "."

# Templating 23ke-env-substitutions.yaml
yq eval '.stringData.BASE_DOMAIN = env(SHOOT) + ".23t-test.okeanos.dev"' env-template/config/23ke-env-substitutions.yaml > hack/23ke-env-substitutions.yaml
yq eval '.stringData.DASHBOARD_CLIENTSECRET = env(DASHBOARD_CLIENTSECRET)' -i hack/23ke-env-substitutions.yaml
yq eval '.stringData.DASHBOARD_SESSIONSECRET = env(DASHBOARD_SESSIONSECRET)' -i hack/23ke-env-substitutions.yaml
yq eval '.stringData.KUBEAPISERVER_BASICAUTHPASSWORD = env(KUBEAPISERVER_BASICAUTHPASSWORD)' -i hack/23ke-env-substitutions.yaml
kubectl apply -f hack/23ke-env-substitutions.yaml > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while applying 23ke-env-substitutions secret ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
rm hack/23ke-env-substitutions.yaml
# We are using letsencrypt staging for testing purposes
if ! kubectl -n flux-system get configmap le-staging > /tmp/stdout 2> /tmp/stderr
then
	kubectl create configmap le-staging -n flux-system --from-file=le-staging.pem=hack/le-staging.pem > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating le-staging.pem configmap ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
fi
echo -n "."

kubectl patch -n flux-system deployment source-controller --patch-file hack/flux-source-controller.patch > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while adding le-staging cert to source-controller deployment. ❌" ; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
if ! kubectl -n flux-system get secret minio-local > /tmp/stdout 2> /tmp/stderr
then
	kubectl create secret generic -n flux-system minio-local --from-literal=accesskey=minio --from-literal=secretkey=$MINIO_PW > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while Creating secret. ❌" ; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
fi
echo -n "."
/tmp/flux create source bucket $BUCKET --endpoint=$MINIO_HOSTNAME --bucket-name=$BUCKET --secret-ref=minio-local > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating flux 23ke bucket source ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
/tmp/flux create source bucket 23ke-config --endpoint=$MINIO_HOSTNAME --bucket-name=config --secret-ref=minio-local > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while creating flux 23ke-config bucket source ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
kubectl apply -f hack/kustomizations > /tmp/stdout 2> /tmp/stderr || { echo -e "\rError while applying flux-kustomizations  ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -n "."
echo -e "\rFlux installed       ✅                  "
