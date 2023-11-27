"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={hide_table_of_contents:!0},o="Release Notes next",l={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},s={},d=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"Docker Images",id:"docker-images-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"Docker Images",id:"docker-images-2",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,a.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,a.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update shoot-rsyslog-relp to ",(0,a.kt)("code",null,"0.2.2"))),(0,a.kt)("h1",{id:"gardenergardener-extension-shoot-rsyslog-relp"},"[gardener/gardener-extension-shoot-rsyslog-relp]"),(0,a.kt)("h2",{id:"-others"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The following images are updated:  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/3rd/alpine"),": 3.15.8 -> 3.18.4  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"registry.k8s.io/pause"),": 3.7 -> 3.9 by @plkokanov ","[#36]"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Vulnerability scans are disabled for the alpine image as the corresponding container is not accessible from outside of the k8s clusters and not interacted with from other containers or other systems. by @plkokanov ","[#36]")),(0,a.kt)("h2",{id:"docker-images"},"Docker Images"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gardener-extension-shoot-rsyslog-relp-admission: ",(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/gardener/extensions/shoot-rsyslog-relp-admission:v0.2.2")),(0,a.kt)("li",{parentName:"ul"},"gardener-extension-shoot-rsyslog-relp: ",(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/gardener/extensions/shoot-rsyslog-relp:v0.2.2")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update networking-cilium to ",(0,a.kt)("code",null,"1.31.0"))),(0,a.kt)("h1",{id:"gardenergardener-extension-networking-cilium"},"[gardener/gardener-extension-networking-cilium]"),(0,a.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The ",(0,a.kt)("inlineCode",{parentName:"li"},"actuator.Delete")," doesn't wait for ManagedResources to get deleted in case of ",(0,a.kt)("inlineCode",{parentName:"li"},"ForceDelete"),". by @shafeeqes ","[#227]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue in the charts missing versions for some resources is now fixed. by @shafeeqes ","[#225]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Fixes an error that occurs when running with iptables-nft. by @axel7born ","[#229]")),(0,a.kt)("h2",{id:"-others-1"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Reconciliation of hibernated cilium clusters now works again. by @ScheererJ ","[#226]")),(0,a.kt)("h2",{id:"docker-images-1"},"Docker Images"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gardener-extension-admission-cilium: ",(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/gardener/extensions/admission-cilium:v1.31.0")),(0,a.kt)("li",{parentName:"ul"},"gardener-extension-networking-cilium: ",(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/gardener/extensions/networking-cilium:v1.31.0")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-azure to ",(0,a.kt)("code",null,"1.39.3"))),(0,a.kt)("h1",{id:"gardenergardener-extension-provider-azure"},"[gardener/gardener-extension-provider-azure]"),(0,a.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," A bug which caused an empty ",(0,a.kt)("inlineCode",{parentName:"li"},"vmType")," under certain conditions has been fixed. Empty ",(0,a.kt)("inlineCode",{parentName:"li"},"vmType"),"s prevent load balancers from being deleted on Kubernetes v1.28 shoots. by @oliver-goetz ","[#755]")),(0,a.kt)("h2",{id:"docker-images-2"},"Docker Images"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gardener-extension-admission-azure: ",(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/gardener/extensions/admission-azure:v1.39.3")),(0,a.kt)("li",{parentName:"ul"},"gardener-extension-provider-azure: ",(0,a.kt)("inlineCode",{parentName:"li"},"eu.gcr.io/gardener-project/gardener/extensions/provider-azure:v1.39.3")))))}c.isMDXComponent=!0}}]);