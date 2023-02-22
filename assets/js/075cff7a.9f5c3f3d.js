"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={slug:"/"},o="Release Notes v1.63",s={unversionedId:"v1.63",id:"v1.63",title:"Release Notes v1.63",description:"Upstream Changes",source:"@site/release-notes/v1.63.md",sourceDirName:".",slug:"/",permalink:"/release-notes/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"tutorialSidebar",previous:{title:"Release Notes v1.62",permalink:"/release-notes/v1.62"}},i={},c=[{value:"Upstream Changes",id:"upstream-changes",level:2},{value:"23KE Changes and Upgrade Path",id:"23ke-changes-and-upgrade-path",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-v163"},"Release Notes v1.63"),(0,a.kt)("h2",{id:"upstream-changes"},"Upstream Changes"),(0,a.kt)("p",null,"Please check the following sites for upstream release notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/releases"},"Gardener releases")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-community/gardener-charts/releases"},"Gardener-community charts releases"))),(0,a.kt)("h2",{id:"23ke-changes-and-upgrade-path"},"23KE Changes and Upgrade Path"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Before upgrade",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Due to upstream changes in the gardenlet helm chart, an adujstment to the internal gardenlet installation is required. Resources need to be annotated with a corrected value manually before the update, as follows:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"for type in PodDisruptionBudget ServiceAccount ClusterRole ClusterRoleBinding Role RoleBinding Deployment Service ConfigMap PriorityClass; do\n  kubectl -n garden annotate $type -l helm.toolkit.fluxcd.io/name=internal-gardenlet,helm.toolkit.fluxcd.io/namespace=flux-system meta.helm.sh/release-name=garden-internal-gardenlet meta.helm.sh/release-namespace=garden --overwrite\ndone\n")))))))}p.isMDXComponent=!0}}]);