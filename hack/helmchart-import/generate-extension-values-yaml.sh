#!/usr/bin/env bash

# This script is just a helper to create a starting point for
# 23ke/helmcharts/extesions/values.yaml
#
# Generally, 23ke/helmcharts/extesions/values.yaml is defined by us,
# and after running this script you might want to modify it.
# It should definitely contain renovate comments, so that rennovate can
# inform us, when there is a new release for an extension.
#
# Example usage:
# Write an initial values.yaml including some extensions:
#
#     DEP_NAMES="gardener/external-dns-management
#     gardener/gardener-extension-networking-calico
#     gardener/gardener-extension-networking-cilium
#     gardener/gardener-extension-os-gardenlinux
#     gardener/gardener-extension-os-ubuntu
#     gardener/gardener-extension-provider-alicloud
#     gardener/gardener-extension-provider-aws
#     gardener/gardener-extension-provider-azure
#     gardener/gardener-extension-provider-gcp
#     23technologies/gardener-extension-provider-hcloud
#     gardener/gardener-extension-provider-openstack
#     gardener/gardener-extension-shoot-cert-service
#     gardener/gardener-extension-shoot-dns-service"
#
#     for dep in $DEP_NAMES ; do ./generate-values-yaml.sh $dep ; echo ""; done > values.yaml

if [[ $1 == "" ]]
then
   echo "usage: ./generate-values-yaml.sh <extension_name> [tag]"
   echo	"example: ./generate-values-yaml.sh gardener/external-dns-management"
   echo	"example: ./generate-values-yaml.sh gardener/external-dns-management v1.1.1"
   exit
fi
DEP_NAME=$1

# in case jq and yq are not installed
JQ=/tmp/jq
if ! [ -x $JQ ]
then
    wget -q https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 -O /tmp/jq
    chmod +x $JQ
fi

YQ=/tmp/yq
if ! [ -x $YQ ]
then
   wget -q https://github.com/mikefarah/yq/releases/download/v4.19.1/yq_linux_amd64 -O /tmp/yq
   chmod +x $YQ
fi

# define the latest release url for the current dependency
if [[ $2 == "" ]]
then
    URL="https://api.github.com/repos/$DEP_NAME/releases/latest"
    TAG=$(wget -q $URL -O - | $JQ -r '.tag_name' )
else
    TAG=$2
fi

# the extension name is the same as the dependency name but with a - instead of a /
EXT_NAME=$(echo $DEP_NAME | sed 's/\//-/')

# print the scaffold of our target yaml-file
echo $EXT_NAME:
echo "  enable: false"
echo "  values:"
echo "    image:"
echo "      # renovate: depName=$DEP_NAME"
echo "      tag: $TAG"
echo "  resources:"

# fetch the controller-registration.yaml of the current extension from upstream
wget -q https://raw.githubusercontent.com/$DEP_NAME/$TAG/example/controller-registration.yaml -O /tmp/controller-registration.yaml || \
wget -q https://raw.githubusercontent.com/$DEP_NAME/$TAG/examples/controller-registration.yaml -O /tmp/controller-registration.yaml || \
wget -q https://github.com/$DEP_NAME/releases/download/$TAG/controller-registration.yaml -O /tmp/controller-registration.yaml

# print the .spec.resources and indent it with sed, so that it appears on the right level of our target yaml-file
$YQ eval 'select(documentIndex == 1).spec.resources' /tmp/controller-registration.yaml | sed 's/^/    /'
