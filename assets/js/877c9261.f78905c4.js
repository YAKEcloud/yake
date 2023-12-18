"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96613],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=n,f=c["".concat(d,".").concat(k)]||c[k]||m[k]||i;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},32498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:2},l="The Yake config secret",o={unversionedId:"architecture-configuration/yake-config-secret",id:"architecture-configuration/yake-config-secret",title:"The Yake config secret",description:"Via the yake-config secret, some basic parameters for the resulting Gardener installation are configured. In particular, values which should be kept secret such as dnsprovider credentials are set in yake-config.",source:"@site/docs/architecture-configuration/yake-config-secret.md",sourceDirName:"architecture-configuration",slug:"/architecture-configuration/yake-config-secret",permalink:"/yake/docs/next/architecture-configuration/yake-config-secret",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/docs/architecture-configuration/yake-config-secret.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/yake/docs/next/architecture-configuration/architecture"},next:{title:"The Yake config git repository",permalink:"/yake/docs/next/architecture-configuration/yake-config-gitrepo"}},d={},p=[],s={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-yake-config-secret"},"The Yake config secret"),(0,n.kt)("p",null,"Via the ",(0,n.kt)("inlineCode",{parentName:"p"},"yake-config")," secret, some basic parameters for the resulting Gardener installation are configured. In particular, values which should be kept secret such as dnsprovider credentials are set in ",(0,n.kt)("inlineCode",{parentName:"p"},"yake-config"),".\nAs the ",(0,n.kt)("inlineCode",{parentName:"p"},"yake-config")," secret serves as input values for the ",(0,n.kt)("inlineCode",{parentName:"p"},"configuration")," helm chart (see ",(0,n.kt)("a",{parentName:"p",href:"/yake/docs/next/architecture-configuration/architecture"},"architecture"),"), the secret is defined as"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: yake-config\n  namespace: flux-system\ntype: Opaque\nstringData:\n  values.yaml: |\n  ...\n")),(0,n.kt)("p",null,"and the configuration needs to be inserted below ",(0,n.kt)("inlineCode",{parentName:"p"},"stringData.values.yaml"),". The configuration options are listed and explained below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subfield"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subfield"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"clusterIdentity")," ",(0,n.kt)("br",null),"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"a unique identifier for your garden cluster")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"dashboard")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"clientSecret")," ",(0,n.kt)("br",null),"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"client secret e.g. some value obtained by ",(0,n.kt)("inlineCode",{parentName:"td"},"openssl rand -hex 20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"sessionSecret")," ",(0,n.kt)("br",null),"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"session secret e.g. some value obtained by ",(0,n.kt)("inlineCode",{parentName:"td"},"openssl rand -hex 20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"kubeApiServer")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"basicAuthPassword")," ",(0,n.kt)("br",null),"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"basic auth password for kubeapiserver e.g. ",(0,n.kt)("inlineCode",{parentName:"td"},"openssl rand -hex 20"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"issuer")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"acme")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"email")," ",(0,n.kt)("br",null),"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Email address used for certificate handlin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"server")," ",(0,n.kt)("br",null),"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"acme server, letsencryp production by default")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ca")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"ca of the acme server, not needed when using letsencrypt production")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"domains")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"global")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"global means used for ingress, gardener defaultDomain and internalDomain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"domain")," ",(0,n.kt)("br",null),"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"domain for your gardener installation, e.g. the dashboard will appear under dashboard.domain")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"provider")," ",(0,n.kt)("br",null),"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"DNS provider for your installation, e.g. azure-dns, aws-route53, openstack-designate etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"credentials")," ",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"https://github.com/gardener/external-dns-management/tree/master/examples"},"dnscredentials")),(0,n.kt)("td",{parentName:"tr",align:"left"},"DNS provider credential, see ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/gardener/external-dns-management/tree/master/examples"},"examples"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"registryOverwrite")),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"See Guide ",(0,n.kt)("a",{parentName:"td",href:"/yake/docs/next/guides/registryOverwrite"},"Use different container registry"))))))}c.isMDXComponent=!0}}]);