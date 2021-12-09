
{{- define "garden.kubeconfig-internal-gardener" -}}
apiVersion: v1
kind: Config
current-context: garden
contexts:
- context:
    cluster: garden
    user: admin
  name: garden
clusters:
- cluster:
    certificate-authority-data: {{ .Values.tls.kubeAPIServer.ca.crt | b64enc }}
    server: https://{{ .Values.apiServer.serviceName }}.{{ .Release.Namespace }}:443
  name: garden
users:
- name: admin
  user:
    client-certificate-data: {{ .Values.tls.admin.crt | b64enc }}
    client-key-data: {{ .Values.tls.admin.key | b64enc }}
{{- end -}}
