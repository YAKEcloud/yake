"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22945],{68623:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=t(85893),a=t(11151);const s={slug:"gardener-chart-releaser",title:"A Single Point of Truth for Gardener Helm Charts",authors:["jensac","mxmxchere"],tags:["gardener","gardener-community"]},o=void 0,i={permalink:"/blog/gardener-chart-releaser",editUrl:"https://github.com/yakecloud/yake/tree/main/docs/blog/2022-09-19-gardener-chart-releaser.md",source:"@site/blog/2022-09-19-gardener-chart-releaser.md",title:"A Single Point of Truth for Gardener Helm Charts",description:"TLDR;",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[{label:"gardener",permalink:"/blog/tags/gardener"},{label:"gardener-community",permalink:"/blog/tags/gardener-community"}],readingTime:5.08,hasTruncateMarker:!1,authors:[{name:"Jens Schneider",title:"software engineer",url:"https://github.com/jensac",imageURL:"https://github.com/jensac.png",key:"jensac"},{name:"Malte M\xfcnch",url:"https://github.com/mxmxchere",imageURL:"https://github.com/mxmxchere.png",key:"mxmxchere"}],frontMatter:{slug:"gardener-chart-releaser",title:"A Single Point of Truth for Gardener Helm Charts",authors:["jensac","mxmxchere"],tags:["gardener","gardener-community"]},unlisted:!1,prevItem:{title:"Hack-The-Garden - the Remote Hackathon Experience",permalink:"/blog/hack-the-garden"},nextItem:{title:"Getting started with Gardener extension development",permalink:"/blog/gardener-ext-dev"}},l={authorsImageUrls:[void 0,void 0]},h=[{value:"TLDR;",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"The Gardener Chart Releaser",id:"the-gardener-chart-releaser",level:2},{value:"Export the charts to a local directory",id:"export-the-charts-to-a-local-directory",level:3},{value:"Update all version field to the latest version",id:"update-all-version-field-to-the-latest-version",level:3},{value:"Handling Gardener extensions",id:"handling-gardener-extensions",level:2},{value:"Running the release process nightly",id:"running-the-release-process-nightly",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"tldr",children:"TLDR;"}),"\n",(0,n.jsxs)(r.p,{children:["Recently, we consolidated Gardener related Helm charts in a helm repository hosted on GitHub pages of the ",(0,n.jsx)(r.a,{href:"https://github.com/gardener-community/gardener-charts",children:"gardener-charts"})," repository.\nFor this purpose we implemented a custom chart release bot - the ",(0,n.jsx)(r.a,{href:"https://github.com/gardener-community/gardener-chart-releaser",children:"gardener-chart-releaser"}),".\nKeep on reading to find out more."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Table of Contents"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#tldr",children:"TLDR;"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"#the-gardener-chart-releaser",children:"The Gardener Chart Releaser"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#export-the-charts-to-a-local-directory",children:"Export the charts to a local directory"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#update-all-version-field-to-the-latest-version",children:"Update all version field to the latest version"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#handling-gardener-extensions",children:"Handling Gardener extensions"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#running-the-release-process-nightly",children:"Running the release process nightly"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#summary",children:"Summary"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(r.p,{children:["Installing ",(0,n.jsx)(r.a,{href:"https://github.com/gardener/gardener",children:"Gardener"})," is a complicated process, even though the ",(0,n.jsx)(r.a,{href:"https://github.com/gardener/garden-setup",children:"garden-setup"})," installer is provided in the same GitHub organization space. One of the reasons is that the Gardener related Helm charts are spread over multiple repositories.\nConsequently, other Helm chart-based installers like ",(0,n.jsx)(r.a,{href:"https://github.com/schrodit/gardener-installation",children:"Schrodit's"})," ",(0,n.jsx)(r.a,{href:"https://github.com/schrodit/gardener-installation",children:"gardener-installation"})," popped up.\nMoreover, we consolidated gardener related Helm charts in the ",(0,n.jsx)(r.a,{href:"https://github.com/23technologies/23ke-charts",children:"23ke-charts"})," repository by a simple Python script, and developed a very ",(0,n.jsx)(r.a,{href:"https://github.com/23technologies/23ke-charts/tree/main/hack/gardener-from-helmcharts",children:"basic installation approach"})," based on these charts.\nThe chart collection was released in a Helm repository hosted on GitHub pages by helm's ",(0,n.jsx)(r.a,{href:"https://github.com/helm/chart-releaser",children:"chart-releaser"}),".\nWith the consolidation of the Gardener charts, we faced the issue that the collected charts need to be kept up to date somehow.\nThere our journey begins, and we started to keep track of the upstream charts with the help of ",(0,n.jsx)(r.a,{href:"https://github.com/renovatebot/renovate",children:"renovate"}),".\nHowever, renovate is designed to keep dependencies up to date and finds its limitations, when it comes to tracking multiple versions of the same piece of software.\nFirst, we tried to find a workaround by tracking three branches for the last three minor versions and shifted the latest branch, as soon as a new minor release appeared.\nEven though this approach could potentially succeed, we were running into issues from time to time due to missing automatic merges, or failures in the branch shift routine.\nAs a consequence, we decided to build our own tracking tool, the ",(0,n.jsx)(r.a,{href:"https://github.com/gardener-community/gardener-chart-releaser",children:"gardener-chart-releaser"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"the-gardener-chart-releaser",children:"The Gardener Chart Releaser"}),"\n",(0,n.jsxs)(r.p,{children:["As already stated above, we wanted to keep track of the last three minor versions of all Gardener related Helm charts, and release these charts in a single helm repository.\nIn order to achieve this, we needed to make some decisions.\nFirst, we needed to drop our old Python-based Helm chart import script, as working with helm charts in code is way easier, when using the Go-based ",(0,n.jsx)(r.a,{href:"https://github.com/helm/helm/tree/main/pkg",children:"helm packages"})," directly. Further, helm's ",(0,n.jsx)(r.a,{href:"https://github.com/helm/chart-releaser",children:"chart-releaser"})," is written in Go and there exists a solid implementation of a git and GitHub module in Go.\nSo, we reimplemented our chart import and release functionality in Go with a view to tracking the last three minor releases.\nAnother design goal was to keep the tool simple, especially from the user point of view.\nAs of now, the user only needs to worry about a configuration file in yaml format.\nConsider the following example:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"# contents of config.yaml\ndestination:\n\towner: gardener-community\n\trepo: gardener-charts\nsources:\n\t- name: gardener-controlplane\n\t  version: v1.53.0\n\t  repo: gardener/gardener\n\t  charts:\n\t\t- charts/gardener/controlplane\n  - ...\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"destination"})," map defines a GitHub owner and repository, where the collected charts are released.\nUnder ",(0,n.jsx)(r.code,{children:"sources"})," a list of source Helm charts is provided by an ",(0,n.jsx)(r.code,{children:"owner/repo"})," entry and a list of paths pointing to the charts to be released.\nWith a valid ",(0,n.jsx)(r.code,{children:"config.yaml"})," a user can simply run"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"export GITHUB_TOKEN=....\ngardener-chart-releaser update\n"})}),"\n",(0,n.jsxs)(r.p,{children:["and the configured charts will be collected and released.\nNote that the ",(0,n.jsx)(r.code,{children:"version"})," field is ignored for the actual release process, as we want to track several versions.\nHowever, the ",(0,n.jsx)(r.code,{children:"version"})," field has its own reasoning. Keep on reading ;-)"]}),"\n",(0,n.jsx)(r.h3,{id:"export-the-charts-to-a-local-directory",children:"Export the charts to a local directory"}),"\n",(0,n.jsx)(r.p,{children:"Just by collecting and releasing charts to a GitHub repository you won't get to see the charts' contents at all.\nBut what if you want to work with the charts itself in a local development scenario.\nFor this purpose, you can export the charts to a local directory instead of releasing them to a remote repo.\nJust call"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"gardener-chart-releaser export\n"})}),"\n",(0,n.jsxs)(r.p,{children:["and the charts will be exported to a local ",(0,n.jsx)(r.code,{children:"./charts"})," directory.\nIn this case, the ",(0,n.jsx)(r.code,{children:"version"})," field in ",(0,n.jsx)(r.code,{children:"config.yaml"})," defines the version to be exported."]}),"\n",(0,n.jsx)(r.h3,{id:"update-all-version-field-to-the-latest-version",children:"Update all version field to the latest version"}),"\n",(0,n.jsxs)(r.p,{children:["As the entire Gardener ecosystem is moving quickly, your ",(0,n.jsx)(r.code,{children:"config.yaml"})," will be outdated soon.\nIn order to avoid manual updates of the ",(0,n.jsx)(r.code,{children:"version"})," fields, we introduced another command called ",(0,n.jsx)(r.code,{children:"fetchLatestVersions"}),".\nIf you run"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"gardener-chart-releaser fetchLatestVersions\n"})}),"\n",(0,n.jsxs)(r.p,{children:["your ",(0,n.jsx)(r.code,{children:"config.yaml"})," will be updated, so that you will find the versions of the latest upstream releases in the file.\nOf course, it only makes sense to run this before a local export to make sure that the most recent versions of charts are exported."]}),"\n",(0,n.jsx)(r.h2,{id:"handling-gardener-extensions",children:"Handling Gardener extensions"}),"\n",(0,n.jsx)(r.p,{children:"You might be wondering how Gardener extensions are managed in this approach, as these are not provided as Helm charts upstream.\nRemember that we wanted to build a single point of truth for a Gardener provisioning, and consequently the gardener-chart-releaser also packages Gardener extensions as charts.\nFor each entry like e.g."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"sources:\n  - name: runtime-gvisor\n\tversion: v0.5.1\n\trepo: gardener/gardener-extension-runtime-gvisor\n\tcharts:\n\t  - controller-registration\n"})}),"\n",(0,n.jsx)(r.p,{children:"in the configuration file, it will generate a Helm chart for the specified extension and release it the same way as the Gardener core charts.\nFurthermore, this approach provides the opportunity to release charts for the extension itself (i.e. controllerRegistration and controllerDeployment) and the charts for the admission controllers as sub-charts.\nFor instance"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"sources:\n  - name: provider-azure\n\tversion: v1.29.0\n\trepo: gardener/gardener-extension-provider-azure\n\tcharts:\n\t  - controller-registration\n\t  - charts/gardener-extension-admission-azure\n"})}),"\n",(0,n.jsxs)(r.p,{children:["will package a top-level chart called ",(0,n.jsx)(r.code,{children:"provider-azure"})," with sub-charts for the extension controller and admission controller, respectively."]}),"\n",(0,n.jsx)(r.h2,{id:"running-the-release-process-nightly",children:"Running the release process nightly"}),"\n",(0,n.jsxs)(r.p,{children:["As we want to be as transparent as possible, we set up a GitHub ",(0,n.jsx)(r.a,{href:"https://github.com/gardener-community/gardener-charts/actions",children:"action"}),", so that the chart-releaser is run nightly.\nThis will ensure that we do not miss any important upstream change and the Helm repository is always up to date."]}),"\n",(0,n.jsx)(r.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(r.p,{children:"The gardener-chart-releaser enables a single point of truth for Gardener related Helm charts and could be a good starting point for custom Gardener installation routines."})]})}function c(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>o});var n=t(67294);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);