/*
 * @Author: XiaoBing
 * @Date: 2023-12-06 11:30:14
 * @LastEditTime: 2023-12-08 15:09:45
 * @LastEditors: XiaoBing
 * @Description: 
 * @FilePath: \microapp\src\main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'

microApp.start({
    disableScopecss: true,
    globalAssets: {
        css: ['//at.alicdn.com/t/c/font_4297197_ps66g8mx8zm.css']
    },
    excludeAssetFilter(asset: any){
        console.log(111, asset)
    },
    lifeCycles: {
        created(e: Event){
            console.log('全局created触发', e)
        },
        beforemount(e: Event){
            console.log('全局beforemount触发', e)
        },
        mounted(e: Event){
            console.log(444, document.querySelectorAll('.logo'))
            console.log('全局mounted触发', e)
        },
        unmount(e: Event){
            console.log('全局unmount触发', e)
        },
        error(e: Event){
            console.log('全局error触发', e)
        }
    },
    customProxyDocumentProperties: new Map([
        ['title', (value) => {}]
    ]),
})

// 注册主应用路由，供子应用使用
microApp.router.setBaseAppRouter(router)

// 必须放在start之后才会执行
if(window.__MICRO_APP_BASE_APPLICATION__){
    console.log('当前应用是主应用')
}

// 监听所有子应用的路由变化
microApp.router.beforeEach((to: object, from: object, appName: string)=>{
    console.log('全局前置守卫', to, from, appName)
})

// 监听某个子应用的路由变化
const cancelCallback = microApp.router.beforeEach({
    subapp01(to: object, from: object){
        console.log('子应用SubApp01的前置守卫', to, from)
    }
})

// 解绑路由监听
cancelCallback()

// 同步路由信息
microApp.router.attachToURL('subapp01')

const app = createApp(App)
app.config.globalProperties.microApp = microApp
app.use(router).mount('#app')
