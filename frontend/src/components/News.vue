<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/content/' + item.aid">{{item.title}}</router-link>
      </li>
    </ul>
    <span>{{this.$store.state.count}}</span>
    <br>
    <el-button @click="CountReduce()">减少store中的state</el-button>
  </div>
</template>

<script>
  import store from '../vuex/store.js'

  export default {
    name: "News",
    data() {
      return {
        msg: '我是新闻组件',
        list: []
      }
    },
    store,
    methods: {
      getNews() {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
        this.$http.get(api).then((response) => {
          console.log(response);
          this.list = response.data.result
          this.$store.commit('UpdateNewsList', this.list)
        }, (err) => {
          console.log(err)
        })
      },
      CountReduce() {
        this.$store.commit('CountReduce')
      }
    },
    mounted() {
      var NewsList = this.$store.state.news_list;
      if (NewsList.length > 0) {
        this.list = NewsList
      }
      else {
        this.getNews()
      }
    }
  }
</script>

<style scoped>

</style>
