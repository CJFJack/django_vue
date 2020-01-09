<template>
  <div id="app">
    <h2>{{news.title}}</h2>
    <div v-html="news.content"></div>
  </div>
</template>

<script>
  export default {
    name: "Content",
    data() {
      return {
        msg: '我是详情页',
        news: [],
      }
    },
    methods: {
      getNewsDetail(aid) {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + aid
        this.$http.get(api).then((response) => {
          console.log(response)
          this.news = response.body.result[0]
        }, (err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      console.log(this.$route.params);   //获取动态路由传值
      var aid = this.$route.params.aid;
      this.getNewsDetail(aid)
    }
  }
</script>

<style scoped>

</style>
