const path = require('path')
function resolve(_path) {
  return path.resolve(__dirname, _path)
}
module.exports = {
  port: "9000",
  base: "/",
  // dest: "./docs/.vuepress/build",
  title: "my-components",
  description: "my-components DOCS",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '组件',
        items: [
          { text: '组件1', link: '/guide/ex1' },
          { text: '组件2', link: '/guide/ex2' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/caohoucheng/my-components' },
    ],
    sidebar: [
      '/guide/',
      '/guide/ex1',
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