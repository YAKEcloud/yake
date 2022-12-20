#!/usr/bin/env bash

set -eo pipefail

minorPattern='^[0-9]{1,}[.][0-9]{1,}'
versionPattern='^[0-9]{1,}[.][0-9]{1,}[.][0-9]{1,}-[0-9]{1,}$'

version=$1

if [[ ! -d .git ]]; then
  echo "script must be run from the repository root"
  exit 1
fi

if [[ ! $version =~ $versionPattern ]]; then
  echo "usage: $0 1.2.3-4"
  exit 1
fi

minor=$(echo "$version" | grep -nE "$minorPattern")
echo "Updating chart versions to $0"
for chart in $(find . -name Chart.yaml); do
  echo $chart
  sed -i -r -e "s;^version:.+$;version: $version;" "$chart"
done
echo "Done"