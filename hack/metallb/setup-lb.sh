#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

kubectl apply -f $DIR/namespace.yaml
kubectl apply -f $DIR/secret.yaml
kubectl apply -f $DIR/metallb.yaml

# calculate ip rango for metallb

SUBNET=$(docker network inspect kind | jq -r .[0].IPAM.Config[0].Subnet)
echo subnet $SUBNET

LBNET=$(ipcalc $SUBNET -s 256 | tail -n 1)
echo "using $LBNET for loadbalancing"

FIRSTIP=$(ipcalc -n -b $LBNET | grep HostMin | sed "s/.*:\s*//")
LASTIP=$(ipcalc -n -b $LBNET | grep HostMax | sed "s/.*:\s*//")

echo "use range: $FIRSTIP - $LASTIP"
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - ${FIRSTIP}-${LASTIP}
EOF