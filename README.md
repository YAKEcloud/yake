# YAKE

YAKE is Yet Another Kubernetes Engine. Formerly it was developed as 23KE as inner source at
23 Technologies GmbH and serves a gitops-based [Gardener](https://gardener.cloud/) distribution.
Conceptually, YAKE not only installs Gardener itself but comes with some basic components
for managing ingresses, certificates, dnsentries, and Gardener addons such as the dashboard as
well es Gardener extensions.

# Technology

YAKE is fully built around [Flux](https://fluxcd.io/) in order to enable the gitops approach.
Moreover, [Helm](https://helm.sh/) charts are used for configuration/templating purposes. You
can find all Gardener related Helm charts releases separately in the
[gardener-community/gardener-charts](https://github.com/gardener-community/gardener-charts) Helm
repository. These Helm charts are also supplied in the `helmcharts` directory in this repository
to keep the repository as self-contained as possible.

# Getting started

## Getting started locally

If you just want to try out YAKE and evaluate whether it is the right tool for you, you are invited
to set up a local installation via the resources provided in `hack/ci/yake-local`. Just go ahead
and execute

```sh
cd hack/ci/yake-local
./work.sh
```

This will set up a KinD Kubernetes cluster on you local machine and install YAKE into it. You can watch the installation by watching the Flux resources `Kustomization`s and `HelmReleases`. Of course, you could also have a look at `Deployment`s and `Pod`s in order to see which processes are started.

If you run into errors, have a look at [kind-known-issues](https://kind.sigs.k8s.io/docs/user/known-issues).

### Local development and contribution

If you want to experiment with new features or bug fixes for YAKE, you can simply apply changes to
resources in this repository. In order to reflect these changes in the locally running environment,
you need to commit them and push them to the `local` remote. From there Flux's source-controller will
reconcile the repository state and apply your changes to the cluster. This enables a smooth local
development experience. Once you are satisfied with your changes, you should rebase all your commit
into meaningful commits, push the branch to the upstream repository, and file a pull request.

# Production Deployments

For production deployments you can have a look at the local setup first and adjust the configuration
files in `hack/ci/yake-local/config` to your needs. You will not need to install [Knot](https://www.knot-dns.cz/)
and [Step-ca](https://smallstep.com/docs/step-ca/) as done in the local environment. However, you
will need a domain and configured cloud dns provider for a real deployment. Please checkout the
documentation for further information.
