---
slug: gardener-ext-dev
title: Getting started with Gardener extension development
authors: jensac
tags: [gardener, gardener-extensions]
---

## TLDR;
Recently, we developed the [gardener-extension-mwe](https://github.com/23technologies/gardener-extension-mwe), which serves as a minimal working example for Gardener extensions.
If you are only interested in the code, go and checkout the repository on github.
If you want to learn more, keep on reading.

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [TLDR;](#tldr)
- [Introduction](#introduction)
- [Basic workflows](#basic-workflows)
- [The mininal working example](#the-mininal-working-example)
    - [Rapid prototyping on a Kubernetes cluster (tested with version 1.22.6)](#rapid-prototyping-on-a-kubernetes-cluster-tested-with-version-1226)
    - [Development in a real Gardener environment](#development-in-a-real-gardener-environment)
- [Last words](#last-words)

<!-- markdown-toc end -->

## Introduction
Starting the development of new [Gardener](https://gardener.cloud/) extensions can be challenging.
As the [Gardener documentation](https://gardener.cloud/docs/) is fairly complex and driven by the history of the project, getting into the overall concepts is not easy.
Moreover, code examples for Gardener extensions reside in separate Git repositories lacking documentation.
However, early in March 2022 the [gardener-extension-shoot-networking-filter](https://github.com/gardener/gardener-extension-shoot-networking-filter) was published, which comes at a more beginner friendly level than the e.g. the cloud-provider extensions.
In particular, it extends `Shoot` clusters by the use of [managed resources](https://gardener.cloud/docs/gardener/concepts/resource-manager/#managedresource-controller), which might be more straight-forward than the interaction with a cloud service provider as performed by e.g. the [gardener-extension-provider-aws](https://github.com/gardener/gardener-extension-provider-aws).
Thus, [gardener-extension-shoot-networking-filter](https://github.com/gardener/gardener-extension-shoot-networking-filter) provides a reasonable starting point for new developments, which target at automated deployments into `Shoot` clusters.

However, going beyond the identification of a starting point, it makes sense to take a closer look at the concepts for extension development.
In the [extension directory](https://github.com/gardener/gardener/tree/master/extensions) of the Gardener Git repository, we find several Go-packages defining interfaces, which can be implemented by extension controllers.
Put simply, we can search for files matching `pkg/controller/*/actuator.go`, in order to find interfaces for controllers acting on the corresponding resources.
E.g., if our controller defines a (golang)-type -- called `actuator` -- implementing the interface defined in `pkg/controller/extension/actuator.go`, the controller will reconcile resources of type `*extensionsv1alpha1.Extension`.
Consequently, the controller will take care for all the steps we define in the `Reconcile` method of the `actuator`, when `Extension` resources are updated.
Of course, there might be more complex scenarios where reconciling `Extension` resources would be insufficient.
In these cases, other interfaces like e.g. defined in `pkg/controller/infrastructure/actuator.go` would need to be implemented.
However, these cases lie beyond the scope of this blog post.

Next, we will dive into some basic workflows for Gardener extension development.

## Basic workflows
In software engineering, it is reasonable to develop on a local machine with a controllable toolchain.
As already mentioned above, Gardener extensions are implemented in [Go](https://go.dev/).
Therefore, let's identify a few requirements for the development:
- An installation of Go
- A text editor, which (optionally) supports [gopls](https://pkg.go.dev/golang.org/x/tools/gopls)
- A Go debugger, which is most likely to be [Delve](https://github.com/go-delve/delve)
- A Gardener development environment. This can be setup by
	- [Running Gardener locally](https://gardener.cloud/docs/gardener/development/getting_started_locally/) (also checkout [#5548](https://github.com/gardener/gardener/issues/5548), if you are running on Linux)
	- Setting up a development Gardener on some cloud infrastructure. This definitely comes closer to the real world scenario your extension will eventually live in.
The block diagram below depicts the overall setup including the requirements from above.

```
┌──────────────────────────────────────────────┐
│    Development Computer                      │
├──────────────────────────────────────────────┤
│                                              │
│ ┌──────────────────────────────────────────┐ │
│ │             - Your toolchain             │ │
│ └──────────────────────────────────────────┘ │
│                                              │
│     ┌────────────┐        ┌──────────────┐   │
│     │Kubeconfigs │        │Your code     │   │
│     └──┬──────┬──┘        └────────┬─────┘   │
│        │      │                    │         │
└────────┼──────┼────────────────────┼─────────┘
         │      │                    │
         │      │apply               │
  apply  │      │resources           │reconcile
resources│      │                    │resources
         │      └──────────────────┐ │
         │                         │ │
         │                         │ │
         ▼                         ▼ ▼
   ┌─────────────────┐       ┌─────────────────┐
   │ Garden Cluster  │       │ Seed Cluster    │
   ├─────────────────┤       ├─────────────────┤
   │- Project        │       │- Extension      │
   │- Seed           │       │- Controller     │
   │- Shoot          │       │- ...            │
   │- ...            │       │                 │
   └─────────────────┘       └─────────────────┘
```
As you can see, the code for the extension controller is running on your local development machine, and reconciles resources, such as `Extension` resources, in the `Seed` cluster.
Of course, you will not have dedicated clusters for the `Garden` cluster and `Seed` cluster, when running Gardener locally.
However, the overall buidling blocks stay conceptually the same.
Once these requirements are met, you are good to go for your first steps with Gardener extensions.
Wait! I have to setup an entire Gardener, if I want to rapidly prototype an extension controller?
Yes and No. Depending on your development/test case, it might be reasonable to "fake" a Gardener environment on a vanilla Kubernetes cluster. We will get to this development case below.
For rock solid testing, however, you most probably need a real world Gardener environment.

## The mininal working example

As of May 2022, we provide a Minimal Working Example (MWE) for gardener extensions.
Of course, this example did not come out of nowhere.
Therefore, we review the development process and break the example down to its components in the following:
Taking a look at other extensions, it is observed that we need some boiler plate code for running our controller, so that it works together with all the other Gardener components.
For the MWE, we collected the relevant files and adjusted them to our needs.
Thus, we can have a look at the `cmd` directory of the [gardener-extension-mwe](https://github.com/23technologies/gardener-extension-mwe) and find a simple structure with 3 files, which are responsible for starting our controller and ensuring that it acts on the defined resources.
```
cmd
└── gardener-extension-mwe
    ├── app
    │   ├── app.go
    │   └── options.go
    └── main.go
```
If you want to start the development of a new extension, you do not need to worry too much about these files.
Most probably, you can simple copy them over, and adjust some variables to your needs.
Actually, we also copied these files from the [gardener-extension-shoot-networking-filter](https://github.com/gardener/gardener-extension-shoot-networking-filter) and adjusted them to the needs of the MWE.
Given that we have the boilerplate code in the `cmd` directory available now, we can go ahead and define a type which implements an `actuator` interface.
For this, we need the files in the `pkg` directory.
Lets take a look at the structure:
```
pkg
└── controller
	└── lifecycle
		├── actuator.go
		└── add.go
```
Also here, we find only two files, and the implementation of the interface is located in [`actuator.go`](https://github.com/23technologies/gardener-extension-mwe/blob/main/pkg/controller/lifecycle/actuator.go).
This is the place where most of the magic of your new controller happens.
In the case of the MWE, the actuator will only output logs, when `Extension` resources are reconciled.
Obviously, all code is written in Go and consequently we will also need to pull in some dependencies.
For this, we need the files `go.mod` and `go.sum`.
Typically, the source code of the dependencies is also committed to the repository, which comes at advantages and downsides.
The main advantage is that all code needed for building an application is available in the repository.
On the other hand, committing several 1000s lines of code during vendoring clutters the commit history of the repository.
Therefore, we only provide the files mentioned above in the [initial commit](https://github.com/23technologies/gardener-extension-mwe/commit/455c9c76876161bf8d5197e1330a9fc28f825baa) of the MWE and perform the vendoring (by running `go mod vendor`) in [another commit](https://github.com/23technologies/gardener-extension-mwe/commit/3c238bdcc5697392d567d5b6e5f2cf6126b3c756).
At this state of the repository, we can already start and go the first steps with our new controller in a vanilla Kubernetes cluster.

### Rapid prototyping on a Kubernetes cluster (tested with version 1.22.6)
Assuming you have read the [basic workflows](#basic-workflows) section, we are ready to dive into the exemplary development techniques.
So let's fetch the code and setup the repository:
``` shell
git clone https://github.com/23technologies/gardener-extension-mwe.git
cd gardener-extension-mwe
git checkout 3c238bd  # checkout the commit containing first vendoring
mkdir dev
cp PATH-TO/KUBECONFIG.yaml dev/kubeconfig.yaml
```
Now, we can already start our controller and should get some output showing that it was started:
``` shell
go run ./cmd/gardener-extension-mwe --kubeconfig=dev/kubeconfig.yaml  --ignore-operation-annotation=true --leader-election=false
```
However, we will not observe any other output, since the controller is still freewheeling.
Remember, reconciliation will be triggered on `Extension` resources.
As our vanilla Kubernetes cluster does not know anything about `Extension` resources yet, we will have to "fake" the Gardener environment.
In other Gardener extensions, we find resources for a "fake" Gardener setup in the `example` directory.
Therefore, we prepared the `example` directory in [another commit](https://github.com/23technologies/gardener-extension-mwe/commit/50f7136330e114ec2f795f3e30a756381dd4cbc6).
Let's check it out:
Open a new terminal pane and navigate to your repository and go for
``` shell
git checkout 50f7136 # this commit entails the example directory
export KUBECONFIG=dev/kubeconfig.yaml
kubectl apply -f example/10-fake-shoot-controlplane.yaml
kubectl apply -f example/20-crd-cluster.yaml
kubectl apply -f example/20-crd-extension.yaml
kubectl apply -f example/30-cluster.yaml
```
Now, the cluster simulates a Gardener environment and we can apply an `Extension` resource:
``` shell
kubectl apply -f example/40-extension.yaml
```
Take another look at the terminal running our controller now.
It should have logged a "Hello World" message.
Of course, we can also delete the `Extension` resource again and the controller will tell us that the `Delete` method was called.
``` shell
kubectl delete -f example/40-extension.yaml
```
As we have the code and a method to trigger its execution available now, we can go ahead for a more interactive approach based on the [Delve debugger](https://github.com/go-delve/delve).
Let's start all over again and run our controller using Delve
```shell
dlv debug ./cmd/gardener-extension-mwe -- --kubeconfig=dev/kubeconfig.yaml  --ignore-operation-annotation=true --leader-election=false
```
and we will end up in a commandline with a `(dlv)` prompt.
Next, we ask `dlv` to break in the `Reconcile` method
``` shell
(dlv) b github.com/23technologies/gardener-extension-mwe/pkg/controller/lifecycle.(*actuator).Reconcile
```
and continue the execution of the controller
``` shell
(dlv) c
```
Afterwards, you should observe some output of the controller, again.
However, Delve will not break the execution until the `Reconcile` method is called.
Thus, we apply the `Extension` resource once again
``` shell
kubectl apply -f example/40-extension.yaml
```
and Delve will stop in the `Reconcile` method.
Now, you can step through the code, see where it enters code paths pointing into the vendor directory, and inspect the values of certain variables.
Obviously, the amount of variables you can inspect is limited in the MWE, but e.g. we can have a look at the `*extensionsv1alpha1.Extension` passed to the `Reconcile` method
``` shell
(dlv) p ex.ObjectMeta.Name
```
which should print `"mwe"`.
Generally, this is a great way to approach unknown software, since you will quickly get a feeling for the different components.
Thus, we expect that you can benefit from this workflow, when developing your own extensions.
Even though this approach offers capabilities for rapid prototyping, it is still limited, since we cannot act e.g. on `Shoot` clusters as available in a real world Gardener.
Therefore, we step into the development in a Gardener environment in the next section.

### Development in a real Gardener environment
Developing and testing our extension in a real world Gardener requires a `ControllerRegistration` resource in the `Garden` cluster causing the installation of the controller in `Seed` clusters.
Generally, the installation performed by Helm charts and consequently, we need to provide these charts in the repository.
Also for the MWE, we prepared the `charts` directory containing all relevant Helmcharts for the deployment of the controller.
Note that this set of charts is very limited and in production scenarios you might want to add something like a `VerticalPodAutoscaler` as done e.g. in the [gardener-extension-shoot-networking-filter](https://github.com/gardener/gardener-extension-shoot-networking-filter).
However, implementing production ready charts goes beyond the scope of this post, and consequently the MWE charts were added in [another commit](https://github.com/23technologies/gardener-extension-mwe/commit/beee274314ac628c65a3dcb4846dad577744b36a).
These charts target at running the controller in `Seed` clusters.
Thus, in `charts/gardener-extension-mwe/values.yaml`, the image for the deployment is defined.
However, we do not want to push that image to a public container registry for each and every change we make to our code.
Moreover, we want to run the controller on our local machine for development purposes.
Therefore, we need to tweak the values before generating the `controller-registration.yaml`.
Let's go through it step by step:
``` shell
git clone https://github.com/23technologies/gardener-extension-mwe.git
cd gardener-extension-mwe
mkdir dev
cp PATH-TO/KUBECONFIG-FOR-SEED.yaml dev/kubeconfig.yaml
```
Next, we generate the `controller-registration.yaml`, such that the controller is not deployed to the seed cluster and we can hook-in the controller running locally.
In particular, we set `replicaCount=0` and `ignoreResources=true` in `./charts/gardener-extension-mwe/values.yaml`, before generating the `controller-registration.yaml`:
``` shell
yq eval -i '.replicaCount=0 | .ignoreResources=true' charts/gardener-extension-mwe/values.yaml
./vendor/github.com/gardener/gardener/hack/generate-controller-registration.sh mwe charts/gardener-extension-mwe v0.0.1 example/controller-registration.yaml Extension:mwe
```
Now, let's deploy the generated `controller-registration.yaml` into the `Garden` cluster:
``` shell
export KUBECONFIG=PATH-TO/GARDEN-CLUSTER-KUBECONFIG.yaml
kubectl apply -f example/controller-registration.yaml
```
From now on, `Extension` resources of the type `mwe` will be deployed to `Seed` clusters when new `Shoot` clusters with
``` yaml
---
apiVersion: core.gardener.cloud/v1beta1
kind: Shoot
metadata:
  name: bar
  namespace: garden-foo
spec:
  extensions:
  - type: mwe
...
```
are created.
In our controller, the `Reconcile` method will be triggered, when these `Extension` resources are reconciled.
Therefore, we can run the extension controller with Delve now
``` shell
dlv debug ./cmd/gardener-extension-mwe -- --kubeconfig=dev/kubeconfig.yaml  --ignore-operation-annotation=true --leader-election=false --gardener-version="v1.44.4"
```
and we can perform debugging operations as explained above.
Remember, Delve will not break the execution until the `Reconcile` method is called.
Now, Gardener will create `Extension` resources for `Shoot`s which will trigger the `Reconcile` method of our controller.
Consequently, we need a new terminal pane in the repository root and execute
```shell
export KUBECONFIG=PATH-TO/GARDEN-CLUSTER-KUBECONFIG.yaml
kubectl apply -f example/50-shoot.yaml
```
Note that it will take some time until the corresponding `Extension` resource will be created in the `Seed` cluster.
Hang on tight and wait for the `Reconcile` method being executed.
You can start investigating where your code goes using Delve now.
Happy hacking!

## Last words
This blog post shares our experience, when getting started with Gardener extension development.
We hope that this contribution helps you get started more quickly than us.
If you have any comment or ideas for improvements, do not hesitate to contact us.
We are always willing to improve our work.
