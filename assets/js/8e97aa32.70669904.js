"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{99522:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=n(85893),d=n(11151);const i={hide_table_of_contents:!0},o="Release Notes next",c={id:"next",title:"Release Notes next",description:"Yake release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},l={},a=[{value:"Yake release notes and upgrade guide",id:"yake-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"Docker Images",id:"docker-images-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"Docker Images",id:"docker-images-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"Docker Images",id:"docker-images-3",level:2},{value:"\ud83c\udfc3 Others",id:"-others-4",level:2},{value:"Docker Images",id:"docker-images-4",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-3",level:2},{value:"\ud83c\udfc3 Others",id:"-others-5",level:2},{value:"Docker Images",id:"docker-images-5",level:2},{value:"\ud83c\udfc3 Others",id:"-others-6",level:2},{value:"Docker Images",id:"docker-images-6",level:2},{value:"\ud83c\udfc3 Others",id:"-others-7",level:2},{value:"\u2728 New Features",id:"-new-features",level:2},{value:"\ud83c\udfc3 Others",id:"-others-8",level:2},{value:"Docker Images",id:"docker-images-7",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-4",level:2},{value:"Docker Images",id:"docker-images-8",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-5",level:2},{value:"Docker Images",id:"docker-images-9",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-6",level:2},{value:"\ud83c\udfc3 Others",id:"-others-9",level:2},{value:"\ud83c\udfc3 Others",id:"-others-10",level:2},{value:"Docker Images",id:"docker-images-10",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-1",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy",level:2},{value:"\u2728 New Features",id:"-new-features-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-7",level:2},{value:"\ud83c\udfc3 Others",id:"-others-11",level:2},{value:"\ud83c\udfc3 Others",id:"-others-12",level:2},{value:"Docker Images",id:"docker-images-11",level:2},{value:"\ud83c\udfc3 Others",id:"-others-13",level:2},{value:"Docker Images",id:"docker-images-12",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-8",level:2},{value:"Docker Images",id:"docker-images-13",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-9",level:2},{value:"Docker Images",id:"docker-images-14",level:2}];function t(e){const r={a:"a",b:"b",br:"br",code:"code",details:"details",h1:"h1",h2:"h2",li:"li",summary:"summary",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"release-notes-next",children:"Release Notes next"}),"\n",(0,s.jsx)(r.h2,{id:"yake-release-notes-and-upgrade-guide",children:"Yake release notes and upgrade guide"}),"\n",(0,s.jsx)(r.h2,{id:"related-upstream-release-notes--changelogs",children:"Related upstream release notes / changelogs"}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update external-dns-management to ",(0,s.jsx)(r.code,{children:"0.18.5"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenerexternal-dns-management",children:"[gardener/external-dns-management]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"}),' As AWS "us-gov" zones do not support alias target records, they are excluded from the list of canonical hosted zones used to decide if ',(0,s.jsx)(r.code,{children:"ALIAS"})," records are created instead of ",(0,s.jsx)(r.code,{children:"CNAME"})," records. by @MartinWeindel [#365]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," Keep stale entries of other providers of the same zone untouched if all providers but one have invalid credentials and last valid provider is removed. by @MartinWeindel [#364]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-others",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Update golang from ",(0,s.jsx)(r.code,{children:"1.21.6"})," to ",(0,s.jsx)(r.code,{children:"1.22.2"})," by @MartinWeindel [#366]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["dns-controller-manager: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.18.5"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update shoot-dns-service to ",(0,s.jsx)(r.code,{children:"1.47.0"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenerexternal-dns-management-1",children:"[gardener/external-dns-management]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-1",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," Keep stale entries of other providers of the same zone untouched if all providers but one have invalid credentials and last valid provider is removed. by @MartinWeindel [gardener/external-dns-management#364]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"}),' As AWS "us-gov" zones do not support alias target records, they are excluded from the list of canonical hosted zones used to decide if ',(0,s.jsx)(r.code,{children:"ALIAS"})," records are created instead of ",(0,s.jsx)(r.code,{children:"CNAME"})," records. by @MartinWeindel [gardener/external-dns-management#365]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-others-1",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Update golang from ",(0,s.jsx)(r.code,{children:"1.21.6"})," to ",(0,s.jsx)(r.code,{children:"1.22.2"})," by @MartinWeindel [gardener/external-dns-management#366]"]}),"\n"]}),"\n",(0,s.jsx)(r.h1,{id:"gardenergardener-extension-shoot-dns-service",children:"[gardener/gardener-extension-shoot-dns-service]"}),"\n",(0,s.jsx)(r.h2,{id:"-others-2",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Bumps github.com/gardener/gardener from 1.91.0 to 1.92.0. by @dependabot[bot] [#318]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-1",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["gardener-extension-admission-shoot-dns-service: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.47.0"})]}),"\n",(0,s.jsxs)(r.li,{children:["gardener-extension-shoot-dns-service: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.47.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update shoot-dns-service to ",(0,s.jsx)(r.code,{children:"1.47.1"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenergardener-extension-shoot-dns-service-1",children:"[gardener/gardener-extension-shoot-dns-service]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-2",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," fix regression bug \"secret name is not defined as named resource references at 'spec.resources'\" introduced with #320 by ",(0,s.jsx)(r.code,{children:"Martin Weindel <martin.weindel@sap.com>"})," [$490d837737a4f524b83b8997a18f31e860f23fc3]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-2",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["gardener-extension-admission-shoot-dns-service: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-shoot-dns-service:v1.47.1"})]}),"\n",(0,s.jsxs)(r.li,{children:["gardener-extension-shoot-dns-service: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-dns-service:v1.47.1"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update gardener-metrics-exporter to ",(0,s.jsx)(r.code,{children:"0.30.0"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenergardener-metrics-exporter",children:"[gardener/gardener-metrics-exporter]"}),"\n",(0,s.jsx)(r.h2,{id:"-others-3",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," The costObject for workerless shoots is now determined correctly. by @vicwicker [#103]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Add garden_version to the garden_shoot_info metric by @Kumm-Kai [#101]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Rename ",(0,s.jsx)(r.code,{children:"garden_version"})," label to ",(0,s.jsx)(r.code,{children:"gardener_version"})," on ",(0,s.jsx)(r.code,{children:"garden_shoot_info"})," metric. by @rickardsjp [#102]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-3",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["metrics-exporter: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.30.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update gardener-metrics-exporter to ",(0,s.jsx)(r.code,{children:"0.30.0"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenergardener-metrics-exporter-1",children:"[gardener/gardener-metrics-exporter]"}),"\n",(0,s.jsx)(r.h2,{id:"-others-4",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," The costObject for workerless shoots is now determined correctly. by @vicwicker [#103]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Add garden_version to the garden_shoot_info metric by @Kumm-Kai [#101]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Rename ",(0,s.jsx)(r.code,{children:"garden_version"})," label to ",(0,s.jsx)(r.code,{children:"gardener_version"})," on ",(0,s.jsx)(r.code,{children:"garden_shoot_info"})," metric. by @rickardsjp [#102]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-4",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["metrics-exporter: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/metrics-exporter:0.30.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update provider-aws to ",(0,s.jsx)(r.code,{children:"1.54.1"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenergardener-extension-provider-aws",children:"[gardener/gardener-extension-provider-aws]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-3",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"}),' DNSRecord controller will not create ALIAS DNS records for AWS "us-gov" zones anymore. by @AndreasBurger [#930]']}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-others-5",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Bump github.com/gardener/external-dns-management from 0.18.4 to 0.18.5. by @AndreasBurger [#930]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-5",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["gardener-extension-admission-aws: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-aws:v1.54.1"})]}),"\n",(0,s.jsxs)(r.li,{children:["gardener-extension-provider-aws: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-aws:v1.54.1"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update cert-management to ",(0,s.jsx)(r.code,{children:"0.14.1"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenercert-management",children:"[gardener/cert-management]"}),"\n",(0,s.jsx)(r.h2,{id:"-others-6",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Fix cluster configuration for new source controllers ",(0,s.jsx)(r.code,{children:"istio-gateways-dns"})," and ",(0,s.jsx)(r.code,{children:"k8s-gateways-dns"}),". by @MartinWeindel [#175]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-6",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["cert-management: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.14.1"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update shoot-cert-service to ",(0,s.jsx)(r.code,{children:"1.43.0"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenergardener-extension-shoot-cert-service",children:"[gardener/gardener-extension-shoot-cert-service]"}),"\n",(0,s.jsx)(r.h2,{id:"-others-7",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Bumps github.com/gardener/gardener from 1.91.0 to 1.92.0. by @dependabot[bot] [#249]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Bumps golang from 1.22.1 to 1.22.2. by @dependabot[bot] [#247]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Bumps github.com/gardener/gardener from 1.92.0 to 1.93.0. by @dependabot[bot] [#251]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," The defaults for the private key of new certificates have been changed from ",(0,s.jsx)(r.code,{children:"RSA 2048bit"})," to ",(0,s.jsx)(r.code,{children:"RSA 3072bit"}),". Existing certificates will make use of these new defaults when they are renewed. by @gardener-robot-ci-3 [#253]"]}),"\n"]}),"\n",(0,s.jsx)(r.h1,{id:"gardenercert-management-1",children:"[gardener/cert-management]"}),"\n",(0,s.jsx)(r.h2,{id:"-new-features",children:"\u2728 New Features"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," The Istio resource ",(0,s.jsx)(r.code,{children:"Gateway"})," can now be annotated with ",(0,s.jsx)(r.code,{children:"cert.gardener.cloud/purpose=managed"})," to enable the automatic creation of ",(0,s.jsx)(r.code,{children:"Certificate"})," resources for domain names extracted from hosts fields in this resource or related ",(0,s.jsx)(r.code,{children:"VirtualServices"})," resources.",(0,s.jsx)(r.br,{}),"\nThe ",(0,s.jsx)(r.code,{children:"Gateway"})," and ",(0,s.jsx)(r.code,{children:"HTTPRoute"})," resources from the Gateway API are supported in a similar way. by @MartinWeindel [gardener/cert-management#174]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-others-8",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Fix cluster configuration for new source controllers ",(0,s.jsx)(r.code,{children:"istio-gateways-dns"})," and ",(0,s.jsx)(r.code,{children:"k8s-gateways-dns"}),". by @MartinWeindel [gardener/cert-management#175]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Support deployment specific default values for private key algorithm and size with the new command line options ",(0,s.jsx)(r.code,{children:"--default-private-key-algorithm"}),", ",(0,s.jsx)(r.code,{children:"--default-rsa-private-key-size"}),", ",(0,s.jsx)(r.code,{children:"--default-ecdsa-private-key-size"})," by @MartinWeindel [gardener/cert-management#171]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-7",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["gardener-extension-shoot-cert-service: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.43.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update dashboard to ",(0,s.jsx)(r.code,{children:"1.74.1"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenerdashboard",children:"[gardener/dashboard]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-4",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," Ticket titles start with ",(0,s.jsx)(r.code,{children:"[<projectName>/<shootName>]"}),", unless overridden by a Gardener administrator's configuration. by @petersutter [#1830]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-8",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["dashboard: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.74.1"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update dashboard to ",(0,s.jsx)(r.code,{children:"1.74.1"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenerdashboard-1",children:"[gardener/dashboard]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-5",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," Ticket titles start with ",(0,s.jsx)(r.code,{children:"[<projectName>/<shootName>]"}),", unless overridden by a Gardener administrator's configuration. by @petersutter [#1830]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-9",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["dashboard: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/dashboard:1.74.1"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update provider-alicloud to ",(0,s.jsx)(r.code,{children:"1.52.0"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenergardener-extension-provider-alicloud",children:"[gardener/gardener-extension-provider-alicloud]"}),"\n",(0,s.jsx)(r.h2,{id:"\ufe0f-breaking-changes",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," ",(0,s.jsx)(r.code,{children:"provider-alicloud"})," no longer supports Shoots with \u041aubernetes version == 1.24. by @shafeeqes [#678]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-6",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[DEVELOPER]"})," ",(0,s.jsx)(r.code,{children:"source-"})," prefix of ",(0,s.jsx)(r.code,{children:"BackupEntry"})," name is being ignored when performing entry deletion by @Kostov6 [#698]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-others-9",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Update csi-plugin-alicloud to v1.30.1-242df8a-aliyun by @kevin-lacoo [#709]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," The code related to ",(0,s.jsx)(r.code,{children:"machine-controller-manager"})," management has been cleaned up because ",(0,s.jsx)(r.code,{children:"gardenlet"})," is responsible for it since ",(0,s.jsx)(r.code,{children:"gardener/gardener@v1.83"}),". by @kevin-lacoo [#706]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," add os information as labels in machine class objects. by @tedteng [#703]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[DEVELOPER]"})," Add GetBucketInfo to OSS client interface. by @MartinWeindel [#694]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[DEPENDENCY]"})," The following golang dependencies have been upgraded :\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"gardener/gardener"}),": ",(0,s.jsx)(r.code,{children:"v1.86.0"}),"->",(0,s.jsx)(r.code,{children:"v1.91.1"})]}),"\n",(0,s.jsx)(r.li,{children:"k8s.io/* : v0.28.3 -> v0.29.3"}),"\n",(0,s.jsx)(r.li,{children:"sigs.k8s.io/controller-runtime: v0.16.3-> v0.17.2 by @shafeeqes [#704]"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h1,{id:"gardenerterraformer",children:"[gardener/terraformer]"}),"\n",(0,s.jsx)(r.h2,{id:"-others-10",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Update go -> v1.21.5 by @kon-angelo [gardener/terraformer#146]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Update alpine -> v1.29.0 by @kon-angelo [gardener/terraformer#146]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-10",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["gardener-extension-admission-alicloud: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-alicloud:v1.52.0"})]}),"\n",(0,s.jsxs)(r.li,{children:["gardener-extension-provider-alicloud: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-alicloud:v1.52.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update provider-gcp to ",(0,s.jsx)(r.code,{children:"1.35.0"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenergardener-extension-provider-gcp",children:"[gardener/gardener-extension-provider-gcp]"}),"\n",(0,s.jsx)(r.h2,{id:"\ufe0f-breaking-changes-1",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," [csi-snapshotter] Enable prevent-volume-mode-conversion feature flag by default. Volume mode change can still be triggered with the respective annotations. You can read more in the ",(0,s.jsx)(r.a,{href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-storage/3141-prevent-volume-mode-conversion",children:"KEP"})," by @kon-angelo [#719]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," ",(0,s.jsx)(r.code,{children:"provider-gcp"})," no longer supports Shoots with \u041aubernetes version == 1.24. by @shafeeqes [#677]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-noteworthy",children:"\ud83d\udcf0 Noteworthy"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," Added support for the ",(0,s.jsx)(r.code,{children:"EnableDynamicPortAllocation"})," flag and the related configuration of the related ",(0,s.jsx)(r.code,{children:"MaxPortsPerVM"})," value on cloudNATs.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.code,{children:"IcmpIdleTimeoutSec"}),", ",(0,s.jsx)(r.code,{children:"TcpEstablishedIdleTimeoutSec"}),", ",(0,s.jsx)(r.code,{children:"TcpTimeWaitTimeoutSec"}),", ",(0,s.jsx)(r.code,{children:"TcpTransitoryIdleTimeoutSec"}),", and ",(0,s.jsx)(r.code,{children:"UdpIdleTimeoutSec"})," can now be configured on cloudNATs.  by @AndreasBurger [#706]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," ",(0,s.jsx)(r.code,{children:"DisableGardenerServiceAccountCreation"})," feature gate has been promoted to beta and therefore is enabled by default. by @AndreasBurger [#711]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-new-features-1",children:"\u2728 New Features"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[DEVELOPER]"})," Dependency update to ",(0,s.jsx)(r.code,{children:"github.com/gardener/gardener@v1.90.4"}),". by @oliver-goetz [#714]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-7",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[DEVELOPER]"})," ",(0,s.jsx)(r.code,{children:"source-"})," prefix of ",(0,s.jsx)(r.code,{children:"BackupEntry"})," name is being ignored when performing entry deletion by @Kostov6 [#710]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-others-11",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," [infrastructure] General stability flow reconciliation improvements. by @kon-angelo [#715]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," add os information as labels in machine class objects. by @tedteng [#689]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," NodeGroupAutoscalingOptions can now be specified per worker group via the worker through the field ",(0,s.jsx)(r.code,{children:"worker.spec.pools.clusterAutoscaler"})," by @aaronfern [#733]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," An error text which better indicates the reason for the failure is displayed when a user tries to create a ",(0,s.jsx)(r.code,{children:"SecretBinding"})," resource which references a ",(0,s.jsx)(r.code,{children:"Secret"})," with a ",(0,s.jsx)(r.code,{children:"serviceaccount.json"})," field in invalid json format. by @plkokanov [#723]"]}),"\n"]}),"\n",(0,s.jsx)(r.h1,{id:"gardenerterraformer-1",children:"[gardener/terraformer]"}),"\n",(0,s.jsx)(r.h2,{id:"-others-12",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Update go -> v1.21.5 by @kon-angelo [gardener/terraformer#146]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Update alpine -> v1.29.0 by @kon-angelo [gardener/terraformer#146]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-11",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["gardener-extension-admission-gcp: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-gcp:v1.35.0"})]}),"\n",(0,s.jsxs)(r.li,{children:["gardener-extension-provider-gcp: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-gcp:v1.35.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update provider-azure to ",(0,s.jsx)(r.code,{children:"1.42.3"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenergardener-extension-provider-azure",children:"[gardener/gardener-extension-provider-azure]"}),"\n",(0,s.jsx)(r.h2,{id:"-others-13",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," Fix a bug where the terraform-provider-azure would not properly delete shoot resource groups. The infrastructure-controller will issue an additional delete operation for the shoot's resource group. by @kon-angelo [#842]"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[OPERATOR]"})," The extension will now try to delete empty resource groups on infrastructure creation after an unsuccessful terraform-apply operation.",(0,s.jsx)(r.br,{}),"\nA resource group may not be ready for some time after a successful create call returns. The azurerm terraform-provider on resource group does not respect that and the GET call may result in a NotFound error creating a deadlock. The extension will try to workaround this by deleting empty resource groups under the condition that this is a Create operation. by @AndreasBurger [#844]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-12",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["gardener-extension-admission-azure: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/admission-azure:v1.42.3"})]}),"\n",(0,s.jsxs)(r.li,{children:["gardener-extension-provider-azure: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/provider-azure:v1.42.3"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update cert-management to ",(0,s.jsx)(r.code,{children:"0.14.2"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenercert-management-2",children:"[gardener/cert-management]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-8",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," Fix regression for annotations on ingress resources: ",(0,s.jsx)(r.code,{children:"dns.gardener.cloud/dnsnames"})," annotation must be ignored. by @MartinWeindel [#176]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-13",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["cert-management: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/cert-controller-manager:v0.14.2"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update shoot-cert-service to ",(0,s.jsx)(r.code,{children:"1.43.1"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardenercert-management-3",children:"[gardener/cert-management]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-9",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"[USER]"})," Fix regression for annotations on ingress resources: ",(0,s.jsx)(r.code,{children:"dns.gardener.cloud/dnsnames"})," annotation must be ignored. by @MartinWeindel [gardener/cert-management@1dafe3aaf6ac378167b28b96639676b0390ef550]"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-14",children:"Docker Images"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["gardener-extension-shoot-cert-service: ",(0,s.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/extensions/shoot-cert-service:v1.43.1"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>o});var s=n(67294);const d={},i=s.createContext(d);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);