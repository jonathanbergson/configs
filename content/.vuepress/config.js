module.exports = {
  // site config
  base: '/configs/',
  lang: 'pt-BR',
  title: 'Configs',
  description: 'Minhas configurações',

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
        text: 'Browsers',
        link: '/browser/',
      },
      {
        text: 'Editores de Texto',
        link: '/text-editor/atom',
        children: [
          {
            text: 'Atom',
            link: '/text-editor/atom',
          },
          {
            text: 'Sublime Text 3',
            link: '/text-editor/sublime-text',
          },
        ],
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
