"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64838],{89007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(85893),r=n(11151);const i={sidebar_position:3},c="The 23KE config git repository",s={id:"architecture-configuration/23ke-config-gitrepo",title:"The 23KE config git repository",description:"As already introduced in the architecture diagram, values for the helm charts deployed for the Gardener installation are configured and maintained in a GitOps workflow. Assuming that the initial state of your configuration git repository was set up by 23kectl, your repository tree looks like this:",source:"@site/versioned_docs/version-1.70.x/architecture-configuration/23ke-config-gitrepo.md",sourceDirName:"architecture-configuration",slug:"/architecture-configuration/23ke-config-gitrepo",permalink:"/docs/1.70.x/architecture-configuration/23ke-config-gitrepo",draft:!1,unlisted:!1,editUrl:"https://github.com/yakecloud/yake/tree/main/docs/versioned_docs/version-1.70.x/architecture-configuration/23ke-config-gitrepo.md",tags:[],version:"1.70.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"The 23KE config secret",permalink:"/docs/1.70.x/architecture-configuration/23ke-config-secret"},next:{title:"Gardener Extensions Configuration",permalink:"/docs/1.70.x/architecture-configuration/extensions-config"}},a={},d=[{value:"The <code>config</code> Directory",id:"the-config-directory",level:3},{value:"The <code>garden-content</code> Directory",id:"the-garden-content-directory",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"the-23ke-config-git-repository",children:"The 23KE config git repository"}),"\n",(0,o.jsxs)(t.p,{children:["As already introduced in the ",(0,o.jsx)(t.a,{href:"/docs/1.70.x/architecture-configuration/architecture",children:"architecture diagram"}),", values for the helm charts deployed for the Gardener installation are configured and maintained in a GitOps workflow. Assuming that the initial state of your configuration git repository was set up by ",(0,o.jsx)(t.a,{href:"https://github.com/23technologies/23kectl",children:"23kectl"}),", your repository tree looks like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:".\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u251c\u2500\u2500 cloudprofiles-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 dashboard-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 extensions-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 gardener-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 gardenlet-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 identity-values.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 kustomization.yaml\n\u251c\u2500\u2500 flux\n\u2502\xa0\xa0 \u251c\u2500\u2500 23ke-env-config.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 23ke-env-garden-content.yaml\n\u251c\u2500\u2500 garden-content\n\u2502\xa0\xa0 \u251c\u2500\u2500 admin-clusterrolebinding.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kustomization.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 project-dev.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 rbac.yaml\n\u2514\u2500\u2500 kustomization.yaml\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The top-level ",(0,o.jsx)(t.code,{children:"kustomization.yaml"})," file contains ",(0,o.jsx)(t.a,{href:"https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/",children:(0,o.jsx)(t.code,{children:"Kustomization"})})," pointing to the files in the ",(0,o.jsx)(t.code,{children:"flux"})," directory. Inside the ",(0,o.jsx)(t.code,{children:"flux"})," directory two flux ",(0,o.jsx)(t.code,{children:"Kustomizations"})," ",(0,o.jsx)(t.a,{href:"https://fluxcd.io/flux/components/kustomize/api/",children:(0,o.jsx)(t.code,{children:"Kustomization"})}),"s reside which point to the ",(0,o.jsx)(t.code,{children:"config"})," directory and the ",(0,o.jsx)(t.code,{children:"garden-content"})," directory."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["The top-level ",(0,o.jsx)(t.code,{children:"kustomization.yaml"})," is of type ",(0,o.jsx)(t.code,{children:"kustomize.config.k8s.io/v1beta1"}),", whereas the ",(0,o.jsx)(t.code,{children:"Kustomization"}),"s in the ",(0,o.jsx)(t.code,{children:"flux"})," directory are of type ",(0,o.jsx)(t.code,{children:"kustomize.toolkit.fluxcd.io/v1beta2"}),". Therefore, you will only find the ",(0,o.jsx)(t.code,{children:"Kustomization"}),"s defined in the ",(0,o.jsx)(t.code,{children:"flux"})," directory in your base cluster, when watching ",(0,o.jsx)(t.code,{children:"Kustomization"})," resources."]})}),"\n",(0,o.jsxs)(t.h3,{id:"the-config-directory",children:["The ",(0,o.jsx)(t.code,{children:"config"})," Directory"]}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:"config"}),' directory, you find configuration files defining values for the deployed helm charts. All files entail the same "header", and are constructed like in the following example for ',(0,o.jsx)(t.code,{children:"cloudprofiles-values.yaml"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudprofiles-values\n  namespace: flux-system\ntype: Opaque\nstringData:\n  values.yaml: |\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Below of the key ",(0,o.jsx)(t.code,{children:"stringData.values.yaml"})," you can extend the configuration already generated by ",(0,o.jsx)(t.a,{href:"https://github.com/23technologies/23kectl",children:"23kectl"})," or insert your own configuration."]}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsx)(t.p,{children:"As the upstream helm charts are distributed over several repositories, there is no single documentation page for possible helm chart values. You can get information on the default values by e.g."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sh",children:"helm repo add gardener-charts https://gardener-community.github.io/gardener-charts\nhelm repo update\nhelm show values gardener-charts/<CHART_NAME>\n"})})]}),"\n",(0,o.jsxs)(t.h3,{id:"the-garden-content-directory",children:["The ",(0,o.jsx)(t.code,{children:"garden-content"})," Directory"]}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:"garden-content"})," Directory, resources to be deployed to the ",(0,o.jsx)(t.a,{href:"https://github.com/gardener/garden-setup#concept-the-virtual-cluster",children:"virtual garden"})," are defined. You can easily add some resources, if you need more than the very basic configuration generated by ",(0,o.jsx)(t.a,{href:"https://github.com/23technologies/23kectl",children:"23kectl"})," does not fit your needs. For instance, you can create ",(0,o.jsx)(t.a,{href:"https://gardener.cloud/docs/gardener/api-reference/core/#core.gardener.cloud/v1beta1.Project",children:(0,o.jsx)(t.code,{children:"Project"})}),"s or further ",(0,o.jsx)(t.a,{href:"https://gardener.cloud/docs/gardener/api-reference/core/#core.gardener.cloud/v1beta1.CloudProfile",children:(0,o.jsx)(t.code,{children:"Cloudprofile"})}),"s here."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"garden-content"})," folder also contains a ",(0,o.jsx)(t.code,{children:"kustomization.yaml"})," file which just lists the resources to be deployed to the ",(0,o.jsx)(t.a,{href:"https://github.com/gardener/garden-setup#concept-the-virtual-cluster",children:"virtual garden"}),". You can just comment our resources you do not want to deploy for a moment but still keep in you git repository for documentation purposes."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var o=n(67294);const r={},i=o.createContext(r);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);