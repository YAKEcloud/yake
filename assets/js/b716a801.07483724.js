"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63738],{42953:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var d=n(85893),s=n(11151);const l={hide_table_of_contents:!0},a="Release Notes v1.101",c={id:"v1.101",title:"Release Notes v1.101",description:"Yake release notes and upgrade guide",source:"@site/release-notes/v1.101.md",sourceDirName:".",slug:"/v1.101",permalink:"/release-notes/v1.101",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Release Notes v1.59",permalink:"/release-notes/v1.59"},next:{title:"Release Notes v1.100",permalink:"/release-notes/v1.100"}},o={},i=[{value:"Yake release notes and upgrade guide",id:"yake-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"Helm Charts",id:"helm-charts",level:2},{value:"Docker Images",id:"docker-images-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"Helm Charts",id:"helm-charts-1",level:2},{value:"Docker Images",id:"docker-images-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"Helm Charts",id:"helm-charts-2",level:2},{value:"Docker Images",id:"docker-images-3",level:2}];function t(e){const r={a:"a",b:"b",code:"code",details:"details",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",summary:"summary",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"release-notes-v1101",children:"Release Notes v1.101"}),"\n",(0,d.jsx)(r.h2,{id:"yake-release-notes-and-upgrade-guide",children:"Yake release notes and upgrade guide"}),"\n",(0,d.jsx)(r.h2,{id:"related-upstream-release-notes--changelogs",children:"Related upstream release notes / changelogs"}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update external-dns-management to ",(0,d.jsx)(r.code,{children:"0.20.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenerexternal-dns-management",children:"[gardener/external-dns-management]"}),"\n",(0,d.jsx)(r.h2,{id:"-others",children:"\ud83c\udfc3 Others"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Lookup processor: sort lookup results and retry on timeout by @MartinWeindel [#382]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["dns-controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/dns-controller-manager:v0.20.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update cloudprofiles to ",(0,d.jsx)(r.code,{children:"0.7.14"})]})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"Full Changelog"}),": ",(0,d.jsx)(r.a,{href:"https://github.com/gardener-community/cloudprofiles/compare/0.7.13...0.7.14",children:"https://github.com/gardener-community/cloudprofiles/compare/0.7.13...0.7.14"})]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,d.jsx)(r.code,{children:"1.101.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Disable cloud profile field sync if ",(0,d.jsx)(r.code,{children:"Shoot"})," is being deleted. by @LucaBernstein [#10310]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," A bug has been fixed which prevented ",(0,d.jsx)(r.code,{children:"gardenlet"})," from creating its own ",(0,d.jsx)(r.code,{children:"seedmanagement.gardener.cloud/v1alpha1.Gardenlet"})," resource when ",(0,d.jsx)(r.code,{children:"selfUpgrade"})," was set in its Helm chart values (",(0,d.jsx)(r.a,{href:"https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades",children:"more information"}),"). by @rfranzke [#10306]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["controlplane: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-1",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-controller: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["apiserver: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["node-agent: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["scheduler: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardener-controlplane to ",(0,d.jsx)(r.code,{children:"1.101.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-1",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-1",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Disable cloud profile field sync if ",(0,d.jsx)(r.code,{children:"Shoot"})," is being deleted. by @LucaBernstein [#10310]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," A bug has been fixed which prevented ",(0,d.jsx)(r.code,{children:"gardenlet"})," from creating its own ",(0,d.jsx)(r.code,{children:"seedmanagement.gardener.cloud/v1alpha1.Gardenlet"})," resource when ",(0,d.jsx)(r.code,{children:"selfUpgrade"})," was set in its Helm chart values (",(0,d.jsx)(r.a,{href:"https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades",children:"more information"}),"). by @rfranzke [#10306]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-1",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["controlplane: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-2",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-controller: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["apiserver: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["node-agent: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["scheduler: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.1"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.details,{children:["\n",(0,d.jsx)(r.summary,{children:(0,d.jsxs)(r.b,{children:["Update gardenlet to ",(0,d.jsx)(r.code,{children:"1.101.1"})]})}),"\n",(0,d.jsx)(r.h1,{id:"gardenergardener-2",children:"[gardener/gardener]"}),"\n",(0,d.jsx)(r.h2,{id:"-bug-fixes-2",children:"\ud83d\udc1b Bug Fixes"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," Disable cloud profile field sync if ",(0,d.jsx)(r.code,{children:"Shoot"})," is being deleted. by @LucaBernstein [#10310]"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"[OPERATOR]"})," A bug has been fixed which prevented ",(0,d.jsx)(r.code,{children:"gardenlet"})," from creating its own ",(0,d.jsx)(r.code,{children:"seedmanagement.gardener.cloud/v1alpha1.Gardenlet"})," resource when ",(0,d.jsx)(r.code,{children:"selfUpgrade"})," was set in its Helm chart values (",(0,d.jsx)(r.a,{href:"https://github.com/gardener/gardener/blob/master/docs/deployment/deploy_gardenlet_manually.md#optional-enable-self-upgrades",children:"more information"}),"). by @rfranzke [#10306]"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"helm-charts-2",children:"Helm Charts"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["controlplane: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/controlplane:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/gardenlet:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/operator:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/charts/gardener/resource-manager:v1.101.1"})]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"docker-images-3",children:"Docker Images"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["admission-controller: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/admission-controller:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["apiserver: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/apiserver:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["controller-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/controller-manager:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["gardenlet: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/gardenlet:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["node-agent: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/node-agent:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["operator: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/operator:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["resource-manager: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/resource-manager:v1.101.1"})]}),"\n",(0,d.jsxs)(r.li,{children:["scheduler: ",(0,d.jsx)(r.code,{children:"europe-docker.pkg.dev/gardener-project/releases/gardener/scheduler:v1.101.1"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>a});var d=n(67294);const s={},l=d.createContext(s);function a(e){const r=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(l.Provider,{value:r},e.children)}}}]);