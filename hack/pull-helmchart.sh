#!/usr/bin/env bash
set -eu

depName=$1
newVersion=$2
if [[ -z "$depName" ]]; then
		exit
fi

echo "Pulling $depName in version $newVersion"
echo ""

$HELM repo add --force-update gardener-charts https://gardener-community.github.io/gardener-charts
$HELM repo add --force-update ingress-nginx https://kubernetes.github.io/ingress-nginx
$HELM repo add --force-update vmware-tanzu https://vmware-tanzu.github.io/helm-charts
$HELM repo add --force-update jetstack https://charts.jetstack.io

case $depName in
		ingress-nginx)
				curHelmRepo=ingress-nginx
				;;
		cert-manager)
				curHelmRepo=jetstack
				;;
		velero)
				curHelmRepo=vmware-tanzu
				;;
		*)
				curHelmRepo=gardener-charts
				;;
esac

# return if the current dep is not in the helmrepo
$HELM show chart $curHelmRepo/$depName 2> /dev/null
if [ $? -eq 1 ]; then
	 echo "There is no chart for $depName in $curHelmRepo. I will not do anything."
	 exit
fi

# keep the templates/tests folder as it's not from upstream but part of 23ke.
mkdir -p "helmcharts/$depName"
find "helmcharts/$depName" \
  -not \( -path "helmcharts/$depName/templates/tests" -prune \) \
  -not \( -path "helmcharts/$depName/*/templates/tests" -prune \) \
  -type f \
  -exec rm -f {} \;

# helm won't untar into a non-empty folder, so untar to /tmp and rsync to existing chart-folder
tmpDir=$(mktemp -d)
$HELM pull "$curHelmRepo/$depName" --untar --untardir "$tmpDir" --version "$newVersion"
cp -rn "$tmpDir/$depName" "helmcharts/"
rm -rf "$tmpDir"


if [[ $curHelmRepo == gardener-charts ]]; then
	 echo ""  >> docs/release-notes/next.md
	 echo "<details>"  >> docs/release-notes/next.md
	 echo "<summary><b>Update $depName to <code>$newVersion</code></b></summary>" >> docs/release-notes/next.md
	 echo ""  >> docs/release-notes/next.md
	 cat helmcharts/$depName/RELEASE.md  >> docs/release-notes/next.md
	 echo ""  >> docs/release-notes/next.md
	 echo ""  >> docs/release-notes/next.md
	 echo "</details>"  >> docs/release-notes/next.md
fi

