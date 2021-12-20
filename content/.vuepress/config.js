module.exports = {
  // site config
  lang: 'pt-BR',
  title: '',
  description: 'This is my env configs',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'jonathanbergson/configs',

    sidebar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Desenvolvimento',
        link: '/development/',
      },
      {
        text: 'Sistemas Operacionais',
        link: '/os/linux',
        children: [
          {
            text: 'Linux',
            link: '/os/linux/',
          },
          {
            text: 'MacOS',
            link: '/os/macos/',
          },
          {
            text: 'Windows',
            link: '/os/windows/',
          },
        ],
      },
    ],
  },
}
