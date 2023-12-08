<template>
  <div>
    <h3>这是Vue2项目subapp02的页面</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    // 直接获取主应用发送的数据
    // const data1 = window.microApp.getData()
    // console.log('getData: ', data1)

    // 监听函数
    function dataListener(data){
      console.log('addDataListener: ', data)
      return '子应用收到数据了'
    }

    // 绑定监听函数
    window.microApp.addDataListener(dataListener, true)

    // 子应用向主应用发送数据
    window.microApp.dispatch({name: 'jack'}, (res)=>{
      console.log('数据发送成功', res)
    })

    // 获取全局数据
    const globalData = window.microApp.getGlobalData()
    console.log('globalData', globalData)
  },
}
</script>

<style>

</style>
