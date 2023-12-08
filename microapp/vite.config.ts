/*
 * @Author: XiaoBing
 * @Date: 2023-12-06 11:30:14
 * @LastEditTime: 2023-12-08 11:41:45
 * @LastEditors: XiaoBing
 * @Description: 
 * @FilePath: \microapp\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        // 解决报错：Failed to resolve component: micro-app
        compilerOptions: {
          isCustomElement: tag => /^micro-app/.test(tag)
        }
      }
    })
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
})
