<template>
  <div style="background: #09b3af !important;height: 4rem;display: flex;justify-content: space-between;padding: 0 2rem;align-items: center;">
  <!-- <logo></logo> -->
  <router-link to="/board" style="margin: 10px;">
    <div class="ns-kr go-back" style="font-size: 20px;font-weight:bold;color:white;position: relative;
    z-index: 2;">
      <i class="fas fa-chevron-left"></i>&nbsp;내 노트
    </div>
  </router-link>
    <md-button class="merienda" style="background-color:white; border-color: white !important;padding: 0px;margin: 6px 10px;border-radius: 0.2rem;">
      <div class="ns-kr" style="padding: 10px;font-size: 16px;font-weight:bold;color: black;" @click="$emit('saveNote')"><i class="fas fa-save"></i>&nbsp;저장</div>
    </md-button>
  </div>
</template>
<script>
// import { CollapseTransition } from 'vue2-transitions';
import BaseNav from '../components/Navbar/BaseNav';
import Logo from '../assets/Logo'
// import { BaseNav, Modal } from '@/components';

export default {
  components: {
    // CollapseTransition,
    BaseNav,
    Logo,
    // Modal
  },
};
</script>
<style scoped>
a {
    text-decoration: none !important;
}
.nav-link{
    transition: all .4s ease 0s;
}
.nav-link:not(.btn):hover {
    background-color: hsla(0,0%,100%,.3);
    border-radius: .2rem;
    color: #fff;
    transition: all .4s ease 0s;
}
.nav-item{
    cursor: pointer;
}
.go-back{
    transition: all .4s ease 0s;
}
.go-back:hover{
    color: black !important;
    cursor: pointer;
}
</style>