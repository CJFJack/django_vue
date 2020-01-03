<template>
  <div id="app">
    <v-home></v-home>
    <h1>{{msg}}</h1>
    <v-news></v-news>

  </div>
</template>

<script>
  // 引用组件
  import Home from './components/Home.vue'
  import News from './components/News.vue'

  export default {
    name: 'app',
    data() {
      return {
        msg: '这是一个根组件'
      }
    },
    // 注册组件
    components: {
      'v-home': Home,
      'v-news': News,
    }
  }
</script>

<style>
</style>
