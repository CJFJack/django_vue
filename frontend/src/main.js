import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
// import './assets/css/basic.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

// 引入路由模块
import router from './router/router.js'

new Vue({
  el: '#app',
  // 挂载路由
  router,
  render: h => h(App)
});
