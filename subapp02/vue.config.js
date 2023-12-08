/*
 * @Author: XiaoBing
 * @Date: 2023-12-06 11:59:46
 * @LastEditTime: 2023-12-06 14:32:24
 * @LastEditors: XiaoBing
 * @Description: 
 * @FilePath: \subapp02\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
})
