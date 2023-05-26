#!/usr/bin/env bash

set -eu

cd hack/go/imagevector-importer
go run main.go import --config config.yaml > ../../../gardener/configuration/images.yaml
