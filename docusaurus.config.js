// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WP-MCP',
  tagline: 'Connect Claude & Codex to your WordPress site — no coding required.',
  favicon: 'img/favicon.png',
  url: 'https://tools.techinsol.io',
  baseUrl: '/wpmcp/docs/',
  organizationName: 'techinsol',
  projectName: 'wpmcp-docs',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/wpmcp-social.png',
      metadata: [
        { name: 'keywords', content: 'wordpress, ai, claude, codex, mcp, automation, wp-mcp' },
        { name: 'description', content: 'WP-MCP connects Claude and Codex to your WordPress site. Manage content, SEO, WooCommerce, and more using plain English — no coding required.' },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'TechinSol Tools',
          src: 'img/logo.svg',
          href: 'https://tools.techinsol.io',
        },
        items: [
        
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/prompts/library',
            label: 'Prompt Library',
            position: 'left',
          },
          {
            href: 'https://tools.techinsol.io',
            label: 'TechinSol.io',
            position: 'right',
          },
          {
            href: 'https://github.com/techinsol/wpmcp-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Getting Started', to: '/getting-started/installation' },
              { label: 'Connect Claude', to: '/connecting/claude' },
              { label: 'Connect Codex', to: '/connecting/codex' },
              { label: 'Prompt Library', to: '/prompts/library' },
            ],
          },
          {
            title: 'Tools',
            items: [
              { label: 'Magic Tools', to: '/tools/magic' },
              { label: 'Content & Pages', to: '/tools/content' },
              { label: 'SEO', to: '/tools/seo' },
              { label: 'WooCommerce', to: '/tools/woocommerce' },
            ],
          },
          {
            title: 'TechinSol',
            items: [
              { label: 'Website', href: 'https://tools.techinsol.io' },
              { label: 'GitHub', href: 'https://github.com/techinsol' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TechinSol. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['php', 'bash', 'json'],
      },
      algolia: undefined,
    }),
};

module.exports = config;
