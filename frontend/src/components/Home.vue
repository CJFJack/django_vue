<template>
  <div id="app">
    <v-header></v-header>
    <h2>这是一个首页组件--{{msg}}</h2>
    <button @click="getMsg()">执行getMsg方法</button>
  </div>
</template>

<script>
  import Header from './Header.vue'
  export default {
    name: "Home",
    data() {
      return {
        msg: '我是一个首页组件'
      }
    },
    methods: {
      getMsg() {
        alert(this.msg)
      }
    },
    // 注册组件
    components: {
      'v-header': Header
    }
  }
</script>

<style scoped>
h2 {
  color:red;
}
</style>
