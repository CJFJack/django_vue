import Vue from 'vue'
// 引用vue-router
import VueRouter from 'vue-router'
// 引用组件
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import User from '../components/User.vue'
import UserAdd from '../components/user/UserAdd.vue'
import UserList from '../components/user/UserList.vue'
import Content from '../components/Content.vue'
import Pcontent from '../components/Pcontent.vue'

// 使用VueRouter
Vue.use(VueRouter);

// 定义路由
const routes = [
  {path: '/home', component: Home},
  {path: '/news', component: News, name: 'news'},
  {
    path: '/user',
    component: User,
    children: [
      {path: 'useradd', component: UserAdd},
      {path: 'userlist', component: UserList}
    ]
  },
  {path: '/content/:aid', component: Content}, /*动态路由*/
  {path: '/pcontent', component: Pcontent},
  {path: '*', redirect: '/home'}   /*默认跳转路由，相当于重定向*/
];

// 实例化路由
const router = new VueRouter({
  mode: 'history',
  routes  // （缩写）相当于 routes: routes
});

export default router
