"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65547],{98927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=n(85893),l=n(11151);const r={sidebar_position:4},i="Gardener Extensions Configuration",d={id:"architecture-configuration/extensions-config",title:"Gardener Extensions Configuration",description:"Other than the core Gardener components, Gardener extensions are configured through a 23KE internal helm chart. Consequently, you cannot retrieve any information about possible values via e.g. the helm cli. For this reason the extension-values Secret is documented here. As the other configuration secrets, the secret's header looks like the following:",source:"@site/versioned_docs/version-1.71.x/architecture-configuration/extensions-config.md",sourceDirName:"architecture-configuration",slug:"/architecture-configuration/extensions-config",permalink:"/docs/1.71.x/architecture-configuration/extensions-config",draft:!1,unlisted:!1,editUrl:"https://github.com/yakecloud/yake/tree/main/docs/versioned_docs/version-1.71.x/architecture-configuration/extensions-config.md",tags:[],version:"1.71.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"The 23KE config git repository",permalink:"/docs/1.71.x/architecture-configuration/23ke-config-gitrepo"},next:{title:"Working with Helm and Flux",permalink:"/docs/1.71.x/architecture-configuration/helm-flux"}},x={},o=[];function c(e){const t={a:"a",br:"br",code:"code",h1:"h1",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"gardener-extensions-configuration",children:"Gardener Extensions Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["Other than the core Gardener components, Gardener extensions are configured through a 23KE internal helm chart. Consequently, you cannot retrieve any information about possible values via e.g. the ",(0,s.jsx)(t.a,{href:"https://helm.sh",children:"helm"})," cli. For this reason the ",(0,s.jsx)(t.code,{children:"extension-values"})," Secret is documented here. As the other configuration secrets, the secret's header looks like the following:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: extensions-values\n  namespace: flux-system\ntype: Opaque\nstringData:\n  values.yaml: |\n  ...\n"})}),"\n",(0,s.jsx)(t.p,{children:"Possbile values are:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Field"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Subfield"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"os-ubuntu"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-os-ubuntu/blob/master/charts/gardener-extension-os-ubuntu/values.yaml",children:"os-ubuntu values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"os-gardenlinux"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-os-gardenlinux/blob/master/charts/gardener-extension-os-gardenlinux/values.yaml",children:"os-gardenlinux-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"provider-hcloud"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/23technologies/gardener-extension-provider-hcloud/blob/main/charts/gardener-extension-provider-hcloud/values.yaml",children:"provider-hcloud-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"provider-azure"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"admission"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension's admission controller"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-provider-azure/blob/master/charts/gardener-extension-provider-azure/values.yaml",children:"provider-azure-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"provider-openstack"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"admission"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension's admission controller"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-provider-openstack/blob/master/charts/gardener-extension-provider-openstack/values.yaml",children:"provider-openstack-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"provider-aws"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-provider-aws/blob/master/charts/gardener-extension-provider-aws/values.yaml",children:"provider-aws-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"provider-gcp"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-provider-gcp/blob/master/charts/gardener-extension-provider-gcp/values.yaml",children:"provider-gcp-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"provider-alicloud"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-provider-alicloud/blob/master/charts/gardener-extension-provider-alicloud/values.yaml",children:"provider-alicloud-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"networking-calico"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-networking-calico/blob/master/charts/gardener-extension-networking-calico/values.yaml",children:"networking-calico-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"networking-cilium"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-networking-cilium/blob/master/charts/gardener-extension-networking-cilium/values.yaml",children:"networking-cilium-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"runtime-gvisor"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-runtime-gvisor/blob/master/charts/gardener-extension-runtime-gvisor/values.yaml",children:"runtime-gvisor-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"shoot-dns-service"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"globallyEnabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["enables the extension globally, i.e. for every ",(0,s.jsx)(t.code,{children:"Shoot"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-shoot-dns-service/blob/master/charts/gardener-extension-shoot-dns-service/values.yaml",children:"shoot-dns-service-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"shoot-cert-service"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"enabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"enables the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"globallyEnabled"})," ",(0,s.jsx)(t.br,{})," bool"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["enables the extension globally, i.e. for every ",(0,s.jsx)(t.code,{children:"Shoot"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"version"})," ",(0,s.jsx)(t.br,{})," string"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"version of the extension"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"values"}),"  ",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.a,{href:"https://github.com/gardener/gardener-extension-shoot-cert-service/blob/master/charts/gardener-extension-shoot-cert-service/values.yaml",children:"shoot-cert-service-values"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"values for the extension's helm chart"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(67294);const l={},r=s.createContext(l);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);