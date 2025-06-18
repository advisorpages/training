// docusaurus.config.js

module.exports = {
  title: 'Training',
  tagline: 'Internal team training resources',
  url: 'https://advisorpages.github.io',
  baseUrl: '/training/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'advisorpages', // GitHub org/user
  projectName: 'training',          // GitHub repo name

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
