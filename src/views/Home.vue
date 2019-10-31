<template>
<div>
  <div v-show="isLoading" class="home-isLoading">
    <div class="ani-isLoading">
      <logo style="fill:black"></logo>
    </div>
    <div class="ns-kr ani-loader2" style="color: black;font-size: 20px;font-weight: 400;padding-top: 30px;">불러오는중...</div>
  </div>
  <div v-show="!isLoading" @click="closebar()" ref="contents">
      <div class="header" id="home-header">
          <div class="home-nav">
              <logo style="fill:white"></logo>
              <div style="display: flex;align-items: center;justify-content: center;">
                <div class="menu-bar" @click.stop="openbar()">
                    <i class="fas fa-bars"></i>
                </div>
              </div>
              <ul class="nav__right ns-kr" :class="{'active': this.navOpen }">
                  <li>
                    <div id="customBtn0">
                      <span class="nav__link nav__link--cta">로그인</span>
                    </div>
                  </li>
              </ul>
          </div>
      </div>
      <transition appear appear-active-class="fade-enter-active">
        <div class="lisn-wallpaper">
          <div class="lisn-background" style="background-image: url(https://src-lisn.s3.ap-northeast-2.amazonaws.com/wallpaper_1.jpg); background-size: cover;"></div>
       </div>
       
      </transition>
        <div class="home-cont-1">
          <div style="max-width: 1200px;margin: 0 auto;padding: 26px 25px;display: flex;justify-content: flex-end;">
            <!-- <div class="ani-slide-in"> -->
            <div>
              <div class="wave__h ns-kr " style="color: white;font-size: 36px;font-weight: bold;padding-bottom: 30px;"> 대화를 쉽고 빠르게 정리하세요 </div>
              <div style="display: flex;justify-content: flex-end;">
                <div id="customBtn1" class="btn-user btn btn-neutral btn-icon" style="cursor:pointer;background: #273559;border: none;display: flex;align-items: center;justify-content: center;">
                    <div class="btn-inner--icon">
                      <img src="../img/icons/common/google.svg">
                    </div>
                <div class="btn-inner--text ns-kr" @done="onSignIn" @error="onSignInError" style="font-size: 18px;color: white;">Google 계정으로 사용</div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="lisn-intro">
          <div class="lisn-background" style="background-image: url(https://src-lisn.s3.ap-northeast-2.amazonaws.com/wallpaper_2.jpg); background-size: cover;">
          <div class="lisn-introtext" style="color: black; font-family: 'Raleway',sans-serif; font-size: 62px; font-weight: 800; line-height: 72px; text-align: center; text-transform: uppercase;">How To Use LISN...</div>
          <div align="center" class="lisn-introvideo">
            <iframe id="lisn-video" src="https://www.youtube.com/embed/UAnnAvKzLCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          </div>
        </div>
        <div class="lisn-function">

        </div>
  <!-- <app-footer></app-footer>  -->
</div>
</div>

</template>

<script>
import AppFooter from '../layout/AppFooter'
import Logo from '../assets/Logo'
import axios from 'axios'
import api from '../api/api'
import { mapState, mapMutations } from 'vuex'


export default {
  components: {
    AppFooter,
    Logo,
  },
  data() {
    return {
      // scrolled: false,
      navOpen: false,
      isLoading: true,
    }
  },
  computed: {
    ...mapState([
      'user_id',
      'token',
    ]),
  },
  mounted(){
    let self = this;
    gapi.load('auth2', function () {
      gapi.auth2.init().then(function () {
        var auth2 = gapi.auth2.getAuthInstance();
        if (auth2.isSignedIn.get() && self.user_id && self.token && localStorage.token && localStorage.user_id) {
            self.$router.replace('/list');
        }
        else{
          // gapi.load('auth2', function(){
            // var auth2 = gapi.auth2.init({
            //   client_id: '935445294329-t38oc4vmt9l5sokr34h8ueap63dfq4hi.apps.googleusercontent.com',
            // });
            auth2.attachClickHandler(document.getElementById('customBtn0'), {},
              function(googleUser) {
                self.onSignIn(googleUser);
              }, function(error) {}
            );
            auth2.attachClickHandler(document.getElementById('customBtn1'), {},
              function(googleUser) {
                self.onSignIn(googleUser);
              }, function(error) {}
            );
          // });
          self.isLoading = false;
        }
      });
    });
    // window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    // window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
  ...mapMutations([
    'setUserId',
    'setAccessToken',
  ]),
  openbar(){
    this.navOpen = true;
  },
  closebar(){
    if (window.innerWidth > 1000) {
      return;
    }
    this.navOpen = false;
    let docClasses = document.body.classList
    // if (value) {
    //   docClasses.add('g-sidenav-pinned')
    //   docClasses.add('g-sidenav-show')
    //   docClasses.remove('g-sidenav-hidden')
    // } else {
    //   docClasses.add('g-sidenav-hidden')
    //   docClasses.remove('g-sidenav-pinned')
    //   docClasses.remove('g-sidenav-show')
    // }
  },
  handleScroll () {
    this.scrolled = window.scrollY > 80;
  },
  onSignInError (error) {
  },
  onSignIn(googleUser){
    let self = this;
    var formData = new FormData();
    formData.append('google_token', googleUser.getAuthResponse().id_token);
    axios.post( this.$store.state.domain + '/token/google', formData)
      .then((res) => {
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('user_id', res.data.user_id);
        self.setAccessToken();
        self.setUserId();
        self.$router.push('/list');
      })
      .catch((ex) => {
      });
    }
  }
}
</script>
<style scoped>
.ani-isLoading{
    animation: slide 2s linear infinite;
    animation-direction: alternate;
}
.ani-loader2{
    animation: go 2s linear;
    animation-direction: alternate;
}
.home-isLoading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
@keyframes slide {
  0% {
    transform: translateY(0);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-60px);
    opacity: 1;

  }
}


