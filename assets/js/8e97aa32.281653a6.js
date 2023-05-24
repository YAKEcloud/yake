"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,g=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={hide_table_of_contents:!0},l="Release Notes next",o={unversionedId:"next",id:"next",title:"Release Notes next",description:"23KE release notes and upgrade guide",source:"@site/release-notes/next.md",sourceDirName:".",slug:"/next",permalink:"/release-notes/next",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0}},s={},d=[{value:"23KE release notes and upgrade guide",id:"23ke-release-notes-and-upgrade-guide",level:2},{value:"Related upstream release notes / changelogs",id:"related-upstream-release-notes--changelogs",level:2},{value:"\ud83c\udfc3 Others",id:"-others",level:2},{value:"\ud83c\udfc3 Others",id:"-others-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-3",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83c\udfc3 Others",id:"-others-4",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-1",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-1",level:2},{value:"\ud83c\udfc3 Others",id:"-others-5",level:2},{value:"\u26a0\ufe0f Breaking Changes",id:"\ufe0f-breaking-changes-2",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes-2",level:2},{value:"\ud83c\udfc3 Others",id:"-others-6",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-notes-next"},"Release Notes next"),(0,a.kt)("h2",{id:"23ke-release-notes-and-upgrade-guide"},"23KE release notes and upgrade guide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Before upgrade",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The 23KE configuration chart was unified and moved, so resources need to be annotated to get adopted by the new chart name. To prevent the old charts from deleting resources when they get removed, they need to get suspended first.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flux suspend hr pre-gardener-configuration\nflux suspend hr gardener-configuration\nkubectl -n flux-system annotate Secret -l helm.toolkit.fluxcd.io/name=pre-gardener-configuration meta.helm.sh/release-name=configuration --overwrite\nkubectl -n flux-system annotate Secret -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=configuration --overwrite\nkubectl -n garden annotate Secret -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\nkubectl -n flux-system annotate Certificate -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\nkubectl -n flux-system annotate Issuer -l helm.toolkit.fluxcd.io/name=gardener-configuration meta.helm.sh/release-name=certificates --overwrite\n")),"If something goes wrong or the charts weren't suspended, other charts might complain about their -base-values Secret missing. To remedy,suspend and then resume the new ",(0,a.kt)("inlineCode",{parentName:"li"},"configuration")," HelmRelease so it re-generates those Secrets.")))),(0,a.kt)("h2",{id:"related-upstream-release-notes--changelogs"},"Related upstream release notes / changelogs"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-azure to ",(0,a.kt)("code",null,"1.35.3"))),(0,a.kt)("h1",{id:"gardener-extension-provider-azure"},"[gardener-extension-provider-azure]"),(0,a.kt)("h2",{id:"-others"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," Remove the error code check from ",(0,a.kt)("inlineCode",{parentName:"li"},"NodesChecker")," to prevent nil pointer panic. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-azure/pull/684"},"gardener/gardener-extension-provider-azure#684"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-aws to ",(0,a.kt)("code",null,"1.43.2"))),(0,a.kt)("h1",{id:"gardener-extension-provider-aws"},"[gardener-extension-provider-aws]"),(0,a.kt)("h2",{id:"-others-1"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," Remove the error code check from ",(0,a.kt)("inlineCode",{parentName:"li"},"NodesChecker")," to prevent nil pointer panic. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-aws/pull/748"},"gardener/gardener-extension-provider-aws#748"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-gcp to ",(0,a.kt)("code",null,"1.29.3"))),(0,a.kt)("h1",{id:"gardener-extension-provider-gcp"},"[gardener-extension-provider-gcp]"),(0,a.kt)("h2",{id:"-others-2"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," Remove the error code check from ",(0,a.kt)("inlineCode",{parentName:"li"},"NodesChecker")," to prevent nil pointer panic. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-gcp/pull/595"},"gardener/gardener-extension-provider-gcp#595"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update provider-openstack to ",(0,a.kt)("code",null,"1.33.3"))),(0,a.kt)("h1",{id:"gardener-extension-provider-openstack"},"[gardener-extension-provider-openstack]"),(0,a.kt)("h2",{id:"-others-3"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," Remove the error code check from ",(0,a.kt)("inlineCode",{parentName:"li"},"NodesChecker")," to prevent nil pointer panic. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener-extension-provider-openstack/pull/622"},"gardener/gardener-extension-provider-openstack#622"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/acumino"},"@acumino"),")"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardener-controlplane to ",(0,a.kt)("code",null,"1.70.2"))),(0,a.kt)("h1",{id:"gardener"},"[gardener]"),(0,a.kt)("h2",{id:"\ufe0f-breaking-changes"},"\u26a0\ufe0f Breaking Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[USER]")," Gardener denies setting ",(0,a.kt)("inlineCode",{parentName:"li"},"Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type")," if shoot is hibernated. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7920"},"gardener/gardener#7920"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,a.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[USER]")," A bug has been fixed which could cause ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-proxy"),"s from being missing after a ",(0,a.kt)("inlineCode",{parentName:"li"},"Shoot")," has been woken up from hibernation. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7917"},"gardener/gardener#7917"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue has been fixed that caused traffic from outside of the cluster to ",(0,a.kt)("inlineCode",{parentName:"li"},"Istio-Ingress")," being blocked. This is only relevant if seed(s) specify additional load balancer annotations via ",(0,a.kt)("inlineCode",{parentName:"li"},"seed.spec.settings.loadBalancerServices.annotations"),". (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7911"},"gardener/gardener#7911"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,a.kt)("h2",{id:"-others-4"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing panic in the health check for extension is fixed. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7914"},"gardener/gardener#7914"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardener-controlplane to ",(0,a.kt)("code",null,"1.70.2"))),(0,a.kt)("h1",{id:"gardener-1"},"[gardener]"),(0,a.kt)("h2",{id:"\ufe0f-breaking-changes-1"},"\u26a0\ufe0f Breaking Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[USER]")," Gardener denies setting ",(0,a.kt)("inlineCode",{parentName:"li"},"Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type")," if shoot is hibernated. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7920"},"gardener/gardener#7920"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,a.kt)("h2",{id:"-bug-fixes-1"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[USER]")," A bug has been fixed which could cause ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-proxy"),"s from being missing after a ",(0,a.kt)("inlineCode",{parentName:"li"},"Shoot")," has been woken up from hibernation. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7917"},"gardener/gardener#7917"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue has been fixed that caused traffic from outside of the cluster to ",(0,a.kt)("inlineCode",{parentName:"li"},"Istio-Ingress")," being blocked. This is only relevant if seed(s) specify additional load balancer annotations via ",(0,a.kt)("inlineCode",{parentName:"li"},"seed.spec.settings.loadBalancerServices.annotations"),". (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7911"},"gardener/gardener#7911"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,a.kt)("h2",{id:"-others-5"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing panic in the health check for extension is fixed. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7914"},"gardener/gardener#7914"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update gardenlet to ",(0,a.kt)("code",null,"1.70.2"))),(0,a.kt)("h1",{id:"gardener-2"},"[gardener]"),(0,a.kt)("h2",{id:"\ufe0f-breaking-changes-2"},"\u26a0\ufe0f Breaking Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[USER]")," Gardener denies setting ",(0,a.kt)("inlineCode",{parentName:"li"},"Shoot.Spec.ControlPlane.HighAvailability.FailureTolerance.Type")," if shoot is hibernated. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7920"},"gardener/gardener#7920"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,a.kt)("h2",{id:"-bug-fixes-2"},"\ud83d\udc1b Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[USER]")," A bug has been fixed which could cause ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-proxy"),"s from being missing after a ",(0,a.kt)("inlineCode",{parentName:"li"},"Shoot")," has been woken up from hibernation. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7917"},"gardener/gardener#7917"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue has been fixed that caused traffic from outside of the cluster to ",(0,a.kt)("inlineCode",{parentName:"li"},"Istio-Ingress")," being blocked. This is only relevant if seed(s) specify additional load balancer annotations via ",(0,a.kt)("inlineCode",{parentName:"li"},"seed.spec.settings.loadBalancerServices.annotations"),". (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7911"},"gardener/gardener#7911"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")")),(0,a.kt)("h2",{id:"-others-6"},"\ud83c\udfc3 Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"[OPERATOR]")," An issue causing panic in the health check for extension is fixed. (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener/gardener/pull/7914"},"gardener/gardener#7914"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-ci-robot"},"@gardener-ci-robot"),")"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Update cloudprofiles to ",(0,a.kt)("code",null,"0.6.2"))),(0,a.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Regiocloud: Change regiocloud-a to RegionA by @JensAc in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gardener-community/cloudprofiles/pull/23"},"https://github.com/gardener-community/cloudprofiles/pull/23"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gardener-community/cloudprofiles/compare/0.6.1...0.6.2"},"https://github.com/gardener-community/cloudprofiles/compare/0.6.1...0.6.2"))))}p.isMDXComponent=!0}}]);