// import BaseInput from '../components/Inputs/BaseInput.vue';
// import BaseDropdown from '../components/BaseDropdown'
// import BaseButton from '../components/BaseButton'
import SideBar from '../components/SidebarPlugin/SideBar';
import SidebarItem from '../components/SidebarPlugin/SidebarItem';
import SidebarPlugin from '../components/SidebarPlugin/index.js';



import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ko';
import 'element-ui/lib/theme-chalk/index.css'

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
// import 'vue-material/dist/theme/default.css'

import Transitions from 'vue2-transitions'

import '../assets/css/nucleo/css/nucleo.css';
import '../assets/sass/argon.scss';

export default {
  install (Vue) {
    // Vue.component(BaseInput.name, BaseInput);
    // Vue.component(BaseDropdown.name, BaseDropdown)
    // Vue.component(BaseButton.name, BaseButton)
    Vue.use(ElementUI, { locale })
    Vue.use(VueMaterial);
    Vue.use(Transitions);
    Vue.use(SideBar);
    Vue.use(SidebarItem);
  }
}
