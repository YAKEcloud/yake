"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),s=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(d.Provider,{value:r},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),p=a,m=g["".concat(d,".").concat(p)]||g[p]||c[p]||o;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88789:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const o={hide_table_of_contents:!0},i="Release Notes next",l={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},d={},s=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"Docker Images",id:"docker-images",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"Docker Images",id:"docker-images-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"Docker Images",id:"docker-images-2",level:2}],u={toc:s};function g(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,a.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,a.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update os-ubuntu to ",(0,a.kt)("code",null,"1.23.0"))),(0,a.kt)("h1",{id:"gardenergardener-extension-os-ubuntu"},"[gardener/gardener-extension-os-ubuntu]"),(0,a.kt)("h2",{id:"\ufe0f-breaking-changes"},"\u26a0\ufe0f Breaking Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," ",(0,a.kt)("inlineCode",{parentName:"li"},"extension-os-ubuntu")," no longer supports Shoots with \u041aubernetes version < 1.22. by @shafeeqes ","[#82]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardener-controlplane to ",(0,a.kt)("code",null,"1.80.1"))),(0,a.kt)("h1",{id:"gardenergardener"},"[gardener/gardener]"),(0,a.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," The two additional labels ",(0,a.kt)("inlineCode",{parentName:"li"},"worker.gardener.cloud/image-name")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"worker.gardener.cloud/image-version")," that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the ",(0,a.kt)("inlineCode",{parentName:"li"},"kubelet")," to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod"),"s to become temporarily unready. by @gardener-ci-robot ","[#8551]")),(0,a.kt)("h2",{id:"docker-images"},"Docker Images"),(0,a.kt)("p",null,"admission-controller: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1"),"\napiserver: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1"),"\ncontroller-manager: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1"),"\nscheduler: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1"),"\noperator: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/operator:v1.80.1"),"\ngardenlet: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1"),"\nresource-manager: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardener-controlplane to ",(0,a.kt)("code",null,"1.80.1"))),(0,a.kt)("h1",{id:"gardenergardener-1"},"[gardener/gardener]"),(0,a.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," The two additional labels ",(0,a.kt)("inlineCode",{parentName:"li"},"worker.gardener.cloud/image-name")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"worker.gardener.cloud/image-version")," that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the ",(0,a.kt)("inlineCode",{parentName:"li"},"kubelet")," to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod"),"s to become temporarily unready. by @gardener-ci-robot ","[#8551]")),(0,a.kt)("h2",{id:"docker-images-1"},"Docker Images"),(0,a.kt)("p",null,"admission-controller: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1"),"\napiserver: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1"),"\ncontroller-manager: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1"),"\nscheduler: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1"),"\noperator: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/operator:v1.80.1"),"\ngardenlet: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1"),"\nresource-manager: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardenlet to ",(0,a.kt)("code",null,"1.80.1"))),(0,a.kt)("h1",{id:"gardenergardener-2"},"[gardener/gardener]"),(0,a.kt)("h2",{id:"-bug-fixes-2"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," The two additional labels ",(0,a.kt)("inlineCode",{parentName:"li"},"worker.gardener.cloud/image-name")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"worker.gardener.cloud/image-version")," that were previously introduced and attached to worker nodes are removed again to fix a regression that causes the ",(0,a.kt)("inlineCode",{parentName:"li"},"kubelet")," to restart on nodes that are due to be upgraded to a new OS but not rolled yet which causes their ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod"),"s to become temporarily unready. by @gardener-ci-robot ","[#8551]")),(0,a.kt)("h2",{id:"docker-images-2"},"Docker Images"),(0,a.kt)("p",null,"admission-controller: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/admission-controller:v1.80.1"),"\napiserver: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/apiserver:v1.80.1"),"\ncontroller-manager: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/controller-manager:v1.80.1"),"\nscheduler: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/scheduler:v1.80.1"),"\noperator: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/operator:v1.80.1"),"\ngardenlet: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/gardenlet:v1.80.1"),"\nresource-manager: ",(0,a.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/resource-manager:v1.80.1"))))}g.isMDXComponent=!0}}]);