<template>
<div>
  <link href="https://fonts.googleapis.com/css?family=Jua|Staatliches&display=swap&subset=korean" rel="stylesheet">
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
              <div style="display: flex;align-items: center;justify-content: center; margin: 0 10px 0 auto;">
                <div class="menu-bar" @click.stop="openbar()">
                    <i class="fas fa-bars"></i>
                </div>
              </div>
              <Drawer @close="about_toggle" align="right" :maskClosable="true">
                <div v-if="open01" class="about_detail">
                  <div>
                    <div class="about-intro">
                      <h1 class="about-intro_title ns-kr">LISN 서비스 소개</h1>
                      <div class="about-sample">
                        <img src="https://src-lisn.s3.ap-northeast-2.amazonaws.com/about_sample.png">
                      </div>
                      <p class="about-intro_subtitle ns-kr">
                        LISN은 언제 어디서나 실시간으로 음성을 텍스트로 변환하고 정리 할 수 있는 서비스입니다. <br>나만의 음성 노트를 만들어 정리하고 공유해보세요.  
                      </p>
                    </div>
                    <div class="introduction-section">
                      <h1 class="about-intro_title ns-kr">LISN 기능</h1>
                      <div class="introduction-section_function">
                        <div class="introduction-section_container">
                          <img class="function_image" src="https://src-lisn.s3.ap-northeast-2.amazonaws.com/func_01.png">
                          <h1 class="function_title ns-kr">녹음</h1>
                        </div>
                        <div class="introduction-section_container">
                          <img class="function_image" src="https://src-lisn.s3.ap-northeast-2.amazonaws.com/func_02.png">
                          <h1 class="function_title ns-kr">실시간 변환</h1>
                        </div>
                        <div class="introduction-section_container">
                          <img class="function_image" src="https://src-lisn.s3.ap-northeast-2.amazonaws.com/func_03.png">
                          <h1 class="function_title ns-kr">노트 관리</h1>
                        </div>
                        <div class="introduction-section_container">
                          <img class="function_image" src="https://src-lisn.s3.ap-northeast-2.amazonaws.com/func_04.png">
                          <h1 class="function_title ns-kr">공유</h1>
                        </div>
                      </div>
                    </div>
                    <div class="about_footer">
                      <div class="about_footer_container">
                        <div class="logo_section">
                          <logo style="fill:black"></logo>
                        </div>
                        <div class="contact_section">
                          <div class="help_section">
                            <span class="help_email_title">CONTACT US</span>
                            <span class="help_email_title">lisnhelp@gmail.com</span>
                          </div>
                          <div class="help_section">
                            <span class="help_email_title">TEAM</span>
                            <span class="help_email_title">ListenCarefully</span>
                          </div>
                          <div class="help_section">
                            <span class="help_email_title">SUPPORT</span>
                            <span class="help_email_title">SW Maestro</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    
                  </div>
                </div>
              </Drawer>
              <ul class="nav__right ns-kr" :class="{'active': this.navOpen }">
                  <li> 
                    <div @click="about_toggle">
                      <span class="nav__link nav__link--cta" style="background:blue">About</span>
                    </div>
                  </li>
                  <li>
                    <div id="customBtn0">
                      <span class="nav__link nav__link--cta" style="background:blue">Login</span>
                    </div>
                  </li>
              </ul>
          </div>
      </div>
      
      <div class="lisn-wallpaper">
        <div class="lisn-background">
          <video autoplay loop muted id="BackgroundVideo"><source :src="selectVideo" type="video/mp4"></video>
        </div>
      
       
      
        <div class="home-cont-1">
          <div style="margin: 0 auto;padding: 26px 25px;display: flex;justify-content: center;">
            <!-- <div class="ani-slide-in"> -->
            <div>
              <div class="home_title ns-kr"> AI Voice Note </div>
              <div class="home_subtitle ns-kr"> 손쉽게 음성을 녹음하고 나만의 노트를 만들어보세요.</div>
              <div style="display: flex;justify-content: center;padding-top:50px;">
                <div id="customBtn1" class="btn-user btn btn-neutral btn-icon" style="cursor:pointer;background: blue;border: none;display: flex;align-items: center;justify-content: center;">
                    
                <div class="btn-inner--text ns-kr" @done="onSignIn" @error="onSignInError" style="font-size: 18px;color: white;">지금 시작하기</div>
              </div>
            </div>
            </div>
          </div>
        </div>
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
import Drawer from "vue-simple-drawer"
import { async } from 'q'


