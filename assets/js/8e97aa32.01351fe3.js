"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,k=p["".concat(d,".").concat(g)]||p[g]||c[g]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={hide_table_of_contents:!0},l="Release Notes next",o={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},d={},s=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-3",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-4",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-5",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-6",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,a.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,a.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update os-gardenlinux to ",(0,a.kt)("code",null,"0.21.0"))),(0,a.kt)("h1",{id:"gardenergardener-extension-os-gardenlinux"},"[gardener/gardener-extension-os-gardenlinux]"),(0,a.kt)("h2",{id:"\ufe0f-breaking-changes"},"\u26a0\ufe0f Breaking Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," ",(0,a.kt)("inlineCode",{parentName:"li"},"extension-os-gardenlinux")," no longer supports Shoots with \u041aubernetes version < 1.22. by @shafeeqes ","[#113]")),(0,a.kt)("h2",{id:"-others"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The Garden Linux OS extension now features support for vSMP MemoryOne and Garden Linux. It will now consider itself responsible for a new type ",(0,a.kt)("inlineCode",{parentName:"li"},"OperatingSystemConfig/memoryone-gardenlinux")," and understands a ",(0,a.kt)("inlineCode",{parentName:"li"},"providerConfig")," with which certain parameters of MemoryOne can be configured. by @MrBatschner ","[#116]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The following dependency is updated:  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"github.com/gardener/gardener: v1.70.2 -> v1.72.0 by @dependabot","[bot][#105]"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update cert-management to ",(0,a.kt)("code",null,"0.11.1"))),(0,a.kt)("h1",{id:"gardenercert-management"},"[gardener/cert-management]"),(0,a.kt)("h2",{id:"-others-1"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel ","[#140]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel ","[#138]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update dashboard to ",(0,a.kt)("code",null,"1.69.2"))),(0,a.kt)("h1",{id:"gardenerdashboard"},"[gardener/dashboard]"),(0,a.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Errors shown as notification alerts sometimes did not contain the failure reason by @grolu ","[#1539]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Fixed error handling for manage workers and hibernation dialogs. The dialogs did not show all error messages and resetted to empty broken state on errors by @grolu ","[#1539]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update dashboard to ",(0,a.kt)("code",null,"1.69.2"))),(0,a.kt)("h1",{id:"gardenerdashboard-1"},"[gardener/dashboard]"),(0,a.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Errors shown as notification alerts sometimes did not contain the failure reason by @grolu ","[#1539]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Fixed error handling for manage workers and hibernation dialogs. The dialogs did not show all error messages and resetted to empty broken state on errors by @grolu ","[#1539]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-azure to ",(0,a.kt)("code",null,"1.38.2"))),(0,a.kt)("h1",{id:"gardenergardener-extension-provider-azure"},"[gardener/gardener-extension-provider-azure]"),(0,a.kt)("h2",{id:"-bug-fixes-2"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update ",(0,a.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on health-checking special shoots. by @MartinWeindel ","[#728]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-gcp to ",(0,a.kt)("code",null,"1.32.1"))),(0,a.kt)("h1",{id:"gardenergardener-extension-provider-gcp"},"[gardener/gardener-extension-provider-gcp]"),(0,a.kt)("h2",{id:"-others-2"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The following image is updated:  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver: v1.9.7 -> v1.9.9 by @ialidzhikov ","[#641]"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update shoot-cert-service to ",(0,a.kt)("code",null,"1.37.1"))),(0,a.kt)("h1",{id:"gardenercert-management-1"},"[gardener/cert-management]"),(0,a.kt)("h2",{id:"-bug-fixes-3"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel ","[gardener/cert-management@dbff065ac5686aaddd8d2eb1fb6c62c3520b0c3d]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[USER]")," Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel ","[gardener/cert-management@dbff065ac5686aaddd8d2eb1fb6c62c3520b0c3d]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardener-controlplane to ",(0,a.kt)("code",null,"1.78.2"))),(0,a.kt)("h1",{id:"gardenergardener"},"[gardener/gardener]"),(0,a.kt)("h2",{id:"-bug-fixes-4"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue has been fixed which was causing a broken ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlPlaneHealthy")," condition report for ",(0,a.kt)("inlineCode",{parentName:"li"},"Shoot"),"s when the ",(0,a.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," feature gate gets enabled until their next reconciliation. by @gardener-ci-robot ","[#8411]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update Kubernetes dependencies (especially ",(0,a.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go"),") from ",(0,a.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on working with special shoots. by @gardener-ci-robot ","[#8423]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardener-controlplane to ",(0,a.kt)("code",null,"1.78.2"))),(0,a.kt)("h1",{id:"gardenergardener-1"},"[gardener/gardener]"),(0,a.kt)("h2",{id:"-bug-fixes-5"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue has been fixed which was causing a broken ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlPlaneHealthy")," condition report for ",(0,a.kt)("inlineCode",{parentName:"li"},"Shoot"),"s when the ",(0,a.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," feature gate gets enabled until their next reconciliation. by @gardener-ci-robot ","[#8411]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update Kubernetes dependencies (especially ",(0,a.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go"),") from ",(0,a.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on working with special shoots. by @gardener-ci-robot ","[#8423]"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardenlet to ",(0,a.kt)("code",null,"1.78.2"))),(0,a.kt)("h1",{id:"gardenergardener-2"},"[gardener/gardener]"),(0,a.kt)("h2",{id:"-bug-fixes-6"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue has been fixed which was causing a broken ",(0,a.kt)("inlineCode",{parentName:"li"},"ControlPlaneHealthy")," condition report for ",(0,a.kt)("inlineCode",{parentName:"li"},"Shoot"),"s when the ",(0,a.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," feature gate gets enabled until their next reconciliation. by @gardener-ci-robot ","[#8411]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update Kubernetes dependencies (especially ",(0,a.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go"),") from ",(0,a.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on working with special shoots. by @gardener-ci-robot ","[#8423]"))))}p.isMDXComponent=!0}}]);