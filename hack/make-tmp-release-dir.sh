#!/usr/bin/env bash

# create a temporary directory containing all conents needed for
# a release. The argument to this script defines the sourceType.
# Possbile options are:
# - GitRepository
# - Bucket
# - OCIRepository

sourceType=$1

tmpDir=$(mktemp -d)

cp -r kustomization.yaml $tmpDir
cp -r flux $tmpDir
cp -r pre-gardener $tmpDir
cp -r flux-system $tmpDir
cp -r gardener $tmpDir
cp -r helmcharts $tmpDir

cwd=$(pwd)
cd $tmpDir

# we now upload packet versions which use a bucket instead of the GitRepository
for file in $(grep -lr GitRepository pre-gardener gardener flux | sed 's/^\.\///'); do
		sed -i s/GitRepository/$sourceType/ $file
done

for file in $(grep  --exclude=configuration.yaml \
										--exclude=extensions.yaml \
										--exclude=garden-content.yaml \
										--exclude=addons.yaml \
										--exclude=dnsprovider.yaml \
										--exclude=issuer.yaml \
										-lr "kind: HelmRelease" pre-gardener gardener)
do
		# prepend helmcharts/ to chart:
		sed -i -E "s/(chart: )(.+)/\1helmcharts\/\2/" $file
		# delete the 3 consecutive lines of sourceRef
		sed -i -E "/sourceRef:/{n;N;N;d}" $file
		# add new sourceRef as GitRepository
		sed -i -E  "s/      sourceRef:/      sourceRef:\n        kind: $sourceType\n        name: 23ke/" $file
done

cd $cwd
echo $tmpDir
