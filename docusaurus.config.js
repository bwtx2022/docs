const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Modrinth Documentation',
  tagline: 'Learn how to interact with the Modrinth API!',
  url: 'https://docs.modrinth.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'modrinth', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Modrinth',
      logo: {
        alt: 'Modrinth Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: 'api-spec',
          position: 'left',
          label: 'API Spec',
          activeBasePath: 'api-spec',
        },
        {
          href: 'https://modrinth.com/',
          label: 'Main website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Modrinth is open source software. You may view the source code at our GitHub page',
              href: 'https://github.com/modrinth',
            },
            {
              label: `modrinth/docs, built ${new Date().toDateString()}`,
              href: 'https://github.com/modrinth/docs'
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms',
              href: 'https://modrinth.com/legal/terms',
            },
            {
              label: 'Privacy',
              href: 'https://modrinth.com/legal/privacy',
            },
            {
              label: 'Rules',
              href: 'https://modrinth.com/legal/rules',
            },
            {
              label: 'License',
              href: 'https://github.com/modrinth/docs/blob/master/LICENSE',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Main site',
              href: 'https://modrinth.com',
            },
            {
              label: 'Blog',
              href: 'https://blog.modrinth.com/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/EUHuJHt',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/modrinth',
            },
          ],
        },
      ],
      copyright: `This documentation is public domain under the CC0. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['http', 'groovy'],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {
        name: 'publisher',
        content: 'Rinth, Inc.',
      },
      {
        name: 'theme-color',
        content: '#30b27b',
      },
      {
        name: 'og:image',
        content: 'https://cdn.modrinth.com/modrinth-new.png',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:site',
        content: '@modrinth',
      },
    ]
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/modrinth/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            spec: './static/openapi.yaml',
            route: '/api-spec/',
          },
        ],
        theme: {
          primaryColor: '#30b27b',
          redocOptions: {
            hideLoading: true,
            noAutoAuth: true,
          },
        },
      },
    ],
  ],
}
