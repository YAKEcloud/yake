#/usr/bin/env bash

source hack/handy.sh
wget -q https://github.com/fluxcd/flux2/releases/download/v0.17.1/flux_0.17.1_linux_amd64.tar.gz
tar xfvz flux_0.17.1_linux_amd64.tar.gz --directory /tmp > /dev/null
# Install flux
echo -n "Installing Flux"
flux install > /dev/null 2>&1 || { echo -e "\rError while installing Flux ❌" ; exit 1; }
echo -n "."

if ! kubectl -n flux-system get secret target-gardencluster-kubeconfig > /dev/null 2>&1
then
	kubectl -n flux-system create secret generic target-gardencluster-kubeconfig --from-literal=value="$(cat $KUBECONFIG)" > /dev/null 2>&1 || { echo -e "\rError while creating target-gardencluster-kubeconfig secret ❌" ; exit 1; }
fi
echo -n "."

# Templating 23ke-env-substitutions.yaml
yq eval '.stringData.BASE_DOMAIN = env(SHOOT) + ".23t-test.okeanos.dev"' 23ke-env-substitutions.yaml.tmpl > 23ke-env-substitutions.yaml
yq eval '.stringData.DASHBOARD_CLIENTSECRET = env(DASHBOARD_CLIENTSECRET)' -i 23ke-env-substitutions.yaml
yq eval '.stringData.DASHBOARD_SESSIONSECRET = env(DASHBOARD_SESSIONSECRET)' -i 23ke-env-substitutions.yaml
yq eval '.stringData.KUBEAPISERVER_BASICAUTHPASSWORD = env(KUBEAPISERVER_BASICAUTHPASSWORD)' -i 23ke-env-substitutions.yaml
kubectl apply -f 23ke-env-substitutions.yaml > /dev/null || { echo -e "\rError while applying 23ke-env-substitutions secret ❌"; exit 1; }
rm 23ke-env-substitutions.yaml
# We are using letsencrypt staging for testing purposes
if ! kubectl -n flux-system get configmap le-staging > /dev/null 2>&1
then
	kubectl create configmap le-staging -n flux-system --from-file=le-staging.pem=hack/le-staging.pem > /dev/null 2>&1 || { echo -e "\rError while creating le-staging.pem configmap ❌" ; exit 1; }
fi
echo -n "."

kubectl patch -n flux-system deployment source-controller --patch-file hack/flux-source-controller.patch > /dev/null 2>&1 || { echo -e "\rError while adding le-staging cert to source-controller deployment. ❌" ; exit 1; }
echo -n "."
if ! kubectl -n flux-system get secret minio-local > /dev/null 2>&1
then
	kubectl create secret generic -n flux-system minio-local --from-literal=accesskey=minio --from-literal=secretkey=$MINIO_PW > /dev/null 2>&1 || { echo -e "\rError while Creating secret. ❌" ; exit 1; }
fi
echo -n "."
/tmp/flux create source bucket $BUCKET --endpoint=$MINIO_HOSTNAME --bucket-name=$BUCKET --secret-ref=minio-local > /dev/null 2>&1 || { echo -e "\rError while creating flux 23ke bucket source ❌" ; exit 1; }
echo -n "."
/tmp/flux create source bucket 23ke-config --endpoint=$MINIO_HOSTNAME --bucket-name=config --secret-ref=minio-local > /dev/null 2>&1 || { echo -e "\rError while creating flux 23ke-config bucket source ❌" ; exit 1; }
echo -n "."
kubectl apply -f hack/kustomizations > /dev/null || { echo -e "\rError while applying flux-kustomizations  ❌"; exit 1; }
echo -n "."
echo -e "\rFlux installed       ✅                  "
