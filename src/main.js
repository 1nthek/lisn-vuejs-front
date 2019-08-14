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
    bar: {
      showDelay: 500,
      onlyShowBarOnScroll: true,
      keepShow: true,
      background: '#e0e4e1',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: 0,
      size: '4px',
      disable: false
    }
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