export default {
  components: {
    AppFooter,
    Logo,
    Drawer,
  },
  data() {
    return {
      // scrolled: false,
      navOpen: false,
      isLoading: true,
      videos: [
        'https://src-lisn.s3.ap-northeast-2.amazonaws.com/video02.mp4',
        'https://src-lisn.s3.ap-northeast-2.amazonaws.com/video03.mp4',
        'https://src-lisn.s3.ap-northeast-2.amazonaws.com/video06.mp4',
        'https://src-lisn.s3.ap-northeast-2.amazonaws.com/video07.mp4',
      ],
      selectVideo: null,
      open01: false,
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
    setTimeout(() => {
      gapi.load('auth2', function () {
        gapi.auth2.init().then(function () {
          var auth2 = gapi.auth2.getAuthInstance();
          if (auth2.isSignedIn.get() && self.user_id && self.token && localStorage.token && localStorage.user_id) {
              self.$router.replace('/');
          }
          else{
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
            self.isLoading = false;
          }
        });
      })
    },1000);
    // window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    // window.removeEventListener('scroll', this.handleScroll);
  },
  created() {
    this.selectVideo = this.randomItem(this.videos)
  },
  methods: {
  ...mapMutations([
    'setUserId',
    'setAccessToken',
  ]),
  about_toggle() {
    this.open01 = !this.open01
  },
  randomItem (items) {
    return items[Math.floor(Math.random()*items.length)];
  },
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
      .then(async res => {
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('user_id', res.data.user_id);
        self.setAccessToken();
        self.setUserId();
        axios.defaults.headers.common['Authorization'] = `Bearer ` + res.data.access_token;
        self.$router.push('/');
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
#BackgroundVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height:100%;
  object-fit: cover;
}
.home_title {
  color: white; 
  font-size:10rem;
  -webkit-font-smoothing: antialiased; 
  text-align:center; 
  font-family: 'Gotham'; 
  font-weight:700;
}
.home_subtitle {
  color: white; 
  font-size:2.5rem; 
  text-align: center;
}
.about_detail {
  width:100%;
  height: 100%;
  margin-top: 30px;
  background: white;
}
.about-intro{
  margin: 0 auto 2.5em;
  max-width: calc( 1040px + 2.5em + 2.5em);
  padding-left: 2.5em;
  padding-right: 2.5em;
  padding-top: 3.4375em;
}
.about-intro_title {
  font-weight: 800;
  color: #17181a;
  font-size: 3.5em;
  letter-spacing: -1px;
  line-height: 1;
  margin: 0;
  text-align: center;
}
.about-intro_subtitle {
  font-weight: bold;
  color: #17181a;
  font-size: 1.375em;
  letter-spacing: -0.2px;
  line-height: 1.3636363636em;
  margin-left: auto;
  margin-right: auto;
  max-width: 540px;
  text-align: center;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.about-sample {
  position: relative;
  width:750px;
  display:block;
  margin: 20px auto;
  overflow:hidden;
}
.introduction-section {
  padding: 50px 20px 35px;
}
.introduction-section_function {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  text-align: center;
}
.introduction-section_container {
  position: relative;
  box-sizing: content-box;
  max-width: 300px;
  margin: 0px;
  flex: 1 1 100%;
  padding: 30px 20px 70px;
  
}
.function_image {
  max-width: 130px;
  max-height: 130px;
  object-fit: cover;
}
.function_title {
  font-size: 1.5em;
  line-height: 42px;
  letter-spacing: -0.38px;
  text-transform: uppercase;
  margin: 30px auto;
  text-align: center;
}
.about_footer {
  background-color: #e2e2e2;
  left: -5em;
  min-height: 1.125em;
  padding: 2.25em 0 2.625em;
  position: relative;
  text-align: center;
  width: calc(100% + 10em);
}
.about_footer_container {
  width: 80%;
  max-width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
   margin: 0px auto;
}
.logo_section {
  display: flex;
  -webkit-box-align: center;
}
.help_section {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-right: 70px;
}
.help_email_title {
  font-size: 20px;
  color: rgb(0, 0, 0);
  letter-spacing: -0.2px;
  line-height: 32px;
  text-align: left;
  font-weight: bold;
  font-family: 'Gotham';
}
.contact_section {
  flex-wrap: wrap;
  display: flex;
  flex: 0.7 1 0%;
}
/* @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
} */
.home-cont-1{
  
  position: absolute;
  top: 25%;
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
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;
    transition: opacity .3s ease .2s;
    background-size:cover;
}
.lisn-background {
    width: 100vw;
    height: 100vh;
    opacity: 1;
    pointer-events: auto;
    position: absolute;
    top: 0;
    left: 0;
    background-size:cover;
}
#home-header {
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    /* background: white; */
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
    
    margin: 0 auto;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
}

.nav__right {
    background-color: #e2e2e2;
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
@media ( max-width: 1000px ) {
  .home_title {
  color: white; 
  font-size:7.5rem;
  -webkit-font-smoothing: antialiased; 
  text-align:center; 
  font-family: 'Gotham'; 
  font-weight:700;
  }
  .home_subtitle {
  color: white; 
  font-size:2.0rem; 
  text-align: center;
  }
  .about-intro_title {
  font-weight: 800;
  color: #17181a;
  font-size: 2.5em;
  letter-spacing: -1px;
  line-height: 1;
  margin: 0;
  text-align: center;
  }
.about-intro_subtitle {
  font-weight: bold;
  color: #17181a;
  font-size: 1.5em;
  letter-spacing: -0.2px;
  line-height: 1.3636363636em;
  margin-left: auto;
  margin-right: auto;
  max-width: 540px;
  text-align: center;
  }
  .about-sample {
  position: relative;
  width:450px;
  overflow:hidden;
  display:block;
  margin: 20px auto;
  }
  .function_title {
  font-size: 1em;
  }
}
@media ( max-width: 767px ) {
  .help_section {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      margin-right: 70px;
      margin-left: 20px;
  }
  .logo_section {
    display: flex;
    -webkit-box-align: center;
    margin-left: 20px;
  }
  .home_title {
  color: white; 
  font-size:5rem;
  -webkit-font-smoothing: antialiased; 
  text-align:center; 
  font-family: 'Gotham'; 
  font-weight:700;
  }
  .home_subtitle {
  color: white; 
  font-size:1.5rem; 
  text-align: center;
  }
  .about-intro_title {
  font-weight: 800;
  color: #17181a;
  font-size: 2em;
  letter-spacing: -1px;
  line-height: 1;
  margin: 0;
  text-align: center;
  }
  .about-intro_subtitle {
  font-weight: bold;
  color: #17181a;
  font-size: 1em;
  letter-spacing: -0.2px;
  line-height: 1.3636363636em;
  margin-left: auto;
  margin-right: auto;
  max-width: 540px;
  text-align: center;
  }
  .about-sample {
  position: relative;
  width:250px;
  overflow:hidden;
  display:block;
  margin: 20px auto;
  }
  .introduction-section_function {
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    align-items: stretch;
    flex-flow: column nowrap;
  }
  .introduction-section_container {
    max-width: none;
    padding: 40px 10px 20px;
  
  }
  .function_image {
    max-width: 80px;
    max-height: 80px;
    object-fit: cover;
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
