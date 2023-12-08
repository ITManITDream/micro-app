/*
 * @Author: XiaoBing
 * @Date: 2023-12-06 14:07:24
 * @LastEditTime: 2023-12-06 14:34:59
 * @LastEditors: XiaoBing
 * @Description: 
 * @FilePath: \microapp\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/home.vue'
import SubApp01 from '../views/subapp01.vue'
import SubApp02 from '../views/subapp02.vue'

const routes = [
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/subApp01',
        name: SubApp01,
        component: SubApp01
    },
    {
        path: '/subApp02',
        name: SubApp02,
        component: SubApp02
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;