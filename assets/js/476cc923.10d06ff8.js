"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71920],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2},l="Use custom container registry",o={unversionedId:"guides/registryOverwrite",id:"version-1.86.x/guides/registryOverwrite",title:"Use custom container registry",description:'YAKE in it\'s default configuration will use container images from public container registries, whichever the developers of the respective component decided to publish to "upstream". Larger installations could run into rate limits of specific registries or have other reasons not to use those registries directly, and pull the same images from a registry mirror instead.',source:"@site/versioned_docs/version-1.86.x/guides/registryOverwrite.md",sourceDirName:"guides",slug:"/guides/registryOverwrite",permalink:"/yake/docs/guides/registryOverwrite",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.86.x/guides/registryOverwrite.md",tags:[],version:"1.86.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authentication with OpenID Connect",permalink:"/yake/docs/guides/openid-connect"},next:{title:"Scaling out with Managed Seeds",permalink:"/yake/docs/guides/managed-seeds"}},s={},p=[{value:"Full example",id:"full-example",level:2},{value:"Replacement mechanism examples",id:"replacement-mechanism-examples",level:2},{value:"Flux configuration to change repository",id:"flux-configuration-to-change-repository",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-custom-container-registry"},"Use custom container registry"),(0,a.kt)("p",null,'YAKE in it\'s default configuration will use container images from public container registries, whichever the developers of the respective component decided to publish to "upstream". Larger installations could run into rate limits of specific registries or have other reasons not to use those registries directly, and pull the same images from a registry mirror instead.'),(0,a.kt)("p",null,"For environments that prefer and can provide an internal registry, YAKE has a config switch to easily reconfigure all components to pull from this registry."),(0,a.kt)("p",null,"The setup and mirroring procedure of such an internal registry mirror is not covered in this guide. We use and recommend harbors ",(0,a.kt)("a",{parentName:"p",href:"https://goharbor.io/docs/2.1.0/administration/configure-proxy-cache/"},"proxy cache")," mode, as it won't require to identify, pull and push each single image in each version/tag beforehand, which will change frequently and even with patch updates."),(0,a.kt)("p",null,"This feature only affects components deployed by YAKE and Gardener, from the basecluster down to each shoot node (f.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"calico-node")," pods), but will not alter anything else deployed to a shoot or custom deployments on the basecluster."),(0,a.kt)("h2",{id:"full-example"},"Full example"),(0,a.kt)("p",null,"The registryOverwrite configuration option in ",(0,a.kt)("inlineCode",{parentName:"p"},"yake-config"),' allows you to specify replacement pairs as "originalURL: replacementURL", and will then look for and replace all registries that start with ',(0,a.kt)("inlineCode",{parentName:"p"},"originalURL")," and replace that part of the full path with ",(0,a.kt)("inlineCode",{parentName:"p"},"replacementURL"),". If you only want to mirror certain upstream registries, for example docker.io because of rate limits, you can only specify that and everything else will be left unchanged. To pull all containers currently used in YAKE from your internal registry you need all of the following overwrites:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"registryOverwrite:\n  eu.gcr.io: myregistry.io/eu.gcr.io\n  registry.k8s.io: myregistry.io/registry.k8s.io\n  quay.io: myregistry.io/quay.io\n  docker.io: myregistry.io/docker.io\n  gcr.io: myregistry.io/gcr.io\n  ghcr.io: myregistry.io/ghcr.io\n  registry.k8s.io: myregistry.io/registry.k8s.io\n  mcr.microsoft.com: myregistry.io/mcr.microsoft.com\n  public.ecr.aws: myregistry.io/public.ecr.aws\n  registry.eu-central-1.aliyuncs.com: myregistry.io/registry.eu-central-1.aliyuncs.com\n")),(0,a.kt)("p",null,"Replacements look only for the ",(0,a.kt)("em",{parentName:"p"},"prefix")," of the full repository path. Wildcards or other expressions are currently not supported, so certain mirror layouts would require a very lengthy replacement map. We recommend to follow a structure similar to the one above, so one project or folder or subfolder for each upstream registry, and inside of that the same structure as the original registry uses."),(0,a.kt)("h2",{id:"replacement-mechanism-examples"},"Replacement mechanism examples"),(0,a.kt)("p",null,"Given the following replacement map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"registryOverwrite:\n  eu.gcr.io: myregistry.io/eu.gcr.io\n")),(0,a.kt)("p",null,"the following replacements would be performed"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Original"),(0,a.kt)("th",{parentName:"tr",align:null},"Will be replaced?"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eu.gcr.io/examplefolder/example1"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"myregistry.io/eu.gcr.io/examplefolder/example1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eu.gcr.io/otherexample/example2"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"myregistry.io/eu.gcr.io/otherexample/example2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"registry.k8s.io/kube-apiserver"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Given the following replacement map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"registryOverwrite:\n  eu.gcr.io/examplefolder: myregistry.io/mirror-example\n")),(0,a.kt)("p",null,"the following replacements would be performed"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Original"),(0,a.kt)("th",{parentName:"tr",align:null},"Will be replaced?"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eu.gcr.io/examplefolder/example1"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"myregistry.io/mirror-example/example1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eu.gcr.io/otherexample/example2"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"registry.k8s.io/kube-apiserver"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Given the following replacement map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"registryOverwrite:\n  eu.gcr.io/examplefolder: myregistry.io/mirror-example\n  eu.gcr.io/otherexample: myregistry.io/mirror-example\n  registry.k8s.io: myregistry.io/mirror-example\n")),(0,a.kt)("p",null,"the following replacements would be performed"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Original"),(0,a.kt)("th",{parentName:"tr",align:null},"Will be replaced?"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eu.gcr.io/examplefolder/example1"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"myregistry.io/mirror-example/example1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eu.gcr.io/otherexample/example2"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"myregistry.io/mirror-example/example2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"registry.k8s.io/kube-apiserver"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"myregistry.io/mirror-example/kube-apiserver")))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Given the following replacement map"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"registryOverwrite:\n  gcr.io: myregistry.io\n")),(0,a.kt)("p",null,"the following replacements would be performed"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Original"),(0,a.kt)("th",{parentName:"tr",align:null},"Will be replaced?"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eu.gcr.io/examplefolder/example1"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eu.gcr.io/otherexample/example2"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"registry.k8s.io/kube-apiserver"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"flux-configuration-to-change-repository"},"Flux configuration to change repository"),(0,a.kt)("p",null,"YAKE includes flux's controllers in a specific version and installs available updates with each release. Due to the way we include flux, unfortunately it can't use the registryOverwrite map to change where the flux images are pulled from and needs it's own instructions to use an internal registry."),(0,a.kt)("p",null,"In your configuration git you will have a file ",(0,a.kt)("inlineCode",{parentName:"p"},"flux/yake-base.yaml"),", that needs to be changed similar to the following example, where you would change the ",(0,a.kt)("inlineCode",{parentName:"p"},"newName")," parameters to point to your internal registry mirror."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: yake-base\n  namespace: flux-system\nspec:\n  interval: 1m0s\n  path: ./\n  prune: false\n  sourceRef:\n    kind: GitRepository\n    name: yake\n  patches:\n    - patch: |-\n        apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\n        kind: Kustomization\n        metadata:\n          name: not-used\n        spec:\n          images:\n            - name: ghcr.io/fluxcd/helm-controller\n              newName: changeme.internal.mirror/ghcr.io/fluxcd/helm-controller\n            - name: ghcr.io/fluxcd/kustomize-controller\n              newName: changeme.internal.mirror/ghcr.io/fluxcd/kustomize-controller\n            - name: ghcr.io/fluxcd/notification-controller\n              newName: changeme.internal.mirror/ghcr.io/fluxcd/notification-controller\n            - name: ghcr.io/fluxcd/source-controller\n              newName: changeme.internal.mirror/ghcr.io/fluxcd/source-controller\n      target:\n        kind: Kustomization\n        name: flux-system\n        namespace: flux-system\n")))}u.isMDXComponent=!0}}]);