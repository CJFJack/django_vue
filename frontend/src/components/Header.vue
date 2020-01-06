<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <button @click="getParent()">获取父组件的数据和方法</button>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        msg: '我是头部组件',
      }
    },
    methods: {
      run() {
        alert('我是子组件的run方法')
      },
      getParent() {
        alert(this.$parent.msg);
        this.$parent.run()
      }
    },
  }
</script>

<style scoped>

</style>
