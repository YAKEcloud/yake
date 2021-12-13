#!/bin/bash
FOLDER=$1

GARDENER_VERSION="1.33.3"
GARDEN_SETUP_VERSION="3.18.0"
DASHBOARD_VERSION="1.52.2"

if [ "$#" -ne  "1" ]; then
     echo "Usage: import-charts.sh <target-folder>"
     echo "Example: ./import-charts.sh ../../helmcharts"
     exit 1
elif [ ! -d $FOLDER ]; then
      echo "<target-folder> needs to exist"
      exit 1
fi

REPO=$(mktemp -d)

# copy charts from repo while undoing symlinks
git clone --depth 1 --branch "v${GARDENER_VERSION}" --depth 1 https://github.com/gardener/gardener.git $REPO/gardener
git clone --depth 1 --branch "$GARDEN_SETUP_VERSION" https://github.com/gardener/garden-setup $REPO/garden-setup
git clone --depth 1 --branch "$DASHBOARD_VERSION" https://github.com/gardener/dashboard.git $REPO/gardener-dashboard

rsync -vLr --delete $REPO/gardener/charts/gardener/controlplane/ $FOLDER/gardener-controlplane/
rsync -vLr --delete $REPO/gardener/charts/gardener/gardenlet/ $FOLDER/gardenlet/
rsync -vLr --delete $REPO/garden-setup/components/etcd/cluster/chart/ $FOLDER/garden-etcd/
# FIXME this chart was modified after importing
rsync -vLr --delete $REPO/garden-setup/components/kube-apiserver/chart/ $FOLDER/kube-apiserver/
sed -i '/\ \ \ \ kubernetes.io\/ingress.class:\ \"nginx\"/a{{- with\ .Values.ingress.annotations\ }}\n{{ toYaml . | indent 4 }}\n{{- end }}' $FOLDER/kube-apiserver/templates/service-kube-apiserver-ingress.yaml 
cp secret-kubeconfig-for-gardener.yaml $FOLDER/kube-apiserver/templates/
cat append-kube-apiserver-helpers.tpl >> $FOLDER/kube-apiserver/templates/_helpers.tpl 
rsync -vLr --delete $REPO/gardener-dashboard/charts/gardener-dashboard/ $FOLDER/gardener-dashboard/
rsync -vLr --delete $REPO/gardener-dashboard/charts/identity/ $FOLDER/identity/

# modify unmaintained Chart.yaml version to allow flux to detect upgrades
find $FOLDER -name Chart.yaml -type f -exec sed -i "s/version: 0.1.0/version: $GARDENER_VERSION/g" {} +

rm -fr $REPO


