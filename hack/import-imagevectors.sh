#!/usr/bin/env bash

set -eu

cd hack/go/imagevector-importer
go run main.go import --config config.yaml > ../../../configuration/configuration/images.yaml
