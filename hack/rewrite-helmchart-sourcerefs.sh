#!/usr/bin/env bash

sourceType=$1

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
