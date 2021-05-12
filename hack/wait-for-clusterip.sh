#!/usr/bin/env bash
external_ip=""
namespace=${2:-default}
while [ -z $external_ip ]; do
  echo "Waiting for clusterIP..."
  external_ip=$(kubectl get svc -n $namespace $1 --template="{{.spec.clusterIP}}")
  [ -z "$external_ip" ] && sleep 10
done
echo 'clusterIP:' && echo $external_ip