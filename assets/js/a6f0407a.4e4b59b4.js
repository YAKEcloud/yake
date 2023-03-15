"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[488],{5139:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"1.66.x","label":"1.66.x","banner":null,"badge":true,"noIndex":false,"className":"docs-version-1.66.x","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Overview","href":"/docs/overview","docId":"overview"},{"type":"category","label":"Architecture / Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/docs/architecture-configuration/architecture","docId":"architecture-configuration/architecture"},{"type":"link","label":"The 23KE config secret","href":"/docs/architecture-configuration/23ke-config-secret","docId":"architecture-configuration/23ke-config-secret"},{"type":"link","label":"The 23KE config git repository","href":"/docs/architecture-configuration/23ke-config-gitrepo","docId":"architecture-configuration/23ke-config-gitrepo"},{"type":"link","label":"Gardener Extensions Configuration","href":"/docs/architecture-configuration/extensions-config","docId":"architecture-configuration/extensions-config"},{"type":"link","label":"Working with Helm and Flux","href":"/docs/architecture-configuration/helm-flux","docId":"architecture-configuration/helm-flux"}],"href":"/docs/category/architecture--configuration"},{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Prerequisites","href":"/docs/installation/prerequisites","docId":"installation/prerequisites"},{"type":"link","label":"Installation","href":"/docs/installation/","docId":"installation/installation"}],"href":"/docs/category/installation"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Authentication with OpenID Connect","href":"/docs/guides/openid-connect","docId":"guides/openid-connect"},{"type":"link","label":"Use custom container registry","href":"/docs/guides/registryOverwrite","docId":"guides/registryOverwrite"},{"type":"link","label":"Future Guides","href":"/docs/guides/","docId":"guides/index"}],"href":"/docs/category/guides"},{"type":"link","label":"FAQ","href":"/docs/faq","docId":"faq"}]},"docs":{"architecture-configuration/23ke-config-gitrepo":{"id":"architecture-configuration/23ke-config-gitrepo","title":"The 23KE config git repository","description":"As already introduced in the architecture diagram, values for the helm charts deployed for the Gardener installation are configured and maintained in a GitOps workflow. Assuming that the initial state of your configuration git repository was set up by 23kectl, your repository tree looks like this:","sidebar":"tutorialSidebar"},"architecture-configuration/23ke-config-secret":{"id":"architecture-configuration/23ke-config-secret","title":"The 23KE config secret","description":"Via the 23ke-config secret, some basic parameters for the resulting Gardener installation are configured. In particular, values which should be kept secret such as dnsprovider credentials are set in 23k-config.","sidebar":"tutorialSidebar"},"architecture-configuration/architecture":{"id":"architecture-configuration/architecture","title":"Architecture","description":"High Level Overview","sidebar":"tutorialSidebar"},"architecture-configuration/extensions-config":{"id":"architecture-configuration/extensions-config","title":"Gardener Extensions Configuration","description":"Other than the core Gardener components, Gardener extensions are configured through a 23KE internal helm chart. Consequently, you cannot retrieve any information about possible values via e.g. the helm cli. For this reason the extension-values Secret is documented here. As the other configuration secrets, the secret\'s header looks like the following:","sidebar":"tutorialSidebar"},"architecture-configuration/helm-flux":{"id":"architecture-configuration/helm-flux","title":"Working with Helm and Flux","description":"On this page, you\'ll find some useful information on how to work with the commandline interfaces for helm and flux in the context of your 23KE-based Gardener installation.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"Do the trial version and production version differ?","sidebar":"tutorialSidebar"},"guides/index":{"id":"guides/index","title":"Future Guides","description":"Scaling Out with ManagedSeeds","sidebar":"tutorialSidebar"},"guides/openid-connect":{"id":"guides/openid-connect","title":"Authentication with OpenID Connect","description":"23KE and Gardener do not have their own user authentication and should be connected to an external authentication provider of your choice. Part of our setup is the Dex OpenID service which can be connected via connectors to many authentication providers and protocols like","sidebar":"tutorialSidebar"},"guides/registryOverwrite":{"id":"guides/registryOverwrite","title":"Use custom container registry","description":"23KE in it\'s default configuration will use container images from public container registries, whichever the developers of the respective component decided to publish to \\"upstream\\". Larger installations could run into rate limits of specific registries or have other reasons not to use those registries directly, and pull the same images from a registry mirror instead.","sidebar":"tutorialSidebar"},"installation/installation":{"id":"installation/installation","title":"Installation","description":"Most easily, the installation can be performed by 23kectl, a configuration wizard for a basic setup. It is recommended to start with a basic setup and tweak it afterwards to the desired behavior.","sidebar":"tutorialSidebar"},"installation/prerequisites":{"id":"installation/prerequisites","title":"Prerequisites","description":"Before you can start with your 23KE deployment, you should check whether you have everything you need at hand. In the following, the prerequisites are listed and detailed.","sidebar":"tutorialSidebar"},"overview":{"id":"overview","title":"Overview","description":"23KE is a GitOps driven Gardener distribution. It helps you to deploy your gardener setup fast and reliably. It is also your companion, when it comes to upgrading and maintaining your setup. All 23KE releases are carefully selected and tested sets of upstream gardener components. With 23KE you can run and configure your complete gardener setup through your git config-repository. Based on Flux, the actual state of the system is always reconciled to the declarative configuration from your gitrepository which results in full control of your Gardener installation.","sidebar":"tutorialSidebar"}}}')}}]);