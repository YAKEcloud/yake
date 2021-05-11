#!/bin/bash
VERSION=$1
FOLDER=$2

if [ "$#" -ne  "2" ]; then
     echo "Usage: import-charts.sh <version> <target-folder>"
     echo "Example: import-charts.sh 1.15.7 helmcharts"
     exit 1
elif [[ "$VERSION" =~ ^v.* ]]; then
     echo "<version> can not start with a \"v\"..., use f.e. 1.15.7"
     exit 1
elif [ ! -d $FOLDER ]; then
      echo "<target-folder> needs to exist"
      exit 1
fi

REPO=$(mktemp -d)

# copy charts from repo while undoing symlinks
git clone --branch "v${VERSION}" --depth 1 https://github.com/gardener/gardener.git $REPO/gardener
git clone --depth 1 https://github.com/gardener/garden-setup $REPO/garden-setup

rsync -vLr --delete $REPO/gardener/charts/gardener/ $FOLDER/gardener/
rsync -vLr --delete $REPO/gardener/charts/gardener/controlplane/ $FOLDER/gardener-controlplane/
rsync -vLr --delete $REPO/gardener/charts/gardener/gardenlet/ $FOLDER/gardenlet/
rsync -vLr --delete $REPO/garden-setup/components/etcd/cluster/chart/ $FOLDER/garden-etcd/

# modify unmaintained Chart.yaml version to allow flux to detect upgrades
find $FOLDER -name Chart.yaml -type f -exec sed -i "s/version: 0.1.0/version: $VERSION/g" {} +

rm -fr $REPO
