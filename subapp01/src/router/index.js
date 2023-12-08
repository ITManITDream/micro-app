/*
 * @Author: XiaoBing
 * @Date: 2023-12-06 17:02:01
 * @LastEditTime: 2023-12-06 17:41:23
 * @LastEditors: XiaoBing
 * @Description: 
 * @FilePath: \subapp01\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Test from '../views/test.vue'
import Home from '../views/default.vue'

const routes = [
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/test',
        name: Test,
        component: Test
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;