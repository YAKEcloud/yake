#!/usr/bin/env bash

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

    # construct the url of the file to be fetched
    FILE_URL=https://raw.githubusercontent.com/$EXT/$TAG/example/controller-registration.yaml

    # construct the target filename
    FILE_NAME=$TARGET_DIR/$(echo $EXT | sed 's/\//-/').yaml

    # fetch the file

    wget $FILE_URL -O $FILE_NAME > /tmp/stdout 2> /tmp/stderr || { echo -e "\r Error during fetching extension $EXT ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr;}

done
