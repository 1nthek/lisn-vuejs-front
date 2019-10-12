import Vue from 'vue'
import Router from 'vue-router'
import List from '../src/views/List'
import Note from '../src/views/Note'
import NoteEdit from '../src/views/NoteEdit'
import NotFound from '../src/views/PageNotFound'
import Home from '../src/views/Home'
import Profile from '../src/views/Profile'
import { store } from './store/store'
Vue.use(Router)

const requireAuth = (to, from, next) => {
  store.getters.isAuth ? next() : next('/')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/list',
      component: List,
      beforeEnter: requireAuth
    },
    {
      path: '/note/:nid',
      component: Note,
      beforeEnter: requireAuth
    },
    {
      path: '/noteEdit/:nid',
      component: NoteEdit,
      beforeEnter: requireAuth
    },
    {
      path: '/profile',
      component: Profile,
      beforeEnter: requireAuth
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
