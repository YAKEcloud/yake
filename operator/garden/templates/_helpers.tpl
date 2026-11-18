{{- define "garden.domain" -}}
{{- required "domains.global.domain is required" .Values.domains.global.domain -}}
{{- end -}}

{{- define "garden.identityDomain" -}}
{{- if (.Values.domains.identity).domain }}{{ .Values.domains.identity.domain }}{{ else }}identity.{{ include "garden.domain" . }}{{ end -}}
{{- end -}}

{{- define "garden.dashboardDomain" -}}
{{- if (.Values.domains.dashboard).domain }}{{ .Values.domains.dashboard.domain }}{{ else }}dashboard.{{ include "garden.domain" . }}{{ end -}}
{{- end -}}
