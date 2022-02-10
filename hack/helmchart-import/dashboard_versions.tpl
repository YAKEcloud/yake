{{/*
This file should only be symlinked! This text should appear to be
modified only for a file in charts/_versions.tpl
*/}}

{{- define "rbacversion" -}}
rbac.authorization.k8s.io/v1
{{- end -}}

{{- define "deploymentversion" -}}
apps/v1
{{- end -}}

{{- define "ingressversion" -}}
{{- if semverCompare ">= 1.19-0" .Capabilities.KubeVersion.GitVersion -}}
networking.k8s.io/v1
{{- else -}}
networking.k8s.io/v1beta1
{{- end -}}
{{- end -}}
