<template>
  <div id="news">
    <v-header></v-header>
    <h2>{{msg}}</h2>
    <ul>
      <li v-for="item in news_list">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Header from './Header.vue'
  export default {
    name: "News",
    data() {
      return {
        msg: '我是一个新闻组件',
        news_list: [
          '111',
          '222',
          '333'
        ]
      }
    },
    components: {
      'v-header': Header
    }
  }
</script>

<style scoped>

</style>
