---
sidebar_position: 30
---

# Use custom container registry

YAKE in its default configuration will use container images from public container registries, whichever the developers of the respective component decided to publish to "upstream". Larger installations could run into rate limits of specific registries or have other reasons not to use those registries directly, and pull the same images from a registry mirror instead.

For environments that prefer and can provide an internal registry, YAKE has a config switch to easily reconfigure all components to pull from this registry.

The setup and mirroring procedure of such an internal registry mirror is not covered in this guide. We use and recommend harbors [proxy cache](https://goharbor.io/docs/2.1.0/administration/configure-proxy-cache/) mode, as it won't require to identify, pull and push each single image in each version/tag beforehand, which will change frequently and even with patch updates.

This feature only affects components deployed by YAKE and Gardener, from the basecluster down to each shoot node (f.e. `calico-node` pods), but will not alter anything else deployed to a shoot or custom deployments on the basecluster.

## Full example

The registryOverwrite configuration option in `yake-config` allows you to specify replacement pairs as "originalURL: replacementURL", and will then look for and replace all registries that start with `originalURL` and replace that part of the full path with `replacementURL`. If you only want to mirror certain upstream registries, for example docker.io because of rate limits, you can only specify that and everything else will be left unchanged. To pull all containers currently used in YAKE from your internal registry you need all of the following overwrites:

```
registryOverwrite:
  eu.gcr.io: myregistry.io/eu.gcr.io
  registry.k8s.io: myregistry.io/registry.k8s.io
  quay.io: myregistry.io/quay.io
  docker.io: myregistry.io/docker.io
  gcr.io: myregistry.io/gcr.io
  ghcr.io: myregistry.io/ghcr.io
  registry.k8s.io: myregistry.io/registry.k8s.io
  mcr.microsoft.com: myregistry.io/mcr.microsoft.com
  public.ecr.aws: myregistry.io/public.ecr.aws
  registry.eu-central-1.aliyuncs.com: myregistry.io/registry.eu-central-1.aliyuncs.com
```
Replacements look only for the *prefix* of the full repository path. Wildcards or other expressions are currently not supported, so certain mirror layouts would require a very lengthy replacement map. We recommend to follow a structure similar to the one above, so one project or folder or subfolder for each upstream registry, and inside of that the same structure as the original registry uses.

## Replacement mechanism examples

Given the following replacement map
```
registryOverwrite:
  eu.gcr.io: myregistry.io/eu.gcr.io
```

the following replacements would be performed

| Original                         | Will be replaced? | Replacement                                    |
| -------------------------------- | ----------------- | ---------------------------------------------- |
| eu.gcr.io/examplefolder/example1 | Yes               | myregistry.io/eu.gcr.io/examplefolder/example1 |
| eu.gcr.io/otherexample/example2  | Yes               | myregistry.io/eu.gcr.io/otherexample/example2  |
| registry.k8s.io/kube-apiserver        | No                |                                                |

---

Given the following replacement map
```
registryOverwrite:
  eu.gcr.io/examplefolder: myregistry.io/mirror-example
```

the following replacements would be performed


| Original                         | Will be replaced? | Replacement                           |
| -------------------------------- | ----------------- | ------------------------------------- |
| eu.gcr.io/examplefolder/example1 | Yes               | myregistry.io/mirror-example/example1 |
| eu.gcr.io/otherexample/example2  | No                |                                       |
| registry.k8s.io/kube-apiserver        | No                |                                       |

---

Given the following replacement map
```
registryOverwrite:
  eu.gcr.io/examplefolder: myregistry.io/mirror-example
  eu.gcr.io/otherexample: myregistry.io/mirror-example
  registry.k8s.io: myregistry.io/mirror-example
```

the following replacements would be performed


| Original                         | Will be replaced? | Replacement                                 |
| -------------------------------- | ----------------- | ------------------------------------------- |
| eu.gcr.io/examplefolder/example1 | Yes               | myregistry.io/mirror-example/example1       |
| eu.gcr.io/otherexample/example2  | Yes               | myregistry.io/mirror-example/example2       |
| registry.k8s.io/kube-apiserver        | Yes               | myregistry.io/mirror-example/kube-apiserver |

---

Given the following replacement map
```
registryOverwrite:
  gcr.io: myregistry.io
```

the following replacements would be performed


| Original                         | Will be replaced? | Replacement |
| -------------------------------- | ----------------- | ----------- |
| eu.gcr.io/examplefolder/example1 | No                |             |
| eu.gcr.io/otherexample/example2  | No                |             |
| registry.k8s.io/kube-apiserver        | No                |             |



## Flux configuration to change repository

YAKE includes flux's controllers in a specific version and installs available updates with each release. Due to the way we include flux, unfortunately it can't use the registryOverwrite map to change where the flux images are pulled from and needs it's own instructions to use an internal registry.

In your configuration git you will have a file `flux/yake-base.yaml`, that needs to be changed similar to the following example, where you would change the `newName` parameters to point to your internal registry mirror.

```
apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
kind: Kustomization
metadata:
  name: yake-base
  namespace: flux-system
spec:
  interval: 1m0s
  path: ./
  prune: false
  sourceRef:
    kind: GitRepository
    name: yake
  patches:
    - patch: |-
        apiVersion: kustomize.toolkit.fluxcd.io/v1beta2
        kind: Kustomization
        metadata:
          name: not-used
        spec:
          images:
            - name: ghcr.io/fluxcd/helm-controller
              newName: changeme.internal.mirror/ghcr.io/fluxcd/helm-controller
            - name: ghcr.io/fluxcd/kustomize-controller
              newName: changeme.internal.mirror/ghcr.io/fluxcd/kustomize-controller
            - name: ghcr.io/fluxcd/notification-controller
              newName: changeme.internal.mirror/ghcr.io/fluxcd/notification-controller
            - name: ghcr.io/fluxcd/source-controller
              newName: changeme.internal.mirror/ghcr.io/fluxcd/source-controller
      target:
        kind: Kustomization
        name: flux-system
        namespace: flux-system
```
