"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,k=p["".concat(d,".").concat(g)]||p[g]||c[g]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={hide_table_of_contents:!0},i="Release Notes next",o={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},d={},s=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\u2728 New Features",id:"-new-features",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,a.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,a.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update networking-cilium to ",(0,a.kt)("code",null,"1.28.0"))),(0,a.kt)("h1",{id:"gardenergardener-extension-networking-cilium"},"[gardener/gardener-extension-networking-cilium]"),(0,a.kt)("h2",{id:"-new-features"},"\u2728 New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Expose configuration of ",(0,a.kt)("inlineCode",{parentName:"li"},"cni.exclusive"),".  by @axel7born ","[#214]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardener-controlplane to ",(0,a.kt)("code",null,"1.79.1"))),(0,a.kt)("h1",{id:"gardenergardener"},"[gardener/gardener]"),(0,a.kt)("h2",{id:"-noteworthy"},"\ud83d\udcf0 Noteworthy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," ",(0,a.kt)("inlineCode",{parentName:"li"},"gardener-resource-manager")," now disables cache only for ",(0,a.kt)("inlineCode",{parentName:"li"},"Secrets")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"DisableCachedClient")," set to true. by @gardener-ci-robot ","[#8476]")),(0,a.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Applying Gardener resources server-side has caused the ",(0,a.kt)("inlineCode",{parentName:"li"},"the server is currently unable to handle the request")," error which is now fixed. by @gardener-ci-robot ","[#8473]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot ","[#8469]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," A bug has been fixed that prevented ",(0,a.kt)("inlineCode",{parentName:"li"},"ControllerInstallation"),"s from getting deleted when the backing ",(0,a.kt)("inlineCode",{parentName:"li"},"ControllerRegistration")," with ",(0,a.kt)("inlineCode",{parentName:"li"},".spec.deployment.policy={Always,AlwaysExceptNoShoots}")," was deleted. by @gardener-ci-robot ","[#8451]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardener-controlplane to ",(0,a.kt)("code",null,"1.79.1"))),(0,a.kt)("h1",{id:"gardenergardener-1"},"[gardener/gardener]"),(0,a.kt)("h2",{id:"-noteworthy-1"},"\ud83d\udcf0 Noteworthy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," ",(0,a.kt)("inlineCode",{parentName:"li"},"gardener-resource-manager")," now disables cache only for ",(0,a.kt)("inlineCode",{parentName:"li"},"Secrets")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"DisableCachedClient")," set to true. by @gardener-ci-robot ","[#8476]")),(0,a.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Applying Gardener resources server-side has caused the ",(0,a.kt)("inlineCode",{parentName:"li"},"the server is currently unable to handle the request")," error which is now fixed. by @gardener-ci-robot ","[#8473]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot ","[#8469]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," A bug has been fixed that prevented ",(0,a.kt)("inlineCode",{parentName:"li"},"ControllerInstallation"),"s from getting deleted when the backing ",(0,a.kt)("inlineCode",{parentName:"li"},"ControllerRegistration")," with ",(0,a.kt)("inlineCode",{parentName:"li"},".spec.deployment.policy={Always,AlwaysExceptNoShoots}")," was deleted. by @gardener-ci-robot ","[#8451]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardenlet to ",(0,a.kt)("code",null,"1.79.1"))),(0,a.kt)("h1",{id:"gardenergardener-2"},"[gardener/gardener]"),(0,a.kt)("h2",{id:"-noteworthy-2"},"\ud83d\udcf0 Noteworthy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," ",(0,a.kt)("inlineCode",{parentName:"li"},"gardener-resource-manager")," now disables cache only for ",(0,a.kt)("inlineCode",{parentName:"li"},"Secrets")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigMap")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"DisableCachedClient")," set to true. by @gardener-ci-robot ","[#8476]")),(0,a.kt)("h2",{id:"-bug-fixes-2"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Applying Gardener resources server-side has caused the ",(0,a.kt)("inlineCode",{parentName:"li"},"the server is currently unable to handle the request")," error which is now fixed. by @gardener-ci-robot ","[#8473]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Several default settings of Kubernetes feature gates have been corrected. by @gardener-ci-robot ","[#8469]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," A bug has been fixed that prevented ",(0,a.kt)("inlineCode",{parentName:"li"},"ControllerInstallation"),"s from getting deleted when the backing ",(0,a.kt)("inlineCode",{parentName:"li"},"ControllerRegistration")," with ",(0,a.kt)("inlineCode",{parentName:"li"},".spec.deployment.policy={Always,AlwaysExceptNoShoots}")," was deleted. by @gardener-ci-robot ","[#8451]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-aws to ",(0,a.kt)("code",null,"1.48.0"))),(0,a.kt)("h1",{id:"gardenergardener-extension-provider-aws"},"[gardener/gardener-extension-provider-aws]"),(0,a.kt)("h2",{id:"-others"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," State update for a Worker object can be now skipped by annotating it with ",(0,a.kt)("inlineCode",{parentName:"li"},"worker.gardener.cloud/skip-state-update=true"),". by @ialidzhikov ","[#801]"))))}p.isMDXComponent=!0}}]);