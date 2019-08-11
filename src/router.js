import Vue from 'vue'
import Router from 'vue-router'
import Board from '../src/views/Board.vue'
import WriteView from '../src/views/Write.vue'
import NotFound from '../src/views/PageNotFound'
import Home from '../src/views/Home'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/board',
      // name: 'HomeView',
      component: Board
    },
    {
      path: '/write',
      // name: 'WriteView',
      component: WriteView
    },
    {
      path: '*',
      // name: 'WriteView',
      component: NotFound
    }
  ]
})
