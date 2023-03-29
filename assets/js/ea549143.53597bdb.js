"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,h=l["".concat(s,".").concat(m)]||l[m]||u[m]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},a="Authentication with OpenID Connect",c={unversionedId:"guides/openid-connect",id:"version-1.66.x/guides/openid-connect",title:"Authentication with OpenID Connect",description:"23KE and Gardener do not have their own user authentication and should be connected to an external authentication provider of your choice. Part of our setup is the Dex OpenID service which can be connected via connectors to many authentication providers and protocols like",source:"@site/versioned_docs/version-1.66.x/guides/openid-connect.md",sourceDirName:"guides",slug:"/guides/openid-connect",permalink:"/docs/1.66.x/guides/openid-connect",draft:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.66.x/guides/openid-connect.md",tags:[],version:"1.66.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/1.66.x/category/guides"},next:{title:"Use custom container registry",permalink:"/docs/1.66.x/guides/registryOverwrite"}},s={},d=[{value:"Static users",id:"static-users",level:2},{value:"Identity component configuration",id:"identity-component-configuration",level:2}],p={toc:d};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication-with-openid-connect"},"Authentication with OpenID Connect"),(0,o.kt)("p",null,"23KE and Gardener do not have their own user authentication and should be connected to an external authentication provider of your choice. Part of our setup is the ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://dexidp.io/"},"Dex"))," OpenID service which can be connected via ",(0,o.kt)("a",{parentName:"p",href:"https://dexidp.io/docs/connectors/"},"connectors")," to many authentication providers and protocols like"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dexidp.io/docs/connectors/oidc/"},"OpenID Connect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dexidp.io/docs/connectors/saml/"},"SAML")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dexidp.io/docs/connectors/ldap/"},"LDAP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dexidp.io/docs/connectors/github/"},"GitHub"))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Authentication")," means checking if the user credentials are valid, most commonly username + password and maybe an OTP token. This part is happening in the external authentication provider, which also is responsible for user creation, password changes, password policies, locking/deleting users etc."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Authorization")," means deciding what an user is allowed to do and see. This part is always done ",(0,o.kt)("em",{parentName:"p"},"inside")," of Gardener by adding members to projects. Group membership or other information from the authentication provider is not used for authorization."),(0,o.kt)("h2",{id:"static-users"},"Static users"),(0,o.kt)("p",null,"The default 23KE configuration has created a user in Dex with a static password, and assiged admin permissions to that user. This is just to get started or for very minimal setups. While not recommended, you could add more users with static passwords in the same manner and add them as members to projects. We advise to remove that configuration after you have configured a centralised authentication provider. To do so, remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"staticPasswords")," section from ",(0,o.kt)("inlineCode",{parentName:"p"},"config/identity-values.yaml")," and adjust ",(0,o.kt)("inlineCode",{parentName:"p"},"garden-content/admin-clusterrolebinding.yaml"),"."),(0,o.kt)("h2",{id:"identity-component-configuration"},"Identity component configuration"),(0,o.kt)("p",null,"The identity component in 23KE (Dex) is configured via the ",(0,o.kt)("inlineCode",{parentName:"p"},"identity-values")," secret in the cluster. Our GitOps workflow will manage this secret via ",(0,o.kt)("inlineCode",{parentName:"p"},"config/identity-values.yaml")," in git."),(0,o.kt)("p",null,"Shown here is an example configuration with OpenID connect. You need to refer to the Dex documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://dexidp.io/docs/connectors/"},"connectors")," for a complete list of options."),(0,o.kt)("p",null,"The 23ke identity component will need to be added as a new ",(0,o.kt)("em",{parentName:"p"},"client")," in your OpenID provider first, which will allow you to fill the values for ",(0,o.kt)("inlineCode",{parentName:"p"},"clientID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: identity-values\n  namespace: flux-system\ntype: Opaque\nstringData:\n  values.yaml: |\n    connectors:\n    - type: oidc\n      id: iam\n      name: Company IAM\n      config:\n        issuer: https://auth.example.org\n        clientID: 811910b8-91a3-11ed-aa17-f7f643bfc07a\n        clientSecret: faoli3koo8keix0Cuicae2phi5aaPaed\n        redirectURI: https://identity.gardener.example.org/oidc/callback\n")))}l.isMDXComponent=!0}}]);