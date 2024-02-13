---
hide_table_of_contents: true
---

# Release Notes next

## Yake release notes and upgrade guide

## Related upstream release notes / changelogs


<details>
<summary><b>Update external-dns-management to <code>0.18.0</code></b></summary>

# [gardener/external-dns-management]

## ✨ New Features

- `[USER]` The Istio resource `Gateway` can now be annotated with `dns.gardener.cloud/dnsnames='*'` to enable the automatic creation of `DNSEntries` for domain names extracted from hosts fields in this resource or related `VirtualServices` resources.  
  The `Gateway` and `HTTPRoute` resources from the Gateway API are supported in a similar way. by @MartinWeindel [#354]

## Docker Images
- dns-controller-manager: `europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.0`


</details>
