<template>
    <div style="background:white;height: inherit;">
      <side-bar style="border: none;">
        <template slot="links">
        <hr style="padding: 0 38px;margin: 0px 30px 6px 30px !important;">
          <sidebar-item :link="{ name: '내 노트', path: '/allNotes', icon: 'ni ni-books' }"></sidebar-item>
          <sidebar-item :link="{ name: '공유 받은 노트', path: '/sharedNotes', icon: 'ni ni-send' }"></sidebar-item>

          <sidebar-item :link="{name: '폴더', icon: 'ni ni-folder-17'}" :menu='true'>
            <template>
              <div v-for="dir in directories" :key="dir.directory_id">
                <sidebar-item :link="{ name: dir.name, path: '/folder/'+ dir.directory_id + '/' + dir.name }" :directory_id="dir.directory_id" :directory_name="dir.name" :directory_color="dir.color"/>
              </div>
            </template>
          </sidebar-item>
          <hr style="padding: 0 38px;margin: 14px 30px 6px 30px !important;">
          <sidebar-item :link="{ name: '휴지통', path: '/trash', icon: 'fas fa-trash' }"></sidebar-item>
        </template>
    </side-bar>
    <list-navbar ref="navbar" :type="$route.meta.navbarType"></list-navbar>
    <div class="main-content">
      <div class="lisn-home-comp" @click="$sidebar.displaySidebar(false)">
        <div class="notes-container">
            <vuescroll>
              <router-view></router-view>
           </vuescroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListNavbar from '../layout/ListNavbar'
import { mapState, mapMutations, mapActions } from 'vuex'
import VueAmplitude from 'vue-amplitude'
import Vue from 'vue'

Vue.use(VueAmplitude, { apiKey: 'f1f895bc97a1dfc905ea1bbc1f4af3f7' });

export default {
  components: {
    ListNavbar,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'user_id',
      'directories',
      'token',
    ]),
  },
  created() {
    let self = this;
    if(!self.user_id || !self.token){
      delete localStorage.user_id;
      delete localStorage.token;
      self.$router.replace('/home');
    }
    else{
      this.FETCH_DIRECTORIES();
      this.$amplitude.setUserId(self.user_id);
      this.$amplitude.logEvent('User_Login');
    }
  },
  methods: {
    ...mapActions([
      'FETCH_DIRECTORIES',
    ]),
  },
}
</script>

<style>
#folder-move, #trash{
  transition: all 100ms ease-in 0s !important;
}
#noteList:hover #folder-move{
  background-color: #d0da96;
}
#noteList:hover #trash{
  background-color: #ff8989;
}
#folder-move:hover{
  background-color: #c1ca8b !important;
}
#trash:hover{
  background-color: #ec7e7e !important;
}

.card-stats .card-body {
    padding: 14px 20px !important; 
}
.swal2-content select {
    border-style: solid !important;
}
#noteList:hover .card-icon-cont{
  background: white;
  color: #000;
  transition: all 300ms ease-in 0s;
}
.card-icon-cont{
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  border-radius: 100%;
  background: #efefef;
  height: 32px;
  width: 32px;
  transition: all 300ms ease-in 0s;
}
#noteList:hover .lisn-badge{
    background-color: #d6d6d6;
}
.lisn-badge{
    background-color: #ececec;
    color: #383838;
    font-weight: bold;
    font-size: 13px;
    padding: 1px 8px;
    border-radius: 6px;
    margin-left: 12px;
    transition: all 300ms ease-in 0s;
}
@media ( max-width: 1599.98px ) {
  .card-list-title, .card-list-summary{
    width: 220px !important;
  }
}
@media ( max-width: 1199.98px ) {
  .card-list-title, .card-list-summary{
    width: 240px !important;
  }
}
@media (max-width: 991.98px){
  .card-list-title, .card-list-summary{
      width: 20vw !important;
  }
}
@media ( max-width: 767px ) {
  .card-list-title, .card-list-summary{
    width: 40vw !important;
  }
}
.card-list-summary{
  font-weight: bold;
  width: 450px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #617386;
  height: 32px;
  margin-top: 2px;
}
.card-list-title{
  font-weight: bold;
  width: 410px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
}
.lisn-flag{
  border-radius: 2px;
  background-color: transparent !important; 
  padding: 0px; 
  margin-top: -15px;
  margin-right: 12px;
  height: 44px;
  width: 0px;
  border-width: 0px 8px 8px;
  border-style: solid;
  transition: all 300ms ease-in 0.3s;
}
.color-9{
  border-color: #aaaaaa #aaaaaa transparent;
  background-color: #aaaaaa;
}
.color-0{
  border-color: #FF0033 #FF0033 transparent;
  background-color: #FF0033;
}
.color-1{
  border-color: #FF7700 #FF7700 transparent;
  background-color: #FF7700 ;
}
.color-2{
  border-color: #F0CA36 #F0CA36 transparent;
  background-color: #F0CA36;
}
.color-3{
  border-color: #AADD22 #AADD22 transparent;
  background-color: #AADD22;
}
.color-4{
  border-color: #0088FF #0088FF transparent;
  background-color: #0088FF;
}
.color-5{
  border-color: #9911AA #9911AA transparent;
  background-color: #9911AA;
}
@media (min-width: 992px) { 
  .notes-container{
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }
}

