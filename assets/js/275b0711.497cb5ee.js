"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59717],{99073:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"1.86.x","label":"1.86.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-1.86.x","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Overview","href":"/yake/docs/overview","docId":"overview"},{"type":"category","label":"Architecture / Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/yake/docs/architecture-configuration/architecture","docId":"architecture-configuration/architecture"},{"type":"link","label":"The Yake config secret","href":"/yake/docs/architecture-configuration/yake-config-secret","docId":"architecture-configuration/yake-config-secret"},{"type":"link","label":"The Yake config git repository","href":"/yake/docs/architecture-configuration/yake-config-gitrepo","docId":"architecture-configuration/yake-config-gitrepo"},{"type":"link","label":"Gardener Extensions Configuration","href":"/yake/docs/architecture-configuration/extensions-config","docId":"architecture-configuration/extensions-config"},{"type":"link","label":"Working with Helm and Flux","href":"/yake/docs/architecture-configuration/helm-flux","docId":"architecture-configuration/helm-flux"}],"href":"/yake/docs/category/architecture--configuration"},{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Prerequisites","href":"/yake/docs/installation/prerequisites","docId":"installation/prerequisites"}],"href":"/yake/docs/category/installation"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Authentication with OpenID Connect","href":"/yake/docs/guides/openid-connect","docId":"guides/openid-connect"},{"type":"link","label":"Use custom container registry","href":"/yake/docs/guides/registryOverwrite","docId":"guides/registryOverwrite"},{"type":"link","label":"Scaling out with Managed Seeds","href":"/yake/docs/guides/managed-seeds","docId":"guides/managed-seeds"},{"type":"link","label":"Future Guides","href":"/yake/docs/guides/","docId":"guides/index"}],"href":"/yake/docs/category/guides"},{"type":"link","label":"FAQ","href":"/yake/docs/faq","docId":"faq"}]},"docs":{"architecture-configuration/architecture":{"id":"architecture-configuration/architecture","title":"Architecture","description":"High Level Overview","sidebar":"tutorialSidebar"},"architecture-configuration/extensions-config":{"id":"architecture-configuration/extensions-config","title":"Gardener Extensions Configuration","description":"Other than the core Gardener components, Gardener extensions are configured through a Yake internal helm chart. Consequently, you cannot retrieve any information about possible values via e.g. the helm cli. For this reason the extension-values Secret is documented here. As the other configuration secrets, the secret\'s header looks like the following:","sidebar":"tutorialSidebar"},"architecture-configuration/helm-flux":{"id":"architecture-configuration/helm-flux","title":"Working with Helm and Flux","description":"On this page, you\'ll find some useful information on how to work with the commandline interfaces for helm and flux in the context of your Yake-based Gardener installation.","sidebar":"tutorialSidebar"},"architecture-configuration/yake-config-gitrepo":{"id":"architecture-configuration/yake-config-gitrepo","title":"The Yake config git repository","description":"As already introduced in the architecture diagram, values for the helm charts deployed for the Gardener installation are configured and maintained in a GitOps workflow. For instance, your repository tree looks like this:","sidebar":"tutorialSidebar"},"architecture-configuration/yake-config-secret":{"id":"architecture-configuration/yake-config-secret","title":"The Yake config secret","description":"Via the yake-config secret, some basic parameters for the resulting Gardener installation are configured. In particular, values which should be kept secret such as dnsprovider credentials are set in yake-config.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"Which Gardener version do I get with Yake?","sidebar":"tutorialSidebar"},"guides/index":{"id":"guides/index","title":"Future Guides","description":"Change URL for dashboard/identity","sidebar":"tutorialSidebar"},"guides/managed-seeds":{"id":"guides/managed-seeds","title":"Scaling out with Managed Seeds","description":"Deployment of ManagedSeeds in Yake","sidebar":"tutorialSidebar"},"guides/openid-connect":{"id":"guides/openid-connect","title":"Authentication with OpenID Connect","description":"Yake and Gardener do not have their own user authentication and should be connected to an external authentication provider of your choice. Part of our setup is the Dex OpenID service which can be connected via connectors to many authentication providers and protocols like","sidebar":"tutorialSidebar"},"guides/registryOverwrite":{"id":"guides/registryOverwrite","title":"Use custom container registry","description":"Yake in it\'s default configuration will use container images from public container registries, whichever the developers of the respective component decided to publish to \\"upstream\\". Larger installations could run into rate limits of specific registries or have other reasons not to use those registries directly, and pull the same images from a registry mirror instead.","sidebar":"tutorialSidebar"},"installation/prerequisites":{"id":"installation/prerequisites","title":"Prerequisites","description":"Before you can start with your Yake deployment, you should check whether you have everything you need at hand. In the following, the prerequisites are listed and detailed.","sidebar":"tutorialSidebar"},"overview":{"id":"overview","title":"Overview","description":"Yake is a GitOps driven Gardener distribution. It helps you to deploy your gardener setup fast and reliably. It is also your companion, when it comes to upgrading and maintaining your setup. All Yake releases are carefully selected and tested sets of upstream gardener components. With Yake you can run and configure your complete gardener setup through your git config-repository. Based on Flux, the actual state of the system is always reconciled to the declarative configuration from your gitrepository which results in full control of your Gardener installation.","sidebar":"tutorialSidebar"}}}')}}]);