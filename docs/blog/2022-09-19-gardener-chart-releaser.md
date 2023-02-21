---
slug: gardener-chart-releaser
title: A Single Point of Truth for Gardener Helm Charts
authors: [jensac, mxmxchere]
tags: [gardener, gardener-community]
---

## TLDR;
Recently, we consolidated Gardener related Helm charts in a helm repository hosted on GitHub pages of the [gardener-charts](https://github.com/gardener-community/gardener-charts) repository.
For this purpose we implemented a custom chart release bot - the [gardener-chart-releaser](https://github.com/gardener-community/gardener-chart-releaser).
Keep on reading to find out more.

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [TLDR;](#tldr)
- [Introduction](#introduction)
- [The Gardener Chart Releaser](#the-gardener-chart-releaser)
	- [Export the charts to a local directory](#export-the-charts-to-a-local-directory)
	- [Update all version field to the latest version](#update-all-version-field-to-the-latest-version)
- [Handling Gardener extensions](#handling-gardener-extensions)
- [Running the release process nightly](#running-the-release-process-nightly)
- [Summary](#summary)

<!-- markdown-toc end -->

## Introduction
Installing [Gardener](https://github.com/gardener/gardener) is a complicated process, even though the [garden-setup](https://github.com/gardener/garden-setup) installer is provided in the same GitHub organization space. One of the reasons is that the Gardener related Helm charts are spread over multiple repositories.
Consequently, other Helm chart-based installers like [Schrodit's](https://github.com/schrodit/gardener-installation) [gardener-installation](https://github.com/schrodit/gardener-installation) popped up.
Moreover, we consolidated gardener related Helm charts in the [23ke-charts](https://github.com/23technologies/23ke-charts) repository by a simple Python script, and developed a very [basic installation approach](https://github.com/23technologies/23ke-charts/tree/main/hack/gardener-from-helmcharts) based on these charts.
The chart collection was released in a Helm repository hosted on GitHub pages by helm's [chart-releaser](https://github.com/helm/chart-releaser).
With the consolidation of the Gardener charts, we faced the issue that the collected charts need to be kept up to date somehow.
There our journey begins, and we started to keep track of the upstream charts with the help of [renovate](https://github.com/renovatebot/renovate).
However, renovate is designed to keep dependencies up to date and finds its limitations, when it comes to tracking multiple versions of the same piece of software.
First, we tried to find a workaround by tracking three branches for the last three minor versions and shifted the latest branch, as soon as a new minor release appeared.
Even though this approach could potentially succeed, we were running into issues from time to time due to missing automatic merges, or failures in the branch shift routine.
As a consequence, we decided to build our own tracking tool, the [gardener-chart-releaser](https://github.com/gardener-community/gardener-chart-releaser).

## The Gardener Chart Releaser
As already stated above, we wanted to keep track of the last three minor versions of all Gardener related Helm charts, and release these charts in a single helm repository.
In order to achieve this, we needed to make some decisions.
First, we needed to drop our old Python-based Helm chart import script, as working with helm charts in code is way easier, when using the Go-based [helm packages](https://github.com/helm/helm/tree/main/pkg) directly. Further, helm's [chart-releaser](https://github.com/helm/chart-releaser) is written in Go and there exists a solid implementation of a git and GitHub module in Go.
So, we reimplemented our chart import and release functionality in Go with a view to tracking the last three minor releases.
Another design goal was to keep the tool simple, especially from the user point of view.
As of now, the user only needs to worry about a configuration file in yaml format.
Consider the following example:
```
# contents of config.yaml
destination:
	owner: gardener-community
	repo: gardener-charts
sources:
	- name: gardener-controlplane
	  version: v1.53.0
	  repo: gardener/gardener
	  charts:
		- charts/gardener/controlplane
  - ...
```
The `destination` map defines a GitHub owner and repository, where the collected charts are released.
Under `sources` a list of source Helm charts is provided by an `owner/repo` entry and a list of paths pointing to the charts to be released.
With a valid `config.yaml` a user can simply run
```shell
export GITHUB_TOKEN=....
gardener-chart-releaser update
```
and the configured charts will be collected and released.
Note that the `version` field is ignored for the actual release process, as we want to track several versions.
However, the `version` field has its own reasoning. Keep on reading ;-)

### Export the charts to a local directory
Just by collecting and releasing charts to a GitHub repository you won't get to see the charts' contents at all.
But what if you want to work with the charts itself in a local development scenario.
For this purpose, you can export the charts to a local directory instead of releasing them to a remote repo.
Just call
```shell
gardener-chart-releaser export
```
and the charts will be exported to a local `./charts` directory.
In this case, the `version` field in `config.yaml` defines the version to be exported.

### Update all version field to the latest version
As the entire Gardener ecosystem is moving quickly, your `config.yaml` will be outdated soon.
In order to avoid manual updates of the `version` fields, we introduced another command called `fetchLatestVersions`.
If you run
```shell
gardener-chart-releaser fetchLatestVersions
```
your `config.yaml` will be updated, so that you will find the versions of the latest upstream releases in the file.
Of course, it only makes sense to run this before a local export to make sure that the most recent versions of charts are exported.

## Handling Gardener extensions
You might be wondering how Gardener extensions are managed in this approach, as these are not provided as Helm charts upstream.
Remember that we wanted to build a single point of truth for a Gardener provisioning, and consequently the gardener-chart-releaser also packages Gardener extensions as charts.
For each entry like e.g.
```yaml
sources:
  - name: runtime-gvisor
	version: v0.5.1
	repo: gardener/gardener-extension-runtime-gvisor
	charts:
	  - controller-registration
```
in the configuration file, it will generate a Helm chart for the specified extension and release it the same way as the Gardener core charts.
Furthermore, this approach provides the opportunity to release charts for the extension itself (i.e. controllerRegistration and controllerDeployment) and the charts for the admission controllers as sub-charts.
For instance
```yaml
sources:
  - name: provider-azure
	version: v1.29.0
	repo: gardener/gardener-extension-provider-azure
	charts:
	  - controller-registration
	  - charts/gardener-extension-admission-azure
```
will package a top-level chart called `provider-azure` with sub-charts for the extension controller and admission controller, respectively.

## Running the release process nightly
As we want to be as transparent as possible, we set up a GitHub [action](https://github.com/gardener-community/gardener-charts/actions), so that the chart-releaser is run nightly.
This will ensure that we do not miss any important upstream change and the Helm repository is always up to date.

## Summary
The gardener-chart-releaser enables a single point of truth for Gardener related Helm charts and could be a good starting point for custom Gardener installation routines.
