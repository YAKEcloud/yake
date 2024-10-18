"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84231],{91567:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=a(85893),o=a(11151);const r={sidebar_position:3},s="Scaling out with Managed Seeds",d={id:"guides/managed-seeds",title:"Scaling out with Managed Seeds",description:"Deployment of ManagedSeeds in 23KE",source:"@site/versioned_docs/version-1.77.x/guides/managed-seeds.md",sourceDirName:"guides",slug:"/guides/managed-seeds",permalink:"/docs/1.77.x/guides/managed-seeds",draft:!1,unlisted:!1,editUrl:"https://github.com/yakecloud/yake/tree/main/docs/versioned_docs/version-1.77.x/guides/managed-seeds.md",tags:[],version:"1.77.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Use custom container registry",permalink:"/docs/1.77.x/guides/registryOverwrite"},next:{title:"Future Guides",permalink:"/docs/1.77.x/guides/"}},i={},c=[{value:"Deployment of <code>ManagedSeeds</code> in 23KE",id:"deployment-of-managedseeds-in-23ke",level:2},{value:"Deployment of wildcard certificate for Grafana/Prometheus dashboards",id:"deployment-of-wildcard-certificate-for-grafanaprometheus-dashboards",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"scaling-out-with-managed-seeds",children:"Scaling out with Managed Seeds"})}),"\n",(0,t.jsxs)(n.h2,{id:"deployment-of-managedseeds-in-23ke",children:["Deployment of ",(0,t.jsx)(n.code,{children:"ManagedSeeds"})," in 23KE"]}),"\n",(0,t.jsxs)(n.p,{children:["Conceptually, a ",(0,t.jsx)(n.a,{href:"https://gardener.cloud/docs/gardener/usage/managed_seed/",children:"managed seed"})," is a ",(0,t.jsx)(n.code,{children:"Shoot"})," cluster which is registered as ",(0,t.jsx)(n.code,{children:"Seed"})," cluster. Thus, an operator has to deploy two resources to the virtual garden: a ",(0,t.jsx)(n.code,{children:"Shoot"})," and a ",(0,t.jsx)(n.code,{children:"ManagedSeed"}),". In consequence, Gardener will take care for the ",(0,t.jsx)(n.code,{children:"Shoot"})," and register it as ",(0,t.jsx)(n.code,{children:"Seed"}),".\nIn 23KE, you can maintain managed seeds via the GitOps approach. For this, two ",(0,t.jsx)(n.code,{children:"Kustomization"}),"s are required. One is responsible for the creation of ",(0,t.jsx)(n.code,{children:"Shoot"})," Clusters and the other one for the creation of ",(0,t.jsx)(n.code,{children:"ManagedSeed"})," resources. Examples for these ",(0,t.jsx)(n.code,{children:"Kustomization"}),"s are given below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: shoots\n  namespace: flux-system\nspec:\n  kubeConfig:\n\tsecretRef:\n\t  name: gardener-internal-kubeconfig\n  interval: 1m0s\n  dependsOn:\n\t- name: 23ke-env-garden-content\n  sourceRef:\n\tkind: GitRepository\n\tname: 23ke-config\n  path: ./seeds/shoots\n  prune: false\n---\napiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: seeds\n  namespace: flux-system\nspec:\n  kubeConfig:\n\tsecretRef:\n\t  name: gardener-internal-kubeconfig\n  interval: 1m0s\n  dependsOn:\n\t- name: 23ke-env-garden-content\n\t- name: shoots\n  sourceRef:\n\tkind: GitRepository\n\tname: 23ke-config\n  path: ./seeds\n  prune: false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"Kustomization"}),"s point to a directory called ",(0,t.jsx)(n.code,{children:"seeds"})," (and the subdirectory ",(0,t.jsx)(n.code,{children:"seeds/shoots"}),") in the repository root. Consequently, all required manifests have to be stored in these directories. As the directory names already indicate, the ",(0,t.jsx)(n.code,{children:"Shoot"})," manifests are organized in the ",(0,t.jsx)(n.code,{children:"seeds/shoots"})," directory and the ",(0,t.jsx)(n.code,{children:"ManagedSeed"})," manifests in the seeds directory, respectively. The easiest option to obtain a valid ",(0,t.jsx)(n.code,{children:"Shoot"})," manifest for your 23KE environment is to configure a shoot via the Gardener dashboard and just copy over the corresponding yaml manifest."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["It is recommended to use a dedicated cloud provider secret for the ",(0,t.jsx)(n.code,{children:"Shoots"})," to be registered as ",(0,t.jsx)(n.code,{children:"Seeds"}),". Therefore, you might need to create a corresponding secret. Also here, the easiest way to create it is via the Gardener Dashboard."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Keep in mind that the ",(0,t.jsx)(n.code,{children:"Shoot"})," will be used as ",(0,t.jsx)(n.code,{children:"Seed"})," and should be equipped with meaningful resources, e.g. a minimum amount of 3 workers with 8vCPU and 32GB RAM."]})}),"\n",(0,t.jsxs)(n.p,{children:["For the ",(0,t.jsx)(n.code,{children:"ManagedSeed"})," manifest, an example is given below. You can also find an example in the ",(0,t.jsx)(n.a,{href:"https://github.com/gardener/gardener/blob/master/example/55-managedseed-gardenlet.yaml",children:"Gardener upstream repository"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: seedmanagement.gardener.cloud/v1alpha1\nkind: ManagedSeed\nmetadata:\n  name: my-region-0\n  namespace: garden # Must be garden\nspec:\n  shoot:\n    name: my-region-0 # has to be the name of the shoot to be used\n  # gardenlet specifies that the ManagedSeed controller should deploy a gardenlet into the cluster\n  # with the given deployment parameters and GardenletConfiguration.\n  gardenlet:\n    config: # GardenletConfiguration resource\n      apiVersion: gardenlet.config.gardener.cloud/v1alpha1\n      kind: GardenletConfiguration\n      seedConfig:\n        metadata:\n          labels:\n            name: my-region-0\n        taints:\n          seed.gardener.cloud/protected: false\n        spec:\n          dns:\n            provider:\n              type: # a valid dns provider\n              secretRef:\n                name: default-domain-gardener-... # the default-domain-secret of your environment\n                namespace: garden\n          ingress:\n            domain: ingress.my-region-0.garden.BASEDOMAIN # replace BASEDOMAIN with your domain\n            controller:\n              kind: nginx\n          networks:\n            shootDefaults:\n              pods: 100.74.0.0/16\n              services: 100.96.0.0/13\n          provider:\n            region: MYREGION\n            type: # your cluster provider type\n          backup:\n            provider: # your backup provider type\n            region: # your backup provider region\n            secretRef:\n              name: # your backup provider secret\n              namespace: # your backup provider secret namespace\n          settings:\n            scheduling:\n              visible: true\n            excessCapacityReservation:\n              enabled: true\n      featureGates:\n        HVPA: true\n        HVPAForShootedSeed: true\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You will need to provide a ",(0,t.jsx)(n.code,{children:"Secret"})," for your backup provider in advance, if you want to enable backups on this ",(0,t.jsx)(n.code,{children:"Seed"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"deployment-of-wildcard-certificate-for-grafanaprometheus-dashboards",children:"Deployment of wildcard certificate for Grafana/Prometheus dashboards"}),"\n",(0,t.jsxs)(n.p,{children:["We prepared everything in 23KE so that the only thing you need to do is to set a label in the ",(0,t.jsx)(n.code,{children:"SeedConfig"})," in your ",(0,t.jsx)(n.code,{children:"managedSeed"})," resource with ",(0,t.jsx)(n.code,{children:'23ke.cloud/generate-controlplane-cert="true"'}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: seedmanagement.gardener.cloud/v1alpha1\nkind: ManagedSeed\nspec:\n  shoot:\n    ...\n  gardenlet:\n    ...\n      seedConfig:\n        metadata:\n          labels:\n            ...\n            23ke.cloud/generate-controlplane-cert: "true"\n'})}),"\n",(0,t.jsx)(n.p,{children:"When this label is set, your Grafana/Prometheus dashboard should be equipped with a browser trusted certificate."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>s});var t=a(67294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);