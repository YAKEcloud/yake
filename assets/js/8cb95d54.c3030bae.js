"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4161],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,g=u["".concat(d,".").concat(m)]||u[m]||k[m]||i;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={hide_table_of_contents:!0},l="Release Notes v1.79",o={unversionedId:"v1.79",id:"v1.79",title:"Release Notes v1.79",description:"23KE release notes and upgrade guide",source:"@site/release-notes/v1.79.md",sourceDirName:".",slug:"/v1.79",permalink:"/release-notes/v1.79",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",next:{title:"Release Notes v1.78",permalink:"/release-notes/v1.78"}},d={},s=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-3",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-4",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-5",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-6",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-1",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy",level:2},{value:"\u2728 New Features",id:"-new-features",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-7",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"\ud83c\udfc3 Others",id:"-others-4",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-1",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-2",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-2",level:2},{value:"\u2728 New Features",id:"-new-features-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-8",level:2},{value:"\ud83c\udfc3 Others",id:"-others-5",level:2},{value:"\ud83c\udfc3 Others",id:"-others-6",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-3",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-3",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-4",level:2},{value:"\u2728 New Features",id:"-new-features-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-9",level:2},{value:"\ud83c\udfc3 Others",id:"-others-7",level:2},{value:"\ud83c\udfc3 Others",id:"-others-8",level:2},{value:"\ud83d\udcf0 Noteworthy",id:"-noteworthy-5",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-notes-v179"},"Release Notes v1.79"),(0,r.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,r.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update os-gardenlinux to ",(0,r.kt)("code",null,"0.21.0"))),(0,r.kt)("h1",{id:"gardenergardener-extension-os-gardenlinux"},"[gardener/gardener-extension-os-gardenlinux]"),(0,r.kt)("h2",{id:"\ufe0f-breaking-changes"},"\u26a0\ufe0f Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," ",(0,r.kt)("inlineCode",{parentName:"li"},"extension-os-gardenlinux")," no longer supports Shoots with \u041aubernetes version < 1.22. by @shafeeqes ","[#113]")),(0,r.kt)("h2",{id:"-others"},"\ud83c\udfc3 Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The Garden Linux OS extension now features support for vSMP MemoryOne and Garden Linux. It will now consider itself responsible for a new type ",(0,r.kt)("inlineCode",{parentName:"li"},"OperatingSystemConfig/memoryone-gardenlinux")," and understands a ",(0,r.kt)("inlineCode",{parentName:"li"},"providerConfig")," with which certain parameters of MemoryOne can be configured. by @MrBatschner ","[#116]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The following dependency is updated:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"github.com/gardener/gardener: v1.70.2 -> v1.72.0 by @dependabot","[bot][#105]"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update cert-management to ",(0,r.kt)("code",null,"0.11.1"))),(0,r.kt)("h1",{id:"gardenercert-management"},"[gardener/cert-management]"),(0,r.kt)("h2",{id:"-others-1"},"\ud83c\udfc3 Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel ","[#140]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel ","[#138]"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update dashboard to ",(0,r.kt)("code",null,"1.69.2"))),(0,r.kt)("h1",{id:"gardenerdashboard"},"[gardener/dashboard]"),(0,r.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[USER]")," Errors shown as notification alerts sometimes did not contain the failure reason by @grolu ","[#1539]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[USER]")," Fixed error handling for manage workers and hibernation dialogs. The dialogs did not show all error messages and resetted to empty broken state on errors by @grolu ","[#1539]"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update dashboard to ",(0,r.kt)("code",null,"1.69.2"))),(0,r.kt)("h1",{id:"gardenerdashboard-1"},"[gardener/dashboard]"),(0,r.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[USER]")," Errors shown as notification alerts sometimes did not contain the failure reason by @grolu ","[#1539]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[USER]")," Fixed error handling for manage workers and hibernation dialogs. The dialogs did not show all error messages and resetted to empty broken state on errors by @grolu ","[#1539]"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update provider-azure to ",(0,r.kt)("code",null,"1.38.2"))),(0,r.kt)("h1",{id:"gardenergardener-extension-provider-azure"},"[gardener/gardener-extension-provider-azure]"),(0,r.kt)("h2",{id:"-bug-fixes-2"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on health-checking special shoots. by @MartinWeindel ","[#728]"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update provider-gcp to ",(0,r.kt)("code",null,"1.32.1"))),(0,r.kt)("h1",{id:"gardenergardener-extension-provider-gcp"},"[gardener/gardener-extension-provider-gcp]"),(0,r.kt)("h2",{id:"-others-2"},"\ud83c\udfc3 Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The following image is updated:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"registry.k8s.io/cloud-provider-gcp/gcp-compute-persistent-disk-csi-driver: v1.9.7 -> v1.9.9 by @ialidzhikov ","[#641]"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update shoot-cert-service to ",(0,r.kt)("code",null,"1.37.1"))),(0,r.kt)("h1",{id:"gardenercert-management-1"},"[gardener/cert-management]"),(0,r.kt)("h2",{id:"-bug-fixes-3"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Fix edge case of inconsistent certificate/secret: request certificate in this case. by @MartinWeindel ","[gardener/cert-management@dbff065ac5686aaddd8d2eb1fb6c62c3520b0c3d]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[USER]")," Disable followCNAME by default again as it was activated implicitly by github.com/go-acme/lego version upgrade by @MartinWeindel ","[gardener/cert-management@dbff065ac5686aaddd8d2eb1fb6c62c3520b0c3d]"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update gardener-controlplane to ",(0,r.kt)("code",null,"1.78.2"))),(0,r.kt)("h1",{id:"gardenergardener"},"[gardener/gardener]"),(0,r.kt)("h2",{id:"-bug-fixes-4"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue has been fixed which was causing a broken ",(0,r.kt)("inlineCode",{parentName:"li"},"ControlPlaneHealthy")," condition report for ",(0,r.kt)("inlineCode",{parentName:"li"},"Shoot"),"s when the ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," feature gate gets enabled until their next reconciliation. by @gardener-ci-robot ","[#8411]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update Kubernetes dependencies (especially ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go"),") from ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on working with special shoots. by @gardener-ci-robot ","[#8423]"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update gardener-controlplane to ",(0,r.kt)("code",null,"1.78.2"))),(0,r.kt)("h1",{id:"gardenergardener-1"},"[gardener/gardener]"),(0,r.kt)("h2",{id:"-bug-fixes-5"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue has been fixed which was causing a broken ",(0,r.kt)("inlineCode",{parentName:"li"},"ControlPlaneHealthy")," condition report for ",(0,r.kt)("inlineCode",{parentName:"li"},"Shoot"),"s when the ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," feature gate gets enabled until their next reconciliation. by @gardener-ci-robot ","[#8411]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update Kubernetes dependencies (especially ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go"),") from ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on working with special shoots. by @gardener-ci-robot ","[#8423]"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update gardenlet to ",(0,r.kt)("code",null,"1.78.2"))),(0,r.kt)("h1",{id:"gardenergardener-2"},"[gardener/gardener]"),(0,r.kt)("h2",{id:"-bug-fixes-6"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue has been fixed which was causing a broken ",(0,r.kt)("inlineCode",{parentName:"li"},"ControlPlaneHealthy")," condition report for ",(0,r.kt)("inlineCode",{parentName:"li"},"Shoot"),"s when the ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," feature gate gets enabled until their next reconciliation. by @gardener-ci-robot ","[#8411]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update Kubernetes dependencies (especially ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go"),") from ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on working with special shoots. by @gardener-ci-robot ","[#8423]"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update gardener-controlplane to ",(0,r.kt)("code",null,"1.79.0"))),(0,r.kt)("h1",{id:"gardenergardener-3"},"[gardener/gardener]"),(0,r.kt)("h2",{id:"\ufe0f-breaking-changes-1"},"\u26a0\ufe0f Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[DEVELOPER]")," ",(0,r.kt)("inlineCode",{parentName:"li"},"uncachedObjects")," under pkg/client/kubernetes/options.go is now removed from Config struct which is used to set options for new ClientSets. Now the uncached objects can be directly set under ",(0,r.kt)("inlineCode",{parentName:"li"},"clientOptions.Cache.DisableFor")," field. by @ary1992 ","[#8245]")),(0,r.kt)("h2",{id:"-noteworthy"},"\ud83d\udcf0 Noteworthy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"DisablingScalingClassesForShoots")," feature gate has been promoted to beta. by @rfranzke ","[#8428]")),(0,r.kt)("h2",{id:"-new-features"},"\u2728 New Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Operators can now use the annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"gardener.cloud/operation=rotate-observability-credentials")," on the ",(0,r.kt)("inlineCode",{parentName:"li"},"garden")," resource to rotate the observability credentials.  by @acumino ","[#8393]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Configuring multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"reserve-excess-capacity")," deployments on ",(0,r.kt)("inlineCode",{parentName:"li"},"Seed"),"s is supported now by specifying ",(0,r.kt)("inlineCode",{parentName:"li"},".spec.settings.excessCapacityReservation.configs"),". by @oliver-goetz ","[#8356]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[USER]")," When the Kubernetes control plane version is at least ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.28"),", it is now possible to set the worker pool Kubernetes version to be at most three versions behind the control plane version. Earlier, only a skew of at most two versions was allowed. Find more details ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2023/08/15/kubernetes-v1-28-release/#changes-to-supported-skew-between-control-plane-and-node-versions"},"here"),". by @shafeeqes ","[#8402]")),(0,r.kt)("h2",{id:"-bug-fixes-7"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," A bug has been fixed which was causing the garbage collector in ",(0,r.kt)("inlineCode",{parentName:"li"},"gardener-resource-manager")," to wrongfully collect ",(0,r.kt)("inlineCode",{parentName:"li"},"Secret"),"s related to ",(0,r.kt)("inlineCode",{parentName:"li"},"ManagedResource"),"s when the source and the target cluster are equal. by @dimityrmirchev ","[#8398]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue has been fixed which was causing a broken ",(0,r.kt)("inlineCode",{parentName:"li"},"ControlPlaneHealthy")," condition report for ",(0,r.kt)("inlineCode",{parentName:"li"},"Shoot"),"s when the ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," feature gate gets enabled until their next reconciliation. by @rfranzke ","[#8407]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update Kubernetes dependencies (especially ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go"),") from ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on working with special shoots. by @MartinWeindel ","[#8422]")),(0,r.kt)("h2",{id:"-others-3"},"\ud83c\udfc3 Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Add Prometheus alert for pending seed pods by @StenlyTU ","[#8406]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The admission controllers of common provider extensions are automatically installed in the local extensions development setup by @ScheererJ ","[#8311]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"WorkerlessShoots")," feature gate has been promoted to beta and is now turned on by default. Before deploying this Gardener version, make sure that all your registered extensions support this feature gate. by @acumino ","[#8417]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The following image is updated:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quay.io/prometheus/alertmanager"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.24.0")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.0")," by @istvanballok ","[#8408]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[DEVELOPER]")," The following dependencies are updated:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/*")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.27.5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sigs.k8s.io/controller-runtime"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.14.6")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.15.2")," by @ary1992 ","[#8245]")))),(0,r.kt)("h1",{id:"gardenerapiserver-proxy"},"[gardener/apiserver-proxy]"),(0,r.kt)("h2",{id:"-others-4"},"\ud83c\udfc3 Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update golang base container image to 1.21.0. by @dependabot","[bot][gardener/apiserver-proxy#43]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update alpine base image components to 3.18.3. by @dependabot","[bot][gardener/apiserver-proxy#42]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Removed apiserver-proxy pod webhook as it is now included in Gardener Resource Manager. by @ScheererJ ","[gardener/apiserver-proxy#39]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update gardener/gardener to 1.77.1. by @dependabot","[bot][gardener/apiserver-proxy#44]")),(0,r.kt)("h1",{id:"gardenervpn2"},"[gardener/vpn2]"),(0,r.kt)("h2",{id:"-noteworthy-1"},"\ud83d\udcf0 Noteworthy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update to golang v1.21 by @ScheererJ ","[gardener/vpn2#42]")),(0,r.kt)("h1",{id:"docker-images"},"Docker Images"),(0,r.kt)("p",null,"admission-controller: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/admission-controller:v1.79.0"),"\napiserver: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/apiserver:v1.79.0"),"\ncontroller-manager: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/controller-manager:v1.79.0"),"\nscheduler: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/scheduler:v1.79.0"),"\noperator: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/operator:v1.79.0"),"\ngardenlet: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/gardenlet:v1.79.0"),"\nresource-manager: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/resource-manager:v1.79.0"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update gardener-controlplane to ",(0,r.kt)("code",null,"1.79.0"))),(0,r.kt)("h1",{id:"gardenergardener-4"},"[gardener/gardener]"),(0,r.kt)("h2",{id:"\ufe0f-breaking-changes-2"},"\u26a0\ufe0f Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[DEVELOPER]")," ",(0,r.kt)("inlineCode",{parentName:"li"},"uncachedObjects")," under pkg/client/kubernetes/options.go is now removed from Config struct which is used to set options for new ClientSets. Now the uncached objects can be directly set under ",(0,r.kt)("inlineCode",{parentName:"li"},"clientOptions.Cache.DisableFor")," field. by @ary1992 ","[#8245]")),(0,r.kt)("h2",{id:"-noteworthy-2"},"\ud83d\udcf0 Noteworthy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"DisablingScalingClassesForShoots")," feature gate has been promoted to beta. by @rfranzke ","[#8428]")),(0,r.kt)("h2",{id:"-new-features-1"},"\u2728 New Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Operators can now use the annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"gardener.cloud/operation=rotate-observability-credentials")," on the ",(0,r.kt)("inlineCode",{parentName:"li"},"garden")," resource to rotate the observability credentials.  by @acumino ","[#8393]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Configuring multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"reserve-excess-capacity")," deployments on ",(0,r.kt)("inlineCode",{parentName:"li"},"Seed"),"s is supported now by specifying ",(0,r.kt)("inlineCode",{parentName:"li"},".spec.settings.excessCapacityReservation.configs"),". by @oliver-goetz ","[#8356]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[USER]")," When the Kubernetes control plane version is at least ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.28"),", it is now possible to set the worker pool Kubernetes version to be at most three versions behind the control plane version. Earlier, only a skew of at most two versions was allowed. Find more details ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2023/08/15/kubernetes-v1-28-release/#changes-to-supported-skew-between-control-plane-and-node-versions"},"here"),". by @shafeeqes ","[#8402]")),(0,r.kt)("h2",{id:"-bug-fixes-8"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," A bug has been fixed which was causing the garbage collector in ",(0,r.kt)("inlineCode",{parentName:"li"},"gardener-resource-manager")," to wrongfully collect ",(0,r.kt)("inlineCode",{parentName:"li"},"Secret"),"s related to ",(0,r.kt)("inlineCode",{parentName:"li"},"ManagedResource"),"s when the source and the target cluster are equal. by @dimityrmirchev ","[#8398]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue has been fixed which was causing a broken ",(0,r.kt)("inlineCode",{parentName:"li"},"ControlPlaneHealthy")," condition report for ",(0,r.kt)("inlineCode",{parentName:"li"},"Shoot"),"s when the ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," feature gate gets enabled until their next reconciliation. by @rfranzke ","[#8407]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update Kubernetes dependencies (especially ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go"),") from ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on working with special shoots. by @MartinWeindel ","[#8422]")),(0,r.kt)("h2",{id:"-others-5"},"\ud83c\udfc3 Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Add Prometheus alert for pending seed pods by @StenlyTU ","[#8406]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The admission controllers of common provider extensions are automatically installed in the local extensions development setup by @ScheererJ ","[#8311]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"WorkerlessShoots")," feature gate has been promoted to beta and is now turned on by default. Before deploying this Gardener version, make sure that all your registered extensions support this feature gate. by @acumino ","[#8417]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The following image is updated:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quay.io/prometheus/alertmanager"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.24.0")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.0")," by @istvanballok ","[#8408]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[DEVELOPER]")," The following dependencies are updated:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/*")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.27.5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sigs.k8s.io/controller-runtime"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.14.6")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.15.2")," by @ary1992 ","[#8245]")))),(0,r.kt)("h1",{id:"gardenerapiserver-proxy-1"},"[gardener/apiserver-proxy]"),(0,r.kt)("h2",{id:"-others-6"},"\ud83c\udfc3 Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update golang base container image to 1.21.0. by @dependabot","[bot][gardener/apiserver-proxy#43]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update alpine base image components to 3.18.3. by @dependabot","[bot][gardener/apiserver-proxy#42]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Removed apiserver-proxy pod webhook as it is now included in Gardener Resource Manager. by @ScheererJ ","[gardener/apiserver-proxy#39]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update gardener/gardener to 1.77.1. by @dependabot","[bot][gardener/apiserver-proxy#44]")),(0,r.kt)("h1",{id:"gardenervpn2-1"},"[gardener/vpn2]"),(0,r.kt)("h2",{id:"-noteworthy-3"},"\ud83d\udcf0 Noteworthy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update to golang v1.21 by @ScheererJ ","[gardener/vpn2#42]")),(0,r.kt)("h1",{id:"docker-images-1"},"Docker Images"),(0,r.kt)("p",null,"admission-controller: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/admission-controller:v1.79.0"),"\napiserver: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/apiserver:v1.79.0"),"\ncontroller-manager: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/controller-manager:v1.79.0"),"\nscheduler: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/scheduler:v1.79.0"),"\noperator: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/operator:v1.79.0"),"\ngardenlet: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/gardenlet:v1.79.0"),"\nresource-manager: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/resource-manager:v1.79.0"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Update gardenlet to ",(0,r.kt)("code",null,"1.79.0"))),(0,r.kt)("h1",{id:"gardenergardener-5"},"[gardener/gardener]"),(0,r.kt)("h2",{id:"\ufe0f-breaking-changes-3"},"\u26a0\ufe0f Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[DEVELOPER]")," ",(0,r.kt)("inlineCode",{parentName:"li"},"uncachedObjects")," under pkg/client/kubernetes/options.go is now removed from Config struct which is used to set options for new ClientSets. Now the uncached objects can be directly set under ",(0,r.kt)("inlineCode",{parentName:"li"},"clientOptions.Cache.DisableFor")," field. by @ary1992 ","[#8245]")),(0,r.kt)("h2",{id:"-noteworthy-4"},"\ud83d\udcf0 Noteworthy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"DisablingScalingClassesForShoots")," feature gate has been promoted to beta. by @rfranzke ","[#8428]")),(0,r.kt)("h2",{id:"-new-features-2"},"\u2728 New Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Operators can now use the annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"gardener.cloud/operation=rotate-observability-credentials")," on the ",(0,r.kt)("inlineCode",{parentName:"li"},"garden")," resource to rotate the observability credentials.  by @acumino ","[#8393]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Configuring multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"reserve-excess-capacity")," deployments on ",(0,r.kt)("inlineCode",{parentName:"li"},"Seed"),"s is supported now by specifying ",(0,r.kt)("inlineCode",{parentName:"li"},".spec.settings.excessCapacityReservation.configs"),". by @oliver-goetz ","[#8356]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[USER]")," When the Kubernetes control plane version is at least ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.28"),", it is now possible to set the worker pool Kubernetes version to be at most three versions behind the control plane version. Earlier, only a skew of at most two versions was allowed. Find more details ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2023/08/15/kubernetes-v1-28-release/#changes-to-supported-skew-between-control-plane-and-node-versions"},"here"),". by @shafeeqes ","[#8402]")),(0,r.kt)("h2",{id:"-bug-fixes-9"},"\ud83d\udc1b Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," A bug has been fixed which was causing the garbage collector in ",(0,r.kt)("inlineCode",{parentName:"li"},"gardener-resource-manager")," to wrongfully collect ",(0,r.kt)("inlineCode",{parentName:"li"},"Secret"),"s related to ",(0,r.kt)("inlineCode",{parentName:"li"},"ManagedResource"),"s when the source and the target cluster are equal. by @dimityrmirchev ","[#8398]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," An issue has been fixed which was causing a broken ",(0,r.kt)("inlineCode",{parentName:"li"},"ControlPlaneHealthy")," condition report for ",(0,r.kt)("inlineCode",{parentName:"li"},"Shoot"),"s when the ",(0,r.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," feature gate gets enabled until their next reconciliation. by @rfranzke ","[#8407]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update Kubernetes dependencies (especially ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/client-go"),") from ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.3")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," to resolve panic on working with special shoots. by @MartinWeindel ","[#8422]")),(0,r.kt)("h2",{id:"-others-7"},"\ud83c\udfc3 Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Add Prometheus alert for pending seed pods by @StenlyTU ","[#8406]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The admission controllers of common provider extensions are automatically installed in the local extensions development setup by @ScheererJ ","[#8311]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"WorkerlessShoots")," feature gate has been promoted to beta and is now turned on by default. Before deploying this Gardener version, make sure that all your registered extensions support this feature gate. by @acumino ","[#8417]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," The following image is updated:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quay.io/prometheus/alertmanager"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.24.0")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.0")," by @istvanballok ","[#8408]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[DEVELOPER]")," The following dependencies are updated:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io/*")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.26.4")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.27.5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sigs.k8s.io/controller-runtime"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.14.6")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.15.2")," by @ary1992 ","[#8245]")))),(0,r.kt)("h1",{id:"gardenerapiserver-proxy-2"},"[gardener/apiserver-proxy]"),(0,r.kt)("h2",{id:"-others-8"},"\ud83c\udfc3 Others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update golang base container image to 1.21.0. by @dependabot","[bot][gardener/apiserver-proxy#43]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update alpine base image components to 3.18.3. by @dependabot","[bot][gardener/apiserver-proxy#42]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Removed apiserver-proxy pod webhook as it is now included in Gardener Resource Manager. by @ScheererJ ","[gardener/apiserver-proxy#39]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update gardener/gardener to 1.77.1. by @dependabot","[bot][gardener/apiserver-proxy#44]")),(0,r.kt)("h1",{id:"gardenervpn2-2"},"[gardener/vpn2]"),(0,r.kt)("h2",{id:"-noteworthy-5"},"\ud83d\udcf0 Noteworthy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[OPERATOR]")," Update to golang v1.21 by @ScheererJ ","[gardener/vpn2#42]")),(0,r.kt)("h1",{id:"docker-images-2"},"Docker Images"),(0,r.kt)("p",null,"admission-controller: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/admission-controller:v1.79.0"),"\napiserver: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/apiserver:v1.79.0"),"\ncontroller-manager: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/controller-manager:v1.79.0"),"\nscheduler: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/scheduler:v1.79.0"),"\noperator: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/operator:v1.79.0"),"\ngardenlet: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/gardenlet:v1.79.0"),"\nresource-manager: ",(0,r.kt)("inlineCode",{parentName:"p"},"eu.gcr.io/gardener-project/gardener/resource-manager:v1.79.0"))))}u.isMDXComponent=!0}}]);