#!/usr/bin/env bash
set -euo pipefail

source hack/ci/handy.sh

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
    dashboard:
      clientSecret: ${DASHBOARD_CLIENTSECRET}
      sessionSecret: ${DASHBOARD_SESSIONSECRET}
    kubeApiServer:
      basicAuthPassword: ${KUBEAPISERVER_BASICAUTHPASSWORD}
    gardenlet:
      bootstrapToken:
        id: ${TOKEN_ID}
        secret: ${TOKEN_SECRET}
    
    clusterIdentity: ${SHOOT}

    gardener:
      clusterIP: 10.16.1.1

    admin:
      email: operations@23technologies.cloud
      staticPassword:
        enabled: true
        hash: "$2a$10$2b2cU8CPhOTaGrs1HRQuAueS7JTT5ZHsHSzYiFPm1leZck7Mc8T4W"
        userID: 08a8684b-db88-4b73-90a9-3cd1661f5466

    issuer:
      acme:
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
EOF

flux create source bucket 23ke --endpoint=https://23ketestbed.blob.core.windows.net --bucket-name="$SHOOT-23ke" --secret-ref=azure-blob-storage-key --provider=azure --interval=1m

flux create source bucket 23ke-config --endpoint=https://23ketestbed.blob.core.windows.net --bucket-name="$SHOOT-config" --secret-ref=azure-blob-storage-key --provider=azure --interval=1m

kubectl apply -f hack/ci/flux

echo "Waiting for ks"
kubectl wait kustomization 23ke-base -n flux-system --for=condition=ready --timeout=10m
kubectl wait kustomization 23ke-env -n flux-system --for=condition=ready --timeout=10m
kubectl wait kustomization -A --all --for=condition=ready --timeout=10m
echo "Waiting for helmreleases"
kubectl wait helmrelease -A --all --for=condition=ready --timeout=20m

# Extract apiserver-in-shoot-kubeconfig.yaml
kubectl get secrets -n garden garden-kubeconfig-for-admin -o go-template='{{.data.kubeconfig | base64decode }}' > hack/ci/secrets/apiserver-in-shoot-kubeconfig.yaml

# this is required for the webterminals to work with the internal-seed
kubectl create secret generic hcloud-hel1-0-kubeconfig -n garden --from-file=kubeconfig=hack/ci/secrets/shoot-kubeconfig.yaml --context garden

echo -e "23KE Ready ✅"
