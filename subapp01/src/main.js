/*
 * @Author: XiaoBing
 * @Date: 2023-12-06 11:55:39
 * @LastEditTime: 2023-12-07 09:54:23
 * @LastEditors: XiaoBing
 * @Description: 
 * @FilePath: \subapp01\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './public-path'

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')
