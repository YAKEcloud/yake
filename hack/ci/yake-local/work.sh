#!/usr/bin/env bash
set -eu

if [[ $0 != './work.sh' ]]; then
  echo "please run this from inside yake-local/"
  exit 1
fi

source ../../../hack/tools/install.sh

CLUSTERNAME="yake-local"
VGARDEN_KUBECONFIG="/tmp/$CLUSTERNAME-apiserver.yaml"

K8S_VERSION="${K8S_VERSION:-v1.33.7}"
CNI="${CNI:-default}"

if [[ $CNI == "default" ]]; then
  kindConfig="kind-config.yaml"
  useCilium=""
  useCalico=""
elif [[ $CNI == "cilium" ]]; then
  kindConfig="kind-config-no-cni.yaml"
  useCilium="true"
  useCalico=""
elif [[ $CNI == "calico" ]]; then
  kindConfig="kind-config-no-cni.yaml"
  useCilium=""
  useCalico="true"
else
  echo "unknown CNI '$CNI', use 'default', 'calico' or 'cilium'"
  exit 1
fi

_print_heading() {
  echo -e "\033[34m$1\033[0m"
}

# Helper function to add Helm repositories safely
_add_helm_repo_if_not_exists() {
  local repo_name=$1
  local repo_url=$2

  if ! $HELM repo list 2>/dev/null | grep -q "^${repo_name}"; then
    $HELM repo add "$repo_name" "$repo_url"
  fi
  $HELM repo update "$repo_name"
}

_setup_kind_network() {
  _print_heading "Setup Kind Network"

  # Check if the Kind cluster already exists - if so, skip network setup
  if $KIND get clusters 2>/dev/null | grep -q "^${CLUSTERNAME}$"; then
    echo "Kind cluster '$CLUSTERNAME' already exists, skipping network setup"
    return 0
  fi

  # Check if network already exists
  local existing_network_id
  existing_network_id="$(docker network list --filter=name=^kind$ --format='{{.ID}}')"

  if [ -n "$existing_network_id" ] ; then
    echo "Kind network already exists, will be used by cluster"
    return 0
  fi

  # Create kind network with gardener-compatible configuration
  echo "Creating kind network with gardener-compatible configuration..."
  docker network create kind --driver=bridge \
    --subnet 172.18.0.0/16 --gateway 172.18.0.1 \
    --ipv6 --subnet fd00:10::/64 --gateway fd00:10::1 \
    --opt com.docker.network.bridge.enable_ip_masquerade=true \
    --opt com.docker.network.driver.mtu=1400
}

_create_cluster () {
  _print_heading "Create Cluster"

  if $KIND export kubeconfig -n $CLUSTERNAME > /dev/null 2>&1; then
    echo "Cluster '$CLUSTERNAME' already exists"
  else
    echo "Creating new Kind cluster '$CLUSTERNAME'..."
    $KIND create cluster --config "$kindConfig" --name $CLUSTERNAME --image="registry.regio.digital/proxy_cache/kindest/node:$K8S_VERSION"
  fi

  $KIND export kubeconfig -n $CLUSTERNAME
  $KUBECTL config set-context --current --namespace=default
}

_create_cni () {
  _print_heading "Create CNI"
  if [[ $useCilium == "true" ]]; then
      _create_cilium
  elif [[ $useCalico == "true" ]]; then
      _create_calico
  fi
}

_create_cilium () {
  _print_heading "Create Cilium"
  local VERSION="1.18.6"

  _add_helm_repo_if_not_exists cilium https://helm.cilium.io/

  $HELM upgrade -i cilium cilium/cilium --version "$VERSION" \
     --namespace kube-system \
     --set image.pullPolicy=IfNotPresent \
     --set ipam.mode=kubernetes \
     --set policyCIDRMatchMode=nodes
}

_create_calico () {
  _print_heading "Create Calico"
  VERSION="v3.31.3"

  $KUBECTL create -f https://raw.githubusercontent.com/projectcalico/calico/$VERSION/manifests/tigera-operator.yaml 2>/dev/null || true
  $KUBECTL wait --for condition=established --timeout=60s crd/installations.operator.tigera.io

  cat <<EOF | $KUBECTL apply -f -
apiVersion: operator.tigera.io/v1
kind: Installation
metadata:
  name: default
spec:
  registry: quay.io/
  calicoNetwork:
    mtu: 1350
    ipPools:
    - blockSize: 26
      cidr: 10.1.0.0/16
      encapsulation: VXLANCrossSubnet
      natOutgoing: Enabled
      nodeSelector: all()
---
apiVersion: operator.tigera.io/v1
kind: APIServer
metadata:
  name: default
spec: {}
EOF
}

_wait_for_nodes_ready () {
  _print_heading "Wait For Nodes Ready"
  $KUBECTL wait --for=condition=ready nodes --all --timeout=15m
}

