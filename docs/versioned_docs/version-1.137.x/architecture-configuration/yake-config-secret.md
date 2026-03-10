---
sidebar_position: 2
---

# The YAKE config secret
Via the `yake-config` secret, some basic parameters for the resulting Gardener installation are configured. In particular, values which should be kept secret such as dnsprovider credentials are set in `yake-config`.
As the `yake-config` secret serves as input values for the `configuration` helm chart (see [architecture](./architecture.md)), the secret is defined as

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: yake-config
  namespace: flux-system
type: Opaque
stringData:
  values.yaml: |
  ...
```

and the configuration needs to be inserted below `stringData.values.yaml`. The configuration options are listed and explained below.

| Field                          | Subfield                         | Subfield                                                                                                       | Description                                                                                                       |
| :----------------------------- | :------------------------------- | :------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `clusterIdentity` <br />string |                                  |                                                                                                                | a unique identifier for your garden cluster                                                                       |
| `dashboard`                    |                                  |                                                                                                                |                                                                                                                   |
|                                | `clientSecret` <br />string      |                                                                                                                | client secret e.g. some value obtained by `openssl rand -hex 20`                                                  |
|                                | `sessionSecret` <br />string     |                                                                                                                | session secret e.g. some value obtained by `openssl rand -hex 20`                                                 |
| `kubeApiServer`                |                                  |                                                                                                                |                                                                                                                   |
|                                | `basicAuthPassword` <br />string |                                                                                                                | basic auth password for kubeapiserver e.g. `openssl rand -hex 20`                                                 |
| `issuer`                       |                                  |                                                                                                                |                                                                                                                   |
|                                | `acme`                           |                                                                                                                |                                                                                                                   |
|                                |                                  | `email` <br />string                                                                                           | Email address used for certificate handlin                                                                        |
|                                |                                  | `server` <br />string                                                                                          | acme server, letsencryp production by default                                                                     |
|                                | `ca`                             |                                                                                                                | ca of the acme server, not needed when using letsencrypt production                                               |
| `domains`                      |                                  |                                                                                                                |                                                                                                                   |
|                                | `global`                         |                                                                                                                | global means used for ingress, gardener defaultDomain and internalDomain                                          |
|                                |                                  | `domain` <br />string                                                                                          | domain for your gardener installation, e.g. the dashboard will appear under dashboard.domain                      |
|                                |                                  | `provider` <br />string                                                                                        | DNS provider for your installation, e.g. azure-dns, aws-route53, openstack-designate etc.                         |
|                                |                                  | `credentials` <br />[dnscredentials](https://github.com/gardener/external-dns-management/tree/master/examples) | DNS provider credential, see [examples](https://github.com/gardener/external-dns-management/tree/master/examples) |
| `registryOverwrite`            |                                  |                                                                                                                | See Guide [Use different container registry](../guides/registryOverwrite.md)                                       |
