"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52350],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(g,i(i({ref:n},l),{},{components:t})):a.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:3},i="Scaling out with Managed Seeds",s={unversionedId:"guides/managed-seeds",id:"version-1.72.x/guides/managed-seeds",title:"Scaling out with Managed Seeds",description:"Deployment of ManagedSeeds in 23KE",source:"@site/versioned_docs/version-1.72.x/guides/managed-seeds.md",sourceDirName:"guides",slug:"/guides/managed-seeds",permalink:"/docs/1.72.x/guides/managed-seeds",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.72.x/guides/managed-seeds.md",tags:[],version:"1.72.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Use custom container registry",permalink:"/docs/1.72.x/guides/registryOverwrite"},next:{title:"Future Guides",permalink:"/docs/1.72.x/guides/"}},d={},p=[{value:"Deployment of <code>ManagedSeeds</code> in 23KE",id:"deployment-of-managedseeds-in-23ke",level:2},{value:"Deployment of wildcard certificate for Grafana/Prometheus dashboards",id:"deployment-of-wildcard-certificate-for-grafanaprometheus-dashboards",level:2}],l={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scaling-out-with-managed-seeds"},"Scaling out with Managed Seeds"),(0,r.kt)("h2",{id:"deployment-of-managedseeds-in-23ke"},"Deployment of ",(0,r.kt)("inlineCode",{parentName:"h2"},"ManagedSeeds")," in 23KE"),(0,r.kt)("p",null,"Conceptually, a ",(0,r.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/gardener/usage/managed_seed/"},"managed seed")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," cluster which is registered as ",(0,r.kt)("inlineCode",{parentName:"p"},"Seed")," cluster. Thus, an operator has to deploy two resources to the virtual garden: a ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed"),". In consequence, Gardener will take care for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," and register it as ",(0,r.kt)("inlineCode",{parentName:"p"},"Seed"),".\nIn 23KE, you can maintain managed seeds via the GitOps approach. For this, two ",(0,r.kt)("inlineCode",{parentName:"p"},"Kustomization"),"s are required. One is responsible for the creation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," Clusters and the other one for the creation of ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed")," resources. Examples for these ",(0,r.kt)("inlineCode",{parentName:"p"},"Kustomization"),"s are given below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: shoots\n  namespace: flux-system\nspec:\n  kubeConfig:\n    secretRef:\n      name: gardener-internal-kubeconfig\n  interval: 1m0s\n  dependsOn:\n    - name: 23ke-env-garden-content\n  sourceRef:\n    kind: GitRepository\n    name: 23ke-config\n  path: ./seeds/shoots\n  prune: false\n---\napiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: seeds\n  namespace: flux-system\nspec:\n  kubeConfig:\n    secretRef:\n      name: gardener-internal-kubeconfig\n  interval: 1m0s\n  dependsOn:\n    - name: 23ke-env-garden-content\n    - name: shoots\n  sourceRef:\n    kind: GitRepository\n    name: 23ke-config\n  path: ./seeds\n  prune: false\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Kustomization"),"s point to a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"seeds")," (and the subdirectory ",(0,r.kt)("inlineCode",{parentName:"p"},"seeds/shoots"),") in the repository root. Consequently, all required manifests have to be stored in these directories. As the directory names already indicate, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," manifests are organized in the ",(0,r.kt)("inlineCode",{parentName:"p"},"seeds/shoots")," directory and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed")," manifests in the seeds directory, respectively. The easiest option to obtain a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," manifest for your 23KE environment is to configure a shoot via the Gardener dashboard and just copy over the corresponding yaml manifest."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to use a dedicated cloud provider secret for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoots")," to be registered as ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeds"),". Therefore, you might need to create a corresponding secret. Also here, the easiest way to create it is via the Gardener Dashboard.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Keep in mind that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," will be used as ",(0,r.kt)("inlineCode",{parentName:"p"},"Seed")," and should be equipped with meaningful resources, e.g. a minimum amount of 3 workers with 8vCPU and 32GB RAM.")),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed")," manifest, an example is given below. You can also find an example in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gardener/gardener/blob/master/example/55-managedseed-gardenlet.yaml"},"Gardener upstream repository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: seedmanagement.gardener.cloud/v1alpha1\nkind: ManagedSeed\nmetadata:\n  name: my-region-0\n  namespace: garden # Must be garden\nspec:\n  shoot:\n    name: my-region-0 # has to be the name of the shoot to be used\n  # gardenlet specifies that the ManagedSeed controller should deploy a gardenlet into the cluster\n  # with the given deployment parameters and GardenletConfiguration.\n  gardenlet:\n    config: # GardenletConfiguration resource\n      apiVersion: gardenlet.config.gardener.cloud/v1alpha1\n      kind: GardenletConfiguration\n      seedConfig:\n        metadata:\n          labels:\n            name: my-region-0\n        taints:\n          seed.gardener.cloud/protected: false\n        spec:\n          dns:\n            provider:\n              type: # a valid dns provider\n              secretRef:\n                name: default-domain-gardener-... # the default-domain-secret of your environment\n                namespace: garden\n          ingress:\n            domain: ingress.my-region-0.garden.BASEDOMAIN # replace BASEDOMAIN with your domain\n            controller:\n              kind: nginx\n          networks:\n            shootDefaults:\n              pods: 100.74.0.0/16\n              services: 100.96.0.0/13\n          provider:\n            region: MYREGION\n            type: # your cluster provider type\n          backup:\n            provider: # your backup provider type\n            region: # your backup provider region\n            secretRef:\n              name: # your backup provider secret\n              namespace: # your backup provider secret namespace\n          settings:\n            scheduling:\n              visible: true\n            excessCapacityReservation:\n              enabled: true\n      featureGates:\n        HVPA: true\n        HVPAForShootedSeed: true\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You will need to provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," for your backup provider in advance, if you want to enable backups on this ",(0,r.kt)("inlineCode",{parentName:"p"},"Seed"),".")),(0,r.kt)("h2",{id:"deployment-of-wildcard-certificate-for-grafanaprometheus-dashboards"},"Deployment of wildcard certificate for Grafana/Prometheus dashboards"),(0,r.kt)("p",null,"If you want to use e.g. the Grafana dashboard of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," cluster hosted on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed"),", you will need to make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed")," can make use of browser trusted certificates. It is possible to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"extension-shoot-cert-service")," for this purpose, as a ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed")," is also a ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot"),". For this reason, you need to enable this extension on ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot"),"s to be used as ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed"),"s, i.e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Shoot\napiVersion: core.gardener.cloud/v1beta1\nmetadata: ...\nspec:\n  extensions:\n    - type: shoot-cert-service\n")),(0,r.kt)("p",null,"Then, you can apply a ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," resource directly to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," cluster used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed"),". An example ",(0,r.kt)("inlineCode",{parentName:"p"},"Certificate")," resource manifest is given below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert.gardener.cloud/v1alpha1\nkind: Certificate\nmetadata:\n  name: seed-ingress\n  namespace: garden\nspec:\n  commonName: '*.ingress.my-region-0.garden.BASE_DOMAIN'\n  issuerRef:\n    name: garden\n  secretRef:\n    name: seed-ingress-certificate\n    namespace: garden\n")),(0,r.kt)("p",null,"This instructs the ",(0,r.kt)("inlineCode",{parentName:"p"},"extension-shoot-cert-service")," to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," containing the certificate data. In order to use this secret as certificate for every ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress"),' in the cluster, it needs to have the "magic" label ',(0,r.kt)("inlineCode",{parentName:"p"},"gardener.cloud/role: controlplane-cert"),". Consequently, you have to label the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," as soon as it exists:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl label -n garden secret seed-ingress-certificate gardener.cloud/role=controlplane-cert\n")),(0,r.kt)("p",null,"Afterwards, your Grafana urls should be equipped with a browser trusted certificate."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We are aware of the fact that these steps require some manual effort and this is not really inline with the idea of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedSeed"),". However, at the moment this is the way to go, and we are looking forward to make things easier via e.g. a Gardener extension which automates the manual process.")))}c.isMDXComponent=!0}}]);