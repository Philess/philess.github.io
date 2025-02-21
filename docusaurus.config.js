const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Le guide du développeur intergalactic",
  tagline: "Retrouvez ici mes articles, mes talks et mes vidéos sur le développement, le cloud, et l'IA.",
  url: 'https://philess.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'philess', // Usually your GitHub org/user name.
  projectName: 'philess.github.io', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    metadata: [{name: 'keywords', content: 'github, development, blog, devops, devsecops, cloud, azure, ai, copilot'}],
    navbar: {
      title: "Philess's blog",
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/talks', label: 'Talks', position: 'left'},
        {to: '/copilot', label: 'Copilot', position: 'left'},
        // {
        //   href: 'https://windr.org',
        //   label: 'Windsurfing App',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/philess/philess.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/philess',
            },
            // {
            //   label: 'YouTube',
            //   href: 'https://www.youtube.com/channel/UCA1kgHJTFZW-MRcr8KX_QYQ',
            // },            
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/philippedidiergeorges/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/philess',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 -- ${new Date().getFullYear()} Philippe Didiergeorges (@Philess) built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java'],
    },
},
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.dev/philess/philess.github.io/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.dev/philess/philess.github.io/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-1520374-2'
        }    
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [[
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
      ],      
    }
  ]
    
  ]
};
