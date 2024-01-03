#!/usr/bin/env bash
set -eu

if [[ $0 != './work.sh' ]]; then
  echo "please run this from inside yake-local/"
  exit 1
fi

source ../../../hack/tools/install.sh

CLUSTERNAME="yake-local"
VGARDEN_KUBECONFIG="/tmp/$CLUSTERNAME-apiserver.yaml"

# from gardener/gardener hack/kind-up.sh
# setup_kind_network is similar to kind's network creation logic, ref https://github.com/kubernetes-sigs/kind/blob/23d2ac0e9c41028fa252dd1340411d70d46e2fd4/pkg/cluster/internal/providers/docker/network.go#L50
# In addition to kind's logic, we ensure stable CIDRs that we can rely on in our local setup manifests and code.
_setup_kind_network() {
  # check if network already exists
  local existing_network_id
  existing_network_id="$(docker network list --filter=name=^kind$ --format='{{.ID}}')"

  if [ -n "$existing_network_id" ] ; then
    # ensure the network is configured correctly
    local network network_options network_ipam expected_network_ipam
    network="$(docker network inspect $existing_network_id | $YQ '.[]')"
    network_options="$(echo "$network" | $YQ '.EnableIPv6 + "," + .Options["com.docker.network.bridge.enable_ip_masquerade"]')"
    network_ipam="$(echo "$network" | $YQ '.IPAM.Config' -o=json -I=0)"
    expected_network_ipam='[{"Subnet":"172.18.0.0/16","Gateway":"172.18.0.1"},{"Subnet":"fd00:10::/64","Gateway":"fd00:10::1"}]'

    if [ "$network_options" = 'true,true' ] && [ "$network_ipam" = "$expected_network_ipam" ] ; then
      # kind network is already configured correctly, nothing to do
      return 0
    else
      echo "kind network is not configured correctly for local gardener setup, recreating network with correct configuration..."
      docker network rm $existing_network_id
    fi
  fi

  # (re-)create kind network with expected settings
  docker network create kind --driver=bridge \
    --subnet 172.18.0.0/16 --gateway 172.18.0.1 \
    --ipv6 --subnet fd00:10::/64 --gateway fd00:10::1 \
    --opt com.docker.network.bridge.enable_ip_masquerade=true
}

_create_cluster () {
  # If export kubeconfig fails, the cluster does not yet exist and we need to create it
  $KIND export kubeconfig -n $CLUSTERNAME > /dev/null 2>&1  || $KIND create cluster --config kind-config.yaml --name $CLUSTERNAME --image=kindest/node:v1.27.3
	$KIND export kubeconfig -n $CLUSTERNAME
	$KUBECTL config set-context --current --namespace=default
}

_create_loadbalancer () {
  $KUBECTL apply -f https://raw.githubusercontent.com/metallb/metallb/v0.13.12/config/manifests/metallb-native.yaml
  $KUBECTL wait --namespace metallb-system --for=condition=ready pod --all --timeout=90s

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
  $KUBECTL apply -f git-server.yaml

  printf ">>> waiting for git server "
  $KUBECTL wait --namespace default --for=condition=ready pod --selector=app=git-server --timeout=90s
  gitUrl="http://$($KUBECTL get svc git-server -o jsonpath="{.status.loadBalancer.ingress[0].ip}")/repository.git"
  git remote add local "$gitUrl" 2>/dev/null || git remote set-url local "$gitUrl"
  until git fetch local; do
    printf .
    sleep 3
  done
  echo " ok"

  git push local
}

_create_step_ca () {
  ############# step ca for acme server in kind cluster #################
  $HELM repo add smallstep https://smallstep.github.io/helm-charts/

  STEP_CA_VALUES="step-ca-values.yaml"

  if [[ ! -f step-ca-values.yaml ]]; then
    docker run --rm -it smallstep/step-cli ca init --acme --helm > "$STEP_CA_VALUES"
    $YQ -i '.inject.config.files.["ca.json"].authority.claims.maxTLSCertDuration = "2161h"' "$STEP_CA_VALUES"
    $YQ -i '.inject.config.files.["ca.json"].authority.claims.defaultTLSCertDuration = "2160h"' "$STEP_CA_VALUES"
  fi

  $HELM upgrade --namespace=garden --create-namespace -i -f "$STEP_CA_VALUES" step-certificates smallstep/step-certificates
}

