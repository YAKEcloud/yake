#!/usr/bin/env bash
depName=$1
newVersion=$2
if [[ -z "$depName" ]]; then
		exit
fi

echo "Pulling $depName in version $newVersion"
echo ""

helm repo add --force-update gardener-charts https://gardener-community.github.io/gardener-charts
helm repo add --force-update ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo add --force-update vmware-tanzu https://vmware-tanzu.github.io/helm-charts
helm repo add --force-update jetstack https://charts.jetstack.io

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
helm show chart $curHelmRepo/$depName 2> /dev/null
if [ $? -eq 1 ]; then
	 echo "There is no chart for $depName in $curHelmRepo. I will not do anything."
	 exit
fi

rm -rf helmcharts/$depName
helm pull $curHelmRepo/$depName --untar --untardir helmcharts --version $newVersion
