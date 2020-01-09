<template>
  <div id="app">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Pcontent",
    data() {
      return {
        msg: '我是商品详情页'
      }
    },
    mounted() {
      console.log(this.$route.query)   //使用get方法获取url传值
    }
  }
</script>

<style scoped>

</style>
