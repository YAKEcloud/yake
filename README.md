# 23ke

23ke consists of three layers:
 * 23ke "base" git repository
 * 23ke-"config"-<name> git repository to manage one or multiple configuration environments (like production, staging, testing)
 * An "env" folder inside 23ke-config-<name> which is meant to hold configuration for one gardener installation

23ke makes use of established kubernetes tooling wherever possible:
 * Flux v2 to reconcile the desired state defined in a git repository
 * Kustomize (inside Flux)
 * Helm (inside Flux) for installation and upgrades of most components
 * Cert-Manager for selfsigned (inside of gardener) and LetsEncrypt Certificates
 * Cluster-API for creation and ugrades of the garden cluster and seed clusters
 * Nginx Ingress
 * KinD for bootstapping with Cluster-API, development and CI environments

# Create config repository

# Initialize new environment

```
export $MYNAME=foo
export $MYENV=development
export $23KEVERSION
mkdir 23ke-config-$MYNAME && cd 23ke-config-$MYNAME
git init
git submodule add -b $23KEVERSION git@github.com:23technologies/23ke.git
mkdir $MYENV && cd $MYENV
../23ke/init-new-env.sh  # copies and symlinks templates

./bin/
```


# Bootstrap Garden Cluster

23ke can be installed on top of any compatible kubernetes cluster, but ships with scripts to launch and configure a new cluster with cluster-api on many cloud providers.


# Install on running cluster
After creating and commiting the environment to the config repository you need to bootstrap flux into the cluster and give it read access to the config repository. T

# How to use the testbed
This repo contains a quick way to setup 23KE for testing and development. The scripts that bootstrap the testing environment are all located in 'hack/ci'. The testbed itself runs as shoot on top of okeanos. To start you have to place a valid kubeconfig that accesses the okeanos API-Server under 'hack/secrets/gardener-kubeconfig.yaml'. If you want to deploy a working seed on hetznercloud you have to place a hetzner token under 'hack/secrets/hcloud_token' it is important to place the token there without trailing newline character. After that you can start the deployment with a simple 'bash hack/ci/setup_shoot.sh'. The script runs approximately 10 Minutes and in the end you should have a working gardener. The script calls 8 different scripts sequentially, all of them can be executed seperately as well. Here a brief description of each script:

00-environment.sh:    Reserves a shoot, generates random passwords, tokens, names
01-shoot.sh           Waits for the shoot to be in "Ready" state
02-letsencrypt.sh     Deploys cert-manager and installs le-staging clusterissuer
03-minio.sh           Deploys minio
04-23ke-bucket.sh     Uploads the 23KE content to the bucket
05-config-bucket.sh   Uploads the 23KE-testbed-config to the bucket
06-flux.sh            Installs flux
07-23ke.sh            Creates flux kustomizations and waits for reconciliation


To deploy a hcloud-gardenlet in that gardener (requires the hcloud_token) you can call 'bash hack/ci/08-gardenlet.sh'

# Prevent nix-shell garbage collection
Nix by default collects unused packages. Using nix-shell does not automatically root it's dependencies,
which causes nix to rebuild missing packages after garbage collection ran. You can prevent this with:
```
nix-instantiate shell.nix --indirect --add-root /nix/var/nix/gcroots/per-user/$USER/23ke.drv
```
More information on [Nix Wiki on Pinning](https://nixos.wiki/wiki/Storage_optimization#Pinning) and [Nix Pills](https://nixos.org/guides/nix-pills/garbage-collector.html)
