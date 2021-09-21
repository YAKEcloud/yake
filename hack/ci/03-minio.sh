#/usr/bin/env bash

source hack/handy.sh

echo -n "Deploying minio..."
# Alter minio template
yq eval 'select(documentIndex == 1) .spec.template.spec.containers[0].env[1].value = env(MINIO_PW)' hack/minio.yaml.tmpl > hack/minio.yaml
yq eval 'select(documentIndex == 3) .metadata.annotations."dns.gardener.cloud/class" = "garden"' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .metadata.annotations."dns.gardener.cloud/dnsnames" = env(MINIO_HOSTNAME)' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .spec.rules[0].host = env(MINIO_HOSTNAME)' -i hack/minio.yaml
yq eval 'select(documentIndex == 3) .spec.tls[0].hosts[0] = env(MINIO_HOSTNAME)' -i hack/minio.yaml

# Install minio
kubectl apply -f hack/minio.yaml > /dev/null || { echo "Minio deployment unsuccessful❌"; exit 1; }

# Remove minio defitnition
rm hack/minio.yaml

# Wait for minio deployment to become ready
kubectl wait --for=condition=available --timeout=1m  deployment minio -n default > /dev/null || { echo "Minio deployment unsuccessful❌" ; exit 1; }
kubectl wait --for=condition=ready --timeout=3m  certificate minio-tls -n default > /dev/null || { echo "Minio deployment unsuccessful, Certificate error ❌"; exit 1; }
echo  -e "\rMinio ready ✅       "
