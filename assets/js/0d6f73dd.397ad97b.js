"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52350],{75424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=t(85893),a=t(11151);const o={sidebar_position:3},r="Scaling out with Managed Seeds",d={id:"guides/managed-seeds",title:"Scaling out with Managed Seeds",description:"Deployment of ManagedSeeds in 23KE",source:"@site/versioned_docs/version-1.72.x/guides/managed-seeds.md",sourceDirName:"guides",slug:"/guides/managed-seeds",permalink:"/docs/1.72.x/guides/managed-seeds",draft:!1,unlisted:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.72.x/guides/managed-seeds.md",tags:[],version:"1.72.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Use custom container registry",permalink:"/docs/1.72.x/guides/registryOverwrite"},next:{title:"Future Guides",permalink:"/docs/1.72.x/guides/"}},i={},c=[{value:"Deployment of <code>ManagedSeeds</code> in 23KE",id:"deployment-of-managedseeds-in-23ke",level:2},{value:"Deployment of wildcard certificate for Grafana/Prometheus dashboards",id:"deployment-of-wildcard-certificate-for-grafanaprometheus-dashboards",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"scaling-out-with-managed-seeds",children:"Scaling out with Managed Seeds"}),"\n",(0,s.jsxs)(n.h2,{id:"deployment-of-managedseeds-in-23ke",children:["Deployment of ",(0,s.jsx)(n.code,{children:"ManagedSeeds"})," in 23KE"]}),"\n",(0,s.jsxs)(n.p,{children:["Conceptually, a ",(0,s.jsx)(n.a,{href:"https://gardener.cloud/docs/gardener/usage/managed_seed/",children:"managed seed"})," is a ",(0,s.jsx)(n.code,{children:"Shoot"})," cluster which is registered as ",(0,s.jsx)(n.code,{children:"Seed"})," cluster. Thus, an operator has to deploy two resources to the virtual garden: a ",(0,s.jsx)(n.code,{children:"Shoot"})," and a ",(0,s.jsx)(n.code,{children:"ManagedSeed"}),". In consequence, Gardener will take care for the ",(0,s.jsx)(n.code,{children:"Shoot"})," and register it as ",(0,s.jsx)(n.code,{children:"Seed"}),".\nIn 23KE, you can maintain managed seeds via the GitOps approach. For this, two ",(0,s.jsx)(n.code,{children:"Kustomization"}),"s are required. One is responsible for the creation of ",(0,s.jsx)(n.code,{children:"Shoot"})," Clusters and the other one for the creation of ",(0,s.jsx)(n.code,{children:"ManagedSeed"})," resources. Examples for these ",(0,s.jsx)(n.code,{children:"Kustomization"}),"s are given below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: shoots\n  namespace: flux-system\nspec:\n  kubeConfig:\n\tsecretRef:\n\t  name: gardener-internal-kubeconfig\n  interval: 1m0s\n  dependsOn:\n\t- name: 23ke-env-garden-content\n  sourceRef:\n\tkind: GitRepository\n\tname: 23ke-config\n  path: ./seeds/shoots\n  prune: false\n---\napiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: seeds\n  namespace: flux-system\nspec:\n  kubeConfig:\n\tsecretRef:\n\t  name: gardener-internal-kubeconfig\n  interval: 1m0s\n  dependsOn:\n\t- name: 23ke-env-garden-content\n\t- name: shoots\n  sourceRef:\n\tkind: GitRepository\n\tname: 23ke-config\n  path: ./seeds\n  prune: false\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"Kustomization"}),"s point to a directory called ",(0,s.jsx)(n.code,{children:"seeds"})," (and the subdirectory ",(0,s.jsx)(n.code,{children:"seeds/shoots"}),") in the repository root. Consequently, all required manifests have to be stored in these directories. As the directory names already indicate, the ",(0,s.jsx)(n.code,{children:"Shoot"})," manifests are organized in the ",(0,s.jsx)(n.code,{children:"seeds/shoots"})," directory and the ",(0,s.jsx)(n.code,{children:"ManagedSeed"})," manifests in the seeds directory, respectively. The easiest option to obtain a valid ",(0,s.jsx)(n.code,{children:"Shoot"})," manifest for your 23KE environment is to configure a shoot via the Gardener dashboard and just copy over the corresponding yaml manifest."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["It is recommended to use a dedicated cloud provider secret for the ",(0,s.jsx)(n.code,{children:"Shoots"})," to be registered as ",(0,s.jsx)(n.code,{children:"Seeds"}),". Therefore, you might need to create a corresponding secret. Also here, the easiest way to create it is via the Gardener Dashboard."]})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Keep in mind that the ",(0,s.jsx)(n.code,{children:"Shoot"})," will be used as ",(0,s.jsx)(n.code,{children:"Seed"})," and should be equipped with meaningful resources, e.g. a minimum amount of 3 workers with 8vCPU and 32GB RAM."]})}),"\n",(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.code,{children:"ManagedSeed"})," manifest, an example is given below. You can also find an example in the ",(0,s.jsx)(n.a,{href:"https://github.com/gardener/gardener/blob/master/example/55-managedseed-gardenlet.yaml",children:"Gardener upstream repository"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: seedmanagement.gardener.cloud/v1alpha1\nkind: ManagedSeed\nmetadata:\n  name: my-region-0\n  namespace: garden # Must be garden\nspec:\n  shoot:\n\tname: my-region-0 # has to be the name of the shoot to be used\n  # gardenlet specifies that the ManagedSeed controller should deploy a gardenlet into the cluster\n  # with the given deployment parameters and GardenletConfiguration.\n  gardenlet:\n\tconfig: # GardenletConfiguration resource\n\t  apiVersion: gardenlet.config.gardener.cloud/v1alpha1\n\t  kind: GardenletConfiguration\n\t  seedConfig:\n\t\tmetadata:\n\t\t  labels:\n\t\t\tname: my-region-0\n\t\ttaints:\n\t\t  seed.gardener.cloud/protected: false\n\t\tspec:\n\t\t  dns:\n\t\t\tprovider:\n\t\t\t  type: # a valid dns provider\n\t\t\t  secretRef:\n\t\t\t\tname: default-domain-gardener-... # the default-domain-secret of your environment\n\t\t\t\tnamespace: garden\n\t\t  ingress:\n\t\t\tdomain: ingress.my-region-0.garden.BASEDOMAIN # replace BASEDOMAIN with your domain\n\t\t\tcontroller:\n\t\t\t  kind: nginx\n\t\t  networks:\n\t\t\tshootDefaults:\n\t\t\t  pods: 100.74.0.0/16\n\t\t\t  services: 100.96.0.0/13\n\t\t  provider:\n\t\t\tregion: MYREGION\n\t\t\ttype: # your cluster provider type\n\t\t  backup:\n\t\t\tprovider: # your backup provider type\n\t\t\tregion: # your backup provider region\n\t\t\tsecretRef:\n\t\t\t  name: # your backup provider secret\n\t\t\t  namespace: # your backup provider secret namespace\n\t\t  settings:\n\t\t\tscheduling:\n\t\t\t  visible: true\n\t\t\texcessCapacityReservation:\n\t\t\t  enabled: true\n\t  featureGates:\n\t\tHVPA: true\n\t\tHVPAForShootedSeed: true\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You will need to provide a ",(0,s.jsx)(n.code,{children:"Secret"})," for your backup provider in advance, if you want to enable backups on this ",(0,s.jsx)(n.code,{children:"Seed"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"deployment-of-wildcard-certificate-for-grafanaprometheus-dashboards",children:"Deployment of wildcard certificate for Grafana/Prometheus dashboards"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use e.g. the Grafana dashboard of a ",(0,s.jsx)(n.code,{children:"Shoot"})," cluster hosted on the ",(0,s.jsx)(n.code,{children:"ManagedSeed"}),", you will need to make sure that the ",(0,s.jsx)(n.code,{children:"ManagedSeed"})," can make use of browser trusted certificates. It is possible to use the ",(0,s.jsx)(n.code,{children:"extension-shoot-cert-service"})," for this purpose, as a ",(0,s.jsx)(n.code,{children:"ManagedSeed"})," is also a ",(0,s.jsx)(n.code,{children:"Shoot"}),". For this reason, you need to enable this extension on ",(0,s.jsx)(n.code,{children:"Shoot"}),"s to be used as ",(0,s.jsx)(n.code,{children:"ManagedSeed"}),"s, i.e."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kind: Shoot\napiVersion: core.gardener.cloud/v1beta1\nmetadata: ...\nspec:\n  extensions:\n    - type: shoot-cert-service\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, you can apply a ",(0,s.jsx)(n.code,{children:"Certificate"})," resource directly to the ",(0,s.jsx)(n.code,{children:"Shoot"})," cluster used for the ",(0,s.jsx)(n.code,{children:"ManagedSeed"}),". An example ",(0,s.jsx)(n.code,{children:"Certificate"})," resource manifest is given below"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: cert.gardener.cloud/v1alpha1\nkind: Certificate\nmetadata:\n  name: seed-ingress\n  namespace: garden\nspec:\n  commonName: '*.ingress.my-region-0.garden.BASE_DOMAIN'\n  issuerRef:\n\tname: garden\n  secretRef:\n\tname: seed-ingress-certificate\n\tnamespace: garden\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This instructs the ",(0,s.jsx)(n.code,{children:"extension-shoot-cert-service"})," to create a ",(0,s.jsx)(n.code,{children:"Secret"})," containing the certificate data. In order to use this secret as certificate for every ",(0,s.jsx)(n.code,{children:"Ingress"}),' in the cluster, it needs to have the "magic" label ',(0,s.jsx)(n.code,{children:"gardener.cloud/role: controlplane-cert"}),". Consequently, you have to label the ",(0,s.jsx)(n.code,{children:"Secret"})," as soon as it exists:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl label -n garden secret seed-ingress-certificate gardener.cloud/role=controlplane-cert\n"})}),"\n",(0,s.jsx)(n.p,{children:"Afterwards, your Grafana urls should be equipped with a browser trusted certificate."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["We are aware of the fact that these steps require some manual effort and this is not really inline with the idea of a ",(0,s.jsx)(n.code,{children:"ManagedSeed"}),". However, at the moment this is the way to go, and we are looking forward to make things easier via e.g. a Gardener extension which automates the manual process."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(67294);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);