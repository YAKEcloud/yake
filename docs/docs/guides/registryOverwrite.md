---
sidebar_position: 2
---

# Use custom container registry

23KE in it's default configuration will use container images from public container registries, whichever the developers of the respective component decided to publish to "upstream". Larger installations could run into rate limits of specific registries or have other reasons not to use those registries directly, and pull the same images from a registry mirror instead.

For environments that prefer and can provide an internal registry, 23KE has a config switch to easily reconfigure all components to pull from this registry.

The setup and mirroring procedure of such an internal registry mirror is not covered in this guide. We use and recommend harbors [proxy cache](https://goharbor.io/docs/2.1.0/administration/configure-proxy-cache/) mode, as it won't require to identify, pull and push each single image in each version/tag beforehand, which will change frequently and even with patch updates.

This feature only affects components deployed by 23KE and Gardener, from the basecluster down to each shoot node (f.e. `calico-node` pods), but will not alter anything else deployed to a shoot or custom deployments on the basecluster.

## Full example

The registryOverwrite configuration option in 23ke-config allows you to specify replacement pairs as "originalURL: replacementURL", and will then look for and replace all registries that start with `originalURL` and replace that part of the full path with `replacementURL`. If you only want to mirror certain upstream registries, for example docker.io because of rate limits, you can only specify that and everything else will be left unchanged. To pull all containers currently used in 23KE from your internal registry you need all of the following overwrites:

```
registryOverwrite:
  eu.gcr.io: myregistry.io/eu.gcr.io
  registry.k8s.io: myregistry.io/registry.k8s.io
  quay.io: myregistry.io/quay.io
  docker.io: myregistry.io/docker.io
  gcr.io: myregistry.io/gcr.io
  ghcr.io: myregistry.io/ghcr.io
  k8s.gcr.io: myregistry.io/k8s.gcr.io
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
| k8s.gcr.io/kube-apiserver        | No                |                                                |

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
| k8s.gcr.io/kube-apiserver        | No                |                                       |

---

Given the following replacement map
```
registryOverwrite:
  eu.gcr.io/examplefolder: myregistry.io/mirror-example
  eu.gcr.io/otherexample: myregistry.io/mirror-example
  k8s.gcr.io: myregistry.io/mirror-example
```

the following replacements would be performed


| Original                         | Will be replaced? | Replacement                                 |
| -------------------------------- | ----------------- | ------------------------------------------- |
| eu.gcr.io/examplefolder/example1 | Yes               | myregistry.io/mirror-example/example1       |
| eu.gcr.io/otherexample/example2  | Yes               | myregistry.io/mirror-example/example2       |
| k8s.gcr.io/kube-apiserver        | Yes               | myregistry.io/mirror-example/kube-apiserver |

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
| k8s.gcr.io/kube-apiserver        | No                |             |
