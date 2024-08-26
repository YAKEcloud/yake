"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86210],{51778:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var s=n(85893),d=n(11151);const i={hide_table_of_contents:!0},o="Release Notes v1.69",t={id:"v1.69",title:"Release Notes v1.69",description:"23KE release notes and upgrade guide",source:"@site/release-notes/v1.69.md",sourceDirName:".",slug:"/v1.69",permalink:"/release-notes/v1.69",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Release Notes v1.70",permalink:"/release-notes/v1.70"},next:{title:"Release Notes v1.68",permalink:"/release-notes/v1.68"}},l={},a=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\u2728 New Features",id:"-new-features",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"Docker Images",id:"docker-images-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2},{value:"What&#39;s Changed",id:"whats-changed-1",level:2}];function c(e){const r={a:"a",b:"b",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",summary:"summary",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"release-notes-v169",children:"Release Notes v1.69"}),"\n",(0,s.jsx)(r.h2,{id:"23ke-release-notes-and-upgrade-guide",children:"23KE release notes and upgrade guide"}),"\n",(0,s.jsx)(r.p,{children:"No special steps needed, please refer to the gardener release notes below:"}),"\n",(0,s.jsx)(r.h2,{id:"related-upstream-release-notes--changelogs",children:"Related upstream release notes / changelogs"}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,s.jsx)(r.code,{children:"1.69.0"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardener",children:"[gardener]"}),"\n",(0,s.jsx)(r.h2,{id:"\ufe0f-breaking-changes",children:"\u26a0\ufe0f Breaking Changes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," ",(0,s.jsx)(r.code,{children:"Seed"})," and ",(0,s.jsx)(r.code,{children:"ManagedSeed"})," API validation has been enhanced by the following checks: (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7695",children:"gardener/gardener#7695"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/timuthy",children:"@timuthy"}),")\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["(a) New ",(0,s.jsx)(r.code,{children:"ManagedSeed"}),"s can only use the very same zone(s) (",(0,s.jsx)(r.code,{children:"managedSeed.spec.gardenlet.config.seedConfig.spec.provider.zones"}),") that are available in the referenced ",(0,s.jsx)(r.code,{children:"Shoot"})," (",(0,s.jsx)(r.code,{children:"shoot.spec.provider.workers[].zones"}),")."]}),"\n",(0,s.jsxs)(r.li,{children:["(b) Existing ",(0,s.jsx)(r.code,{children:"ManagedSeed"}),"s can only add additional zones that are available in the referenced shoot."]}),"\n",(0,s.jsxs)(r.li,{children:["(c) Removing elements in ",(0,s.jsx)(r.code,{children:"seed.spec.provider.zones"})," is denied if shoots are still scheduled to the affected seed."]}),"\n",(0,s.jsxs)(r.li,{children:["These restrictions were removed in Gardener ",(0,s.jsx)(r.code,{children:"v1.60"})," to compensate a zone mismatch issue in Azure that is in the meantime fixed by the Azure provider extension ",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener-extension-provider-azure/releases/tag/v1.34.0",children:"v1.34"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["\u26a0\ufe0f Before upgrading to this Gardener version, please make sure to check existing ",(0,s.jsx)(r.code,{children:"ManagedSeed"})," objects. They should configure as many as zone as there are available in the referenced shoot - see check (c)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," gardenlet now cleans up VolumeSnapshot and VolumeSnapshotContent resources from the ",(0,s.jsx)(r.code,{children:"v1"})," API of the ",(0,s.jsx)(r.code,{children:"snapshot.storage.k8s.io"})," group. ",(0,s.jsx)(r.code,{children:"v1"})," is served starting ",(0,s.jsx)(r.code,{children:"external-snapshotter@v4"}),". Before upgrading to this version of Gardener make sure that provider extension install at least ",(0,s.jsx)(r.code,{children:"external-snapshotter@v4"})," and do not install any lower version. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7759",children:"gardener/gardener#7759"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/ialidzhikov",children:"@ialidzhikov"}),")"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-new-features",children:"\u2728 New Features"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," Annotations in ",(0,s.jsx)(r.code,{children:"GardenletConfiguration.seedConfig.metadata.annotations"})," are added to the ",(0,s.jsx)(r.code,{children:"Seed"})," object during registration. If an annotation is removed from ",(0,s.jsx)(r.code,{children:"seedConfig"}),", it is ",(0,s.jsx)(r.strong,{children:"not"})," removed from the ",(0,s.jsx)(r.code,{children:"Seed"})," object. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7753",children:"gardener/gardener#7753"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/timebertt",children:"@timebertt"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," It is now possible to perform control plane migration for HA shoot clusters. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7626",children:"gardener/gardener#7626"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/plkokanov",children:"@plkokanov"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[DEVELOPER]"})," Gardener's local setup now supports bootstrapping a Seed with IPv6 single-stack networking using ",(0,s.jsx)(r.code,{children:"make gardener-up IPFAMILY=ipv6"}),". See the ",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md",children:"documentation"})," for more detailed steps. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7561",children:"gardener/gardener#7561"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/breuerfelix",children:"@breuerfelix"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[DEVELOPER]"})," Developers can now use ",(0,s.jsx)(r.code,{children:"make gardener-debug"})," to start a skaffold-based debugging loop which allows remote debugging of Gardener Core pods using Delve. See the ",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/blob/master/docs/deployment/getting_started_locally.md#debugging-gardener",children:"documentation"})," for more details. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7755",children:"gardener/gardener#7755"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/oliver-goetz",children:"@oliver-goetz"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[DEVELOPER]"})," ",(0,s.jsx)(r.code,{children:"generate-controller-registration.sh"})," now supports extension charts with fully-qualified ",(0,s.jsx)(r.code,{children:"image"})," values instead of the usual ",(0,s.jsx)(r.code,{children:"image"})," stanza with values for ",(0,s.jsx)(r.code,{children:"repository"})," and ",(0,s.jsx)(r.code,{children:"tag"}),". With this, skaffold can be configured (using ",(0,s.jsx)(r.code,{children:"resourceSelector"}),") to inject a freshly-built image reference into the generated ",(0,s.jsx)(r.code,{children:"ControllerDeployment"}),". (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7757",children:"gardener/gardener#7757"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/timebertt",children:"@timebertt"}),")"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," An issue causing the garden/grafana Pod to fail to reach to the garden/loki Pod on cilium Seed clusters is now mitigated. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7766",children:"gardener/gardener#7766"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/Kristian-ZH",children:"@Kristian-ZH"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," An issue causing ",(0,s.jsx)(r.code,{children:"state-metrics-seed"})," status to show down falsely has been fixed. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7771",children:"gardener/gardener#7771"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/acumino",children:"@acumino"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"}),' An issue causing the "cache" Prometheus in the (managed) seed\'s garden namespace to fail when scraping the node-exporter-s in the kube-system namespace has been fixed. (',(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7772",children:"gardener/gardener#7772"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/istvanballok",children:"@istvanballok"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," A bug in grafana dashboards checking ",(0,s.jsx)(r.code,{children:"kube-apiserver"})," job for ",(0,s.jsx)(r.code,{children:"kube-controller-manager"})," up status is now fixed. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7773",children:"gardener/gardener#7773"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/shafeeqes",children:"@shafeeqes"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," Fixed potential leaks of ",(0,s.jsx)(r.code,{children:"ShootState"}),"s that could happen when a ",(0,s.jsx)(r.code,{children:"Shoot"})," cluster is deleted. This is achieved by no longer exiting early from the deletion flow if the shoot's seed ",(0,s.jsx)(r.code,{children:"Namespace"})," has been deleted. The same logic has been applied to the migration flow for consistency. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7789",children:"gardener/gardener#7789"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/plkokanov",children:"@plkokanov"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," A bug causing ",(0,s.jsx)(r.code,{children:"kube-controller-manager"})," to fail to clean up ",(0,s.jsx)(r.code,{children:"ShootState"})," resources is now fixed. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7793",children:"gardener/gardener#7793"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/shafeeqes",children:"@shafeeqes"}),")"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"-others",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," The ",(0,s.jsx)(r.code,{children:".spec.settings.ownerChecks"}),' field of the Seed configuration is deprecated. The "bad-case" control plane migration is being removed in favor of the HA Shoot control planes (see ',(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/issues/6302",children:"https://github.com/gardener/gardener/issues/6302"}),"). The field will be locked to ",(0,s.jsx)(r.code,{children:"false"})," in a future version of Gardener. In this way gardenlet will clean up all owner DNSRecords. Finally, the field will be removed from the API. Set this field to ",(0,s.jsx)(r.code,{children:"false"})," to be prepared for the above-mentioned locking. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7748",children:"gardener/gardener#7748"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/dimitar-kostadinov",children:"@dimitar-kostadinov"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," The ",(0,s.jsx)(r.code,{children:"SeedChange"})," and ",(0,s.jsx)(r.code,{children:"CopyEtcdBackupsDuringControlPlaneMigration"})," feature gates have been promoted to GA and are now locked to ",(0,s.jsx)(r.code,{children:"true"}),". (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7763",children:"gardener/gardener#7763"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/plkokanov",children:"@plkokanov"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," The nested kubelet in the Gardener e2e tests (in prow/kind) now work on hosts using cgroupsv2 (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7780",children:"gardener/gardener#7780"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/danielfoehrKn",children:"@danielfoehrKn"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," The following images are updated: (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7787",children:"gardener/gardener#7787"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/elankath",children:"@elankath"}),")\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler"}),": ",(0,s.jsx)(r.code,{children:"v1.21.4"})," -> ",(0,s.jsx)(r.code,{children:"v1.21.5"})," (for Kubernetes ",(0,s.jsx)(r.code,{children:"1.21"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler"}),": ",(0,s.jsx)(r.code,{children:"v1.22.4"})," -> ",(0,s.jsx)(r.code,{children:"v1.22.5"})," (for Kubernetes ",(0,s.jsx)(r.code,{children:"1.22"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler"}),": ",(0,s.jsx)(r.code,{children:"v1.23.2"})," -> ",(0,s.jsx)(r.code,{children:"v1.22.3"})," (for Kubernetes ",(0,s.jsx)(r.code,{children:"1.23"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler"}),": ",(0,s.jsx)(r.code,{children:"v1.24.1"})," -> ",(0,s.jsx)(r.code,{children:"v1.24.2"})," (for Kubernetes ",(0,s.jsx)(r.code,{children:"1.24"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler"}),": ",(0,s.jsx)(r.code,{children:"v1.25.1"})," -> ",(0,s.jsx)(r.code,{children:"v1.25.2"})," (for Kubernetes ",(0,s.jsx)(r.code,{children:"1.25"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/autoscaler/cluster-autoscaler"}),": ",(0,s.jsx)(r.code,{children:"v1.26.1"}),"  (for Kubernetes ",(0,s.jsx)(r.code,{children:"1.26"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[DEVELOPER]"})," The logging integration test is now switched from the ",(0,s.jsx)(r.code,{children:"loki"})," Service to ",(0,s.jsx)(r.code,{children:"logging"})," Service. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7778",children:"gardener/gardener#7778"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/vlvasilev",children:"@vlvasilev"}),")"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[DEVELOPER]"})," Set ",(0,s.jsx)(r.code,{children:"cgroupDriver"})," of ",(0,s.jsx)(r.code,{children:"provider-local"})," to ",(0,s.jsx)(r.code,{children:"systemd"}),". (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7797",children:"gardener/gardener#7797"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/oliver-goetz",children:"@oliver-goetz"}),")"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images",children:"Docker Images"}),"\n",(0,s.jsxs)(r.p,{children:["admission-controller: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/admission-controller:v1.69.0"}),"\napiserver: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/apiserver:v1.69.0"}),"\ncontroller-manager: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/controller-manager:v1.69.0"}),"\nscheduler: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/scheduler:v1.69.0"}),"\noperator: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/operator:v1.69.0"}),"\ngardenlet: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/gardenlet:v1.69.0"}),"\nresource-manager: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/resource-manager:v1.69.0"})]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update provider-azure to ",(0,s.jsx)(r.code,{children:"1.35.1"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardener-extension-provider-azure",children:"[gardener-extension-provider-azure]"}),"\n",(0,s.jsx)(r.h2,{id:"-others-1",children:"\ud83c\udfc3 Others"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," Restore terraform behavior to delete the azure resource group even if it contains other resources. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener-extension-provider-azure/pull/676",children:"gardener/gardener-extension-provider-azure#676"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/kon-angelo",children:"@kon-angelo"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,s.jsx)(r.code,{children:"1.69.1"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardener-1",children:"[gardener]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-1",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," Prevent nil pointer exceptions on shoot deletion in ",(0,s.jsx)(r.code,{children:"gardenlet"})," when seed namespace is gone. (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener/pull/7833",children:"gardener/gardener#7833"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/gardener-ci-robot",children:"@gardener-ci-robot"}),")"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"docker-images-1",children:"Docker Images"}),"\n",(0,s.jsxs)(r.p,{children:["admission-controller: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/admission-controller:v1.69.1"}),"\napiserver: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/apiserver:v1.69.1"}),"\ncontroller-manager: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/controller-manager:v1.69.1"}),"\nscheduler: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/scheduler:v1.69.1"}),"\noperator: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/operator:v1.69.1"}),"\ngardenlet: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/gardenlet:v1.69.1"}),"\nresource-manager: ",(0,s.jsx)(r.code,{children:"eu.gcr.io/gardener-project/gardener/resource-manager:v1.69.1"})]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update provider-openstack to ",(0,s.jsx)(r.code,{children:"1.33.1"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardener-extension-provider-openstack",children:"[gardener-extension-provider-openstack]"}),"\n",(0,s.jsx)(r.h2,{id:"-bug-fixes-2",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"[OPERATOR]"})," Add missing network policy labels to extension controller pod template (",(0,s.jsx)(r.a,{href:"https://github.com/gardener/gardener-extension-provider-openstack/pull/611",children:"gardener/gardener-extension-provider-openstack#611"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/kon-angelo",children:"@kon-angelo"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update cloudprofiles to ",(0,s.jsx)(r.code,{children:"0.5.1"})]})}),"\n",(0,s.jsx)(r.h2,{id:"whats-changed",children:"What's Changed"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["feat/gen cloudprofiles openstack by @mxmxchere in ",(0,s.jsx)(r.a,{href:"https://github.com/gardener-community/cloudprofiles/pull/17",children:"https://github.com/gardener-community/cloudprofiles/pull/17"})]}),"\n",(0,s.jsxs)(r.li,{children:["Ignores upstream versions if latest is lower than highest local version by @mxmxchere in ",(0,s.jsx)(r.a,{href:"https://github.com/gardener-community/cloudprofiles/pull/19",children:"https://github.com/gardener-community/cloudprofiles/pull/19"})]}),"\n",(0,s.jsxs)(r.li,{children:["Alters the k8s-version tracking script so that only patch versions are tracked by @23t-machine-user in ",(0,s.jsx)(r.a,{href:"https://github.com/gardener-community/cloudprofiles/pull/21",children:"https://github.com/gardener-community/cloudprofiles/pull/21"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["@23t-machine-user made their first contribution in ",(0,s.jsx)(r.a,{href:"https://github.com/gardener-community/cloudprofiles/pull/21",children:"https://github.com/gardener-community/cloudprofiles/pull/21"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Full Changelog"}),": ",(0,s.jsx)(r.a,{href:"https://github.com/gardener-community/cloudprofiles/compare/0.5.0...0.5.1",children:"https://github.com/gardener-community/cloudprofiles/compare/0.5.0...0.5.1"})]}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update provider-hcloud to ",(0,s.jsx)(r.code,{children:"0.6.14"})]})}),"\n",(0,s.jsx)(r.h1,{id:"gardener-extension-provider-hcloud-v0614",children:"[gardener-extension-provider-hcloud] v0.6.14"}),"\n"]}),"\n",(0,s.jsxs)(r.details,{children:["\n",(0,s.jsx)(r.summary,{children:(0,s.jsxs)(r.b,{children:["Update cloudprofiles to ",(0,s.jsx)(r.code,{children:"0.6.1"})]})}),"\n",(0,s.jsx)(r.h2,{id:"whats-changed-1",children:"What's Changed"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Disables OVH by default, fixes regiocloud machine version and CRI by @mxmxchere in ",(0,s.jsx)(r.a,{href:"https://github.com/gardener-community/cloudprofiles/pull/22",children:"https://github.com/gardener-community/cloudprofiles/pull/22"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Full Changelog"}),": ",(0,s.jsx)(r.a,{href:"https://github.com/gardener-community/cloudprofiles/compare/0.6.0...0.6.1",children:"https://github.com/gardener-community/cloudprofiles/compare/0.6.0...0.6.1"})]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>o});var s=n(67294);const d={},i=s.createContext(d);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);