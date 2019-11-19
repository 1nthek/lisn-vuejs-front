import Vue from 'vue'
import Router from 'vue-router'
import List from '../src/views/List'
import Note from '../src/views/Note'
import NoteEdit from '../src/views/NoteEdit'
import NotFound from '../src/views/PageNotFound'
import Home from '../src/views/Home'
import Profile from '../src/components/Profile'
import Contact from '../src/components/Contact'

import Service from '../src/views/Service'
import Privacy from '../src/views/Privacy'

import AllNotes from '../src/components/List/allNotes'
import SharedNotes from '../src/components/List/sharedNotes'
import Directory from '../src/components/List/Directory'
import Trash from '../src/components/List/Trash'

import { store } from './store/store'
Vue.use(Router)

const requireAuth = (to, from, next) => {
  store.getters.isAuth ? next() : next('/home')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/policies/service',
      component: Service
    },
    {
      path: '/policies/privacy',
      component: Privacy
    },
    {
      path: '/',
      component: List,
      redirect: '/allNotes',
      beforeEnter: requireAuth,
      children: [
        {
          path: 'allNotes',
          component: AllNotes,
          name: 'allNotes',
        },
        {
          path: 'sharedNotes',
          component: SharedNotes,
          name: 'sharedNotes',
        },
        {
          path: 'trash',
          component: Trash,
          name: 'trash',
        },
        {
          path: '/folder/:fid/:name',
          component: Directory,
          name: 'directory'
        },
        {
          path: '/profile',
          component: Profile,
          name: 'profile',
        },
        {
          path: '/contact',
          component: Contact,
          name: 'contact',
        },
      ]
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
      path: '*',
      component: NotFound
    },
  ]
})
