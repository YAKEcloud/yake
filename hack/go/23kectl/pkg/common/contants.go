package common

const (
	PROVIDER_AWS       = "provider-aws"
	PROVIDER_AZURE     = "provider-azure"
	PROVIDER_GCP       = "provider-gcp"
	PROVIDER_OPENSTACK = "provider-openstack"
	PROVIDER_ALICLOUD  = "provider-alicloud"
)

const (
	DNS_PROVIDER_AWS_ROUTE_53        = "aws-route53"
	DNS_PROVIDER_AZURE_DNS           = "azure-dns"
	DNS_PROVIDER_AZURE_PRIVATE_DNS   = "azure-private-dns"
	DNS_PROVIDER_GOOGLE_CLOUDDNS     = "google-clouddns"
	DNS_PROVIDER_OPENSTACK_DESIGNATE = "openstack-designate"
	DNS_PROVIDER_ALICLOUD_DNS        = "alicloud-dns"
)

var DNS_PROVIDER_TO_PROVIDER = map[string]string{
	DNS_PROVIDER_AWS_ROUTE_53:        PROVIDER_AWS,
	DNS_PROVIDER_AZURE_DNS:           PROVIDER_AZURE,
	DNS_PROVIDER_AZURE_PRIVATE_DNS:   PROVIDER_AZURE,
	DNS_PROVIDER_GOOGLE_CLOUDDNS:     PROVIDER_GCP,
	DNS_PROVIDER_OPENSTACK_DESIGNATE: PROVIDER_OPENSTACK,
	DNS_PROVIDER_ALICLOUD_DNS:        PROVIDER_ALICLOUD,
}

const FLUX_NAMESPACE = "flux-system"
const BASE_23KE_KS_NAME = "23ke-base"
const BASE_ADDONS_23KE_KS_NAME = "23ke-base-addons"
const CONFIG_KS_NAME = "23ke-config"
const CONFIG_23KE_GITREPO_NAME = "23ke-config"
const CONFIG_23KE_GITREPO_KEY = "23ke-config-key"

const BUCKET_SECRET_NAME = "bucket-credentials"
const BUCKET_NAME = "23ke"
