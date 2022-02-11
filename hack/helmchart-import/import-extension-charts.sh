#!/usr/bin/env bash

# This scripts allows to import the extensions'
# controller-registration.yaml hosted in various repositories on github
#
# The basic idea of the script is the following:
# - parse the file 23ke/helmcharts/extensions/values.yaml and search for renovate comments,
#   which hold the dependency (i.e. the extension) name followed by a version of the corresponding dependency
# - download the controller-registration.yaml for the corresponding extension from github
# - split it into two separate files (deployment.yaml and registration.yaml) for easy processing
# - fill these two files with the templating needed for helm
# - merge both files and copy the result to 23ke/helmcharts/extensions/templates/
#
# if a new version of an extension is released, renovate will inform us and we can decide to pull in the latest version of the corresponding helmchart using this script.


YQ=/tmp/yq
if ! [ -x $YQ ]
then
   wget -q https://github.com/mikefarah/yq/releases/download/v4.19.1/yq_linux_amd64 -O /tmp/yq
   chmod +x $YQ
fi

# define file providing the data
# the script is expected to be executed in the repository root
FILE=helmcharts/extensions/values.yaml
TARGET_DIR=helmcharts/extensions/templates

# get all renovate comments including the correct tag of the repository and fit every entry pair into one line
EXT_TAG_TUPLE_LIST=$(grep -A1 --no-group-separator -e '# renovate' $FILE | sed 's/^\s*//' | sed '{N; s/\ntag/ tag/}')

# make for loop break at newline
IFS=$'\n'
for extension in $EXT_TAG_TUPLE_LIST
do
    # extract extension name and tag from the tuple
    EXT=$(echo $extension | cut -d ' ' -f 3 | sed 's/depName=//')
    TAG=$(echo $extension | cut -d ' ' -f 5)
    EXT_NAME=$(echo $EXT | sed 's/\//-/')

    # construct the target filename
    FILE_NAME=$TARGET_DIR/$EXT_NAME.yaml

    # fetch the upstream controller-registration file
    wget -q https://raw.githubusercontent.com/$EXT/$TAG/example/controller-registration.yaml -O /tmp/controller-registration.yaml || \
	wget -q https://raw.githubusercontent.com/$EXT/$TAG/examples/controller-registration.yaml -O /tmp/controller-registration.yaml || \
	wget -q https://github.com/$EXT/releases/download/$TAG/controller-registration.yaml -O /tmp/controller-registration.yaml

    $YQ eval 'select(documentIndex == 0)' /tmp/controller-registration.yaml > /tmp/deployment.yaml
    $YQ eval 'select(documentIndex == 1)' /tmp/controller-registration.yaml > /tmp/registration.yaml

    # replace values in the deploymnent
    $YQ eval '.providerConfig.values="replaceMe"' -i /tmp/deployment.yaml
    sed -i 's/ replaceMe//' /tmp/deployment.yaml
    echo "{{- toYaml (index .Values \"$EXT_NAME\").values | nindent 4 }}" >> /tmp/deployment.yaml

    # replace resources in the controller registration
    $YQ eval '.spec.resources="replaceMe"' -i /tmp/registration.yaml
    sed -i 's/ replaceMe//' /tmp/registration.yaml
    echo "{{- toYaml (index .Values \"$EXT_NAME\").resources | nindent 4 }}" >> /tmp/registration.yaml

    # merge the two separate files and
    echo "{{- if (index .Values \"$EXT_NAME\").enable }}" > $FILE_NAME
    cat /tmp/deployment.yaml >> $FILE_NAME
    echo "---" >> $FILE_NAME
    cat /tmp/registration.yaml >> $FILE_NAME
    echo "{{- end }}" >> $FILE_NAME
done
