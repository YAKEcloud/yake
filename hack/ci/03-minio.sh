#/usr/bin/env bash

source hack/handy.sh

echo -n "Deploying minio..."
# Alter minio template
yq eval 'select(documentIndex == 2) .spec.template.spec.containers[0].env[1].value = env(MINIO_PW)' hack/minio.yaml.tmpl > hack/minio.yaml
yq eval 'select(documentIndex == 4) .metadata.annotations."dns.gardener.cloud/class" = "garden"' -i hack/minio.yaml
yq eval 'select(documentIndex == 4) .metadata.annotations."dns.gardener.cloud/dnsnames" = env(MINIO_HOSTNAME)' -i hack/minio.yaml
yq eval 'select(documentIndex == 4) .spec.rules[0].host = env(MINIO_HOSTNAME)' -i hack/minio.yaml
yq eval 'select(documentIndex == 4) .spec.tls[0].hosts[0] = env(MINIO_HOSTNAME)' -i hack/minio.yaml

# Install minio
kubectl apply -f hack/minio.yaml > /tmp/stdout 2> /tmp/stderr || { echo -e "\rMinio deployment unsuccessful❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }

# Remove minio defitnition
rm hack/minio.yaml

# Wait for minio deployment to become ready
kubectl wait --for=condition=available --timeout=5m deployment minio -n minio > /tmp/stdout 2> /tmp/stderr || { echo -e "\rMinio deployment unsuccessful ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
kubectl wait --for=condition=ready --timeout=5m certificate minio-tls -n minio > /tmp/stdout 2> /tmp/stderr || { echo -e "\rMinio deployment unsuccessful, Certificate error ❌"; echo "STDOUT":; cat /tmp/stdout; echo "STDERR:"; cat /tmp/stderr; exit 1; }
echo -e "\rMinio ready          ✅       "
