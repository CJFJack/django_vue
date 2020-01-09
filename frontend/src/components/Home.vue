<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <el-button type="primary" @click="getNews()" size="mini">跳转到新闻页</el-button>
    <br>
    <br>
    <el-button type="warning" icon="el-icon-delete" size="mini"></el-button>
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/pcontent?id=' + key">{{key}}----{{item}}</router-link>
      </li>
    </ul>
    <br>
    <span>{{this.$store.state.count}} -- {{this.$store.getters.ComputerCount}}</span>
    <br>
    <el-button @click="CountAdd()">增加state的count属性</el-button>
    <br>
    <el-button @click="incMutationsCount()">利用Action增加state的count属性</el-button>
    <br>
    <br>
    <v-subjects></v-subjects>
  </div>
</template>

<script>
  // 在组件中引入
  import store from '../vuex/store.js'
  import Subjects from './subjects.vue'
  export default {
    name: "Home",
    data() {
      return {
        msg: '我是首页组件',
        list: ['商品1', '商品2', '商品3'],
      }
    },
    // 注册
    store,
    methods: {
      CountAdd() {
        this.$store.commit('CountAdd')
      },
      incMutationsCount() {
        this.$store.dispatch('incMutationsCount')
      }
    },
    components: {
      'v-subjects': Subjects
    }
  }
</script>

<style scoped>

</style>
