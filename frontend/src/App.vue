<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <button data-aid='123' @click="eventFn($event)" dataset="1">获取时间对象</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'hello world',
        list: []
      }
    },
    methods: {
      eventFn(e) {
        e.srcElement.style.background='red';
        alert(e.srcElement.dataset.aid);
      },
    }
  }
</script>

<style>
</style>
