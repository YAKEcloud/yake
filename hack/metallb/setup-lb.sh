#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

kubectl apply -f $DIR/namespace.yaml
kubectl apply -f $DIR/secret.yaml
kubectl apply -f $DIR/metallb.yaml

# calculate ip rango for metallb

SUBNET=$(docker network inspect kind | jq -r .[0].IPAM.Config[0].Subnet)

MIN=$(ipcalc -n -b $SUBNET | grep HostMin | sed "s/.*:\s*//")
MAX=$(ipcalc -n -b $SUBNET | grep HostMax | sed "s/.*:\s*//")

# split at dot into array
IFS='.'
read -a MIN_A <<< "$MIN"
read -a MAX_A <<< "$MAX"
unset IFS
O=()

# select a random ip between min and max
for i in 0 1 2 3; do
  n=${MIN_A[$i]}
  x=${MAX_A[$i]}
  d=$(($x - $n))
  if [ $d -eq 0 ]; then
    O+=( $n )
  else
    O+=( $(($n + $RANDOM % $d)) )
  fi
done

ip="$(echo "${O[@]}" | tr [:blank:] .)"
subnet=$(ipcalc -n -b "$ip/28" | grep Network | sed "s/.*:\s*//")

echo "MetalLB subnet: $subnet"
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
      - ${subnet}
EOF
