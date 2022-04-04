#!/usr/bin/env bash

# First, find out which file has been changed:

CHANGED_FILE=$(git status -s)

if echo "$CHANGED_FILE" | grep "base-install/gardenlet.yaml"
then
    # looks like gardener-core has been updated, import charts:
    echo 'export GARDENER_VERSION=v$(yq eval ".spec.chart.spec.version" base-install/gardenlet.yaml)' > /tmp/tmpscript
    echo 'yq eval ".data.GARDENER_VERSION=env(GARDENER_VERSION)" -i 23ke-base-substitutions.yaml' >> /tmp/tmpscript
    echo "chmod -R 777 /tmp/renovate/repos/github/23technologies/23ke" >> /tmp/tmpscript
    mv /tmp/tmpscript /tmp/scripts/renovate-post-upgrade-script
fi
until test ! -f /tmp/scripts/renovate-post-upgrade-script
do
    echo "Changing gardener version..."
    sleep 1
done
exit 0

