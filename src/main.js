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
import editor from 'yimo-vue-editor'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify)
Vue.use(globalComponents)
Vue.use(DashboardPlugin);
Vue.use(editor, {
  name: 'yimoeditor',//Custom name
  config: {
    printLog: false,
    lang: {
      bold: '굵게',
      underline: 'Underline',
      italic: 'Italic',
      forecolor: 'Color',
      bgcolor: 'Backcolor',
      strikethrough: 'Strikethrough',
      eraser: 'Eraser',
      source: 'Codeview',
      quote: 'Quote',
      fontfamily: 'Font family',
      fontsize: 'Font size',
      head: 'Head',
      orderlist: 'Ordered list',
      unorderlist: 'Unordered list',
      alignleft: 'Align left',
      aligncenter: 'Align center',
      alignright: 'Align right',
      link: 'Insert link',
      linkTarget: 'Open mode',
      text: 'Text',
      submit: 'Submit',
      cancel: 'Cancel',
      unlink: 'Unlink',
      table: 'Table',
      emotion: 'Emotions',
      img: 'Image',
      uploadImg: 'Upload',
      linkImg: 'Link',
      video: 'Video',
      width: 'width',
      height: 'height',
      location: 'Location',
      loading: 'Loading',
      searchlocation: 'search',
      dynamicMap: 'Dynamic',
      clearLocation: 'Clear',
      langDynamicOneLocation: 'Only one location in dynamic map',
      insertcode: 'Insert Code',
      undo: '실행 취소',
      redo: 'Redo',
      fullscreen: '전체 화면',
      openLink: 'open link'
    },
    menus: [
      'bold',
      'italic',
      'strikethrough',
      '|',
      'fontfamily',
      'head',
      '|',
      'quote',
      'unorderlist',
      'orderlist',
      'alignleft',
      'aligncenter',
      '|',
      'table',
      'insertcode',
      '|',
      'undo',
      'redo',
      'fullscreen'
    ],
    familys: [
      'Noto Sans KR',
      'Arial', 
    ],
  },//wagnEditor config
  uploadHandler: (type, resTxt) => {//Upload processing hook
    if (type === 'success') {
      var res = JSON.parse(resTxt)//Do not process the default look at the return value bit image path
      if (res.status !== 1) {
        return null
      }
      return res.data
    } else if (type === 'error') {
      //todo toast
    } else if (type === 'timeout') {
      //todo toast
    }
    return 'upload failed__'
  }
})
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
