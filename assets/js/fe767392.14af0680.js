"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:3},a="The 23KE config git repository",c={unversionedId:"architecture-configuration/23ke-config-gitrepo",id:"version-1.68.x/architecture-configuration/23ke-config-gitrepo",title:"The 23KE config git repository",description:"As already introduced in the architecture diagram, values for the helm charts deployed for the Gardener installation are configured and maintained in a GitOps workflow. Assuming that the initial state of your configuration git repository was set up by 23kectl, your repository tree looks like this:",source:"@site/versioned_docs/version-1.68.x/architecture-configuration/23ke-config-gitrepo.md",sourceDirName:"architecture-configuration",slug:"/architecture-configuration/23ke-config-gitrepo",permalink:"/docs/1.68.x/architecture-configuration/23ke-config-gitrepo",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.68.x/architecture-configuration/23ke-config-gitrepo.md",tags:[],version:"1.68.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"The 23KE config secret",permalink:"/docs/1.68.x/architecture-configuration/23ke-config-secret"},next:{title:"Gardener Extensions Configuration",permalink:"/docs/1.68.x/architecture-configuration/extensions-config"}},l={},s=[{value:"The <code>config</code> Directory",id:"the-config-directory",level:3},{value:"The <code>garden-content</code> Directory",id:"the-garden-content-directory",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-23ke-config-git-repository"},"The 23KE config git repository"),(0,o.kt)("p",null,"As already introduced in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.68.x/architecture-configuration/architecture"},"architecture diagram"),", values for the helm charts deployed for the Gardener installation are configured and maintained in a GitOps workflow. Assuming that the initial state of your configuration git repository was set up by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/23technologies/23kectl"},"23kectl"),", your repository tree looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u251c\u2500\u2500 cloudprofiles-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 dashboard-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 extensions-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 gardener-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 gardenlet-values.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 identity-values.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 kustomization.yaml\n\u251c\u2500\u2500 flux\n\u2502\xa0\xa0 \u251c\u2500\u2500 23ke-env-config.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 23ke-env-garden-content.yaml\n\u251c\u2500\u2500 garden-content\n\u2502\xa0\xa0 \u251c\u2500\u2500 admin-clusterrolebinding.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kustomization.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 project-dev.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 rbac.yaml\n\u2514\u2500\u2500 kustomization.yaml\n")),(0,o.kt)("p",null,"The top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," file contains ",(0,o.kt)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/"},(0,o.kt)("inlineCode",{parentName:"a"},"Kustomization"))," pointing to the files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"flux")," directory. Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"flux")," directory two flux ",(0,o.kt)("inlineCode",{parentName:"p"},"Kustomizations")," ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/kustomize/api/"},(0,o.kt)("inlineCode",{parentName:"a"},"Kustomization")),"s reside which point to the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory and the ",(0,o.kt)("inlineCode",{parentName:"p"},"garden-content")," directory."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize.config.k8s.io/v1beta1"),", whereas the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kustomization"),"s in the ",(0,o.kt)("inlineCode",{parentName:"p"},"flux")," directory are of type ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomize.toolkit.fluxcd.io/v1beta2"),". Therefore, you will only find the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kustomization"),"s defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"flux")," directory in your base cluster, when watching ",(0,o.kt)("inlineCode",{parentName:"p"},"Kustomization")," resources.")),(0,o.kt)("h3",{id:"the-config-directory"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"config")," Directory"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),' directory, you find configuration files defining values for the deployed helm charts. All files entail the same "header", and are constructed like in the following example for ',(0,o.kt)("inlineCode",{parentName:"p"},"cloudprofiles-values.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: cloudprofiles-values\n  namespace: flux-system\ntype: Opaque\nstringData:\n  values.yaml: |\n")),(0,o.kt)("p",null,"Below of the key ",(0,o.kt)("inlineCode",{parentName:"p"},"stringData.values.yaml")," you can extend the configuration already generated by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/23technologies/23kectl"},"23kectl")," or insert your own configuration."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As the upstream helm charts are distributed over several repositories, there is no single documentation page for possible helm chart values. You can get information on the default values by e.g. "),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add gardener-charts https://gardener-community.github.io/gardener-charts\nhelm repo update\nhelm show values gardener-charts/<CHART_NAME>\n"))),(0,o.kt)("h3",{id:"the-garden-content-directory"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"garden-content")," Directory"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"garden-content")," Directory, resources to be deployed to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gardener/garden-setup#concept-the-virtual-cluster"},"virtual garden")," are defined. You can easily add some resources, if you need more than the very basic configuration generated by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/23technologies/23kectl"},"23kectl")," does not fit your needs. For instance, you can create ",(0,o.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/gardener/api-reference/core/#core.gardener.cloud/v1beta1.Project"},(0,o.kt)("inlineCode",{parentName:"a"},"Project")),"s or further ",(0,o.kt)("a",{parentName:"p",href:"https://gardener.cloud/docs/gardener/api-reference/core/#core.gardener.cloud/v1beta1.CloudProfile"},(0,o.kt)("inlineCode",{parentName:"a"},"Cloudprofile")),"s here."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"garden-content")," folder also contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," file which just lists the resources to be deployed to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gardener/garden-setup#concept-the-virtual-cluster"},"virtual garden"),". You can just comment our resources you do not want to deploy for a moment but still keep in you git repository for documentation purposes.")))}u.isMDXComponent=!0}}]);