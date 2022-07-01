const path = require('path')
function resolve(_path) {
  return path.resolve(__dirname, _path)
}
module.exports = {
  port: "9000",
  base: "/my-components/",
  // dest: "./docs/.vuepress/build",
  plugins: ['demo-container'],
  title: "my-components",
  description: "my-components DOCS",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '组件',
        items: [
          { text: 'table封装', link: '/guide/table' },
          { text: '组件2', link: '/guide/ex2' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/caohoucheng/my-components' },
    ],
    sidebar: [
      '/guide/',
      '/guide/table',
      '/guide/ex2'
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve('../assets')
      }
    }
  }
}