/* @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
} */

.lisn-intro{
  /*background: rgb(239, 240, 242);*/
  /* border-radius: 10px; */
  width: 100vw;
    /* height: 100vh; */
  height: 110vh;
  display: block;
  position: relative;
  overflow: hidden;
}

.lisn-introvideo{
  width: 100vw;
    /* height: 100vh; */
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
}

.lisn-introtext{
  position: relative;
  top:15%;
  z-index: 150;
}

#lisn-video{
  position: relative;
  width: 60%;
  height: 70%;
  top: 20%;
}

#lisn-videotext{
  position: relative;
  width: 60%;
  height: 70%;
  top: 20%;
}

.lisn-function{
  background: rgb(239, 240, 242);
  /* border-radius: 10px; */
  width: 100vw;
    /* height: 100vh; */
  height: 100vh;
  display: block;
  position: relative;
  overflow: hidden;
}

.home-cont-1{
  background: #00000070;
  /* border-radius: 10px; */
  box-shadow: 0 0 12px 0 rgba(0,0,0,0.1), 0 10px 30px 0 rgba(0,0,0,0.2);
  position: absolute;
  top: 48%;
  right: 0;
  left: 0;
  z-index: 30;
}

.ani-slide-in {
  animation-duration: 2s;
  animation-delay: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-name: slideInFromLeft;
  padding-right: 400px;
  animation-fill-mode: forwards;
  opacity: 0.3;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(0px);
    opacity: 0;

  }
  100% {
    transform: translateX(400px);
    opacity: 1;
  }
}

.fade-enter-active {
  animation: go 0s;
}
@keyframes go {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
.lisn-wallpaper {
    /* background: #00000040; */
    width: 100vw;
    /* height: 100vh; */
    height: 100vh;
    display: block;
    position: relative;
    overflow: hidden;
    /* opacity: 0; */
    /* transition: opacity .6s; */
}
.lisn-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -2;
    background-repeat: no-repeat;
}
#home-header {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
}
#home-header.scrolled {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.2);
}
#home-header.scrolled>nav {
  padding: 0 25px;
}
#customBtn span:hover{
  color: #09b3af;
  text-decoration: none;
}
#customBtn span{
  color: #09b3af;
  text-decoration: none;
}

.home-nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
}

.nav__right {
    background-color: #a00000;
    height: 100%;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(260px);
    transition-duration: 0.4s;
    transition-property: transform;
    width: 260px;
    z-index: 10;
    list-style: none;
    margin: 0;
    box-sizing: border-box;
    padding: 30px 10px
}
.nav__right.active{
    transform: translateX(0px);

}

@media (min-width: 1000px) {
    .nav__right {
        transform:translateX(0);
        padding: 0;
        height: auto;
        background-color: transparent;
        margin: 10px 0;
        width: auto;
        display: flex;
        position: relative;
        overflow-y: visible
    }
    .menu-bar{
        display: none !important;
    }
}
.menu-bar{
    color: white;
    font-size: 20px;
    padding: 6px;
    cursor: pointer;
}

.nav__link {
    text-transform: uppercase;
    padding: 10px 12px 10px 12px;
    border-radius: 3px;
    transition: all 0.2s;
    text-decoration: none;
    margin: 0 6px;
    letter-spacing: 0.1em;
    display: block;
    font-size: 14px;
    color: white;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
}

.nav__link:hover {
    color: #FFF;
    background: rgba(255,255,255,0.2)
}

@media (min-width: 1000px) {
    .nav__link {
        display:inline-block
    }
}

.nav__middle {
    flex-grow: 1
}
.nav__link--cta {
    padding: 10px 16px 10px 16px;
    margin: 10px 6px 0 6px;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: white;
    background: #09b3af;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08)
}

@media (min-width: 1000px) {
    .nav__link--cta {
        margin:0 0 0 10px;
        background: #1b253e
    }

    .nav__link--cta:hover {
        background: #1b253e;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
    }
}
</style>
