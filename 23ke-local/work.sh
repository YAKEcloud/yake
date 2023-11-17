#!/usr/bin/env bash
set -eu
CLUSTERNAME="23ke-local"
VGARDEN_KUBECONFIG="/tmp/$CLUSTERNAME-apiserver.yaml"
kind create cluster --config kind-config.yaml --name $CLUSTERNAME --image=kindest/node:v1.25.11

kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.12/config/manifests/metallb-native.yaml
kubectl wait --namespace metallb-system --for=condition=ready pod --all --timeout=90s

lbrange=$(docker network inspect kind | yq '.[0].IPAM.Config[0].Subnet' | sipcalc -s24 - | head -n 10 | tail -n 1 | awk '{print $3"-"$5}')
cat <<EOF | kubectl apply -f -
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: example
  namespace: metallb-system
spec:
  addresses:
  - "$lbrange"
---
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: empty
  namespace: metallb-system
EOF

kubectl apply -f git-server.yaml

echo ">>> waiting for git server"
kubectl wait --namespace default --for=condition=ready pod --selector=app=git-server --timeout=90s
gitUrl="http://$(kubectl get svc git-server -o jsonpath="{.status.loadBalancer.ingress[0].ip}")/repository.git"
git remote add local "$gitUrl" 2>/dev/null || git remote set-url local "$gitUrl"
until git fetch local; do
  sleep 3
done
echo ">>> ok"

git push local

############# step ca for acme server in kind cluster #################
helm repo add smallstep https://smallstep.github.io/helm-charts/

# if values are not generated yet
# step ca init --acme --helm > values.yaml
helm upgrade --namespace=garden --create-namespace -i -f step-ca-values.yaml step-certificates smallstep/step-certificates

############# knot #################
kubectl apply -f knot.yaml

svcIP=$(kubectl get svc knot -oyaml | yq .spec.clusterIP)

kubectl -n kube-system get configmap coredns -ojson |
  yq '.data.Corefile' |
  sed "\$a local.gardener.cloud:53 {\n  forward . $svcIP\n}" |
  kubectl -n kube-system create configmap coredns --from-file Corefile=/dev/stdin --dry-run=client -oyaml |
  kubectl -n kube-system patch configmap coredns --patch-file /dev/stdin

############# flux #################
kubectl apply -f ../flux-system/gotk-components.yaml

############# 23ke config #################
export NODE_CIDR=$(docker network inspect kind | yq '.[0].IPAM.Config[0].Subnet' -r)
export DOLLAR='$'
for file in config/*; do
  envsubst < "$file" | kubectl apply -f -
done

cat <<EOF | kubectl apply -f -
---
apiVersion: source.toolkit.fluxcd.io/v1
kind: GitRepository
metadata:
  name: 23ke
  namespace: flux-system
spec:
  interval: 10s
  url: http://git-server.default.svc.cluster.local/repository.git
  ref:
    branch: $(git branch --show-current)
EOF

##
cat <<EOF | kubectl apply -f -
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: 23ke
  namespace: flux-system
spec:
  interval: 10s
  sourceRef:
    kind: GitRepository
    name: 23ke
  path: ./
  prune: true
  patches:
    - patch: |
        - op: remove
          path: /spec/dependsOn/0
      target:
        kind: Kustomization
        name: configuration
        namespace: flux-system
    - target:
        kind: Kustomization
        name: flux-system
        namespace: flux-system
      patch: |
        - op: add
          path: /spec/patches
          value:
            - target:
                kind: Deployment
                name: helm-controller
                namespace: flux-system
              patch: |
                - op: add
                  path: /spec/template/spec/containers/0/args/-
                  value: "--requeue-dependency=10s"
            - target:
                kind: Deployment
                name: kustomize-controller
                namespace: flux-system
              patch: |
                - op: add
                  path: /spec/template/spec/containers/0/args/-
                  value: "--requeue-dependency=10s"
EOF

echo ">>> waiting for deployment cert-controller-manager"
until kubectl get deployment cert-controller-manager -n garden; do
  sleep 3
done
echo ">>> ok"

kubectl patch deployment -n garden cert-controller-manager --patch-file cert-controller-manager.deployment.patch.yaml

echo ">>> waiting for hr gardener-runtime"
until kubectl get hr gardener-runtime -n flux-system; do
  sleep 3
done
kubectl wait --for=condition=ready -n flux-system hr gardener-runtime --timeout=5m
echo ">>> ok"

garden_ingress_ip=$(kubectl get svc -n garden garden-ingress-nginx-controller -o jsonpath="{.status.loadBalancer.ingress[0].ip}")

if [[ $(getent hosts dashboard.local.gardener.cloud | awk '{ print $1}') != $garden_ingress_ip ]] ||
	 [[ $(getent hosts api.local.gardener.cloud | awk '{ print $1}') != $garden_ingress_ip ]]	||
	 [[ $(getent hosts identity.local.gardener.cloud | awk '{ print $1}') != $garden_ingress_ip ]]
then
		echo "-------------------------------------------------"
		echo "$garden_ingress_ip dashboard.local.gardener.cloud"
		echo "$garden_ingress_ip api.local.gardener.cloud"
		echo "$garden_ingress_ip identity.local.gardener.cloud"
		echo "-------------------------------------------------"
		read -p "Please add these to /etc/hosts and press any key to continue."
fi 

kubectl get secrets -n garden garden-kubeconfig-for-admin -o go-template='{{.data.kubeconfig | base64decode }}' > "$VGARDEN_KUBECONFIG"; do

KUBECONFIG="$VGARDEN_KUBECONFIG" kubectl apply -f garden-content/cloudprofile-local.yaml
KUBECONFIG="$VGARDEN_KUBECONFIG" kubectl apply -f garden-content/controller-registrations.yaml
KUBECONFIG="$VGARDEN_KUBECONFIG" kubectl apply -f garden-content/project.yaml

echo ">>> waiting for provider local service account in vgarden"
until providerLocalSAName=$(KUBECONFIG="$VGARDEN_KUBECONFIG" kubectl get sa -n seed-initial-seed -o custom-columns=NAME:.metadata.name --no-headers | grep extension-provider-local); do
  sleep 3
done
echo ">>> ok"

cat <<EOF | KUBECONFIG="$VGARDEN_KUBECONFIG" kubectl apply -f -
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: extension-provider-local
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
  - kind: ServiceAccount
    name: $providerLocalSAName
    namespace: seed-initial-seed
EOF

