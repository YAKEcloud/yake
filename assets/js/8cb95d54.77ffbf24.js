"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64161],{69535:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=r(85893),i=r(11151);const d={hide_table_of_contents:!0},o="Release Notes v1.79",l={id:"v1.79",title:"Release Notes v1.79",description:"23KE release notes and upgrade guide",source:"@site/release-notes/v1.79.md",sourceDirName:".",slug:"/v1.79",permalink:"/release-notes/v1.79",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Release Notes v1.80",permalink:"/release-notes/v1.80"},next:{title:"Release Notes v1.78",permalink:"/release-notes/v1.78"}},c={},a=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-3",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-4",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-5",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-6",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-1",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy",level:2},{value:"\u2728 New Features",id:"-new-features",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-7",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"\ud83c\udfc3 Others",id:"-others-4",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-1",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-2",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-2",level:2},{value:"\u2728 New Features",id:"-new-features-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-8",level:2},{value:"\ud83c\udfc3 Others",id:"-others-5",level:2},{value:"\ud83c\udfc3 Others",id:"-others-6",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-3",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-3",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-4",level:2},{value:"\u2728 New Features",id:"-new-features-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-9",level:2},{value:"\ud83c\udfc3 Others",id:"-others-7",level:2},{value:"\ud83c\udfc3 Others",id:"-others-8",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-5",level:2}];function t(e){const n={a:"a",b:"b",code:"code",details:"details",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",summary:"summary",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"release-notes-v179",children:"Release Notes v1.79"})}),"\n",(0,s.jsx)(n.h2,{id:"23ke-release-notes-and-upgrade-guide",children:"23KE release notes and upgrade guide"}),"\n",(0,s.jsx)(n.h2,{id:"related-upstream-release-notes--changelogs",children:"Related upstream release notes / changelogs"}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update os-gardenlinux to ",(0,s.jsx)(n.code,{children:"0.21.0"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenergardener-extension-os-gardenlinux",children:"[gardener/gardener-extension-os-gardenlinux]"}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-breaking-changes",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," ",(0,s.jsx)(n.code,{children:"extension-os-gardenlinux"})," no longer supports Shoots with \u041aubernetes version < 1.22. by @shafeeqes [#113]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-others",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The Garden Linux OS extension now features support for vSMP MemoryOne and Garden Linux. It will now consider itself responsible for a new type ",(0,s.jsx)(n.code,{children:"OperatingSystemConfig/memoryone-gardenlinux"})," and understands a ",(0,s.jsx)(n.code,{children:"providerConfig"})," with which certain parameters of MemoryOne can be configured. by @MrBatschner [#116]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The following dependency is updated:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"github.com/gardener/gardener: v1.70.2 -> v1.72.0 by @dependabot[bot] [#105]"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update cert-management to ",(0,s.jsx)(n.code,{children:"0.11.1"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenercert-management",children:"[gardener/cert-management]"}),"\n",(0,s.jsx)(n.h2,{id:"-others-1",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel [#140]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel [#138]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update dashboard to ",(0,s.jsx)(n.code,{children:"1.69.2"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenerdashboard",children:"[gardener/dashboard]"}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[USER]"})," Errors shown as notification alerts sometimes did not contain the failure reason by @grolu [#1539]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[USER]"})," Fixed error handling for manage workers and hibernation dialogs. The dialogs did not show all error messages and resetted to empty broken state on errors by @grolu [#1539]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update dashboard to ",(0,s.jsx)(n.code,{children:"1.69.2"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenerdashboard-1",children:"[gardener/dashboard]"}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes-1",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[USER]"})," Errors shown as notification alerts sometimes did not contain the failure reason by @grolu [#1539]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[USER]"})," Fixed error handling for manage workers and hibernation dialogs. The dialogs did not show all error messages and resetted to empty broken state on errors by @grolu [#1539]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update provider-azure to ",(0,s.jsx)(n.code,{children:"1.38.2"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenergardener-extension-provider-azure",children:"[gardener/gardener-extension-provider-azure]"}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes-2",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update ",(0,s.jsx)(n.code,{children:"k8s.io/client-go"})," from ",(0,s.jsx)(n.code,{children:"v0.26.3"})," to ",(0,s.jsx)(n.code,{children:"v0.26.4"})," to resolve panic on health-checking special shoots. by @MartinWeindel [#728]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update provider-gcp to ",(0,s.jsx)(n.code,{children:"1.32.1"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenergardener-extension-provider-gcp",children:"[gardener/gardener-extension-provider-gcp]"}),"\n",(0,s.jsx)(n.h2,{id:"-others-2",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The following image is updated:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver: v1.9.7 -> v1.9.9 by @ialidzhikov [#641]"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update shoot-cert-service to ",(0,s.jsx)(n.code,{children:"1.37.1"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenercert-management-1",children:"[gardener/cert-management]"}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes-3",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel [gardener/cert-management@dbff065ac5686aaddd8d2eb1fb6c62c3520b0c3d]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[USER]"})," Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel [gardener/cert-management@dbff065ac5686aaddd8d2eb1fb6c62c3520b0c3d]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update gardener-controlplane to ",(0,s.jsx)(n.code,{children:"1.78.2"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenergardener",children:"[gardener/gardener]"}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes-4",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," An issue has been fixed which was causing a broken ",(0,s.jsx)(n.code,{children:"ControlPlaneHealthy"})," condition report for ",(0,s.jsx)(n.code,{children:"Shoot"}),"s when the ",(0,s.jsx)(n.code,{children:"MachineControllerManagerDeployment"})," feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8411]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update Kubernetes dependencies (especially ",(0,s.jsx)(n.code,{children:"k8s.io/client-go"}),") from ",(0,s.jsx)(n.code,{children:"v0.26.3"})," to ",(0,s.jsx)(n.code,{children:"v0.26.4"})," to resolve panic on working with special shoots. by @gardener-ci-robot [#8423]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update gardener-controlplane to ",(0,s.jsx)(n.code,{children:"1.78.2"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenergardener-1",children:"[gardener/gardener]"}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes-5",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," An issue has been fixed which was causing a broken ",(0,s.jsx)(n.code,{children:"ControlPlaneHealthy"})," condition report for ",(0,s.jsx)(n.code,{children:"Shoot"}),"s when the ",(0,s.jsx)(n.code,{children:"MachineControllerManagerDeployment"})," feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8411]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update Kubernetes dependencies (especially ",(0,s.jsx)(n.code,{children:"k8s.io/client-go"}),") from ",(0,s.jsx)(n.code,{children:"v0.26.3"})," to ",(0,s.jsx)(n.code,{children:"v0.26.4"})," to resolve panic on working with special shoots. by @gardener-ci-robot [#8423]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update gardenlet to ",(0,s.jsx)(n.code,{children:"1.78.2"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenergardener-2",children:"[gardener/gardener]"}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes-6",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," An issue has been fixed which was causing a broken ",(0,s.jsx)(n.code,{children:"ControlPlaneHealthy"})," condition report for ",(0,s.jsx)(n.code,{children:"Shoot"}),"s when the ",(0,s.jsx)(n.code,{children:"MachineControllerManagerDeployment"})," feature gate gets enabled until their next reconciliation. by @gardener-ci-robot [#8411]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update Kubernetes dependencies (especially ",(0,s.jsx)(n.code,{children:"k8s.io/client-go"}),") from ",(0,s.jsx)(n.code,{children:"v0.26.3"})," to ",(0,s.jsx)(n.code,{children:"v0.26.4"})," to resolve panic on working with special shoots. by @gardener-ci-robot [#8423]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update gardener-controlplane to ",(0,s.jsx)(n.code,{children:"1.79.0"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenergardener-3",children:"[gardener/gardener]"}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-breaking-changes-1",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[DEVELOPER]"})," ",(0,s.jsx)(n.code,{children:"uncachedObjects"})," under pkg/client/kubernetes/options.go is now removed from Config struct which is used to set options for new ClientSets. Now the uncached objects can be directly set under ",(0,s.jsx)(n.code,{children:"clientOptions.Cache.DisableFor"})," field. by @ary1992 [#8245]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-noteworthy",children:"\ud83d\udcf0 Noteworthy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The ",(0,s.jsx)(n.code,{children:"DisablingScalingClassesForShoots"})," feature gate has been promoted to beta. by @rfranzke [#8428]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-new-features",children:"\u2728 New Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Operators can now use the annotation ",(0,s.jsx)(n.code,{children:"gardener.cloud/operation=rotate-observability-credentials"})," on the ",(0,s.jsx)(n.code,{children:"garden"})," resource to rotate the observability credentials.  by @acumino [#8393]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Configuring multiple ",(0,s.jsx)(n.code,{children:"reserve-excess-capacity"})," deployments on ",(0,s.jsx)(n.code,{children:"Seed"}),"s is supported now by specifying ",(0,s.jsx)(n.code,{children:".spec.settings.excessCapacityReservation.configs"}),". by @oliver-goetz [#8356]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[USER]"})," When the Kubernetes control plane version is at least ",(0,s.jsx)(n.code,{children:"v1.28"}),", it is now possible to set the worker pool Kubernetes version to be at most three versions behind the control plane version. Earlier, only a skew of at most two versions was allowed. Find more details ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/blog/2023/08/15/kubernetes-v1-28-release/#changes-to-supported-skew-between-control-plane-and-node-versions",children:"here"}),". by @shafeeqes [#8402]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes-7",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," A bug has been fixed which was causing the garbage collector in ",(0,s.jsx)(n.code,{children:"gardener-resource-manager"})," to wrongfully collect ",(0,s.jsx)(n.code,{children:"Secret"}),"s related to ",(0,s.jsx)(n.code,{children:"ManagedResource"}),"s when the source and the target cluster are equal. by @dimityrmirchev [#8398]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," An issue has been fixed which was causing a broken ",(0,s.jsx)(n.code,{children:"ControlPlaneHealthy"})," condition report for ",(0,s.jsx)(n.code,{children:"Shoot"}),"s when the ",(0,s.jsx)(n.code,{children:"MachineControllerManagerDeployment"})," feature gate gets enabled until their next reconciliation. by @rfranzke [#8407]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update Kubernetes dependencies (especially ",(0,s.jsx)(n.code,{children:"k8s.io/client-go"}),") from ",(0,s.jsx)(n.code,{children:"v0.26.3"})," to ",(0,s.jsx)(n.code,{children:"v0.26.4"})," to resolve panic on working with special shoots. by @MartinWeindel [#8422]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-others-3",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Add Prometheus alert for pending seed pods by @StenlyTU [#8406]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The admission controllers of common provider extensions are automatically installed in the local extensions development setup by @ScheererJ [#8311]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The ",(0,s.jsx)(n.code,{children:"WorkerlessShoots"})," feature gate has been promoted to beta and is now turned on by default. Before deploying this Gardener version, make sure that all your registered extensions support this feature gate. by @acumino [#8417]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The following image is updated:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"quay.io/prometheus/alertmanager"}),": ",(0,s.jsx)(n.code,{children:"v0.24.0"})," -> ",(0,s.jsx)(n.code,{children:"v0.26.0"})," by @istvanballok [#8408]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[DEVELOPER]"})," The following dependencies are updated:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"k8s.io/*"})," : ",(0,s.jsx)(n.code,{children:"v0.26.4"})," -> ",(0,s.jsx)(n.code,{children:"v0.27.5"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sigs.k8s.io/controller-runtime"}),": ",(0,s.jsx)(n.code,{children:"v0.14.6"})," -> ",(0,s.jsx)(n.code,{children:"v0.15.2"})," by @ary1992 [#8245]"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"gardenerapiserver-proxy",children:"[gardener/apiserver-proxy]"}),"\n",(0,s.jsx)(n.h2,{id:"-others-4",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update golang base container image to 1.21.0. by @dependabot[bot] [gardener/apiserver-proxy#43]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update alpine base image components to 3.18.3. by @dependabot[bot] [gardener/apiserver-proxy#42]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Removed apiserver-proxy pod webhook as it is now included in Gardener Resource Manager. by @ScheererJ [gardener/apiserver-proxy#39]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update gardener/gardener to 1.77.1. by @dependabot[bot] [gardener/apiserver-proxy#44]"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"gardenervpn2",children:"[gardener/vpn2]"}),"\n",(0,s.jsx)(n.h2,{id:"-noteworthy-1",children:"\ud83d\udcf0 Noteworthy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update to golang v1.21 by @ScheererJ [gardener/vpn2#42]"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"docker-images",children:"Docker Images"}),"\n",(0,s.jsxs)(n.p,{children:["admission-controller: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/admission-controller:v1.79.0"}),"\napiserver: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/apiserver:v1.79.0"}),"\ncontroller-manager: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/controller-manager:v1.79.0"}),"\nscheduler: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/scheduler:v1.79.0"}),"\noperator: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/operator:v1.79.0"}),"\ngardenlet: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/gardenlet:v1.79.0"}),"\nresource-manager: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/resource-manager:v1.79.0"})]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update gardener-controlplane to ",(0,s.jsx)(n.code,{children:"1.79.0"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenergardener-4",children:"[gardener/gardener]"}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-breaking-changes-2",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[DEVELOPER]"})," ",(0,s.jsx)(n.code,{children:"uncachedObjects"})," under pkg/client/kubernetes/options.go is now removed from Config struct which is used to set options for new ClientSets. Now the uncached objects can be directly set under ",(0,s.jsx)(n.code,{children:"clientOptions.Cache.DisableFor"})," field. by @ary1992 [#8245]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-noteworthy-2",children:"\ud83d\udcf0 Noteworthy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The ",(0,s.jsx)(n.code,{children:"DisablingScalingClassesForShoots"})," feature gate has been promoted to beta. by @rfranzke [#8428]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-new-features-1",children:"\u2728 New Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Operators can now use the annotation ",(0,s.jsx)(n.code,{children:"gardener.cloud/operation=rotate-observability-credentials"})," on the ",(0,s.jsx)(n.code,{children:"garden"})," resource to rotate the observability credentials.  by @acumino [#8393]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Configuring multiple ",(0,s.jsx)(n.code,{children:"reserve-excess-capacity"})," deployments on ",(0,s.jsx)(n.code,{children:"Seed"}),"s is supported now by specifying ",(0,s.jsx)(n.code,{children:".spec.settings.excessCapacityReservation.configs"}),". by @oliver-goetz [#8356]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[USER]"})," When the Kubernetes control plane version is at least ",(0,s.jsx)(n.code,{children:"v1.28"}),", it is now possible to set the worker pool Kubernetes version to be at most three versions behind the control plane version. Earlier, only a skew of at most two versions was allowed. Find more details ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/blog/2023/08/15/kubernetes-v1-28-release/#changes-to-supported-skew-between-control-plane-and-node-versions",children:"here"}),". by @shafeeqes [#8402]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes-8",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," A bug has been fixed which was causing the garbage collector in ",(0,s.jsx)(n.code,{children:"gardener-resource-manager"})," to wrongfully collect ",(0,s.jsx)(n.code,{children:"Secret"}),"s related to ",(0,s.jsx)(n.code,{children:"ManagedResource"}),"s when the source and the target cluster are equal. by @dimityrmirchev [#8398]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," An issue has been fixed which was causing a broken ",(0,s.jsx)(n.code,{children:"ControlPlaneHealthy"})," condition report for ",(0,s.jsx)(n.code,{children:"Shoot"}),"s when the ",(0,s.jsx)(n.code,{children:"MachineControllerManagerDeployment"})," feature gate gets enabled until their next reconciliation. by @rfranzke [#8407]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update Kubernetes dependencies (especially ",(0,s.jsx)(n.code,{children:"k8s.io/client-go"}),") from ",(0,s.jsx)(n.code,{children:"v0.26.3"})," to ",(0,s.jsx)(n.code,{children:"v0.26.4"})," to resolve panic on working with special shoots. by @MartinWeindel [#8422]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-others-5",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Add Prometheus alert for pending seed pods by @StenlyTU [#8406]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The admission controllers of common provider extensions are automatically installed in the local extensions development setup by @ScheererJ [#8311]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The ",(0,s.jsx)(n.code,{children:"WorkerlessShoots"})," feature gate has been promoted to beta and is now turned on by default. Before deploying this Gardener version, make sure that all your registered extensions support this feature gate. by @acumino [#8417]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The following image is updated:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"quay.io/prometheus/alertmanager"}),": ",(0,s.jsx)(n.code,{children:"v0.24.0"})," -> ",(0,s.jsx)(n.code,{children:"v0.26.0"})," by @istvanballok [#8408]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[DEVELOPER]"})," The following dependencies are updated:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"k8s.io/*"})," : ",(0,s.jsx)(n.code,{children:"v0.26.4"})," -> ",(0,s.jsx)(n.code,{children:"v0.27.5"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sigs.k8s.io/controller-runtime"}),": ",(0,s.jsx)(n.code,{children:"v0.14.6"})," -> ",(0,s.jsx)(n.code,{children:"v0.15.2"})," by @ary1992 [#8245]"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"gardenerapiserver-proxy-1",children:"[gardener/apiserver-proxy]"}),"\n",(0,s.jsx)(n.h2,{id:"-others-6",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update golang base container image to 1.21.0. by @dependabot[bot] [gardener/apiserver-proxy#43]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update alpine base image components to 3.18.3. by @dependabot[bot] [gardener/apiserver-proxy#42]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Removed apiserver-proxy pod webhook as it is now included in Gardener Resource Manager. by @ScheererJ [gardener/apiserver-proxy#39]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update gardener/gardener to 1.77.1. by @dependabot[bot] [gardener/apiserver-proxy#44]"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"gardenervpn2-1",children:"[gardener/vpn2]"}),"\n",(0,s.jsx)(n.h2,{id:"-noteworthy-3",children:"\ud83d\udcf0 Noteworthy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update to golang v1.21 by @ScheererJ [gardener/vpn2#42]"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"docker-images-1",children:"Docker Images"}),"\n",(0,s.jsxs)(n.p,{children:["admission-controller: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/admission-controller:v1.79.0"}),"\napiserver: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/apiserver:v1.79.0"}),"\ncontroller-manager: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/controller-manager:v1.79.0"}),"\nscheduler: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/scheduler:v1.79.0"}),"\noperator: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/operator:v1.79.0"}),"\ngardenlet: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/gardenlet:v1.79.0"}),"\nresource-manager: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/resource-manager:v1.79.0"})]}),"\n"]}),"\n",(0,s.jsxs)(n.details,{children:["\n",(0,s.jsx)(n.summary,{children:(0,s.jsxs)(n.b,{children:["Update gardenlet to ",(0,s.jsx)(n.code,{children:"1.79.0"})]})}),"\n",(0,s.jsx)(n.h1,{id:"gardenergardener-5",children:"[gardener/gardener]"}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-breaking-changes-3",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[DEVELOPER]"})," ",(0,s.jsx)(n.code,{children:"uncachedObjects"})," under pkg/client/kubernetes/options.go is now removed from Config struct which is used to set options for new ClientSets. Now the uncached objects can be directly set under ",(0,s.jsx)(n.code,{children:"clientOptions.Cache.DisableFor"})," field. by @ary1992 [#8245]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-noteworthy-4",children:"\ud83d\udcf0 Noteworthy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The ",(0,s.jsx)(n.code,{children:"DisablingScalingClassesForShoots"})," feature gate has been promoted to beta. by @rfranzke [#8428]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-new-features-2",children:"\u2728 New Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Operators can now use the annotation ",(0,s.jsx)(n.code,{children:"gardener.cloud/operation=rotate-observability-credentials"})," on the ",(0,s.jsx)(n.code,{children:"garden"})," resource to rotate the observability credentials.  by @acumino [#8393]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Configuring multiple ",(0,s.jsx)(n.code,{children:"reserve-excess-capacity"})," deployments on ",(0,s.jsx)(n.code,{children:"Seed"}),"s is supported now by specifying ",(0,s.jsx)(n.code,{children:".spec.settings.excessCapacityReservation.configs"}),". by @oliver-goetz [#8356]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[USER]"})," When the Kubernetes control plane version is at least ",(0,s.jsx)(n.code,{children:"v1.28"}),", it is now possible to set the worker pool Kubernetes version to be at most three versions behind the control plane version. Earlier, only a skew of at most two versions was allowed. Find more details ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/blog/2023/08/15/kubernetes-v1-28-release/#changes-to-supported-skew-between-control-plane-and-node-versions",children:"here"}),". by @shafeeqes [#8402]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-bug-fixes-9",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," A bug has been fixed which was causing the garbage collector in ",(0,s.jsx)(n.code,{children:"gardener-resource-manager"})," to wrongfully collect ",(0,s.jsx)(n.code,{children:"Secret"}),"s related to ",(0,s.jsx)(n.code,{children:"ManagedResource"}),"s when the source and the target cluster are equal. by @dimityrmirchev [#8398]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," An issue has been fixed which was causing a broken ",(0,s.jsx)(n.code,{children:"ControlPlaneHealthy"})," condition report for ",(0,s.jsx)(n.code,{children:"Shoot"}),"s when the ",(0,s.jsx)(n.code,{children:"MachineControllerManagerDeployment"})," feature gate gets enabled until their next reconciliation. by @rfranzke [#8407]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update Kubernetes dependencies (especially ",(0,s.jsx)(n.code,{children:"k8s.io/client-go"}),") from ",(0,s.jsx)(n.code,{children:"v0.26.3"})," to ",(0,s.jsx)(n.code,{children:"v0.26.4"})," to resolve panic on working with special shoots. by @MartinWeindel [#8422]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"-others-7",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Add Prometheus alert for pending seed pods by @StenlyTU [#8406]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The admission controllers of common provider extensions are automatically installed in the local extensions development setup by @ScheererJ [#8311]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The ",(0,s.jsx)(n.code,{children:"WorkerlessShoots"})," feature gate has been promoted to beta and is now turned on by default. Before deploying this Gardener version, make sure that all your registered extensions support this feature gate. by @acumino [#8417]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," The following image is updated:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"quay.io/prometheus/alertmanager"}),": ",(0,s.jsx)(n.code,{children:"v0.24.0"})," -> ",(0,s.jsx)(n.code,{children:"v0.26.0"})," by @istvanballok [#8408]"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[DEVELOPER]"})," The following dependencies are updated:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"k8s.io/*"})," : ",(0,s.jsx)(n.code,{children:"v0.26.4"})," -> ",(0,s.jsx)(n.code,{children:"v0.27.5"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sigs.k8s.io/controller-runtime"}),": ",(0,s.jsx)(n.code,{children:"v0.14.6"})," -> ",(0,s.jsx)(n.code,{children:"v0.15.2"})," by @ary1992 [#8245]"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"gardenerapiserver-proxy-2",children:"[gardener/apiserver-proxy]"}),"\n",(0,s.jsx)(n.h2,{id:"-others-8",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update golang base container image to 1.21.0. by @dependabot[bot] [gardener/apiserver-proxy#43]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update alpine base image components to 3.18.3. by @dependabot[bot] [gardener/apiserver-proxy#42]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Removed apiserver-proxy pod webhook as it is now included in Gardener Resource Manager. by @ScheererJ [gardener/apiserver-proxy#39]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update gardener/gardener to 1.77.1. by @dependabot[bot] [gardener/apiserver-proxy#44]"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"gardenervpn2-2",children:"[gardener/vpn2]"}),"\n",(0,s.jsx)(n.h2,{id:"-noteworthy-5",children:"\ud83d\udcf0 Noteworthy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[OPERATOR]"})," Update to golang v1.21 by @ScheererJ [gardener/vpn2#42]"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"docker-images-2",children:"Docker Images"}),"\n",(0,s.jsxs)(n.p,{children:["admission-controller: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/admission-controller:v1.79.0"}),"\napiserver: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/apiserver:v1.79.0"}),"\ncontroller-manager: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/controller-manager:v1.79.0"}),"\nscheduler: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/scheduler:v1.79.0"}),"\noperator: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/operator:v1.79.0"}),"\ngardenlet: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/gardenlet:v1.79.0"}),"\nresource-manager: ",(0,s.jsx)(n.code,{children:"eu.gcr.io/gardener-project/gardener/resource-manager:v1.79.0"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var s=r(67294);const i={},d=s.createContext(i);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);