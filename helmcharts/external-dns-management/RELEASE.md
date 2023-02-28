# [external-dns-management]
## ✨ New Features
* *[USER]* Routing policies `latency`, `geolocation`, `ip-based`, `failover` are supported now for the AWS Route53 provider. ([gardener/external-dns-management#295](https://github.com/gardener/external-dns-management/pull/295), [@MartinWeindel](https://github.com/MartinWeindel))
  * For details see https://github.com/gardener/external-dns-management/tree/master/docs/aws-route53#routing-policy
* *[USER]* Routing policy `geolocation` is supported now for Google CloudDNS provider. ([gardener/external-dns-management#295](https://github.com/gardener/external-dns-management/pull/295), [@MartinWeindel](https://github.com/MartinWeindel))
  * For details see https://github.com/gardener/external-dns-management/tree/master/docs/google-cloud-dns#routing-policy
## 🏃 Others
* *[OPERATOR]* Update builder image from `golang:1.19.4` to `golang:1.19.5` ([gardener/external-dns-management#296](https://github.com/gardener/external-dns-management/pull/296), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* Update controller-manager-library dependency to `c7c57096a522` ([gardener/external-dns-management#294](https://github.com/gardener/external-dns-management/pull/294), [@MartinWeindel](https://github.com/MartinWeindel))
* *[OPERATOR]* For the AWS Route 53 provider, the list of the canonical hosted zones needed for alias targets has been extended to include the regions `ap-south-2`, `ap-southeast-3`, `eu-south-2`, and `me-central-1`. ([gardener/external-dns-management#295](https://github.com/gardener/external-dns-management/pull/295), [@MartinWeindel](https://github.com/MartinWeindel))