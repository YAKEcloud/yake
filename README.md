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
After creating and commiting the environment to the config repository you need to bootstrap flux into the cluster and give it read access to the config repository.

# How to use the testbed

## Setup your PATH
As we use e.g. [flux](https://fluxcd.io/), [kubectl](https://kubernetes.io/docs/reference/kubectl/), and [yq](https://mikefarah.gitbook.io/yq/) in the testbed, it is important that we maintain a common base of these cli tools.In order to setup your path you can run:
```shell
make -f hack/tools/tools.mk all
export PATH=hack/tools/bin:$PATH
```
and you should be good to go.

## Get started with the testbed

This repo contains a quick way to setup 23KE for testing and development. The scripts that bootstrap the testing environment are all located in `hack/ci`. The testbed itself runs as shoot on top of okeanos in the project 23ke-ci. To use the script you need the kubeconfig for a service account in that project and place it under `hack/secrets/gardener-kubeconfig.yaml`. After that you can start the deployment with a simple `bash hack/ci/setup_shoot.sh`. The script runs approximately 10 minutes and in the end you should have a working gardener. The script calls multiple scripts sequentially, all of them can be executed seperately as well. Here a brief description of each script:

* 00-environment.sh:       Reserves a shoot, generates random passwords, tokens, names
* 01-shoot.sh              Waits for the shoot to be in "Ready" state
* 02-23ke-bucket.sh        Uploads the local state of 23ke to a minio bucket
* 03-23ke-config-bucket.sh Uploads the local state of hack/ci/dev-env to a minio bucket
* 04-23ke.sh               Configures and installs 23ke gardener in shoot
* 05-secret.sh             Copy provider secret from base gardener to new gardener
* 06-microservice-shoot.sh Create a new shoot in the new gardener

The main goal is to iterate and test local changes before creating a PR or even a commit, and do so quickly. Nearly all of the time it should be sufficient to re-upload the local state with 02-23ke-bucket.sh/03-23ke-config-bucket.sh or/and re-run the 04-23ke.sh to watch flux reconcile the changes.

To clean up you need to then run delete-microservice-shoot.sh and delete-shoot.sh
