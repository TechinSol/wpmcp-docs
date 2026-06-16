/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Introduction',
    },
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/requirements',
        'getting-started/installation',
        'getting-started/first-connection',
      ],
    },
    {
      type: 'category',
      label: '🔌 Connecting AI Clients',
      collapsed: false,
      items: [
        'connecting/claude',
        'connecting/codex',
        'connecting/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: '🛠️ Tools Reference',
      collapsed: true,
      items: [
        'tools/overview',
        'tools/magic',
        'tools/content',
        'tools/media',
        'tools/seo',
        'tools/design',
        'tools/woocommerce',
        'tools/users',
        'tools/plugins',
        'tools/comments',
        'tools/health',
        'tools/security',
      ],
    },
    {
      type: 'category',
      label: '💬 Prompt Library',
      collapsed: true,
      items: [
        'prompts/library',
        'prompts/connection',
        'prompts/content',
        'prompts/seo',
        'prompts/woocommerce',
        'prompts/design',
      ],
    },
    {
      type: 'doc',
      id: 'security',
      label: '🛡️ Security & Permissions',
    },
    {
      type: 'doc',
      id: 'faq',
      label: '❓ FAQ',
    },
  ],
};

module.exports = sidebars;
