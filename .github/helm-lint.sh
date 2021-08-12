#!/bin/bash

echo""
echo "-----Start pre-commit Hooks-----"

yamllint --config-file .github/yamllint.yaml .
x=$?

helm lint helmcharts/gardener-controlplane --with-subcharts

echo "-----End pre-commit Hooks-----"
exit $x
