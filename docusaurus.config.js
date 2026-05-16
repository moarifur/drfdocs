import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'moarifur',
  projectName: 'DRF Docs',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/moarifur/drfdocs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'DRF Docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'foundationSidebar',
            position: 'left',
            label: 'Foundations',
          },
          {
            type: 'docSidebar',
            sidebarId: 'coreSidebar',
            position: 'left',
            label: 'Core',
          },
          {
            type: 'docSidebar',
            sidebarId: 'drfSidebar',
            position: 'left',
            label: 'DRF',
          },
          {
            type: 'docSidebar',
            sidebarId: 'relationshipSidebar',
            position: 'left',
            label: 'Relationships',
          },
          {
            type: 'docSidebar',
            sidebarId: 'routingSidebar',
            position: 'left',
            label: 'Routing',
          },
          {
            type: 'docSidebar',
            sidebarId: 'authSidebar',
            position: 'left',
            label: 'Auth',
          },
          {
            type: 'docSidebar',
            sidebarId: 'optimizationSidebar',
            position: 'left',
            label: 'Optimization',
          },
          {
            type: 'docSidebar',
            sidebarId: 'automationSidebar',
            position: 'left',
            label: 'Testing(Automation)',
          },
          {
            type: 'docSidebar',
            sidebarId: 'deploySidebar',
            position: 'left',
            label: 'Deployment',
          },
          {
            type: 'docSidebar',
            sidebarId: 'agentSidebar',
            position: 'left',
            label: 'Agents',
          },
          {
            href: 'https://github.com/moarifur',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} DRF Docs, Built by Mohammad Arifur Rahman`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
