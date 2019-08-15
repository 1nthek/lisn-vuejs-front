// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import vuescroll from 'vuescroll'
import globalComponents from '../src/plugins/globalComponents'
import router from './router.js'
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App'
import { store } from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify)
Vue.use(globalComponents)
Vue.use(DashboardPlugin);
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      mode: 'native',
      sizeStrategy: 'percent',
      detectResize: true
    },
  },
  name: 'vuescroll' // customize component name, default -> vueScroll
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