@media (min-width: 1200px) { 
  .notes-container{
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }
}

.list-isLoading,
.list-isLoading:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.list-isLoading {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid #e1207920;
  border-right: 1.1em solid #e1207920;
  border-bottom: 1.1em solid #e1207920;
  border-left: 1.1em solid #e12079;
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}
.cont-isLoading {
    display: flex;
    align-items: center;
    justify-content: center;
}

@-webkit-keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

div.ani-card{
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-name: listSlide;
  animation-fill-mode: forwards;
  opacity: 0;

}
@keyframes listSlide {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

div{
  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.nav-link-text{
  font-weight: bold;
  font-size: 15px;
}
a {
    text-decoration: none !important;
}

#noteList:hover{
    background: navajowhite;
    background: #efefef;
    transform:translateY(-1px);
    box-shadow: rgba(15, 15, 15, 0.12) 0px 4px 8px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
    cursor: pointer;
}
#noteList{
    background: #fafafa;
    color: black;
    font-size: 22px;
    transition: all 300ms ease-in 0s;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
    border-radius: 3px;
    background: white;
}
#noteList .note-date{
    color: #525f7f;
}

@media (min-width: 1200px){
  .col-xl-3 {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 50%;
      max-width: 50%;
  }
}
.card-header:first-child {
    border-radius: 0.8rem;
}
.card-footer:last-child {
    border-radius: 0.8rem;
}
.card-footer:last-child {
    padding: 0;
}
.card {
    border-radius: 0.8rem;
    border: none;
    box-shadow: none;
}
.card-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
}
.create-btn{
    background-color: #f1404b !important;
    border-color: #f1404b !important;
    color: #fff !important;
    border-radius: 0.2rem;
    outline: 0;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
}
.create-btn-cont{
  font-size: 16px;
  margin: 8px 14px;
  font-weight: bold;
  width: 74px;
}
.lisn-navbar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    margin-left: 16rem;
    z-index: 10;
    box-shadow: 0 0.2rem 0.5rem -0.3rem rgba(0,0,0,.2);
    background: linear-gradient(to left,#281483,#83157b 60%,#bc158a);
}
@media (min-width: 1200px){
  .main-content {
    margin-left: 250px !important;
  }
  .sidenav{
    margin-left: 0px !important;
  }
}
.sidenav{
    margin-left: -250px;
}
.g-sidenav-open .sidenav{
    margin-left: 0px !important;
}
.lisn-home-comp{
    /* padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem; */
    background: white;
}
.lisn-home-comp-container{
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content:space-between;
    height: 100vh;
    margin: -6.5rem 0;
    padding: 6.5rem 0 0.9rem 0;
}
.notes-container{
    word-break: break-word;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 100vh;
    width: 100%;
    margin: -5rem 0;
    padding: 8rem 0 0rem 0;
    background: white;
    position: absolute;
}
.row {
    margin-right: 0px;
    margin-left: -15px;
}
</style>
