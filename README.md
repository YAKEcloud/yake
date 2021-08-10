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
