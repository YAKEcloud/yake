// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const fs = require("fs");

// Reverse the sidebar items ordering (including nested category items)
function reverseSidebarItems(items) {
  // Reverse items in categories
  const result = items
    .filter(item => {
      if(process.env.NODE_ENV !== 'production') {
          return true
      }

      return item.id !== 'next'
    })
    .map((item) => {
      if (item.type === 'category') {
        return {...item, items: reverseSidebarItems(item.items)};
      }
      return item;
    })
    .reverse();

  return result;
}

function getLatestReleaseNotes() {
  const dir = fs.readdirSync('release-notes').sort();

  const latest = dir[dir.length - 1].replace('.md', '');

  return latest;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Yet another Kubernetes Engine",
  tagline: "The Installer & Lifecycle Management Tool for Gardener",
  url: "https://yake.cloud",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yakecloud", // Usually your GitHub org/user name.
  projectName: "yake", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    format: "detect",
    mermaid: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/yakecloud/yake/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/yakecloud/yake/tree/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "release-notes",
        path: "release-notes",
        routeBasePath: "release-notes",
        sidebarPath: require.resolve("./sidebars.js"),
				async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
						const sidebarItems = await defaultSidebarItemsGenerator(args);
						return reverseSidebarItems(sidebarItems);
        },
        // ... other options
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      metadata: [
        {
          name: "gardener",
          content: "installation, production, operations, maintenance",
        },
      ],
        navbar: {
            title: "YAKE",
            logo: {
                alt: "YAKE",
                src: "img/logo.svg",
                srcDark: "img/logo_dark.svg",
            },
            items: [
                {
                    type: "doc",
                    docId: "overview",
                    position: "left",
                    label: "Docs",
                },
                {
                    to: "/release-notes/" + getLatestReleaseNotes(),
                    label: "Release Notes",
                    position: "left",
                    activeBaseRegex: `/release-notes/`,
                },
                {
                    type: "docsVersionDropdown",
                    position: "right",
                    dropdownItemsAfter: [],
                    dropdownActiveClassDisabled: true,
                },
                {to: "/blog", label: "Blog", position: "left"},
                {
                    href: "https://github.com/yakecloud/yake",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Docs",
                            to: "/docs/overview",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/yakecloud",
                        },
                        {
                            label: "Gardener Community",
                            href: "https://github.com/gardener-community",
                        },
                        {
                            label: "Slack",
                            href: "https://gardener-cloud.slack.com",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "Legals",
                            to: "/legals",
                        },
                        {
                            label: "Privacy policy",
                            to: "/privacy-policy",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} 23 Technologies GmbH`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                // ```
                // language: ["en", "zh"],
                // ```
            }),
        ],
    ],
};

module.exports = config;
