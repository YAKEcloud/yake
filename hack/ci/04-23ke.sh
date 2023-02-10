#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh
RCLONE_CONFIG_23KETESTBED_ACCOUNT_BASE64=$(echo -n $RCLONE_CONFIG_23KETESTBED_ACCOUNT|base64 -w0)
RCLONE_CONFIG_23KETESTBED_KEY_BASE64=$(echo -n $RCLONE_CONFIG_23KETESTBED_KEY|base64 -w0)


dumpHr() {
  local helmreleases=$(kubectl get helmreleases -n flux-system | sed 1,1d | awk '{ if($3 != "True") print $1 }' | xargs echo)
  kubectl get hr $helmreleases -n flux-system -o wide
  echo ''
  kubectl get hr $helmreleases -n flux-system -o yaml
}

dumpKs() {
  local kustomizations=$(kubectl get kustomizations -n flux-system | sed 1,1d | awk '{ if($3 != "True") print $1 }' | xargs echo)
  kubectl get kustomizations $kustomizations -n flux-system -o wide
  echo ''
  kubectl get kustomizations $kustomizations -n flux-system -o yaml
}

echo "Installing 23KE"

# Templating 23ke-config.yaml
cat << EOF | kubectl apply -f -
apiVersion: v1
kind: Secret
metadata:
  name: 23ke-config
  namespace: flux-system
type: Opaque
stringData:
  values.yaml: |
    clusterIdentity: ${SHOOT}
    dashboard:
      clientSecret: ${DASHBOARD_CLIENTSECRET}
      sessionSecret: ${DASHBOARD_SESSIONSECRET}
    kubeApiServer:
      basicAuthPassword: ${KUBEAPISERVER_BASICAUTHPASSWORD}
    registryOverwrite:
      eu.gcr.io: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/eu.gcr.io
      registry.k8s.io: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/registry.k8s.io
      quay.io: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/quay.io
      docker.io: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/docker.io
      gcr.io: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/gcr.io
      ghcr.io: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/ghcr.io
      k8s.gcr.io: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/k8s.gcr.io
      mcr.microsoft.com: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/mcr.microsoft.com
      public.ecr.aws: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/public.ecr.aws
      registry.eu-central-1.aliyuncs.com: core.harbor.23ke-run-9e00.23ke-testbed.23t.dev/registry.eu-central-1.aliyuncs.com
    issuer:
      acme:
        email: operations@23technologies.cloud
        server: https://acme-staging-v02.api.letsencrypt.org/directory
      ca: |
        -----BEGIN CERTIFICATE-----
        MIIFmDCCA4CgAwIBAgIQU9C87nMpOIFKYpfvOHFHFDANBgkqhkiG9w0BAQsFADBm
        MQswCQYDVQQGEwJVUzEzMDEGA1UEChMqKFNUQUdJTkcpIEludGVybmV0IFNlY3Vy
        aXR5IFJlc2VhcmNoIEdyb3VwMSIwIAYDVQQDExkoU1RBR0lORykgUHJldGVuZCBQ
        ZWFyIFgxMB4XDTE1MDYwNDExMDQzOFoXDTM1MDYwNDExMDQzOFowZjELMAkGA1UE
        BhMCVVMxMzAxBgNVBAoTKihTVEFHSU5HKSBJbnRlcm5ldCBTZWN1cml0eSBSZXNl
        YXJjaCBHcm91cDEiMCAGA1UEAxMZKFNUQUdJTkcpIFByZXRlbmQgUGVhciBYMTCC
        AiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBALbagEdDTa1QgGBWSYkyMhsc
        ZXENOBaVRTMX1hceJENgsL0Ma49D3MilI4KS38mtkmdF6cPWnL++fgehT0FbRHZg
        jOEr8UAN4jH6omjrbTD++VZneTsMVaGamQmDdFl5g1gYaigkkmx8OiCO68a4QXg4
        wSyn6iDipKP8utsE+x1E28SA75HOYqpdrk4HGxuULvlr03wZGTIf/oRt2/c+dYmD
        oaJhge+GOrLAEQByO7+8+vzOwpNAPEx6LW+crEEZ7eBXih6VP19sTGy3yfqK5tPt
        TdXXCOQMKAp+gCj/VByhmIr+0iNDC540gtvV303WpcbwnkkLYC0Ft2cYUyHtkstO
        fRcRO+K2cZozoSwVPyB8/J9RpcRK3jgnX9lujfwA/pAbP0J2UPQFxmWFRQnFjaq6
        rkqbNEBgLy+kFL1NEsRbvFbKrRi5bYy2lNms2NJPZvdNQbT/2dBZKmJqxHkxCuOQ
        FjhJQNeO+Njm1Z1iATS/3rts2yZlqXKsxQUzN6vNbD8KnXRMEeOXUYvbV4lqfCf8
        mS14WEbSiMy87GB5S9ucSV1XUrlTG5UGcMSZOBcEUpisRPEmQWUOTWIoDQ5FOia/
        GI+Ki523r2ruEmbmG37EBSBXdxIdndqrjy+QVAmCebyDx9eVEGOIpn26bW5LKeru
        mJxa/CFBaKi4bRvmdJRLAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB
        Af8EBTADAQH/MB0GA1UdDgQWBBS182Xy/rAKkh/7PH3zRKCsYyXDFDANBgkqhkiG
        9w0BAQsFAAOCAgEAncDZNytDbrrVe68UT6py1lfF2h6Tm2p8ro42i87WWyP2LK8Y
        nLHC0hvNfWeWmjZQYBQfGC5c7aQRezak+tHLdmrNKHkn5kn+9E9LCjCaEsyIIn2j
        qdHlAkepu/C3KnNtVx5tW07e5bvIjJScwkCDbP3akWQixPpRFAsnP+ULx7k0aO1x
        qAeaAhQ2rgo1F58hcflgqKTXnpPM02intVfiVVkX5GXpJjK5EoQtLceyGOrkxlM/
        sTPq4UrnypmsqSagWV3HcUlYtDinc+nukFk6eR4XkzXBbwKajl0YjztfrCIHOn5Q
        CJL6TERVDbM/aAPly8kJ1sWGLuvvWYzMYgLzDul//rUF10gEMWaXVZV51KpS9DY/
        5CunuvCXmEQJHo7kGcViT7sETn6Jz9KOhvYcXkJ7po6d93A/jy4GKPIPnsKKNEmR
        xUuXY4xRdh45tMJnLTUDdC9FIU0flTeO9/vNpVA8OPU1i14vCz+MU8KX1bV3GXm/
        fxlB7VBBjX9v5oUep0o/j68R/iDlCOM4VVfRa8gX6T2FU7fNdatvGro7uQzIvWof
        gN9WUwCbEMBy/YhBSrXycKA8crgGg3x1mIsopn88JKwmMBa68oS7EHM9w7C4y71M
        7DiA+/9Qdp9RBWJpTS9i/mDnJg1xvo8Xz49mrrgfmcAXTCJqXi24NatI3Oc=
        -----END CERTIFICATE-----
    domains:
      global: # means used for ingress, gardener defaultDomain and internalDomain
        domain: ${SHOOT}.${AZURE_BASE_DOMAIN}
        provider: azure-dns
        credentials:
          tenantID: ${AZURE_TENANT_ID}
          subscriptionID: ${AZURE_SUBSCRIPTION_ID}
          clientID: ${AZURE_SECRET_ID}
          clientSecret: ${AZURE_SECRET_VALUE}

    backups:
      enabled: true
      provider: azure
      region: germanywestcentral
      bucketName: ${BACKUP_BUCKET}
      credentials:
        storageAccount: ${RCLONE_CONFIG_23KETESTBED_ACCOUNT_BASE64}
        storageAccountAccessKey: ${RCLONE_CONFIG_23KETESTBED_KEY_BASE64}
        tenantID: ${AZURE_TENANT_ID}
        subscriptionID: ${AZURE_SUBSCRIPTION_ID}
        clientID: ${AZURE_SECRET_ID}
        clientSecret: ${AZURE_SECRET_VALUE}
