import Vue from 'vue'
import Router from 'vue-router'
import List from '../src/views/List'
import Note from '../src/views/Note'
import NotFound from '../src/views/PageNotFound'
import Home from '../src/views/Home'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/'
    // },
    {
      path: '/',
      component: Home
    },
    {
      path: '/list',
      // name: 'HomeView',
      component: List
    },
    {
      path: '/note',
      // name: 'WriteView',
      component: Note
    },
    {
      path: '*',
      // name: 'WriteView',
      component: NotFound
    }
  ]
})
