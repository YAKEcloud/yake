"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47612],{20666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(85893),o=t(11151);const s={sidebar_position:1},r="Authentication with OpenID Connect",c={id:"guides/openid-connect",title:"Authentication with OpenID Connect",description:"23KE and Gardener do not have their own user authentication and should be connected to an external authentication provider of your choice. Part of our setup is the Dex OpenID service which can be connected via connectors to many authentication providers and protocols like",source:"@site/versioned_docs/version-1.70.x/guides/openid-connect.md",sourceDirName:"guides",slug:"/guides/openid-connect",permalink:"/docs/1.70.x/guides/openid-connect",draft:!1,unlisted:!1,editUrl:"https://github.com/23technologies/23ke-docs/tree/main/versioned_docs/version-1.70.x/guides/openid-connect.md",tags:[],version:"1.70.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/1.70.x/category/guides"},next:{title:"Use custom container registry",permalink:"/docs/1.70.x/guides/registryOverwrite"}},a={},d=[{value:"Static users",id:"static-users",level:2},{value:"Identity component configuration",id:"identity-component-configuration",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"authentication-with-openid-connect",children:"Authentication with OpenID Connect"}),"\n",(0,i.jsxs)(n.p,{children:["23KE and Gardener do not have their own user authentication and should be connected to an external authentication provider of your choice. Part of our setup is the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.a,{href:"https://dexidp.io/",children:"Dex"})})," OpenID service which can be connected via ",(0,i.jsx)(n.a,{href:"https://dexidp.io/docs/connectors/",children:"connectors"})," to many authentication providers and protocols like"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dexidp.io/docs/connectors/oidc/",children:"OpenID Connect"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dexidp.io/docs/connectors/saml/",children:"SAML"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dexidp.io/docs/connectors/ldap/",children:"LDAP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dexidp.io/docs/connectors/github/",children:"GitHub"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Authentication"})," means checking if the user credentials are valid, most commonly username + password and maybe an OTP token. This part is happening in the external authentication provider, which also is responsible for user creation, password changes, password policies, locking/deleting users etc."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Authorization"})," means deciding what an user is allowed to do and see. This part is always done ",(0,i.jsx)(n.em,{children:"inside"})," of Gardener by adding members to projects. Group membership or other information from the authentication provider is not used for authorization."]}),"\n",(0,i.jsx)(n.h2,{id:"static-users",children:"Static users"}),"\n",(0,i.jsxs)(n.p,{children:["The default 23KE configuration has created a user in Dex with a static password, and assiged admin permissions to that user. This is just to get started or for very minimal setups. While not recommended, you could add more users with static passwords in the same manner and add them as members to projects. We advise to remove that configuration after you have configured a centralised authentication provider. To do so, remove the ",(0,i.jsx)(n.code,{children:"staticPasswords"})," section from ",(0,i.jsx)(n.code,{children:"config/identity-values.yaml"})," and adjust ",(0,i.jsx)(n.code,{children:"garden-content/admin-clusterrolebinding.yaml"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"identity-component-configuration",children:"Identity component configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The identity component in 23KE (Dex) is configured via the ",(0,i.jsx)(n.code,{children:"identity-values"})," secret in the cluster. Our GitOps workflow will manage this secret via ",(0,i.jsx)(n.code,{children:"config/identity-values.yaml"})," in git."]}),"\n",(0,i.jsxs)(n.p,{children:["Shown here is an example configuration with OpenID connect. You need to refer to the Dex documentation for ",(0,i.jsx)(n.a,{href:"https://dexidp.io/docs/connectors/",children:"connectors"})," for a complete list of options."]}),"\n",(0,i.jsxs)(n.p,{children:["The 23ke identity component will need to be added as a new ",(0,i.jsx)(n.em,{children:"client"})," in your OpenID provider first, which will allow you to fill the values for ",(0,i.jsx)(n.code,{children:"clientID"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: identity-values\n  namespace: flux-system\ntype: Opaque\nstringData:\n  values.yaml: |\n    connectors:\n    - type: oidc\n      id: iam\n      name: Company IAM\n      config:\n        issuer: https://auth.example.org\n        clientID: 811910b8-91a3-11ed-aa17-f7f643bfc07a\n        clientSecret: faoli3koo8keix0Cuicae2phi5aaPaed\n        redirectURI: https://identity.gardener.example.org/oidc/callback\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);