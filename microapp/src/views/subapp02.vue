<template>
    <micro-app
        name='subapp02'
        url='http://localhost:8081/'
        :data="dataForChild"
        @datachange="dataChange">
    </micro-app>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
const { proxy }: any = getCurrentInstance()

// 定义接口
interface childData {
    name: string,
    age?: number,
    time: number | string
}

// 传递给子应用的数据
const dataForChild: childData = {
    name: 'SubApp01',
    time: new Date().getTime()
}

setTimeout(()=>{
    dataForChild.age = 18
    dataForChild.time = new Date().getTime()
    console.log('更新了数据，子应用无法监听到数据更新')
}, 3000)

// 手动发送数据给子应用：同时发送多次会合并数据之后再发送，第二次发送的info会覆盖第一次发送的info
proxy.microApp.setData('subapp02', { name: '张三', info: { address: '重庆' } })
proxy.microApp.setData('subapp02', { info: { code: '001' } })
proxy.microApp.setData('subapp02', { age: 18 }, (res: any)=>{
    console.log('主应用数据发送成功: ', res)
})

function onmounted(){
    // 获取子应用发送给主应用的数据
    const dataFromChild = proxy.microApp.getData('subapp02')
    console.log('mounted dataFromChild', dataFromChild)
}

// 监听子应用发送数据
function dataChange(e: any){
    console.log('dataChange', e.detail.data)
}

// 绑定监听函数
proxy.microApp.addDataListener('subapp02', (data: any)=>{
    console.log('mainApp addDataListener: ', data)
})

// 全局数据通信
proxy.microApp.setGlobalData({ people: '张三' }, (data: any)=>{
    console.log('全局数据发送完毕', data)
})

</script>