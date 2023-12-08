/*
 * @Author: XiaoBing
 * @Date: 2023-12-06 11:55:39
 * @LastEditTime: 2023-12-07 14:09:50
 * @LastEditors: XiaoBing
 * @Description: 
 * @FilePath: \subapp01\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
})
