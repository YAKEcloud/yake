"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),g=n,h=m["".concat(d,".").concat(g)]||m[g]||p[g]||i;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={hide_table_of_contents:!0},l="Release Notes next",o={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},d={},s=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-3",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-4",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-5",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-6",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"\ud83c\udfc3 Others",id:"-others-4",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-7",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,n.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,n.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-alicloud to ",(0,n.kt)("code",null,"1.46.1"))),(0,n.kt)("h1",{id:"machine-controller-manager"},"[machine-controller-manager]"),(0,n.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[USER]")," An edge case where outdated DesiredReplicas annotation blocked a rolling update is fixed. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/822"},"gardener/machine-controller-manager#822"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rishabh-11"},"@rishabh-11"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing nil pointer panic on scaleup of the machinedeployment along with trigger of rolling update, is fixed (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/817"},"gardener/machine-controller-manager#817"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/himanshu-kun"},"@himanshu-kun"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Included ",(0,n.kt)("inlineCode",{parentName:"li"},"UnavailableReplicas")," in determining if a machine deployment status update is needed (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/834"},"gardener/machine-controller-manager#834"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-azure to ",(0,n.kt)("code",null,"1.36.2"))),(0,n.kt)("h1",{id:"machine-controller-manager-1"},"[machine-controller-manager]"),(0,n.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Included ",(0,n.kt)("inlineCode",{parentName:"li"},"UnavailableReplicas")," in determining if a machine deployment status update is needed (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/834"},"gardener/machine-controller-manager#834"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-gcp to ",(0,n.kt)("code",null,"1.30.2"))),(0,n.kt)("h1",{id:"gardener-extension-provider-gcp"},"[gardener-extension-provider-gcp]"),(0,n.kt)("h2",{id:"-others"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," This extension is now build with golang 1.20.5. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-gcp/pull/626"},"gardener/gardener-extension-provider-gcp#626"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/vpnachev"},"@vpnachev"),")")),(0,n.kt)("h1",{id:"machine-controller-manager-2"},"[machine-controller-manager]"),(0,n.kt)("h2",{id:"-bug-fixes-2"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Included ",(0,n.kt)("inlineCode",{parentName:"li"},"UnavailableReplicas")," in determining if a machine deployment status update is needed (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/834"},"gardener/machine-controller-manager#834"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-openstack to ",(0,n.kt)("code",null,"1.35.1"))),(0,n.kt)("h1",{id:"machine-controller-manager-3"},"[machine-controller-manager]"),(0,n.kt)("h2",{id:"-bug-fixes-3"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Included ",(0,n.kt)("inlineCode",{parentName:"li"},"UnavailableReplicas")," in determining if a machine deployment status update is needed (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/834"},"gardener/machine-controller-manager#834"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update gardener-controlplane to ",(0,n.kt)("code",null,"1.73.1"))),(0,n.kt)("h1",{id:"gardener"},"[gardener]"),(0,n.kt)("h2",{id:"-bug-fixes-4"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8137"},"gardener/gardener#8137"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/oliver-goetz"},"@oliver-goetz"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Missing permissions were added for the Gardenlet service account for ",(0,n.kt)("inlineCode",{parentName:"li"},"Machine")," objects. This fix is relevant if feature gate ",(0,n.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," is enabled in your landscape. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8123"},"gardener/gardener#8123"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,n.kt)("h2",{id:"-others-1"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Plutono is now updated to v7.5.22 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8100"},"gardener/gardener#8100"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8105"},"gardener/gardener#8105"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploying Shoot namespace in Seed")," step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8118"},"gardener/gardener#8118"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The reconciliation time limit for the controller resource reconciliation, e.g. for ",(0,n.kt)("inlineCode",{parentName:"li"},"ManagedResource"),", has been increased from ",(0,n.kt)("inlineCode",{parentName:"li"},"1m")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"3m"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8090"},"gardener/gardener#8090"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update gardener-controlplane to ",(0,n.kt)("code",null,"1.73.1"))),(0,n.kt)("h1",{id:"gardener-1"},"[gardener]"),(0,n.kt)("h2",{id:"-bug-fixes-5"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8137"},"gardener/gardener#8137"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/oliver-goetz"},"@oliver-goetz"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Missing permissions were added for the Gardenlet service account for ",(0,n.kt)("inlineCode",{parentName:"li"},"Machine")," objects. This fix is relevant if feature gate ",(0,n.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," is enabled in your landscape. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8123"},"gardener/gardener#8123"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,n.kt)("h2",{id:"-others-2"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Plutono is now updated to v7.5.22 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8100"},"gardener/gardener#8100"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8105"},"gardener/gardener#8105"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploying Shoot namespace in Seed")," step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8118"},"gardener/gardener#8118"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The reconciliation time limit for the controller resource reconciliation, e.g. for ",(0,n.kt)("inlineCode",{parentName:"li"},"ManagedResource"),", has been increased from ",(0,n.kt)("inlineCode",{parentName:"li"},"1m")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"3m"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8090"},"gardener/gardener#8090"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update gardenlet to ",(0,n.kt)("code",null,"1.73.1"))),(0,n.kt)("h1",{id:"gardener-2"},"[gardener]"),(0,n.kt)("h2",{id:"-bug-fixes-6"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing deletion of a legacy (wrongly configured) Shoot cluster to be denied because of network ranges overlapping with the default VPN network is now fixed. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8137"},"gardener/gardener#8137"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/oliver-goetz"},"@oliver-goetz"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Missing permissions were added for the Gardenlet service account for ",(0,n.kt)("inlineCode",{parentName:"li"},"Machine")," objects. This fix is relevant if feature gate ",(0,n.kt)("inlineCode",{parentName:"li"},"MachineControllerManagerDeployment")," is enabled in your landscape. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8123"},"gardener/gardener#8123"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,n.kt)("h2",{id:"-others-3"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Plutono is now updated to v7.5.22 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8100"},"gardener/gardener#8100"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Fixed flaky operator behaviour with regards to istio deployment caused by concurrent update of garden object (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8105"},"gardener/gardener#8105"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The ",(0,n.kt)("inlineCode",{parentName:"li"},"Deploying Shoot namespace in Seed")," step was slightly improved. Earlier it failed at some occasions when it tried to read zone information for volumes that have not been created yet. This was a transient error that dissolved in subsequent reconcile runs. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8118"},"gardener/gardener#8118"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The reconciliation time limit for the controller resource reconciliation, e.g. for ",(0,n.kt)("inlineCode",{parentName:"li"},"ManagedResource"),", has been increased from ",(0,n.kt)("inlineCode",{parentName:"li"},"1m")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"3m"),". (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/8090"},"gardener/gardener#8090"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Update provider-aws to ",(0,n.kt)("code",null,"1.44.3"))),(0,n.kt)("h1",{id:"gardener-extension-provider-aws"},"[gardener-extension-provider-aws]"),(0,n.kt)("h2",{id:"-others-4"},"\ud83c\udfc3 Others"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," The following dependency is updated to adopt a fix for ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/issues/8058"},"https://github.com/gardener/gardener/issues/8058"),": (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/777"},"gardener/gardener-extension-provider-aws#777"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"github.com/gardener/gardener: v1.71.0 -> v1.71.5")))),(0,n.kt)("h1",{id:"machine-controller-manager-4"},"[machine-controller-manager]"),(0,n.kt)("h2",{id:"-bug-fixes-7"},"\ud83d\udc1b Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"[OPERATOR]")," Included ",(0,n.kt)("inlineCode",{parentName:"li"},"UnavailableReplicas")," in determining if a machine deployment status update is needed (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gardener/machine-controller-manager/pull/834"},"gardener/machine-controller-manager#834"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ialidzhikov"},"@ialidzhikov"),")"))))}m.isMDXComponent=!0}}]);