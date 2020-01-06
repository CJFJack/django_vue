import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// 引用vue-router
import VueRouter from 'vue-router'

Vue.use(VueResource);
// 使用VueRouter
Vue.use(VueRouter);

// 引用组件
import Home from './components/Home.vue'
import News from './components/News.vue'

// 定义路由
const routes = [
  {path: '/home', component: Home},
  {path: '/news', component: News},
  {path: '*', redirect: '/home'}   /*默认跳转路由*/
];

// 实例化路由
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

new Vue({
  el: '#app',
  // 挂载路由
  router,
  render: h => h(App)
});
