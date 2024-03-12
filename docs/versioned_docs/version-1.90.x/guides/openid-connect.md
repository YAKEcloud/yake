---
sidebar_position: 40
---

# Authentication with OpenID Connect

YAKE and Gardener do not have their own user authentication and should be connected to an external authentication provider of your choice. Part of our setup is the *[Dex](https://dexidp.io/)* OpenID service which can be connected via [connectors](https://dexidp.io/docs/connectors/) to many authentication providers and protocols like

* [OpenID Connect](https://dexidp.io/docs/connectors/oidc/)
* [SAML](https://dexidp.io/docs/connectors/saml/)
* [LDAP](https://dexidp.io/docs/connectors/ldap/)
* [GitHub](https://dexidp.io/docs/connectors/github/)

*Authentication* means checking if the user credentials are valid, most commonly username + password and maybe an OTP token. This part is happening in the external authentication provider, which also is responsible for user creation, password changes, password policies, locking/deleting users etc.

*Authorization* means deciding what an user is allowed to do and see. This part is always done *inside* of Gardener by adding members to projects. Group membership or other information from the authentication provider is not used for authorization.

## Static users

The default YAKE configuration has created a user in Dex with a static password, and assiged admin permissions to that user. This is just to get started or for very minimal setups. While not recommended, you could add more users with static passwords in the same manner and add them as members to projects. We advise to remove that configuration after you have configured a centralised authentication provider. To do so, remove the `staticPasswords` section from `config/identity-values.yaml` and adjust `garden-content/admin-clusterrolebinding.yaml`.

## Identity component configuration

The identity component in YAKE (Dex) is configured via the `identity-values` secret in the cluster. Our GitOps workflow will manage this secret via `config/identity-values.yaml` in git.

Shown here is an example configuration with OpenID connect. You need to refer to the Dex documentation for [connectors](https://dexidp.io/docs/connectors/) for a complete list of options.

The YAKE identity component will need to be added as a new *client* in your OpenID provider first, which will allow you to fill the values for `clientID` and `clientSecret`.

```
apiVersion: v1
kind: Secret
metadata:
  name: identity-values
  namespace: flux-system
type: Opaque
stringData:
  values.yaml: |
    connectors:
    - type: oidc
      id: iam
      name: Company IAM
      config:
        issuer: https://auth.example.org
        clientID: 811910b8-91a3-11ed-aa17-f7f643bfc07a
        clientSecret: faoli3koo8keix0Cuicae2phi5aaPaed
        redirectURI: https://identity.gardener.example.org/oidc/callback
```
