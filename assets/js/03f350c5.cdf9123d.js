"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82599],{22580:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"1.92.x","label":"1.92.x","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-1.92.x","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Overview","href":"/docs/1.92.x/overview","docId":"overview","unlisted":false},{"type":"category","label":"Architecture / Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/docs/1.92.x/architecture-configuration/architecture","docId":"architecture-configuration/architecture","unlisted":false},{"type":"link","label":"The YAKE config secret","href":"/docs/1.92.x/architecture-configuration/yake-config-secret","docId":"architecture-configuration/yake-config-secret","unlisted":false},{"type":"link","label":"The YAKE config git repository","href":"/docs/1.92.x/architecture-configuration/yake-config-gitrepo","docId":"architecture-configuration/yake-config-gitrepo","unlisted":false},{"type":"link","label":"Gardener Extensions Configuration","href":"/docs/1.92.x/architecture-configuration/extensions-config","docId":"architecture-configuration/extensions-config","unlisted":false},{"type":"link","label":"Working with Helm and Flux","href":"/docs/1.92.x/architecture-configuration/helm-flux","docId":"architecture-configuration/helm-flux","unlisted":false}],"href":"/docs/1.92.x/category/architecture--configuration"},{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Prerequisites","href":"/docs/1.92.x/installation/prerequisites","docId":"installation/prerequisites","unlisted":false}],"href":"/docs/1.92.x/category/installation"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/1.92.x/guides/installation","docId":"guides/installation","unlisted":false},{"type":"link","label":"Scaling out with Managed Seeds","href":"/docs/1.92.x/guides/managed-seeds","docId":"guides/managed-seeds","unlisted":false},{"type":"link","label":"Use custom container registry","href":"/docs/1.92.x/guides/registryOverwrite","docId":"guides/registryOverwrite","unlisted":false},{"type":"link","label":"Authentication with OpenID Connect","href":"/docs/1.92.x/guides/openid-connect","docId":"guides/openid-connect","unlisted":false},{"type":"link","label":"Future Guides","href":"/docs/1.92.x/guides/","docId":"guides/index","unlisted":false}],"href":"/docs/1.92.x/category/guides"},{"type":"link","label":"FAQ","href":"/docs/1.92.x/faq","docId":"faq","unlisted":false}]},"docs":{"architecture-configuration/architecture":{"id":"architecture-configuration/architecture","title":"Architecture","description":"High Level Overview","sidebar":"tutorialSidebar"},"architecture-configuration/extensions-config":{"id":"architecture-configuration/extensions-config","title":"Gardener Extensions Configuration","description":"Other than the core Gardener components, Gardener extensions are configured through a YAKE internal helm chart. Consequently, you cannot retrieve any information about possible values via e.g. the helm cli. For this reason the extension-values Secret is documented here. As the other configuration secrets, the secret\'s header looks like the following:","sidebar":"tutorialSidebar"},"architecture-configuration/helm-flux":{"id":"architecture-configuration/helm-flux","title":"Working with Helm and Flux","description":"On this page, you\'ll find some useful information on how to work with the commandline interfaces for helm and flux in the context of your YAKE-based Gardener installation.","sidebar":"tutorialSidebar"},"architecture-configuration/yake-config-gitrepo":{"id":"architecture-configuration/yake-config-gitrepo","title":"The YAKE config git repository","description":"As already introduced in the architecture diagram, values for the helm charts deployed for the Gardener installation are configured and maintained in a GitOps workflow. For instance, your repository tree looks like this:","sidebar":"tutorialSidebar"},"architecture-configuration/yake-config-secret":{"id":"architecture-configuration/yake-config-secret","title":"The YAKE config secret","description":"Via the yake-config secret, some basic parameters for the resulting Gardener installation are configured. In particular, values which should be kept secret such as dnsprovider credentials are set in yake-config.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"FAQ","description":"Which Gardener version do I get with YAKE?","sidebar":"tutorialSidebar"},"guides/index":{"id":"guides/index","title":"Future Guides","description":"Change URL for dashboard/identity","sidebar":"tutorialSidebar"},"guides/installation":{"id":"guides/installation","title":"Installation","description":"The process of installing YAKE can differ slightly depending on your kubernetes environment. So this section will be expanded to include more providers over time.","sidebar":"tutorialSidebar"},"guides/managed-seeds":{"id":"guides/managed-seeds","title":"Scaling out with Managed Seeds","description":"Deployment of ManagedSeeds in YAKE","sidebar":"tutorialSidebar"},"guides/openid-connect":{"id":"guides/openid-connect","title":"Authentication with OpenID Connect","description":"YAKE and Gardener do not have their own user authentication and should be connected to an external authentication provider of your choice. Part of our setup is the Dex OpenID service which can be connected via connectors to many authentication providers and protocols like","sidebar":"tutorialSidebar"},"guides/registryOverwrite":{"id":"guides/registryOverwrite","title":"Use custom container registry","description":"YAKE in its default configuration will use container images from public container registries, whichever the developers of the respective component decided to publish to \\"upstream\\". Larger installations could run into rate limits of specific registries or have other reasons not to use those registries directly, and pull the same images from a registry mirror instead.","sidebar":"tutorialSidebar"},"installation/prerequisites":{"id":"installation/prerequisites","title":"Prerequisites","description":"Before you can start with your YAKE deployment, you should check whether you have everything you need at hand. In the following, the prerequisites are listed and detailed.","sidebar":"tutorialSidebar"},"overview":{"id":"overview","title":"Overview","description":"YAKE is thea GitOps driven installer and lifecycle management tool for Gardener. It helps you","sidebar":"tutorialSidebar"}}}}')}}]);