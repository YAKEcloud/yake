#!/usr/bin/env bash
external_ip=""
namespace=${2:-default}
while [ -z $external_ip ]; do
  external_ip=$(kubectl get svc -n $namespace $1 --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}")
  [ -z "$external_ip" ] && sleep 10
done
echo $external_ip
