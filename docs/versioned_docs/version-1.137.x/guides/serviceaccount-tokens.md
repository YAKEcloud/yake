---
sidebar_position: 50
---

# ServiceAccounts and Tokens

For automated operations, you can create a ServiceAccount in either:

* The Gardener API to:
  * Create, delete, modify Shoots
  * Create new admin kubeconfigs for Shoots
* A specific Shoot:
  * With fine-grained RBAC for certain namespaces in a cluster

## ServiceAccount in the Gardener API

The easiest way to create a ServiceAccount for the Gardener API is via the Gardener Dashboard in the Members Page of a Project. You can then download a kubeconfig for a ServiceAccount to use it with kubectl, with a default token duration of 30 days.

A ServiceAccount needs to be assigned Roles to read and write certain resources. A ServiceAccount with the Service Account Manager Role can create new tokens for itself with longer durations, which we can use to automate prolonged access. This example would generate a new token and save it to the existing kubeconfig file, which could be done periodically (until access gets revoked).

  ```bash
export KUBECONFIG=from-dashboard-kubeconfig.yaml
NEW_TOKEN="$(kubectl create token my-serviceaccount --duration=48h)"
kubectl config set-credentials my-serviceaccount --token=$NEW_TOKEN
```

There is currently no explicit limit for the maximum allowed token duration. Please be aware that this could change in the future, and the API could return a token with a shorter duration than requested.

## ServiceAccount in the Shoot

The Gardener API will only provide certificate-based Admin (full Shoot access) or Viewer (read-only access) kubeconfigs for a Shoot. Such kubeconfig files have an embedded client certificate with a set expiration date and cannot be revoked earlier than that, other than rotating the entire cluster Certificate Authority. It is not possible to create fine-grained RBAC to limit or extend the permissions of such a kubeconfig.

This is why you should only use ServiceAccounts for automated operations of a cluster. ServiceAccounts can be deleted, audited, and have the exact permissions required. Here's how to create a ServiceAccount in the default Namespace, create a Token with a certain duration, and create a new kubeconfig file that contains that token:

   ```bash
kubectl create serviceaccount my-service-account

CLUSTER_NAME=$(kubectl config view --minify -o jsonpath='{.clusters[0].name}')
CLUSTER_SERVER=$(kubectl config view --minify -o jsonpath='{.clusters[0].cluster.server}')
CA_CERT=$(kubectl config view --minify --raw -o jsonpath='{.clusters[0].cluster.certificate-authority-data}')
TOKEN=$(kubectl create token my-service-account --duration=48h)

cat << EOF > sa-kubeconfig.yaml
apiVersion: v1
kind: Config
clusters:
- name: ${CLUSTER_NAME}
  cluster:
    certificate-authority-data: ${CA_CERT}
    server: ${CLUSTER_SERVER}
contexts:
- name: my-service-account@${CLUSTER_NAME}
  context:
    cluster: ${CLUSTER_NAME}
    user: my-service-account
current-context: my-service-account@${CLUSTER_NAME}
users:
- name: my-service-account
  user:
    token: ${TOKEN}
EOF

export KUBECONFIG=sa-kubeconfig.yaml
kubectl auth can-i --list
...
```

You then need to create [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) to allow that ServiceAccount certain operations.