EOF


flux create source bucket 23ke --endpoint=https://23ketestbed.blob.core.windows.net --bucket-name="$SHOOT-23ke" --secret-ref=azure-blob-storage-key --provider=azure --interval=1m

flux create source bucket 23ke-config --endpoint=https://23ketestbed.blob.core.windows.net --bucket-name="$SHOOT-config" --secret-ref=azure-blob-storage-key --provider=azure --interval=1m

kubectl apply -f hack/ci/flux

echo "Waiting for Kustomization pre-gardener"
kubectl wait kustomization 23ke-base -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }
kubectl wait kustomization 23ke-env -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }
kubectl wait kustomization 23ke-env-config -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }
kubectl wait kustomization pre-gardener -n flux-system --for=condition=ready --timeout=10m || { dumpKs; exit 1; }


echo "Waiting for Kustomization gardener"
# sleep until hr kube-apiserver appears
while ! kubectl get helmrelease kube-apiserver -n flux-system; do sleep 10; done
# Wait for vgarden kube-apiserver, extract vgarden kubeconfig and upload hosting shoots kubeconfig to vgarden, a secret referenced by internal-gardenlet
kubectl wait helmrelease kube-apiserver -n flux-system --for=condition=ready --timeout=10m || { dumpHr; exit 1; }
# sleep until dnsentry appears and is ready
while ! dnsentryname="$(kubectl get dnsentries -n garden -o name | grep apiserver-ingress-ingress)"; do sleep 1; done
kubectl wait $dnsentryname -n garden --for=jsonpath='{.status.state}'=Ready
# wait for gardener-application so garden namespace exists
kubectl wait helmrelease gardener-application -n flux-system --for=condition=ready --timeout=10m || { dumpHr; exit 1; }
kubectl get secrets -n garden garden-kubeconfig-for-admin -o go-template='{{.data.kubeconfig | base64decode }}' > hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml
kubectl create secret generic hcloud-hel1-0-kubeconfig -n garden --from-file=kubeconfig=hack/ci/secrets/shoot-kubeconfig.yaml --save-config --dry-run=client -o yaml | kubectl --context garden apply -f -

kubectl wait kustomization gardener -n flux-system --for=condition=ready --timeout=10m  || { dumpKs; exit 1; }


echo "Waiting for all KS and HR to be ready"
kubectl wait helmrelease -A --all --for=condition=ready --timeout=10m || { dumpHr; exit 1; }
kubectl wait kustomization -A --all --for=condition=ready --timeout=10m || { dumpKs; exit 1; }


echo -e "23KE Ready ✅"
