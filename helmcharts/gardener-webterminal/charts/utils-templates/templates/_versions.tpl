{{- define "rbacversion" -}}
rbac.authorization.k8s.io/v1
{{- end -}}

{{- define "deploymentversion" -}}
apps/v1
{{- end -}}

{{- define "webhookadmissionregistration" -}}
admissionregistration.k8s.io/v1
{{- end -}}
