{{- define "image-etcd" -}}
{{- if ((.Values.images).etcd) -}}
{{ .Values.images.etcd }}
{{- else -}}
{{ (index .Values "etcd").image.repository }}:{{ (index .Values "etcd").image.tag }}
{{- end -}}
{{- end -}}

{{- define "image-etcd-backup-restore" -}}
{{- if (and (hasKey .Values "images") (index .Values.images "etcd-backup-restore")) -}}
{{ index .Values.images "etcd-backup-restore" }}
{{- else -}}
{{ (index .Values "etcd-backup-restore").image.repository }}:{{ (index .Values "etcd-backup-restore").image.tag }}
{{- end -}}
{{- end -}}
