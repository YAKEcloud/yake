"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32816],{25136:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var i=r(85893),s=r(11151);const d={hide_table_of_contents:!0},a="Release Notes v1.71",t={id:"v1.71",title:"Release Notes v1.71",description:"23KE release notes and upgrade guide",source:"@site/release-notes/v1.71.md",sourceDirName:".",slug:"/v1.71",permalink:"/release-notes/v1.71",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Release Notes v1.72",permalink:"/release-notes/v1.72"},next:{title:"Release Notes v1.70",permalink:"/release-notes/v1.70"}},l={},o=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83c\udfc3 Others",id:"-others-4",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"\ud83d\udcd6 Documentation",id:"-documentation",level:2},{value:"\ud83c\udfc3 Others",id:"-others-5",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-1",level:2},{value:"\u2728 New Features",id:"-new-features",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83d\udcd6 Documentation",id:"-documentation-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-6",level:2},{value:"\ud83c\udfc3 Others",id:"-others-7",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83c\udfc3 Others",id:"-others-8",level:2},{value:"\ud83c\udfc3 Others",id:"-others-9",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-3",level:2}];function h(e){const n={a:"a",b:"b",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"release-notes-v171",children:"Release Notes v1.71"})}),"\n",(0,i.jsx)(n.h2,{id:"23ke-release-notes-and-upgrade-guide",children:"23KE release notes and upgrade guide"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Before upgrade\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The 23KE configuration chart was unified and moved, so resources need to be annotated to get adopted by the new chart name. To prevent the old charts from deleting resources when they get removed, they need to get suspended first."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"flux suspend hr pre-gardener-configuration\nflux suspend hr gardener-configuration\nkubectl -n flux-system annotate Secret -l helm.toolkit.fluxcd.io/name=pre-gardener-configuration meta.helm.sh/release-name=configuration --overwrite\nkubectl -n flux-system annotate Secret -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=configuration --overwrite\nkubectl -n garden annotate Secret -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\nkubectl -n garden annotate certificates.cert.gardener.cloud -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\nkubectl -n flux-system annotate Certificate -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\nkubectl -n flux-system annotate Issuer -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\n"})}),"\nIf something goes wrong or the charts weren't suspended, other charts might complain about their -base-values Secret missing. To remedy,suspend and then resume the new ",(0,i.jsx)(n.code,{children:"configuration"})," HelmRelease so it re-generates those Secrets."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-upstream-release-notes--changelogs",children:"Related upstream release notes / changelogs"}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update provider-azure to ",(0,i.jsx)(n.code,{children:"1.35.3"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener-extension-provider-azure",children:"[gardener-extension-provider-azure]"}),"\n",(0,i.jsx)(n.h2,{id:"-others",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Remove the error code check from ",(0,i.jsx)(n.code,{children:"NodesChecker"})," to prevent nil pointer panic. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-provider-azure/pull/684",children:"gardener/gardener-extension-provider-azure#684"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/acumino",children:"@acumino"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update provider-aws to ",(0,i.jsx)(n.code,{children:"1.43.2"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener-extension-provider-aws",children:"[gardener-extension-provider-aws]"}),"\n",(0,i.jsx)(n.h2,{id:"-others-1",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Remove the error code check from ",(0,i.jsx)(n.code,{children:"NodesChecker"})," to prevent nil pointer panic. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-provider-aws/pull/748",children:"gardener/gardener-extension-provider-aws#748"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/acumino",children:"@acumino"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update provider-gcp to ",(0,i.jsx)(n.code,{children:"1.29.3"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener-extension-provider-gcp",children:"[gardener-extension-provider-gcp]"}),"\n",(0,i.jsx)(n.h2,{id:"-others-2",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Remove the error code check from ",(0,i.jsx)(n.code,{children:"NodesChecker"})," to prevent nil pointer panic. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-provider-gcp/pull/595",children:"gardener/gardener-extension-provider-gcp#595"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/acumino",children:"@acumino"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update provider-openstack to ",(0,i.jsx)(n.code,{children:"1.33.3"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener-extension-provider-openstack",children:"[gardener-extension-provider-openstack]"}),"\n",(0,i.jsx)(n.h2,{id:"-others-3",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Remove the error code check from ",(0,i.jsx)(n.code,{children:"NodesChecker"})," to prevent nil pointer panic. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-provider-openstack/pull/622",children:"gardener/gardener-extension-provider-openstack#622"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/acumino",children:"@acumino"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update gardener-controlplane to ",(0,i.jsx)(n.code,{children:"1.70.2"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener",children:"[gardener]"}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-breaking-changes",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[USER]"})," Gardener denies setting ",(0,i.jsx)(n.code,{children:"Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type"})," if shoot is hibernated. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener/pull/7920",children:"gardener/gardener#7920"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/gardener-ci-robot",children:"@gardener-ci-robot"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-bug-fixes",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[USER]"})," A bug has been fixed which could cause ",(0,i.jsx)(n.code,{children:"kube-proxy"}),"s from being missing after a ",(0,i.jsx)(n.code,{children:"Shoot"})," has been woken up from hibernation. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener/pull/7917",children:"gardener/gardener#7917"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/gardener-ci-robot",children:"@gardener-ci-robot"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," An issue has been fixed that caused traffic from outside of the cluster to ",(0,i.jsx)(n.code,{children:"Istio-Ingress"})," being blocked. This is only relevant if seed(s) specify additional load balancer annotations via ",(0,i.jsx)(n.code,{children:"seed.spec.settings.loadBalancerServices.annotations"}),". (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener/pull/7911",children:"gardener/gardener#7911"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/gardener-ci-robot",children:"@gardener-ci-robot"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-others-4",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," An issue causing panic in the health check for extension is fixed. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener/pull/7914",children:"gardener/gardener#7914"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/gardener-ci-robot",children:"@gardener-ci-robot"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update cloudprofiles to ",(0,i.jsx)(n.code,{children:"0.6.2"})]})}),"\n",(0,i.jsx)(n.h2,{id:"whats-changed",children:"What's Changed"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Regiocloud: Change regiocloud-a to RegionA by @JensAc in ",(0,i.jsx)(n.a,{href:"https://github.com/gardener-community/cloudprofiles/pull/23",children:"https://github.com/gardener-community/cloudprofiles/pull/23"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Full Changelog"}),": ",(0,i.jsx)(n.a,{href:"https://github.com/gardener-community/cloudprofiles/compare/0.6.1...0.6.2",children:"https://github.com/gardener-community/cloudprofiles/compare/0.6.1...0.6.2"})]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update provider-alicloud to ",(0,i.jsx)(n.code,{children:"1.46.0"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener-extension-provider-alicloud",children:"[gardener-extension-provider-alicloud]"}),"\n",(0,i.jsx)(n.h2,{id:"-documentation",children:"\ud83d\udcd6 Documentation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[DEPENDENCY]"})," The flags which went out-of-support in MCM v0.49.0 have been cleaned up from MCM deployment yaml. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-provider-alicloud/pull/595",children:"gardener/gardener-extension-provider-alicloud#595"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/himanshu-kun",children:"@himanshu-kun"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-others-5",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," The ",(0,i.jsx)(n.code,{children:"gardener-extension-admission-alicloud"})," Service in the ",(0,i.jsx)(n.code,{children:"gardener-extension-admission-alicloud"})," chart can now be configured to be topology-aware. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-provider-alicloud/pull/591",children:"gardener/gardener-extension-provider-alicloud#591"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/ialidzhikov",children:"@ialidzhikov"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," The admission/validation component is now adapted such that it works well in garden cluster with enabled ",(0,i.jsx)(n.code,{children:"NetworkPolicy"})," protection (default since ",(0,i.jsx)(n.code,{children:"gardener/gardener@v1.71"})," when garden cluster is managed by ",(0,i.jsx)(n.code,{children:"gardener-operator"}),"). (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-provider-alicloud/pull/599",children:"gardener/gardener-extension-provider-alicloud#599"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/rfranzke",children:"@rfranzke"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," The following dependency has been updated: (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-provider-alicloud/pull/600",children:"gardener/gardener-extension-provider-alicloud#600"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/acumino",children:"@acumino"}),")\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"github.com/gardener/gardener 1.67.1 -> 1.70.2"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"machine-controller-manager",children:"[machine-controller-manager]"}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-breaking-changes-1",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Removal of the following flags (and corresponding fields in associated structs): 'machine-creation-timeout' 'machine-drain-timeout', 'machine-pv-detach-timeout', 'machine-health-timeout=10m', 'machine-safety-apiserver-statuscheck-timeout', 'machine-safety-apiserver-statuscheck-period', 'machine-safety-orphan-vms-period', 'machine-max-evict-retries', 'node-conditions', 'bootstrap-token-auth-extra-groups', 'delete-migrated-machine-class'. The MCM no longer accepts these flags since these are options handled by the Machine Controller invoked by platform specific provider launchers. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/769",children:"gardener/machine-controller-manager#769"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/elankath",children:"@elankath"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[DEVELOPER]"})," Deletion of 'Driver.GenerateMachineClassForMigration'. Providers need to adapt to this. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/769",children:"gardener/machine-controller-manager#769"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/elankath",children:"@elankath"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-new-features",children:"\u2728 New Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[USER]"})," Machine object won't turn from ",(0,i.jsx)(n.code,{children:"Pending"}),"  to ",(0,i.jsx)(n.code,{children:"Running"})," state if ",(0,i.jsx)(n.code,{children:"node.gardener.cloud/critical-components-not-ready"})," taint is there on the corresponding node. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/778",children:"gardener/machine-controller-manager#778"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/SimonKienzler",children:"@SimonKienzler"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-bug-fixes-1",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[USER]"})," An edge case where all the machineSets were scaled down to zero has been dealt with. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/803",children:"gardener/machine-controller-manager#803"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/himanshu-kun",children:"@himanshu-kun"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[USER]"})," Fix a bug in the bootstrap token creation that caused node to not be able to join the cluster due to an expired bootstrap token. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/773",children:"gardener/machine-controller-manager#773"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/schrodit",children:"@schrodit"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-documentation-1",children:"\ud83d\udcd6 Documentation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[DEVELOPER]"})," Added proposal for hot-update of resources (instance/Nic/Disk) (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/761",children:"gardener/machine-controller-manager#761"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/himanshu-kun",children:"@himanshu-kun"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-others-6",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," ",(0,i.jsx)(n.code,{children:"CrashloopBackoff"})," machines will turn to ",(0,i.jsx)(n.code,{children:"Running"})," quicker (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/806",children:"gardener/machine-controller-manager#806"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/rishabh-11",children:"@rishabh-11"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," CVE categorization for MCM has been added. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/791",children:"gardener/machine-controller-manager#791"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/dkistner",children:"@dkistner"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[DEVELOPER]"})," The API generation now works again. Previously the API docs was generated to a location that was ignored by git and other API docs file was maintained. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/800",children:"gardener/machine-controller-manager#800"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/ialidzhikov",children:"@ialidzhikov"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[DEVELOPER]"})," Bump ",(0,i.jsx)(n.code,{children:"k8s.io/*"})," dependencies to v1.26.2 (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/machine-controller-manager/pull/792",children:"gardener/machine-controller-manager#792"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/afritzler",children:"@afritzler"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"terraformer",children:"[terraformer]"}),"\n",(0,i.jsx)(n.h2,{id:"-others-7",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Update alpine base image to ",(0,i.jsx)(n.code,{children:"v3.17.3"})," (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/terraformer/pull/136",children:"gardener/terraformer#136"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/kon-angelo",children:"@kon-angelo"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"docker-images",children:"Docker Images"}),"\n",(0,i.jsxs)(n.p,{children:["gardener-extension-provider-alicloud: ",(0,i.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/extensions/provider-alicloud:v1.46.0"}),"\ngardener-extension-admission-alicloud: ",(0,i.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/extensions/admission-alicloud:v1.46.0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update shoot-dns-service to ",(0,i.jsx)(n.code,{children:"1.34.0"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener-extension-shoot-dns-service",children:"[gardener-extension-shoot-dns-service]"}),"\n",(0,i.jsx)(n.h2,{id:"-others-8",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," The admission/validation component is now adapted such that it works well in garden cluster with enabled ",(0,i.jsx)(n.code,{children:"NetworkPolicy"})," protection (default since ",(0,i.jsx)(n.code,{children:"gardener/gardener@v1.71"})," when garden cluster is managed by ",(0,i.jsx)(n.code,{children:"gardener-operator"}),"). (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-shoot-dns-service/pull/210",children:"gardener/gardener-extension-shoot-dns-service#210"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/rfranzke",children:"@rfranzke"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Exclude external kube-apiserver domain from the ",(0,i.jsx)(n.code,{children:"external"})," DNSProvider (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-shoot-dns-service/pull/213",children:"gardener/gardener-extension-shoot-dns-service#213"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/MartinWeindel",children:"@MartinWeindel"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[DEPENDENCY]"})," The following dependency is updated: (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-shoot-dns-service/pull/212",children:"gardener/gardener-extension-shoot-dns-service#212"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/shafeeqes",children:"@shafeeqes"}),")\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"github.com/gardener/gardener: v1.65.3 -> v1.71.0"}),"\n",(0,i.jsx)(n.li,{children:"k8s.io/* : v0.26.1 -> v0.26.3"}),"\n",(0,i.jsx)(n.li,{children:"sigs.k8s.io/controller-runtime: v0.14.4-> v0.14.6"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update os-gardenlinux to ",(0,i.jsx)(n.code,{children:"0.20.0"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener-extension-os-gardenlinux",children:"[gardener-extension-os-gardenlinux]"}),"\n",(0,i.jsx)(n.h2,{id:"-others-9",children:"\ud83c\udfc3 Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," golang version is now updated to 1.20.4. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-os-gardenlinux/pull/97",children:"gardener/gardener-extension-os-gardenlinux#97"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/dependabot%5Bbot%5D",children:"@dependabot[bot]"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Update go.mod to golang 1.20. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-os-gardenlinux/pull/100",children:"gardener/gardener-extension-os-gardenlinux#100"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/danielfoehrKn",children:"@danielfoehrKn"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," The following dependency is updated: (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener-extension-os-gardenlinux/pull/94",children:"gardener/gardener-extension-os-gardenlinux#94"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/dependabot%5Bbot%5D",children:"@dependabot[bot]"}),")\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"github.com/gardener/gardener: v1.66.0 -> v1.70.2"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update provider-hcloud to ",(0,i.jsx)(n.code,{children:"0.6.17"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener-extension-provider-hcloud-v0617",children:"[gardener-extension-provider-hcloud] v0.6.17"}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update dashboard to ",(0,i.jsx)(n.code,{children:"1.69.1"})]})}),"\n",(0,i.jsx)(n.h1,{id:"dashboard",children:"[dashboard]"}),"\n",(0,i.jsx)(n.h2,{id:"\ufe0f-breaking-changes-2",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," The default ingress class annotation under ",(0,i.jsx)(n.code,{children:"Values.global.dashboard.ingress.annotations['kubernetes.io/ingress.class']"})," will not be set anymore. Instead, the ingress class name will be set using ",(0,i.jsx)(n.code,{children:"Values.global.dashboard.ingress.ingressClassName"})," (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/dashboard/pull/1499",children:"gardener/dashboard#1499"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/petersutter",children:"@petersutter"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-bug-fixes-2",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Fixed an issue where the helm deployment failed with the error ",(0,i.jsx)(n.code,{children:'annotations.kubernetes.io/ingress.class: Invalid value: "nginx": can not be set when the class field is also set'})," (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/dashboard/pull/1499",children:"gardener/dashboard#1499"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/petersutter",children:"@petersutter"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.details,{children:["\n",(0,i.jsx)(n.summary,{children:(0,i.jsxs)(n.b,{children:["Update gardener-controlplane to ",(0,i.jsx)(n.code,{children:"1.71.3"})]})}),"\n",(0,i.jsx)(n.h1,{id:"gardener-1",children:"[gardener]"}),"\n",(0,i.jsx)(n.h2,{id:"-bug-fixes-3",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," A bug causing ",(0,i.jsx)(n.code,{children:"gardenlet"})," to panic when ",(0,i.jsx)(n.code,{children:"admission-controller"})," is upgraded to ",(0,i.jsx)(n.code,{children:"v1.71"})," but gardenlet is still on ",(0,i.jsx)(n.code,{children:"v1.70"}),". (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener/pull/7989",children:"gardener/gardener#7989"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/acumino",children:"@acumino"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"[OPERATOR]"})," Several low timeouts (30s) that were introduced in v1.71.0 for several steps are now reverted as in some cases the Network/ControlPlane reconciliation cannot succeed for 30s. (",(0,i.jsx)(n.a,{href:"https://github.com/gardener/gardener/pull/8006",children:"gardener/gardener#8006"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/gardener-ci-robot",children:"@gardener-ci-robot"}),")"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>a});var i=r(67294);const s={},d=i.createContext(s);function a(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);