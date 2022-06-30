const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
// function resolvePath(dir) {
//   return path.join(__dirname, './', dir)
// }
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8888
  },
})