_create_loadbalancer () {
  _print_heading "Create Loadbalancer"
  local VERSION=v0.15.3

  $KUBECTL apply -f https://raw.githubusercontent.com/metallb/metallb/$VERSION/config/manifests/metallb-native.yaml
  $KUBECTL wait --namespace metallb-system --for=condition=ready pod --all --timeout=3m

  cat <<EOF | $KUBECTL apply -f -
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: example
  namespace: metallb-system
spec:
  addresses:
  - "172.18.0.23-172.18.0.42"
---
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: empty
  namespace: metallb-system
EOF
}

_create_local_git () {
  _print_heading "Create Local Git"
  $KUBECTL apply -f git-server.yaml

  echo "Waiting for git server to be ready..."
  $KUBECTL wait --namespace default --for=condition=ready pod --selector=app=git-server --timeout=3m

  gitUrl="http://$($KUBECTL get svc git-server -o jsonpath="{.status.loadBalancer.ingress[0].ip}")/repository.git"

  # Add or update git remote
  if git remote get-url local >/dev/null 2>&1; then
    echo "Updating existing 'local' git remote"
    git remote set-url local "$gitUrl"
  else
    echo "Adding 'local' git remote"
    git remote add local "$gitUrl"
  fi

  echo "Testing connection to git server..."
  until git fetch local 2>/dev/null; do
    printf "."
    sleep 3
  done
  echo " connected!"

  echo "Pushing to local git server..."
  git push local
}

_create_step_ca () {
  _print_heading "Create Step CA"

  _add_helm_repo_if_not_exists smallstep https://smallstep.github.io/helm-charts/

  STEP_CA_VALUES="step-ca-values.yaml"

  if [[ ! -f step-ca-values.yaml ]]; then
    docker run --rm -it smallstep/step-cli ca init --acme --helm > "$STEP_CA_VALUES"
    $YQ -i '.inject.config.files.["ca.json"].authority.claims.maxTLSCertDuration = "2161h"' "$STEP_CA_VALUES"
    $YQ -i '.inject.config.files.["ca.json"].authority.claims.defaultTLSCertDuration = "2160h"' "$STEP_CA_VALUES"
  fi

  $HELM upgrade --namespace=garden --create-namespace -i -f "$STEP_CA_VALUES" step-certificates smallstep/step-certificates
}

_create_local_dns () {
  _print_heading "Create Local DNS"

  $KUBECTL apply -f knot.yaml

  svcIP=$($KUBECTL get svc knot -oyaml | $YQ .spec.clusterIP)

  $KUBECTL -n kube-system get configmap coredns -ojson |
    $YQ '.data.Corefile' |
    sed "\$a local.gardener.cloud:53 {\n  forward . $svcIP\n}" |
    $KUBECTL -n kube-system create configmap coredns --from-file Corefile=/dev/stdin --dry-run=client -oyaml |
    $KUBECTL -n kube-system patch configmap coredns --patch-file /dev/stdin
}