_create_local_dns () {
  ############# knot #################
  $KUBECTL apply -f knot.yaml

  svcIP=$($KUBECTL get svc knot -oyaml | $YQ .spec.clusterIP)

  $KUBECTL -n kube-system get configmap coredns -ojson |
    $YQ '.data.Corefile' |
    sed "\$a local.gardener.cloud:53 {\n  forward . $svcIP\n}" |
    $KUBECTL -n kube-system create configmap coredns --from-file Corefile=/dev/stdin --dry-run=client -oyaml |
    $KUBECTL -n kube-system patch configmap coredns --patch-file /dev/stdin
}

_create_flux () {
  ############# flux #################
  $KUBECTL apply -f ../../../flux-system/gotk-components.yaml

  ############# yake config #################
  export NODE_CIDR="172.18.0.0/16"
  for file in config/*; do
    $ENVSUBST "\$NODE_CIDR" < "$file" | $KUBECTL apply -f -
  done

  ## M1 Mac workaround
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
    branch: $(git branch --show-current)
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
  printf ">>> waiting for deployment cert-controller-manager "
  until $KUBECTL get deployment cert-controller-manager -n garden >/dev/null 2>&1; do
    printf .
    sleep 3
  done
  echo " ok"

  $KUBECTL patch deployment -n garden cert-controller-manager --patch-file cert-controller-manager.deployment.patch.yaml
}

_ensure_hosts() {
  printf ">>> waiting for hr gardener-runtime "
  until $KUBECTL get hr gardener-runtime -n flux-system >/dev/null 2>&1; do
    printf .
    sleep 3
  done

  $KUBECTL wait --for=condition=ready -n flux-system hr gardener-runtime --timeout=10m
  echo " ok"

  garden_ingress_ip=$($KUBECTL get svc -n garden garden-ingress-nginx-controller -o jsonpath="{.status.loadBalancer.ingress[0].ip}")

	if [[ -v CI ]]; then
			{
  				echo "$garden_ingress_ip dashboard.local.gardener.cloud"
  				echo "$garden_ingress_ip api.local.gardener.cloud"
  				echo "$garden_ingress_ip identity.local.gardener.cloud"
			} | sudo tee -a /etc/hosts
	fi

  until
      grep "$garden_ingress_ip\\s*dashboard.local.gardener.cloud" < /etc/hosts > /dev/null &&
      grep "$garden_ingress_ip\\s*api.local.gardener.cloud" < /etc/hosts > /dev/null &&
      grep "$garden_ingress_ip\\s*identity.local.gardener.cloud" < /etc/hosts > /dev/null
  do
  		echo "-------------------------------------------------"
  		echo "$garden_ingress_ip dashboard.local.gardener.cloud"
  		echo "$garden_ingress_ip api.local.gardener.cloud"
  		echo "$garden_ingress_ip identity.local.gardener.cloud"
  		echo "-------------------------------------------------"
  		read -p "Please add these to /etc/hosts and press any key to continue."
  done
}

_create_rbac () {
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

  printf ">>> waiting for initial seed to become ready "
  until providerLocalSAName=$(KUBECONFIG="$VGARDEN_KUBECONFIG" $KUBECTL get seed initial-seed); do
    printf .
    sleep 3
  done
	KUBECONFIG="$VGARDEN_KUBECONFIG" $KUBECTL wait --for=jsonpath='{.status.lastOperation.progress}'=100 --timeout=10m seed initial-seed > /dev/null
  echo " ok"
}

###

install_flux
install_helm
install_kind
install_kubectl
install_yq
install_envsubst

_setup_kind_network
_create_cluster
_create_loadbalancer
_create_local_git
_create_step_ca
_create_local_dns
_create_flux
_patch_ccm
_ensure_hosts
_create_rbac
_wait_for_initial_seed_ready

