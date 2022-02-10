#!/usr/bin/env bash
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

EXT_NAME=$(echo $DEP_NAME | sed 's/\//-/')
echo $EXT_NAME:
echo "  enable: false"
echo "  values:"
echo "    image:"
echo "      # renovate: depName=$DEP_NAME"
echo "      tag: $TAG"
echo "  resources:"

wget -q https://raw.githubusercontent.com/$DEP_NAME/$TAG/example/controller-registration.yaml -O /tmp/controller-registration.yaml || \
wget -q https://raw.githubusercontent.com/$DEP_NAME/$TAG/examples/controller-registration.yaml -O /tmp/controller-registration.yaml || \
wget -q https://github.com/$DEP_NAME/releases/download/$TAG/controller-registration.yaml -O /tmp/controller-registration.yaml

$YQ eval 'select(documentIndex == 1).spec.resources' /tmp/controller-registration.yaml | sed 's/^/    /'