_create_flux () {
  _print_heading "Create Flux"

  $KUBECTL apply -f ../../../flux-system/gotk-components.yaml

  export NODE_CIDR="172.18.0.0/16"

  for file in config/*; do
    $ENVSUBST "\$NODE_CIDR" < "$file" | $KUBECTL apply -f -
  done

  # M1 Mac workaround
  if [[ "$(uname -s)-$(uname -m)" == "Darwin-arm64" ]]; then
    $KUBECTL apply -f m1-mac-etcd-values.yaml
  fi

  cat <<EOF | $KUBECTL apply -f -
apiVersion: source.toolkit.fluxcd.io/v1
kind: GitRepository
metadata:
  name: yake
  namespace: flux-system
spec:
  interval: 10s
  url: http://git-server.default.svc.cluster.local/repository.git
  ref:
    branch: "$(git branch --show-current)"
EOF

  cat <<EOF | $KUBECTL apply -f -
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata:
  name: yake
  namespace: flux-system
spec:
  interval: 10s
  sourceRef:
    kind: GitRepository
    name: yake
  path: ./
  prune: true
  patches:
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
                  value: "--requeue-dependency=30s"
            - target:
                kind: Deployment
                name: kustomize-controller
                namespace: flux-system
              patch: |
                - op: add
                  path: /spec/template/spec/containers/0/args/-
                  value: "--requeue-dependency=30s"
EOF
}

_patch_ccm() {
  _print_heading "Patch CCM"
  printf ">>> waiting for deployment cert-controller-manager "
  until $KUBECTL get deployment cert-controller-manager -n garden >/dev/null 2>&1; do
    printf .
    sleep 3
  done
  echo " ok"

  $KUBECTL patch deployment -n garden cert-controller-manager --patch-file cert-controller-manager.deployment.patch.yaml
}

_ensure_hosts() {
  _print_heading "Ensure Hosts"
  printf ">>> waiting for hr gardener-runtime "
  until $KUBECTL get hr gardener-runtime -n flux-system >/dev/null 2>&1; do
    printf .
    sleep 3
  done

  $KUBECTL wait --for=condition=ready -n flux-system hr gardener-runtime --timeout=10m
  echo " ok"

  garden_ingress_ip=$($KUBECTL get svc -n garden garden-ingress-nginx-controller -o jsonpath="{.status.loadBalancer.ingress[0].ip}")

  # In CI: automatically add to /etc/hosts
  if [[ -v CI ]]; then
    echo "Running in CI - automatically adding entries to /etc/hosts"
    {
      echo "$garden_ingress_ip dashboard.local.gardener.cloud"
      echo "$garden_ingress_ip api.local.gardener.cloud"
      echo "$garden_ingress_ip identity.local.gardener.cloud"
    } | sudo tee -a /etc/hosts
    return 0
  fi

  # Local execution: check if entries exist, prompt if not
  if grep "$garden_ingress_ip\\s*dashboard.local.gardener.cloud" < /etc/hosts > /dev/null &&
     grep "$garden_ingress_ip\\s*api.local.gardener.cloud" < /etc/hosts > /dev/null &&
     grep "$garden_ingress_ip\\s*identity.local.gardener.cloud" < /etc/hosts > /dev/null; then
    echo "/etc/hosts entries already exist"
    return 0
  fi

  # Prompt user to add entries
  echo ""
  echo "=========================================="
  echo "Please add the following entries to your /etc/hosts file:"
  echo ""
  echo "$garden_ingress_ip dashboard.local.gardener.cloud"
  echo "$garden_ingress_ip api.local.gardener.cloud"
  echo "$garden_ingress_ip identity.local.gardener.cloud"
  echo "=========================================="
  echo ""
  read -p "Press Enter after you've added these entries to continue..."

  # Verify entries were added
  until
      grep "$garden_ingress_ip\\s*dashboard.local.gardener.cloud" < /etc/hosts > /dev/null &&
      grep "$garden_ingress_ip\\s*api.local.gardener.cloud" < /etc/hosts > /dev/null &&
      grep "$garden_ingress_ip\\s*identity.local.gardener.cloud" < /etc/hosts > /dev/null
  do
    echo ""
    echo "Entries not found in /etc/hosts. Please add them and try again."
    read -p "Press Enter after you've added the entries..."
  done

  echo "✓ /etc/hosts entries verified"
}

_create_rbac () {
  _print_heading "Create RBAC"
  $KUBECTL get secrets -n garden garden-kubeconfig-for-admin -o go-template='{{.data.kubeconfig | base64decode }}' > "$VGARDEN_KUBECONFIG"

  KUBECONFIG="$VGARDEN_KUBECONFIG" $KUBECTL apply -f garden-content/cloudprofile-local.yaml
  KUBECONFIG="$VGARDEN_KUBECONFIG" $KUBECTL apply -f garden-content/controller-registrations.yaml
  KUBECONFIG="$VGARDEN_KUBECONFIG" $KUBECTL apply -f garden-content/project.yaml

  printf ">>> waiting for provider local service account in vgarden "
  until providerLocalSAName=$(KUBECONFIG="$VGARDEN_KUBECONFIG" $KUBECTL get sa -n seed-initial-seed -o custom-columns=NAME:.metadata.name --no-headers | grep extension-provider-local); do
    printf .
    sleep 3
  done
  echo " ok"

  cat <<EOF | KUBECONFIG="$VGARDEN_KUBECONFIG" $KUBECTL apply -f -
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
}

_wait_for_initial_seed_ready () {
  _print_heading "Wait For Initial Seed Ready"

  printf ">>> waiting for initial seed to become ready "
  until KUBECONFIG="$VGARDEN_KUBECONFIG" $KUBECTL get seed initial-seed >/dev/null 2>&1; do
    printf .
    sleep 3
  done
  KUBECONFIG="$VGARDEN_KUBECONFIG" $KUBECTL wait --for=jsonpath='{.status.lastOperation.progress}'=100 --timeout=10m seed initial-seed > /dev/null
  echo " ok"
}

###
# Main execution flow
###

install_helm
install_kind
install_kubectl
install_yq
install_envsubst
_setup_kind_network
_create_cluster
_create_cni
_wait_for_nodes_ready
_create_loadbalancer
_create_local_git
_create_step_ca
_create_local_dns
_create_flux
_patch_ccm
_ensure_hosts
_create_rbac
_wait_for_initial_seed_ready

_print_heading "Setup Complete!"
echo "Cluster '$CLUSTERNAME' is ready for Gardener"
