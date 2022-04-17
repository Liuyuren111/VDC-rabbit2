const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static', //打包存放目录地方

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname,'./src/assets/less/variables.less'),
        path.join(__dirname,'./src/assets/less/mixin.less'),
      ]
    }
  },

  chainWebpack: (config) =>{
    // 修复HMR（热更新）
    config.resolve.symlinks(true);
  }
})
